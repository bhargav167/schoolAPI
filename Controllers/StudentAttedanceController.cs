using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using sKul.API.Data;

namespace sKul.API.Controllers
{
    [ApiController]
    [Authorize(Roles = "Admin")]
    [Route("api/[controller]")]
    public class StudentAttedanceController:ControllerBase
    {
           private readonly ISkulRepository _repo;
        private readonly DataContext _context;
        private readonly IMapper _mapper;
         private IWebHostEnvironment _hostingEnvironment;

        public StudentAttedanceController(ISkulRepository repo, DataContext context, IMapper mapper, IWebHostEnvironment hostingEnvironment)
        {
            _repo = repo;
            _mapper = mapper;
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }

         [HttpGet("StuAttendance/{UserId}")]
        public async Task<IActionResult> getStuDetails(string UserId)
        { 
            var StudentDetails= await _repo.getQuickStuByUserId(UserId);
            return Ok(StudentDetails);
        } 

        [HttpGet("StuAttendance/{rollno}")]
        public async Task<IActionResult> getStuAttendance(string classes,string sec,string rollno)
        { 
            var Attendance= await _repo.GetStuAttendance(classes,sec,rollno);
            return Ok(Attendance);
        } 
    }
}