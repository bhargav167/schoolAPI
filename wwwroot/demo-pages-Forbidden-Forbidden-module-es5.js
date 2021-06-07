function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-Forbidden-Forbidden-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/Forbidden/Forbidden.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/Forbidden/Forbidden.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoPagesForbiddenForbiddenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  Forbidden works!\n</p>\n";
    /***/
  },

  /***/
  "./src/app/demo/pages/Forbidden/Forbidden-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/demo/pages/Forbidden/Forbidden-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: ForbiddenRoutingModule */

  /***/
  function srcAppDemoPagesForbiddenForbiddenRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForbiddenRoutingModule", function () {
      return ForbiddenRoutingModule;
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


    var _Forbidden_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Forbidden.component */
    "./src/app/demo/pages/Forbidden/Forbidden.component.ts");

    var routes = [{
      path: '',
      component: _Forbidden_component__WEBPACK_IMPORTED_MODULE_3__["ForbiddenComponent"]
    }];

    var ForbiddenRoutingModule = function ForbiddenRoutingModule() {
      _classCallCheck(this, ForbiddenRoutingModule);
    };

    ForbiddenRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForbiddenRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/pages/Forbidden/Forbidden.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/demo/pages/Forbidden/Forbidden.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoPagesForbiddenForbiddenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvRm9yYmlkZGVuL0ZvcmJpZGRlbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/demo/pages/Forbidden/Forbidden.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/demo/pages/Forbidden/Forbidden.component.ts ***!
    \*************************************************************/

  /*! exports provided: ForbiddenComponent */

  /***/
  function srcAppDemoPagesForbiddenForbiddenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function () {
      return ForbiddenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ForbiddenComponent = /*#__PURE__*/function () {
      function ForbiddenComponent() {
        _classCallCheck(this, ForbiddenComponent);
      }

      _createClass(ForbiddenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForbiddenComponent;
    }();

    ForbiddenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-Forbidden',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./Forbidden.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/Forbidden/Forbidden.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./Forbidden.component.css */
      "./src/app/demo/pages/Forbidden/Forbidden.component.css"))["default"]]
    })], ForbiddenComponent);
    /***/
  },

  /***/
  "./src/app/demo/pages/Forbidden/Forbidden.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/demo/pages/Forbidden/Forbidden.module.ts ***!
    \**********************************************************/

  /*! exports provided: ForbiddenModule */

  /***/
  function srcAppDemoPagesForbiddenForbiddenModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForbiddenModule", function () {
      return ForbiddenModule;
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


    var _Forbidden_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Forbidden.component */
    "./src/app/demo/pages/Forbidden/Forbidden.component.ts");
    /* harmony import */


    var _Forbidden_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Forbidden-routing.module */
    "./src/app/demo/pages/Forbidden/Forbidden-routing.module.ts");
    /* harmony import */


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var ForbiddenModule = function ForbiddenModule() {
      _classCallCheck(this, ForbiddenModule);
    };

    ForbiddenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _Forbidden_routing_module__WEBPACK_IMPORTED_MODULE_4__["ForbiddenRoutingModule"]],
      declarations: [_Forbidden_component__WEBPACK_IMPORTED_MODULE_3__["ForbiddenComponent"]]
    })], ForbiddenModule);
    /***/
  }
}]);
//# sourceMappingURL=demo-pages-Forbidden-Forbidden-module-es5.js.map