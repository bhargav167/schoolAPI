using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using sKul.API.Data.AcadmicRepo;
using sKul.API.Models.AcadmicModel;

namespace sKul.API.Controllers.AcadmicController {
    [ApiController]
    [Route ("api/[controller]")]
    public class AssignClassTeacherController : ControllerBase {
        private readonly IAcadmicRepository _repo;
        public AssignClassTeacherController (IAcadmicRepository repo) {
            _repo = repo;
        }

        //Get All AssignClassTeacher
        [HttpGet ("AllClassTeacher/{sessionId}")]
        public async Task<IActionResult> getAllClassTeacher (int sessionId) {
            var classTeacher = await _repo.AllClassTeacher (sessionId);
            return Ok (classTeacher);
        }

        // Post ClassTeacher Register Method
        [HttpPost ("register")]
        public async Task<IActionResult> Register (ClassTeacher classteacher) {
            if (await _repo.AcadmicTeacherExist (classteacher.classe, classteacher.Section, classteacher.TeacherId, classteacher.sessionId))
                ModelState.AddModelError ("ClassTeacher", "Class Teacher already exists");

            // validate request
            if (!ModelState.IsValid)
                return BadRequest (ModelState);

            classteacher.sessionId = _repo.getActiveSession ().Result.Id;
            var createUser = await _repo.AssignClassTeacher (classteacher);

            return Ok (200);
        }

        [HttpDelete ("{id}")]
        public async Task<IActionResult> deleteClassMaster (int id) {
            if (!ModelState.IsValid)
                return BadRequest (ModelState);

            var classTeacherdata = await _repo.getClassTeacherById (id);
            if (classTeacherdata == null)
                return NotFound ($"Could not find Class Teacher with id of {id}");

            _repo.Delete (classTeacherdata);
            await _repo.SaveAll ();
            return NoContent ();

            throw new System.Exception ($"Updating Class Teacher with id {id} failed");
        }

    }
}