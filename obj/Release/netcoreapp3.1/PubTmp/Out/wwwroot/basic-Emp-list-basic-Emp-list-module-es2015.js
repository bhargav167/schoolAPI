(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-Emp-list-basic-Emp-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-Emp-list/basic-Emp-list.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-Emp-list/basic-Emp-list.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div class=\"row\">\n    <div class=\"col-lg-8\"> \n        <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"loadUsers()\" novalidate>\n            <div class=\"form-group px-2\">\n                <label class=\"label\" for=\"gender\">Gender: </label>\n                <select class=\"form-control ml-1\" style=\"width: 130px\" id=\"gender\"\n                  [(ngModel)]=\"userParams.Gender\" name=\"Gender\"> \n                  <option [selected]=\"selected\" disabled>--Select--</option>\n                  <option *ngFor=\"let gender of genderList\" [value]=\"gender.value\">\n                    {{gender.display}}\n                  </option>\n                </select>\n              </div>\n\n              <div class=\"form-group\">\n                  <label for=\"minAge\">Employee Id</label>\n                  <input type=\"number\" class=\"form-control ml-1\" style=\"width: 85px\" id=\"admi\"\n                    [(ngModel)]=\"userParams.AdmissionNo\" name=\"AdmissionNo\">\n                </div>\n\n              <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-left:10px\">Apply Filters</button>\n              <button type=\"button\" class=\"btn btn-warning\" (click)=\"resetFilters()\" style=\"margin-left:10px\">\n                  Reset Filter\n              </button>\n        </form>\n    </div>\n    <div class=\"col-lg-4\"> \n            <button type=\"button\" class=\"btn btn-success\"\n            btnRadio=\"OrderBy\" value=\"OrderBy\" name=\"OrderBy\" [(ngModel)]=\"userParams.OrderBy\" (click)=\"loadUsers()\">Order by Class</button>\n         &nbsp;\n            <button type=\"button\" class=\"btn btn-success\"\n            btnRadio=\"OrderBy\" value=\"OrderBy\" name=\"created\" [(ngModel)]=\"userParams.OrderBy\" (click)=\"loadUsers()\">Newest Registration</button>    \n          </div> \n  </div>\n<hr>\n<div class=\"col-md-12\"> \n    <div *ngIf=\"isLoading==true\" class=\"d-flex justify-content-start center\">\n        <div class=\"spinner-border\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <table *ngIf=\"isLoading==false\" class=\"table table-hover m-b-0\">\n        <thead>\n          <tr> \n            <th>\n              <span>Registration No\n                <a class=\"help\"><i class=\"fa fa-sort-numeric-up\"></i></a>\n              </span>\n            </th>\n            <th>\n              <span>Employee Id\n                <a class=\"help\"><i class=\"fa fa-sort-numeric-up\"></i></a>\n              </span>\n            </th>\n            <th>\n              <span>Name\n                <a class=\"help\"><i class=\"fa fa-user\"></i></a>\n              </span>\n            </th> \n            <th>\n              <span>Class\n                <a class=\"help\"><i class=\"fab fa-cuttlefish\"></i></a>\n              </span>\n            </th>\n            <th>\n            \n              <span>Section\n                <a class=\"help\"><i class=\"fas fa-chalkboard\"></i></a>\n              </span>\n            </th>\n                      <th>\n                          <span>Gender\n                            <a class=\"help\"><i class=\"fa fa-transgender\"></i></a>\n                          </span>\n                        </th>\n                        <th>\n                          <span>Action\n                            <a class=\"help\"><i class=\"fa fa-mouse\"></i></a>\n                          </span>\n                        </th>\n          </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let item of users\">\n          <td>{{item.RegistrationNo}}</td> \n          <td>{{item.EmpId}}</td> \n          <td>{{item.firstName}} {{item.lastName}}</td> \n          <td>{{item.standers}}</td> \n          <td>{{item.classsection | uppercase}}</td>  \n          <td *ngIf=\"item.gender=='male'\">Male</td> \n          <td *ngIf=\"item.gender=='female'\">Female</td> \n          <td *ngIf=\"item.gender=='other'\">Other</td>\n          <td> \n            <div class=\"btn-group mb-2 mr-2\" ngbDropdown [placement]=\"'bottom-right'\">\n              <button type=\"button\" class=\"btn btn-secondary\">Action</button>\n              <button type=\"button\" class=\"btn btn-secondary dropdown-toggle-split\" ngbDropdownToggle><span class=\"sr-only\">Action</span></button>\n              <div ngbDropdownMenu>\n                <a class=\"dropdown-item\"  [routerLink]=\"['/basic/studentview/',item.Id]\"><i class=\"fas fa-eye\"></i>&nbsp;&nbsp;View</a>\n                <a class=\"dropdown-item\" [routerLink]=\"['/basic/empedit/',item.EmpId]\"><i class=\"far fa-edit\"></i>&nbsp;&nbsp;Edit</a>\n                <a class=\"dropdown-item\" href=\"javascript:\"><i class=\"fas fa-door-closed\"></i>&nbsp;&nbsp;Fee status</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" href=\"javascript:\"><i class=\"fas fa-trash-alt\"></i>&nbsp;&nbsp;Delete</a>\n              </div>\n            </div>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n      <div *ngIf=\"isLoading==false\" class=\"row\">\n        <div class=\"col-lg-4\">\n      \n        </div>\n        <div class=\"col-lg-4\">\n          <pagination class=\"pagination-sm\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\"\n            (pageChanged)=\"pageChanged($event)\" [(ngModel)]=\"currentPage\"></pagination>\n        </div>\n        <div class=\"col-lg-4\"> \n        </div> \n      </div> \n</div>\n\n");

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-Emp-list/basic-Emp-list-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-Emp-list/basic-Emp-list-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: BasicEmployeeListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicEmployeeListRoutingModule", function() { return BasicEmployeeListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _basic_Emp_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-Emp-list.component */ "./src/app/demo/ui-elements/ui-basic/basic-Emp-list/basic-Emp-list.component.ts");




const routes = [
    {
        path: '',
        component: _basic_Emp_list_component__WEBPACK_IMPORTED_MODULE_3__["BasicEmpListComponent"]
    }
];
let BasicEmployeeListRoutingModule = class BasicEmployeeListRoutingModule {
};
BasicEmployeeListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BasicEmployeeListRoutingModule);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-Emp-list/basic-Emp-list.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-Emp-list/basic-Emp-list.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtRW1wLWxpc3QvYmFzaWMtRW1wLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-Emp-list/basic-Emp-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-Emp-list/basic-Emp-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BasicEmpListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicEmpListComponent", function() { return BasicEmpListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_Employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Employee.service */ "./src/app/services/Employee.service.ts");



let BasicEmpListComponent = class BasicEmpListComponent {
    constructor(_user) {
        this._user = _user;
        this.userParams = {};
        this.currentPage = 1;
        this.itemsPerPage = 5;
        this.selected = true;
        this.genderList = [{ value: 'male', display: 'Males' }, { value: 'female', display: 'Females' }];
        this.isLoading = true;
    }
    ngOnInit() {
        this.userParams.AdmissionNo = 'undefined';
        this.userParams.OrderBy = 'undefined';
        this.userParams.Gender = 'undefined';
        this.loadUsers();
    }
    loadUsers() {
        this._user.getEmpRegistration(parseInt(localStorage.getItem("sessionId")), this.currentPage, this.itemsPerPage, this.userParams)
            .subscribe((res) => {
            this.users = res.result;
            this.pagination = res.pagination;
            this.isLoading = false;
        }, error => {
            console.log(error);
        });
    }
    pageChanged(event) {
        this.isLoading = true;
        this.currentPage = event.page;
        this.loadUsers();
        this.isLoading = false;
    }
};
BasicEmpListComponent.ctorParameters = () => [
    { type: src_app_services_Employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] }
];
BasicEmpListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic-Emp-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic-Emp-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-Emp-list/basic-Emp-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basic-Emp-list.component.css */ "./src/app/demo/ui-elements/ui-basic/basic-Emp-list/basic-Emp-list.component.css")).default]
    })
], BasicEmpListComponent);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-Emp-list/basic-Emp-list.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-Emp-list/basic-Emp-list.module.ts ***!
  \***********************************************************************************/
/*! exports provided: BasicEmpListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicEmpListModule", function() { return BasicEmpListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _basic_Emp_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-Emp-list.component */ "./src/app/demo/ui-elements/ui-basic/basic-Emp-list/basic-Emp-list.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _basic_Emp_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic-Emp-list-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-Emp-list/basic-Emp-list-routing.module.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");








let BasicEmpListModule = class BasicEmpListModule {
};
BasicEmpListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _basic_Emp_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["BasicEmployeeListRoutingModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"]
        ],
        declarations: [_basic_Emp_list_component__WEBPACK_IMPORTED_MODULE_3__["BasicEmpListComponent"]]
    })
], BasicEmpListModule);



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
//# sourceMappingURL=basic-Emp-list-basic-Emp-list-module-es2015.js.map