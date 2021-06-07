using System.Collections.Generic;
using System.Threading.Tasks;
using sKul.API.Models;
using sKul.API.Models.AcadmicModel;
using sKul.API.Models.Homework;

namespace sKul.API.Data.AcadmicRepo {
    public interface IAcadmicRepository {
        void Delete<T> (T entity) where T : class;
        Task<bool> SaveAll ();
        Task<Sessions> getActiveSession ();
        Task<ClassTeacher> getClassTeacherById (int id);
        Task<bool> AcadmicTeacherExist (string classes, string section, int TeacherId, int sessionId);
        Task<IEnumerable<ClassTeacher>> AllClassTeacher (int sessionId);
        Task<ClassTeacher> AssignClassTeacher (ClassTeacher classteacher);

        // Homework
        Task<IEnumerable<SubjectGroup>> GetSubGroups (string classes,string sec);
         Task<IEnumerable<Homework>> GetHomeworkList (string classes,string sec,string subject);
          Task<Homework> GetHomeworkById (int id);
         Task<Homework> RegisterHomework (Homework homework);
    }
}