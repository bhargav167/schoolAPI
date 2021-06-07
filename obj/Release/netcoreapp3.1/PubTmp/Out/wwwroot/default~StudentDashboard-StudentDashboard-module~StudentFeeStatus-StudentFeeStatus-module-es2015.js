(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~StudentDashboard-StudentDashboard-module~StudentFeeStatus-StudentFeeStatus-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/layout/StudentFeeStatus/StudentFeeStatus.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/layout/StudentFeeStatus/StudentFeeStatus.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\">\n  <div class=\"page-block\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-md-12\">\n        <div class=\"page-header-title\">\n          <ng-container>\n            <h5 class=\"m-b-10\">Fee Status\n            </h5>\n          </ng-container>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n</div> \n\n\n<div class=\"container\">\n  <div class=\"row\">\n<div class=\"col-lg-3\">\n<label class=\"lable\">Admission Number:</label>\n{{stuDetails.admissionNo}}\n</div> \n<div class=\"col-lg-3\">\n  <label class=\"lable\">Student Name:</label>\n  {{stuDetails.firstName}} {{stuDetails.lastName}}\n  </div> \n  <div class=\"col-lg-3\">\n    <label class=\"lable\">Student RollNo:</label>\n    {{stuDetails.rollNo}}\n    </div>\n    \n    <div class=\"col-lg-3\">\n      <label class=\"lable\">Phone Number:</label>\n      {{stuDetails.phone}}\n      </div>\n      \n  </div>\n</div>\n<hr>\n<br> \n  <div class=\"col-md-12\">\n    <app-card cardTitle=\"Fee Monitor\" cardClass=\"table-card\" blockClass=\"p-0\">\n      <perfect-scrollbar [style.max-height]=\"'362px'\">\n        <table class=\"table table-hover m-b-0\">\n          <thead>\n            <tr>\n              <th><span>Fee Type</span></th>\n              <th>\n                <span>Term-1\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Term-2\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Term-1 Paid Amount\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Term-2 Paid Amount\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Term-1 Due Amount\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Term-2 Due Amount\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>  \n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of feeModule?.feeParticular\">\n              <td>{{item.FeeType}}</td>\n              <td class=\"text text-center\">{{item.Term1}}\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"100\"></ngb-progressbar>\n                </div>\n              </td>\n              <td class=\"text text-center\">{{item.Term12}}\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"100\"></ngb-progressbar>\n                </div>\n              </td>\n              <td class=\"text text-center\">{{item.Term1DueAmt}}\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"item.Term1DueAmt / item.Term1*100\"></ngb-progressbar>\n                </div>\n              </td>\n              <td class=\"text text-center\">{{item.Term2DueAmt}}\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"item.Term2DueAmt / item.Term12*100\"></ngb-progressbar>\n                </div>\n              </td>\n              <td class=\"text text-center\">{{item.Term1Paid}}\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"item.Term1Paid / item.Term1*100\"></ngb-progressbar>\n                </div>\n              </td>\n              <td class=\"text text-center\">{{item.Term2Paid}}\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"item.Term2Paid / item.Term12*100\"></ngb-progressbar>\n                </div>\n              </td>\n      \n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td class=\"summary\">Fees Summary:</td>\n              <td style=\"font-weight: bold; color:black;\" class=\"alert alert-danger text text-center\">{{Term1Fee}}</td>\n              <td style=\"font-weight: bold; color:black;\" class=\"alert alert-danger text text-center\">{{Term2Fee}}</td>\n              <td style=\"font-weight: bold; color:black;\" class=\"alert alert-success text text-center\">{{Term1FeePaidAmt}}</td>\n              <td style=\"font-weight: bold; color:black;\" class=\"alert alert-success text text-center\">{{Term2FeePaidAmt}}</td>\n              <td style=\"font-weight: bold; color:black;\" class=\"alert alert-warning text text-center\">{{Term1FeeDueAmt}}</td>\n              <td style=\"font-weight: bold; color:black;\" class=\"alert alert-warning text text-center\">{{Term2FeeDueAmt}}</td>\n            </tr> \n          </tfoot>\n        </table>\n      </perfect-scrollbar>\n    </app-card>\n  </div>\n \n");

/***/ }),

/***/ "./src/app/demo/pages/layout/StudentFeeStatus/StudentFeeStatus-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/demo/pages/layout/StudentFeeStatus/StudentFeeStatus-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: StudentFeeStatusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentFeeStatusRoutingModule", function() { return StudentFeeStatusRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_gaurd/Auth.guard */ "./src/app/_gaurd/Auth.guard.ts");
/* harmony import */ var _StudentFeeStatus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StudentFeeStatus.component */ "./src/app/demo/pages/layout/StudentFeeStatus/StudentFeeStatus.component.ts");





const routes = [
    {
        path: '',
        component: _StudentFeeStatus_component__WEBPACK_IMPORTED_MODULE_4__["StudentFeeStatusComponent"],
        canActivate: [src_app_gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGaurd"]],
        data: { permittedRoles: ['Student'] },
    }
];
let StudentFeeStatusRoutingModule = class StudentFeeStatusRoutingModule {
};
StudentFeeStatusRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StudentFeeStatusRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/layout/StudentFeeStatus/StudentFeeStatus.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/demo/pages/layout/StudentFeeStatus/StudentFeeStatus.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lable{\r\n    font-weight: bolder;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    color: black;\r\n}\r\n.summary{\r\n    font-weight: bolder;\r\n    font-style: oblique;\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9sYXlvdXQvU3R1ZGVudEZlZVN0YXR1cy9TdHVkZW50RmVlU3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvbGF5b3V0L1N0dWRlbnRGZWVTdGF0dXMvU3R1ZGVudEZlZVN0YXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5zdW1tYXJ5e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/demo/pages/layout/StudentFeeStatus/StudentFeeStatus.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/pages/layout/StudentFeeStatus/StudentFeeStatus.component.ts ***!
  \**********************************************************************************/
/*! exports provided: StudentFeeStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentFeeStatusComponent", function() { return StudentFeeStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_StudentServices_Student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/StudentServices/Student.service */ "./src/app/services/StudentServices/Student.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let StudentFeeStatusComponent = class StudentFeeStatusComponent {
    constructor(_feeModule, _route, _toster) {
        this._feeModule = _feeModule;
        this._route = _route;
        this._toster = _toster;
        this.Term1Fee = 0;
        this.Term2Fee = 0;
        this.Term1FeePaidAmt = 0;
        this.Term2FeePaidAmt = 0;
        this.Term1FeeDueAmt = 0;
        this.Term2FeeDueAmt = 0;
    }
    ngOnInit() {
        this.userId = localStorage.getItem('Id');
        this.getStudentDetails();
    }
    getStudentDetails() {
        this._feeModule.getStudentDetails(this.userId).subscribe((res) => {
            this.stuDetails = res;
            this.Id = this.stuDetails.Id;
            this.stander = this.stuDetails.standers;
            this.section = this.stuDetails.classsection;
            this.loadFeeStaus(this.Id, this.stander, this.section);
        }, err => {
            this._toster.error("Error In Loading Student Details");
        });
    }
    loadFeeStaus(id, stander, section) {
        this._feeModule.getStudentFeeDetails(id, stander, section)
            .subscribe((res) => {
            this.feeModule = res;
            this.feeModule.feeParticular.forEach(element => {
                element.Term1 = element.Term1;
                element.Term12 = element.Term12;
                element.Term1DueAmt = element.Term1DueAmt;
                element.Term2DueAmt = element.Term2DueAmt;
                element.Term1Paid = element.Term1Paid;
                element.Term2Paid = element.Term2Paid;
                this.Term1Fee = this.Term1Fee + element.Term1;
                this.Term2Fee = this.Term2Fee + element.Term12;
                this.Term1FeePaidAmt += element.Term1DueAmt;
                this.Term2FeePaidAmt += element.Term2DueAmt;
                this.Term1FeeDueAmt += element.Term1Paid;
                this.Term2FeeDueAmt += element.Term2Paid;
            });
        }, error => {
            console.log(error);
        });
    }
};
StudentFeeStatusComponent.ctorParameters = () => [
    { type: src_app_services_StudentServices_Student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
StudentFeeStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-StudentFeeStatus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./StudentFeeStatus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/layout/StudentFeeStatus/StudentFeeStatus.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./StudentFeeStatus.component.css */ "./src/app/demo/pages/layout/StudentFeeStatus/StudentFeeStatus.component.css")).default]
    })
], StudentFeeStatusComponent);



/***/ }),

/***/ "./src/app/demo/pages/layout/StudentFeeStatus/StudentFeeStatus.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/demo/pages/layout/StudentFeeStatus/StudentFeeStatus.module.ts ***!
  \*******************************************************************************/
/*! exports provided: StudentFeeStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentFeeStatusModule", function() { return StudentFeeStatusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _StudentFeeStatus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StudentFeeStatus.component */ "./src/app/demo/pages/layout/StudentFeeStatus/StudentFeeStatus.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _StudentFeeStatus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StudentFeeStatus-routing.module */ "./src/app/demo/pages/layout/StudentFeeStatus/StudentFeeStatus-routing.module.ts");






let StudentFeeStatusModule = class StudentFeeStatusModule {
};
StudentFeeStatusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _StudentFeeStatus_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentFeeStatusRoutingModule"]
        ],
        declarations: [_StudentFeeStatus_component__WEBPACK_IMPORTED_MODULE_3__["StudentFeeStatusComponent"]],
        exports: [_StudentFeeStatus_component__WEBPACK_IMPORTED_MODULE_3__["StudentFeeStatusComponent"]],
    })
], StudentFeeStatusModule);



/***/ }),

/***/ "./src/app/services/StudentServices/Student.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/StudentServices/Student.service.ts ***!
  \*************************************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let StudentService = class StudentService {
    constructor(_http) {
        this._http = _http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    getStudentDetails(id) {
        return this._http.get(this.baseURL + 'StudentDashboard' + '/' + id);
    }
    getStudentFeeDetails(StudentId, stander, Section) {
        return this._http.get(this.baseURL + 'StudentDashboard' + '/FeeStatus' + '/' + StudentId + "/" + stander + '/' + Section);
    }
};
StudentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StudentService);



/***/ })

}]);
//# sourceMappingURL=default~StudentDashboard-StudentDashboard-module~StudentFeeStatus-StudentFeeStatus-module-es2015.js.map