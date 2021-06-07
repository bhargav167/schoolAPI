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
    [Authorize(Roles = "Admin,Student")]
    [Route("api/[controller]")]
    public class SessionController:ControllerBase
    {
        private readonly ISkulRepository _repo; 
          private readonly DataContext _context;
        public SessionController(ISkulRepository repo, DataContext context)
        {
            _repo = repo;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> getSession()
        {
            var session = await _repo.getSession();
            return Ok(session);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> getSessionbyid(int id)
        {
            var session = await _repo.getSessionById(id);
            return Ok(session);
        }

         [HttpGet("ActiveSession")]
        public async Task<IActionResult> getActiveSession()
        {
            var session = await _repo.getActiveSession();
            return Ok(session);
        }

        [HttpPost("AddSession")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddSession([FromBody]Sessions session)
        {
            if (await _repo.SessionExist(session.Session))
             throw new System.Exception($"Error");
                
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _context.Session.AddAsync(session);
            await _context.SaveChangesAsync();
            return Ok(201);

        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> updateSession(int id,[FromBody]Sessions session)
        {
            if(!ModelState.IsValid)
            return BadRequest(ModelState);
            
             var sessiondata = await _repo.getSessionById(id);
             if(sessiondata==null)
             return NotFound($"Could not find Session with id of {id}");

            sessiondata.Session=session.Session;

            _context.Session.Update(sessiondata);
            _context.SaveChanges();
            return NoContent();

             throw new System.Exception($"Updating Session with id {id} failed");
        }

          [HttpDelete("{id}")]
            [Authorize(Roles = "Admin")]
        public async Task<IActionResult> deleteSession(int id)
        {
            if(!ModelState.IsValid)
            return BadRequest(ModelState);
            
             var sessiondata = await _repo.getSessionById(id);
             if(sessiondata==null)
             return NotFound($"Could not find Session with id of {id}");

            _repo.Delete(sessiondata);
            await _repo.SaveAll();
            return NoContent();

             throw new System.Exception($"Updating Session with id {id} failed");
        }

    }
}