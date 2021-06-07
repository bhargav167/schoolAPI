using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using sKul.API.Models;
using sKul.API.Models.AcadmicModel;
using sKul.API.Models.Homework;

namespace sKul.API.Data.AcadmicRepo {
    public class AcadmicRepository : IAcadmicRepository {
        private readonly DataContext _context;
        public AcadmicRepository (DataContext context) {
            _context = context;
        }
        public void Delete<T> (T entity) where T : class {
            _context.Remove (entity);
        }
        public async Task<bool> SaveAll () {
            return await _context.SaveChangesAsync () > 0;
        }
        public async Task<Sessions> getActiveSession () {
            var activeSessionId = await _context.Session.FirstOrDefaultAsync (c => c.IsActive == true);
            return activeSessionId;
        }
        public async Task<ClassTeacher> AssignClassTeacher (ClassTeacher classteacher) {
            await _context.classTeacher.AddAsync (classteacher);
            await _context.SaveChangesAsync ();

            return classteacher;
        }

        public async Task<bool> AcadmicTeacherExist (string classes, string section, int TeacherId, int sessionId) {
            if (await _context.classTeacher.AnyAsync (e => e.sessionId == sessionId &&
                    e.classe == classes && e.Section == section || e.TeacherId == TeacherId))
                return true;

            return false;
        }

        public async Task<IEnumerable<ClassTeacher>> AllClassTeacher (int sessionId) {
            var classTeacher = await _context.classTeacher.Where (c => c.sessionId == sessionId).ToListAsync ();
            return classTeacher;
        }

        public async Task<ClassTeacher> getClassTeacherById (int id) {
            var classteacher = await _context.classTeacher.FindAsync (id);
            return classteacher;
        }

        //Homework
        public async Task<IEnumerable<SubjectGroup>> GetSubGroups (string classes, string sec) {
            var subject = await _context.subjectGroups.Where (c => c.Classes == classes && c.Section.Contains (sec)).ToListAsync ();

            return subject;
        }

        public async Task<Homework> RegisterHomework (Homework homework) {
            await _context.homeworks.AddAsync (homework);
            await _context.SaveChangesAsync ();
            return homework;
        }

        public async Task<IEnumerable<Homework>> GetHomeworkList (string classes, string sec, string subject) {
            if (classes == "null" && sec == "null" && subject == "null") {
                var homework = await _context.homeworks.ToListAsync ();
                return homework;
            }
            if (classes != "null" && sec == "null" && subject == "null") {
                var homework = await _context.homeworks.Where (c => c.Classes == classes).ToListAsync ();
                return homework;
            }
            if (classes != "null" && sec != "null" && subject == "null") {
                var homework = await _context.homeworks.Where (c => c.Classes == classes && c.Section == sec).ToListAsync ();
                return homework;
            }
            if (classes != "null" && sec != "null" && subject != "null") {
                var homework = await _context.homeworks.Where (c => c.Classes == classes && c.Section == sec && c.Subject == subject).ToListAsync ();
                return homework;
            }
            return null;
        }

        public async Task<Homework> GetHomeworkById (int id) {
            var homework = await _context.homeworks.Where (c => c.Id == id).FirstOrDefaultAsync ();
            return homework;
        }
    }
}