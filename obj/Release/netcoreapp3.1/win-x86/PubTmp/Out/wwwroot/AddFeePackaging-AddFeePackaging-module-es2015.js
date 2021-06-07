(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AddFeePackaging-AddFeePackaging-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/form-elements/AddFeePackaging/AddFeePackaging.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/form-elements/AddFeePackaging/AddFeePackaging.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\">\n  <div class=\"page-block\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-md-12\">\n        <div class=\"page-header-title\">\n          <ng-container><h5 class=\"m-b-10\">Fee</h5></ng-container>\n        </div>\n        <ul class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a [routerLink]=\"['/dashboard/analytics/']\" ><i class=\"feather icon-home\"></i></a>\n           </li> \n           <li class=\"breadcrumb-item\"><a [routerLink]=\"['/forms/basic/']\">Fee</a></li>\n           <li class=\"breadcrumb-item\"><a [routerLink]=\"['/forms/Feepackaging/']\">Fee Packaging</a></li>\n           <li class=\"breadcrumb-item\"><a [routerLink]=\"['/forms/AddFeePackaging/']\">Add Fee Packaging</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<form  id=\"quick\" (ngSubmit)=\"updateFeeTerms()\" novalidate>\n  <div class=\"row\">\n    <div class=\"col-lg-3\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Class level</label>\n        <select (change)=\"LevelChange($event)\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n          <option value=\"-1\" [selected]=\"selected\" disabled>--Select--</option>\n          <option value=\"1\">Junior</option>\n          <option value=\"2\">Senior</option>\n        </select>  \n      </div>\n    </div>\n    <div class=\"col-lg-3\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Class</label>\n        <select (change)='onOptionsSelected($event)' class=\"form-control\" id=\"exampleFormControlSelect1\"> \n            <option *ngFor=\"let items of allClasses\" [ngValue]=\"items\">{{items.classes}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-lg-3\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Class Section</label>\n        <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n          <option [selected]=\"selected\">--Select--</option>\n          <option *ngFor=\"let items of sections\">{{items}}</option>\n        </select>\n        <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Section</small>\n      </div>\n    </div>\n    \n   \n    <div class=\"col-lg-2\">\n        <br>\n      <div class=\"form-group\"> \n        <button style=\"margin-top: 8px;\" (click)=\"GetFeeTypes()\" class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-search\"></i> Get</button>\n      </div>\n    </div>\n  \n  </div> \n  \n  <form #studentForm=\"ngForm\"  (ngSubmit)=\"updateFeeTerms()\">\n\n \n  <hr> \n  <div *ngIf=\"showData==true\" class=\"col-md-12\">   \n     <table class=\"table   m-b-0\">\n       <thead>\n         <tr>  \n           <th>\n             <span>Fee Type\n               <a class=\"help\"><i class=\"fa fa-sort-numeric-up\"></i></a>\n             </span>\n           </th>\n           <th>\n             <span>Fee Amount\n               <a class=\"help\"><i class=\"fa fa-cash\"></i></a>\n             </span>\n           </th> \n           <th>\n             <span>Term-1\n               <a class=\"help\"><i class=\"fab fa-cuttlefish\"></i></a>\n             </span>\n           </th> \n           <th>\n            <span>Term-2\n              <a class=\"help\"><i class=\"fab fa-cuttlefish\"></i></a>\n            </span>\n          </th> \n          \n         </tr>\n       </thead>\n       <tbody>\n           <div *ngIf=\"FeeTypes.length==0\" class=\"d-flex justify-content-start center\">\n               <div class=\"text text-center\" role=\"status\">\n                <b>No Result Found</b>\n               </div>\n             </div>\n     <tr *ngFor=\"let item of FeeTypes; let i=index;\"> \n         <td><input class=\"form-control\" type=\"text\" disabled=\"disabled\"\n           name={{i}} [value]=\"item.FeeType\">\n        </td> \n          <td><input class=\"form-control\" type=\"number\" disabled=\"disabled\" [value]=\"item.FeeAmt\" #val></td>\n         <td><input class=\"form-control\" [(ngModel)]=\"item.Term1\"  type=\"number\" [name]=\"item.Term1\"   [ngClass]=\"{ 'is-invalid': studentForm.submitted && term1.invalid }\" required   #term1=\"ngModel\"></td>\n         <td><input class=\"form-control\" [(ngModel)]=\"item.Term12\"  type=\"number\" [name]=\"item.Term12\"   [ngClass]=\"{ 'is-invalid': studentForm.submitted && term2.invalid }\" required  #term2=\"ngModel\"></td>\n    \n        </tr>\n       </tbody>\n     </table> \n  </div>\n  \n  <br>\n  <hr>\n  <div *ngIf=\"showData==true\" class=\"container\">\n    <div class=\"row\">\n  <div class=\"col-lg-5\">\n  \n  </div>\n  <div class=\"col-lg-3\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Term-1</label>\n      <input name=\"FeeTypes[0].Term1From\"\n      [bsConfig]=\"bsConfig\"\n      bsDatepicker  \n      [value]=\"FeeTypes[0].Term1From\"\n       type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"From date\">\n      <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Term-1 date</small>\n    </div>\n  </div>\n  <div class=\"col-lg-3\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Term-2</label>\n      <input  [name]=\"FeeTypes[0].Term2From\" [bsConfig]=\"bsConfig\"\n      bsDatepicker\n       type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"From date\">\n      <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Term-2 date</small>\n    </div>\n  </div>\n   \n    </div>\n  </div>\n  \n  <div *ngIf=\"showData==true\" class=\"container\">\n    <div class=\"row\">\n  <div class=\"col-lg-5\">\n  \n  </div>\n  <div class=\"col-lg-3\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">To</label>\n      <input  [name]=\"FeeTypes[0].Term1To\" \n      [bsConfig]=\"bsConfig\"\n      bsDatepicker\n       type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"To date\">\n      <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Term-1 date</small>\n    </div>\n  </div>\n  <div class=\"col-lg-3\">\n    <div class=\"form-group\"> \n      <label for=\"exampleInputEmail1\">To</label>\n      <input [name]=\"FeeTypes[0].Term2To\" \n      [bsConfig]=\"bsConfig\"\n      bsDatepicker\n       type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"To date\">\n      <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Term-2 date</small>\n    </div>\n  </div>\n   \n    </div>\n  \n    <div class=\"row\">\n  <div class=\"col-lg-9\">\n  \n  </div>\n  <div class=\"col-lg-2\">\n  <button  type=\"submit\" style=\"margin-left: 70px;\" class=\"btn btn-success\">Manage</button>\n  </div>\n    </div>\n  </div>\n</form>\n\n\n");

/***/ }),

/***/ "./src/app/demo/pages/form-elements/AddFeePackaging/AddFeePackaging-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/AddFeePackaging/AddFeePackaging-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: AddFeePackagingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFeePackagingRoutingModule", function() { return AddFeePackagingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _AddFeePackaging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddFeePackaging.component */ "./src/app/demo/pages/form-elements/AddFeePackaging/AddFeePackaging.component.ts");




const routes = [
    {
        path: '',
        component: _AddFeePackaging_component__WEBPACK_IMPORTED_MODULE_3__["AddFeePackagingComponent"]
    }
];
let AddFeePackagingRoutingModule = class AddFeePackagingRoutingModule {
};
AddFeePackagingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddFeePackagingRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/form-elements/AddFeePackaging/AddFeePackaging.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/AddFeePackaging/AddFeePackaging.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvZm9ybS1lbGVtZW50cy9BZGRGZWVQYWNrYWdpbmcvQWRkRmVlUGFja2FnaW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/demo/pages/form-elements/AddFeePackaging/AddFeePackaging.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/AddFeePackaging/AddFeePackaging.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddFeePackagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFeePackagingComponent", function() { return AddFeePackagingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_classlevel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/classlevel.service */ "./src/app/services/classlevel.service.ts");
/* harmony import */ var src_app_services_FeeModules_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/FeeModules.service */ "./src/app/services/FeeModules.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let AddFeePackagingComponent = class AddFeePackagingComponent {
    constructor(_classLevel, _feeServices, fb, toastr) {
        this._classLevel = _classLevel;
        this._feeServices = _feeServices;
        this.fb = fb;
        this.toastr = toastr;
        this.selected = true;
    }
    ngOnInit() {
        this.bsConfig = {
            containerClass: 'theme-red'
        };
    }
    LevelChange(event) {
        let Ids = event.target.value;
        this._classLevel.getClass(Ids).subscribe((data) => {
            this.allClasses = data;
        });
    }
    GetFeeTypes() {
        this._feeServices.getFeeTypes(this.selectedLevel).subscribe((data) => {
            this.FeeTypes = data;
            this.date = this.FeeTypes[0].term2From;
            if (!this.FeeTypes) {
                this.showData = false;
            }
            else {
                this.showData = true;
            }
        });
    }
    onOptionsSelected(event) {
        this.selectedLevel = event.target.value;
        let classes = event.target.value;
        this._classLevel.getSection(classes).subscribe((data) => {
            this.allSec = data;
            this.sections = this.allSec.sections.split(',');
        });
    }
    updateFeeTerms() {
        this._feeServices.UpdateTermsWise(this.FeeTypes).subscribe(data => {
            this.toastr.success("Term Fee Updated", "Updated Successfully");
        }, error => {
            this.toastr.error("Term Fee Updated Failed", error.error);
        });
    }
};
AddFeePackagingComponent.ctorParameters = () => [
    { type: src_app_services_classlevel_service__WEBPACK_IMPORTED_MODULE_2__["ClasslevelService"] },
    { type: src_app_services_FeeModules_service__WEBPACK_IMPORTED_MODULE_3__["FeeModulesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
AddFeePackagingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-AddFeePackaging',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./AddFeePackaging.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/form-elements/AddFeePackaging/AddFeePackaging.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./AddFeePackaging.component.css */ "./src/app/demo/pages/form-elements/AddFeePackaging/AddFeePackaging.component.css")).default]
    })
], AddFeePackagingComponent);



/***/ }),

/***/ "./src/app/demo/pages/form-elements/AddFeePackaging/AddFeePackaging.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/AddFeePackaging/AddFeePackaging.module.ts ***!
  \************************************************************************************/
/*! exports provided: AddFeePackagingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFeePackagingModule", function() { return AddFeePackagingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _AddFeePackaging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddFeePackaging.component */ "./src/app/demo/pages/form-elements/AddFeePackaging/AddFeePackaging.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _AddFeePackaging_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddFeePackaging-routing.module */ "./src/app/demo/pages/form-elements/AddFeePackaging/AddFeePackaging-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");








let AddFeePackagingModule = class AddFeePackagingModule {
};
AddFeePackagingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
            _AddFeePackaging_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddFeePackagingRoutingModule"]
        ],
        declarations: [_AddFeePackaging_component__WEBPACK_IMPORTED_MODULE_3__["AddFeePackagingComponent"]]
    })
], AddFeePackagingModule);



/***/ })

}]);
//# sourceMappingURL=AddFeePackaging-AddFeePackaging-module-es2015.js.map