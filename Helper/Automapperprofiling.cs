using AutoMapper;
using sKul.API.Dtos;
using sKul.API.Models;

namespace sKul.API.Helper
{
    public class Automapperprofiling:Profile
    {
        public Automapperprofiling()
        {
            CreateMap<QuickAdmission, QuickAdmissionUpdateDtos>();
            CreateMap<QuickAdmissionUpdateDtos, QuickAdmission>();

            CreateMap<Employee, EmployeeDtos>();
            CreateMap<EmployeeDtos, Employee>();

            CreateMap<QuickAdmission, LastAdmissionIdDtos>();
            CreateMap<LastAdmissionIdDtos, QuickAdmission>();

            CreateMap<QuickAdmission, StudentUserIdDtos>();
            CreateMap<StudentUserIdDtos, QuickAdmission>();

            CreateMap<Employee, LastEmpIdDtos>();
            CreateMap<LastEmpIdDtos, Employee>();

            CreateMap<Employee, TeacherDtos>();
            CreateMap<TeacherDtos, Employee>();
        }
    }
}