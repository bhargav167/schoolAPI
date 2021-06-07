using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using sKul.API.Helper;
using sKul.API.Models;
using sKul.API.Models.AcadmicModel;

namespace sKul.API.Data {
    public interface ISkulRepository {
        void Add<T> (T entity) where T : class;
        void Delete<T> (T entity) where T : class;
        Task<bool> SaveAll ();
        Task<QuickAdmission> QuickAdmision (QuickAdmission students);
        Task<Classes> RegisterClasses (Classes classes);
        Task<SubjectGroup> RegisterSubGroup (SubjectGroup subGroup);
        Task<IEnumerable<SubjectGroup>> GetSubGroups (); 
         Task<SubjectGroup> GetSubGroupByid (int id);
        Task<int> AllStudentCount (int sessionId);
         Task<int> AllTeacherCount (int sessionId);
        Task<int> TodayAdmissionCount (DateTime admissionDate);
        Task<float> TodayPresentStudent (string todayDate);
        Task<Employee> EmpRegister (Employee employee);
        Task<Attendance> Attendance (Attendance stuAttendance);
        Task<FeeParticular> FeeParticular (FeeParticular feeParticular);
        Task<Section> AddSection (Section section);
        Task<SubjectMaster> AddSubject (SubjectMaster section);
        Task<IEnumerable<FeeParticular>> StuFeeStatus (int StudentId);
        Task<StuEduDetails> stuEduDetails (StuEduDetails EdustudentsDetails);
        Task<StudentPhotos> stuPhotos (StudentPhotos studentsPhotos);

        Task<bool> TimeTableExist (string classes, string sec, int subjectId, int teacherId, string weekday);
        Task<bool> FeeTermExist (int Id);
        Task<bool> SubjectExist (string sub);
        Task<bool> SessionExist (string sessionName);
        Task<bool> SessionIdExist (int id);
        Task<bool> StudentExist (string rollNo);
        Task<bool> EmpExist (int EmpId);
        Task<bool> UserExist (string UserId);
        Task<bool> StudentEduExist (string stuId);
        Task<bool> FeeParticularExist (int feeId);
        Task<bool> PaidStuExist (int stuId);
        Task<bool> SectionExist (string sec);
        Task<bool> ClassExist (string classes);
        Task<IEnumerable<ClassLevel>> GetLevel ();
        Task<IEnumerable<Section>> GetSection ();
        Task<IEnumerable<Classes>> GetClassWithSection ();
        Task<IEnumerable<SubjectMaster>> GetSubject ();
        Task<IEnumerable<Employee>> GetTeacher ();
        Task<Section> GetSectionById (int id);
        Task<SubjectMaster> GetSubjectById (int id);
        Task<TimeTableMaster> GetTimetableId (int id);
        Task<IEnumerable<Classes>> GetClasses (int id);
        Task<IEnumerable<Classes>> GetAllClasses ();
        Task<IEnumerable<TimeTableMaster>> GetTimetable (string classes, string sec, string weekday);
        Task<IEnumerable<TimeTableMaster>> GetTimetableForStu (string classes, string sec);
        Task<Classes> GetSection (string classes);
        Task<Classes> GetClassesDetailsById (int id);
        Task<IEnumerable<QuickAdmission>> GetStuByClasses (string stander, string sec);
        Task<IEnumerable<Attendance>> GetStuAttendance (string stander, string sec, string rollNo);
        Task<IEnumerable<Attendance>> GetAttendance (string stander, string sec, string date);
        Task<PageList<QuickAdmission>> AllStudentForAdmission (StudentParams stuParams, int sessionId);
        Task<PageList<Employee>> AllEmployeeForRegistration (StudentParams stuParams, int sessionId);
        Task<QuickAdmission> getQuickStuById (int id);

        //OnlyFor Photo
        Task<QuickAdmission> getQuickStuByIds (string id);
        Task<IEnumerable<Sessions>> getSession ();
        Task<Sessions> getActiveSession ();
        Task<Sessions> getSessionById (int id);
        Task<QuickAdmission> getQuickStuByUserId (string userId);
        Task<QuickAdmission> getQuickStuByAdmissionNo (string AdmissionNo);
        Task<Employee> getEmpById (int EmpId);
        Task<IEnumerable<FeeParticular>> getFeeStatus (int stuId);
        Task<IEnumerable<FeeParticular>> getFeeStatusByClass (int stuId, string Classes, string sec);
        Task<StuEduDetails> getEduStuById (string id);
        Task<FeeParticular> getFeeparticularId (int id);
        Task<FeeParticular> getLastId ();
        Task<IEnumerable<FeeParticular>> GetFeeTypesbyClass (string classes, int? stuId);

    }
}