using System;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using sKul.API.Data;

namespace sKul.API.Controllers {
    [ApiController]
    [Authorize (Roles = "Admin")]
    [Route ("api/[controller]")]
    public class DashBoardAdminController : ControllerBase {
        private readonly ISkulRepository _repo;
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private IWebHostEnvironment _hostingEnvironment;
        public DashBoardAdminController (ISkulRepository repo, DataContext context, IMapper mapper, IWebHostEnvironment hostingEnvironment) {
            _repo = repo;
            _mapper = mapper;
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet ("AllStudentCount/{sessionId}")]
        public async Task<IActionResult> getStuQuickAdmission (int sessionId) {
            var totalStudentCount = await _repo.AllStudentCount (sessionId);
            return Ok (totalStudentCount);
        }

        [HttpGet ("TodayAdmissionCount")]
        public async Task<IActionResult> getTodayAdmission () {
            var todayAdmissionCount = await _repo.TodayAdmissionCount (Convert.ToDateTime (DateTime.Today.ToShortDateString ()));
            return Ok (todayAdmissionCount);
        }

        [HttpGet ("TodayPresentStudent")]
        public async Task<IActionResult> getTodayPresentStudent () {
            var todayAdmissionCount = await _repo.TodayPresentStudent (DateTime.Now.ToString("dd-M-yyyy"));
            return Ok (todayAdmissionCount);
        }

        [HttpGet ("TotalTeacher/{sessionId}")]
        public async Task<IActionResult> getTotalteacher (int sessionId) {
            var todayAdmissionCount = await _repo.AllTeacherCount (sessionId);
            return Ok (todayAdmissionCount);
        }

        [HttpPost ("Active/{id}")]
        public async Task<IActionResult> ActivateSession (int id) {
            // validate request 
            if (!ModelState.IsValid)
                return BadRequest (ModelState);

            var ActivateSession = await _context.Session.FindAsync (id);
            if (ActivateSession == null)
                return NoContent ();

            var ActiveSession = _context.Session.Where (c => c.IsActive == true).FirstOrDefault ();

            ActiveSession.IsActive = false;
            _context.Session.Update (ActiveSession);

            ActivateSession.IsActive = true;
            _context.Session.Update (ActivateSession);
            await _context.SaveChangesAsync ();
            return Ok (201);
        }
    }
}