using System;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using sKul.API.Data;
using sKul.API.Dtos;
using sKul.API.Helper;
using sKul.API.Models;

namespace sKul.API.Controllers {
    [ApiController]
    [Route ("api/[controller]")]
    [Authorize (Roles = "Admin")]
    public class QuickAdmissionController : ControllerBase {
        private readonly ISkulRepository _repo;
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private IWebHostEnvironment _hostingEnvironment;
        public QuickAdmissionController (ISkulRepository repo, DataContext context, IMapper mapper, IWebHostEnvironment hostingEnvironment) {
            _repo = repo;
            _mapper = mapper;
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        public async Task<IActionResult> getLevel () {
            var classLevel = await _repo.GetLevel ();
            return Ok (classLevel);
        }

        [HttpGet ("{id}")]
        public async Task<IActionResult> getClass (int id) {
            var classes = await _repo.GetClasses (id);
            return Ok (classes);
        }
         [HttpGet ("AllClasses")]
        public async Task<IActionResult> getClasses () {
            var classes = await _repo.GetAllClasses();
            return Ok (classes);
        }

        [HttpGet ("Sec/{classes}")]
        public async Task<IActionResult> getSec (string classes) {
            var classess = await _repo.GetSection (classes);
            return Ok (classess);
        }

        [HttpGet ("{id}/EduStudent")]
        public async Task<IActionResult> getEduStudent (string id) {
            var eduStudent = await _repo.getEduStuById (id);
            if (eduStudent == null) {
                StuEduDetails rr = new StuEduDetails ();
                return Ok (rr);
            }
            return Ok (eduStudent);
        }

        [HttpGet ("AllQuickAdmission/{sessionId}")]
        public async Task<IActionResult> getStuQuickAdmission ([FromQuery] StudentParams stuParams, int sessionId) {
            if (stuParams.Gender != "undefined") {
                if (string.IsNullOrEmpty (stuParams.Gender)) {
                    stuParams.Gender = stuParams.Gender == "male" ? "female" : "male";
                }
            }

            var quickAdmission = await _repo.AllStudentForAdmission (stuParams, sessionId);
            Response.AddPagination (quickAdmission.CurrentPage, quickAdmission.PageSize, quickAdmission.TotalCount, quickAdmission.TotalPages);
            return Ok (quickAdmission);
        }

        [HttpGet ("QuickStudent/{id}")]
        public async Task<IActionResult> getQuickStu (string id) {
            var quickStu = await _repo.getQuickStuByIds (id);

            return Ok (quickStu);
        }

        [HttpGet ("last")]
        public IActionResult getlastId () {
            var lastNo = _context.quickAdmission.OrderByDescending (c => c.Id)
                .Take (1).SingleOrDefault ();
            var userToCreate = _mapper.Map<LastAdmissionIdDtos> (lastNo);
            return Ok (userToCreate);
        }

        // QuickAdmission Register Method
        [HttpPost ("register")]
        public async Task<IActionResult> Register ([FromBody] QuickAdmission admissionForRegister) {
            if (await _repo.StudentExist (admissionForRegister.rollNo))
                ModelState.AddModelError ("Stu", "Student already exists");

            // validate request
            if (!ModelState.IsValid)
                return BadRequest (ModelState);

            admissionForRegister.IsActive = true;
             Guid obj = Guid.NewGuid();
            admissionForRegister.UserId=obj.ToString();
            admissionForRegister.SessionId = Convert.ToInt32 (_repo.getActiveSession ().Result.Id);
            var userTocreate = await _repo.QuickAdmision (admissionForRegister);
            var userToReturn = userTocreate;

            Attendance stuAttendance = new Attendance {
                RollNo = admissionForRegister.rollNo,
                Name = admissionForRegister.firstName + ' ' + admissionForRegister.lastName,
                Status = "Present",
                classes = admissionForRegister.standers,
                section = admissionForRegister.classsection,
                markingDate = null,
                SessionId = Convert.ToInt32 (_repo.getActiveSession ().Result.Id)
            };
            var attendanceStu = await _repo.Attendance (stuAttendance);

            return Ok (200);
        }

        //QuickAdmission Register EduDetails Method 
        [HttpPut ("{id}/EduRegister")]
        public async Task<IActionResult> EduRegister (int id, StuEduDetails admissionForEduRegister) {
            if (await _repo.StudentEduExist (admissionForEduRegister.stuId)) {
                _context.stuEduDetails.Update (admissionForEduRegister);
                if (await _repo.SaveAll ())
                    return NoContent ();
            }
            // validate request
            if (!ModelState.IsValid)
                return BadRequest (ModelState);

            var createUser = await _repo.stuEduDetails (admissionForEduRegister);
            var userToReturn = createUser;

            return Ok (200);
        }

        //Update Quick Admission Details 
        [HttpPut ("{id}")]
        public async Task<IActionResult> updateAdmission (int id, [FromBody] QuickAdmissionUpdateDtos admissionforUpdate) {
            if (!ModelState.IsValid)
                return BadRequest (ModelState);

            var user = await _repo.getQuickStuById (id);
            if (user == null)
                return NotFound ($"Could not find Student with id of {id}");

            _mapper.Map (admissionforUpdate, user);
            if (await _repo.SaveAll ())
                return NoContent ();

            throw new Exception ($"Updating user with id {id} failed");
        }

        [HttpPost ("{id}/Upload"), DisableRequestSizeLimit]
        public async Task<IActionResult> Upload (string id) {
            try {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine ("Resources", "Images");
                var pathToSave = Path.Combine (Directory.GetCurrentDirectory (), folderName);

                if (file.Length > 0) {
                    var fileName = ContentDispositionHeaderValue.Parse (file.ContentDisposition).FileName.Trim ('"');
                    var fullPath = Path.Combine (pathToSave, fileName);
                    var dbPath = Path.Combine (folderName, fileName);

                    using (var stream = new FileStream (fullPath, FileMode.Create)) {
                        file.CopyTo (stream);
                    }

                    StudentPhotos pp = new StudentPhotos () {
                        stuId = id,
                        url = fileName
                    };

                    await _context.stuPhotos.AddAsync (pp);
                    await _context.SaveChangesAsync ();
                    return Ok (200);
                }
                return NoContent ();
            } catch (Exception ex) {
                return StatusCode (500, ex.Message);
            }
        }

    }
}