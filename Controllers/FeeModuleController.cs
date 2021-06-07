using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using sKul.API.Data;
using sKul.API.Dtos;
using sKul.API.Helper;
using sKul.API.Models;

namespace sKul.API.Controllers {
    [ApiController]
    [Authorize (Roles = "Admin")]
    [Route ("api/[controller]")]

    public class FeeModuleController : ControllerBase {
        private readonly ISkulRepository _repo;
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private IWebHostEnvironment _hostingEnvironment;
        public FeeModuleController (ISkulRepository repo, DataContext context, IMapper mapper, IWebHostEnvironment hostingEnvironment) {
            _repo = repo;
            _mapper = mapper;
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet ("{classes}/{stuId}")]
        public async Task<IActionResult> getFeeTypes (string classes, int? stuId) {
            var IsPaidStu = _context.feeParticular.Where (x => x.StuId == stuId).ToList ();
            if (IsPaidStu.Count () == 0) {
                var Types = await _repo.GetFeeTypesbyClass (classes, null);
                return Ok (Types);
            } else {
                var Types = await _repo.GetFeeTypesbyClass (classes, stuId);
                return Ok (Types);
            }
        }

        [HttpGet ("Fee/{id}")]
        public async Task<IActionResult> getFeeparticular (int id) {
            var feeTypes = await _repo.getFeeparticularId (id);
            return Ok (feeTypes);
        }

        [HttpGet ("FeeStatus/{stuId}/{classes}/{sec}")]
        public async Task<IActionResult> getFeeStatus (int stuId, string classes, string sec) {
            var feeStatus = await _repo.getFeeStatus (stuId);
            var stuDetail = await _repo.getQuickStuById (stuId);
            if (feeStatus.Count () == 0) {
                var feeStausByClass = await _repo.getFeeStatusByClass (0, classes, sec);
                var FeeModuleVms = new StuFeeModuleVM {
                    feeParticular = feeStausByClass,
                    quickAdmission = stuDetail
                };
                return Ok (FeeModuleVms);
            }
            var FeeModuleVm = new StuFeeModuleVM {
                feeParticular = feeStatus,
                quickAdmission = stuDetail
            };

            return Ok (FeeModuleVm);
        }

        //Get Stu By Class
        [HttpGet ("Stu/{classes}/{sec}")]
        public async Task<IActionResult> getStuByClasses (string classes, string sec) {
            var students = await _repo.GetStuByClasses (classes, sec.ToLower ());
            return Ok (students);
        }

        // QuickAdmission Register Method
        [HttpPost ("register")]
        public async Task<IActionResult> Register (FeeParticular feeparticularRegister) {
            // validate request
            if (!ModelState.IsValid)
                return BadRequest (ModelState);
            if (await _repo.FeeParticularExist (feeparticularRegister.Id)) {
                feeparticularRegister.Term1 = feeparticularRegister.FeeAmt / 2;
                feeparticularRegister.Term12 = feeparticularRegister.FeeAmt / 2;

                feeparticularRegister.Term1Paid = feeparticularRegister.Term1;
                feeparticularRegister.Term2Paid = feeparticularRegister.Term12;

                _context.feeParticular.Update (feeparticularRegister);
                if (await _repo.SaveAll ())
                    return NoContent ();
            }
            feeparticularRegister.Term1 = feeparticularRegister.FeeAmt / 2;
            feeparticularRegister.Term12 = feeparticularRegister.FeeAmt / 2;

            feeparticularRegister.Term1Paid = feeparticularRegister.Term1;
            feeparticularRegister.Term2Paid = feeparticularRegister.Term12;

            feeparticularRegister.Term1DueAmt = 0;
            feeparticularRegister.Term2DueAmt = 0;
            feeparticularRegister.SessionId = Convert.ToInt32 (_repo.getActiveSession ().Result.Id);

            var createUser = await _repo.FeeParticular (feeparticularRegister);
            var userToReturn = createUser;

            return Ok (200);
        }

        // QuickAdmission Update Terms
        [HttpPost ("particulars")]
        public async Task<IActionResult> UpdateTermsFees ([FromBody] FeeParticular[] feeparticularRegister) {
            // validate request 
            if (!ModelState.IsValid)
                return BadRequest (ModelState);

            foreach (var item in feeparticularRegister) {
                if (item.FeeAmt != item.Term1 + item.Term12) {
                    return BadRequest ("Fee Particular Should be equal to sum of Both terms");
                }
                item.Term1Paid = item.Term1;
                item.Term2Paid = item.Term12;
            }

            _context.feeParticular.UpdateRange (feeparticularRegister);
            if (await _repo.SaveAll ())
                return NoContent ();

            return Ok (200);
        }

        // QuickAdmission Update Terms
        [HttpPost ("TermFeeUpdate")]
        public async Task<IActionResult> CollectFee (List<FeeParticular> feeparticularRegister) {
            var runAsAdd = false;
            foreach (var item in feeparticularRegister) {
                if (runAsAdd == true)
                    return NoContent ();
                if (await _repo.PaidStuExist (item.StuId)) {
                    var updateList = _context.feeParticular.Where (s => s.StuId == item.StuId && s.FeeType == item.FeeType).ToList ();
                    foreach (var item2 in updateList) {
                        if (item.Term1Paid <= item2.Term1Paid) {
                            item2.Term1Paid = item2.Term1Paid - item.Term1Paid;
                            item2.Term1DueAmt = item.Term1Paid + item2.Term1DueAmt;

                            _context.feeParticular.Update (item2);
                            await _repo.SaveAll ();
                            break;
                        }
                    }
                } else {
                    foreach (var item1 in feeparticularRegister) {
                        var updateList = _context.feeParticular.Where (s => s.FeeType == item1.FeeType && s.Stander == item1.Stander).ToList ();

                        foreach (var item3 in updateList) {
                            if (item1.Term1Paid <= item3.Term1Paid) {
                                item1.Id = 0;
                                item1.Term1DueAmt = item1.Term1Paid + item3.Term1DueAmt;
                                item1.Term1Paid = item3.Term1 - item1.Term1Paid;
                                _context.feeParticular.Add (item1);
                                _context.SaveChanges ();
                                runAsAdd = true;
                                break;
                            } else {
                                return NoContent ();
                            }
                        }
                    }

                }

            }
            return NoContent ();
        }

        // QuickAdmission Update Terms
        [HttpPost ("TermFeeUpdate2")]
        public async Task<IActionResult> CollectFeeTerm2 (List<FeeParticular> feeparticularRegister) {
            var runAsAdd = false;
            foreach (var item in feeparticularRegister) {
                if (runAsAdd == true)
                    return NoContent ();
                if (await _repo.PaidStuExist (item.StuId)) {
                    var updateList = _context.feeParticular.Where (s => s.StuId == item.StuId && s.FeeType == item.FeeType).ToList ();
                    foreach (var item2 in updateList) {
                        if (item.Term2Paid <= item2.Term2Paid) {
                            item2.Term2Paid = item2.Term2Paid - item.Term2Paid;
                            item2.Term2DueAmt = item.Term2Paid + item2.Term2DueAmt;
                            _context.feeParticular.Update (item2);
                            await _repo.SaveAll ();
                            break;
                        }
                    }
                } else { }

            }
            return NoContent ();
        }

    }
}