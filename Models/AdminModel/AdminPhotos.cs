using System.ComponentModel.DataAnnotations.Schema;

namespace sKul.API.Models.AdminModel {
    public class AdminPhotos {
        public int Id { get; set; }
        public string url { get; set; }
        [NotMapped]
         public string imgUrl { get; set; }
        public string adminId { get; set; }
    }
}