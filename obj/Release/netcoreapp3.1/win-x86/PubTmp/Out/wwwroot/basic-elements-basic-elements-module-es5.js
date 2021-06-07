function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-elements-basic-elements-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/form-elements/basic-elements/basic-elements.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/form-elements/basic-elements/basic-elements.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoPagesFormElementsBasicElementsBasicElementsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-header\">\n  <div class=\"page-block\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-md-12\">\n        <div class=\"page-header-title\">\n          <ng-container><h5 class=\"m-b-10\">Fee</h5></ng-container>\n        </div>\n        <ul class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a [routerLink]=\"['/dashboard/analytics/']\" ><i class=\"feather icon-home\"></i></a>\n           </li> \n           <li class=\"breadcrumb-item\"><a [routerLink]=\"['/forms/basic/']\">Fee</a></li>\n           \n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\"> \n<div class=\"col-md-6\">\n  <app-card cardTitle=\"Fee Particulars\" blockClass=\"table-border-style\">\n    <a [routerLink]=\"['/forms/Feeparticular']\" routerLinkActive=\"router-link-active\" >\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-lg-3 bg bg-warning\">\n            <h3 style=\"margin-top: 30px;\" class=\"text text-center text-white\"><i\n                class=\"fa fa-2x fa-money-bill-wave\"></i>\n            </h3>\n          </div>\n          <div class=\"col-lg-9\">\n            <div class=\"card-header\">\n              <h5>Fee Particlular</h5>\n            </div>\n            <div class=\"card-body\">\n              <p class=\"text text-bold\">Here we can setup Fee particulars</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </a>\n  </app-card>\n</div>\n\n<div class=\"col-md-6\">\n  <app-card cardTitle=\"Fee Terms\" blockClass=\"table-border-style\">\n    <a [routerLink]=\"['/forms/Feepackaging']\">\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-lg-3 bg bg-warning\">\n            <h3 style=\"margin-top: 30px;\" class=\"text text-center text-white\"><i\n                class=\"fa fa-2x fa-money-bill-wave\"></i>\n            </h3>\n          </div>\n          <div class=\"col-lg-9\">\n            <div class=\"card-header\">\n              <h5>Fee Packages</h5>\n            </div>\n            <div class=\"card-body\">\n              <p class=\"text text-bold\">Here we can setup Fee Packages</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </a>\n  </app-card>\n</div>\n\n</div>\n\n\n<div class=\"row\"> \n  <div class=\"col-md-6\">\n    <app-card cardTitle=\"Collect Fee\" blockClass=\"table-border-style\">\n      <a [routerLink]=\"['/forms/CollectFee']\" routerLinkActive=\"router-link-active\" >\n        <div class=\"card\">\n          <div class=\"row\">\n            <div class=\"col-lg-3 bg bg-warning\">\n              <h3 style=\"margin-top: 30px;\" class=\"text text-center text-white\"><i\n                  class=\"fa fa-2x fa-money-bill-wave\"></i>\n              </h3>\n            </div>\n            <div class=\"col-lg-9\">\n              <div class=\"card-header\">\n                <h5>Collect Fee</h5>\n              </div>\n              <div class=\"card-body\">\n                <p class=\"text text-bold\">Here we can Collect Fee from student</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </a>\n    </app-card>\n  </div>\n  \n  \n  \n  </div>\n";
    /***/
  },

  /***/
  "./src/app/demo/pages/form-elements/basic-elements/basic-elements-routing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/demo/pages/form-elements/basic-elements/basic-elements-routing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: BasicElementsRoutingModule */

  /***/
  function srcAppDemoPagesFormElementsBasicElementsBasicElementsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicElementsRoutingModule", function () {
      return BasicElementsRoutingModule;
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


    var _basic_elements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-elements.component */
    "./src/app/demo/pages/form-elements/basic-elements/basic-elements.component.ts");

    var routes = [{
      path: '',
      component: _basic_elements_component__WEBPACK_IMPORTED_MODULE_3__["BasicElementsComponent"]
    }];

    var BasicElementsRoutingModule = function BasicElementsRoutingModule() {
      _classCallCheck(this, BasicElementsRoutingModule);
    };

    BasicElementsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BasicElementsRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/pages/form-elements/basic-elements/basic-elements.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/demo/pages/form-elements/basic-elements/basic-elements.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoPagesFormElementsBasicElementsBasicElementsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvZm9ybS1lbGVtZW50cy9iYXNpYy1lbGVtZW50cy9iYXNpYy1lbGVtZW50cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/demo/pages/form-elements/basic-elements/basic-elements.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/demo/pages/form-elements/basic-elements/basic-elements.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: BasicElementsComponent */

  /***/
  function srcAppDemoPagesFormElementsBasicElementsBasicElementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicElementsComponent", function () {
      return BasicElementsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BasicElementsComponent = /*#__PURE__*/function () {
      function BasicElementsComponent() {
        _classCallCheck(this, BasicElementsComponent);
      }

      _createClass(BasicElementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicElementsComponent;
    }();

    BasicElementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-basic-elements',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./basic-elements.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/form-elements/basic-elements/basic-elements.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./basic-elements.component.scss */
      "./src/app/demo/pages/form-elements/basic-elements/basic-elements.component.scss"))["default"]]
    })], BasicElementsComponent);
    /***/
  },

  /***/
  "./src/app/demo/pages/form-elements/basic-elements/basic-elements.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/demo/pages/form-elements/basic-elements/basic-elements.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: BasicElementsModule */

  /***/
  function srcAppDemoPagesFormElementsBasicElementsBasicElementsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicElementsModule", function () {
      return BasicElementsModule;
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


    var _basic_elements_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-elements-routing.module */
    "./src/app/demo/pages/form-elements/basic-elements/basic-elements-routing.module.ts");
    /* harmony import */


    var _basic_elements_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./basic-elements.component */
    "./src/app/demo/pages/form-elements/basic-elements/basic-elements.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var BasicElementsModule = function BasicElementsModule() {
      _classCallCheck(this, BasicElementsModule);
    };

    BasicElementsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _basic_elements_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicElementsRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"]],
      declarations: [_basic_elements_component__WEBPACK_IMPORTED_MODULE_4__["BasicElementsComponent"]]
    })], BasicElementsModule);
    /***/
  }
}]);
//# sourceMappingURL=basic-elements-basic-elements-module-es5.js.map