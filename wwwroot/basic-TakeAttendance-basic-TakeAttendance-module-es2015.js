(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-TakeAttendance-basic-TakeAttendance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-TakeAttendance/basic-TakeAttendance.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-TakeAttendance/basic-TakeAttendance.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-lg-1\">  \n  </div>\n  <div class=\"col-lg-2\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Class level</label>\n      <select (change)=\"LevelChange($event)\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n        <option value=\"-1\" [selected]=\"selected\" disabled>--Select--</option>\n        <option value=\"1\">Junior</option>\n        <option value=\"2\">Senior</option>\n      </select>  \n    </div>\n  </div>\n  <div class=\"col-lg-2\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Class</label>\n      <select (change)='onOptionsSelected($event)' class=\"form-control\" id=\"exampleFormControlSelect1\"> \n        <option [selected]=\"selected\" disabled>--Select--</option>\n          <option *ngFor=\"let items of allClasses\" [ngValue]=\"items\">{{items.classes}}</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"col-lg-2\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Class Section</label>\n      <select (change)=\"onOptionsSelectedStudents($event)\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n        <option [selected]=\"selected\" disabled>--Select--</option>\n        <option value=\"A\">A</option>\n        <option value=\"B\">B</option>\n      </select>\n      <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Section</small>\n    </div>\n  </div> \n  <div class=\"col-lg-2\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Select Date</label>\n      <input bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY' }\" [(ngModel)]=\"todaydate\" [minDate]=\"minDate\"\n        [maxDate]=\"maxDate\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n        [name]=\"todaydate\" placeholder=\"\">\n      <small id=\"emailHelp\" class=\"invalid-feedback\"></small>\n    </div>\n  </div>\n  <div class=\"col-lg-2\">\n      <br>\n    <div class=\"form-group\">  \n      <button style=\"margin-top: 8px;\" (click)=\"getStuByClassSelect()\" class=\"btn btn-danger\" >\n        <span *ngIf=\"this.btnLoader\"  class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n        <span *ngIf=\"this.btnLoader\"  class=\"load-text\"> Loading...</span>\n        <span *ngIf=\"!this.btnLoader\" class=\"btn-text\"><i class=\"fa fa-search\"></i> Get</span>\n      </button>\n    \n    </div>\n  </div>\n\n</div>  \n<br>\n<div *ngIf=\"showData==true\">\n  <hr>\n  <div class=\"row\">\n<div class=\"col-lg-4\">\n\n</div>\n\n<div class=\"col-lg-4\">\n  <h4 class=\"\">Mark Attendance</h4><br>\n</div>\n<div class=\"col-lg-4\">\n\n</div>\n  </div>\n \n\n  <form (ngSubmit)=\"MarkAttendance()\">\n    <div class=\"row\">\n<div class=\"col-lg-2\">\n\n</div>\n<div class=\"col-lg-9\">\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <td>Roll Number</td>\n        <td>Student Name</td>\n        <td>Status</td>\n        \n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of attendance; let i=index\">\n        <td>\n          {{item.RollNo}}</td>\n        <td>\n          {{item.Name}}</td>\n        <td>\n          <div class=\"form-group\"> \n            <select *ngIf=\"item.status==null\" [(ngModel)]=\"item.Status\" name={{i}} class=\"form-control\" style=\"width: 150px;\" id=\"exampleFormControlSelect1\"> \n                <option  [selected]=\"selected\"  value=\"Present\">Present</option>\n                <option value=\"Absent\">Absent</option>\n                <option value=\"Halfday\">Half Day</option>\n              </select>\n\n              <select *ngIf=\"item.status=='Present'\" [(ngModel)]=\"item.Status\" name={{item.Status}} class=\"form-control\" style=\"width: 150px;\" id=\"exampleFormControlSelect1\"> \n                <option [selected]=\"selected\" value=\"Present\">Present</option>\n                <option  value=\"Absent\">Absent</option>\n                <option value=\"HalfDay\">Half Day</option>\n              </select>\n\n              <select *ngIf=\"item.status=='Absent'\"  [(ngModel)]=\"item.Status\" name={{item.Status}} class=\"form-control\" style=\"width: 150px;\" id=\"exampleFormControlSelect1\"> \n                <option   value=\"Present\">Present</option>\n                <option  [selected]=\"selected\" value=\"Absent\">Absent</option>\n                <option  value=\"HalfDay\">Half Day</option>\n              </select> \n\n              <select *ngIf=\"item.status=='HalfDay'\"  [(ngModel)]=\"item.Status\" name={{item.Status}} class=\"form-control\" style=\"width: 150px;\" id=\"exampleFormControlSelect1\"> \n                <option   value=\"Present\">Present</option>\n                <option  value=\"Absent\">Absent</option>\n                <option  [selected]=\"selected\" value=\"HalfDay\">Half Day</option>\n              </select> \n           \n          </div>\n         </td>\n       \n      </tr>\n    \n    </tbody>\n  </table> \n</div>\n<div class=\"col-lg-1\">\n\n</div>\n    </div>\n    \n    <hr>\n    <div class=\"row\">\n      <div class=\"col-lg-5\">\n       \n      </div>\n      <div class=\"col-lg-2\">\n        <button type=\"submit\" class=\"btn btn-info\">Mark</button>\n      </div>\n      <div class=\"col-lg-5\">\n      </div>\n    </div>\n  </form>\n\n</div>\n");

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-TakeAttendance/basic-TakeAttendance-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-TakeAttendance/basic-TakeAttendance-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: BasicTakeAttendanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTakeAttendanceRoutingModule", function() { return BasicTakeAttendanceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _basic_TakeAttendance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-TakeAttendance.component */ "./src/app/demo/ui-elements/ui-basic/basic-TakeAttendance/basic-TakeAttendance.component.ts");




const routes = [
    {
        path: '',
        component: _basic_TakeAttendance_component__WEBPACK_IMPORTED_MODULE_3__["BasicTakeAttendanceComponent"]
    }
];
let BasicTakeAttendanceRoutingModule = class BasicTakeAttendanceRoutingModule {
};
BasicTakeAttendanceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BasicTakeAttendanceRoutingModule);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-TakeAttendance/basic-TakeAttendance.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-TakeAttendance/basic-TakeAttendance.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=\"checkbox\"] {\r\n    -webkit-appearance:none;\r\n       -moz-appearance:none;\r\n            appearance:none;\r\n    margin:0 40px;\r\n    width: 24px;\r\n    height: 24px;\r\n    background: #eeeeee;\r\n    box-shadow:\r\n      inset 0 0 0 .4em white,\r\n      0 0 0 .3em;\r\n    border-radius: 50%;\r\n    transition: .2s;\r\n    cursor:pointer;\r\n    color: #363945;\r\n}\r\ninput[type=\"checkbox\"]:hover {\r\n      background: #363945;\r\n      box-shadow:\r\n      inset 0 0 0 .6em white,\r\n      0 0 0 .3em;\r\n    }\r\ninput[type=\"checkbox\"]:checked {\r\n      background: #56be8e;\r\n      box-shadow:\r\n        inset 0 0 0 .4em white,\r\n        0 0 0 .3em #56be8e;\r\n    }\r\ninput[type=\"checkbox\"]:focus { outline: 0; }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby91aS1lbGVtZW50cy91aS1iYXNpYy9iYXNpYy1UYWtlQXR0ZW5kYW5jZS9iYXNpYy1UYWtlQXR0ZW5kYW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQWU7T0FBZixvQkFBZTtZQUFmLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkI7O2dCQUVZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUNBO01BQ00sbUJBQW1CO01BQ25COztnQkFFVTtJQUNaO0FBRUE7TUFDRSxtQkFBbUI7TUFDbkI7OzBCQUVvQjtJQUN0QjtBQUVBLCtCQUErQixVQUFVLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3VpLWVsZW1lbnRzL3VpLWJhc2ljL2Jhc2ljLVRha2VBdHRlbmRhbmNlL2Jhc2ljLVRha2VBdHRlbmRhbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgYXBwZWFyYW5jZTpub25lO1xyXG4gICAgbWFyZ2luOjAgNDBweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgIGluc2V0IDAgMCAwIC40ZW0gd2hpdGUsXHJcbiAgICAgIDAgMCAwIC4zZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGNvbG9yOiAjMzYzOTQ1O1xyXG59XHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzNjM5NDU7XHJcbiAgICAgIGJveC1zaGFkb3c6XHJcbiAgICAgIGluc2V0IDAgMCAwIC42ZW0gd2hpdGUsXHJcbiAgICAgIDAgMCAwIC4zZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcclxuICAgICAgYmFja2dyb3VuZDogIzU2YmU4ZTtcclxuICAgICAgYm94LXNoYWRvdzpcclxuICAgICAgICBpbnNldCAwIDAgMCAuNGVtIHdoaXRlLFxyXG4gICAgICAgIDAgMCAwIC4zZW0gIzU2YmU4ZTtcclxuICAgIH0gXHJcbiAgXHJcbiAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Zm9jdXMgeyBvdXRsaW5lOiAwOyB9XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-TakeAttendance/basic-TakeAttendance.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-TakeAttendance/basic-TakeAttendance.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: BasicTakeAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTakeAttendanceComponent", function() { return BasicTakeAttendanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_classlevel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/classlevel.service */ "./src/app/services/classlevel.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_Attendance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Attendance.service */ "./src/app/services/Attendance.service.ts");





let BasicTakeAttendanceComponent = class BasicTakeAttendanceComponent {
    constructor(_classLevel, _attendance, toastr) {
        this._classLevel = _classLevel;
        this._attendance = _attendance;
        this.toastr = toastr;
        this.selected = true;
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setDate(this.minDate.getDate());
        this.maxDate.setDate(this.maxDate.getDate());
    }
    ngOnInit() {
        this.todaydate = new Date();
    }
    LevelChange(event) {
        let Ids = event.target.value;
        this._classLevel.getClass(Ids).subscribe((data) => {
            this.allClasses = data;
        });
    }
    onOptionsSelected(event) {
        this.selectedLevel = event.target.value;
    }
    onOptionsSelectedStudents(event) {
        this.stuIdSelected = event.target.value;
    }
    getStuByClassSelect() {
        this.btnLoader = true;
        if (this.selectedLevel == undefined || this.stuIdSelected == undefined) {
            this.toastr.warning("Select valid class", "Ohh!");
            this.btnLoader = false;
            return;
        }
        this._attendance.getAttendance(this.selectedLevel, this.stuIdSelected, this.todaydate).subscribe((data) => {
            this.attendance = data;
            if (this.attendance != null) {
                this.showData = true;
                this.btnLoader = false;
            }
            else {
                this.showData = false;
                this.btnLoader = false;
            }
        });
    }
    MarkAttendance() {
        this._attendance.MarkAttendance(this.attendance).subscribe((data) => {
            this.toastr.success("Attendance Mark Succesfully", "Updated Successfully");
        }, error => {
            this.toastr.success("Attendance Mark Succesfully", "Updated Successfully");
        });
    }
};
BasicTakeAttendanceComponent.ctorParameters = () => [
    { type: src_app_services_classlevel_service__WEBPACK_IMPORTED_MODULE_2__["ClasslevelService"] },
    { type: src_app_services_Attendance_service__WEBPACK_IMPORTED_MODULE_4__["AttendanceService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
BasicTakeAttendanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic-TakeAttendance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic-TakeAttendance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-TakeAttendance/basic-TakeAttendance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basic-TakeAttendance.component.css */ "./src/app/demo/ui-elements/ui-basic/basic-TakeAttendance/basic-TakeAttendance.component.css")).default]
    })
], BasicTakeAttendanceComponent);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-TakeAttendance/basic-TakeAttendance.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-TakeAttendance/basic-TakeAttendance.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: BasicTakeAttendanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTakeAttendanceModule", function() { return BasicTakeAttendanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _basic_TakeAttendance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-TakeAttendance.component */ "./src/app/demo/ui-elements/ui-basic/basic-TakeAttendance/basic-TakeAttendance.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _basic_TakeAttendance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic-TakeAttendance-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-TakeAttendance/basic-TakeAttendance-routing.module.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");







let BasicTakeAttendanceModule = class BasicTakeAttendanceModule {
};
BasicTakeAttendanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
            _basic_TakeAttendance_routing_module__WEBPACK_IMPORTED_MODULE_5__["BasicTakeAttendanceRoutingModule"]
        ],
        declarations: [_basic_TakeAttendance_component__WEBPACK_IMPORTED_MODULE_3__["BasicTakeAttendanceComponent"]]
    })
], BasicTakeAttendanceModule);



/***/ }),

/***/ "./src/app/services/Attendance.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/Attendance.service.ts ***!
  \************************************************/
/*! exports provided: AttendanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceService", function() { return AttendanceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm2015/add/observable/throw.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let AttendanceService = class AttendanceService {
    constructor(_http) {
        this._http = _http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
    }
    getAttendance(classes, sec, date) {
        this.monts = date.getMonth() + 1;
        var ff = parseInt(this.monts);
        this.dates = date.getDate() + '-' + ff + '-' + date.getFullYear();
        return this._http.get(this.baseURL + 'Attendance/' + classes + '/' + sec + '/' + this.dates);
    }
    getstuAttendance(classes, sec, rollNo) {
        return this._http.get(this.baseURL + 'Attendance/StuAttendance/' + classes + '/' + sec + '/' + rollNo);
    }
    MarkAttendance(attendance) {
        attendance.forEach(element => {
            if (element.Status == 'Present') {
                element.markingDate = this.dates;
                element.StartTime = new Date();
                element.EndTime = new Date();
                element.Subject = element.Status;
                element.CategoryColor = '#18FF00';
            }
            if (element.Status == 'Absent') {
                element.markingDate = this.dates;
                element.StartTime = new Date();
                element.EndTime = new Date();
                element.Subject = element.Status;
                element.CategoryColor = '#EC1117';
            }
            if (element.Status == 'Halfday') {
                element.markingDate = this.dates;
                element.StartTime = new Date();
                element.EndTime = new Date();
                element.Subject = element.Status;
                element.CategoryColor = '#FFEF00';
            }
        });
        return this._http.post(this.baseURL + 'Attendance/Mark', attendance);
    }
};
AttendanceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AttendanceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AttendanceService);



/***/ })

}]);
//# sourceMappingURL=basic-TakeAttendance-basic-TakeAttendance-module-es2015.js.map