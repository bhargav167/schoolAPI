(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-Feeparticular-basic-Feeparticular-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/form-elements/basic-Feeparticular/basic-Feeparticular.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/form-elements/basic-Feeparticular/basic-Feeparticular.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n<div class=\"page-header\">\n  <div class=\"page-block\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-md-12\">\n        <div class=\"page-header-title\">\n          <ng-container><h5 class=\"m-b-10\">Fee</h5></ng-container>\n        </div>\n        <ul class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a [routerLink]=\"['/dashboard/analytics/']\" ><i class=\"feather icon-home\"></i></a>\n           </li> \n           <li class=\"breadcrumb-item\"><a [routerLink]=\"['/forms/basic/']\">Fee</a></li>\n             <li class=\"breadcrumb-item\"><a [routerLink]=\"['/forms/Feeparticular/']\">Fee Particular</a></li>\n          \n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Class level</label>\n          <select (change)=\"LevelChange($event)\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option value=\"-1\" [selected]=\"selected\" disabled>--Select--</option>\n            <option value=\"1\">Junior</option>\n            <option value=\"2\">Senior</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Class</label>\n          <select (change)='onOptionsSelected($event)' class=\"form-control\" id=\"exampleFormControlSelect1\"> \n              <option *ngFor=\"let items of allClasses\" [ngValue]=\"items\">{{items.classes}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Class Section</label>\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option [selected]=\"selected\">--Select--</option>\n            <option *ngFor=\"let items of sections\">{{items}}</option>\n          </select>\n          <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Section</small>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <br>\n        <button type=\"button\" (click)=\"GetFeeTypes()\" style=\"margin-top: 8px;\" class=\"btn btn-info\"><i class=\"fa fa-search\"></i> Search</button>&nbsp;\n        <button type=\"button\" style=\"margin-top: 8px;\" \n        class=\"btn btn-primary\"\n        data-toggle=\"modal\" data-target=\"#myModal\"\n        ><i class=\"fa fa-plus\"></i> Add New</button>\n      </div>\n</div> \n\n  <hr> \n   <div class=\"col-md-12\">   \n      <table   class=\"table table-hover m-b-0\">\n        <thead>\n          <tr>  \n            <th>\n              <span>Fee Type\n                <a class=\"help\"><i class=\"fa fa-sort-numeric-up\"></i></a>\n              </span>\n            </th>\n            <th>\n              <span>Fee Amount\n                <a class=\"help\"><i class=\"fa fa-cash\"></i></a>\n              </span>\n            </th> \n            <th>\n              <span>Action\n                <a class=\"help\"><i class=\"fab fa-cuttlefish\"></i></a>\n              </span>\n            </th> \n          </tr>\n        </thead>\n        <tbody>\n            <div *ngIf=\"FeeTypes?.length==0\" class=\"d-flex justify-content-start center\">\n                <div class=\"text text-center\" role=\"status\">\n                 <b>No Result Found</b>\n                </div>\n              </div>\n      <tr *ngFor=\"let item of FeeTypes\"> \n          <td>{{item.FeeType}}</td>\n          <td>{{item.FeeAmt}}</td> \n        <td>\n          <button (click)=\"GetEdit(item.Id)\"  data-toggle=\"modal\" data-target=\"#myModal1\" class=\"btn btn-info\">Edit</button>\n        </td>\n      </tr>\n        </tbody>\n      </table>\n     \n</div>\n\n<!-- Create FeeParticular -->\n\n<form [formGroup]=\"FeeParticular\" (ngSubmit)=\"saveFee()\">\n  <div class=\"modal fade\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add Fee Particular</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-3\">\n\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Class level</label>\n                <select formControlName=\"classLevel\" (change)=\"LevelChange($event)\" class=\"form-control\"\n                  id=\"exampleFormControlSelect1\">\n                  <option value=\"-1\" [selected]=\"selected\" disabled>--Select--</option>\n                  <option value=\"1\">Junior</option>\n                  <option value=\"2\">Senior</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3\">\n\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Class</label>\n                <select formControlName=\"Stander\" \n                (change)='onOptionsSelected($event)'\n                  [ngClass]=\"{'is-invalid': FeeParticular.get('Stander').errors && FeeParticular.get('Stander').touched}\"\n                  class=\"form-control\" id=\"exampleFormControlSelect1\">\n                  <option *ngFor=\"let items of allClasses\">{{items.classes}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3\">\n\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Class Section</label>\n                <select formControlName=\"Section\"\n                  [ngClass]=\"{'is-invalid': FeeParticular.get('Section').errors && FeeParticular.get('Section').touched}\"\n                  class=\"form-control\" id=\"exampleFormControlSelect1\">\n                  <option [selected]=\"selected\">--Select--</option>\n                  <option *ngFor=\"let items of sections\">{{items}}</option>\n                </select>\n                <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Section</small>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3\">\n\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Fee Type</label>\n                <input formControlName=\"feeType\"\n                  [ngClass]=\"{'is-invalid': FeeParticular.get('feeType').errors && FeeParticular.get('feeType').touched}\"\n                  type=\"text\" class=\"form-control\" placeholder=\"Fee type.. i.e Sport fee\">\n                <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Section</small>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3\">\n\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Fee Amount</label>\n                <input formControlName=\"feeAmt\"\n                  [ngClass]=\"{'is-invalid': FeeParticular.get('feeAmt').errors && FeeParticular.get('feeAmt').touched}\"\n                  type=\"number\" class=\"form-control\" placeholder=\"Fee Amount.. i.e 2000\">\n                <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Section</small>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n\n            </div>\n          </div>\n        </div>\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button data-toggle=\"modal\" data-target=\"#myModal\" data-backdrop=\"false\" class=\"btn btn-primary event-btn m-2\" type=\"submit\" [disabled]=\"!FeeParticular.valid\">\n            <span *ngIf=\"this.btnLoader\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.btnLoader\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.btnLoader\" class=\"btn-text\"><i class=\"fa fa-save\"></i> Save</span>\n          </button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</form>\n\n\n<!-- Edit FeeParticular -->\n\n<form  *ngIf=\"EditData\" #FeeForm=\"ngForm\" (ngSubmit)=\"FeeForm.form.valid && UpdateFee()\">\n  <div class=\"modal\" id=\"myModal1\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Edit Fee Particular</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-3\">\n\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Class level</label>\n                <select [(ngModel)]=\"EditData.ClassLevel\" name=\"classLevel\"  (change)=\"LevelChange($event)\" class=\"form-control\"\n                  id=\"exampleFormControlSelect1\">\n                  <option value=\"-1\" [selected]=\"selected\" disabled>--Select--</option>\n                  <option value=\"1\">Junior</option>\n                  <option value=\"2\">Senior</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3\">\n\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Class</label>\n                <select [(ngModel)]=\"EditData.Stander\" name=\"stander\"\n                  [ngClass]=\"{'is-invalid': FeeParticular.get('Stander').errors && FeeParticular.get('Stander').touched}\"\n                  class=\"form-control\" id=\"exampleFormControlSelect1\">\n                  <option *ngFor=\"let items of allClasses\">{{items.classes}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3\">\n\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Class Section</label>\n                <select [(ngModel)]=\"EditData.Section\" name=\"section\"\n                  [ngClass]=\"{'is-invalid': FeeParticular.get('Section').errors && FeeParticular.get('Section').touched}\"\n                  class=\"form-control\" id=\"exampleFormControlSelect1\">\n                  <option [selected]=\"selected\" disabled>--Select--</option>\n                  <option value=\"A\">A</option>\n                  <option value=\"B\">B</option>\n                </select>\n                <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Section</small>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3\">\n\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Fee Type</label>\n                <input [(ngModel)]=\"EditData.FeeType\" name=\"feeType\"\n                  [ngClass]=\"{'is-invalid': FeeParticular.get('feeType').errors && FeeParticular.get('feeType').touched}\"\n                  type=\"text\" class=\"form-control\" placeholder=\"Fee type.. i.e Sport fee\">\n                <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Section</small>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3\">\n\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Fee Amount</label>\n                <input [(ngModel)]=\"EditData.FeeAmt\" name=\"feeAmt\"\n                  [ngClass]=\"{'is-invalid': FeeParticular.get('feeAmt').errors && FeeParticular.get('feeAmt').touched}\"\n                  type=\"number\" class=\"form-control\" placeholder=\"Fee Amount.. i.e 2000\">\n                <small id=\"emailHelp\" class=\"invalid-feedback\">Please select Section</small>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n\n            </div>\n          </div>\n        </div>\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button data-toggle=\"modal\" data-target=\"#myModal1\" data-backdrop=\"false\" class=\"btn btn-primary event-btn m-2\" type=\"submit\">\n            <span *ngIf=\"this.btnLoader\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.btnLoader\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.btnLoader\" class=\"btn-text\"><i class=\"fa fa-save\"></i> Save</span>\n          </button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</form>");

/***/ }),

/***/ "./src/app/demo/pages/form-elements/basic-Feeparticular/basic-Feeparticular-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/basic-Feeparticular/basic-Feeparticular-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: BasicFeesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFeesRoutingModule", function() { return BasicFeesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _basic_Feeparticular_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-Feeparticular.component */ "./src/app/demo/pages/form-elements/basic-Feeparticular/basic-Feeparticular.component.ts");




const routes = [
    {
        path: '',
        component: _basic_Feeparticular_component__WEBPACK_IMPORTED_MODULE_3__["BasicFeeparticularComponent"]
    }
];
let BasicFeesRoutingModule = class BasicFeesRoutingModule {
};
BasicFeesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BasicFeesRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/form-elements/basic-Feeparticular/basic-Feeparticular.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/basic-Feeparticular/basic-Feeparticular.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvZm9ybS1lbGVtZW50cy9iYXNpYy1GZWVwYXJ0aWN1bGFyL2Jhc2ljLUZlZXBhcnRpY3VsYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/demo/pages/form-elements/basic-Feeparticular/basic-Feeparticular.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/basic-Feeparticular/basic-Feeparticular.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: BasicFeeparticularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFeeparticularComponent", function() { return BasicFeeparticularComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_classlevel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/classlevel.service */ "./src/app/services/classlevel.service.ts");
/* harmony import */ var src_app_services_FeeModules_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/FeeModules.service */ "./src/app/services/FeeModules.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let BasicFeeparticularComponent = class BasicFeeparticularComponent {
    constructor(_classLevel, _feeServices, fb, toastr) {
        this._classLevel = _classLevel;
        this._feeServices = _feeServices;
        this.fb = fb;
        this.toastr = toastr;
        this.selected = true;
    }
    ngOnInit() {
        this.createFeeParticularForm();
    }
    LevelChange(event) {
        let Ids = event.target.value;
        this._classLevel.getClass(Ids).subscribe((data) => {
            this.allClasses = data;
        });
    }
    createFeeParticularForm() {
        this.FeeParticular = this.fb.group({
            classLevel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Stander: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Section: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            feeType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            feeAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    saveFee() {
        this.btnLoader = true;
        if (this.FeeParticular.valid) {
            this.feeParticular = Object.assign({}, this.FeeParticular.value);
            this._feeServices.registerOne(this.feeParticular).subscribe(() => {
                this.toastr.success('Fee Particular Created!', 'Data Saved');
                this.createFeeParticularForm();
                this.btnLoader = false;
            }, error => {
                this.toastr.error('Error In Fee Particular Creating!', 'Data Not Saved');
                this.btnLoader = false;
            });
        }
    }
    //Update FeeModule
    UpdateFee() {
        this.btnLoader = true;
        this._feeServices.register(this.EditData).subscribe(() => {
            this.toastr.success('Fee Particular Created!', 'Data Updated');
            this.btnLoader = false;
            this.GetFeeTypes();
        }, error => {
            this.toastr.error('Error In Fee Particular Updating!', 'Data Not Updated');
            this.btnLoader = false;
        });
    }
    GetFeeTypes() {
        this._feeServices.getFeeTypes(this.selectedLevel).subscribe((data) => {
            this.FeeTypes = data;
        });
    }
    GetEdit(id) {
        this._feeServices.getFeeParticular(id).subscribe((data) => {
            this.EditData = data;
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
};
BasicFeeparticularComponent.ctorParameters = () => [
    { type: src_app_services_classlevel_service__WEBPACK_IMPORTED_MODULE_2__["ClasslevelService"] },
    { type: src_app_services_FeeModules_service__WEBPACK_IMPORTED_MODULE_3__["FeeModulesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('FeeForm', { static: true })
], BasicFeeparticularComponent.prototype, "FeeForm", void 0);
BasicFeeparticularComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic-Feeparticular',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic-Feeparticular.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/form-elements/basic-Feeparticular/basic-Feeparticular.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basic-Feeparticular.component.css */ "./src/app/demo/pages/form-elements/basic-Feeparticular/basic-Feeparticular.component.css")).default]
    })
], BasicFeeparticularComponent);



/***/ }),

/***/ "./src/app/demo/pages/form-elements/basic-Feeparticular/basic-Feeparticular.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/basic-Feeparticular/basic-Feeparticular.module.ts ***!
  \********************************************************************************************/
/*! exports provided: BasicFeeparticularModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFeeparticularModule", function() { return BasicFeeparticularModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _basic_Feeparticular_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-Feeparticular.component */ "./src/app/demo/pages/form-elements/basic-Feeparticular/basic-Feeparticular.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _basic_Feeparticular_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic-Feeparticular-routing.module */ "./src/app/demo/pages/form-elements/basic-Feeparticular/basic-Feeparticular-routing.module.ts");






let BasicFeeparticularModule = class BasicFeeparticularModule {
};
BasicFeeparticularModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _basic_Feeparticular_routing_module__WEBPACK_IMPORTED_MODULE_5__["BasicFeesRoutingModule"]
        ],
        declarations: [_basic_Feeparticular_component__WEBPACK_IMPORTED_MODULE_3__["BasicFeeparticularComponent"]]
    })
], BasicFeeparticularModule);



/***/ })

}]);
//# sourceMappingURL=basic-Feeparticular-basic-Feeparticular-module-es2015.js.map