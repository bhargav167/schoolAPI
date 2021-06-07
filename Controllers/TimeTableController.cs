using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using sKul.API.Data;
using sKul.API.Models.AcadmicModel;

namespace sKul.API.Controllers {

    [ApiController]
    [Route ("api/[controller]")]
    public class TimeTableController : ControllerBase {
        private readonly ISkulRepository _repo;
        private readonly DataContext _context;
        public TimeTableController (ISkulRepository repo, DataContext context) {
            _repo = repo;
            _context = context;
        }

        [Authorize (Roles = "Admin")]
        [HttpGet ("{standers}/{sec}/{weekday}")]
        public async Task<IActionResult> getTimetblByClasses (string standers, string sec, string weekday) {
            var subject = await _repo.GetTimetable (standers, sec, weekday);
            return Ok (subject);
        }

        [Authorize (Roles = "Student")]
        [HttpGet ("{standers}/{sec}")]
        public async Task<IActionResult> getTimetblforstu (string standers, string sec) {
            var subject = await _repo.GetTimetableForStu (standers, sec);
            return Ok (subject);
        }

        [Authorize (Roles = "Admin")]
        [HttpPost ("register")]
        public async Task<IActionResult> Register ([FromBody] TimeTableMaster[] timetable) {
            if (!ModelState.IsValid)
                return BadRequest (ModelState);
            try {
                foreach (var item in timetable) {
                    if (await _repo.TimeTableExist (item.Classes, item.Sec, item.subjectsId, item.teachersId, item.WeekDay))
                        throw new System.Exception ($"Error");
                }

                await _context.TimeTables.AddRangeAsync (timetable);
                await _context.SaveChangesAsync ();
                return Ok (timetable);
            } catch (Exception ex) {
                throw ex;
            }
        }

        [Authorize (Roles = "Admin")]
        [HttpPut]
        public async Task<IActionResult> updateSubject ([FromBody] TimeTableMaster[] ttmaster) {
            if (!ModelState.IsValid)
                return BadRequest (ModelState);

            foreach (var item in ttmaster) {
                var sessiondata = await _repo.GetTimetableId (item.Id);

                if (sessiondata == null)
                    return NotFound ($"Could not find Session with id of {item.Id}");

                sessiondata.subjectsId = item.subjectsId;
                sessiondata.teachersId = item.teachersId;
                sessiondata.timefrom = item.timefrom;
                sessiondata.timeTo = item.timeTo;
                sessiondata.RoomNo = item.RoomNo;
                _context.TimeTables.Update (sessiondata);
                _context.SaveChanges ();

            }
            return NoContent ();
            throw new System.Exception ($"Updating Section with this failed");
        }

        [Authorize (Roles = "Admin")]
        [HttpDelete ("{id}")]
        public async Task<IActionResult> deleteTimetable (int id) {
            if (!ModelState.IsValid)
                return BadRequest (ModelState);

            var sectiondata = await _repo.GetTimetableId (id);
            if (sectiondata == null)
                return NotFound ($"Could not find Timetable with id of {id}");

            _repo.Delete (sectiondata);
            await _repo.SaveAll ();
            return NoContent ();

            throw new System.Exception ($"Deleating Timetable with id {id} failed");
        }

    }
}