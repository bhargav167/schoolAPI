(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signin-auth-signin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-signin/auth-signin.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-signin/auth-signin.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper\">\n  <div class=\"auth-content\">\n    <div class=\"card\">\n      <div class=\"row align-items-center text-center\"> \n        <form #form=\"ngForm\" autocomplete=\"off\"  (submit)=\"login(form)\">\n          <div class=\"col-md-12\">\n            <div class=\"card-body\">\n            <h3 style=\"font-size: larger; font-family: Georgia, 'Times New Roman', Times, serif;\">Skuul Login</h3>\n            <hr/>\n              <div class=\"row\"> \n                <div class=\"col-lg-1\"> \n                </div>\n                <div class=\"col-lg-6\">\n                  <h4 class=\"mb-4 f-w-400\">Signin As </h4>\n                </div>\n                <div class=\"col-lg-4\">\n                  <span class=\"badge badge-info\">{{selectedRole}}</span>\n                </div> \n              </div>\n            \n              <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"feather icon-mail\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" [disabled]=\"!isRoleSelected\" #UserName=\"ngModel\" name=\"UserName\" [(ngModel)]=\"formModel.UserName\" placeholder=\"User Name\">\n              </div>\n              <div class=\"input-group mb-4\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"feather icon-lock\"></i></span>\n                </div>\n                <input type=\"password\" [disabled]=\"!isRoleSelected\"  #Password=\"ngModel\" name=\"Password\" [(ngModel)]=\"formModel.Password\" class=\"form-control\" placeholder=\"Password\">\n              </div>\n              <div class=\"form-group text-left mt-2\">\n                <div class=\"checkbox checkbox-primary d-inline\">\n                  <input type=\"checkbox\" name=\"checkbox-fill-1\" id=\"checkbox-fill-a1\" checked=\"\">\n                  <label for=\"checkbox-fill-a1\" class=\"cr\"> Save credentials</label>\n                </div>\n              </div>\n              <button type=\"submit\" [disabled]=\"!isRoleSelected\" class=\"btn btn-block btn-primary mb-4\">\n                <span *ngIf=\"this.btnLoader\"  class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                <span *ngIf=\"this.btnLoader\"  class=\"load-text\"> Loading...</span>\n                <span *ngIf=\"!this.btnLoader\" class=\"btn-text\"><i class=\"fa fa-user-secret\"></i> Sign In</span>\n              </button>\n              <p class=\"mb-2 text-muted\">Forgot password? <a [routerLink]=\"['/auth/reset-password']\" class=\"f-w-400\">Reset</a></p>\n              <p class=\"mb-0 text-muted\">Don’t have an account? <a [routerLink]=\"['/auth/signup']\" class=\"f-w-400\">Signup</a></p>\n            </div>\n          </div>\n          <div class=\"btn-group btn-group-justified\" style=\"margin-top:10px;\">\n             <a class=\"btn btn-primary width100\" (click)=\"GetSelectedRole('Admin')\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Copy\" style=\"background:#0084B4; color: white;\"><i class=\"fa fa-user-secret ispace\"></i> Admin</a>\n             <a class=\"btn btn-primary width100\" (click)=\"GetSelectedRole('Student')\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Copy\" style=\"background:#999999; color: white;\"><i class=\"fa fa-user-secret ispace\"></i> Student</a>\n             <a class=\"btn btn-primary width100\" (click)=\"GetSelectedRole('Teacher')\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Copy\" style=\"background:#4aa64e; color: white;\"><i class=\"fa fa-user-secret ispace\"></i> Teacher</a>\n            </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signin/auth-signin-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AuthSigninRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSigninRoutingModule", function() { return AuthSigninRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-signin.component */ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts");




const routes = [
    {
        path: '',
        component: _auth_signin_component__WEBPACK_IMPORTED_MODULE_3__["AuthSigninComponent"]
    }
];
let AuthSigninRoutingModule = class AuthSigninRoutingModule {
};
AuthSigninRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthSigninRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1zaWduaW4vYXV0aC1zaWduaW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts ***!
  \********************************************************************************/
/*! exports provided: AuthSigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSigninComponent", function() { return AuthSigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_AuthServices_Auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/AuthServices/Auth.service */ "./src/app/services/AuthServices/Auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let AuthSigninComponent = class AuthSigninComponent {
    constructor(_authServices, _router, toastr) {
        this._authServices = _authServices;
        this._router = _router;
        this.toastr = toastr;
        this.selectedRole = 'Role';
        this.isRoleSelected = false;
        this.formModel = {
            UserName: '',
            Password: ''
        };
    }
    ngOnInit() {
        this.btnLoader = false;
        if (localStorage.getItem('token') != null)
            this._router.navigateByUrl('/layout/fixed');
    }
    login(form) {
        this.btnLoader = true;
        this._authServices.login(form.value, this.selectedRole).subscribe((res) => {
            localStorage.setItem("token", res.token);
            localStorage.setItem("role", res.selectedRole);
            localStorage.setItem("Id", res.Id);
            if (this.selectedRole == 'Admin') {
                this._router.navigateByUrl('/layout/fixed');
            }
            if (this.selectedRole == 'Student') {
                this._router.navigateByUrl('/layout/StuDash');
            }
        }, err => {
            if (err.status == 400) {
                this.toastr.error("Opps! Incorrect UserName & Password");
                this.btnLoader = false;
            }
            if (err.status == 401) {
                this.toastr.error("Opps! You Are Not Authorized For This Role.");
                this.btnLoader = false;
            }
        });
    }
    GetSelectedRole(role) {
        this.selectedRole = '';
        this.selectedRole = role;
        this.isRoleSelected = true;
    }
};
AuthSigninComponent.ctorParameters = () => [
    { type: src_app_services_AuthServices_Auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
AuthSigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-signin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-signin/auth-signin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-signin.component.scss */ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.scss")).default]
    })
], AuthSigninComponent);



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signin/auth-signin.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AuthSigninModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSigninModule", function() { return AuthSigninModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_signin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-signin-routing.module */ "./src/app/demo/pages/authentication/auth-signin/auth-signin-routing.module.ts");
/* harmony import */ var _auth_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-signin.component */ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let AuthSigninModule = class AuthSigninModule {
};
AuthSigninModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_signin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthSigninRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        declarations: [_auth_signin_component__WEBPACK_IMPORTED_MODULE_4__["AuthSigninComponent"]]
    })
], AuthSigninModule);



/***/ })

}]);
//# sourceMappingURL=auth-signin-auth-signin-module-es2015.js.map