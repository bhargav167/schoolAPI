function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-ZoomLiveClass-ZoomLiveClass-module"], {
  /***/
  "./src/app/demo/pages/ZoomLiveClass/ZoomLiveClass-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/demo/pages/ZoomLiveClass/ZoomLiveClass-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ZoomLiveClassRoutingModule */

  /***/
  function srcAppDemoPagesZoomLiveClassZoomLiveClassRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZoomLiveClassRoutingModule", function () {
      return ZoomLiveClassRoutingModule;
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


    var src_app_gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_gaurd/Auth.guard */
    "./src/app/_gaurd/Auth.guard.ts");

    var routes = [{
      path: '',
      canActivate: [src_app_gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGaurd"]],
      children: [{
        path: 'LiveClass',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | LiveClass-LiveClasses-module */
          "LiveClass-LiveClasses-module").then(__webpack_require__.bind(null,
          /*! ./LiveClass/LiveClasses.module */
          "./src/app/demo/pages/ZoomLiveClass/LiveClass/LiveClasses.module.ts")).then(function (module) {
            return module.LiveClassesModule;
          });
        }
      }]
    }];

    var ZoomLiveClassRoutingModule = function ZoomLiveClassRoutingModule() {
      _classCallCheck(this, ZoomLiveClassRoutingModule);
    };

    ZoomLiveClassRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ZoomLiveClassRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/pages/ZoomLiveClass/ZoomLiveClass.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/demo/pages/ZoomLiveClass/ZoomLiveClass.module.ts ***!
    \******************************************************************/

  /*! exports provided: ZoomLiveClassModule */

  /***/
  function srcAppDemoPagesZoomLiveClassZoomLiveClassModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZoomLiveClassModule", function () {
      return ZoomLiveClassModule;
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


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _ZoomLiveClass_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ZoomLiveClass-routing.module */
    "./src/app/demo/pages/ZoomLiveClass/ZoomLiveClass-routing.module.ts");

    var ZoomLiveClassModule = function ZoomLiveClassModule() {
      _classCallCheck(this, ZoomLiveClassModule);
    };

    ZoomLiveClassModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ZoomLiveClass_routing_module__WEBPACK_IMPORTED_MODULE_4__["ZoomLiveClassRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
      declarations: []
    })], ZoomLiveClassModule);
    /***/
  }
}]);
//# sourceMappingURL=demo-pages-ZoomLiveClass-ZoomLiveClass-module-es5.js.map