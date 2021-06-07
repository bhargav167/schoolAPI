namespace sKul.API.Identity.Model
{
    public class ApplicationUserModel
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string UserName { get; set; }
        public string password { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
    }
}