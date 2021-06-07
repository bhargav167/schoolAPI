(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Setting-Setting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/form-elements/Setting/Setting.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/form-elements/Setting/Setting.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 class=\"text text-center\">Session Settings</h4>\n<hr>\n\n<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header with-border\">\n          <h3 class=\"box-title\">Add Session</h3>\n        </div>\n        <form [formGroup]=\"registerSession\" (ngSubmit)=\"AddSession()\">\n          <div class=\"box-body\">\n            <div class=\"form-group\">\n              <label>Session</label><small class=\"req\"> *</small>\n              <input formControlName=\"Session\"\n                [ngClass]=\"{'is-invalid': registerSession.get('Session').errors && registerSession.get('Session').touched}\"\n                type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                placeholder=\"Session\">\n              <small id=\"emailHelp\"\n                *ngIf=\"registerSession.get('Session').hasError('required') && registerSession.get('Session').touched\"\n                class=\"invalid-feedback\">Please Enter Session</small>\n              <small id=\"emailHelp\"\n                *ngIf=\"registerSession.get('Session').hasError('minlength') && registerSession.get('Session').touched\"\n                class=\"invalid-feedback\">Please enter valid Session. Too short</small>\n            </div>\n          </div>\n          <div class=\"box-footer\">\n            <button class=\"btn btn-primary event-btn m-2\" type=\"submit\" [disabled]=\"!registerSession.valid\">\n              <span *ngIf=\"this.btnLoader\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n              <span *ngIf=\"this.btnLoader\" class=\"load-text\"> Loading...</span>\n              <span *ngIf=\"!this.btnLoader\" class=\"btn-text\"><i class=\"fa fa-save\"></i> Save</span>\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header ptbnull\">\n          <h3 class=\"box-title titlefix\">Session List</h3>\n        </div>\n        <div class=\"box-body\">\n          <div class=\"mailbox-messages\">\n            <div class=\"\">\n              <div class=\"download_label\">Session List</div>\n             <table class=\"table table-stripe\">\n               <thead>\n                 <th>Id</th>\n                 <th>Sessions</th>\n                 <th>Status</th>\n                 <th>Action</th>\n               </thead>\n               <tbody>\n                 <tr *ngFor=\"let item of session\">\n                   <td>{{item.Id}}</td>\n                   <td>{{item.Session}}</td>\n                   <td *ngIf=\"item.IsActive==true\"><span class=\"badge badge-primary\">Active</span></td>\n                   <td *ngIf=\"item.IsActive==false\">     </td>\n                   <td>\n                     <button (click)=\"Edit(item)\" type=\"button\" class=\"btn btn-warning\">Edit</button>&nbsp;\n                     <button type=\"button\" (click)=\"DeleteSession(item)\" class=\"btn btn-danger\">Delete</button>\n                   </td>\n                 </tr>\n               </tbody>\n             </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n \n<!-- <div class=\"\">\n  <label  class=\"radio-inline\">\n    <input type=\"radio\" name=\"optradio\" (change)=\"ActivateSession(item.Id)\">{{item.Session}}\n  </label>\n  \n</div> -->\n");

/***/ }),

/***/ "./src/app/demo/pages/form-elements/Setting/Setting-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/Setting/Setting-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: SettingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingRoutingModule", function() { return SettingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Setting.component */ "./src/app/demo/pages/form-elements/Setting/Setting.component.ts");




const routes = [
    {
        path: '',
        component: _Setting_component__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"]
    }
];
let SettingRoutingModule = class SettingRoutingModule {
};
SettingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SettingRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/form-elements/Setting/Setting.component.css":
/*!************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/Setting/Setting.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box.box-primary {\r\n    border-top-color: #faa21c;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);\r\n}\r\n.box.box-primary {\r\n    border-top-color: #faa21c;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);\r\n    /* border: solid 1px #dde4eb; */\r\n}\r\n.box {\r\n    position: relative;\r\n    border-radius: 3px;\r\n    background: #ffffff;\r\n    border-top: 3px solid #d2d6de;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n}\r\n.box-header.with-border {\r\n    border-bottom: 1px solid #f4f4f4;\r\n}\r\n.box-header {\r\n    color: #444;\r\n    display: block;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n.box-title {\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    margin: 0;\r\n    line-height: 1;\r\n}\r\n.box-body {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n    padding: 10px;\r\n}\r\n.box-footer {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n    border-top: 1px solid #f4f4f4;\r\n    padding: 10px;\r\n    background-color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9mb3JtLWVsZW1lbnRzL1NldHRpbmcvU2V0dGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGdFQUFnRTtBQUNwRTtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdFQUFnRTtJQUNoRSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsU0FBUztJQUNULGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3BhZ2VzL2Zvcm0tZWxlbWVudHMvU2V0dGluZy9TZXR0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LmJveC1wcmltYXJ5IHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNmYWEyMWM7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwuMjQpO1xyXG59XHJcbi5ib3guYm94LXByaW1hcnkge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2ZhYTIxYztcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLC4yNCk7XHJcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCAjZGRlNGViOyAqL1xyXG59XHJcbi5ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZDJkNmRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG4uYm94LWhlYWRlci53aXRoLWJvcmRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0ZjRmNDtcclxufVxyXG4uYm94LWhlYWRlciB7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYm94LXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbi5ib3gtYm9keSB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uYm94LWZvb3RlciB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmNGY0ZjQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/demo/pages/form-elements/Setting/Setting.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/Setting/Setting.component.ts ***!
  \***********************************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_AdminServices_Dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/AdminServices/Dashboard.service */ "./src/app/services/AdminServices/Dashboard.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_AdminServices_Session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/AdminServices/Session.service */ "./src/app/services/AdminServices/Session.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let SettingComponent = class SettingComponent {
    constructor(fb, _dashServices, _sessionService, toastr) {
        this.fb = fb;
        this._dashServices = _dashServices;
        this._sessionService = _sessionService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.btnLoader = false;
        this.createRegisterSession();
        this.loadAllSession();
    }
    createRegisterSession() {
        this.registerSession = this.fb.group({
            Session: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(7)]]
        });
    }
    AddSession() {
        this.btnLoader = true;
        if (this.registerSession.valid) {
            this.session = Object.assign({}, this.registerSession.value);
            if (this.Id == null) {
                this.session.Id = 0;
                this._sessionService.PostSession(this.session).subscribe(() => {
                    this.toastr.success('Session Added!', 'Data Saved');
                    this.registerSession.reset();
                    this.createRegisterSession();
                    this.btnLoader = false;
                    this.loadAllSession();
                }, error => {
                    this.toastr.error('Saving Session Failed!', 'Problem in saving Data', error);
                    this.btnLoader = false;
                });
            }
            else {
                this._sessionService.updateSession(this.Id, this.session).subscribe(() => {
                    this.toastr.success('Session Updated!', 'Data Saved');
                    this.registerSession.reset();
                    this.createRegisterSession();
                    this.btnLoader = false;
                    this.loadAllSession();
                    this.Id = null;
                }, error => {
                    this.toastr.error('Update Session Failed!', 'Problem in saving Data', error);
                    this.btnLoader = false;
                });
            }
        }
    }
    Edit(item) {
        this._sessionService.getSessionById(item.Id).subscribe((data) => {
            this.registerSession.controls['Session'].setValue(data.Session);
            this.Id = data.Id;
        });
    }
    DeleteSession(item) {
        var isConfirm = confirm("Are You Sure!");
        if (isConfirm == true) {
            this._sessionService.DelSession(item.Id).subscribe(() => {
                this.toastr.success("Session Deleted Successfully");
                this.loadAllSession();
                this.Id = null;
            });
        }
        else {
            this.Id = null;
        }
    }
    ActivateSession($event) {
        this._dashServices.ActivateSession($event).subscribe(() => {
            alert("Updated");
        }, err => {
            console.log(err);
        });
    }
    loadAllSession() {
        this._dashServices.getSession().subscribe((data) => {
            this.session = data;
        });
    }
};
SettingComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_AdminServices_Dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] },
    { type: src_app_services_AdminServices_Session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-Setting',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Setting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/form-elements/Setting/Setting.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Setting.component.css */ "./src/app/demo/pages/form-elements/Setting/Setting.component.css")).default]
    })
], SettingComponent);



/***/ }),

/***/ "./src/app/demo/pages/form-elements/Setting/Setting.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/Setting/Setting.module.ts ***!
  \********************************************************************/
/*! exports provided: SettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _Setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Setting.component */ "./src/app/demo/pages/form-elements/Setting/Setting.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _Setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Setting-routing.module */ "./src/app/demo/pages/form-elements/Setting/Setting-routing.module.ts");






let SettingModule = class SettingModule {
};
SettingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _Setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingRoutingModule"]
        ],
        declarations: [_Setting_component__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"]]
    })
], SettingModule);



/***/ }),

/***/ "./src/app/services/AdminServices/Session.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/AdminServices/Session.service.ts ***!
  \***********************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let SessionService = class SessionService {
    constructor(_http) {
        this._http = _http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    PostSession(Session) {
        return this._http.post(this.baseURL + 'Session' + '/AddSession', Session);
    }
    getSessionById(id) {
        return this._http.get(this.baseURL + 'Session' + '/' + id);
    }
    updateSession(id, session) {
        return this._http.put(this.baseURL + 'Session' + '/' + id, session);
    }
    DelSession(id) {
        return this._http.delete(this.baseURL + 'Session' + '/' + id);
    }
};
SessionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SessionService);



/***/ })

}]);
//# sourceMappingURL=Setting-Setting-module-es2015.js.map