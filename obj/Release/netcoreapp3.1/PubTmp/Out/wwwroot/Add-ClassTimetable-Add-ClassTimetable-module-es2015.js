(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Add-ClassTimetable-Add-ClassTimetable-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/Acadmics/Add-ClassTimetable/Add-ClassTimetable.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/Acadmics/Add-ClassTimetable/Add-ClassTimetable.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \n  <div class=\"row\">\n    <div class=\"col-lg-3\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Class level</label>\n        <select (change)=\"LevelChange($event)\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n          <option value=\"-1\" [selected]=\"selected\" disabled>--Select--</option>\n          <option value=\"1\">Junior</option>\n          <option value=\"2\">Senior</option>\n        </select>  \n      </div>\n    </div>\n    <div class=\"col-lg-3\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Class</label>\n        <select (change)='onOptionsSelected($event)' class=\"form-control\" id=\"exampleFormControlSelect1\"> \n          <option [selected]=\"selected\">--Select--</option>\n            <option *ngFor=\"let items of allClasses\" [ngValue]=\"items\">{{items.classes}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-lg-3\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Class Section</label>\n        <select (change)='onOptionsSelectedSec($event)' class=\"form-control\" id=\"exampleFormControlSelect1\">\n          <option [selected]=\"selected\">--Select--</option>\n          <option *ngFor=\"let items of sections\">{{items}}</option>\n        </select>\n        <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Section</small>\n      </div>\n    </div>\n    \n   \n    <div class=\"col-lg-2\">\n        <br>\n      <div class=\"form-group\"> \n        <button style=\"margin-top: 8px;\" (click)=\"GetTimeTable()\" class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-search\"></i> Get</button>\n      &nbsp; <button style=\"margin-top: 8px; color: white;\" (click)=\"AddRow()\" class=\"btn btn-info\" type=\"button\"><i class=\"fa fa-plus\"></i> Add</button>\n      </div>\n    </div>\n  \n  </div> \n  <br>\n  <br>\n  <br>\n  <hr>\n \n  <div class=\"row\">\n  <div class=\"col-lg-12\"> \n    <ngb-tabset>\n      <ngb-tab title=\"Monday\">\n        <ng-template ngbTabContent>\n          <app-card cardTitle=\"Basic Table\" blockClass=\"table-border-style\">\n            <div *ngIf=\"isShow==true\" class=\"table-responsive\">\n              <form [formGroup]=\"timeTable\" (ngSubmit)=\"SaveTTMon()\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th>Subject</th>\n                      <th>Teacher</th>\n                      <th>Time From</th>\n                      <th>Time To</th>\n                      <th>Room No</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody formArrayName=\"TimeTabl\" *ngFor=\"let items of timeTable.get('TimeTabl').controls; let i=index\">\n                    <!-- By Adding -->\n                    <tr *ngFor=\"let item of tttable\" [formGroupName]=\"i\">\n                      <td>\n                        <select class=\"form-control\" class=\"form-control\" [id]=\"'subject'+i\"\n                          formControlName=\"subject\"> \n                          <option [selected]=\"selected\"\n                            [ngValue]=\"item.Subject\">\n                            {{item.Subject}}</option>\n                             <option *ngFor=\"let items of subjects\"  [ngValue]=\"items.codeId\">\n                               {{items.Subject}} ({{items.codeId}})</option>\n                        </select>\n                      </td>\n                      <td>\n                        <select class=\"form-control\" [id]=\"'teacher'+i\" formControlName=\"teacher\">\n                            <option [selected]=\"selected\" [ngValue]=\"item.teacher\">\n                              {{item.teacher}}</option>\n                          <option *ngFor=\"let items of emp\" [ngValue]=\"items.EmpId\">{{items.firstName}}\n                            {{items.lastName}} ({{items.EmpId}})</option>\n                        </select>\n                      </td>\n                      <td> <input [id]=\"'timefrom'+i\" formControlName=\"timefrom\" [value]=\"item.timefrom\" type=\"text\"\n                          class=\"form-control\" />\n                      </td>\n                      <td>\n                        <input type=\"text\" [id]=\"'timeTo'+i\" formControlName=\"timeTo\" [value]=\"item.timeTo\"\n                          class=\"form-control\" />\n\n                         <input type=\"hidden\" [id]=\"'WeekDay'+i\" formControlName=\"WeekDay\" Value=\"Monday\" class=\"form-control\" />\n                      </td>\n                      <td> <input type=\"number\" [id]=\"'RoomNo'+i\" formControlName=\"RoomNo\" [value]=\"item.RoomNo\" class=\"form-control\" /></td>\n                      <td> <input type=\"submit\" class=\"btn btn-danger\" value=\"Remove\" /></td>\n                    </tr>\n                  </tbody>\n                  <tfoot>\n                    <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-save\"></i> Save</button>\n                  </tfoot>\n                </table>\n              </form>\n            </div>\n          </app-card>\n        </ng-template>\n      </ngb-tab> \n  \n      <ngb-tab title=\"Tuesday\">\n        <ng-template ngbTabContent>\n          <p>Tab two content here</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"Wednesday\">\n        <ng-template ngbTabContent>\n          <p>Tab three content here</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"Thrusday\">\n        <ng-template ngbTabContent>\n          <p>Tab three content here</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"Friday\">\n        <ng-template ngbTabContent>\n          <p>Tab three content here</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"Saturday\">\n        <ng-template ngbTabContent>\n          <p>Tab three content here</p>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n   \n  </div>\n  </div>\n");

/***/ }),

/***/ "./src/app/demo/pages/Acadmics/Add-ClassTimetable/Add-ClassTimetable-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/demo/pages/Acadmics/Add-ClassTimetable/Add-ClassTimetable-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddClassTimetableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClassTimetableRoutingModule", function() { return AddClassTimetableRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Add_ClassTimetable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Add-ClassTimetable.component */ "./src/app/demo/pages/Acadmics/Add-ClassTimetable/Add-ClassTimetable.component.ts");




const routes = [
    {
        path: '',
        component: _Add_ClassTimetable_component__WEBPACK_IMPORTED_MODULE_3__["AddClassTimetableComponent"]
    }
];
let AddClassTimetableRoutingModule = class AddClassTimetableRoutingModule {
};
AddClassTimetableRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddClassTimetableRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/Acadmics/Add-ClassTimetable/Add-ClassTimetable.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/demo/pages/Acadmics/Add-ClassTimetable/Add-ClassTimetable.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvQWNhZG1pY3MvQWRkLUNsYXNzVGltZXRhYmxlL0FkZC1DbGFzc1RpbWV0YWJsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/demo/pages/Acadmics/Add-ClassTimetable/Add-ClassTimetable.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/demo/pages/Acadmics/Add-ClassTimetable/Add-ClassTimetable.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AddClassTimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClassTimetableComponent", function() { return AddClassTimetableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_Acadmics_Subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Acadmics/Subject.service */ "./src/app/services/Acadmics/Subject.service.ts");
/* harmony import */ var src_app_services_Employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Employee.service */ "./src/app/services/Employee.service.ts");
/* harmony import */ var src_app_services_classlevel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/classlevel.service */ "./src/app/services/classlevel.service.ts");
/* harmony import */ var src_app_services_Acadmics_TimeTable_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/Acadmics/TimeTable.service */ "./src/app/services/Acadmics/TimeTable.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");








let AddClassTimetableComponent = class AddClassTimetableComponent {
    constructor(fb, _secServices, _ttServices, toastr, _classLevel, _empServices) {
        this.fb = fb;
        this._secServices = _secServices;
        this._ttServices = _ttServices;
        this.toastr = toastr;
        this._classLevel = _classLevel;
        this._empServices = _empServices;
        this.selected = true;
        this.selectedSubject = false;
        this.ttMaster = [];
    }
    ngOnInit() {
        this.isShow = false;
        this.selectedSubject = false;
        this.CreateTimeTableForm();
        this.loadAllSubject();
        this.loadAllTeacher();
    }
    LevelChange(event) {
        let Ids = event.target.value;
        this._classLevel.getClass(Ids).subscribe((data) => {
            this.allClasses = data;
        });
    }
    GetTimeTable() {
        this.AddTimeTable();
        this.isShow = true;
        this._ttServices.getTimetbl(this.selectedLevel, this.selectedSec).subscribe((data) => {
            this.tttable = data;
        });
    }
    CreateTimeTableForm() {
        this.timeTable = this.fb.group({
            TimeTabl: this.fb.array([
                this.AddTimeTable()
            ])
        });
    }
    onOptionsSelectedSec(event) {
        this.selectedSec = event.target.value;
        this.CreateTimeTableForm();
    }
    onOptionsSelected(event) {
        this.selectedLevel = event.target.value;
        this._classLevel.getSection(this.selectedLevel).subscribe((data) => {
            this.allSec = data;
            this.sections = this.allSec.sections.split(',');
            this.CreateTimeTableForm();
        });
    }
    loadAllSubject() {
        this._secServices.getSubject().subscribe((data) => {
            this.subjects = data;
        });
    }
    loadAllTeacher() {
        this._empServices.getTeacher().subscribe((data) => {
            this.emp = data;
        });
    }
    AddTimeTable() {
        return this.fb.group({
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            teacher: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            timefrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            timeTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            RoomNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            WeekDay: ['Monday'],
            Classes: [this.selectedLevel],
            Sec: [this.selectedSec]
        });
    }
    AddRow() {
        this.timeTable.get('TimeTabl').push(this.AddTimeTable());
    }
    SaveTTMon() {
        if (this.selectedLevel == null)
            return alert("Select Appropriate Classe");
        if (this.selectedSec == null)
            return alert("Select Appropriate Section");
        this.btnLoader = true;
        if (this.timeTable.valid) {
            this.ttMaster = Object.assign({}, this.timeTable.value);
            if (this.Id == null) {
                this._ttServices.PostTimeTable(this.ttMaster).subscribe(() => {
                    this.toastr.success('TimeTable Saved!', 'Data Saved');
                    this.timeTable.reset();
                    this.CreateTimeTableForm();
                    this.btnLoader = false;
                }, error => {
                    this.toastr.error('Saving TimeTable Failed!', 'Problem in saving Data', error);
                    this.btnLoader = false;
                });
            }
            else {
                // this._classServices.updateClass(this.Id, this.class).subscribe(() => {
                //   this.toastr.success('Section Updated!', 'Data Saved');
                //   this.registerClass.reset();
                //   this.createRegisterClass();
                //   this.btnLoader = false;
                //   this.loadClassSection();
                //   this.Id = null;
                //   this.sec.forEach(element => {
                //     element.isChecked = false;
                //   });
                // }, error => {
                //   this.toastr.error('Update Class Failed!', 'Problem in saving Data', error);
                //   this.btnLoader = false;
                // });
            }
        }
    }
};
AddClassTimetableComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_Acadmics_Subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"] },
    { type: src_app_services_Acadmics_TimeTable_service__WEBPACK_IMPORTED_MODULE_6__["TimeTableService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
    { type: src_app_services_classlevel_service__WEBPACK_IMPORTED_MODULE_5__["ClasslevelService"] },
    { type: src_app_services_Employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] }
];
AddClassTimetableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-Add-ClassTimetable',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Add-ClassTimetable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/Acadmics/Add-ClassTimetable/Add-ClassTimetable.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Add-ClassTimetable.component.css */ "./src/app/demo/pages/Acadmics/Add-ClassTimetable/Add-ClassTimetable.component.css")).default]
    })
], AddClassTimetableComponent);



/***/ }),

/***/ "./src/app/demo/pages/Acadmics/Add-ClassTimetable/Add-ClassTimetable.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/pages/Acadmics/Add-ClassTimetable/Add-ClassTimetable.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AddClassTimetableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClassTimetableModule", function() { return AddClassTimetableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _Add_ClassTimetable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Add-ClassTimetable.component */ "./src/app/demo/pages/Acadmics/Add-ClassTimetable/Add-ClassTimetable.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _Add_ClassTimetable_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Add-ClassTimetable-routing.module */ "./src/app/demo/pages/Acadmics/Add-ClassTimetable/Add-ClassTimetable-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let AddClassTimetableModule = class AddClassTimetableModule {
};
AddClassTimetableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabsetModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _Add_ClassTimetable_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddClassTimetableRoutingModule"]
        ],
        declarations: [_Add_ClassTimetable_component__WEBPACK_IMPORTED_MODULE_3__["AddClassTimetableComponent"]]
    })
], AddClassTimetableModule);



/***/ }),

/***/ "./src/app/services/Acadmics/TimeTable.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/Acadmics/TimeTable.service.ts ***!
  \********************************************************/
/*! exports provided: TimeTableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTableService", function() { return TimeTableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let TimeTableService = class TimeTableService {
    constructor(_http) {
        this._http = _http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getTimetbl(classes, sec) {
        return this._http.get(this.baseURL + 'TimeTable' + '/' + classes + '/' + sec);
    }
    PostTimeTable(table) {
        return this._http.post(this.baseURL + 'TimeTable' + '/register', table);
    }
};
TimeTableService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TimeTableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TimeTableService);



/***/ }),

/***/ "./src/app/services/Employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/Employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _Models_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/Pagination */ "./src/app/Models/Pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let EmployeeService = class EmployeeService {
    constructor(_http) {
        this._http = _http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
    }
    getEmp(id) {
        return this._http.get(this.baseURL + 'Employee/EmpIds/' + id);
    }
    getEmpRegistration(sessionId, page, itemsPerPage, userParams) {
        const paginatedResult = new _Models_Pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatedResult"]();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        if (userParams != null) {
            params = params.append('AdmissionNo', userParams.AdmissionNo);
            params = params.append('OrderBy', userParams.OrderBy);
            params = params.append('Gender', userParams.Gender);
        }
        return this._http.get(this.baseURL + 'Employee/AllEmpRegistration/' + sessionId, { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    }
    getTeacher() {
        return this._http.get(this.baseURL + 'Employee/AllEmpRegistration/');
    }
    register(empRegister) {
        var stringStanders = empRegister.standers.toString();
        empRegister.standers = stringStanders;
        return this._http.post(this.baseURL + 'Employee/register', empRegister);
    }
    updateEmployee(id, emp) {
        return this._http.put(this.baseURL + 'Employee/' + id, emp);
    }
    getLastEmpRegisterId() {
        return this._http.get(this.baseURL + 'Employee/' + 'last/');
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmployeeService);



/***/ })

}]);
//# sourceMappingURL=Add-ClassTimetable-Add-ClassTimetable-module-es2015.js.map