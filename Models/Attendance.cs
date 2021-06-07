using System;

namespace sKul.API.Models
{
    public class Attendance
    {
        public int Id { get; set; }
        public string RollNo { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
        public string classes { get; set; }
        public string section { get; set; }
        public string markingDate { get; set; } 
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Subject { get; set; }
        public string Location { get; set; }
        public string CategoryColor { get; set; }
        public int SessionId { get; set; }
        public Sessions session { get; set; }
     
    }
}