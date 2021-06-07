function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-core-maps-core-maps-module"], {
  /***/
  "./src/app/demo/pages/core-maps/core-maps-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/demo/pages/core-maps/core-maps-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: CoreMapsRoutingModule */

  /***/
  function srcAppDemoPagesCoreMapsCoreMapsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreMapsRoutingModule", function () {
      return CoreMapsRoutingModule;
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

    var routes = [{
      path: '',
      children: [{
        path: 'google',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | google-maps-google-maps-module */
          "google-maps-google-maps-module").then(__webpack_require__.bind(null,
          /*! ./google-maps/google-maps.module */
          "./src/app/demo/pages/core-maps/google-maps/google-maps.module.ts")).then(function (module) {
            return module.GoogleMapsModule;
          });
        }
      }]
    }];

    var CoreMapsRoutingModule = function CoreMapsRoutingModule() {
      _classCallCheck(this, CoreMapsRoutingModule);
    };

    CoreMapsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CoreMapsRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/pages/core-maps/core-maps.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/demo/pages/core-maps/core-maps.module.ts ***!
    \**********************************************************/

  /*! exports provided: CoreMapsModule */

  /***/
  function srcAppDemoPagesCoreMapsCoreMapsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreMapsModule", function () {
      return CoreMapsModule;
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


    var _core_maps_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core-maps-routing.module */
    "./src/app/demo/pages/core-maps/core-maps-routing.module.ts");

    var CoreMapsModule = function CoreMapsModule() {
      _classCallCheck(this, CoreMapsModule);
    };

    CoreMapsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _core_maps_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoreMapsRoutingModule"]],
      declarations: []
    })], CoreMapsModule);
    /***/
  }
}]);
//# sourceMappingURL=demo-pages-core-maps-core-maps-module-es5.js.map