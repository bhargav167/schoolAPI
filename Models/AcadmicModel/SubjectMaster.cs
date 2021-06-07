using System.ComponentModel.DataAnnotations;

namespace sKul.API.Models.AcadmicModel
{
    public class SubjectMaster
    {
        public int Id { get; set; }
        [Required]
        public string Subject { get; set; }
        [Required]
        public string Types { get; set; }
        public int codeId { get; set; }
    }
}