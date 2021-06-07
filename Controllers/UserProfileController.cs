using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sKul.API.Data;
using sKul.API.Identity.Model;
using sKul.API.Models;
using sKul.API.Models.AdminModel;

namespace sKul.API.Controllers {
    [ApiController]
    [Route ("api/[controller]")]

    public class UserProfileController : ControllerBase {
        private UserManager<ApplicationUser> _usermanager;
        private readonly DataContext _context;
        public UserProfileController (UserManager<ApplicationUser> userManager, DataContext context) {
            _usermanager = userManager;
            _context = context;
        }

        [HttpGet]
        [Authorize]
        public async Task<object> UserProfiles () {
            string userId = User.Claims.First (x => x.Type == "UserId").Value;
            var user = await _usermanager.FindByIdAsync (userId);
            return new {
                user.Id,
                    user.FullName,
                    user.Email,
                    user.UserName
            };
        }

        // AdminImages
        [HttpGet ("ProImg/{Id}")]
        [Authorize]
        public async Task<ActionResult> GetAdminImg (string Id) {
           
            var imgs = await _context.adminPhotos
                .Select (x => new AdminPhotos () {
                    Id=x.Id,
                    url=x.url,
                    adminId=x.adminId,
                    imgUrl = String.Format ("{0}://{1}{2}/Resources/Images/{3}",
                        Request.Scheme, Request.Host, Request.PathBase, x.url)
                }).OrderByDescending(x=>x.Id).FirstOrDefaultAsync (c => c.adminId == Id);

            return Ok (imgs);
        }

        // Student Images
        [HttpGet ("ProStuImg/{Id}")] 
        public async Task<ActionResult> GetStudentImg (string Id) {
            var imgs = await _context.stuPhotos
                .Select (x => new StudentPhotos () {
                    Id=x.Id,
                    url=x.url,
                    stuId=x.stuId,
                    Imgurl = String.Format ("{0}://{1}{2}/Resources/Images/{3}",
                        Request.Scheme, Request.Host, Request.PathBase, x.url)
                }).OrderByDescending(x=>x.Id).FirstOrDefaultAsync (c => c.stuId == Id);

            return Ok (imgs);
        }

          // Employee Images
        [HttpGet ("EmpImg/{Id}")] 
        public async Task<ActionResult> GetEmpImg (int Id) {
            var imgs = await _context.employeePhoto
                .Select (x => new EmployeePhotos () {
                    Id=x.Id,
                    url=x.url,
                    empId=x.empId,
                    Imgurl = String.Format ("{0}://{1}{2}/Resources/Images/{3}",
                        Request.Scheme, Request.Host, Request.PathBase, x.url)
                }).OrderByDescending(x=>x.Id).FirstOrDefaultAsync (c => c.empId == Id);

            return Ok (imgs);
        }

    }
}