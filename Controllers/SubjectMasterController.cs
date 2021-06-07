using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using sKul.API.Data;
using sKul.API.Models.AcadmicModel;

namespace sKul.API.Controllers
{
     [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin")]
    public class SubjectMasterController:ControllerBase
    {
         private readonly ISkulRepository _repo;
        private readonly DataContext _context; 
        public SubjectMasterController(ISkulRepository repo, DataContext context)
        {
             _repo = repo;
             _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> getSubjects()
        {
            var subs = await _repo.GetSubject();
            return Ok(subs);
        }
         [HttpGet("{id}")]
        public async Task<IActionResult> getSubjectbyid(int id)
        {
            var subject = await _repo.GetSubjectById(id);
            return Ok(subject);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(SubjectMaster subs)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState); 

            if (await _repo.SubjectExist(subs.Subject))
                 throw new System.Exception($"Error"); 

            try
            {
                var user = await _repo.AddSubject(subs);
                return Ok(user);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> updateSubject(int id, [FromBody] SubjectMaster subject)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var sessiondata = await _repo.GetSubjectById(id);
            if (sessiondata == null)
                return NotFound($"Could not find Session with id of {id}");

            sessiondata.Subject = subject.Subject;
            sessiondata.codeId = subject.codeId;
            sessiondata.Types = subject.Types;

            _context.Subject.Update(sessiondata);
            _context.SaveChanges();
            return NoContent();

            throw new System.Exception($"Updating Section with id {id} failed");
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> deleteSubject(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var sectiondata = await _repo.GetSubjectById(id);
            if (sectiondata == null)
                return NotFound($"Could not find Section with id of {id}");

            _repo.Delete(sectiondata);
            await _repo.SaveAll();
            return NoContent();

            throw new System.Exception($"Deleting Subject with id {id} failed");
        }
    
    }
}