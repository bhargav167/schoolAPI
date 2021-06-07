using System;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sKul.API.Data;
using sKul.API.Data.AcadmicRepo;
using sKul.API.Models.Homework;

namespace sKul.API.Controllers.AcadmicController {
    [ApiController]
    [Route ("api/[controller]")]
    public class HomeworkController : ControllerBase {
        private readonly IAcadmicRepository _repo;
        private readonly DataContext _context;
        public HomeworkController (IAcadmicRepository repo, DataContext context) {
            _repo = repo;
            _context = context;
        }
        //Get All SubjectBasedOnSection
        [HttpGet ("AllSub/{classes}/{sec}")]
        public async Task<IActionResult> getAllSub (string classes, string sec) {
            var sub = await _repo.GetSubGroups (classes, sec);
            return Ok (sub);
        }
        //Get HomeworkById
        [HttpGet ("HomeworkById/{id}")]
        public async Task<IActionResult> getHomeworkById (int id) {
            var work = await _repo.GetHomeworkById (id);
            if (work == null)
                return NoContent ();

            return Ok (work);
        }

        //Get All Homework
        [HttpGet ("AllHomework/{classes}/{sec}/{subject}")]
        public async Task<IActionResult> getAllHomework (string classes, string sec, string subject) {
            var work = await _repo.GetHomeworkList (classes, sec, subject);
            if (work == null)
                return NoContent ();

            return Ok (work);
        }

        // QuickAdmission Register Method
        [HttpPost ("registerhomework")]
        public async Task<IActionResult> Register ([FromBody] Homework homework) {
            // validate request
            if (!ModelState.IsValid)
                return BadRequest (ModelState);
            if (homework.Id == 0) {
                await _repo.RegisterHomework (homework);
                return Ok (200);
            } else {
                var homeworkToUpdate = await _context.homeworks.Where (x => x.Id == homework.Id).FirstOrDefaultAsync ();
                homeworkToUpdate.ClassGroup = homework.ClassGroup;
                homeworkToUpdate.Classes = homework.Classes;
                homeworkToUpdate.Section = homework.Section;
                homeworkToUpdate.Subject = homework.Subject;
                homeworkToUpdate.Description = homework.Description;
                homeworkToUpdate.AttachDocxname = homework.AttachDocxname;

                _context.Update (homeworkToUpdate);
                await _context.SaveChangesAsync ();
                return Ok (200);
            }
        }

        [HttpPost ("Upload"), DisableRequestSizeLimit]
        public async Task<IActionResult> Upload () {
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

                    return Ok (200);
                }
                return NoContent ();
            } catch (Exception ex) {
                return StatusCode (500, ex.Message);
            }
        }

        [HttpDelete ("{id}")]
        public async Task<IActionResult> deleteHomework (int id) {
            if (!ModelState.IsValid)
                return BadRequest (ModelState);

            var classhomeworkdata = await _repo.GetHomeworkById (id);
            if (classhomeworkdata == null)
                return NotFound ($"Could not find homework with id of {id}");

            _repo.Delete (classhomeworkdata);
            await _repo.SaveAll ();
            return NoContent ();

            throw new System.Exception ($"Updating homework with id {id} failed");
        }
    }

}