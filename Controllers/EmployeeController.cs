using System;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using sKul.API.Data;
using sKul.API.Dtos;
using sKul.API.Helper;
using sKul.API.Models;

namespace sKul.API.Controllers
{
    [ApiController]
    [Authorize(Roles = "Admin")]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly ISkulRepository _repo;
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private IWebHostEnvironment _hostingEnvironment;
        public EmployeeController(ISkulRepository repo, DataContext context, IMapper mapper, IWebHostEnvironment hostingEnvironment)
        {
            _repo = repo;
            _mapper = mapper;
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }
        //Get All Employee List By Id
        [HttpGet("AllEmpRegistration/{sessionId}")] 
        public async Task<IActionResult> getStuQuickAdmission([FromQuery]StudentParams stuParams,int sessionId)
        {
            if (stuParams.Gender != "undefined")
            {
                if (string.IsNullOrEmpty(stuParams.Gender))
                {
                    stuParams.Gender = stuParams.Gender == "male" ? "female" : "male";
                }
            }
             
            var quickAdmission = await _repo.AllEmployeeForRegistration(stuParams,sessionId);
            Response.AddPagination(quickAdmission.CurrentPage, quickAdmission.PageSize, quickAdmission.TotalCount, quickAdmission.TotalPages);
            return Ok(quickAdmission);
        }

        [HttpGet("AllEmpRegistration")] 
        public async Task<IActionResult> getTeacher()
        { 
            var quickAdmission = await _repo.GetTeacher(); 
            return Ok(quickAdmission);
        }


        [HttpGet("last")]
        public IActionResult getlastId()
        {
            var lastNo = _context.employees.OrderByDescending(c => c.RegistrationNo)
              .Take(1).SingleOrDefault();
            var userToCreate = _mapper.Map<LastEmpIdDtos>(lastNo);
            return Ok(userToCreate);
        }

        [HttpGet("EmpIds/{id}")]
        public async Task<IActionResult> getEmp(int id)
        {
            var quickStu = await _repo.getEmpById(id); 
            return Ok(quickStu);
        }
         // QuickAdmission Register Method
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]Employee empForRegister)
        { 
            if (await _repo.EmpExist(empForRegister.EmpId))
                ModelState.AddModelError("Employee", "Employee already exists");

           // validate request
            if (!ModelState.IsValid)
                return BadRequest(ModelState); 
            empForRegister.IsActive = true;
              empForRegister.SessionId= Convert.ToInt32(_repo.getActiveSession().Result.Id);
            var createUser = await _repo.EmpRegister(empForRegister);
            var userToReturn=createUser; 

            return Ok(200);
        }

        //Update Quick Admission Details 
        [HttpPut("{empId}")]
        public async Task<IActionResult> updateAdmission(int empId, [FromBody]EmployeeDtos empforUpdate)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await _repo.getEmpById(empId);
            if (user == null)
                return NotFound($"Could not find Employee with id of {empId}");

            _mapper.Map(empforUpdate, user);
            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating user with id {empId} failed");
        }

          [HttpPost ("{id}/Upload"), DisableRequestSizeLimit]
        public async Task<IActionResult> Upload (int id) {
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

                    EmployeePhotos pp = new EmployeePhotos () {
                        empId = id,
                        url = fileName
                    };

                    await _context.employeePhoto.AddAsync (pp);
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