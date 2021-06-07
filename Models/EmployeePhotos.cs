using System.ComponentModel.DataAnnotations.Schema;

namespace sKul.API.Models {
    public class EmployeePhotos {
        public int Id { get; set; }
        public string url { get; set; }
        [NotMapped]
        public string Imgurl { get; set; }
        public int empId { get; set; }
        public Employee emp { get; set; }
        
        
    }
}