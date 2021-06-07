using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using sKul.API.Data;
using sKul.API.Models;

namespace sKul.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin")]
    public class SectionController:ControllerBase
    { 
        private readonly ISkulRepository _repo;
        private readonly DataContext _context; 
        public SectionController(ISkulRepository repo, DataContext context)
        {
             _repo = repo;
             _context = context;
        }

         [HttpGet]
        public async Task<IActionResult> getSection()
        {
            var section = await _repo.GetSection();
            return Ok(section);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> getSectionbyid(int id)
        {
            var session = await _repo.GetSectionById(id);
            return Ok(session);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(Section sec)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (await _repo.SectionExist(sec.section))
                 throw new System.Exception($"Error");

            try
            {
                var user = await _repo.AddSection(sec);
                return Ok(user);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> updateSection(int id,[FromBody]Section section)
        {
            if(!ModelState.IsValid)
            return BadRequest(ModelState);
            
             var sessiondata = await _repo.GetSectionById(id);
             if(sessiondata==null)
             return NotFound($"Could not find Session with id of {id}");

            sessiondata.section=section.section;

            _context.Section.Update(sessiondata);
            _context.SaveChanges();
            return NoContent();

             throw new System.Exception($"Updating Section with id {id} failed");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> deleteSection(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var sectiondata = await _repo.GetSectionById(id);
            if (sectiondata == null)
                return NotFound($"Could not find Section with id of {id}");

            _repo.Delete(sectiondata);
            await _repo.SaveAll();
            return NoContent();

            throw new System.Exception($"Updating Section with id {id} failed");
        }
    
    }
}