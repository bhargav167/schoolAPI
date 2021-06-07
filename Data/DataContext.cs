using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using sKul.API.Identity.Model;
using sKul.API.Models;
using sKul.API.Models.AcadmicModel;
using sKul.API.Models.AdminModel;
using sKul.API.Models.Homework;

namespace sKul.API.Data {
    public class DataContext : IdentityDbContext {
        public DataContext (DbContextOptions<DataContext> options) : base (options) { }
        public DbSet<QuickAdmission> quickAdmission { get; set; }
        public DbSet<ClassLevel> classlevel { get; set; }
        public DbSet<Classes> classes { get; set; }
        public DbSet<StuEduDetails> stuEduDetails { get; set; }
        public DbSet<StudentPhotos> stuPhotos { get; set; }
        public DbSet<AdminPhotos> adminPhotos { get; set; }
        public DbSet<FeeParticular> feeParticular { get; set; }
        public DbSet<Attendance> attendances { get; set; }
        public DbSet<Employee> employees { get; set; }
        public DbSet<EmployeePhotos> employeePhoto { get; set; }
        public DbSet<ApplicationUser> appuser { get; set; }
        public DbSet<Sessions> Session { get; set; }
        public DbSet<Section> Section { get; set; }
        public DbSet<SubjectMaster> Subject { get; set; }
        public DbSet<TimeTableMaster> TimeTables { get; set; }
        public DbSet<ClassTeacher> classTeacher { get; set; }
        public DbSet<SubjectGroup> subjectGroups { get; set; }
        public DbSet<Homework> homeworks { get; set; }
        protected override void OnModelCreating (ModelBuilder modelBuilder) {
            base.OnModelCreating (modelBuilder);
         
        }
    }
}