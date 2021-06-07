using System.ComponentModel.DataAnnotations;

namespace sKul.API.Models
{
    public class Sessions
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(7),MinLength(7)]
        public string Session { get; set; } 
        public bool IsActive { get; set; }
        public Sessions()
        {
            IsActive=false;
        }
       
    }
}