function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~basic-EmpRegister-basic-EmpRegister-module~basic-emp-edit-basic-emp-edit-module"], {
  /***/
  "./node_modules/@syncfusion/ej2-angular-dropdowns/@syncfusion/ej2-angular-dropdowns.js":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/@syncfusion/ej2-angular-dropdowns/@syncfusion/ej2-angular-dropdowns.js ***!
    \*********************************************************************************************/

  /*! exports provided: DropDownListComponent, DropDownListModule, DropDownListAllModule, ComboBoxComponent, ComboBoxModule, ComboBoxAllModule, AutoCompleteComponent, AutoCompleteModule, AutoCompleteAllModule, MultiSelectComponent, MultiSelectModule, MultiSelectAllModule, CheckBoxSelectionService, ListBoxComponent, ListBoxModule, ListBoxAllModule, ɵe, ɵf, ɵc, ɵd, ɵa, ɵb, ɵi, ɵj, ɵg, ɵh, incrementalSearch, Search, highlightSearch, revertHighlightSearch, FieldSettings, dropDownBaseClasses, DropDownBase, dropDownListClasses, DropDownList, ComboBox, AutoComplete, MultiSelect, CheckBoxSelection, SelectionSettings, ToolbarSettings, ListBox */

  /***/
  function node_modulesSyncfusionEj2AngularDropdownsSyncfusionEj2AngularDropdownsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropDownListComponent", function () {
      return DropDownListComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropDownListModule", function () {
      return DropDownListModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropDownListAllModule", function () {
      return DropDownListAllModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComboBoxComponent", function () {
      return ComboBoxComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComboBoxModule", function () {
      return ComboBoxModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComboBoxAllModule", function () {
      return ComboBoxAllModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoCompleteComponent", function () {
      return AutoCompleteComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoCompleteModule", function () {
      return AutoCompleteModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoCompleteAllModule", function () {
      return AutoCompleteAllModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function () {
      return MultiSelectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiSelectModule", function () {
      return MultiSelectModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiSelectAllModule", function () {
      return MultiSelectAllModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckBoxSelectionService", function () {
      return CheckBoxSelectionService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListBoxComponent", function () {
      return ListBoxComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListBoxModule", function () {
      return ListBoxModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListBoxAllModule", function () {
      return ListBoxAllModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return inputs$2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return outputs$2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return inputs$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return outputs$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return inputs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return outputs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return inputs$4;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return outputs$4;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return inputs$3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return outputs$3;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-base */
    "./node_modules/@syncfusion/ej2-angular-base/index.js");
    /* harmony import */


    var _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @syncfusion/ej2-dropdowns */
    "./node_modules/@syncfusion/ej2-dropdowns/dist/es6/ej2-dropdowns.es2015.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "incrementalSearch", function () {
      return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["incrementalSearch"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Search", function () {
      return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["Search"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "highlightSearch", function () {
      return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["highlightSearch"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "revertHighlightSearch", function () {
      return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["revertHighlightSearch"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FieldSettings", function () {
      return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["FieldSettings"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "dropDownBaseClasses", function () {
      return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["dropDownBaseClasses"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropDownBase", function () {
      return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["DropDownBase"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "dropDownListClasses", function () {
      return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["dropDownListClasses"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropDownList", function () {
      return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["DropDownList"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ComboBox", function () {
      return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["ComboBox"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AutoComplete", function () {
      return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["AutoComplete"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MultiSelect", function () {
      return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["MultiSelect"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CheckBoxSelection", function () {
      return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["CheckBoxSelection"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SelectionSettings", function () {
      return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["SelectionSettings"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToolbarSettings", function () {
      return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["ToolbarSettings"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ListBox", function () {
      return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["ListBox"];
    });

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var inputs = ['actionFailureTemplate', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex'];
    var outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select', 'valueChange'];
    var twoWays = ['value'];
    /**
     * The DropDownList component contains a list of predefined values, from which the user can choose a single value.
     * ```html
     * <ejs-dropdownlist></ejs-dropdownlist>
     * ```
     */

    var DropDownListComponent = DropDownListComponent_1 = /*#__PURE__*/function (_syncfusion_ej2_dropd) {
      _inherits(DropDownListComponent, _syncfusion_ej2_dropd);

      var _super = _createSuper(DropDownListComponent);

      /**
       * @param {?} ngEle
       * @param {?} srenderer
       * @param {?} viewContainerRef
       * @param {?} injector
       */
      function DropDownListComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this;

        _classCallCheck(this, DropDownListComponent);

        _this = _super.call(this);
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.skipFromEvent = true;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];

        _this.registerEvents(outputs);

        _this.addTwoWay.call(_assertThisInitialized(_this), twoWays);

        Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["setValue"])('currentInstance', _assertThisInitialized(_this), _this.viewContainerRef);
        _this.formContext = new _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["FormBase"]();
        _this.formCompContext = new _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"]();
        return _this;
      }
      /**
       * @param {?} registerFunction
       * @return {?}
       */


      _createClass(DropDownListComponent, [{
        key: "registerOnChange",
        value: function registerOnChange(registerFunction) {}
        /**
         * @param {?} registerFunction
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(registerFunction) {}
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {}
        /**
         * @param {?} disabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(disabled) {}
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formCompContext.ngOnInit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.formContext.ngAfterViewInit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.formCompContext.ngOnDestroy(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this.formCompContext.ngAfterContentChecked(this);
        }
      }]);

      return DropDownListComponent;
    }(_syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["DropDownList"]);

    DropDownListComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ejs-dropdownlist',
        inputs: inputs,
        outputs: outputs,
        template: '',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return DropDownListComponent_1;
          }),
          multi: true
        }],
        queries: {}
      }]
    }];
    /**
     * @nocollapse
     */

    DropDownListComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };

    DropDownListComponent.propDecorators = {
      'footerTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['footerTemplate']
      }],
      'headerTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['headerTemplate']
      }],
      'valueTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['valueTemplate']
      }],
      'groupTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['groupTemplate']
      }],
      'itemTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['itemTemplate']
      }],
      'noRecordsTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['noRecordsTemplate']
      }],
      'actionFailureTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['actionFailureTemplate']
      }]
    };

    __decorate([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata("design:type", Object)], DropDownListComponent.prototype, "footerTemplate", void 0);

    __decorate([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata("design:type", Object)], DropDownListComponent.prototype, "headerTemplate", void 0);

    __decorate([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata("design:type", Object)], DropDownListComponent.prototype, "valueTemplate", void 0);

    __decorate([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata("design:type", Object)], DropDownListComponent.prototype, "groupTemplate", void 0);

    __decorate([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata("design:type", Object)], DropDownListComponent.prototype, "itemTemplate", void 0);

    __decorate([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])('No Records Found'), __metadata("design:type", Object)], DropDownListComponent.prototype, "noRecordsTemplate", void 0);

    __decorate([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])('The Request Failed'), __metadata("design:type", Object)], DropDownListComponent.prototype, "actionFailureTemplate", void 0);

    DropDownListComponent = DropDownListComponent_1 = __decorate([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentMixins"])([_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"], _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["FormBase"]]), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])], DropDownListComponent);
    var DropDownListComponent_1;
    /**
     * NgModule definition for the DropDownList component.
     */

    var DropDownListModule = function DropDownListModule() {
      _classCallCheck(this, DropDownListModule);
    };

    DropDownListModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
        declarations: [DropDownListComponent],
        exports: [DropDownListComponent]
      }]
    }];
    /**
     * @nocollapse
     */

    DropDownListModule.ctorParameters = function () {
      return [];
    };
    /**
     * NgModule definition for the DropDownList component with providers.
     */


    var DropDownListAllModule = function DropDownListAllModule() {
      _classCallCheck(this, DropDownListAllModule);
    };

    DropDownListAllModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], DropDownListModule],
        exports: [DropDownListModule],
        providers: []
      }]
    }];
    /**
     * @nocollapse
     */

    DropDownListAllModule.ctorParameters = function () {
      return [];
    };

    var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$1 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var inputs$1 = ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex'];
    var outputs$1 = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'customValueSpecifier', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select', 'valueChange'];
    var twoWays$1 = ['value'];
    /**
     * The ComboBox component allows the user to type a value or choose an option from the list of predefined options.
     * ```html
     * <ejs-combobox></ejs-combobox>
     * ```
     */

    var ComboBoxComponent = ComboBoxComponent_1 = /*#__PURE__*/function (_syncfusion_ej2_dropd2) {
      _inherits(ComboBoxComponent, _syncfusion_ej2_dropd2);

      var _super2 = _createSuper(ComboBoxComponent);

      /**
       * @param {?} ngEle
       * @param {?} srenderer
       * @param {?} viewContainerRef
       * @param {?} injector
       */
      function ComboBoxComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this2;

        _classCallCheck(this, ComboBoxComponent);

        _this2 = _super2.call(this);
        _this2.ngEle = ngEle;
        _this2.srenderer = srenderer;
        _this2.viewContainerRef = viewContainerRef;
        _this2.injector = injector;
        _this2.skipFromEvent = true;
        _this2.element = _this2.ngEle.nativeElement;
        _this2.injectedModules = _this2.injectedModules || [];

        _this2.registerEvents(outputs$1);

        _this2.addTwoWay.call(_assertThisInitialized(_this2), twoWays$1);

        Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["setValue"])('currentInstance', _assertThisInitialized(_this2), _this2.viewContainerRef);
        _this2.formContext = new _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["FormBase"]();
        _this2.formCompContext = new _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"]();
        return _this2;
      }
      /**
       * @param {?} registerFunction
       * @return {?}
       */


      _createClass(ComboBoxComponent, [{
        key: "registerOnChange",
        value: function registerOnChange(registerFunction) {}
        /**
         * @param {?} registerFunction
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(registerFunction) {}
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {}
        /**
         * @param {?} disabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(disabled) {}
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formCompContext.ngOnInit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.formContext.ngAfterViewInit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.formCompContext.ngOnDestroy(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this.formCompContext.ngAfterContentChecked(this);
        }
      }]);

      return ComboBoxComponent;
    }(_syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["ComboBox"]);

    ComboBoxComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ejs-combobox',
        inputs: inputs$1,
        outputs: outputs$1,
        template: '',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return ComboBoxComponent_1;
          }),
          multi: true
        }],
        queries: {}
      }]
    }];
    /**
     * @nocollapse
     */

    ComboBoxComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };

    ComboBoxComponent.propDecorators = {
      'footerTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['footerTemplate']
      }],
      'headerTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['headerTemplate']
      }],
      'groupTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['groupTemplate']
      }],
      'itemTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['itemTemplate']
      }],
      'noRecordsTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['noRecordsTemplate']
      }],
      'actionFailureTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['actionFailureTemplate']
      }]
    };

    __decorate$1([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata$1("design:type", Object)], ComboBoxComponent.prototype, "footerTemplate", void 0);

    __decorate$1([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata$1("design:type", Object)], ComboBoxComponent.prototype, "headerTemplate", void 0);

    __decorate$1([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata$1("design:type", Object)], ComboBoxComponent.prototype, "groupTemplate", void 0);

    __decorate$1([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata$1("design:type", Object)], ComboBoxComponent.prototype, "itemTemplate", void 0);

    __decorate$1([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])('No Records Found'), __metadata$1("design:type", Object)], ComboBoxComponent.prototype, "noRecordsTemplate", void 0);

    __decorate$1([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])('The Request Failed'), __metadata$1("design:type", Object)], ComboBoxComponent.prototype, "actionFailureTemplate", void 0);

    ComboBoxComponent = ComboBoxComponent_1 = __decorate$1([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentMixins"])([_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"], _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["FormBase"]]), __metadata$1("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])], ComboBoxComponent);
    var ComboBoxComponent_1;
    /**
     * NgModule definition for the ComboBox component.
     */

    var ComboBoxModule = function ComboBoxModule() {
      _classCallCheck(this, ComboBoxModule);
    };

    ComboBoxModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
        declarations: [ComboBoxComponent],
        exports: [ComboBoxComponent]
      }]
    }];
    /**
     * @nocollapse
     */

    ComboBoxModule.ctorParameters = function () {
      return [];
    };
    /**
     * NgModule definition for the ComboBox component with providers.
     */


    var ComboBoxAllModule = function ComboBoxAllModule() {
      _classCallCheck(this, ComboBoxAllModule);
    };

    ComboBoxAllModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ComboBoxModule],
        exports: [ComboBoxModule],
        providers: []
      }]
    }];
    /**
     * @nocollapse
     */

    ComboBoxAllModule.ctorParameters = function () {
      return [];
    };

    var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$2 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var inputs$2 = ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'highlight', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'minLength', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'showPopupButton', 'sortOrder', 'suggestionCount', 'text', 'value', 'valueTemplate', 'width', 'zIndex'];
    var outputs$2 = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'customValueSpecifier', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select', 'valueChange'];
    var twoWays$2 = ['value'];
    /**
     * The AutoComplete component provides the matched suggestion list when type into the input, from which the user can select one.
     * ```html
     * <ejs-autocomplete></ejs-autocomplete>
     * ```
     */

    var AutoCompleteComponent = AutoCompleteComponent_1 = /*#__PURE__*/function (_syncfusion_ej2_dropd3) {
      _inherits(AutoCompleteComponent, _syncfusion_ej2_dropd3);

      var _super3 = _createSuper(AutoCompleteComponent);

      /**
       * @param {?} ngEle
       * @param {?} srenderer
       * @param {?} viewContainerRef
       * @param {?} injector
       */
      function AutoCompleteComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this3;

        _classCallCheck(this, AutoCompleteComponent);

        _this3 = _super3.call(this);
        _this3.ngEle = ngEle;
        _this3.srenderer = srenderer;
        _this3.viewContainerRef = viewContainerRef;
        _this3.injector = injector;
        _this3.skipFromEvent = true;
        _this3.element = _this3.ngEle.nativeElement;
        _this3.injectedModules = _this3.injectedModules || [];

        _this3.registerEvents(outputs$2);

        _this3.addTwoWay.call(_assertThisInitialized(_this3), twoWays$2);

        Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["setValue"])('currentInstance', _assertThisInitialized(_this3), _this3.viewContainerRef);
        _this3.formContext = new _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["FormBase"]();
        _this3.formCompContext = new _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"]();
        return _this3;
      }
      /**
       * @param {?} registerFunction
       * @return {?}
       */


      _createClass(AutoCompleteComponent, [{
        key: "registerOnChange",
        value: function registerOnChange(registerFunction) {}
        /**
         * @param {?} registerFunction
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(registerFunction) {}
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {}
        /**
         * @param {?} disabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(disabled) {}
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formCompContext.ngOnInit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.formContext.ngAfterViewInit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.formCompContext.ngOnDestroy(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this.formCompContext.ngAfterContentChecked(this);
        }
      }]);

      return AutoCompleteComponent;
    }(_syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["AutoComplete"]);

    AutoCompleteComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ejs-autocomplete',
        inputs: inputs$2,
        outputs: outputs$2,
        template: '',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return AutoCompleteComponent_1;
          }),
          multi: true
        }],
        queries: {}
      }]
    }];
    /**
     * @nocollapse
     */

    AutoCompleteComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };

    AutoCompleteComponent.propDecorators = {
      'footerTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['footerTemplate']
      }],
      'headerTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['headerTemplate']
      }],
      'groupTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['groupTemplate']
      }],
      'itemTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['itemTemplate']
      }],
      'noRecordsTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['noRecordsTemplate']
      }],
      'actionFailureTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['actionFailureTemplate']
      }]
    };

    __decorate$2([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata$2("design:type", Object)], AutoCompleteComponent.prototype, "footerTemplate", void 0);

    __decorate$2([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata$2("design:type", Object)], AutoCompleteComponent.prototype, "headerTemplate", void 0);

    __decorate$2([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata$2("design:type", Object)], AutoCompleteComponent.prototype, "groupTemplate", void 0);

    __decorate$2([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata$2("design:type", Object)], AutoCompleteComponent.prototype, "itemTemplate", void 0);

    __decorate$2([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])('No Records Found'), __metadata$2("design:type", Object)], AutoCompleteComponent.prototype, "noRecordsTemplate", void 0);

    __decorate$2([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])('The Request Failed'), __metadata$2("design:type", Object)], AutoCompleteComponent.prototype, "actionFailureTemplate", void 0);

    AutoCompleteComponent = AutoCompleteComponent_1 = __decorate$2([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentMixins"])([_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"], _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["FormBase"]]), __metadata$2("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])], AutoCompleteComponent);
    var AutoCompleteComponent_1;
    /**
     * NgModule definition for the AutoComplete component.
     */

    var AutoCompleteModule = function AutoCompleteModule() {
      _classCallCheck(this, AutoCompleteModule);
    };

    AutoCompleteModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
        declarations: [AutoCompleteComponent],
        exports: [AutoCompleteComponent]
      }]
    }];
    /**
     * @nocollapse
     */

    AutoCompleteModule.ctorParameters = function () {
      return [];
    };
    /**
     * NgModule definition for the AutoComplete component with providers.
     */


    var AutoCompleteAllModule = function AutoCompleteAllModule() {
      _classCallCheck(this, AutoCompleteAllModule);
    };

    AutoCompleteAllModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], AutoCompleteModule],
        exports: [AutoCompleteModule],
        providers: []
      }]
    }];
    /**
     * @nocollapse
     */

    AutoCompleteAllModule.ctorParameters = function () {
      return [];
    };

    var __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$3 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var inputs$3 = ['actionFailureTemplate', 'allowCustomValue', 'allowFiltering', 'changeOnBlur', 'closePopupOnSelect', 'cssClass', 'dataSource', 'delimiterChar', 'enableGroupCheckBox', 'enablePersistence', 'enableRtl', 'enableSelectionOrder', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'hideSelectedItem', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'maximumSelectionLength', 'mode', 'noRecordsTemplate', 'openOnClick', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'selectAllText', 'showClearButton', 'showDropDownIcon', 'showSelectAll', 'sortOrder', 'text', 'unSelectAllText', 'value', 'valueTemplate', 'width', 'zIndex'];
    var outputs$3 = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'chipSelection', 'close', 'created', 'customValueSelection', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'removed', 'removing', 'select', 'selectedAll', 'tagging', 'valueChange'];
    var twoWays$3 = ['value'];
    /**
     * The MultiSelect allows the user to pick a values from the predefined list of values.
     * ```html
     * <ejs-multiselect></ejs-multiselect>
     * ```
     */

    var MultiSelectComponent = MultiSelectComponent_1 = /*#__PURE__*/function (_syncfusion_ej2_dropd4) {
      _inherits(MultiSelectComponent, _syncfusion_ej2_dropd4);

      var _super4 = _createSuper(MultiSelectComponent);

      /**
       * @param {?} ngEle
       * @param {?} srenderer
       * @param {?} viewContainerRef
       * @param {?} injector
       */
      function MultiSelectComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this4;

        _classCallCheck(this, MultiSelectComponent);

        _this4 = _super4.call(this);
        _this4.ngEle = ngEle;
        _this4.srenderer = srenderer;
        _this4.viewContainerRef = viewContainerRef;
        _this4.injector = injector;
        _this4.skipFromEvent = true;
        _this4.element = _this4.ngEle.nativeElement;
        _this4.injectedModules = _this4.injectedModules || [];

        try {
          var mod = _this4.injector.get('DropDownsCheckBoxSelection');

          if (_this4.injectedModules.indexOf(mod) === -1) {
            _this4.injectedModules.push(mod);
          }
        } catch (_a) {}

        _this4.registerEvents(outputs$3);

        _this4.addTwoWay.call(_assertThisInitialized(_this4), twoWays$3);

        Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["setValue"])('currentInstance', _assertThisInitialized(_this4), _this4.viewContainerRef);
        _this4.formContext = new _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["FormBase"]();
        _this4.formCompContext = new _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"]();
        return _this4;
      }
      /**
       * @param {?} registerFunction
       * @return {?}
       */


      _createClass(MultiSelectComponent, [{
        key: "registerOnChange",
        value: function registerOnChange(registerFunction) {}
        /**
         * @param {?} registerFunction
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(registerFunction) {}
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {}
        /**
         * @param {?} disabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(disabled) {}
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formCompContext.ngOnInit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.formContext.ngAfterViewInit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.formCompContext.ngOnDestroy(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this.formCompContext.ngAfterContentChecked(this);
        }
      }]);

      return MultiSelectComponent;
    }(_syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["MultiSelect"]);

    MultiSelectComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ejs-multiselect',
        inputs: inputs$3,
        outputs: outputs$3,
        template: '',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return MultiSelectComponent_1;
          }),
          multi: true
        }],
        queries: {}
      }]
    }];
    /**
     * @nocollapse
     */

    MultiSelectComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };

    MultiSelectComponent.propDecorators = {
      'footerTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['footerTemplate']
      }],
      'headerTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['headerTemplate']
      }],
      'valueTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['valueTemplate']
      }],
      'itemTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['itemTemplate']
      }],
      'noRecordsTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['noRecordsTemplate']
      }],
      'actionFailureTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['actionFailureTemplate']
      }]
    };

    __decorate$3([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata$3("design:type", Object)], MultiSelectComponent.prototype, "footerTemplate", void 0);

    __decorate$3([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata$3("design:type", Object)], MultiSelectComponent.prototype, "headerTemplate", void 0);

    __decorate$3([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata$3("design:type", Object)], MultiSelectComponent.prototype, "valueTemplate", void 0);

    __decorate$3([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata$3("design:type", Object)], MultiSelectComponent.prototype, "itemTemplate", void 0);

    __decorate$3([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])('No Records Found'), __metadata$3("design:type", Object)], MultiSelectComponent.prototype, "noRecordsTemplate", void 0);

    __decorate$3([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])('The Request Failed'), __metadata$3("design:type", Object)], MultiSelectComponent.prototype, "actionFailureTemplate", void 0);

    MultiSelectComponent = MultiSelectComponent_1 = __decorate$3([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentMixins"])([_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"], _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["FormBase"]]), __metadata$3("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])], MultiSelectComponent);
    var MultiSelectComponent_1;
    /**
     * NgModule definition for the MultiSelect component.
     */

    var MultiSelectModule = function MultiSelectModule() {
      _classCallCheck(this, MultiSelectModule);
    };

    MultiSelectModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
        declarations: [MultiSelectComponent],
        exports: [MultiSelectComponent]
      }]
    }];
    /**
     * @nocollapse
     */

    MultiSelectModule.ctorParameters = function () {
      return [];
    };

    var CheckBoxSelectionService = {
      provide: 'DropDownsCheckBoxSelection',
      useValue: _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["CheckBoxSelection"]
    };
    /**
     * NgModule definition for the MultiSelect component with providers.
     */

    var MultiSelectAllModule = function MultiSelectAllModule() {
      _classCallCheck(this, MultiSelectAllModule);
    };

    MultiSelectAllModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MultiSelectModule],
        exports: [MultiSelectModule],
        providers: [CheckBoxSelectionService]
      }]
    }];
    /**
     * @nocollapse
     */

    MultiSelectAllModule.ctorParameters = function () {
      return [];
    };

    var __decorate$4 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$4 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var inputs$4 = ['actionFailureTemplate', 'allowDragAndDrop', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterType', 'groupTemplate', 'height', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'maximumSelectionLength', 'noRecordsTemplate', 'query', 'scope', 'selectionSettings', 'sortOrder', 'toolbarSettings', 'value', 'zIndex'];
    var outputs$4 = ['focus', 'blur', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeDrop', 'beforeItemRender', 'change', 'created', 'dataBound', 'destroyed', 'drag', 'dragStart', 'drop', 'filtering', 'select', 'valueChange'];
    var twoWays$4 = ['value'];
    /**
     * The ListBox allows the user to select values from the predefined list of values.
     * ```html
     * <ejs-listbox [dataSource]='data'></ejs-listbox>
     * ```
     */

    var ListBoxComponent = ListBoxComponent_1 = /*#__PURE__*/function (_syncfusion_ej2_dropd5) {
      _inherits(ListBoxComponent, _syncfusion_ej2_dropd5);

      var _super5 = _createSuper(ListBoxComponent);

      /**
       * @param {?} ngEle
       * @param {?} srenderer
       * @param {?} viewContainerRef
       * @param {?} injector
       */
      function ListBoxComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this5;

        _classCallCheck(this, ListBoxComponent);

        _this5 = _super5.call(this);
        _this5.ngEle = ngEle;
        _this5.srenderer = srenderer;
        _this5.viewContainerRef = viewContainerRef;
        _this5.injector = injector;
        _this5.element = _this5.ngEle.nativeElement;
        _this5.injectedModules = _this5.injectedModules || [];

        try {
          var mod = _this5.injector.get('DropDownsCheckBoxSelection');

          if (_this5.injectedModules.indexOf(mod) === -1) {
            _this5.injectedModules.push(mod);
          }
        } catch (_a) {}

        _this5.registerEvents(outputs$4);

        _this5.addTwoWay.call(_assertThisInitialized(_this5), twoWays$4);

        Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["setValue"])('currentInstance', _assertThisInitialized(_this5), _this5.viewContainerRef);
        _this5.formContext = new _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["FormBase"]();
        _this5.formCompContext = new _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"]();
        return _this5;
      }
      /**
       * @param {?} registerFunction
       * @return {?}
       */


      _createClass(ListBoxComponent, [{
        key: "registerOnChange",
        value: function registerOnChange(registerFunction) {}
        /**
         * @param {?} registerFunction
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(registerFunction) {}
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {}
        /**
         * @param {?} disabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(disabled) {}
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formCompContext.ngOnInit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.formContext.ngAfterViewInit(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.formCompContext.ngOnDestroy(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this.formCompContext.ngAfterContentChecked(this);
        }
      }]);

      return ListBoxComponent;
    }(_syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["ListBox"]);

    ListBoxComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ejs-listbox',
        inputs: inputs$4,
        outputs: outputs$4,
        template: '',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return ListBoxComponent_1;
          }),
          multi: true
        }],
        queries: {}
      }]
    }];
    /**
     * @nocollapse
     */

    ListBoxComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };

    ListBoxComponent.propDecorators = {
      'itemTemplate': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: ['itemTemplate']
      }]
    };

    __decorate$4([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(), __metadata$4("design:type", Object)], ListBoxComponent.prototype, "itemTemplate", void 0);

    ListBoxComponent = ListBoxComponent_1 = __decorate$4([Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentMixins"])([_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"], _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["FormBase"]]), __metadata$4("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])], ListBoxComponent);
    var ListBoxComponent_1;
    /**
     * NgModule definition for the ListBox component.
     */

    var ListBoxModule = function ListBoxModule() {
      _classCallCheck(this, ListBoxModule);
    };

    ListBoxModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
        declarations: [ListBoxComponent],
        exports: [ListBoxComponent]
      }]
    }];
    /**
     * @nocollapse
     */

    ListBoxModule.ctorParameters = function () {
      return [];
    };
    /**
     * NgModule definition for the ListBox component with providers.
     */


    var ListBoxAllModule = function ListBoxAllModule() {
      _classCallCheck(this, ListBoxAllModule);
    };

    ListBoxAllModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ListBoxModule],
        exports: [ListBoxModule],
        providers: []
      }]
    }];
    /**
     * @nocollapse
     */

    ListBoxAllModule.ctorParameters = function () {
      return [];
    };
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ej2-angular-dropdowns.js.map

    /***/

  },

  /***/
  "./src/app/services/Employee.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/Employee.service.ts ***!
    \**********************************************/

  /*! exports provided: EmployeeService */

  /***/
  function srcAppServicesEmployeeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
      return EmployeeService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _Models_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Models/Pagination */
    "./src/app/Models/Pagination.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var EmployeeService = /*#__PURE__*/function () {
      function EmployeeService(_http) {
        _classCallCheck(this, EmployeeService);

        this._http = _http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
      }

      _createClass(EmployeeService, [{
        key: "getEmp",
        value: function getEmp(id) {
          return this._http.get(this.baseURL + 'Employee/EmpIds/' + id);
        }
      }, {
        key: "getEmpRegistration",
        value: function getEmpRegistration(sessionId, page, itemsPerPage, userParams) {
          var paginatedResult = new _Models_Pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatedResult"]();
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

          if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
          }

          if (userParams != null) {
            params = params.append('AdmissionNo', userParams.AdmissionNo);
            params = params.append('OrderBy', userParams.OrderBy);
            params = params.append('Gender', userParams.Gender);
          }

          return this._http.get(this.baseURL + 'Employee/AllEmpRegistration/' + sessionId, {
            observe: 'response',
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            paginatedResult.result = response.body;

            if (response.headers.get('Pagination') != null) {
              paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }

            return paginatedResult;
          }));
        }
      }, {
        key: "getTeacher",
        value: function getTeacher() {
          return this._http.get(this.baseURL + 'Employee/AllEmpRegistration/');
        }
      }, {
        key: "register",
        value: function register(empRegister) {
          var stringStanders = empRegister.standers.toString();
          empRegister.standers = stringStanders;
          return this._http.post(this.baseURL + 'Employee/register', empRegister);
        }
      }, {
        key: "updateEmployee",
        value: function updateEmployee(id, emp) {
          return this._http.put(this.baseURL + 'Employee/' + id, emp);
        }
      }, {
        key: "getLastEmpRegisterId",
        value: function getLastEmpRegisterId() {
          return this._http.get(this.baseURL + 'Employee/' + 'last/');
        }
      }]);

      return EmployeeService;
    }();

    EmployeeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EmployeeService);
    /***/
  }
}]);
//# sourceMappingURL=default~basic-EmpRegister-basic-EmpRegister-module~basic-emp-edit-basic-emp-edit-module-es5.js.map