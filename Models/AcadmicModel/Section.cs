using System.ComponentModel.DataAnnotations;

namespace sKul.API.Models
{
    public class Section
    {
        public int Id { get; set; }
        [Required]
        public string section { get; set; }
        public bool isChecked { get; set; }
        public Section()
        {
            isChecked=false;
        }
    }
}