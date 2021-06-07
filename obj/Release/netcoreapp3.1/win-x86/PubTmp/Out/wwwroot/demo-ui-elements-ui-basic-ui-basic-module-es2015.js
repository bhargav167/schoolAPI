(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-ui-elements-ui-basic-ui-basic-module"],{

/***/ "./src/app/demo/ui-elements/ui-basic/ui-basic-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/ui-basic-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: UiBasicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiBasicRoutingModule", function() { return UiBasicRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_gaurd/Auth.guard */ "./src/app/_gaurd/Auth.guard.ts");




const routes = [
    {
        path: '',
        canActivate: [src_app_gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGaurd"]],
        data: { permittedRoles: ['Admin'] },
        children: [
            {
                path: 'student',
                loadChildren: () => Promise.all(/*! import() | basic-student-basic-student-module */[__webpack_require__.e("default~AddFeePackaging-AddFeePackaging-module~StuAttendance-StuAttendance-module~basic-Attendancest~52acf6ad"), __webpack_require__.e("basic-student-basic-student-module")]).then(__webpack_require__.bind(null, /*! ./basic-student/basic-student.module */ "./src/app/demo/ui-elements/ui-basic/basic-student/basic-student.module.ts")).then(module => module.BasicStudentModule)
            },
            {
                path: 'admission',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-admission-basic-admission-module */ "basic-admission-basic-admission-module").then(__webpack_require__.bind(null, /*! ./basic-admission/basic-admission.module */ "./src/app/demo/ui-elements/ui-basic/basic-admission/basic-admission.module.ts")).then(module => module.BasicAdmissionModule)
            },
            {
                path: 'studentlist',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-stu-list-basic-stu-list-module */ "basic-stu-list-basic-stu-list-module").then(__webpack_require__.bind(null, /*! ./basic-stu-list/basic-stu-list.module */ "./src/app/demo/ui-elements/ui-basic/basic-stu-list/basic-stu-list.module.ts")).then(module => module.BasicStuListModule)
            },
            {
                path: 'studentedit/:id',
                loadChildren: () => Promise.all(/*! import() | basic-stu-edit-basic-stu-edit-module */[__webpack_require__.e("default~AddFeePackaging-AddFeePackaging-module~StuAttendance-StuAttendance-module~basic-Attendancest~52acf6ad"), __webpack_require__.e("basic-stu-edit-basic-stu-edit-module")]).then(__webpack_require__.bind(null, /*! ./basic-stu-edit/basic-stu-edit.module */ "./src/app/demo/ui-elements/ui-basic/basic-stu-edit/basic-stu-edit.module.ts")).then(module => module.BasicStuEditModule)
            },
            {
                path: 'studentview/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-stu-View-basic-stu-View-module */ "basic-stu-View-basic-stu-View-module").then(__webpack_require__.bind(null, /*! ./basic-stu-View/basic-stu-View.module */ "./src/app/demo/ui-elements/ui-basic/basic-stu-View/basic-stu-View.module.ts")).then(module => module.BasicStuViewModule)
            },
            {
                path: 'TakeAttendance',
                loadChildren: () => Promise.all(/*! import() | basic-TakeAttendance-basic-TakeAttendance-module */[__webpack_require__.e("default~AddFeePackaging-AddFeePackaging-module~StuAttendance-StuAttendance-module~basic-Attendancest~52acf6ad"), __webpack_require__.e("basic-TakeAttendance-basic-TakeAttendance-module")]).then(__webpack_require__.bind(null, /*! ./basic-TakeAttendance/basic-TakeAttendance.module */ "./src/app/demo/ui-elements/ui-basic/basic-TakeAttendance/basic-TakeAttendance.module.ts")).then(module => module.BasicTakeAttendanceModule)
            },
            {
                path: 'AttendanceReport',
                loadChildren: () => Promise.all(/*! import() | basic-AttendancestuReport-basic-AttendancestuReport-module */[__webpack_require__.e("default~AddFeePackaging-AddFeePackaging-module~StuAttendance-StuAttendance-module~basic-Attendancest~52acf6ad"), __webpack_require__.e("common"), __webpack_require__.e("basic-AttendancestuReport-basic-AttendancestuReport-module")]).then(__webpack_require__.bind(null, /*! ./basic-AttendancestuReport/basic-AttendancestuReport.module */ "./src/app/demo/ui-elements/ui-basic/basic-AttendancestuReport/basic-AttendancestuReport.module.ts")).then(module => module.BasicAttendancestuReportModule)
            },
            //End Students
            //Start Employee
            {
                path: 'EmployeeRegister',
                canActivate: [src_app_gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGaurd"]],
                data: { permittedRoles: ['Admin'] },
                loadChildren: () => Promise.all(/*! import() | basic-EmpRegister-basic-EmpRegister-module */[__webpack_require__.e("default~AddFeePackaging-AddFeePackaging-module~StuAttendance-StuAttendance-module~basic-Attendancest~52acf6ad"), __webpack_require__.e("default~basic-EmpRegister-basic-EmpRegister-module~basic-emp-edit-basic-emp-edit-module"), __webpack_require__.e("basic-EmpRegister-basic-EmpRegister-module")]).then(__webpack_require__.bind(null, /*! ./basic-EmpRegister/basic-EmpRegister.module */ "./src/app/demo/ui-elements/ui-basic/basic-EmpRegister/basic-EmpRegister.module.ts")).then(module => module.BasicEmpRegisterModule)
            },
            {
                path: 'emplist',
                canActivate: [src_app_gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGaurd"]],
                data: { permittedRoles: ['Admin'] },
                loadChildren: () => __webpack_require__.e(/*! import() | basic-Emp-list-basic-Emp-list-module */ "basic-Emp-list-basic-Emp-list-module").then(__webpack_require__.bind(null, /*! ./basic-Emp-list/basic-Emp-list.module */ "./src/app/demo/ui-elements/ui-basic/basic-Emp-list/basic-Emp-list.module.ts")).then(module => module.BasicEmpListModule)
            },
            {
                path: 'empedit/:id',
                canActivate: [src_app_gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGaurd"]],
                data: { permittedRoles: ['Admin'] },
                loadChildren: () => Promise.all(/*! import() | basic-emp-edit-basic-emp-edit-module */[__webpack_require__.e("default~AddFeePackaging-AddFeePackaging-module~StuAttendance-StuAttendance-module~basic-Attendancest~52acf6ad"), __webpack_require__.e("default~basic-EmpRegister-basic-EmpRegister-module~basic-emp-edit-basic-emp-edit-module"), __webpack_require__.e("basic-emp-edit-basic-emp-edit-module")]).then(__webpack_require__.bind(null, /*! ./basic-emp-edit/basic-emp-edit.module */ "./src/app/demo/ui-elements/ui-basic/basic-emp-edit/basic-emp-edit.module.ts")).then(module => module.BasicEmpEditModule)
            },
            {
                path: 'spinner',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-spinner-basic-spinner-module */ "basic-spinner-basic-spinner-module").then(__webpack_require__.bind(null, /*! ./basic-spinner/basic-spinner.module */ "./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.module.ts")).then(module => module.BasicSpinnerModule)
            },
            {
                path: 'feeStatus/:id/:standers/:classsection',
                loadChildren: () => Promise.all(/*! import() | basic-Feestatus-basic-Feestatus-module */[__webpack_require__.e("common"), __webpack_require__.e("basic-Feestatus-basic-Feestatus-module")]).then(__webpack_require__.bind(null, /*! ./basic-Feestatus/basic-Feestatus.module */ "./src/app/demo/ui-elements/ui-basic/basic-Feestatus/basic-Feestatus.module.ts")).then(module => module.BasicFeestatusModule)
            },
        ]
    }
];
let UiBasicRoutingModule = class UiBasicRoutingModule {
};
UiBasicRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UiBasicRoutingModule);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/ui-basic.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/ui-basic.module.ts ***!
  \**************************************************************/
/*! exports provided: UiBasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiBasicModule", function() { return UiBasicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-basic-routing.module */ "./src/app/demo/ui-elements/ui-basic/ui-basic-routing.module.ts");




let UiBasicModule = class UiBasicModule {
};
UiBasicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_3__["UiBasicRoutingModule"]
        ]
    })
], UiBasicModule);



/***/ })

}]);
//# sourceMappingURL=demo-ui-elements-ui-basic-ui-basic-module-es2015.js.map