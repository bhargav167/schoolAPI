using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using sKul.API.Data;
using sKul.API.Models;

namespace sKul.API.Controllers
{
    [ApiController]
    [Authorize(Roles = "Student")]
    [Route("api/[controller]")]
    public class StudentDashboardController: ControllerBase
    {
         private readonly ISkulRepository _repo;
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private IWebHostEnvironment _hostingEnvironment;
        public StudentDashboardController(ISkulRepository repo, 
        DataContext context, 
        IMapper mapper, 
        IWebHostEnvironment hostingEnvironment)
        {
            _repo = repo;
            _mapper = mapper;
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet("{UserId}")]
        public async Task<IActionResult> getEduStudent(string UserId)
        {
            var eduStudent = await _repo.getQuickStuByUserId(UserId);
            if (eduStudent == null)
                return NotFound();
           
            return Ok(eduStudent);
        }
        [HttpGet("FeeStatus/{stuId}/{classes}/{sec}")]
        public async Task<IActionResult> getFeeStatus(int stuId, string classes, string sec)
        {
            var feeStatus = await _repo.getFeeStatus(stuId);
            var stuDetail = await _repo.getQuickStuById(stuId);
            if (feeStatus.Count() == 0)
            {
                var feeStausByClass = await _repo.getFeeStatusByClass(0, classes, sec);
                var FeeModuleVms = new StuFeeModuleVM
                {
                    feeParticular = feeStausByClass,
                    quickAdmission = stuDetail
                };
                return Ok(FeeModuleVms);
            }
            var FeeModuleVm = new StuFeeModuleVM
            {
                feeParticular = feeStatus,
                quickAdmission = stuDetail
            };

            return Ok(FeeModuleVm);
        }
    }
}