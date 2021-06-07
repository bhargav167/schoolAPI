using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace sKul.API.Models
{
    public class FeeParticular
    {   
        public int Id { get; set; }
        [Required]
        public string ClassLevel { get; set; }
        [Required]
        public string Stander { get; set; }
        [Required]
        public string Section { get; set; }
        [Required]
        public string FeeType { get; set; }
        [Required]
        public decimal FeeAmt { get; set; }
        public int StuId { get; set; }
        public decimal? Term1 { get; set; }
        public decimal? Term12 { get; set; }
        public decimal? Term1Paid { get; set; }
        public decimal? Term2Paid { get; set; }  
        public decimal? Term1DueAmt { get; set; }
        public decimal? Term2DueAmt { get; set; } 
        public Nullable<DateTime> Term1dateOfPay { get; set; }
        public Nullable<DateTime> Term2dateOfPay { get; set; }
        public Nullable<DateTime> Term1From { get; set; }
        public Nullable<DateTime> Term2From { get; set; }
        public Nullable<DateTime> Term1To { get; set; }
        public Nullable<DateTime> Term2To { get; set; } 
          public int SessionId { get; set; }
        public Sessions session { get; set; }
    }
}