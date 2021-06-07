function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-Acadmics-Acadmic-module"], {
  /***/
  "./src/app/demo/pages/Acadmics/Acadmic-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/demo/pages/Acadmics/Acadmic-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: AcadmicRoutingModule */

  /***/
  function srcAppDemoPagesAcadmicsAcadmicRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcadmicRoutingModule", function () {
      return AcadmicRoutingModule;
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
        path: 'AcadmicClass',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | Acadmic-Classes-Acadmic-Classes-module */
          [__webpack_require__.e("common"), __webpack_require__.e("Acadmic-Classes-Acadmic-Classes-module")]).then(__webpack_require__.bind(null,
          /*! ./Acadmic-Classes/Acadmic-Classes.module */
          "./src/app/demo/pages/Acadmics/Acadmic-Classes/Acadmic-Classes.module.ts")).then(function (module) {
            return module.AcadmicClassesModule;
          });
        }
      }, {
        path: 'AcadmicSection',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | Acadmic-Section-Acadmic-Section-module */
          [__webpack_require__.e("common"), __webpack_require__.e("Acadmic-Section-Acadmic-Section-module")]).then(__webpack_require__.bind(null,
          /*! ./Acadmic-Section/Acadmic-Section.module */
          "./src/app/demo/pages/Acadmics/Acadmic-Section/Acadmic-Section.module.ts")).then(function (module) {
            return module.AcadmicSectionModule;
          });
        }
      }, {
        path: 'AcadmicSubject',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | Acadmic-Subject-Acadmic-Subject-module */
          [__webpack_require__.e("common"), __webpack_require__.e("Acadmic-Subject-Acadmic-Subject-module")]).then(__webpack_require__.bind(null,
          /*! ./Acadmic-Subject/Acadmic-Subject.module */
          "./src/app/demo/pages/Acadmics/Acadmic-Subject/Acadmic-Subject.module.ts")).then(function (module) {
            return module.AcadmicSubjectModule;
          });
        }
      }, {
        path: 'AcadmicClassTimetable',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | Acadmic-ClassTimetable-Acadmic-ClassTimetable-module */
          "Acadmic-ClassTimetable-Acadmic-ClassTimetable-module").then(__webpack_require__.bind(null,
          /*! ./Acadmic-ClassTimetable/Acadmic-ClassTimetable.module */
          "./src/app/demo/pages/Acadmics/Acadmic-ClassTimetable/Acadmic-ClassTimetable.module.ts")).then(function (module) {
            return module.AcadmicClassTimetableModule;
          });
        }
      }, {
        path: 'AddClassTimetable',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | Add-ClassTimetable-Add-ClassTimetable-module */
          [__webpack_require__.e("common"), __webpack_require__.e("Add-ClassTimetable-Add-ClassTimetable-module")]).then(__webpack_require__.bind(null,
          /*! ./Add-ClassTimetable/Add-ClassTimetable.module */
          "./src/app/demo/pages/Acadmics/Add-ClassTimetable/Add-ClassTimetable.module.ts")).then(function (module) {
            return module.AddClassTimetableModule;
          });
        }
      }]
    }];

    var AcadmicRoutingModule = function AcadmicRoutingModule() {
      _classCallCheck(this, AcadmicRoutingModule);
    };

    AcadmicRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AcadmicRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/pages/Acadmics/Acadmic.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/demo/pages/Acadmics/Acadmic.module.ts ***!
    \*******************************************************/

  /*! exports provided: AcadmicModule */

  /***/
  function srcAppDemoPagesAcadmicsAcadmicModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcadmicModule", function () {
      return AcadmicModule;
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


    var _Acadmic_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Acadmic-routing.module */
    "./src/app/demo/pages/Acadmics/Acadmic-routing.module.ts");
    /* harmony import */


    var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-material-timepicker */
    "./node_modules/ngx-material-timepicker/fesm2015/ngx-material-timepicker.js");

    var AcadmicModule = function AcadmicModule() {
      _classCallCheck(this, AcadmicModule);
    };

    AcadmicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _Acadmic_routing_module__WEBPACK_IMPORTED_MODULE_4__["AcadmicRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_5__["NgxMaterialTimepickerModule"]],
      declarations: []
    })], AcadmicModule);
    /***/
  }
}]);
//# sourceMappingURL=demo-pages-Acadmics-Acadmic-module-es5.js.map