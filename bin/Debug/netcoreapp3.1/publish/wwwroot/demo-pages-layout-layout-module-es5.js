function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-layout-layout-module"], {
  /***/
  "./src/app/demo/pages/layout/layout-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/demo/pages/layout/layout-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: LayoutRoutingModule */

  /***/
  function srcAppDemoPagesLayoutLayoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function () {
      return LayoutRoutingModule;
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
        path: 'fixed',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | theme-fixed-theme-fixed-module */
          "theme-fixed-theme-fixed-module").then(__webpack_require__.bind(null,
          /*! ./theme-fixed/theme-fixed.module */
          "./src/app/demo/pages/layout/theme-fixed/theme-fixed.module.ts")).then(function (module) {
            return module.ThemeFixedModule;
          });
        }
      }, {
        path: 'StuDash',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | StudentDashboard-StudentDashboard-module */
          [__webpack_require__.e("default~StudentDashboard-StudentDashboard-module~StudentFeeStatus-StudentFeeStatus-module"), __webpack_require__.e("StudentDashboard-StudentDashboard-module")]).then(__webpack_require__.bind(null,
          /*! ./StudentDashboard/StudentDashboard.module */
          "./src/app/demo/pages/layout/StudentDashboard/StudentDashboard.module.ts")).then(function (module) {
            return module.StudentDashboardModule;
          });
        }
      }, {
        path: 'FeeStatus',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | StudentFeeStatus-StudentFeeStatus-module */
          "default~StudentDashboard-StudentDashboard-module~StudentFeeStatus-StudentFeeStatus-module").then(__webpack_require__.bind(null,
          /*! ./StudentFeeStatus/StudentFeeStatus.module */
          "./src/app/demo/pages/layout/StudentFeeStatus/StudentFeeStatus.module.ts")).then(function (module) {
            return module.StudentFeeStatusModule;
          });
        }
      }, {
        path: 'Attendance',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | StuAttendance-StuAttendance-module */
          [__webpack_require__.e("default~AddFeePackaging-AddFeePackaging-module~StuAttendance-StuAttendance-module~basic-Attendancest~52acf6ad"), __webpack_require__.e("StuAttendance-StuAttendance-module")]).then(__webpack_require__.bind(null,
          /*! ./StuAttendance/StuAttendance.module */
          "./src/app/demo/pages/layout/StuAttendance/StuAttendance.module.ts")).then(function (module) {
            return module.StuAttendanceModule;
          });
        }
      }, {
        path: 'Timetable',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | StudentTimetable-StudentTimetable-module */
          "StudentTimetable-StudentTimetable-module").then(__webpack_require__.bind(null,
          /*! ./StudentTimetable/StudentTimetable.module */
          "./src/app/demo/pages/layout/StudentTimetable/StudentTimetable.module.ts")).then(function (module) {
            return module.StudentTimetableModule;
          });
        }
      }]
    }];

    var LayoutRoutingModule = function LayoutRoutingModule() {
      _classCallCheck(this, LayoutRoutingModule);
    };

    LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      declarations: []
    })], LayoutRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/pages/layout/layout.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/demo/pages/layout/layout.module.ts ***!
    \****************************************************/

  /*! exports provided: LayoutModule */

  /***/
  function srcAppDemoPagesLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
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


    var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout-routing.module */
    "./src/app/demo/pages/layout/layout-routing.module.ts");

    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"]]
    })], LayoutModule);
    /***/
  }
}]);
//# sourceMappingURL=demo-pages-layout-layout-module-es5.js.map