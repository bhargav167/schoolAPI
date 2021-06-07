using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using sKul.API.Data;
using sKul.API.Models;
using sKul.API.Models.AcadmicModel;

namespace sKul.API.Controllers {
    [ApiController]
    [Route ("api/[controller]")]
    [Authorize (Roles = "Admin")]
    public class ClassesMasterController : ControllerBase {
        private readonly ISkulRepository _repo;
        private readonly DataContext _context;
        public ClassesMasterController (ISkulRepository repo, DataContext context) {
            _repo = repo;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> getClassWithSec () {
            var classes = await _repo.GetClassWithSection ();
            return Ok (classes);
        }

        [HttpGet ("{id}")]
        public async Task<IActionResult> getClassDetailsbyid (int id) {
            var classes = await _repo.GetClassesDetailsById (id);
            return Ok (classes);
        }

        [HttpPut ("{id}")]
        public async Task<IActionResult> updateClasses (int id, [FromBody] Classes section) {
            if (!ModelState.IsValid)
                return BadRequest (ModelState);

            var sessiondata = await _repo.GetClassesDetailsById (id);
            if (sessiondata == null)
                return NotFound ($"Could not find Session with id of {id}");

            sessiondata.classes = section.classes;
            sessiondata.sections = section.sections;

            _context.classes.Update (sessiondata);
            _context.SaveChanges ();
            return NoContent ();

            throw new System.Exception ($"Updating Section with id {id} failed");
        }

        [HttpDelete ("{id}")]
        [Authorize (Roles = "Admin")]
        public async Task<IActionResult> deleteClass (int id) {
            if (!ModelState.IsValid)
                return BadRequest (ModelState);

            var sessiondata = await _repo.GetClassesDetailsById (id);
            if (sessiondata == null)
                return NotFound ($"Could not find Class with id of {id}");

            _repo.Delete (sessiondata);
            await _repo.SaveAll ();
            return NoContent ();

            throw new System.Exception ($"Updating Class with id {id} failed");
        }

        [HttpPost ("register")]
        public async Task<IActionResult> Register (Classes classes) {
            if (!ModelState.IsValid)
                return BadRequest (ModelState);

            if (await _repo.ClassExist (classes.classes))
                throw new System.Exception ($"Error");
            try {
                var user = await _repo.RegisterClasses (classes);
                return Ok (user);
            } catch (Exception ex) {
                throw ex;
            }
        }

        // Add SubjectGroup
        [HttpPost ("AddSubGroupr")]
        public async Task<IActionResult> RegisterSubGroup (SubjectGroup subGroup) {
            if (!ModelState.IsValid)
                return BadRequest (ModelState);

            if (subGroup.Id != 0) {
                try {
                    var user = await _repo.GetSubGroupByid (subGroup.Id);
                    user.Classes = subGroup.Classes;
                    user.Section = subGroup.Section;
                    user.Subject = subGroup.Subject;
                    user.SubjectName = subGroup.SubjectName;

                    _context.Update (user);
                    await _context.SaveChangesAsync ();
                } catch (Exception ex) {
                    throw ex;
                }
            } else {
                try {
                    var user = await _repo.RegisterSubGroup (subGroup);
                    return Ok (user);
                } catch (Exception ex) {
                    throw ex;
                }
            }
            // if (await _repo.ClassExist(classes.classes))
            //      throw new System.Exception($"Error"); 
            return Ok (201);
        }
        // Add SubjectGroup
        [HttpDelete ("DelSubGroupr/{id}")]
        public async Task<IActionResult> DeleteSubGroup (int id) {
            var subGroup = await _repo.GetSubGroupByid (id);
            if (subGroup == null)
                return NotFound ();

            _repo.Delete (subGroup);
            await _repo.SaveAll ();
            return Ok (201);
        }

        //Get SubjectGroup
        [HttpGet ("AllSubGroup")]
        public async Task<IActionResult> getSubgroup () {
            var subGroup = await _repo.GetSubGroups ();
            return Ok (subGroup);
        }
    }
}