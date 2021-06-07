function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-stu-edit-basic-stu-edit-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-stu-edit/basic-stu-edit.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-stu-edit/basic-stu-edit.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoUiElementsUiBasicBasicStuEditBasicStuEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \n      <div class=\"page-header\">\n        <div class=\"page-block\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-md-12\">\n              <div class=\"page-header-title\">\n                <ng-container><h5 class=\"m-b-10\">Edit</h5></ng-container>\n              </div>\n              <ul class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\">\n                  <a [routerLink]=\"['/dashboard/analytics/']\" ><i class=\"feather icon-home\"></i></a>\n                 </li> \n                 <li class=\"breadcrumb-item\"><a [routerLink]=\"['/basic/studentlist/']\">Students</a></li>\n                   <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard/analytics/']\">Edit</a></li>\n                \n              </ul>\n            </div>\n          </div>\n        </div>\n      </div> \n\n<div class=\"row\">\n    <div class=\"col-sm-12\"> \n      <app-card [hidHeader]=\"true\" cardClass=\"tab-card\">\n        <h5 class=\"mb-3\">Student Data</h5> \n        <ngb-tabset>\n\n          <ngb-tab title=\"Student Detail's\">\n            <ng-template ngbTabContent>\n              <h4>Student's Information</h4>\n              <form #studentForm=\"ngForm\"  id=\"quick\" (ngSubmit)=\"studentForm.form.valid && updateStudent()\" novalidate> \n              <div class=\"container\">\n                  <div *ngIf=\"studentForm.dirty\" class=\"alert alert-info\">\n                      <span>\n                        <b> Information: </b> You have made changes. Any unsave change will be lost!\"</span>\n                    </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">First Name</label>\n                      <input name=\"firstName\" [(ngModel)]=\"students.firstName\" \n                      #firstName=\"ngModel\"\n                      [ngClass]=\"{ 'is-invalid': studentForm.submitted && firstName.invalid }\" required\n                       type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\n                        aria-describedby=\"emailHelp\" placeholder=\"First Name\">\n                        <div *ngIf=\"studentForm.submitted && firstName.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"firstName.errors.required\">First Name is required</div>\n                        </div>\n                     </div>\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Last Name</label>\n                      <input name=\"lastName\" \n                      #lastName=\"ngModel\"\n                      [ngClass]=\"{ 'is-invalid': studentForm.submitted && lastName.invalid }\" required\n                      [(ngModel)]=\"students.lastName\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\n                        aria-describedby=\"emailHelp\" placeholder=\"Last Name\">\n                        <div *ngIf=\"studentForm.submitted && lastName.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"lastName.errors.required\">Last Name is required</div>\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Email address</label>\n                      <input name=\"email\" [(ngModel)]=\"students.email\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\n                        aria-describedby=\"emailHelp\" placeholder=\"First Name\">\n                    </div>\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Father Name</label>\n                      <input name=\"fatherName\" [(ngModel)]=\"students.fatherName\" \n                      #fatherName=\"ngModel\"\n                      [ngClass]=\"{ 'is-invalid': studentForm.submitted && fatherName.invalid }\" required\n                      type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\n                        aria-describedby=\"emailHelp\" placeholder=\"Father Name\">\n                        <div *ngIf=\"studentForm.submitted && fatherName.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"fatherName.errors.required\">Last Name is required</div>\n                        </div>\n                    </div>\n                  </div>\n                </div> \n\n                <div class=\"row\">\n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Gender</label>\n                      <select name=\"gender\" [(ngModel)]=\"students.gender\" class=\"form-control\"\n                        id=\"exampleFormControlSelect1\">\n                        <option [selected]=\"selected\" [value]=\"students.gender\">{{students.gender}}</option>\n                        <option value=\"male\" *ngIf=\"students.gender=='female'\">Male</option>\n                        <option value=\"other\" *ngIf=\"students.gender=='female'\">Other</option>\n                        <option value=\"female\" *ngIf=\"students.gender=='male'\">Female</option>\n                        <option value=\"other\" *ngIf=\"students.gender=='male'\">Other</option>\n                        <option value=\"male\" *ngIf=\"students.gender=='other'\">Male</option>\n                        <option value=\"female\" *ngIf=\"students.gender=='other'\">Female</option>\n                      </select>\n                      <small id=\"emailHelp\" class=\"invalid-feedback\">Please select gender</small>\n                    </div>\n                  </div>\n              \n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Class level</label>\n                      <select name=\"classLevel\" [(ngModel)]=\"students.classLevel\" (change)=\"LevelChange($event)\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n                        <option value=\"1\" *ngIf=\"clasLevel=='Junior'\">Junior</option>\n                        <option value=\"2\" *ngIf=\"clasLevel=='Senior'\">Senior</option>\n              \n                        <option value=\"1\" *ngIf=\"clasLevel!='Junior'\">Junior</option>\n                        <option value=\"2\" *ngIf=\"clasLevel!='Senior'\">Senior</option>\n                      </select>\n                      <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Class level</small>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Class</label>\n                      <select name=\"stander\" [(ngModel)]=\"students.standers\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n                        <option *ngIf=\"isChange==false\">{{students.standers}}</option>\n                        <option *ngFor=\"let items of allClasses\">{{items.classes}}</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Section</label>\n                      <select  name=\"classsection\" [(ngModel)]=\"students.classsection\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n                        <option selected=\"selected\" >{{students.classsection | uppercase}}</option>\n                        <option *ngIf=\"students.classsection=='A'\">B</option>\n                        <option *ngIf=\"students.classsection=='A'\">C</option>\n                        <option *ngIf=\"students.classsection=='B'\">A</option>\n                        <option *ngIf=\"students.classsection=='B'\">C</option>\n                        <option *ngIf=\"students.classsection=='C'\">A</option>\n                        <option *ngIf=\"students.classsection=='C'\">B</option>\n                      </select>\n                    </div>\n                  </div>\n                </div> \n\n                <div class=\"row\">\n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Admission Number</label>\n                      <input name=\"admissionNo\" type=\"number\" class=\"form-control\" \n                      #admissionno=\"ngModel\"\n                      [ngClass]=\"{ 'is-invalid': studentForm.submitted && admissionno.invalid }\" required\n                      [(ngModel)]=\"students.admissionNo\" id=\"exampleInputEmail1\"\n                        aria-describedby=\"emailHelp\" placeholder=\"Admission no\">\n                        <div *ngIf=\"studentForm.submitted && admissionno.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"admissionno.errors.required\">Please enter admission no</div>\n                        </div>\n                  \n                    </div>\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Roll Number</label>\n                      <input required name=\"rollNo\" \n                      #rollNo=\"ngModel\"\n                      [ngClass]=\"{ 'is-invalid': studentForm.submitted && rollNo.invalid }\" required\n                      [(ngModel)]=\"students.rollNo\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\n                        aria-describedby=\"emailHelp\" placeholder=\"Roll no\">\n                        <div *ngIf=\"studentForm.submitted && rollNo.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"rollNo.errors.required\">Please enter roll no</div>\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Date Of Addmission</label>\n                      <input name=\"doa\" readonly [(ngModel)]=\"students.doa\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\n                     \n                      aria-describedby=\"emailHelp\" placeholder=\"DOA\">\n                      <small id=\"emailHelp\" class=\"invalid-feedback\">Please select admission date</small>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Medium</label>\n                      <input name=\"medium\" \n                      #medium=\"ngModel\"\n                      [ngClass]=\"{ 'is-invalid': studentForm.submitted && medium.invalid }\" required\n                      [(ngModel)]=\"students.medium\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\n                        aria-describedby=\"emailHelp\" placeholder=\"Medium\">\n                        <div *ngIf=\"studentForm.submitted && medium.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"medium.errors.required\">Please select medium</div>\n                        </div> \n                    </div>\n                  </div> \n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-lg-3\">\n                      <div class=\"form-group\">\n                        <label for=\"exampleInputEmail1\">Phone</label>\n                        <input name=\"phone\" \n                        #phone=\"ngModel\"\n                        minlength=\"10\"\n                        maxlength=\"10\"\n                        [ngClass]=\"{ 'is-invalid': studentForm.submitted && phone.invalid }\" required\n                        [(ngModel)]=\"students.phone\" (keyup)=\"checkAlpha($event)\" type=\"text\"\n                          class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Phone\">\n                          <div *ngIf=\"studentForm.submitted && phone.invalid\" class=\"invalid-feedback\">\n                              <div *ngIf=\"phone.errors.required\">Please Enter Phone number</div>\n                              <div *ngIf=\"phone.errors.minlength\">Please Enter Valid number</div>\n                          </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-lg-3\">\n                        <div class=\"form-group\">\n                            <label for=\"exampleInputEmail1\">Nationality</label> \n                            <input name=\"nationality\"  \n                            #nationality=\"ngModel\"\n                            [ngClass]=\"{ 'is-invalid': studentForm.submitted && nationality.invalid }\" required\n                            [(ngModel)]=\"students.Nationality\"\n                             type=\"text\" \n                            class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Nationality\">\n                            <div *ngIf=\"studentForm.submitted && nationality.invalid\" class=\"invalid-feedback\">\n                                <div *ngIf=\"nationality.errors.required\">Please enter nationality</div>\n                            </div>\n                            \n                          </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                        <div class=\"form-group\">\n                            <label for=\"exampleInputEmail1\">Mother Tongue</label> \n                            <input name=\"motherTongue\" [(ngModel)]=\"students.motherTongue\"\n                           type=\"text\" \n                             class=\"form-control\" \n                             id=\"exampleInputEmail1\" \n                             aria-describedby=\"emailHelp\" \n                             placeholder=\"Mother tongue\">\n                             <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Birthdate</small>\n                          </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                        <div class=\"form-group\">\n                            <label for=\"exampleInputEmail1\">Date Of Birth</label>\n                            <input name=\"dob\" [(ngModel)]=\"students.dob\" readonly\n                            type=\"text\"  \n                            class=\"form-control\" \n                            id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"  \n                            placeholder=\"Date of birth\"> \n                            <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Birthdate</small>\n                          </div>\n                    </div>\n                  \n                  </div>\n\n                  <hr>\n  <div class=\"row\">\n<div class=\"col-lg-5\">\n</div>\n<div class=\"col-lg-2\">\n    <button [disabled]=\"!studentForm.dirty\" form=\"quick\" type=\"submit\" class=\"btn btn-primary event-btn m-2\">\n        <span *ngIf=\"this.btnLoader\"  class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n        <span *ngIf=\"this.btnLoader\"  class=\"load-text\"> Loading...</span>\n        <span *ngIf=\"!this.btnLoader\" class=\"btn-text\"><i class=\"fa fa-save\"></i> Submit</span>\n      </button>\n \n</div>\n<div class=\"col-lg-5\">\n \n</div>\n  </div> \n              </div>\n            </form>\n            </ng-template>\n          </ngb-tab>\n\n        <!-- Educational Detail's -->\n        <ngb-tab title=\"Previous Educational Detail's\">\n          <ng-template ngbTabContent>\n            <h4>Student Previous Educational Information</h4>\n            <form #eduForm=\"ngForm\" id=\"edu\" (ngSubmit)=\"eduForm.form.valid && registerEduDetails()\" novalidate>\n              <div class=\"container\">\n                \n                <div class=\"row\">\n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Previous School Name</label>\n                      <input\n                      [ngModelOptions]=\"{standalone: true}\"\n                      [(ngModel)]=\"studentEdu.PreSchoolName\"\n                       type=\"text\"\n                       name=\"PreSchoolName\"\n                        class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Previous school name\">                     \n                    </div>\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Previous Class</label>\n                      <input  required\n                        [ngModelOptions]=\"{standalone: true}\"\n                        [(ngModel)]=\"studentEdu.Preclass\"\n                        name=\"Preclass\"\n                         type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\n                        aria-describedby=\"emailHelp\" placeholder=\"Previous Class\">\n                     \n                    </div>\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Previous Course</label>\n                      <input\n                      [ngModelOptions]=\"{standalone: true}\"\n                      [(ngModel)]=\"studentEdu.Course\"\n                      name=\"Course\"\n                      type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\n                        aria-describedby=\"emailHelp\" placeholder=\"Course\">\n                    </div>\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Year Of passing</label>\n                      <input \n                      [ngModelOptions]=\"{standalone: true}\"\n                      [(ngModel)]=\"studentEdu.YearOfpassing\"\n                      name=\"YearOfpassing\"\n                      type=\"text\"\n                        class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Year Of Passing\"> \n                    </div>\n                  </div>\n                </div>\n        \n                <div class=\"row\">\n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Previous Medium</label>\n                      <input type=\"text\" class=\"form-control\" \n                        name=\"PreMedium\"\n                        [(ngModel)]=\"studentEdu.PreMedium\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                        placeholder=\"Previous medium\"> \n                    </div>\n                  </div>\n                  \n                  <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Marks Obtained</label>\n                      <input name=\"MarksObtained\" [(ngModel)]=\"studentEdu.MarksObtained\" type=\"text\" class=\"form-control\"\n                        id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Marks Obtained\">\n                      <small id=\"emailHelp\" class=\"invalid-feedback\">Please enter previous Marks Obtained</small>\n                    </div>\n                  </div> \n                  <div class=\"input-group mb-3 col-lg-4\">\n                      <label class=\"input-group\">Choose Student Photo</label>  \n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">Upload</span>\n                      </div>\n                      <div class=\"custom-file\">\n                        <input accept=\"image/*\" #image (change)=\"upload(file.files)\" type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\">\n                        <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n                      </div>\n                    </div>\n\n                </div>\n                \n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-lg-5\">\n                  </div>\n                  <div class=\"col-lg-2\">\n                    <button  form=\"edu\" type=\"submit\" class=\"btn btn-primary event-btn m-2\">\n                      <span *ngIf=\"this.btnLoader1\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                      <span *ngIf=\"this.btnLoader1\" class=\"load-text\"> Loading...</span>\n                      <span *ngIf=\"!this.btnLoader1\" class=\"btn-text\"><i class=\"fa fa-save\"></i> Submit</span>\n                    </button>\n        \n                  </div>\n                  <div class=\"col-lg-5\">\n        \n                  </div>\n                </div>\n              </div>\n            </form>\n          </ng-template>\n        </ngb-tab>\n\n          <!-- Photos Detail's -->\n          <ngb-tab title=\"Upload Photos Here\">\n            <ng-template ngbTabContent>\n              <div class=\"input-group mb-3 col-lg-4\">\n                <label class=\"input-group\">Choose Student Photo</label>  \n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">Upload</span>\n                </div>\n                <div class=\"custom-file\">\n                  <input accept=\"image/*\" #file  type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\">\n                  <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n                </div>\n              </div> \n                <div class=\"row\">\n                  <div class=\"col-lg-4\">\n\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"uploadFile(file.files)\">Upload File</button>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <span class=\"upload\" *ngIf=\"progress > 0\">\n                      {{progress}}%\n                    </span>\n                    <span class=\"upload\" *ngIf=\"message\">\n                      {{message}}\n                    </span>\n                  </div>\n                </div>\n            </ng-template>\n          </ngb-tab>\n\n            <!-- Login Detail's -->\n          <ngb-tab title=\"Login Credentials\">\n            <ng-template ngbTabContent>\n              <form [formGroup]=\"formModel\" autocomplete=\"off\" (ngSubmit)=\"Save()\"> \n              <div class=\"input-group col-lg-4\">\n                <label class=\"input-group\">User Name</label>   \n                  <input  type=\"text\" class=\"form-control\" \n                  formControlName=\"UserName\"\n                [ngClass]=\"{'is-invalid': formModel.get('UserName').errors && formModel.get('UserName').touched}\"\n                placeholder=\"UserName\"> \n                <small id=\"emailHelp\" *ngIf=\"formModel.get('UserName').hasError('required') && formModel.get('UserName').touched\" class=\"invalid-feedback\">Please enter User Name</small>\n              </div> \n                \n                  <div class=\"col-lg-4\">\n                    <label class=\"input-group\">Password</label>   \n                      <input \n                      type=\"password\" class=\"form-control\" formControlName=\"Password\"\n                  [ngClass]=\"{'is-invalid': formModel.get('Password').errors && formModel.get('Password').touched}\"\n                  placeholder=\"Password\"> \n                  <small id=\"emailHelp\" *ngIf=\"formModel.get('Password').hasError('required') && formModel.get('Password').touched\" class=\"invalid-feedback\">Please enter Password</small>\n                  </div>\n                  <br>\n                  <div class=\"col-lg-4\">\n                    <button type=\"submit\" [disabled]=\"!formModel.valid\"  class=\"btn btn-success\">Save</button>\n                  </div>\n                  <div class=\"col-lg-4\">\n                     \n                  </div>\n                </form>\n            </ng-template>\n          </ngb-tab>\n\n        </ngb-tabset>\n      </app-card>\n    </div>\n  </div>\n  ";
    /***/
  },

  /***/
  "./src/app/_resolver/stuQuickAdmissionEdit.resolver.ts":
  /*!*************************************************************!*\
    !*** ./src/app/_resolver/stuQuickAdmissionEdit.resolver.ts ***!
    \*************************************************************/

  /*! exports provided: stuQuickAdmissionEdit */

  /***/
  function srcApp_resolverStuQuickAdmissionEditResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stuQuickAdmissionEdit", function () {
      return stuQuickAdmissionEdit;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/observable/of */
    "./node_modules/rxjs-compat/_esm2015/add/observable/of.js");
    /* harmony import */


    var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/operator/catch */
    "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
    /* harmony import */


    var _services_classlevel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/classlevel.service */
    "./src/app/services/classlevel.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var stuQuickAdmissionEdit = /*#__PURE__*/function () {
      function stuQuickAdmissionEdit(userService, router) {
        _classCallCheck(this, stuQuickAdmissionEdit);

        this.userService = userService;
        this.router = router;
      }

      _createClass(stuQuickAdmissionEdit, [{
        key: "resolve",
        value: function resolve(route) {
          var _this = this;

          return this.userService.getQuickStudent(route.params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) {
            _this.router.navigate(['/members']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
          }));
        }
      }]);

      return stuQuickAdmissionEdit;
    }();

    stuQuickAdmissionEdit.ctorParameters = function () {
      return [{
        type: _services_classlevel_service__WEBPACK_IMPORTED_MODULE_6__["ClasslevelService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    stuQuickAdmissionEdit = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], stuQuickAdmissionEdit);
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-stu-edit/basic-stu-edit-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-stu-edit/basic-stu-edit-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: BasicStudentEditRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicStuEditBasicStuEditRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicStudentEditRoutingModule", function () {
      return BasicStudentEditRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _basic_stu_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-stu-edit.component */
    "./src/app/demo/ui-elements/ui-basic/basic-stu-edit/basic-stu-edit.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var routes = [{
      path: '',
      component: _basic_stu_edit_component__WEBPACK_IMPORTED_MODULE_2__["BasicStuEditComponent"]
    }];

    var BasicStudentEditRoutingModule = function BasicStudentEditRoutingModule() {
      _classCallCheck(this, BasicStudentEditRoutingModule);
    };

    BasicStudentEditRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], BasicStudentEditRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-stu-edit/basic-stu-edit.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-stu-edit/basic-stu-edit.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoUiElementsUiBasicBasicStuEditBasicStuEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtc3R1LWVkaXQvYmFzaWMtc3R1LWVkaXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-stu-edit/basic-stu-edit.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-stu-edit/basic-stu-edit.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: BasicStuEditComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicStuEditBasicStuEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicStuEditComponent", function () {
      return BasicStuEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_classlevel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/classlevel.service */
    "./src/app/services/classlevel.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_services_AuthServices_Auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/AuthServices/Auth.service */
    "./src/app/services/AuthServices/Auth.service.ts");

    var BasicStuEditComponent = /*#__PURE__*/function () {
      function BasicStuEditComponent(http, _route, _classLevel, _authServices, fb, toastr) {
        var _this2 = this;

        _classCallCheck(this, BasicStuEditComponent);

        this.http = http;
        this._route = _route;
        this._classLevel = _classLevel;
        this._authServices = _authServices;
        this.fb = fb;
        this.toastr = toastr;
        this.selected = true;
        this.isChange = false;
        this.role = 'Student';
        this.onUploadFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.uploadFile = function (files) {
          if (files.length === 0) {
            return;
          }

          var fileToUpload = files[0];
          var formData = new FormData();
          formData.append('file', fileToUpload, fileToUpload.name);

          _this2.http.post("http://localhost:5000/api/QuickAdmission/".concat(+_this2._route.snapshot.params['id'], "/Upload"), formData, {
            reportProgress: true,
            observe: 'events'
          }).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].UploadProgress) _this2.progress = Math.round(100 * event.loaded / event.total);else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].Response) {
              _this2.message = 'Upload success.';

              _this2.onUploadFinished.emit(event.body);
            }
          });
        };

        this.btnLoader1 = false;
        this.btnLoader = false;
      }

      _createClass(BasicStuEditComponent, [{
        key: "unloadNotification",
        value: function unloadNotification($event) {
          if (this.studentForm.dirty) {
            $event.returnValue = true;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.createPost();

          this._classLevel.getQuickStudent(+this._route.snapshot.params['id']).subscribe(function (user) {
            _this3.students = user;

            _this3.AssignSelectedDropDown();

            _this3.LevelChangeOnLoad(+_this3.students.classLevel);
          }, function (error) {});

          this._classLevel.getEduStudent(+this._route.snapshot.params['id']).subscribe(function (eduStudent) {
            _this3.studentEdu = eduStudent;
          }, function (error) {});
        }
      }, {
        key: "createPost",
        value: function createPost() {
          this.formModel = this.fb.group({
            UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }
      }, {
        key: "updateStudent",
        value: function updateStudent() {
          var _this4 = this;

          this.btnLoader = true;

          this._classLevel.updateAdmission(+this._route.snapshot.params['id'], this.students).subscribe(function (next) {
            _this4.toastr.success('Student Details Updated!', 'Data Saved');

            _this4.btnLoader = false;

            _this4.studentForm.reset(_this4.students);
          }, function (error) {
            _this4.toastr.error('Error in updating!', 'Failed');

            _this4.btnLoader = false;
          });
        } //Assign Login Details

      }, {
        key: "Save",
        value: function Save() {
          var _this5 = this;

          this.btnLoader = true;

          if (this.formModel.valid) {
            this.authRegister = Object.assign({}, this.formModel.value);

            this._authServices.Sturegister(this.authRegister, this.role, this.students.admissionNo).subscribe(function () {
              _this5.toastr.success('Role Assigned!', 'Data Saved');

              _this5.formModel.reset();

              _this5.btnLoader = false;

              _this5.createPost();
            }, function (error) {
              _this5.toastr.error('Role Assigned Failed!', 'Problem in saving Data', error);

              _this5.btnLoader = false;
            }, function () {});
          }
        }
      }, {
        key: "registerEduDetails",
        value: function registerEduDetails() {
          var _this6 = this;

          this.btnLoader1 = true;
          this.studentEdu.stuId = +this._route.snapshot.params['id'];

          this._classLevel.registerUpdateEdu(+this._route.snapshot.params['id'], this.studentEdu).subscribe(function (next) {
            _this6.toastr.success('Student Educational Details Updated!', 'Data Saved');

            _this6.btnLoader1 = false;
          }, function (error) {
            _this6.toastr.error('Error in updating!', 'Failed');

            _this6.btnLoader1 = false;
          });
        }
      }, {
        key: "AssignSelectedDropDown",
        value: function AssignSelectedDropDown() {
          if (this.students.classLevel == '1') {
            this.clasLevel = 'Junior';
          }

          if (this.students.classLevel == '2') {
            this.clasLevel = 'Senior';
          }

          if (this.students.gender == "1") {
            this.gender = 'Male';
          }

          if (this.students.gender == "2") {
            this.gender = 'Female';
          }

          if (this.students.gender == "3") {
            this.gender = 'Other';
          }
        }
      }, {
        key: "LevelChange",
        value: function LevelChange(event) {
          var _this7 = this;

          this.isChange = true;
          var Ids = event.target.value;

          this._classLevel.getClass(Ids).subscribe(function (data) {
            _this7.allClasses = data;
          });
        }
      }, {
        key: "LevelChangeOnLoad",
        value: function LevelChangeOnLoad(id) {
          var _this8 = this;

          this._classLevel.getClass(id).subscribe(function (data) {
            _this8.allClasses = data;
          });
        } // check phoneNo contain alphabet

      }, {
        key: "checkAlpha",
        value: function checkAlpha(event) {
          var val = event.target.value;

          if (isNaN(val)) {
            var str = val.substring(0, val.length - 1);
            event.target.value = str;
          }
        }
      }]);

      return BasicStuEditComponent;
    }();

    BasicStuEditComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_services_classlevel_service__WEBPACK_IMPORTED_MODULE_2__["ClasslevelService"]
      }, {
        type: src_app_services_AuthServices_Auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], BasicStuEditComponent.prototype, "onUploadFinished", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studentForm', {
      "static": true
    })], BasicStuEditComponent.prototype, "studentForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('eduForm', {
      "static": true
    })], BasicStuEditComponent.prototype, "eduForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload', ['$event'])], BasicStuEditComponent.prototype, "unloadNotification", null);
    BasicStuEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-basic-stu-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./basic-stu-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-stu-edit/basic-stu-edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./basic-stu-edit.component.css */
      "./src/app/demo/ui-elements/ui-basic/basic-stu-edit/basic-stu-edit.component.css"))["default"]]
    })], BasicStuEditComponent);
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-stu-edit/basic-stu-edit.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-stu-edit/basic-stu-edit.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: BasicStuEditModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicStuEditBasicStuEditModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicStuEditModule", function () {
      return BasicStuEditModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _basic_stu_edit_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./basic-stu-edit-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-stu-edit/basic-stu-edit-routing.module.ts");
    /* harmony import */


    var _basic_stu_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./basic-stu-edit.component */
    "./src/app/demo/ui-elements/ui-basic/basic-stu-edit/basic-stu-edit.component.ts");
    /* harmony import */


    var src_app_resolver_stuQuickAdmissionEdit_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_resolver/stuQuickAdmissionEdit.resolver */
    "./src/app/_resolver/stuQuickAdmissionEdit.resolver.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var BasicStuEditModule = function BasicStuEditModule() {
      _classCallCheck(this, BasicStuEditModule);
    };

    BasicStuEditModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _basic_stu_edit_routing_module__WEBPACK_IMPORTED_MODULE_4__["BasicStudentEditRoutingModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot()],
      declarations: [_basic_stu_edit_component__WEBPACK_IMPORTED_MODULE_5__["BasicStuEditComponent"]],
      providers: [src_app_resolver_stuQuickAdmissionEdit_resolver__WEBPACK_IMPORTED_MODULE_6__["stuQuickAdmissionEdit"]]
    })], BasicStuEditModule);
    /***/
  }
}]);
//# sourceMappingURL=basic-stu-edit-basic-stu-edit-module-es5.js.map