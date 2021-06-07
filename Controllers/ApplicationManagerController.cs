using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using sKul.API.Data;
using sKul.API.Dtos;
using sKul.API.Identity.Model;

namespace sKul.API.Controllers {
    [ApiController]
    [Route ("api/[controller]")]
    public class ApplicationManagerController : ControllerBase {
        private UserManager<ApplicationUser> _usermanager;
        private readonly ISkulRepository _repo;
        //  private SignInManager<ApplicationUser>  _SignInUserManager;
        private readonly ApplicationSetting _appSetting;
        private readonly IMapper _mapper;

        public ApplicationManagerController (UserManager<ApplicationUser> userManager,
            IOptions<ApplicationSetting> appSetting, ISkulRepository repo, IMapper mapper) {
            _usermanager = userManager;
            _repo = repo;
            _mapper = mapper;
            //  _SignInUserManager=signInManager;
            _appSetting = appSetting.Value;
        }

        //Register Method api/ApplicationManager/register
        [HttpPost ("register/{roles}")]
        [Authorize (Roles = "Admin")]
        public async Task<IActionResult> Register (ApplicationUserModel appuser, string roles) {
            appuser.Role = roles;
            var applicationUser = new ApplicationUser {
                UserName = appuser.UserName,
                FullName = appuser.FullName,
                Email = appuser.Email
            };
            try {
                var user = await _usermanager.CreateAsync (applicationUser, appuser.password);
                await _usermanager.AddToRoleAsync (applicationUser, appuser.Role);
                return Ok (user);
            } catch (Exception ex) {
                throw ex;
            }
        }

        //Register Method api/ApplicationManager/register
        [HttpPost ("register/{roles}/{AdmissionNo}")]
        [Authorize (Roles = "Admin")]
        public async Task<IActionResult> RegisterStudent (ApplicationUserModel appuser, string roles, string AdmissionNo) {
            appuser.Role = roles;
            var applicationUser = new ApplicationUser {
                UserName = appuser.UserName,
                FullName = appuser.FullName,
                Email = appuser.Email
            };

            var user = await _repo.getQuickStuByAdmissionNo (AdmissionNo);
            if (user == null)
                return NotFound ($"Could not find Student with Admission No of {AdmissionNo}");

            var stuDetails = new StudentUserIdDtos {
                UserId = applicationUser.Id
            };
            try {
                var Appuser = await _usermanager.CreateAsync (applicationUser, appuser.password);
                await _usermanager.AddToRoleAsync (applicationUser, appuser.Role);
                _mapper.Map (stuDetails, user);
                if (await _repo.SaveAll ())
                    return Ok (user);
            } catch (Exception ex) {
                throw ex;
            }
            return NoContent ();
        }

        //Login Method api/ApplicationManager/login
        [HttpPost ("login/{selectedRole}")]
        public async Task<IActionResult> Login (LoginModel loginUser, string selectedRole) {
            var user = await _usermanager.FindByNameAsync (loginUser.UserName);

            if (user != null && await _usermanager.CheckPasswordAsync (user, loginUser.password)) {
                //Get Role Assign
                var roles = await _usermanager.GetRolesAsync (user);
                if (roles.FirstOrDefault () != selectedRole)
                    return Unauthorized (new { message = "Role Invalid" });

                IdentityOptions _opt = new IdentityOptions ();

                var tokenDecriptor = new SecurityTokenDescriptor {
                    Subject = new System.Security.Claims.ClaimsIdentity (new Claim[] {
                    new Claim ("UserId", user.Id.ToString ()),
                    new Claim (_opt.ClaimsIdentity.RoleClaimType, roles.FirstOrDefault ())
                    }),
                    Expires = DateTime.UtcNow.AddMinutes (50),
                    SigningCredentials = new SigningCredentials (new SymmetricSecurityKey (Encoding.UTF8.GetBytes ("super secret key")), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandeler = new JwtSecurityTokenHandler ();
                var securityToken = tokenHandeler.CreateToken (tokenDecriptor);
                var token = tokenHandeler.WriteToken (securityToken);
                return Ok (new { token, selectedRole, user.Id });

            } else {
                return BadRequest (new { message = "UserName & Password Incorrect." });
            }
        }

        //Is Credentials avalable
        [HttpGet ("IsCread/{userId}")]
        public async Task<IActionResult> getCredentials (string userId) {
            var cred = await _usermanager.FindByIdAsync (userId);
            if (cred == null)
                return NoContent ();

            return Ok (cred);
        }
    
    
    
     //Register Method api/ApplicationManager/register
        [HttpPost ("Updateregister")]
        [Authorize (Roles = "Admin")]
        public async Task<IActionResult> UPdateLogin (ApplicationUserModel appuser) {
           
            var applicationUser = new ApplicationUser {
                UserName = appuser.UserName,
                FullName = appuser.FullName,
                Email = appuser.Email
            }; 
            return NoContent ();
        }

    }
}