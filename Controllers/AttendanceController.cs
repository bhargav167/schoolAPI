using System;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using sKul.API.Data;
using sKul.API.Dtos;
using sKul.API.Helper;
using sKul.API.Models;
using System.IO;
using System.Net.Http.Headers;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;

namespace sKul.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AttendanceController:ControllerBase
    {
        private readonly ISkulRepository _repo;
        private readonly DataContext _context;
        private readonly IMapper _mapper;
         private IWebHostEnvironment _hostingEnvironment;
         private  List<Attendance> updateItem;
         private int InitialCount=0;
        public AttendanceController(ISkulRepository repo, DataContext context,IMapper mapper,IWebHostEnvironment hostingEnvironment)
        {
            _repo = repo;
            _mapper = mapper;
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }  
    
        [HttpGet("{classes}/{sec}/{date}")]
           [Authorize(Roles = "Admin")]
        public async Task<IActionResult> getAttendance(string classes,string sec,string date)
        { 
            var Attendance= await _repo.GetAttendance(classes,sec,date); 
            return Ok(Attendance);
        }

         [HttpGet("StuAttendance/{classes}/{sec}/{rollno}")]
        public async Task<IActionResult> getStuAttendance(string classes,string sec,string rollno)
        { 
            var Attendance= await _repo.GetStuAttendance(classes,sec,rollno);
            return Ok(Attendance);
        } 
       
        // QuickAdmission Register Method
        [HttpPost("Mark")]
           [Authorize(Roles = "Admin")]
        public async Task<IActionResult> MarkAttendance([FromBody]Attendance[] attendances) 
        {  
            // validate request 
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            foreach (var item in attendances)
            {
                if (InitialCount == 0)
                {
                    InitialCount++;
                    updateItem = _context.attendances
                    .Where(c => c.classes == item.classes && c.section == item.section && c.markingDate == item.markingDate).ToList();
                }

                if (updateItem.Count() == 0)
                {
                    item.Id = 0; 
                    item.SessionId=Convert.ToInt32(_repo.getActiveSession().Result.Id);
                    await _context.attendances.AddAsync(item);
                    await _context.SaveChangesAsync();
                } else{

                    for (int i = 0; i < updateItem.Count(); i++)
                    { 
                        updateItem[i].Status = attendances[i].Status;
                        updateItem[i].Subject = attendances[i].Status;
                        updateItem[i].CategoryColor = attendances[i].CategoryColor;
                        _context.attendances.Update(updateItem[i]);
                        await _repo.SaveAll(); 
                    }

                }
            } 
              return Ok(200);
        } 
     }
}