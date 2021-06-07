function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-spinner-basic-spinner-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoUiElementsUiBasicBasicSpinnerBasicSpinnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <app-card cardTitle=\"Border spinner\" [options]=\"false\">\n      <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card cardTitle=\"Border spinner [ Colors ]\" [options]=\"false\">\n      <div class=\"spinner-border text-primary\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div class=\"spinner-border text-secondary\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div class=\"spinner-border text-success\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div class=\"spinner-border text-danger\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div class=\"spinner-border text-warning\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div class=\"spinner-border text-info\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div class=\"spinner-border text-light\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div class=\"spinner-border text-dark\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card cardTitle=\"Growing spinner\" [options]=\"false\">\n      <div class=\"spinner-grow\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card cardTitle=\"Growing spinner [ Colors ]\" [options]=\"false\">\n      <div class=\"spinner-grow text-primary\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div class=\"spinner-grow text-secondary\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div class=\"spinner-grow text-success\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div class=\"spinner-grow text-danger\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div class=\"spinner-grow text-warning\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div class=\"spinner-grow text-info\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div class=\"spinner-grow text-light\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div class=\"spinner-grow text-dark\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card cardTitle=\"Placement\" [options]=\"false\">\n      <h6>Start</h6>\n      <div class=\"d-flex justify-content-start\">\n        <div class=\"spinner-border\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <hr>\n      <h6>Center</h6>\n      <div class=\"d-flex justify-content-center\">\n        <div class=\"spinner-border\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <hr>\n      <h6>End</h6>\n      <div class=\"d-flex justify-content-end\">\n        <div class=\"spinner-border\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card cardTitle=\"Size\" [options]=\"false\">\n      <h6>Small</h6>\n      <div class=\"spinner-border spinner-border-sm\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div class=\"spinner-grow spinner-grow-sm\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <hr>\n      <h6>Custom</h6>\n      <div class=\"spinner-border\" style=\"width: 3rem; height: 3rem;\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div class=\"spinner-grow\" style=\"width: 3rem; height: 3rem;\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </app-card>\n    <app-card cardTitle=\"Buttons\" [options]=\"false\">\n      <div class=\"row\">\n        <div class=\" col-sm-6\">\n          <button class=\"btn  btn-primary m-2\" type=\"button\" disabled>\n            <span class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span class=\"sr-only\">Loading...</span>\n          </button>\n          <button class=\"btn  btn-primary m-2\" type=\"button\" disabled>\n            <span class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            Loading...\n          </button>\n        </div>\n        <div class=\"col-sm-6\">\n          <button class=\"btn  btn-primary m-2\" type=\"button\" disabled>\n            <span class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\n            <span class=\"sr-only\">Loading...</span>\n          </button>\n          <button class=\"btn  btn-primary m-2\" type=\"button\" disabled>\n            <span class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\n            Loading...\n          </button>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Event Buttons\" [options]=\"false\">\n      <button class=\"btn btn-primary event-btn m-2\" type=\"button\" (click)=\"onBtnLoader()\">\n        <span *ngIf=\"this.btnLoader\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n        <span *ngIf=\"this.btnLoader\" class=\"load-text\"> Loading...</span>\n        <span *ngIf=\"!this.btnLoader\" class=\"btn-text\">Button</span>\n      </button>\n      <button class=\"btn btn-primary event-btn m-2\" type=\"button\" (click)=\"onSubmitLoader()\">\n        <span *ngIf=\"this.submitLoader\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\n        <span *ngIf=\"this.submitLoader\" class=\"load-text\"> Loading...</span>\n        <span *ngIf=\"!this.submitLoader\" class=\"btn-text\">Submit</span>\n      </button>\n    </app-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: BasicSpinnerRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicSpinnerBasicSpinnerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicSpinnerRoutingModule", function () {
      return BasicSpinnerRoutingModule;
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


    var _basic_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-spinner.component */
    "./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.component.ts");

    var routes = [{
      path: '',
      component: _basic_spinner_component__WEBPACK_IMPORTED_MODULE_3__["BasicSpinnerComponent"]
    }];

    var BasicSpinnerRoutingModule = function BasicSpinnerRoutingModule() {
      _classCallCheck(this, BasicSpinnerRoutingModule);
    };

    BasicSpinnerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BasicSpinnerRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoUiElementsUiBasicBasicSpinnerBasicSpinnerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtc3Bpbm5lci9iYXNpYy1zcGlubmVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.component.ts ***!
    \************************************************************************************/

  /*! exports provided: BasicSpinnerComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicSpinnerBasicSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicSpinnerComponent", function () {
      return BasicSpinnerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BasicSpinnerComponent = /*#__PURE__*/function () {
      function BasicSpinnerComponent() {
        _classCallCheck(this, BasicSpinnerComponent);

        this.btnLoader = false;
        this.submitLoader = false;
      }

      _createClass(BasicSpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onBtnLoader",
        value: function onBtnLoader() {
          var _this = this;

          this.btnLoader = true;
          setTimeout(function () {
            _this.btnLoader = false;
          }, 2000);
        }
      }, {
        key: "onSubmitLoader",
        value: function onSubmitLoader() {
          var _this2 = this;

          this.submitLoader = true;
          setTimeout(function () {
            _this2.submitLoader = false;
          }, 2000);
        }
      }]);

      return BasicSpinnerComponent;
    }();

    BasicSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-basic-spinner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./basic-spinner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./basic-spinner.component.scss */
      "./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.component.scss"))["default"]]
    })], BasicSpinnerComponent);
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: BasicSpinnerModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicSpinnerBasicSpinnerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicSpinnerModule", function () {
      return BasicSpinnerModule;
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


    var _basic_spinner_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-spinner-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner-routing.module.ts");
    /* harmony import */


    var _basic_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./basic-spinner.component */
    "./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var BasicSpinnerModule = function BasicSpinnerModule() {
      _classCallCheck(this, BasicSpinnerModule);
    };

    BasicSpinnerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_basic_spinner_component__WEBPACK_IMPORTED_MODULE_4__["BasicSpinnerComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _basic_spinner_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicSpinnerRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], BasicSpinnerModule);
    /***/
  }
}]);
//# sourceMappingURL=basic-spinner-basic-spinner-module-es5.js.map