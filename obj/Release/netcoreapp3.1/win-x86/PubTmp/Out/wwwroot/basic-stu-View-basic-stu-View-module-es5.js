function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-stu-View-basic-stu-View-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-stu-View/basic-stu-View.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-stu-View/basic-stu-View.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoUiElementsUiBasicBasicStuViewBasicStuViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-header\">\n  <div class=\"page-block\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-md-12\">\n        <div class=\"page-header-title\">\n          <ng-container><h5 class=\"m-b-10\">Fee</h5></ng-container>\n        </div>\n        <ul class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a [routerLink]=\"['/dashboard/analytics/']\" ><i class=\"feather icon-home\"></i></a>\n           </li> \n           <li class=\"breadcrumb-item\"><a [routerLink]=\"['/basic/studentlist']\">Students</a></li>\n           <li class=\"breadcrumb-item\"><a [routerLink]=\"['/basic/studentview']\">View</a></li>\n         </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<body>\n  <div class=\"container main-secction\">\n      <div class=\"row\"> \n        <br><br>\n          <div class=\"row user-left-part\">\n              <div class=\"col-md-3 col-sm-3 col-xs-12 user-profil-part pull-left\">\n                  <div class=\"row \">\n                      <div class=\"col-md-12 col-md-12-sm-12 col-xs-12 user-image text-center\">\n                          <img src=\"https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png\" class=\"rounded-circle\">\n                      </div>\n                      <div class=\"col-md-12 col-sm-12 col-xs-12 user-detail-section1 text-center\">\n                          <button id=\"btn-contact\" (click)=\"clearModal()\" data-toggle=\"modal\" data-target=\"#contact\" class=\"btn btn-success btn-block follow\">Suspend</button> \n                          <button class=\"btn btn-warning btn-block\">Collect Fee</button>                               \n                      </div>\n                      <div class=\"row user-detail-row\">\n                          <div class=\"col-md-12 col-sm-12 user-detail-section2 pull-left\">\n                              <div class=\"border\"></div>\n                              <p>FOLLOWER</p>\n                              <span>320</span>\n                          </div>                           \n                      </div>\n                     \n                  </div>\n              </div>\n              <div class=\"col-md-9 col-sm-9 col-xs-12 pull-right profile-right-section\">\n                  <div class=\"row profile-right-section-row\">\n                      <div class=\"col-md-12 profile-header\">\n                          <div class=\"row\">\n                              <div class=\"col-md-8 col-sm-6 col-xs-6 profile-header-section1 pull-left\">\n                             <div class=\"row\">\n                                <div class=\"col-lg-5 form-inline\">\n                                    <h3>{{students.firstName +' '+ students.lastName}}</h3> \n                                   \n                                </div>\n                                <div class=\"col-lg-1\">\n                                    <p *ngIf=\"students.isActive==false\" style=\"margin-left: -20px;\" class=\"badge badge-danger\">InActive</p> \n                                    <p *ngIf=\"students.isActive==true\" style=\"margin-left: -20px;\" class=\"badge badge-success\">Active</p> \n                                </div>\n                                <div class=\"col-lg-5\">\n                                   \n                                </div>\n                             </div>\n                               \n                               \n                              </div>\n                              <div class=\"col-md-4 col-sm-6 col-xs-6 profile-header-section1 text-right pull-rigth\">\n                                  <a href=\"/search\" class=\"btn btn-primary btn-block\">Close Admission</a>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"col-md-12\">\n                          <div class=\"row\">\n                              <div class=\"col-md-8\">\n                                      <ul class=\"nav nav-tabs\" role=\"tablist\">\n                                              <li class=\"nav-item\">\n                                                <a class=\"nav-link active\" href=\"#profile\" role=\"tab\" data-toggle=\"tab\"><i class=\"fas fa-user-circle\"></i>Personal Information</a>\n                                              </li>\n                                              <li class=\"nav-item\">\n                                                <a class=\"nav-link\" href=\"#buzz\" role=\"tab\" data-toggle=\"tab\"><i class=\"fas fa-info-circle\"></i>Other Information</a>\n                                              </li>                                                \n                                            </ul>\n                                            \n                                            <!-- Tab panes -->\n                                            <div class=\"tab-content\">\n                                              <div role=\"tabpanel\" class=\"tab-pane fade show active\" id=\"profile\">\n                                                <br>\n                                                <div class=\"row\">\n                                                  <div class=\"col-md-2\">\n                                                    <label>ID</label>\n                                                  </div>\n                                                  <div class=\"col-md-6\">\n                                                    <p>{{students.rollNo}}</p>\n                                                  </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                  <div class=\"col-md-2\">\n                                                    <label>Name</label>\n                                                  </div>\n                                                  <div class=\"col-md-6\">\n                                                    <p>{{students.firstName +' '+ students.lastName}}</p>\n                                                  </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                  <div class=\"col-md-2\">\n                                                    <label>Class</label>\n                                                  </div>\n                                                  <div class=\"col-md-6\">\n                                                    <p>{{students.standers}}</p>\n                                                  </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                  <div class=\"col-md-2\">\n                                                    <label>Section</label>\n                                                  </div>\n                                                  <div class=\"col-md-6\">\n                                                    <p>{{students.classsection}}</p>\n                                                  </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                  <div class=\"col-md-2\">\n                                                    <label>Medium</label>\n                                                  </div>\n                                                  <div class=\"col-md-6\">\n                                                    <p>{{students.medium}}</p>\n                                                  </div>\n                                                </div>\n                                              </div>\n                                              <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"buzz\">\n                                                <br>\n                                                <div class=\"row\">\n                                                  <div class=\"col-md-6\">\n                                                    <label>Date Of Admission</label>\n                                                  </div>\n                                                  <div class=\"col-md-6\">\n                                                    <p>{{students.doa}}</p>\n                                                  </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                  <div class=\"col-md-6\">\n                                                    <label>Date Of Birth</label>\n                                                  </div>\n                                                  <div class=\"col-md-6\">\n                                                    <p>{{students.dob}}</p>\n                                                  </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                  <div class=\"col-md-6\">\n                                                    <label>Father Name</label>\n                                                  </div>\n                                                  <div class=\"col-md-6\">\n                                                    <p>{{students.fatherName}}</p>\n                                                  </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                  <div class=\"col-md-6\">\n                                                    <label>Admission Number</label>\n                                                  </div>\n                                                  <div class=\"col-md-6\">\n                                                    <p>{{students.admissionNo}}</p>\n                                                  </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                  <div class=\"col-md-6\">\n                                                    <label>Nationality</label>\n                                                  </div>\n                                                  <div class=\"col-md-6\">\n                                                    <p>{{students.nationality}}</p>\n                                                  </div>\n                                                </div>\n                                             \n                                              </div>\n                                              \n                                            </div>\n                        \n                              </div>\n                              <div class=\"col-md-4 img-main-rightPart\">\n                                  <div class=\"row\">\n                                      <div class=\"col-md-12\">\n                                          <div class=\"row image-right-part\">\n                                              <div class=\"col-md-6 pull-left image-right-detail\">\n                                                  <h6>PUBLICIDAD</h6>\n                                              </div>\n                                          </div>\n                                      </div>\n                                      <a href=\"http://camaradecomerciozn.com/\">\n                                          <div class=\"col-md-12 image-right\">\n                                              <img src=\"http://pluspng.com/img-png/bootstrap-png-bootstrap-512.png\">\n                                          </div>\n                                      </a>\n                                      <div class=\"col-md-12 image-right-detail-section2\">\n\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"modal fade\" id=\"contact\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"contact\">Contactarme</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                  </button>\n              </div>\n              <div class=\"modal-body\">\n                  <div class=\"form-group\">\n                      <p for=\"msj\">Se enviará este mensaje a la persona que desea contactar, indicando que te quieres comunicar con el. Para esto debes de ingresar tu información personal.</p>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"txtFullname\">Nombre completo</label>\n                      <input type=\"text\" id=\"txtFullname\" class=\"form-control\">\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"txtEmail\">Email</label>\n                      <input type=\"text\" id=\"txtEmail\" class=\"form-control\">\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"txtPhone\">Teléfono</label>\n                      <input type=\"text\" id=\"txtPhone\" class=\"form-control\">\n                  </div>\n              </div>\n              <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal()\" data-dismiss=\"modal\">Guardar</button>\n              </div>\n          </div>\n      </div>\n  </div>\n</body>\n";
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-stu-View/basic-stu-View-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-stu-View/basic-stu-View-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: BasicStudentViewRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicStuViewBasicStuViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicStudentViewRoutingModule", function () {
      return BasicStudentViewRoutingModule;
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


    var _basic_stu_View_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-stu-View.component */
    "./src/app/demo/ui-elements/ui-basic/basic-stu-View/basic-stu-View.component.ts");

    var routes = [{
      path: '',
      component: _basic_stu_View_component__WEBPACK_IMPORTED_MODULE_3__["BasicStuViewComponent"]
    }];

    var BasicStudentViewRoutingModule = function BasicStudentViewRoutingModule() {
      _classCallCheck(this, BasicStudentViewRoutingModule);
    };

    BasicStudentViewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BasicStudentViewRoutingModule);
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-stu-View/basic-stu-View.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-stu-View/basic-stu-View.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDemoUiElementsUiBasicBasicStuViewBasicStuViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body{\r\n    margin-top: auto;\r\n     \r\n    }\r\n    .border{\r\n      border-bottom:1px solid #F1F1F1;\r\n      margin-bottom:10px;\r\n    }\r\n    .main-secction{\r\n      box-shadow: 10px 10px 10px;\r\n    }\r\n    .image-section{\r\n      padding: 0px;\r\n    }\r\n    .image-section img{\r\n      width: 100%;\r\n      height:250px;\r\n      position: relative;\r\n    }\r\n    .user-image{\r\n      position: absolute;\r\n      margin-top:-50px;\r\n    }\r\n    .user-left-part{\r\n      margin: 0px;\r\n    }\r\n    .user-image img{\r\n      width:100px;\r\n      height:100px;\r\n    }\r\n    .user-profil-part{\r\n      padding-bottom:30px;\r\n      background-color:#FAFAFA;\r\n    }\r\n    .follow{    \r\n      margin-top:70px;   \r\n    }\r\n    .user-detail-row{\r\n      margin:0px; \r\n    }\r\n    .user-detail-section2 p{\r\n      font-size:12px;\r\n      padding: 0px;\r\n      margin: 0px;\r\n    }\r\n    .user-detail-section2{\r\n      margin-top:10px;\r\n    }\r\n    .user-detail-section2 span{\r\n      color:#7CBBC3;\r\n      font-size: 20px;\r\n    }\r\n    .user-detail-section2 small{\r\n      font-size:12px;\r\n      color:#D3A86A;\r\n    }\r\n    .profile-right-section{\r\n      padding: 20px 0px 10px 15px;\r\n      background-color: #FFFFFF;  \r\n    }\r\n    .profile-right-section-row{\r\n      margin: 0px;\r\n    }\r\n    .profile-header-section1 h1{\r\n      font-size: 25px;\r\n      margin: 0px;\r\n    }\r\n    .profile-header-section1 h5{\r\n      color: #0062cc;\r\n    }\r\n    .req-btn{\r\n      height:30px;\r\n      font-size:12px;\r\n    }\r\n    .profile-tag{\r\n      padding: 10px;\r\n      border:1px solid #F6F6F6;\r\n    }\r\n    .profile-tag p{\r\n      font-size: 12px;\r\n      color:black;\r\n    }\r\n    .profile-tag i{\r\n      color:#ADADAD;\r\n      font-size: 20px;\r\n    }\r\n    .image-right-part{\r\n      background-color: #FCFCFC;\r\n      margin: 0px;\r\n      padding: 5px;\r\n    }\r\n    .img-main-rightPart{\r\n      background-color: #FCFCFC;\r\n      margin-top: auto;\r\n    }\r\n    .image-right-detail{\r\n      padding: 0px;\r\n    }\r\n    .image-right-detail p{\r\n      font-size: 12px;\r\n    }\r\n    .image-right-detail a:hover{\r\n      text-decoration: none;\r\n    }\r\n    .image-right img{\r\n      width: 100%;\r\n    }\r\n    .image-right-detail-section2{\r\n      margin: 0px;\r\n    }\r\n    .image-right-detail-section2 p{\r\n      color:#38ACDF;\r\n      margin:0px;\r\n    }\r\n    .image-right-detail-section2 span{\r\n      color:#7F7F7F;\r\n    }\r\n    .nav-link{\r\n      font-size: 1.2em;    \r\n    }\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby91aS1lbGVtZW50cy91aS1iYXNpYy9iYXNpYy1zdHUtVmlldy9iYXNpYy1zdHUtVmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCOztJQUVoQjtJQUNBO01BQ0UsK0JBQStCO01BQy9CLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLFdBQVc7TUFDWCxZQUFZO0lBQ2Q7SUFDQTtNQUNFLG1CQUFtQjtNQUNuQix3QkFBd0I7SUFDMUI7SUFDQTtNQUNFLGVBQWU7SUFDakI7SUFDQTtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsY0FBYztNQUNkLFlBQVk7TUFDWixXQUFXO0lBQ2I7SUFDQTtNQUNFLGVBQWU7SUFDakI7SUFDQTtNQUNFLGFBQWE7TUFDYixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxjQUFjO01BQ2QsYUFBYTtJQUNmO0lBQ0E7TUFDRSwyQkFBMkI7TUFDM0IseUJBQXlCO0lBQzNCO0lBQ0E7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLGVBQWU7TUFDZixXQUFXO0lBQ2I7SUFDQTtNQUNFLGNBQWM7SUFDaEI7SUFDQTtNQUNFLFdBQVc7TUFDWCxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxhQUFhO01BQ2Isd0JBQXdCO0lBQzFCO0lBQ0E7TUFDRSxlQUFlO01BQ2YsV0FBVztJQUNiO0lBQ0E7TUFDRSxhQUFhO01BQ2IsZUFBZTtJQUNqQjtJQUNBO01BQ0UseUJBQXlCO01BQ3pCLFdBQVc7TUFDWCxZQUFZO0lBQ2Q7SUFDQTtNQUNFLHlCQUF5QjtNQUN6QixnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsZUFBZTtJQUNqQjtJQUNBO01BQ0UscUJBQXFCO0lBQ3ZCO0lBQ0E7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLFdBQVc7SUFDYjtJQUNBO01BQ0UsYUFBYTtNQUNiLFVBQVU7SUFDWjtJQUNBO01BQ0UsYUFBYTtJQUNmO0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3VpLWVsZW1lbnRzL3VpLWJhc2ljL2Jhc2ljLXN0dS1WaWV3L2Jhc2ljLXN0dS1WaWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICBcclxuICAgIH1cclxuICAgIC5ib3JkZXJ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNGMUYxRjE7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIH1cclxuICAgIC5tYWluLXNlY2N0aW9ue1xyXG4gICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZS1zZWN0aW9ue1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Utc2VjdGlvbiBpbWd7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6MjUwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC51c2VyLWltYWdle1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG1hcmdpbi10b3A6LTUwcHg7XHJcbiAgICB9XHJcbiAgICAudXNlci1sZWZ0LXBhcnR7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXItaW1hZ2UgaW1ne1xyXG4gICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXItcHJvZmlsLXBhcnR7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOjMwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6I0ZBRkFGQTtcclxuICAgIH1cclxuICAgIC5mb2xsb3d7ICAgIFxyXG4gICAgICBtYXJnaW4tdG9wOjcwcHg7ICAgXHJcbiAgICB9XHJcbiAgICAudXNlci1kZXRhaWwtcm93e1xyXG4gICAgICBtYXJnaW46MHB4OyBcclxuICAgIH1cclxuICAgIC51c2VyLWRldGFpbC1zZWN0aW9uMiBwe1xyXG4gICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIC51c2VyLWRldGFpbC1zZWN0aW9uMntcclxuICAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXItZGV0YWlsLXNlY3Rpb24yIHNwYW57XHJcbiAgICAgIGNvbG9yOiM3Q0JCQzM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC51c2VyLWRldGFpbC1zZWN0aW9uMiBzbWFsbHtcclxuICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgIGNvbG9yOiNEM0E4NkE7XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZS1yaWdodC1zZWN0aW9ue1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDBweCAxMHB4IDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7ICBcclxuICAgIH1cclxuICAgIC5wcm9maWxlLXJpZ2h0LXNlY3Rpb24tcm93e1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIC5wcm9maWxlLWhlYWRlci1zZWN0aW9uMSBoMXtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIC5wcm9maWxlLWhlYWRlci1zZWN0aW9uMSBoNXtcclxuICAgICAgY29sb3I6ICMwMDYyY2M7XHJcbiAgICB9XHJcbiAgICAucmVxLWJ0bntcclxuICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgfVxyXG4gICAgLnByb2ZpbGUtdGFne1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXI6MXB4IHNvbGlkICNGNkY2RjY7XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZS10YWcgcHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuICAgIC5wcm9maWxlLXRhZyBpe1xyXG4gICAgICBjb2xvcjojQURBREFEO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2UtcmlnaHQtcGFydHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRkNGQztcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICAgIC5pbWctbWFpbi1yaWdodFBhcnR7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0ZDRkM7XHJcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuaW1hZ2UtcmlnaHQtZGV0YWlse1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2UtcmlnaHQtZGV0YWlsIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5pbWFnZS1yaWdodC1kZXRhaWwgYTpob3ZlcntcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmltYWdlLXJpZ2h0IGltZ3tcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2UtcmlnaHQtZGV0YWlsLXNlY3Rpb24ye1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZS1yaWdodC1kZXRhaWwtc2VjdGlvbjIgcHtcclxuICAgICAgY29sb3I6IzM4QUNERjtcclxuICAgICAgbWFyZ2luOjBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZS1yaWdodC1kZXRhaWwtc2VjdGlvbjIgc3BhbntcclxuICAgICAgY29sb3I6IzdGN0Y3RjtcclxuICAgIH1cclxuICBcclxuICAgIC5uYXYtbGlua3tcclxuICAgICAgZm9udC1zaXplOiAxLjJlbTsgICAgXHJcbiAgICB9XHJcbiAgICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-stu-View/basic-stu-View.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-stu-View/basic-stu-View.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: BasicStuViewComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicStuViewBasicStuViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicStuViewComponent", function () {
      return BasicStuViewComponent;
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


    var src_app_services_classlevel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/classlevel.service */
    "./src/app/services/classlevel.service.ts");

    var BasicStuViewComponent = /*#__PURE__*/function () {
      function BasicStuViewComponent(_route, _classLevel) {
        _classCallCheck(this, BasicStuViewComponent);

        this._route = _route;
        this._classLevel = _classLevel;
      }

      _createClass(BasicStuViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._classLevel.getQuickStudent(+this._route.snapshot.params['id']).subscribe(function (user) {
            _this.students = user;
          }, function (error) {});
        }
      }]);

      return BasicStuViewComponent;
    }();

    BasicStuViewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_classlevel_service__WEBPACK_IMPORTED_MODULE_3__["ClasslevelService"]
      }];
    };

    BasicStuViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-basic-stu-View',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./basic-stu-View.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-stu-View/basic-stu-View.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./basic-stu-View.component.css */
      "./src/app/demo/ui-elements/ui-basic/basic-stu-View/basic-stu-View.component.css"))["default"]]
    })], BasicStuViewComponent);
    /***/
  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-stu-View/basic-stu-View.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-stu-View/basic-stu-View.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: BasicStuViewModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicStuViewBasicStuViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicStuViewModule", function () {
      return BasicStuViewModule;
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


    var _basic_stu_View_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-stu-View.component */
    "./src/app/demo/ui-elements/ui-basic/basic-stu-View/basic-stu-View.component.ts");
    /* harmony import */


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _basic_stu_View_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./basic-stu-View-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-stu-View/basic-stu-View-routing.module.ts");

    var BasicStuViewModule = function BasicStuViewModule() {
      _classCallCheck(this, BasicStuViewModule);
    };

    BasicStuViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _basic_stu_View_routing_module__WEBPACK_IMPORTED_MODULE_5__["BasicStudentViewRoutingModule"]],
      declarations: [_basic_stu_View_component__WEBPACK_IMPORTED_MODULE_3__["BasicStuViewComponent"]]
    })], BasicStuViewModule);
    /***/
  }
}]);
//# sourceMappingURL=basic-stu-View-basic-stu-View-module-es5.js.map