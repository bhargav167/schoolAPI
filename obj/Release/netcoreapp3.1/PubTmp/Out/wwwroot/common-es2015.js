(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/Acadmics/Section.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/Acadmics/Section.service.ts ***!
  \******************************************************/
/*! exports provided: SectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionService", function() { return SectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let SectionService = class SectionService {
    constructor(_http) {
        this._http = _http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    PostSection(section) {
        return this._http.post(this.baseURL + 'Section' + '/register', section);
    }
    getSection() {
        return this._http.get(this.baseURL + 'Section');
    }
    getSectionById(id) {
        return this._http.get(this.baseURL + 'Section' + '/' + id);
    }
    updateSection(id, sec) {
        return this._http.put(this.baseURL + 'Section' + '/' + id, sec);
    }
    DelSection(id) {
        return this._http.delete(this.baseURL + 'Section' + '/' + id);
    }
};
SectionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SectionService);



/***/ }),

/***/ "./src/app/services/Acadmics/Subject.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/Acadmics/Subject.service.ts ***!
  \******************************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let SubjectService = class SubjectService {
    constructor(_http) {
        this._http = _http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    PostSubject(subs) {
        return this._http.post(this.baseURL + 'SubjectMaster' + '/register', subs);
    }
    getSubject() {
        return this._http.get(this.baseURL + 'SubjectMaster');
    }
    getSubjectById(id) {
        return this._http.get(this.baseURL + 'SubjectMaster' + '/' + id);
    }
    updateSubject(id, sec) {
        return this._http.put(this.baseURL + 'SubjectMaster' + '/' + id, sec);
    }
    DelSubject(id) {
        return this._http.delete(this.baseURL + 'SubjectMaster' + '/' + id);
    }
};
SubjectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SubjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SubjectService);



/***/ }),

/***/ "./src/app/services/FeeModules.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/FeeModules.service.ts ***!
  \************************************************/
/*! exports provided: FeeModulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeModulesService", function() { return FeeModulesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let FeeModulesService = class FeeModulesService {
    constructor(_http) {
        this._http = _http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    getFeeTypes(classes, stuId) {
        if (stuId == undefined) {
            stuId = 0;
        }
        return this._http.get(this.baseURL + 'FeeModule/' + classes + '/' + stuId);
    }
    getFeeParticular(id) {
        return this._http.get(this.baseURL + 'FeeModule/Fee/' + id);
    }
    getFeeStatus(stuId, stander, sec) {
        return this._http.get(this.baseURL + 'FeeModule/FeeStatus/' + stuId + '/' + stander + '/' + sec);
    }
    getStuByClass(classes, sec) {
        return this._http.get(this.baseURL + 'FeeModule/Stu/' + classes + '/' + sec);
    }
    register(feeparticular) {
        return this._http.post(this.baseURL + 'FeeModule/register', feeparticular);
    }
    UpdateTermsWise(feeparticular) {
        return this._http.post(this.baseURL + 'FeeModule/particulars', feeparticular);
    }
    registerOne(feeparticular) {
        return this._http.post(this.baseURL + 'FeeModule/register', feeparticular);
    }
    CollectFees(feeparticular) {
        return this._http.post(this.baseURL + 'FeeModule/TermFeeUpdate', feeparticular);
    }
    CollectFeesTerm2(feeparticular) {
        return this._http.post(this.baseURL + 'FeeModule/TermFeeUpdate2', feeparticular);
    }
};
FeeModulesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FeeModulesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FeeModulesService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map