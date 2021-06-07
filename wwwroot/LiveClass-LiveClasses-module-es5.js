function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LiveClass-LiveClasses-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/ZoomLiveClass/LiveClass/LiveClasses.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/ZoomLiveClass/LiveClass/LiveClasses.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoPagesZoomLiveClassLiveClassLiveClassesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  LiveClasses works!\n</p>\n";
    /***/
  },

  /***/
  "./src/app/demo/pages/ZoomLiveClass/LiveClass/LiveClass-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/demo/pages/ZoomLiveClass/LiveClass/LiveClass-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: LiveClassRoutingModule */

  /***/
  function srcAppDemoPagesZoomLiveClassLiveClassLiveClassRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiveClassRoutingModule", function () {
      return LiveClassRoutingModule;
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


    var _LiveClasses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./LiveClasses.component */
    "./src/app/demo/pages/ZoomLiveClass/LiveClass/LiveClasses.component.ts");

    var routes = [{
      path: '',
      component: _LiveClasses_component__WEBPACK_IMPORTED_MODULE_3__["LiveClassesComponent"]
    }];

    var LiveClassRoutingModule = function LiveClassRoutingModule() {
      _classCallCheck(this, LiveClassRoutingModule);
    };

    LiveClassRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LiveClassRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/pages/ZoomLiveClass/LiveClass/LiveClasses.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/demo/pages/ZoomLiveClass/LiveClass/LiveClasses.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoPagesZoomLiveClassLiveClassLiveClassesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".box.box-primary {\r\n    border-top-color: #faa21c;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);\r\n}\r\n.box.box-primary {\r\n    border-top-color: #faa21c;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);\r\n    /* border: solid 1px #dde4eb; */\r\n}\r\n.box {\r\n    position: relative;\r\n    border-radius: 3px;\r\n    background: #ffffff;\r\n    border-top: 3px solid #d2d6de;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n}\r\n.box-header.with-border {\r\n    border-bottom: 1px solid #f4f4f4;\r\n}\r\n.box-header {\r\n    color: #444;\r\n    display: block;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n.box-title {\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    margin: 0;\r\n    line-height: 1;\r\n}\r\n.box-body {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n    padding: 10px;\r\n}\r\n.box-footer {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n    border-top: 1px solid #f4f4f4;\r\n    padding: 10px;\r\n    background-color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9ab29tTGl2ZUNsYXNzL0xpdmVDbGFzcy9MaXZlQ2xhc3Nlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGdFQUFnRTtBQUNwRTtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdFQUFnRTtJQUNoRSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsU0FBUztJQUNULGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3BhZ2VzL1pvb21MaXZlQ2xhc3MvTGl2ZUNsYXNzL0xpdmVDbGFzc2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LmJveC1wcmltYXJ5IHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNmYWEyMWM7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwuMjQpO1xyXG59XHJcbi5ib3guYm94LXByaW1hcnkge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2ZhYTIxYztcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLC4yNCk7XHJcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCAjZGRlNGViOyAqL1xyXG59XHJcbi5ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZDJkNmRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG4uYm94LWhlYWRlci53aXRoLWJvcmRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0ZjRmNDtcclxufVxyXG4uYm94LWhlYWRlciB7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYm94LXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbi5ib3gtYm9keSB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uYm94LWZvb3RlciB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmNGY0ZjQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/demo/pages/ZoomLiveClass/LiveClass/LiveClasses.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/demo/pages/ZoomLiveClass/LiveClass/LiveClasses.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: LiveClassesComponent */

  /***/
  function srcAppDemoPagesZoomLiveClassLiveClassLiveClassesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiveClassesComponent", function () {
      return LiveClassesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LiveClassesComponent = /*#__PURE__*/function () {
      function LiveClassesComponent() {
        _classCallCheck(this, LiveClassesComponent);
      }

      _createClass(LiveClassesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LiveClassesComponent;
    }();

    LiveClassesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-LiveClasses',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./LiveClasses.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/ZoomLiveClass/LiveClass/LiveClasses.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./LiveClasses.component.css */
      "./src/app/demo/pages/ZoomLiveClass/LiveClass/LiveClasses.component.css"))["default"]]
    })], LiveClassesComponent);
    /***/
  },

  /***/
  "./src/app/demo/pages/ZoomLiveClass/LiveClass/LiveClasses.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/demo/pages/ZoomLiveClass/LiveClass/LiveClasses.module.ts ***!
    \**************************************************************************/

  /*! exports provided: LiveClassesModule */

  /***/
  function srcAppDemoPagesZoomLiveClassLiveClassLiveClassesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiveClassesModule", function () {
      return LiveClassesModule;
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


    var _LiveClasses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./LiveClasses.component */
    "./src/app/demo/pages/ZoomLiveClass/LiveClass/LiveClasses.component.ts");
    /* harmony import */


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _LiveClass_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./LiveClass-routing.module */
    "./src/app/demo/pages/ZoomLiveClass/LiveClass/LiveClass-routing.module.ts");

    var LiveClassesModule = function LiveClassesModule() {
      _classCallCheck(this, LiveClassesModule);
    };

    LiveClassesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _LiveClass_routing_module__WEBPACK_IMPORTED_MODULE_5__["LiveClassRoutingModule"]],
      declarations: [_LiveClasses_component__WEBPACK_IMPORTED_MODULE_3__["LiveClassesComponent"]]
    })], LiveClassesModule);
    /***/
  }
}]);
//# sourceMappingURL=LiveClass-LiveClasses-module-es5.js.map