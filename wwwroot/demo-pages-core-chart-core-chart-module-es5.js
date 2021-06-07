function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-core-chart-core-chart-module"], {
  /***/
  "./src/app/demo/pages/core-chart/core-chart-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/demo/pages/core-chart/core-chart-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: CoreChartRoutingModule */

  /***/
  function srcAppDemoPagesCoreChartCoreChartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreChartRoutingModule", function () {
      return CoreChartRoutingModule;
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
        path: 'apex',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | crt-apex-crt-apex-module */
          "crt-apex-crt-apex-module").then(__webpack_require__.bind(null,
          /*! ./crt-apex/crt-apex.module */
          "./src/app/demo/pages/core-chart/crt-apex/crt-apex.module.ts")).then(function (module) {
            return module.CrtApexModule;
          });
        }
      }]
    }];

    var CoreChartRoutingModule = function CoreChartRoutingModule() {
      _classCallCheck(this, CoreChartRoutingModule);
    };

    CoreChartRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CoreChartRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/pages/core-chart/core-chart.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/demo/pages/core-chart/core-chart.module.ts ***!
    \************************************************************/

  /*! exports provided: CoreChartModule */

  /***/
  function srcAppDemoPagesCoreChartCoreChartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreChartModule", function () {
      return CoreChartModule;
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


    var _core_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core-chart-routing.module */
    "./src/app/demo/pages/core-chart/core-chart-routing.module.ts");

    var CoreChartModule = function CoreChartModule() {
      _classCallCheck(this, CoreChartModule);
    };

    CoreChartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _core_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoreChartRoutingModule"]]
    })], CoreChartModule);
    /***/
  }
}]);
//# sourceMappingURL=demo-pages-core-chart-core-chart-module-es5.js.map