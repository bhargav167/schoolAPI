function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Acadmic-Subject-Acadmic-Subject-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/Acadmics/Acadmic-Subject/Acadmic-Subject.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/Acadmics/Acadmic-Subject/Acadmic-Subject.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoPagesAcadmicsAcadmicSubjectAcadmicSubjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header with-border\">\n          <h3 class=\"box-title\">Add Subject</h3>\n        </div>\n        <form [formGroup]=\"registerSubject\" (ngSubmit)=\"AddSubject()\">\n          <div class=\"box-body\">\n            <div class=\"form-group\">\n              <label>Subject</label><small class=\"req\"> *</small>\n              <input formControlName=\"Subject\"\n                [ngClass]=\"{'is-invalid': registerSubject.get('Subject').errors && registerSubject.get('Subject').touched}\"\n                type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                placeholder=\"Subject\">\n              <small id=\"emailHelp\"\n                *ngIf=\"registerSubject.get('Subject').hasError('required') &&  registerSubject.get('Subject').touched\"\n                class=\"invalid-feedback\">Please Enter Section</small>\n              <small id=\"emailHelp\"\n                *ngIf=\"registerSubject.get('Subject').hasError('maxlength') && registerSubject.get('Subject').touched\"\n                class=\"invalid-feedback\">Please enter valid Session. Too Long</small>\n            </div>\n            <div class=\"form-group\">\n              <label>Subject Code</label><small class=\"req\"> *</small>\n              <input formControlName=\"codeId\"\n                [ngClass]=\"{'is-invalid': registerSubject.get('codeId').errors && registerSubject.get('codeId').touched}\"\n                type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                placeholder=\"Subject Code\">\n              <small id=\"emailHelp\"\n                *ngIf=\"registerSubject.get('codeId').hasError('required') &&  registerSubject.get('codeId').touched\"\n                class=\"invalid-feedback\">Please Enter Section</small>\n              <small id=\"emailHelp\"\n                *ngIf=\"registerSubject.get('codeId').hasError('maxlength') && registerSubject.get('codeId').touched\"\n                class=\"invalid-feedback\">Please enter valid Session. Too Long</small>\n            </div>\n\n            <div class=\"form-group\">\n              <label>Subject Type</label><small class=\"req\"> *</small>\n              <div class=\"form-check-inline\">\n                <label class=\"form-check-label\">\n                  <input formControlName=\"Types\" id=\"theory\" value=\"theory\" type=\"radio\" class=\"form-check-input\" name=\"Types\">Theory\n                </label>\n              </div>\n              <div class=\"form-check-inline\">\n                <label class=\"form-check-label\">\n                  <input formControlName=\"Types\" value=\"practicle\" type=\"radio\" id=\"practicle\" class=\"form-check-input\" name=\"Types\">Practicle\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"box-footer\">\n            <button type=\"submit\" class=\"btn btn-info pull-right\">Save</button>\n          </div>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"col-md-8\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header ptbnull\">\n          <h3 class=\"box-title titlefix\">Subject</h3>\n        </div>\n        <div class=\"box-body\">\n          <div class=\"mailbox-messages\">\n            <div class=\"\">\n              <div class=\"download_label\">Subject List</div>\n             <table class=\"table table-stripe\">\n               <thead> \n                 <th>Subject</th>\n                 <th>Code</th>\n                 <th>Type</th>\n                 <th>Action</th>\n               </thead>\n               <tbody>\n                 <tr *ngFor=\"let item of subjects\"> \n                   <td>{{item.Subject}}</td>\n                   <td>{{item.codeId}}</td>\n                   <td>{{item.Types}}</td> \n                   <td>\n                     <button (click)=\"Edit(item)\" type=\"button\" class=\"btn btn-warning\">Edit</button>&nbsp;\n                     <button type=\"button\" (click)=\"DeleteSubject(item)\" class=\"btn btn-danger\">Delete</button>\n                   </td>\n                 </tr>\n               </tbody>\n             </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n";
    /***/
  },

  /***/
  "./src/app/demo/pages/Acadmics/Acadmic-Subject/Acadmic-Subject-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/demo/pages/Acadmics/Acadmic-Subject/Acadmic-Subject-routing.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: AcadmicSubjectRoutingModule */

  /***/
  function srcAppDemoPagesAcadmicsAcadmicSubjectAcadmicSubjectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcadmicSubjectRoutingModule", function () {
      return AcadmicSubjectRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Acadmic_Subject_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Acadmic-Subject.component */
    "./src/app/demo/pages/Acadmics/Acadmic-Subject/Acadmic-Subject.component.ts");

    var routes = [{
      path: '',
      component: _Acadmic_Subject_component__WEBPACK_IMPORTED_MODULE_3__["AcadmicSubjectComponent"]
    }];

    var AcadmicSubjectRoutingModule = function AcadmicSubjectRoutingModule() {
      _classCallCheck(this, AcadmicSubjectRoutingModule);
    };

    AcadmicSubjectRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AcadmicSubjectRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/pages/Acadmics/Acadmic-Subject/Acadmic-Subject.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/demo/pages/Acadmics/Acadmic-Subject/Acadmic-Subject.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoPagesAcadmicsAcadmicSubjectAcadmicSubjectComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".box.box-primary {\r\n    border-top-color: #faa21c;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);\r\n}\r\n.box.box-primary {\r\n    border-top-color: #faa21c;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);\r\n    /* border: solid 1px #dde4eb; */\r\n}\r\n.box {\r\n    position: relative;\r\n    border-radius: 3px;\r\n    background: #ffffff;\r\n    border-top: 3px solid #d2d6de;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n}\r\n.box-header.with-border {\r\n    border-bottom: 1px solid #f4f4f4;\r\n}\r\n.box-header {\r\n    color: #444;\r\n    display: block;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n.box-title {\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    margin: 0;\r\n    line-height: 1;\r\n}\r\n.box-body {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n    padding: 10px;\r\n}\r\n.box-footer {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n    border-top: 1px solid #f4f4f4;\r\n    padding: 10px;\r\n    background-color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9BY2FkbWljcy9BY2FkbWljLVN1YmplY3QvQWNhZG1pYy1TdWJqZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsZ0VBQWdFO0FBQ3BFO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZ0VBQWdFO0lBQ2hFLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixTQUFTO0lBQ1QsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvQWNhZG1pY3MvQWNhZG1pYy1TdWJqZWN0L0FjYWRtaWMtU3ViamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC5ib3gtcHJpbWFyeSB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjZmFhMjFjO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsLjI0KTtcclxufVxyXG4uYm94LmJveC1wcmltYXJ5IHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNmYWEyMWM7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwuMjQpO1xyXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggI2RkZTRlYjsgKi9cclxufVxyXG4uYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2QyZDZkZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuLmJveC1oZWFkZXIud2l0aC1ib3JkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNGY0ZjQ7XHJcbn1cclxuLmJveC1oZWFkZXIge1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmJveC10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufVxyXG4uYm94LWJvZHkge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmJveC1mb290ZXIge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjRmNGY0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/demo/pages/Acadmics/Acadmic-Subject/Acadmic-Subject.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/demo/pages/Acadmics/Acadmic-Subject/Acadmic-Subject.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AcadmicSubjectComponent */

  /***/
  function srcAppDemoPagesAcadmicsAcadmicSubjectAcadmicSubjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcadmicSubjectComponent", function () {
      return AcadmicSubjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_Acadmics_Subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/Acadmics/Subject.service */
    "./src/app/services/Acadmics/Subject.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var AcadmicSubjectComponent = /*#__PURE__*/function () {
      function AcadmicSubjectComponent(fb, _secServices, toastr) {
        _classCallCheck(this, AcadmicSubjectComponent);

        this.fb = fb;
        this._secServices = _secServices;
        this.toastr = toastr;
      }

      _createClass(AcadmicSubjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createRegisterSubject();
          this.loadAllSubject();
        }
      }, {
        key: "createRegisterSubject",
        value: function createRegisterSubject() {
          this.registerSubject = this.fb.group({
            Subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            codeId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Types: ['Practicle', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "Edit",
        value: function Edit(item) {
          var _this = this;

          this._secServices.getSubjectById(item.Id).subscribe(function (data) {
            _this.registerSubject.controls['Subject'].setValue(data.Subject);

            _this.registerSubject.controls['codeId'].setValue(data.codeId);

            _this.registerSubject.controls['Types'].setValue(data.Types);

            _this.Id = data.Id;
          });
        }
      }, {
        key: "loadAllSubject",
        value: function loadAllSubject() {
          var _this2 = this;

          this._secServices.getSubject().subscribe(function (data) {
            _this2.subjects = data;
          });
        }
      }, {
        key: "DeleteSubject",
        value: function DeleteSubject(item) {
          var _this3 = this;

          var isConfirm = confirm("Are You Sure!");

          if (isConfirm == true) {
            this._secServices.DelSubject(item.Id).subscribe(function () {
              _this3.toastr.success("Section Deleted Successfully");

              _this3.loadAllSubject();

              _this3.Id = null;
            });
          } else {
            this.Id = null;
          }
        }
      }, {
        key: "AddSubject",
        value: function AddSubject() {
          var _this4 = this;

          this.btnLoader = true;

          if (this.registerSubject.valid) {
            this.subject = Object.assign({}, this.registerSubject.value);

            if (this.Id == null) {
              this.subject.Id = 0;

              this._secServices.PostSubject(this.subject).subscribe(function () {
                _this4.toastr.success('Subject Added!', 'Data Saved');

                _this4.registerSubject.reset();

                _this4.createRegisterSubject();

                _this4.btnLoader = false;

                _this4.loadAllSubject();
              }, function (error) {
                _this4.toastr.error('Saving subject Failed!', 'Problem in saving Data', error);

                _this4.btnLoader = false;
              });
            } else {
              this._secServices.updateSubject(this.Id, this.subject).subscribe(function () {
                _this4.toastr.success('Subject Updated!', 'Data Saved');

                _this4.registerSubject.reset();

                _this4.createRegisterSubject();

                _this4.btnLoader = false;

                _this4.loadAllSubject();

                _this4.Id = null;
              }, function (error) {
                _this4.toastr.error('Update Subject Failed!', 'Problem in saving Data', error);

                _this4.btnLoader = false;
              });
            }
          }
        }
      }]);

      return AcadmicSubjectComponent;
    }();

    AcadmicSubjectComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_Acadmics_Subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    AcadmicSubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-Acadmic-Subject',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./Acadmic-Subject.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/Acadmics/Acadmic-Subject/Acadmic-Subject.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./Acadmic-Subject.component.css */
      "./src/app/demo/pages/Acadmics/Acadmic-Subject/Acadmic-Subject.component.css"))["default"]]
    })], AcadmicSubjectComponent);
    /***/
  },

  /***/
  "./src/app/demo/pages/Acadmics/Acadmic-Subject/Acadmic-Subject.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/demo/pages/Acadmics/Acadmic-Subject/Acadmic-Subject.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: AcadmicSubjectModule */

  /***/
  function srcAppDemoPagesAcadmicsAcadmicSubjectAcadmicSubjectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcadmicSubjectModule", function () {
      return AcadmicSubjectModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _Acadmic_Subject_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Acadmic-Subject.component */
    "./src/app/demo/pages/Acadmics/Acadmic-Subject/Acadmic-Subject.component.ts");
    /* harmony import */


    var _Acadmic_Subject_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Acadmic-Subject-routing.module */
    "./src/app/demo/pages/Acadmics/Acadmic-Subject/Acadmic-Subject-routing.module.ts");
    /* harmony import */


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var AcadmicSubjectModule = function AcadmicSubjectModule() {
      _classCallCheck(this, AcadmicSubjectModule);
    };

    AcadmicSubjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _Acadmic_Subject_routing_module__WEBPACK_IMPORTED_MODULE_4__["AcadmicSubjectRoutingModule"]],
      declarations: [_Acadmic_Subject_component__WEBPACK_IMPORTED_MODULE_3__["AcadmicSubjectComponent"]]
    })], AcadmicSubjectModule);
    /***/
  }
}]);
//# sourceMappingURL=Acadmic-Subject-Acadmic-Subject-module-es5.js.map