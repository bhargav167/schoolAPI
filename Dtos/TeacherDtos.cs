using System.ComponentModel.DataAnnotations;

namespace sKul.API.Dtos
{
    public class TeacherDtos
    {
    [Required]
    [StringLength(12,MinimumLength=3,ErrorMessage="Length must be alteast 3 character")]
    public string firstName { get; set; }
    [Required]
    [MaxLength(12)]
    public string lastName { get; set; }
    [Required]
    public int EmpId { get; set; }
    }
}