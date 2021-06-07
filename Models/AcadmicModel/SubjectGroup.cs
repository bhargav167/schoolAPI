using System.ComponentModel.DataAnnotations;
namespace sKul.API.Models.AcadmicModel {
    public class SubjectGroup {
        [Key]
        public int Id { get; set; } 
        [Required]
        public string SubjectName { get; set; } 
        [Required]
        public string Classes { get; set; } 
        [Required]
        public string Subject { get; set; } 
        [Required]
        public string Section { get; set; }
    }
}