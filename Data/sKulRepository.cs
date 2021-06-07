using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using sKul.API.Helper;
using sKul.API.Models;
using sKul.API.Models.AcadmicModel;

namespace sKul.API.Data {
    public class sKulRepository : ISkulRepository {
        private readonly DataContext _context;

        public sKulRepository (DataContext context) {
            _context = context;
        }
        public void Add<T> (T entity) where T : class {
            _context.Add (entity);
        }

        public void Delete<T> (T entity) where T : class {
            _context.Remove (entity);
        }
        public async Task<bool> SaveAll () {
            return await _context.SaveChangesAsync () > 0;
        }

        public async Task<IEnumerable<ClassLevel>> GetLevel () {
            var level = await _context.classlevel.ToListAsync ();
            return level;
        }

        public async Task<IEnumerable<Classes>> GetClasses (int id) {
            var classes = await _context.classes.Where (v => v.codeId == id).ToListAsync ();
            return classes;
        }
        public async Task<IEnumerable<Classes>> GetAllClasses () {
            var classes = await _context.classes.ToListAsync ();
            return classes;
        }

        public async Task<bool> StudentExist (string rollNo) {
            if (await _context.quickAdmission.AnyAsync (e => e.rollNo == rollNo))
                return true;

            return false;
        }

        public async Task<bool> StudentEduExist (string stuId) {
            if (await _context.stuEduDetails.AnyAsync (e => e.stuId == stuId))
                return true;

            return false;
        }
        public async Task<bool> SectionExist (string sec) {
            if (await _context.Section.AnyAsync (e => e.section == sec))
                return true;

            return false;
        }

        //Quick Admission Registration
        public async Task<QuickAdmission> QuickAdmision (QuickAdmission students) {
            await _context.quickAdmission.AddAsync (students);
            await _context.SaveChangesAsync ();

            return students;
        }

        //Fee Particular Registration
        public async Task<FeeParticular> FeeParticular (FeeParticular feeParticular) {
            await _context.feeParticular.AddAsync (feeParticular);
            await _context.SaveChangesAsync ();

            return feeParticular;
        }

        public async Task<PageList<QuickAdmission>> AllStudentForAdmission (StudentParams stuParams, int sessionId) {
            var stuQuickAdmission = _context.quickAdmission.Where (c => c.SessionId == sessionId).AsQueryable ();
            if (stuParams.Gender != "undefined") {
                stuQuickAdmission = stuQuickAdmission.Where (u => u.gender == stuParams.Gender);
            }
            if (stuParams.AdmissionNo != "undefined") {
                stuQuickAdmission = stuQuickAdmission.Where (x => x.admissionNo == stuParams.AdmissionNo);
            }

            if (!string.IsNullOrEmpty (stuParams.OrderBy)) {
                switch (stuParams.OrderBy) {
                    case "class":
                        stuQuickAdmission = stuQuickAdmission.OrderByDescending (u => u.standers);
                        break;
                    case "created":
                        stuQuickAdmission = stuQuickAdmission.OrderByDescending (u => u.Created);
                        break;
                    default:
                        break;
                }
            }

            return await PageList<QuickAdmission>.CreateAsync (stuQuickAdmission, stuParams.PageNumber, stuParams.PageSize);
        }

        public async Task<QuickAdmission> getQuickStuById (int id) {
            var quickStudent = await _context.quickAdmission.FirstOrDefaultAsync (u => u.Id == id);
            return quickStudent;
        }
        public async Task<QuickAdmission> getQuickStuByIds (string id) {
            var quickStudent = await _context.quickAdmission.FirstOrDefaultAsync (u => u.UserId == id);
            return quickStudent;
        }

        public async Task<StuEduDetails> stuEduDetails (StuEduDetails EdustudentsDetails) {
            await _context.stuEduDetails.AddAsync (EdustudentsDetails);
            await _context.SaveChangesAsync ();

            return EdustudentsDetails;
        }

        public async Task<StuEduDetails> getEduStuById (string id) {
            var stueduStudent = await _context.stuEduDetails.FirstOrDefaultAsync (u => u.stuId == id);
            return stueduStudent;
        }

        public async Task<StudentPhotos> stuPhotos (StudentPhotos studentsPhotos) {
            await _context.stuPhotos.AddAsync (studentsPhotos);
            await _context.SaveChangesAsync ();

            return studentsPhotos;
        }

        public async Task<IEnumerable<FeeParticular>> GetFeeTypesbyClass (string classes, int? stuId) {
            if (stuId == null) {
                var stueduStudents = await _context.feeParticular.Where (u => u.Stander == classes && u.Term1DueAmt == 0 && u.Term2DueAmt == 0).ToListAsync ();
                return stueduStudents;
            } else {
                var stueduStudent = await _context.feeParticular.Where (u => u.Stander == classes && u.StuId == stuId).ToListAsync ();
                return stueduStudent;
            }

        }

        public async Task<bool> FeeParticularExist (int feeId) {
            if (await _context.feeParticular.AnyAsync (e => e.Id == feeId))
                return true;

            return false;
        }

        public async Task<FeeParticular> getFeeparticularId (int id) {
            var feeparticular = await _context.feeParticular.Where (v => v.Id == id).FirstOrDefaultAsync ();
            return feeparticular;
        }

        public async Task<IEnumerable<QuickAdmission>> GetStuByClasses (string stander, string sec) {
            var feeparticular = await _context.quickAdmission.Where (v => v.standers == stander && v.classsection == sec).ToListAsync ();
            return feeparticular;
        }

        public async Task<FeeParticular> getLastId () {
            var lastId = await _context.feeParticular.OrderByDescending (x => x.Id).Take (1).LastOrDefaultAsync ();
            return lastId;
        }

        public async Task<bool> FeeTermExist (int Id) {
            if (await _context.feeParticular.AnyAsync (e => e.StuId == Id))
                return true;

            return false;
        }

        public async Task<bool> PaidStuExist (int stuId) {
            if (await _context.feeParticular.AnyAsync (e => e.StuId == stuId))
                return true;

            return false;
        }

        public async Task<Employee> EmpRegister (Employee employee) {
            await _context.employees.AddAsync (employee);
            await _context.SaveChangesAsync ();

            return employee;
        }

        public async Task<Attendance> Attendance (Attendance stuAttendance) {
            await _context.attendances.AddAsync (stuAttendance);
            await _context.SaveChangesAsync ();

            return stuAttendance;
        }

        public async Task<bool> EmpExist (int EmpId) {
            if (await _context.employees.AnyAsync (e => e.EmpId == EmpId))
                return true;

            return false;
        }

        public async Task<bool> UserExist (string UserId) {
            if (await _context.Users.AnyAsync (e => e.Id == UserId))
                return true;

            return false;
        }

        public async Task<bool> SessionExist (string sessionName) {
            if (await _context.Session.AnyAsync (e => e.Session == sessionName))
                return true;

            return false;
        }
        public async Task<IEnumerable<Attendance>> GetStuAttendance (string stander, string sec, string rollNo) {
            var stuAttendance = await _context.attendances
                .Where (c => c.classes == stander && c.section == sec && c.RollNo == rollNo).ToListAsync ();
            return stuAttendance;
        }

        public async Task<IEnumerable<Attendance>> GetAttendance (string stander, string sec, string date) {
            var stuAttendance = await _context.attendances
                .Where (c => c.classes == stander && c.section == sec && c.markingDate == null).ToListAsync ();
            return stuAttendance;
        }

        public async Task<PageList<Employee>> AllEmployeeForRegistration (StudentParams stuParams, int sessionId) {
            var stuQuickAdmission = _context.employees.Where (c => c.SessionId == sessionId).AsQueryable ();
            if (stuParams.Gender != "undefined") {
                stuQuickAdmission = stuQuickAdmission.Where (u => u.gender == stuParams.Gender);
            }
            if (stuParams.AdmissionNo != "undefined") {
                stuQuickAdmission = stuQuickAdmission.Where (x => x.RegistrationNo == stuParams.AdmissionNo);
            }

            if (!string.IsNullOrEmpty (stuParams.OrderBy)) {
                switch (stuParams.OrderBy) {
                    case "class":
                        stuQuickAdmission = stuQuickAdmission.OrderByDescending (u => u.standers);
                        break;
                    case "created":
                        stuQuickAdmission = stuQuickAdmission.OrderByDescending (u => u.Created);
                        break;
                    default:
                        break;
                }
            }
            return await PageList<Employee>.CreateAsync (stuQuickAdmission, stuParams.PageNumber, stuParams.PageSize);
        }

        public async Task<Employee> getEmpById (int EmpId) {
            var emp = await _context.employees.FirstOrDefaultAsync (u => u.EmpId == EmpId);
            return emp;
        }

        public async Task<IEnumerable<FeeParticular>> getFeeStatus (int stuId) {
            var feeStatus = await _context.feeParticular.Where (x => x.StuId == stuId).ToListAsync ();
            return feeStatus;
        }

        public async Task<IEnumerable<FeeParticular>> getFeeStatusByClass (int stuId, string Classes, string sec) {
            var feeStatus = await _context.feeParticular.Where (x => x.StuId == stuId && x.Stander == Classes && x.Section == sec).ToListAsync ();
            return feeStatus;
        }

        public async Task<QuickAdmission> getQuickStuByAdmissionNo (string AdmissionNo) {
            var quickStudent = await _context.quickAdmission.FirstOrDefaultAsync (u => u.admissionNo == AdmissionNo);
            return quickStudent;
        }

        public async Task<int> AllStudentCount (int sessionId) {
            var quickStudentCount = await _context.quickAdmission.Where (c => c.SessionId == sessionId).CountAsync ();
            return quickStudentCount;
        }
        public async Task<int> TodayAdmissionCount (DateTime admissionDate) {
            var TodayAdmissionCount = await _context.quickAdmission.Where (c => c.doa == admissionDate).CountAsync ();
            return TodayAdmissionCount;
        }

        public async Task<QuickAdmission> getQuickStuByUserId (string userId) {
            var userDetails = await _context.quickAdmission.Where (s => s.UserId == userId).FirstOrDefaultAsync ();
            return userDetails;
        }

        public async Task<IEnumerable<FeeParticular>> StuFeeStatus (int StudentId) {
            var feeStatus = await _context.feeParticular.Where (c => c.StuId == StudentId).ToListAsync ();
            return feeStatus;
        }

        public async Task<IEnumerable<Sessions>> getSession () {
            var sessions = await _context.Session.ToListAsync ();
            return sessions;
        }

        public async Task<Sessions> getActiveSession () {
            var activeSessionId = await _context.Session.FirstOrDefaultAsync (c => c.IsActive == true);
            return activeSessionId;
        }

        public async Task<bool> SessionIdExist (int id) {
            if (await _context.Session.AnyAsync (e => e.Id == id))
                return true;

            return false;
        }

        public async Task<Sessions> getSessionById (int id) {
            var session = await _context.Session.FindAsync (id);
            return session;
        }

        public async Task<Section> AddSection (Section section) {
            await _context.Section.AddAsync (section);
            await _context.SaveChangesAsync ();

            return section;
        }

        public async Task<IEnumerable<Section>> GetSection () {
            var sections = await _context.Section.ToListAsync ();
            return sections;
        }

        public async Task<Section> GetSectionById (int id) {
            var session = await _context.Section.FindAsync (id);
            return session;
        }

        public async Task<Classes> RegisterClasses (Classes classes) {
            await _context.classes.AddAsync (classes);
            await _context.SaveChangesAsync ();

            return classes;
        }
        public async Task<SubjectGroup> RegisterSubGroup (SubjectGroup subGroup) {
            await _context.subjectGroups.AddAsync (subGroup);
            await _context.SaveChangesAsync ();

            return subGroup;
        }

        public async Task<IEnumerable<Classes>> GetClassWithSection () {
            var classes = await _context.classes.ToListAsync ();
            return classes;
        }
        public async Task<Classes> GetClassesDetailsById (int id) {
            var classes = await _context.classes.FindAsync (id);
            return classes;
        }

        public async Task<bool> ClassExist (string classes) {
            if (await _context.classes.AnyAsync (e => e.classes == classes))
                return true;

            return false;
        }

        public async Task<Classes> GetSection (string classes) {
            var cls = await _context.classes.Where (v => v.classes == classes).FirstOrDefaultAsync ();
            return cls;
        }

        public async Task<SubjectMaster> AddSubject (SubjectMaster sub) {
            await _context.Subject.AddAsync (sub);
            await _context.SaveChangesAsync ();

            return sub;
        }

        public async Task<bool> SubjectExist (string sub) {
            if (await _context.Subject.AnyAsync (e => e.Subject == sub))
                return true;

            return false;
        }

        public async Task<IEnumerable<SubjectMaster>> GetSubject () {
            var subs = await _context.Subject.ToListAsync ();
            return subs;
        }

        public async Task<SubjectMaster> GetSubjectById (int id) {
            var subject = await _context.Subject.FirstOrDefaultAsync (u => u.Id == id);
            return subject;
        }

        public async Task<IEnumerable<Employee>> GetTeacher () {
            var subs = await _context.employees.ToListAsync ();
            return subs;
        }

        public async Task<IEnumerable<TimeTableMaster>> GetTimetable (string classes, string sec, string weekday) {
            var timetbl = await _context.TimeTables.Where (v => v.Classes == classes &&
                v.Sec == sec && v.WeekDay == weekday).ToListAsync ();
            return timetbl;
        }

        public async Task<TimeTableMaster> GetTimetableId (int id) {
            var classes = await _context.TimeTables.FindAsync (id);
            return classes;
        }

        public async Task<bool> TimeTableExist (string classes, string sec, int subjectId, int teacherId, string weekday) {
            if (await _context.TimeTables.AnyAsync (e => e.Classes == classes && e.Sec == sec &&
                    e.subjectsId == subjectId && e.teachersId == teacherId && e.WeekDay == weekday))
                return true;

            return false;
        }

        public async Task<IEnumerable<TimeTableMaster>> GetTimetableForStu (string classes, string sec) {
            var timetbl = await _context.TimeTables
                .Include (c => c.teachers).Include (c => c.subjects).Where (v => v.Classes == classes && v.Sec == sec)
                .ToListAsync ();

            return timetbl;
        }

        public async Task<float> TodayPresentStudent (string todayDate) {
            var TotalStu = await _context.attendances.Where (c => c.markingDate != null).CountAsync ();
            var presentToday = await _context.attendances.Where (c => c.markingDate == todayDate).CountAsync ();
            var persentagePresent = presentToday * 100 / TotalStu;
            return persentagePresent;
        }

        public async Task<int> AllTeacherCount (int sessionId) {
            var quickStudentCount = await _context.employees.Where (c => c.SessionId == sessionId).CountAsync ();
            return quickStudentCount;
        }

        public async Task<IEnumerable<SubjectGroup>> GetSubGroups()
        {
            var sub=await _context.subjectGroups.ToListAsync();
            return sub;
        }

        public async Task<SubjectGroup> GetSubGroupByid(int id)
        {
             var sub=await _context.subjectGroups.Where(c=>c.Id==id).FirstOrDefaultAsync();
            return sub;
        }
    }
}