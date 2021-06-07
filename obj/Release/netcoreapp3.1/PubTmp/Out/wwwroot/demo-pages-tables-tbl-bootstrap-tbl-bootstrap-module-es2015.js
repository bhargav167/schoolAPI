(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-tables-tbl-bootstrap-tbl-bootstrap-module"],{

/***/ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-bootstrap-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/demo/pages/tables/tbl-bootstrap/tbl-bootstrap-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: TblBootstrapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TblBootstrapRoutingModule", function() { return TblBootstrapRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'bt-basic',
                loadChildren: () => __webpack_require__.e(/*! import() | tbl-basic-tbl-basic-module */ "tbl-basic-tbl-basic-module").then(__webpack_require__.bind(null, /*! ./tbl-basic/tbl-basic.module */ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-basic/tbl-basic.module.ts")).then(module => module.TblBasicModule)
            },
            {
                path: 'bt-border',
                loadChildren: () => __webpack_require__.e(/*! import() | tbl-border-tbl-border-module */ "tbl-border-tbl-border-module").then(__webpack_require__.bind(null, /*! ./tbl-border/tbl-border.module */ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-border/tbl-border.module.ts")).then(module => module.TblBorderModule)
            },
            {
                path: 'bt-sizing',
                loadChildren: () => __webpack_require__.e(/*! import() | tbl-sizing-tbl-sizing-module */ "tbl-sizing-tbl-sizing-module").then(__webpack_require__.bind(null, /*! ./tbl-sizing/tbl-sizing.module */ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-sizing/tbl-sizing.module.ts")).then(module => module.TblSizingModule)
            },
            {
                path: 'bt-styling',
                loadChildren: () => __webpack_require__.e(/*! import() | tbl-styling-tbl-styling-module */ "tbl-styling-tbl-styling-module").then(__webpack_require__.bind(null, /*! ./tbl-styling/tbl-styling.module */ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-styling/tbl-styling.module.ts")).then(module => module.TblStylingModule)
            }
        ]
    }
];
let TblBootstrapRoutingModule = class TblBootstrapRoutingModule {
};
TblBootstrapRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TblBootstrapRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module.ts ***!
  \*************************************************************************/
/*! exports provided: TblBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TblBootstrapModule", function() { return TblBootstrapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tbl_bootstrap_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tbl-bootstrap-routing.module */ "./src/app/demo/pages/tables/tbl-bootstrap/tbl-bootstrap-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





let TblBootstrapModule = class TblBootstrapModule {
};
TblBootstrapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tbl_bootstrap_routing_module__WEBPACK_IMPORTED_MODULE_3__["TblBootstrapRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        declarations: []
    })
], TblBootstrapModule);



/***/ })

}]);
//# sourceMappingURL=demo-pages-tables-tbl-bootstrap-tbl-bootstrap-module-es2015.js.map