using Microsoft.AspNetCore.Identity;

namespace sKul.API.Identity.Model
{
    public class ApplicationUser : IdentityUser
    {
        public string FullName { get; set; }
    }
}