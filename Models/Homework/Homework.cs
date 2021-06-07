using System;
using System.ComponentModel.DataAnnotations;

namespace sKul.API.Models.Homework {
    public class Homework {
        public int Id { get; set; }
        [Required]
        public int ClassGroup { get; set; }
        [Required]
        public string Classes { get; set; }
        [Required]
        public string Section { get; set; }
        [Required]
        public string SubGroup { get; set; }
        [Required]
        public string Subject { get; set; }
        [Required]
        public DateTime HomeworkDate { get; set; }
        [Required]
        public DateTime SubmissionDate { get; set; }
        public string AttachDocxname { get; set; }
        [Required]
        public string Description { get; set; }
    }
}