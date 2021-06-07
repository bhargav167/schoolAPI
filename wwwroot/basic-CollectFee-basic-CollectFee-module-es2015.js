(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-CollectFee-basic-CollectFee-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/form-elements/basic-CollectFee/basic-CollectFee.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/form-elements/basic-CollectFee/basic-CollectFee.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\">\n  <div class=\"page-block\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-md-12\">\n        <div class=\"page-header-title\">\n          <ng-container><h5 class=\"m-b-10\">Fee</h5></ng-container>\n        </div>\n        <ul class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a [routerLink]=\"['/dashboard/analytics/']\" ><i class=\"feather icon-home\"></i></a>\n           </li> \n           <li class=\"breadcrumb-item\"><a [routerLink]=\"['/forms/basic/']\">Fee</a></li>\n           <li class=\"breadcrumb-item\"><a [routerLink]=\"['/forms/CollectFee/']\">Collect Fee</a></li>\n         </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-lg-2\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Class level</label>\n      <select (change)=\"LevelChange($event)\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n        <option value=\"-1\" [selected]=\"selected\" disabled>--Select--</option>\n        <option value=\"1\">Junior</option>\n        <option value=\"2\">Senior</option>\n      </select>  \n    </div>\n  </div>\n  <div class=\"col-lg-2\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Class</label>\n      <select (change)='onOptionsSelected($event)' class=\"form-control\" id=\"exampleFormControlSelect1\"> \n        <option value=\"-1\" [selected]=\"selected\"  >--Select--</option>\n          <option *ngFor=\"let items of allClasses\" [ngValue]=\"items\">{{items.classes}}</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"col-lg-2\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Class Section</label>\n      <select (change)=\"getStuByClassSelect($event)\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n        <option value=\"-1\" [selected]=\"selected\" >--Select--</option>\n        <option *ngFor=\"let items of sections\" [ngValue]=\"items\">{{items}}</option>\n      </select>\n      <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Section</small>\n    </div>\n  </div>\n  <div class=\"col-lg-3\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Student's</label>\n      <select (change)=\"onOptionsSelectedStudents($event)\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n       <option  [selected]=\"selected\">--Select--</option>\n        <option *ngFor=\"let item of allStudentOfClass\" [value]=\"item.Id\">{{item.firstName +' '+ item.lastName + ' ' +'['+ item.rollNo+']'}}</option>\n        \n      </select>\n      <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Section</small>\n    </div>\n  </div>\n  \n \n  <div class=\"col-lg-2\">\n      <br>\n    <div class=\"form-group\"> \n      <button style=\"margin-top: 8px;\" (click)=\"GetFeeTypes()\" class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-search\"></i> Get</button>\n    </div>\n  </div>\n\n</div> \n<form (ngSubmit)=\"PayInTerms()\" name=\"userForm\"> \n<div>\n  <hr> \n  <div *ngIf=\"showData==true\" class=\"col-md-10\">   \n     <table class=\"table m-b-0\">\n       <thead>\n         <tr>  \n           <th>\n             <span>Fee Type\n               <a class=\"help\"><i class=\"fa fa-sort-numeric-up\"></i></a>\n             </span>\n           </th> \n           <th>\n             <span>Term-1\n               <a class=\"help\"><i class=\"fab fa-cuttlefish\"></i></a>\n             </span>\n           </th> \n          \n           <th>\n            <span>Term-2\n              <a class=\"help\"><i class=\"fab fa-cuttlefish\"></i></a>\n            </span>\n          </th>  \n          <th>\n            <span>Term-1 Total Fee\n              <a class=\"help\"><i class=\"fab fa-cuttlefish\"></i></a>\n            </span>\n          </th>  \n          <th>\n            <span>Term-2 Total Fee\n              <a class=\"help\"><i class=\"fab fa-cuttlefish\"></i></a>\n            </span>\n          </th>  \n         </tr>\n       </thead>\n       <tbody>\n           <div *ngIf=\"FeeTypes?.length==0\" class=\"d-flex justify-content-start center\">\n               <div class=\"text text-center\" role=\"status\">\n                <b>No Result Found</b>\n               </div>\n             </div>\n            \n    <tr *ngFor=\"let item of FeeTypes\">\n      <td><input class=\"form-control\" [value]=\"item.FeeType\" type=\"text\"></td>\n      <td> \n          <input class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" *ngIf=\"item.Term1Paid!=0\" [(ngModel)]=\"item.Term1Paid\" [name]=\"item.term1Paid\" [value]=\"item.Term1Paid\" type=\"number\" >\n          <input class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" *ngIf=\"item.Term1Paid==0\" disabled=\"disable\" [(ngModel)]=\"item.Term1Paid\" [name]=\"item.Term1Paid\"  [value]=\"item.term1Paid\"   type=\"number\" >\n      </td>\n      <td> \n        <input class=\"form-control\"  [ngModelOptions]=\"{standalone: true}\" *ngIf=\"item.Term2Paid!=0\" [(ngModel)]=\"item.Term2Paid\" [name]=\"item.Term2Paid\" [value]=\"item.Term2Paid\"  type=\"number\" >\n        <input class=\"form-control\"  [ngModelOptions]=\"{standalone: true}\" disabled=\"disable\" *ngIf=\"item.Term2Paid==0\" [(ngModel)]=\"item.Term2Paid\" [name]=\"item.Term2Paid\" [value]=\"item.Term2Paid\" type=\"number\" >\n    </td>\n    <td> \n      <input class=\"form-control\" disabled=\"disabled\"  [value]=\"item.Term1\" type=\"number\" >\n  </td>\n  <td> \n    <input class=\"form-control\"  disabled=\"disabled\" [value]=\"item.Term12\"  type=\"number\" >\n</td> \n    </tr> \n    <tr>\n      <td>Pay In Terms</td>\n      <td>\n        <input type=\"submit\" *ngIf=\"disable==true\" disabled=\"disabled\" value=\"Pay Term-1\" class=\"btn btn-success\">\n        <input type=\"submit\" *ngIf=\"disable!=true\"  value=\"Pay Term-1\" class=\"btn btn-success\">\n      </td>\n      \n      <td><input type=\"button\"  (click)=\"PayInTerm()\" value=\"Pay Term-2\" class=\"btn btn-success\"></td>\n    </tr> \n       </tbody>\n     </table> \n  </div>\n  <!-- <div class=\"row\">\n  <div class=\"col-lg-4\">\n    <input type=\"button\" (click)=\"onSubmit()\" value=\"submit\">\n  </div>  \n   </div> -->\n</div>\n</form>\n ");

/***/ }),

/***/ "./src/app/demo/pages/form-elements/basic-CollectFee/basic-CollectFee-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/basic-CollectFee/basic-CollectFee-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: BasicFeeCollectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFeeCollectRoutingModule", function() { return BasicFeeCollectRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _basic_CollectFee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-CollectFee.component */ "./src/app/demo/pages/form-elements/basic-CollectFee/basic-CollectFee.component.ts");




const routes = [
    {
        path: '',
        component: _basic_CollectFee_component__WEBPACK_IMPORTED_MODULE_3__["BasicCollectFeeComponent"]
    }
];
let BasicFeeCollectRoutingModule = class BasicFeeCollectRoutingModule {
};
BasicFeeCollectRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BasicFeeCollectRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/form-elements/basic-CollectFee/basic-CollectFee.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/basic-CollectFee/basic-CollectFee.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvZm9ybS1lbGVtZW50cy9iYXNpYy1Db2xsZWN0RmVlL2Jhc2ljLUNvbGxlY3RGZWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/demo/pages/form-elements/basic-CollectFee/basic-CollectFee.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/basic-CollectFee/basic-CollectFee.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BasicCollectFeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicCollectFeeComponent", function() { return BasicCollectFeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_classlevel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/classlevel.service */ "./src/app/services/classlevel.service.ts");
/* harmony import */ var src_app_services_FeeModules_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/FeeModules.service */ "./src/app/services/FeeModules.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let BasicCollectFeeComponent = class BasicCollectFeeComponent {
    constructor(_classLevel, _feeService, toastr) {
        this._classLevel = _classLevel;
        this._feeService = _feeService;
        this.toastr = toastr;
        this.selected = true;
    }
    ngOnInit() {
    }
    //Level Chance
    LevelChange(event) {
        let Ids = event.target.value;
        this._classLevel.getClass(Ids).subscribe((data) => {
            this.allClasses = data;
        });
    }
    //Class Chance
    onOptionsSelected(event) {
        this.selectedLevel = event.target.value;
        this._classLevel.getSection(this.selectedLevel).subscribe((data) => {
            this.allSec = data;
            this.sections = this.allSec.sections.split(',');
        });
    }
    onOptionsSelectedStudents(event) {
        this.stuIdSelected = event.target.value;
    }
    GetFeeTypes() {
        this._feeService.getFeeTypes(this.selectedLevel, this.stuIdSelected).subscribe((data) => {
            this.FeeTypes = data;
            if (!this.FeeTypes) {
                this.showData = false;
            }
            else {
                this.showData = true;
            }
        });
    }
    //Section Chance
    getStuByClassSelect(event) {
        this._feeService.getStuByClass(this.selectedLevel, event.target.value).subscribe((data) => {
            this.allStudentOfClass = data;
        });
    }
    // Pay Term-1
    PayInTerms() {
        for (let index = 0; index < this.FeeTypes.length; index++) {
            this.FeeTypes[index].stuId = this.stuIdSelected;
        }
        this._feeService.CollectFees(this.FeeTypes).subscribe(data => {
            this.toastr.success("Term Fee Collected", "Updated Successfully");
            this.GetFeeTypes();
        }, error => {
            this.toastr.error("Failed to collect term fee", error.error);
        });
    }
    // Pay Term-2
    PayInTerm() {
        for (let index = 0; index < this.FeeTypes.length; index++) {
            this.FeeTypes[index].stuId = this.stuIdSelected;
        }
        this._feeService.CollectFeesTerm2(this.FeeTypes).subscribe(data => {
            this.toastr.success("Term Fee Collected", "Updated Successfully");
            this.GetFeeTypes();
        }, error => {
            this.toastr.error("Failed to collect term fee", error.error);
        });
    }
};
BasicCollectFeeComponent.ctorParameters = () => [
    { type: src_app_services_classlevel_service__WEBPACK_IMPORTED_MODULE_2__["ClasslevelService"] },
    { type: src_app_services_FeeModules_service__WEBPACK_IMPORTED_MODULE_3__["FeeModulesService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
BasicCollectFeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic-CollectFee',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic-CollectFee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/form-elements/basic-CollectFee/basic-CollectFee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basic-CollectFee.component.css */ "./src/app/demo/pages/form-elements/basic-CollectFee/basic-CollectFee.component.css")).default]
    })
], BasicCollectFeeComponent);



/***/ }),

/***/ "./src/app/demo/pages/form-elements/basic-CollectFee/basic-CollectFee.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/basic-CollectFee/basic-CollectFee.module.ts ***!
  \**************************************************************************************/
/*! exports provided: BasicCollectFeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicCollectFeeModule", function() { return BasicCollectFeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _basic_CollectFee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-CollectFee.component */ "./src/app/demo/pages/form-elements/basic-CollectFee/basic-CollectFee.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _basic_CollectFee_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic-CollectFee-routing.module */ "./src/app/demo/pages/form-elements/basic-CollectFee/basic-CollectFee-routing.module.ts");







let BasicCollectFeeModule = class BasicCollectFeeModule {
};
BasicCollectFeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownModule"],
            _basic_CollectFee_routing_module__WEBPACK_IMPORTED_MODULE_6__["BasicFeeCollectRoutingModule"]
        ],
        declarations: [_basic_CollectFee_component__WEBPACK_IMPORTED_MODULE_3__["BasicCollectFeeComponent"]]
    })
], BasicCollectFeeModule);



/***/ })

}]);
//# sourceMappingURL=basic-CollectFee-basic-CollectFee-module-es2015.js.map