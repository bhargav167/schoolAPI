using System;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using sKul.API.Data;
using sKul.API.Models.AdminModel;

namespace sKul.API.Controllers.AdminController {
    [ApiController]
    [Route ("api/[controller]")]
    [Authorize (Roles = "Admin")]
    public class AdminController : ControllerBase {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private IWebHostEnvironment _hostingEnvironment;
        public AdminController (DataContext context, IMapper mapper, IWebHostEnvironment hostingEnvironment) {
            _mapper = mapper;
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpPost ("{id}/Upload"), DisableRequestSizeLimit]
        public async Task<IActionResult> Upload (string id) {
            var lastImageTodelete = _context.adminPhotos.Where(c=>c.adminId==id).FirstOrDefault();
            if (lastImageTodelete != null) {
                _context.Remove (lastImageTodelete);
                await _context.SaveChangesAsync ();
            }
            try {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine ("Resources", "Images");
                var pathToSave = Path.Combine (Directory.GetCurrentDirectory (), folderName);

                if (file.Length > 0) {
                    var fileName = ContentDispositionHeaderValue.Parse (file.ContentDisposition).FileName.Trim ('"');
                    var fullPath = Path.Combine (pathToSave, fileName);
                    var dbPath = Path.Combine (folderName, fileName);

                    using (var stream = new FileStream (fullPath, FileMode.Create)) {
                        file.CopyTo (stream);
                    }

                    AdminPhotos pp = new AdminPhotos () {
                        adminId = id,
                        url = fileName
                    };

                    await _context.adminPhotos.AddAsync (pp);
                    await _context.SaveChangesAsync ();
                    return Ok (200);
                }
                return NoContent ();
            } catch (Exception ex) {
                return StatusCode (500, ex.Message);
            }
        }

    }
}