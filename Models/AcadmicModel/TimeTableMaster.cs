namespace sKul.API.Models.AcadmicModel {
    public class TimeTableMaster {
    public int Id { get; set; }
    public string Classes { get; set; }
    public string Sec { get; set; }
    public string WeekDay { get; set; }
    public string timefrom { get; set; }
    public string timeTo { get; set; }
    public int RoomNo { get; set; }
    public int teachersId { get; set; }
    public Employee teachers { get; set; }
    public int subjectsId { get; set; }
    public SubjectMaster subjects { get; set; }

    
    
    }
}