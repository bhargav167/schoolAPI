(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-student-basic-student-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-student/basic-student.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-student/basic-student.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n<div class=\"container\">\n  <form [formGroup]=\"registerStudent\" (ngSubmit)=\"register()\"> \n  <div class=\"row\">\n    <div class=\"col-lg-3\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">First Name</label>\n      \n        <input formControlName=\"firstName\" \n        [ngClass]=\"{'is-invalid': registerStudent.get('firstName').errors && registerStudent.get('firstName').touched}\"\n        type=\"text\" \n        class=\"form-control\" \n        id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" \n        placeholder=\"First Name\">  \n        <small id=\"emailHelp\" *ngIf=\"registerStudent.get('firstName').hasError('required') && registerStudent.get('firstName').touched\" class=\"invalid-feedback\">Please enter First Name</small>\n        <small id=\"emailHelp\" *ngIf=\"registerStudent.get('firstName').hasError('minlength') && registerStudent.get('firstName').touched\" class=\"invalid-feedback\">Please enter valid name. Too short</small>\n      </div>\n    </div>\n    <div class=\"col-lg-3\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Last Name</label>\n\n        <input formControlName=\"lastName\" type=\"text\" \n        [ngClass]=\"{'is-invalid': registerStudent.get('lastName').errors && registerStudent.get('lastName').touched}\"\n        class=\"form-control\" \n        id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" \n        placeholder=\"Last Name\">\n        <small id=\"emailHelp\" *ngIf=\"registerStudent.get('lastName').hasError('required') && registerStudent.get('lastName').touched\" class=\"invalid-feedback\">Please enter First Name</small>\n        <small id=\"emailHelp\" *ngIf=\"registerStudent.get('lastName').hasError('minlength') && registerStudent.get('lastName').touched\" class=\"invalid-feedback\">Please enter valid name. Too short</small>\n          \n      </div>\n    </div>\n    <div class=\"col-lg-3\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Email address</label>\n        <input formControlName=\"email\" \n        [ngClass]=\"{'is-invalid': registerStudent.get('email').errors && registerStudent.get('email').touched}\"\n        type=\"email\" class=\"form-control\" \n        id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" \n        placeholder=\"Enter email\">\n        <small id=\"emailHelp\" *ngIf=\"registerStudent.get('email').hasError('required') && registerStudent.get('email').touched\" class=\"invalid-feedback\">Please enter First Name</small>\n        <small id=\"emailHelp\" *ngIf=\"registerStudent.get('email').hasError('minlength') && registerStudent.get('email').touched\" class=\"invalid-feedback\">Please enter valid email. Too short</small>\n      \n      </div>\n    </div>\n    <div class=\"col-lg-3\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Gender</label>\n        <select formControlName=\"gender\" class=\"form-control\" \n        [ngClass]=\"{'is-invalid': registerStudent.get('gender').errors && registerStudent.get('gender').touched}\"\n        id=\"exampleFormControlSelect1\">\n          <option [selected]=\"selected\" disabled>--Select--</option>\n          <option value=\"male\">Male</option>\n          <option value=\"female\">Female</option>\n          <option value=\"other\">Other</option> \n        </select>\n        <small id=\"emailHelp\" class=\"invalid-feedback\">Please select gender</small>\n       </div>\n    </div>\n  </div> \n\n  \n\n  <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Date Of Birth</label>\n          <input formControlName=\"dob\" \n          [ngClass]=\"{'is-invalid': registerStudent.get('dob').errors && registerStudent.get('dob').touched}\"\n          type=\"text\" \n          \n          class=\"form-control\" \n          id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" \n          name=\"dp\"\n          placeholder=\"Date of birth\" bsDatepicker>\n \n\n          <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Birthdate</small>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Mother Tongue</label>\n          \n          <input formControlName=\"motherTongue\"\n          [ngClass]=\"{'is-invalid': registerStudent.get('motherTongue').errors && registerStudent.get('motherTongue').touched}\"\n           type=\"text\" \n           class=\"form-control\" \n           id=\"exampleInputEmail1\" \n           aria-describedby=\"emailHelp\" \n           placeholder=\"Mother tongue\">\n           <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Birthdate</small>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Nationality</label> \n          <input \n          [ngClass]=\"{'is-invalid': registerStudent.get('nationality').errors && registerStudent.get('nationality').touched}\"\n          formControlName=\"nationality\" type=\"text\" \n          class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Nationality\">\n          <small id=\"emailHelp\" class=\"invalid-feedback\">Please enter nationality</small>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Father Name</label>\n            <input formControlName=\"fathername\"\n            [ngClass]=\"{'is-invalid': registerStudent.get('fathername').errors && registerStudent.get('fathername').touched}\" \n            type=\"fathername\" \n             class=\"form-control\" \n             id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" \n             placeholder=\"Father Name\">\n             <small id=\"emailHelp\" class=\"invalid-feedback\">Please enter father name</small>\n            </div>\n        </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-3\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Phone</label>\n        <input formControlName=\"phone\" \n        (keyup)=\"checkAlpha($event)\"\n        [ngClass]=\"{'is-invalid': registerStudent.get('phone').errors && registerStudent.get('phone').touched}\" \n        type=\"text\" \n        class=\"form-control\" \n        id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" \n        placeholder=\"Phone\">\n        <small id=\"emailHelp\" *ngIf=\"registerStudent.get('phone').hasError('required') && registerStudent.get('phone').touched\" class=\"invalid-feedback\">Please enter Mobile no</small>\n        <small id=\"emailHelp\" *ngIf=\"registerStudent.get('phone').hasError('minlength') && registerStudent.get('phone').touched\" class=\"invalid-feedback\">Enter Number must be 10 digit</small>\n        <small id=\"emailHelp\" *ngIf=\"registerStudent.get('phone').hasError('maxlength') && registerStudent.get('phone').touched\" class=\"invalid-feedback\">Enter Number must be 10 digit</small>\n        <small id=\"emailHelp\" *ngIf=\"registerStudent.get('phone').hasError('pattern') && registerStudent.get('phone').touched\" class=\"invalid-feedback\">Only digit allow</small>\n\n          </div>\n    </div>\n    <div class=\"col-lg-3\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Class level</label>\n        <select (change)=\"LevelChange($event)\" formControlName=\"classLevel\" \n        [ngClass]=\"{'is-invalid': registerStudent.get('classLevel').errors && registerStudent.get('classLevel').touched}\" \n        class=\"form-control\" \n        id=\"exampleFormControlSelect1\">\n        <option value=\"-1\"  [selected]=\"selected\" disabled>--Select--</option>          \n           <option value=\"1\">Junior</option>\n          <option value=\"2\">Senior</option>\n        </select>\n        <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Class level</small>\n      </div>\n    </div>\n    <div class=\"col-lg-3\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Class</label>\n        <select formControlName=\"standers\" \n        (change)=\"ClassChange($event)\"\n        appSelectRequiredValidator\n        [ngClass]=\"{'is-invalid': registerStudent.get('standers').errors && registerStudent.get('standers').touched}\" \n        class=\"form-control\" id=\"exampleFormControlSelect1\">\n        <option [selected]=\"selected\">--Select--</option>\n         <option *ngFor=\"let items of allClasses\">{{items.classes}}</option>\n        </select>\n        <small id=\"emailHelp\" class=\"invalid-feedback\">Please select class</small>\n        <small id=\"emailHelp\" *ngIf=\"registerStudent.get('standers').hasError('defaultSelected') && registerStudent.get('standers').touched\" class=\"invalid-feedback\">Only digit allow</small>\n \n      </div>\n    </div>\n    <div class=\"col-lg-3\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Class Section</label>\n        <select formControlName=\"classsection\" \n        [ngClass]=\"{'is-invalid': registerStudent.get('classsection').errors && registerStudent.get('classsection').touched}\" \n        class=\"form-control\" id=\"exampleFormControlSelect1\">\n        <option [selected]=\"selected\">--Select--</option>\n        <option *ngFor=\"let items of sections\">{{items}}</option>\n        </select>\n        <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Section</small>\n      </div>\n    </div>\n  \n  </div>\n\n  <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Admission Number</label>\n          <input formControlName=\"admissionno\" \n           type=\"text\"  \n          [value]=\"admissionNo\"\n          readonly\n          class=\"form-control\" \n          id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" \n          placeholder=\"Admission no\">\n         </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Roll Number</label>\n          <input formControlName=\"rollno\" \n          [ngClass]=\"{'is-invalid': registerStudent.get('rollno').errors && registerStudent.get('rollno').touched}\" \n          type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Roll no\">\n          <small id=\"emailHelp\" class=\"invalid-feedback\">Please enter roll no</small>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Date Of Addmission</label>\n          <input formControlName=\"doa\" \n          [value]=\"todaydate\"\n          [bsConfig]=\"bsConfig\"\n          bsDatepicker\n          [ngClass]=\"{'is-invalid': registerStudent.get('doa').errors && registerStudent.get('doa').touched}\" \n          type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"DOA\">\n          <small id=\"emailHelp\" class=\"invalid-feedback\">Please select admission date</small>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Medium</label>\n          <input  formControlName=\"medium\"\n          [ngClass]=\"{'is-invalid': registerStudent.get('medium').errors && registerStudent.get('medium').touched}\" \n          type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Medium\">\n          <small id=\"emailHelp\" class=\"invalid-feedback\">Please select medium</small>\n\n        </div>\n      </div>\n    \n  </div>\n\n<hr>\n  <div class=\"row\">\n<div class=\"col-lg-5\">\n</div>\n<div class=\"col-lg-2\">\n    <button class=\"btn btn-primary event-btn m-2\" type=\"submit\" [disabled]=\"!registerStudent.valid\">\n        <span *ngIf=\"this.btnLoader\"  class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n        <span *ngIf=\"this.btnLoader\"  class=\"load-text\"> Loading...</span>\n        <span *ngIf=\"!this.btnLoader\" class=\"btn-text\"><i class=\"fa fa-save\"></i> Save</span>\n      </button>\n    \n</div>\n<div class=\"col-lg-5\">\n \n</div>\n  </div> \n\n</form> \n </div>\n\n");

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-student/basic-student-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-student/basic-student-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: BasicStudentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicStudentRoutingModule", function() { return BasicStudentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _basic_student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-student.component */ "./src/app/demo/ui-elements/ui-basic/basic-student/basic-student.component.ts");




const routes = [
    {
        path: '',
        component: _basic_student_component__WEBPACK_IMPORTED_MODULE_3__["BasicStudentComponent"]
    }
];
let BasicStudentRoutingModule = class BasicStudentRoutingModule {
};
BasicStudentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BasicStudentRoutingModule);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-student/basic-student.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-student/basic-student.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtc3R1ZGVudC9iYXNpYy1zdHVkZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-student/basic-student.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-student/basic-student.component.ts ***!
  \************************************************************************************/
/*! exports provided: BasicStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicStudentComponent", function() { return BasicStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_classlevel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/classlevel.service */ "./src/app/services/classlevel.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let BasicStudentComponent = class BasicStudentComponent {
    constructor(fb, _classLevel, toastr) {
        this.fb = fb;
        this._classLevel = _classLevel;
        this.toastr = toastr;
        this.selected = true;
        this.btnLoader = false;
    }
    ngOnInit() {
        this.bsConfig = {
            containerClass: 'theme-red'
        };
        this.todaydate = new Date();
        var dd = String(this.todaydate.getDate()).padStart(2, '0');
        var mm = String(this.todaydate.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = this.todaydate.getFullYear();
        this.todaydate = mm + '/' + dd + '/' + yyyy;
        this.createRegisterForm();
        this.getLastId();
    }
    createRegisterForm() {
        this.registerStudent = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(14)]],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            doa: [this.todaydate],
            motherTongue: ['HINDI', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nationality: ['INDIAN', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fathername: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')]],
            classLevel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            standers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            classsection: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            admissionno: [this.admissionNo],
            rollno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            medium: ['ENGLISH', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    LevelChange(event) {
        let Ids = event.target.value;
        this._classLevel.getClass(Ids).subscribe((data) => {
            this.allClasses = data;
        });
    }
    ClassChange(event) {
        let classes = event.target.value;
        this._classLevel.getSection(classes).subscribe((data) => {
            this.allSec = data;
            this.sections = this.allSec.sections.split(',');
        });
    }
    register() {
        if (this.registerStudent.controls['standers'].value == "--Select--")
            return this.toastr.warning("Please Select Correct Class");
        this.btnLoader = true;
        if (this.registerStudent.valid) {
            this.quickAdmission = Object.assign({}, this.registerStudent.value);
            this.quickAdmission.admissionNo = this.admissionNo.toString();
            this._classLevel.register(this.quickAdmission).subscribe(() => {
                this.toastr.success('Quick Admission Done!', 'Data Saved');
                this.registerStudent.reset();
                this.btnLoader = false;
                this.getLastId();
                this.createRegisterForm();
            }, error => {
                this.toastr.error('Quick Admission Failed!', 'Problem in saving Data', error);
                this.btnLoader = false;
            }, () => {
            });
        }
    }
    // check phoneNo contain alphabet
    checkAlpha(event) {
        let val = event.target.value;
        if (isNaN(val)) {
            let str = val.substring(0, val.length - 1);
            event.target.value = str;
        }
    }
    getLastId() {
        this._classLevel.getLastAdmissionId().subscribe((data) => {
            if (data == null) {
                this.admissionNo = 1;
            }
            this.admissionNo = data.admissionNo;
            this.admissionNo = parseInt(this.admissionNo) + 1;
        });
    }
};
BasicStudentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_classlevel_service__WEBPACK_IMPORTED_MODULE_3__["ClasslevelService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
BasicStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic-student',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic-student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-student/basic-student.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basic-student.component.css */ "./src/app/demo/ui-elements/ui-basic/basic-student/basic-student.component.css")).default]
    })
], BasicStudentComponent);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-student/basic-student.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-student/basic-student.module.ts ***!
  \*********************************************************************************/
/*! exports provided: BasicStudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicStudentModule", function() { return BasicStudentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _basic_student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-student.component */ "./src/app/demo/ui-elements/ui-basic/basic-student/basic-student.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _basic_student_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic-student-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-student/basic-student-routing.module.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");








let BasicStudentModule = class BasicStudentModule {
};
BasicStudentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _basic_student_routing_module__WEBPACK_IMPORTED_MODULE_5__["BasicStudentRoutingModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()
        ],
        declarations: [_basic_student_component__WEBPACK_IMPORTED_MODULE_3__["BasicStudentComponent"]]
    })
], BasicStudentModule);



/***/ })

}]);
//# sourceMappingURL=basic-student-basic-student-module-es2015.js.map