using System;
using System.ComponentModel.DataAnnotations;

namespace sKul.API.Dtos
{
    public class EmployeeDtos
    {
    [Required]
    [StringLength(12,MinimumLength=3,ErrorMessage="Length must be alteast 3 character")]
    public string firstName { get; set; }
    [Required]
    [MaxLength(12)]
    public string lastName { get; set; }
    [Required]
    public string gender { get; set; }
    public string email { get; set; }
    [Required]
    public string phone { get; set; }
    [Required]
    [MaxLength(22)]
    public string fatherName { get; set; }
    [Required]
    public string motherTongue { get; set; } 
    [Required]
    public DateTime dob { get; set; }
    [Required]
    public DateTime doa { get; set; }
 
    [Required]
    public string Nationality { get; set; }
    [Required] 
    public string standers {get;set;}
    [Required]
    public string classLevel { get; set; }
    [Required]
    public string classsection { get; set; }
    [Required]
    public string medium { get; set; } 
    public bool IsActive { get; set; }
    }
}