function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-Feestatus-basic-Feestatus-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-Feestatus/basic-Feestatus.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-Feestatus/basic-Feestatus.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoUiElementsUiBasicBasicFeestatusBasicFeestatusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-header\">\n  <div class=\"page-block\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-md-12\">\n        <div class=\"page-header-title\">\n          <ng-container>\n            <h5 class=\"m-b-10\">Fee Status\n            </h5>\n          </ng-container>\n        </div>\n        <ul class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a [routerLink]=\"['/dashboard/analytics/']\"><i class=\"feather icon-home\"></i></a> </li>\n          <li class=\"breadcrumb-item\"><a [routerLink]=\"['/basic/studentlist/']\">Students</a></li>\n          <li class=\"breadcrumb-item\"><a [routerLink]=\"['']\">Fee Status</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div> \n\n\n<div class=\"container\">\n  <div class=\"row\">\n<div class=\"col-lg-3\">\n<label class=\"lable\">Admission Number:</label>\n{{feeModule?.quickAdmission?.admissionNo}}\n</div> \n<div class=\"col-lg-3\">\n  <label class=\"lable\">Student Name:</label>\n  {{feeModule?.quickAdmission.firstName}} {{feeModule?.quickAdmission?.lastName}}\n  </div> \n  <div class=\"col-lg-3\">\n    <label class=\"lable\">Student RollNo:</label>\n    {{feeModule?.quickAdmission?.rollNo}}\n    </div>\n    \n    <div class=\"col-lg-3\">\n      <label class=\"lable\">Phone Number:</label>\n      {{feeModule?.quickAdmission?.phone}}\n      </div>\n      \n  </div>\n</div>\n<hr>\n<br> \n  <div class=\"col-md-12\">\n    <app-card cardTitle=\"Fee Monitor\" cardClass=\"table-card\" blockClass=\"p-0\">\n      <perfect-scrollbar [style.max-height]=\"'362px'\">\n        <table class=\"table table-hover m-b-0\">\n          <thead>\n            <tr>\n              <th><span>Fee Type</span></th>\n              <th>\n                <span>Term-1\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Term-2\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Term-1 Paid Amount\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Term-2 Paid Amount\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Term-1 Due Amount\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Term-2 Due Amount\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n             \n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of feeModule?.feeParticular\">\n              <td>{{item.FeeType}}</td>\n              <td class=\"text text-center\">{{item.Term1}}\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"100\"></ngb-progressbar>\n                </div>\n              </td>\n              <td class=\"text text-center\">{{item.Term12}}\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"100\"></ngb-progressbar>\n                </div>\n              </td>\n              <td class=\"text text-center\">{{item.Term1DueAmt}}\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"item.Term1DueAmt / item.Term1*100\"></ngb-progressbar>\n                </div>\n              </td>\n              <td class=\"text text-center\">{{item.Term2DueAmt}}\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"item.Term2DueAmt / item.Term12*100\"></ngb-progressbar>\n                </div>\n              </td>\n              <td class=\"text text-center\">{{item.Term1Paid}}\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"item.Term1Paid / item.Term1*100\"></ngb-progressbar>\n                </div>\n              </td>\n              <td class=\"text text-center\">{{item.Term2Paid}}\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"item.Term2Paid / item.Term12*100\"></ngb-progressbar>\n                </div>\n              </td>\n      \n            </tr>\n           \n          </tbody>\n          <tfoot>\n            <tr>\n              <td class=\"summary\">Fees Summary:</td>\n              <td style=\"font-weight: bold; color:black;\" class=\"alert alert-danger text text-center\">{{Term1Fee}}</td>\n              <td style=\"font-weight: bold; color:black;\" class=\"alert alert-danger text text-center\">{{Term2Fee}}</td>\n              <td style=\"font-weight: bold; color:black;\" class=\"alert alert-success text text-center\">{{Term1FeePaidAmt}}</td>\n              <td style=\"font-weight: bold; color:black;\" class=\"alert alert-success text text-center\">{{Term2FeePaidAmt}}</td>\n              <td style=\"font-weight: bold; color:black;\" class=\"alert alert-warning text text-center\">{{Term1FeeDueAmt}}</td>\n              <td style=\"font-weight: bold; color:black;\" class=\"alert alert-warning text text-center\">{{Term2FeeDueAmt}}</td>\n            </tr>\n         \n          </tfoot>\n        </table>\n      </perfect-scrollbar>\n    </app-card>\n  </div>\n \n";
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-Feestatus/basic-Feestatus-routing.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-Feestatus/basic-Feestatus-routing.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: BasicFeestatusRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicFeestatusBasicFeestatusRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicFeestatusRoutingModule", function () {
      return BasicFeestatusRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _basic_Feestatus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-Feestatus.component */
    "./src/app/demo/ui-elements/ui-basic/basic-Feestatus/basic-Feestatus.component.ts");

    var routes = [{
      path: '',
      component: _basic_Feestatus_component__WEBPACK_IMPORTED_MODULE_3__["BasicFeestatusComponent"]
    }];

    var BasicFeestatusRoutingModule = function BasicFeestatusRoutingModule() {
      _classCallCheck(this, BasicFeestatusRoutingModule);
    };

    BasicFeestatusRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], BasicFeestatusRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-Feestatus/basic-Feestatus.component.css":
  /*!*****************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-Feestatus/basic-Feestatus.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoUiElementsUiBasicBasicFeestatusBasicFeestatusComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".lable{\r\n    font-weight: bolder;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    color: black;\r\n}\r\n.summary{\r\n    font-weight: bolder;\r\n    font-style: oblique;\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby91aS1lbGVtZW50cy91aS1iYXNpYy9iYXNpYy1GZWVzdGF0dXMvYmFzaWMtRmVlc3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtRmVlc3RhdHVzL2Jhc2ljLUZlZXN0YXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5zdW1tYXJ5e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-Feestatus/basic-Feestatus.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-Feestatus/basic-Feestatus.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: BasicFeestatusComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicFeestatusBasicFeestatusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicFeestatusComponent", function () {
      return BasicFeestatusComponent;
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


    var src_app_services_FeeModules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/FeeModules.service */
    "./src/app/services/FeeModules.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BasicFeestatusComponent = /*#__PURE__*/function () {
      function BasicFeestatusComponent(_feeModule, _route) {
        _classCallCheck(this, BasicFeestatusComponent);

        this._feeModule = _feeModule;
        this._route = _route;
        this.Term1Fee = 0;
        this.Term2Fee = 0;
        this.Term1FeePaidAmt = 0;
        this.Term2FeePaidAmt = 0;
        this.Term1FeeDueAmt = 0;
        this.Term2FeeDueAmt = 0;
      }

      _createClass(BasicFeestatusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadFeeStaus();
        }
      }, {
        key: "loadFeeStaus",
        value: function loadFeeStaus() {
          var _this = this;

          this._feeModule.getFeeStatus(+this._route.snapshot.params['id'], this._route.snapshot.params['standers'], this._route.snapshot.params['classsection']).subscribe(function (res) {
            _this.feeModule = res;

            _this.feeModule.feeParticular.forEach(function (element) {
              element.Term1 = element.Term1;
              element.Term12 = element.Term12;
              element.Term1DueAmt = element.Term1DueAmt;
              element.Term2DueAmt = element.Term2DueAmt;
              element.Term1Paid = element.Term1Paid;
              element.Term2Paid = element.Term2Paid;
              _this.Term1Fee = _this.Term1Fee + element.Term1;
              _this.Term2Fee = _this.Term2Fee + element.Term12;
              _this.Term1FeePaidAmt += element.Term1DueAmt;
              _this.Term2FeePaidAmt += element.Term2DueAmt;
              _this.Term1FeeDueAmt += element.Term1Paid;
              _this.Term2FeeDueAmt += element.Term2Paid;
            });
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return BasicFeestatusComponent;
    }();

    BasicFeestatusComponent.ctorParameters = function () {
      return [{
        type: src_app_services_FeeModules_service__WEBPACK_IMPORTED_MODULE_2__["FeeModulesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    BasicFeestatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-basic-Feestatus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./basic-Feestatus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-Feestatus/basic-Feestatus.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./basic-Feestatus.component.css */
      "./src/app/demo/ui-elements/ui-basic/basic-Feestatus/basic-Feestatus.component.css"))["default"]]
    })], BasicFeestatusComponent);
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-Feestatus/basic-Feestatus.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-Feestatus/basic-Feestatus.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: BasicFeestatusModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicFeestatusBasicFeestatusModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicFeestatusModule", function () {
      return BasicFeestatusModule;
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


    var _basic_Feestatus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-Feestatus.component */
    "./src/app/demo/ui-elements/ui-basic/basic-Feestatus/basic-Feestatus.component.ts");
    /* harmony import */


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _basic_Feestatus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./basic-Feestatus-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-Feestatus/basic-Feestatus-routing.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var BasicFeestatusModule = function BasicFeestatusModule() {
      _classCallCheck(this, BasicFeestatusModule);
    };

    BasicFeestatusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _basic_Feestatus_routing_module__WEBPACK_IMPORTED_MODULE_5__["BasicFeestatusRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPopoverModule"]],
      declarations: [_basic_Feestatus_component__WEBPACK_IMPORTED_MODULE_3__["BasicFeestatusComponent"]]
    })], BasicFeestatusModule);
    /***/
  }
}]);
//# sourceMappingURL=basic-Feestatus-basic-Feestatus-module-es5.js.map