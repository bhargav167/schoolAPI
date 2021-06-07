using System.ComponentModel.DataAnnotations.Schema;

namespace sKul.API.Models
{
    public class StudentPhotos
    {
        public int Id { get; set; }
        public string url { get; set; }
        [NotMapped]
        public string Imgurl { get; set; }
        public string stuId { get; set; }
    }
}