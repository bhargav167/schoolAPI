function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-form-elements-form-elements-module"], {
  /***/
  "./src/app/demo/pages/form-elements/form-elements-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/demo/pages/form-elements/form-elements-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: FormElementsRoutingModule */

  /***/
  function srcAppDemoPagesFormElementsFormElementsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormElementsRoutingModule", function () {
      return FormElementsRoutingModule;
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
        path: 'basic',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | basic-elements-basic-elements-module */
          "basic-elements-basic-elements-module").then(__webpack_require__.bind(null,
          /*! ./basic-elements/basic-elements.module */
          "./src/app/demo/pages/form-elements/basic-elements/basic-elements.module.ts")).then(function (module) {
            return module.BasicElementsModule;
          });
        }
      }, {
        path: 'Feeparticular',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | basic-Feeparticular-basic-Feeparticular-module */
          [__webpack_require__.e("common"), __webpack_require__.e("basic-Feeparticular-basic-Feeparticular-module")]).then(__webpack_require__.bind(null,
          /*! ./basic-Feeparticular/basic-Feeparticular.module */
          "./src/app/demo/pages/form-elements/basic-Feeparticular/basic-Feeparticular.module.ts")).then(function (module) {
            return module.BasicFeeparticularModule;
          });
        }
      }, {
        path: 'Feepackaging',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | basic-Feepackaging-basic-Feepackaging-module */
          [__webpack_require__.e("common"), __webpack_require__.e("basic-Feepackaging-basic-Feepackaging-module")]).then(__webpack_require__.bind(null,
          /*! ./basic-Feepackaging/basic-Feepackaging.module */
          "./src/app/demo/pages/form-elements/basic-Feepackaging/basic-Feepackaging.module.ts")).then(function (module) {
            return module.BasicFeepackagingModule;
          });
        }
      }, {
        path: 'AddFeePackaging',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | AddFeePackaging-AddFeePackaging-module */
          [__webpack_require__.e("default~AddFeePackaging-AddFeePackaging-module~StuAttendance-StuAttendance-module~basic-Attendancest~52acf6ad"), __webpack_require__.e("common"), __webpack_require__.e("AddFeePackaging-AddFeePackaging-module")]).then(__webpack_require__.bind(null,
          /*! ./AddFeePackaging/AddFeePackaging.module */
          "./src/app/demo/pages/form-elements/AddFeePackaging/AddFeePackaging.module.ts")).then(function (module) {
            return module.AddFeePackagingModule;
          });
        }
      }, {
        path: 'CollectFee',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | basic-CollectFee-basic-CollectFee-module */
          [__webpack_require__.e("common"), __webpack_require__.e("basic-CollectFee-basic-CollectFee-module")]).then(__webpack_require__.bind(null,
          /*! ./basic-CollectFee/basic-CollectFee.module */
          "./src/app/demo/pages/form-elements/basic-CollectFee/basic-CollectFee.module.ts")).then(function (module) {
            return module.BasicCollectFeeModule;
          });
        }
      }, {
        path: 'Setting',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | Setting-Setting-module */
          "Setting-Setting-module").then(__webpack_require__.bind(null,
          /*! ./Setting/Setting.module */
          "./src/app/demo/pages/form-elements/Setting/Setting.module.ts")).then(function (module) {
            return module.SettingModule;
          });
        }
      }]
    }];

    var FormElementsRoutingModule = function FormElementsRoutingModule() {
      _classCallCheck(this, FormElementsRoutingModule);
    };

    FormElementsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FormElementsRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/pages/form-elements/form-elements.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/demo/pages/form-elements/form-elements.module.ts ***!
    \******************************************************************/

  /*! exports provided: FormElementsModule */

  /***/
  function srcAppDemoPagesFormElementsFormElementsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormElementsModule", function () {
      return FormElementsModule;
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


    var _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./form-elements-routing.module */
    "./src/app/demo/pages/form-elements/form-elements-routing.module.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var FormElementsModule = function FormElementsModule() {
      _classCallCheck(this, FormElementsModule);
    };

    FormElementsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormElementsRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
      declarations: []
    })], FormElementsModule);
    /***/
  }
}]);
//# sourceMappingURL=demo-pages-form-elements-form-elements-module-es5.js.map