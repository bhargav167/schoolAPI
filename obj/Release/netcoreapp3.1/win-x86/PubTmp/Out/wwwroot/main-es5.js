function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet>\n  <app-spinner></app-spinner>\n</router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/admin.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/admin.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation class=\"pcoded-navbar\" [ngClass]=\"{'navbar-collapsed' : navCollapsed, 'theme-horizontal': this.gradientConfig['layout'] === 'horizontal', 'mob-open' : navCollapsedMob}\" (onNavMobCollapse)=\"navMobClick()\"></app-navigation>\n<app-nav-bar class=\"navbar pcoded-header navbar-expand-lg navbar-light\" (onNavCollapse)=\"this.navCollapsed = !this.navCollapsed;\" (onNavHeaderMobCollapse)=\"navMobClick()\"></app-nav-bar>\n<div class=\"pcoded-main-container\">\n  <div class=\"pcoded-wrapper\" [ngClass]=\"{'container': this.gradientConfig.layout === 'horizontal' && this.gradientConfig.subLayout === 'horizontal-2'}\">\n    <div class=\"pcoded-content\">\n      <div class=\"pcoded-inner-content\">\n        <div class=\"main-body\">\n          <div class=\"page-wrapper\">\n            <app-breadcrumb></app-breadcrumb>\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-configuration></app-configuration>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/configuration/configuration.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/configuration/configuration.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminConfigurationConfigurationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" *ngIf=\"this.gradientConfig.layout === 'horizontal' && this.gradientConfig.subLayout === 'horizontal-2'; else mainHeader\">\n  <ng-container *ngTemplateOutlet=\"mainHeader\"></ng-container>\n</div>\n<ng-template #mainHeader>\n  <div class=\"m-header\">\n    <a href=\"javascript:\" class=\"mobile-menu\" id=\"mobile-collapse\" (click)=\"navCollapse()\"><span></span></a>\n    <a [routerLink]=\"['/layout/fixed']\" class=\"b-brand\">\n      <!-- <img id=\"main-logo\" src=\"assets/images/logo.png\" alt=\"\" class=\"logo\">\n      <img src=\"assets/images/logo-icon.png\" alt=\"\" class=\"logo-thumb\"> -->\n      <h2 style=\"color:white;\" class=\"logo-thumb\">sKuul</h2>\n      <h2 style=\"color: white;\" id=\"main-logo\">\n        sKuul\n      </h2>\n    </a>\n    <a class=\"mob-toggler\" [ngClass]=\"{'on' : this.menuClass}\" href=\"javascript:\" (click)=\"toggleMobOption()\"><i class=\"feather icon-more-vertical\"></i></a>\n  </div>\n  <div class=\"collapse navbar-collapse\" [style.display]=\"this.collapseStyle\">\n    <app-nav-left class=\"mr-auto\"></app-nav-left>\n    <app-nav-right class=\"ml-auto\"></app-nav-right>\n  </div>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavBarNavLeftNavLeftComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul class=\"navbar-nav mr-auto\">\n  <li class=\"nav-item\">\n    <app-nav-search></app-nav-search>\n  </li>\n</ul>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavBarNavLeftNavSearchNavSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a href=\"javascript:\" (click)=\"this.searchOn = true\" class=\"pop-search\"><i class=\"feather icon-search\"></i></a>\n<div class=\"search-bar\" *ngIf=\"searchOn\">\n  <input type=\"text\" class=\"form-control border-0 shadow-none\" placeholder=\"Search hear\">\n  <button (click)=\"this.searchOn = false\" type=\"button\" class=\"close\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavBarNavRightChatMsgChatMsgComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"h-list-header\">\n  <h6>{{ chatMessage.name }}</h6>\n  <a href=\"javascript:\" class=\"h-back-user-list\" (click)=\"this.onChatToggle.emit();\"><i class=\"feather icon-chevron-left\"></i></a>\n</div>\n\n<div class=\"h-list-body\">\n  <div class=\"main-chat-cont\">\n    <div class=\"main-friend-chat\">\n      <ng-template #CHATNOTFOUND>\n        <div class=\"media chat-messages text-center\">\n          <div class=\"media-body chat-menu-content\">\n            <div class=\"\">\n              <p class=\"chat-cont\">CHAT NOT FOUND</p>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-container *ngIf=\"chatMessage.chat; else CHATNOTFOUND\">\n        <perfect-scrollbar ngClass=\"elite-scroll\" [style.max-width]=\"'350px'\" [style.max-height]=\"'calc(100vh - 170px)'\" [usePSClass]=\"'elite'\" [disabled]=\"null\">\n          <div *ngFor=\"let messages of chatMessage.chat\">\n            <div class=\"media chat-messages\">\n              <a *ngIf=\"messages.type\" class=\"media-left photo-table\" href=\"javascript:\">\n                <img class=\"media-object img-radius img-radius m-t-5\" src=\"{{ chatMessage.photo }}\" alt=\"{{ chatMessage.name }}\">\n              </a>\n              <div class=\"media-body\" [ngClass]=\"{'chat-menu-content' : messages.type, 'chat-menu-reply': !messages.type}\">\n                <div class=\"\">\n                  <p class=\"chat-cont\">{{ messages.msg }}</p>\n                </div>\n                <p class=\"chat-time\">{{ messages.time }}</p>\n              </div>\n            </div>\n          </div>\n          <div #newChat [innerHTML]=\"newReplay\"></div>\n          <div *ngIf=\"friendWriting\" class=\"media chat-messages typing\">\n            <a class=\"media-left photo-table\" href=\"javascript:\"><img class=\"media-object img-radius img-radius m-t-5\" src=\"{{chatMessage.photo}}\" alt=\"{{ chatMessage.name }}\"></a>\n            <div class=\"media-body chat-menu-content\">\n              <div class=\"rem-msg\">\n                <p class=\"chat-cont\">Typing . . .</p>\n              </div>\n              <p class=\"chat-time\">now</p>\n            </div>\n          </div>\n        </perfect-scrollbar>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<div class=\"h-list-footer\">\n  <div class=\"input-group\" (focusout)=\"this.message_error = false;\">\n    <input type=\"file\" class=\"chat-attach\" style=\"display:none\">\n    <a href=\"javascript:\" class=\"input-group-prepend btn btn-success btn-attach\" [ngClass]=\"{'btn-danger': message_error === true}\">\n      <i class=\"feather icon-paperclip\"></i>\n    </a>\n    <input type=\"text\" [(ngModel)]=\"message\" name=\"h-chat-text\" class=\"form-control h-send-chat\" placeholder=\"Write hear . . \" (keyup)=\"sentMsg(1)\" (keyup.enter)=\"sentMsg(0)\">\n    <button type=\"submit\" class=\"input-group-append btn-send btn btn-primary\" [ngClass]=\"{'btn-danger': message_error === true}\" (click)=\"sentMsg(0)\">\n      <i class=\"feather icon-message-circle\"></i>\n    </button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavBarNavRightChatUserListChatUserListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"h-list-header\">\n  <div class=\"input-group\">\n    <input type=\"text\" id=\"search-friends\" class=\"form-control\" placeholder=\"Search Friend . . .\">\n  </div>\n</div>\n<div class=\"h-list-body\">\n  <a href=\"javascript:\" class=\"h-close-text\" (click)=\"this.onChatCollapse.emit();\"><i class=\"feather icon-chevrons-right\"></i></a>\n  <div class=\"main-friend-cont scroll-div\">\n    <div class=\"main-friend-list\">\n      <perfect-scrollbar ngClass=\"elite-scroll\" [style.max-width]=\"'350px'\" [style.max-height]=\"'calc(100vh - 85px)'\" [usePSClass]=\"'elite'\" [disabled]=\"null\">\n        <ng-container *ngFor=\"let friends of friendsList\">\n          <app-friend (onChatOn)=\"onChatOn(friends.id)\" [friends]=\"friends\"></app-friend>\n        </ng-container>\n      </perfect-scrollbar>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavBarNavRightChatUserListFriendFriendComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"media userlist-box ripple\" (click)=\"innerChatToggle(friends.id)\" [attr.data-id]=\"friends.id\" [attr.data-status]=\"{'online': friends.status, 'offline': !friends.status}\" [attr.data-username]=\"friends.name\">\n  <a class=\"media-left\" href=\"javascript:\"><img class=\"media-object img-radius\" src=\"{{friends.photo}}\" alt=\"{{ friends.name }}\"><div class=\"live-status\" *ngIf=\"friends.new\">{{friends.new}}</div></a>\n  <div class=\"media-body\">\n    <h6 class=\"chat-header\">{{friends.name}}<small class=\"d-block\" *ngIf=\"friends.time\" [ngClass]=\"{'text-c-green': friends.status, 'text-c-red': !friends.status}\">{{friends.time}}</small></h6>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavBarNavRightNavRightComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul class=\"navbar-nav ml-auto\">\n  <li>\n    <div>\n      <div class=\"btn-group dropleft\">\n        <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        {{selectedSession}}\n        </button>\n        <div class=\"dropdown-menu\">\n          <button type=\"button\" *ngFor=\"let item of AllSession\" (click)=\"LoadSession(item.Id)\" class=\"btn btn-info dropdown-item\">{{item.Session}}</button>\n        </div>\n      </div>\n    </div>\n  </li>\n  <li>\n    <div class=\"dropdown drp-user\" ngbDropdown placement=\"auto\">\n      <a href=\"javascript:\" ngbDropdownToggle>\n        <img src=\"assets/images/user/avatar-1.jpg\" class=\"img-radius wid-40\" alt=\"User-Profile-Image\">\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right profile-notification\" ngbDropdownMenu>\n        <div class=\"pro-head\">\n          <img src=\"assets/images/user/avatar-1.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\n           \n          <span>{{userDetails?.UserName}} ({{role}})</span>\n          <a (click)=\"Logout()\"  class=\"dud-logout\" title=\"Logout\">\n            <i class=\"feather icon-log-out\"></i>\n          </a> \n        </div>\n        <ul class=\"pro-body\">\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-user\"></i> Profile</a></li>\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-mail\"></i> My Messages</a></li>\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-lock\"></i> Lock Screen</a></li>\n        </ul>\n      </div>\n    </div>\n  </li>\n</ul>\n\n<section class=\"header-user-list\" *ngIf=\"visibleUserList && !this.gradientConfig['rtl-layout']\" [ngClass]=\"{'open': visibleUserList}\" [@slideInOutLeft]>\n  <app-chat-user-list (onChatToggle)=\"onChatToggle($event)\" (onChatCollapse)=\"this.visibleUserList = !this.visibleUserList; this.chatMessage = false;\"></app-chat-user-list>\n</section>\n\n<section class=\"header-chat\" *ngIf=\"chatMessage && !this.gradientConfig['rtl-layout']\" [ngClass]=\"{'open': chatMessage}\" [@slideInOutLeft]>\n  <app-chat-msg (onChatToggle)=\"this.chatMessage = !this.chatMessage\" [friendId]=\"friendId\"></app-chat-msg>\n</section>\n\n<section class=\"header-user-list\" *ngIf=\"visibleUserList && this.gradientConfig['rtl-layout']\" [ngClass]=\"{'open': visibleUserList}\" [@slideInOutRight]>\n  <app-chat-user-list (onChatToggle)=\"onChatToggle($event)\" (onChatCollapse)=\"this.visibleUserList = !this.visibleUserList; this.chatMessage = false;\"></app-chat-user-list>\n</section>\n\n<section class=\"header-chat\" *ngIf=\"chatMessage && this.gradientConfig['rtl-layout']\" [ngClass]=\"{'open': chatMessage}\" [@slideInOutRight]>\n  <app-chat-msg (onChatToggle)=\"this.chatMessage = !this.chatMessage\" [friendId]=\"friendId\"></app-chat-msg>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavigationNavContentNavCollapseNavCollapseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"role=='Admin'\">\n  <ng-container *ngIf=\"!item.hidden\">\n    <li *ngIf=\"themeLayout === 'horizontal'\" (mouseenter)=\"navCollapse($event)\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\n      <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\">\n        <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n      </a>\n      <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n    </li>\n    <li *ngIf=\"themeLayout === 'vertical'\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\n      <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\" (click)=\"navCollapse($event)\">\n        <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n      </a>\n      <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n    </li>\n    <ng-template #itemContent>\n        <span class=\"pcoded-micon\" *ngIf=\"item.icon\">\n          <i class=\"{{item.icon}}\"></i>\n        </span>\n        <span class=\"pcoded-mtext\">{{item.title}}\n          <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\n            {{item.badge.title}}\n          </span>\n        </span>\n        <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\n          {{item.badge.title}}\n        </span>\n    </ng-template>\n    <ng-template #subMenuContent>\n      <ul class=\"pcoded-submenu\" [routerLinkActive]=\"['active']\">\n        <ng-container *ngFor=\"let item of item.children\">\n          <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n          <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n          <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n        </ng-container>\n      </ul>\n    </ng-template>\n  </ng-container>\n</div>\n\n<div *ngIf=\"role=='Student'\">\n  <ng-container *ngIf=\"!Stuitem.hidden\">\n    <li *ngIf=\"themeLayout === 'horizontal'\" (mouseenter)=\"navCollapse($event)\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\n      <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\">\n        <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n      </a>\n      <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n    </li>\n    <li *ngIf=\"themeLayout === 'vertical'\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\n      <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\" (click)=\"navCollapse($event)\">\n        <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n      </a>\n      <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n    </li>\n    <ng-template #itemContent>\n        <span class=\"pcoded-micon\" *ngIf=\"Stuitem.icon\">\n          <i class=\"{{Stuitem.icon}}\"></i>\n        </span>\n        <span class=\"pcoded-mtext\">{{Stuitem.title}}\n          <span *ngIf=\"Stuitem.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"Stuitem.badge.type\">\n            {{Stuitem.badge.title}}\n          </span>\n        </span>\n        <span *ngIf=\"Stuitem.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"Stuitem.badge.type\">\n          {{Stuitem.badge.title}}\n        </span>\n    </ng-template>\n    <ng-template #subMenuContent>\n      <ul class=\"pcoded-submenu\" [routerLinkActive]=\"['active']\">\n        <ng-container *ngFor=\"let Stuitem of Stuitem.children\">\n          <app-nav-group *ngIf=\"Stuitem.type=='group'\" [Stuitem]=\"Stuitem\"></app-nav-group>\n          <app-nav-collapse *ngIf=\"Stuitem.type=='collapse'\" [Stuitem]=\"Stuitem\"></app-nav-collapse>\n          <app-nav-item *ngIf=\"Stuitem.type=='item'\" [Stuitem]=\"Stuitem\"></app-nav-item>\n        </ng-container>\n      </ul>\n    </ng-template>\n  </ng-container>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavigationNavContentNavContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"role=='Admin'\">\n  <perfect-scrollbar *ngIf=\"this.gradientConfig['layout'] === 'vertical'\" (clickOutside)=\"navMob()\" [excludeBeforeClick]=\"true\" [exclude]=\"'#mobile-collapse'\" id=\"nav-ps-gradient-able\" ngClass=\"gradientscroll\" [style.max-width]=\"'300px'\" [style.max-height]=\"'calc(100vh - 60px)'\" [usePSClass]=\"'gradient-able'\" [disabled]=\"null\">\n    <div class=\"navbar-content\">\n      <ul class=\"nav pcoded-inner-navbar\" (clickOutside)=\"fireOutClick()\">\n        <ng-container *ngFor=\"let item of navigation\">\n          <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n          <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n          <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n        </ng-container>\n      </ul>\n      <app-card [hidHeader]=\"true\" cardClass=\"text-center\">\n        <i class=\"feather icon-sunset f-40\"></i>\n        <h6 class=\"mt-3\">Help?</h6>\n        <p>Please contact us on our email for need any support</p>\n        <a href=\"javascript:\" target=\"_blank\" class=\"btn btn-primary btn-sm text-white m-0\">Support</a>\n      </app-card>\n    </div>\n  </perfect-scrollbar>\n  \n  <div *ngIf=\"this.gradientConfig['layout'] === 'horizontal'\" #navbarWrapper class=\"navbar-content sidenav-horizontal\" id=\"layout-sidenav\">\n    <a href=\"javascript:\" class=\"sidenav-horizontal-prev\" [ngClass]=\"prevDisabled\" (click)=\"scrollMinus()\"></a>\n    <div  class=\"sidenav-horizontal-wrapper\"><!-- add 14-4 viral -->\n      <ul #navbarContent id=\"side-nav-horizontal\" class=\"nav pcoded-inner-navbar sidenav-inner\" (clickOutside)=\"fireLeave()\" (mouseleave)=\"fireLeave()\">\n        <ng-container *ngFor=\"let item of navigation\">\n          <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n          <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n          <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n        </ng-container>\n      </ul>\n    </div>\n    <a href=\"javascript:\" class=\"sidenav-horizontal-next\" [ngClass]=\"nextDisabled\" (click)=\"scrollPlus()\"></a>\n  </div>\n</div>\n\n\n<div *ngIf=\"role=='Student'\">\n  <perfect-scrollbar *ngIf=\"this.gradientConfig['layout'] === 'vertical'\" (clickOutside)=\"navMob()\" [excludeBeforeClick]=\"true\" [exclude]=\"'#mobile-collapse'\" id=\"nav-ps-gradient-able\" ngClass=\"gradientscroll\" [style.max-width]=\"'300px'\" [style.max-height]=\"'calc(100vh - 60px)'\" [usePSClass]=\"'gradient-able'\" [disabled]=\"null\">\n    <div class=\"navbar-content\">\n      <ul class=\"nav pcoded-inner-navbar\" (clickOutside)=\"fireOutClick()\">\n        <ng-container *ngFor=\"let item of Stunavigation\">\n          <app-nav-group *ngIf=\"item.type=='group'\" [Stuitem]=\"item\"></app-nav-group>\n          <app-nav-collapse *ngIf=\"item.type=='collapse'\" [Stuitem]=\"item\"></app-nav-collapse>\n          <app-nav-item *ngIf=\"item.type=='item'\" [Stuitem]=\"item\"></app-nav-item>\n        </ng-container>\n      </ul>\n      <app-card [hidHeader]=\"true\" cardClass=\"text-center\">\n        <i class=\"feather icon-sunset f-40\"></i>\n        <h6 class=\"mt-3\">Help?</h6>\n        <p>Please contact us on our email for need any support</p>\n        <a href=\"javascript:\" target=\"_blank\" class=\"btn btn-primary btn-sm text-white m-0\">Support</a>\n      </app-card>\n    </div>\n  </perfect-scrollbar>\n  \n  <div *ngIf=\"this.gradientConfig['layout'] === 'horizontal'\" #navbarWrapper class=\"navbar-content sidenav-horizontal\" id=\"layout-sidenav\">\n    <a href=\"javascript:\" class=\"sidenav-horizontal-prev\" [ngClass]=\"prevDisabled\" (click)=\"scrollMinus()\"></a>\n    <div  class=\"sidenav-horizontal-wrapper\"><!-- add 14-4 viral -->\n      <ul #navbarContent id=\"side-nav-horizontal\" class=\"nav pcoded-inner-navbar sidenav-inner\" (clickOutside)=\"fireLeave()\" (mouseleave)=\"fireLeave()\">\n        <ng-container *ngFor=\"let Stuitem of Stunavigation\">\n          <app-nav-group *ngIf=\"Stuitem.type=='group'\" [Stuitem]=\"Stuitem\"></app-nav-group>\n          <app-nav-collapse *ngIf=\"Stuitem.type=='collapse'\" [Stuitem]=\"Stuitem\"></app-nav-collapse>\n          <app-nav-item *ngIf=\"Stuitem.type=='item'\" [Stuitem]=\"Stuitem\"></app-nav-item>\n        </ng-container>\n      </ul>\n    </div>\n    <a href=\"javascript:\" class=\"sidenav-horizontal-next\" [ngClass]=\"nextDisabled\" (click)=\"scrollPlus()\"></a>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavigationNavContentNavGroupNavGroupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"role=='Admin'\">\r\n  <ng-container *ngIf=\"!item.hidden\">\r\n    <li class=\"nav-item pcoded-menu-caption\"><label>{{item.title}}</label></li>\r\n    <ng-container *ngFor=\"let item of item.children\">\r\n      <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n      <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n      <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n    </ng-container>\r\n  </ng-container>\r\n</div>\r\n\r\n<div *ngIf=\"role=='Student'\">\r\n  <ng-container  *ngIf=\"!Stuitem.hidden\">\r\n    <li class=\"nav-item pcoded-menu-caption\"><label>{{Stuitem.title}}</label></li>\r\n    <ng-container *ngFor=\"let Stuitem of Stuitem.children\">\r\n      <app-nav-group *ngIf=\"Stuitem.type=='group'\" [Stuitem]=\"Stuitem\"></app-nav-group>\r\n      <app-nav-collapse *ngIf=\"Stuitem.type=='collapse'\" [Stuitem]=\"Stuitem\"></app-nav-collapse>\r\n      <app-nav-item *ngIf=\"Stuitem.type=='item'\" [Stuitem]=\"Stuitem\"></app-nav-item>\r\n    </ng-container>\r\n  </ng-container>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavigationNavContentNavItemNavItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"role=='Admin'\">\n  <ng-container *ngIf=\"!item.hidden\">\n    <li [ngClass]=\"item.classes\" *ngIf=\"item.url && !item.external\" [routerLinkActive]=\"['active']\">\n      <a class=\"nav-link\" [target]=\"item.target ? '_blank' : '_self'\" [routerLink]=\"[item.url]\" (click)=\"closeOtherMenu($event)\">\n        <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\n        <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\n        <ng-template #directTitle>\n          {{item.title}}\n        </ng-template>\n        <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\n      </a>\n    </li>\n    <li [ngClass]=\"item.classes\" *ngIf=\"item.url && item.external\">\n      <a [target]=\"item.target ? '_blank' : '_self'\" [href]=\"item.url\">\n        <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\n        <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\n        <ng-template #directTitle>\n          {{item.title}}\n        </ng-template>\n        <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\n      </a>\n    </li>\n    <ng-template #itemIcon>\n      <span *ngIf=\"item.icon\" class=\"pcoded-micon\"><i class=\"feather\" [ngClass]=\"item.icon\"></i></span>\n    </ng-template>\n    <ng-template #itemBadge>\n      <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\n        {{item.badge.title}}\n      </span>\n      <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\n        {{item.badge.title}}\n      </span>\n    </ng-template>\n  </ng-container>\n</div>\n\n<div *ngIf=\"role=='Student'\">\n  <ng-container *ngIf=\"!Stuitem.hidden\">\n    <li [ngClass]=\"Stuitem.classes\" *ngIf=\"Stuitem.url && !Stuitem.external\" [routerLinkActive]=\"['active']\">\n      <a class=\"nav-link\" [target]=\"Stuitem.target ? '_blank' : '_self'\" [routerLink]=\"[Stuitem.url]\" (click)=\"closeOtherMenu($event)\">\n        <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\n        <span class=\"pcoded-mtext\" *ngIf=\"Stuitem.icon; else directTitle\">{{ Stuitem.title }}</span>\n        <ng-template #directTitle>\n          {{Stuitem.title}}\n        </ng-template>\n        <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\n      </a>\n    </li>\n    <li [ngClass]=\"Stuitem.classes\" *ngIf=\"Stuitem.url && Stuitem.external\">\n      <a [target]=\"Stuitem.target ? '_blank' : '_self'\" [href]=\"Stuitem.url\">\n        <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\n        <span class=\"pcoded-mtext\" *ngIf=\"Stuitem.icon; else directTitle\">{{ Stuitem.title }}</span>\n        <ng-template #directTitle>\n          {{Stuitem.title}}\n        </ng-template>\n        <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\n      </a>\n    </li>\n    <ng-template #itemIcon>\n      <span *ngIf=\"Stuitem.icon\" class=\"pcoded-micon\"><i class=\"feather\" [ngClass]=\"Stuitem.icon\"></i></span>\n    </ng-template>\n    <ng-template #itemBadge>\n      <span *ngIf=\"Stuitem.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\n        {{Stuitem.badge.title}}\n      </span>\n      <span *ngIf=\"Stuitem.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"Stuitem.badge.type\">\n        {{Stuitem.badge.title}}\n      </span>\n    </ng-template>\n  </ng-container>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/navigation.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/navigation.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAdminNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"navbar-wrapper\" [ngClass]=\"{'container': this.gradientConfig.layout === 'horizontal' && this.gradientConfig.subLayout === 'horizontal-2'}\">\n  <app-nav-content (onNavMobCollapse)=\"navMobCollapse()\"></app-nav-content>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/auth/auth.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/auth/auth.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeLayoutAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/breadcrumb/breadcrumb.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/breadcrumb/breadcrumb.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeSharedComponentsBreadcrumbBreadcrumbComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"this.navigationList\">\n  <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\">\n    <div class=\"page-header\" *ngIf=\"last && breadcrumb.breadcrumbs !== false\">\n      <div class=\"page-block\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-md-12\">\n            <div class=\"page-header-title\">\n              <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\"><h5 class=\"m-b-10\" *ngIf=\"last\">{{breadcrumb.title}}</h5></ng-container>\n            </div>\n            <ul class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\">\n                <a [routerLink]=\"['/dashboard/analytics/']\" *ngIf=\"type === 'theme2'\"><i class=\"feather icon-home\"></i></a>\n                <a [routerLink]=\"['/dashboard/analytics/']\" *ngIf=\"type === 'theme1'\">Home</a>\n              </li>\n              <ng-container *ngFor=\"let breadcrumb of navigationList\">\n                <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url !== false\"><a [routerLink]=\"breadcrumb.url\">{{breadcrumb.title}}</a></li>\n                <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url === false\"><a href=\"javascript:\">{{breadcrumb.title}}</a></li>\n              </ng-container>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/card/card.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/card/card.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeSharedComponentsCardCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\" [ngClass]=\"cardClass\" [@cardRemove]=\"cardRemove\" #toAnimate animates animatesInitMode=\"show\" [animatesOnInit]=\"{useVisibility: false, disabled: true}\">\n  <div class=\"card-header\" *ngIf=\"!hidHeader\" [ngClass]=\"headerClass\">\n    <h5 *ngIf=\"!customHeader\">{{ cardTitle }}</h5>\n    <p *ngIf=\"!customHeader && cardCaption\" [ngClass]=\"captionClass\">{{cardCaption}}</p>\n    <div class=\"card-header-right\" *ngIf=\"this.options && !customHeader\">\n      <div class=\"btn-group card-option dropdown\" ngbDropdown>\n        <button type=\"button\" class=\"btn dropdown-toggle btn-icon\" ngbDropdownToggle>\n          <i class=\"feather icon-more-horizontal\"></i>\n        </button>\n        <ul class=\"list-unstyled card-option dropdown-menu dropdown-menu-right\" ngbDropdownMenu>\n          <li class=\"dropdown-item full-card\" (click)=\"fullCardToggle(toAnimate, '', true)\"><a href=\"javascript:\"><span><i class=\"feather\" [ngClass]=\"fullIcon\"></i> {{this.cardClass === 'full-card' ? 'Restore' : 'Maximize'}}</span></a></li>\n          <li class=\"dropdown-item minimize-card\" (click)=\"collapsedCardToggle()\"><a href=\"javascript:\"><span><i class=\"feather\" [ngClass]=\"collapsedIcon\"></i> {{this.collapsedCard === 'collapsed' ? 'Expand' : 'Collapse'}} </span>\n            <span style=\"display:none\"><i class=\"feather icon-plus\"></i></span></a></li>\n          <li class=\"dropdown-item reload-card\" (click)=\"cardRefresh($event)\"><a href=\"javascript:\"><i class=\"feather icon-refresh-cw\"></i> Reload</a></li>\n          <li class=\"dropdown-item close-card\" (click)=\"cardRemoveAction()\"><a href=\"javascript:\"><i class=\"feather icon-trash\"></i> Remove</a></li>\n        </ul>\n      </div>\n    </div>\n    <ng-content *ngIf=\"customHeader\" select=\".app-card-header\"></ng-content>\n  </div>\n  <div [@collapsedCard]=\"collapsedCard\" *ngIf=\"this.options; else subMenuContent\">\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n  </div>\n  <ng-template #subMenuContent>\n    <div class=\"card-body\" [ngClass]=\"blockClass\">\n      <ng-content></ng-content>\n    </div>\n  </ng-template>\n  <div *ngIf=\"isCardFooter\" class=\"card-footer\" [ngClass]=\"footerClass\">\n    <ng-content select=\".app-card-footer\"></ng-content>\n  </div>\n  <div class=\"card-loader\" *ngIf=\"loadCard\"><i class=\"pct-loader1 anim-rotate\"></i></div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeSharedComponentsChartApexChartApexChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"{{this.chartID}}\"></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/spinner/spinner.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/spinner/spinner.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeSharedComponentsSpinnerSpinnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\n    <div class=\"loader-bg\">\n        <!-- material-line -->\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/Models/Pagination.ts":
  /*!**************************************!*\
    !*** ./src/app/Models/Pagination.ts ***!
    \**************************************/

  /*! exports provided: PaginatedResult */

  /***/
  function srcAppModelsPaginationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatedResult", function () {
      return PaginatedResult;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PaginatedResult = function PaginatedResult() {
      _classCallCheck(this, PaginatedResult);
    };
    /***/

  },

  /***/
  "./src/app/Shared/select-required-validator.directive.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Shared/select-required-validator.directive.ts ***!
    \***************************************************************/

  /*! exports provided: SelectRequiredValidatorDirective */

  /***/
  function srcAppSharedSelectRequiredValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectRequiredValidatorDirective", function () {
      return SelectRequiredValidatorDirective;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var SelectRequiredValidatorDirective_1;

    var SelectRequiredValidatorDirective = SelectRequiredValidatorDirective_1 = /*#__PURE__*/function () {
      function SelectRequiredValidatorDirective() {
        _classCallCheck(this, SelectRequiredValidatorDirective);
      }

      _createClass(SelectRequiredValidatorDirective, [{
        key: "validate",
        value: function validate(control) {
          return control.value === '-1' ? {
            'defaultSelected': true
          } : null;
        }
      }]);

      return SelectRequiredValidatorDirective;
    }();

    SelectRequiredValidatorDirective = SelectRequiredValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appSelectRequiredValidator]',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: SelectRequiredValidatorDirective_1,
        multi: true
      }]
    })], SelectRequiredValidatorDirective);
    /***/
  },

  /***/
  "./src/app/_gaurd/Auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/_gaurd/Auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGaurd */

  /***/
  function srcApp_gaurdAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGaurd", function () {
      return AuthGaurd;
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


    var _services_AuthServices_Auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/AuthServices/Auth.service */
    "./src/app/services/AuthServices/Auth.service.ts");

    var AuthGaurd = /*#__PURE__*/function () {
      function AuthGaurd(_router, _services) {
        _classCallCheck(this, AuthGaurd);

        this._router = _router;
        this._services = _services;
      }

      _createClass(AuthGaurd, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (localStorage.getItem('token') != null) {
            var role = next.data['permittedRoles'];

            if (role) {
              if (this._services.roleMatch(role)) return true;else {
                this._router.navigateByUrl('/Forbidden');

                return false;
              }
            }

            return true;
          } else {
            this._router.navigate(['/auth/signin']);

            return false;
          }
        }
      }]);

      return AuthGaurd;
    }();

    AuthGaurd.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_AuthServices_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AuthGaurd = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGaurd);
    /***/
  },

  /***/
  "./src/app/_resolver/stuQuickAdmission.resolver.ts":
  /*!*********************************************************!*\
    !*** ./src/app/_resolver/stuQuickAdmission.resolver.ts ***!
    \*********************************************************/

  /*! exports provided: stuQuickAdmission */

  /***/
  function srcApp_resolverStuQuickAdmissionResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stuQuickAdmission", function () {
      return stuQuickAdmission;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/observable/of */
    "./node_modules/rxjs-compat/_esm2015/add/observable/of.js");
    /* harmony import */


    var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/operator/catch */
    "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
    /* harmony import */


    var _services_classlevel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/classlevel.service */
    "./src/app/services/classlevel.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var stuQuickAdmission = /*#__PURE__*/function () {
      function stuQuickAdmission(userService, router) {
        _classCallCheck(this, stuQuickAdmission);

        this.userService = userService;
        this.router = router;
        this.pageSize = 2;
        this.pageNumber = 1;
      }

      _createClass(stuQuickAdmission, [{
        key: "resolve",
        value: function resolve(route) {
          var _this = this;

          return this.userService.getQuickAdmiStudent(this.sessionId, this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) {
            _this.router.navigate(['/home']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
          }));
        }
      }]);

      return stuQuickAdmission;
    }();

    stuQuickAdmission.ctorParameters = function () {
      return [{
        type: _services_classlevel_service__WEBPACK_IMPORTED_MODULE_6__["ClasslevelService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    stuQuickAdmission = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], stuQuickAdmission);
    /***/
  },

  /***/
  "./src/app/app-config.ts":
  /*!*******************************!*\
    !*** ./src/app/app-config.ts ***!
    \*******************************/

  /*! exports provided: GradientConfig */

  /***/
  function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GradientConfig", function () {
      return GradientConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var GradientConfig = function GradientConfig() {
      _classCallCheck(this, GradientConfig);
    };

    GradientConfig.config = {
      layout: 'vertical',
      subLayout: '',
      collapseMenu: false,
      layoutType: 'menu-light',
      headerBackColor: 'header-yellow',
      // header-green, header-yellow, header-orchidgreen, header-indigogreen, header-darkgreen, header-darkblue
      rtlLayout: true,
      navFixedLayout: true,
      headerFixedLayout: true,
      boxLayout: false
    };
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./theme/layout/admin/admin.component */
    "./src/app/theme/layout/admin/admin.component.ts");
    /* harmony import */


    var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./theme/layout/auth/auth.component */
    "./src/app/theme/layout/auth/auth.component.ts");
    /* harmony import */


    var _gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./_gaurd/Auth.guard */
    "./src/app/_gaurd/Auth.guard.ts");

    var routes = [{
      path: '',
      component: _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
      canActivate: [_gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGaurd"]],
      children: [{
        path: '',
        redirectTo: '/layout/fixed',
        pathMatch: 'full',
        canActivate: [_gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGaurd"]],
        data: {
          permittedRoles: ['Admin']
        }
      }, {
        path: '',
        redirectTo: '/layout/StuDash',
        pathMatch: 'full',
        canActivate: [_gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGaurd"]],
        data: {
          permittedRoles: ['Student']
        }
      }, {
        path: 'layout',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-pages-layout-layout-module */
          "demo-pages-layout-layout-module").then(__webpack_require__.bind(null,
          /*! ./demo/pages/layout/layout.module */
          "./src/app/demo/pages/layout/layout.module.ts")).then(function (module) {
            return module.LayoutModule;
          });
        }
      }, {
        path: 'basic',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-ui-elements-ui-basic-ui-basic-module */
          "demo-ui-elements-ui-basic-ui-basic-module").then(__webpack_require__.bind(null,
          /*! ./demo/ui-elements/ui-basic/ui-basic.module */
          "./src/app/demo/ui-elements/ui-basic/ui-basic.module.ts")).then(function (module) {
            return module.UiBasicModule;
          });
        }
      }, {
        path: 'forms',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-pages-form-elements-form-elements-module */
          "demo-pages-form-elements-form-elements-module").then(__webpack_require__.bind(null,
          /*! ./demo/pages/form-elements/form-elements.module */
          "./src/app/demo/pages/form-elements/form-elements.module.ts")).then(function (module) {
            return module.FormElementsModule;
          });
        }
      }, {
        path: 'tbl-bootstrap',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-pages-tables-tbl-bootstrap-tbl-bootstrap-module */
          "demo-pages-tables-tbl-bootstrap-tbl-bootstrap-module").then(__webpack_require__.bind(null,
          /*! ./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module */
          "./src/app/demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module.ts")).then(function (module) {
            return module.TblBootstrapModule;
          });
        }
      }, {
        path: 'charts',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-pages-core-chart-core-chart-module */
          "demo-pages-core-chart-core-chart-module").then(__webpack_require__.bind(null,
          /*! ./demo/pages/core-chart/core-chart.module */
          "./src/app/demo/pages/core-chart/core-chart.module.ts")).then(function (module) {
            return module.CoreChartModule;
          });
        }
      }, {
        path: 'maps',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-pages-core-maps-core-maps-module */
          "demo-pages-core-maps-core-maps-module").then(__webpack_require__.bind(null,
          /*! ./demo/pages/core-maps/core-maps.module */
          "./src/app/demo/pages/core-maps/core-maps.module.ts")).then(function (module) {
            return module.CoreMapsModule;
          });
        }
      }, {
        path: 'Forbidden',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-pages-Forbidden-Forbidden-module */
          "demo-pages-Forbidden-Forbidden-module").then(__webpack_require__.bind(null,
          /*! ./demo/pages/Forbidden/Forbidden.module */
          "./src/app/demo/pages/Forbidden/Forbidden.module.ts")).then(function (module) {
            return module.ForbiddenModule;
          });
        }
      }, {
        path: 'Acadmic',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-pages-Acadmics-Acadmic-module */
          "demo-pages-Acadmics-Acadmic-module").then(__webpack_require__.bind(null,
          /*! ./demo/pages/Acadmics/Acadmic.module */
          "./src/app/demo/pages/Acadmics/Acadmic.module.ts")).then(function (module) {
            return module.AcadmicModule;
          });
        }
      }, {
        path: 'ZoomLiveClass',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-pages-ZoomLiveClass-ZoomLiveClass-module */
          "demo-pages-ZoomLiveClass-ZoomLiveClass-module").then(__webpack_require__.bind(null,
          /*! ./demo/pages/ZoomLiveClass/ZoomLiveClass.module */
          "./src/app/demo/pages/ZoomLiveClass/ZoomLiveClass.module.ts")).then(function (module) {
            return module.ZoomLiveClassModule;
          });
        }
      }]
    }, {
      path: '',
      component: _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
      children: [{
        path: 'auth',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-pages-authentication-authentication-module */
          "demo-pages-authentication-authentication-module").then(__webpack_require__.bind(null,
          /*! ./demo/pages/authentication/authentication.module */
          "./src/app/demo/pages/authentication/authentication.module.ts")).then(function (module) {
            return module.AuthenticationModule;
          });
        }
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
              return;
            }

            window.scrollTo(0, 0);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./theme/layout/admin/admin.component */
    "./src/app/theme/layout/admin/admin.component.ts");
    /* harmony import */


    var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./theme/layout/auth/auth.component */
    "./src/app/theme/layout/auth/auth.component.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/navigation.component */
    "./src/app/theme/layout/admin/navigation/navigation.component.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/nav-content/nav-content.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/nav-content/nav-group/nav-group.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/nav-content/nav-item/nav-item.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-bar.component */
    "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-left/nav-left.component */
    "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component */
    "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-right/nav-right.component */
    "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_right_chat_user_list_chat_user_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component */
    "./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.ts");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_right_chat_user_list_friend_friend_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component */
    "./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.ts");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_right_chat_msg_chat_msg_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component */
    "./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.ts");
    /* harmony import */


    var _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./theme/layout/admin/configuration/configuration.component */
    "./src/app/theme/layout/admin/configuration/configuration.component.ts");
    /* harmony import */


    var _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./theme/shared/full-screen/toggle-full-screen */
    "./src/app/theme/shared/full-screen/toggle-full-screen.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/navigation */
    "./src/app/theme/layout/admin/navigation/navigation.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _Shared_select_required_validator_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./Shared/select-required-validator.directive */
    "./src/app/Shared/select-required-validator.directive.ts");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var _resolver_stuQuickAdmission_resolver__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./_resolver/stuQuickAdmission.resolver */
    "./src/app/_resolver/stuQuickAdmission.resolver.ts");
    /* harmony import */


    var _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-schedule */
    "./node_modules/@syncfusion/ej2-angular-schedule/@syncfusion/ej2-angular-schedule.js");
    /* harmony import */


    var _gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./_gaurd/Auth.guard */
    "./src/app/_gaurd/Auth.guard.ts");
    /* harmony import */


    var _services_AuthServices_Auth_Insecptors__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./services/AuthServices/Auth.Insecptors */
    "./src/app/services/AuthServices/Auth.Insecptors.ts");
    /* harmony import */


    var _services_AuthServices_Auth_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./services/AuthServices/Auth.service */
    "./src/app/services/AuthServices/Auth.service.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_Studentnavigation__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/Studentnavigation */
    "./src/app/theme/layout/admin/navigation/Studentnavigation.ts");
    /* Menu Items */


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"], _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_10__["NavContentComponent"], _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_11__["NavGroupComponent"], _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_12__["NavCollapseComponent"], _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_13__["NavItemComponent"], _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"], _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_15__["NavLeftComponent"], _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_16__["NavSearchComponent"], _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_17__["NavRightComponent"], _theme_layout_admin_nav_bar_nav_right_chat_user_list_chat_user_list_component__WEBPACK_IMPORTED_MODULE_18__["ChatUserListComponent"], _theme_layout_admin_nav_bar_nav_right_chat_user_list_friend_friend_component__WEBPACK_IMPORTED_MODULE_19__["FriendComponent"], _theme_layout_admin_nav_bar_nav_right_chat_msg_chat_msg_component__WEBPACK_IMPORTED_MODULE_20__["ChatMsgComponent"], _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_21__["ConfigurationComponent"], _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_22__["ToggleFullScreenDirective"], _Shared_select_required_validator_directive__WEBPACK_IMPORTED_MODULE_28__["SelectRequiredValidatorDirective"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_31__["ScheduleAllModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbTabsetModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_27__["ToastrModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_29__["PaginationModule"].forRoot()],
      providers: [_theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_24__["NavigationItem"], _theme_layout_admin_navigation_Studentnavigation__WEBPACK_IMPORTED_MODULE_35__["StudentNavigationItem"], _resolver_stuQuickAdmission_resolver__WEBPACK_IMPORTED_MODULE_30__["stuQuickAdmission"], _gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGaurd"], _services_AuthServices_Auth_service__WEBPACK_IMPORTED_MODULE_34__["AuthService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HTTP_INTERCEPTORS"],
        useClass: _services_AuthServices_Auth_Insecptors__WEBPACK_IMPORTED_MODULE_33__["AuthInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/fack-db/friends-list.ts":
  /*!*****************************************!*\
    !*** ./src/app/fack-db/friends-list.ts ***!
    \*****************************************/

  /*! exports provided: FriendsList */

  /***/
  function srcAppFackDbFriendsListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendsList", function () {
      return FriendsList;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var FriendsList = function FriendsList() {
      _classCallCheck(this, FriendsList);
    };

    FriendsList.friends = [{
      id: 1,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Josephin Doe',
      "new": 3,
      status: 1,
      time: 'typing'
    }, {
      id: 2,
      photo: 'assets/images/user/avatar-2.jpg',
      name: 'Lary Doe',
      "new": 1,
      status: 1,
      time: 'online'
    }, {
      id: 3,
      photo: 'assets/images/user/avatar-3.jpg',
      name: 'Alice',
      status: 1,
      time: 'online'
    }, {
      id: 4,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Alia',
      status: 0,
      "new": 1,
      time: '10 min ago'
    }, {
      id: 5,
      photo: 'assets/images/user/avatar-4.jpg',
      name: 'Suzen',
      status: 0,
      time: '15 min ago'
    }, {
      id: 1,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Josephin Doe',
      "new": 3,
      status: 1,
      time: 'typing'
    }, {
      id: 2,
      photo: 'assets/images/user/avatar-2.jpg',
      name: 'Lary Doe',
      "new": 1,
      status: 1,
      time: 'online'
    }, {
      id: 3,
      photo: 'assets/images/user/avatar-3.jpg',
      name: 'Alice',
      status: 1,
      time: 'online'
    }, {
      id: 4,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Alia',
      status: 0,
      "new": 1,
      time: '10 min ago'
    }, {
      id: 5,
      photo: 'assets/images/user/avatar-4.jpg',
      name: 'Suzen',
      status: 0,
      time: '15 min ago'
    }, {
      id: 1,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Josephin Doe',
      "new": 3,
      status: 1,
      time: 'typing'
    }, {
      id: 2,
      photo: 'assets/images/user/avatar-2.jpg',
      name: 'Lary Doe',
      "new": 1,
      status: 1,
      time: 'online'
    }, {
      id: 3,
      photo: 'assets/images/user/avatar-3.jpg',
      name: 'Alice',
      status: 1,
      time: 'online'
    }, {
      id: 4,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Alia',
      status: 0,
      "new": 1,
      time: '10 min ago'
    }, {
      id: 5,
      photo: 'assets/images/user/avatar-4.jpg',
      name: 'Suzen',
      status: 0,
      time: '15 min ago'
    }, {
      id: 1,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Josephin Doe',
      "new": 3,
      status: 1,
      time: 'typing'
    }, {
      id: 2,
      photo: 'assets/images/user/avatar-2.jpg',
      name: 'Lary Doe',
      "new": 1,
      status: 1,
      time: 'online'
    }, {
      id: 3,
      photo: 'assets/images/user/avatar-3.jpg',
      name: 'Alice',
      status: 1,
      time: 'online'
    }, {
      id: 4,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Alia',
      status: 0,
      "new": 1,
      time: '10 min ago'
    }, {
      id: 5,
      photo: 'assets/images/user/avatar-4.jpg',
      name: 'Suzen',
      status: 0,
      time: '15 min ago'
    }, {
      id: 1,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Josephin Doe',
      "new": 3,
      status: 1,
      time: 'typing'
    }, {
      id: 2,
      photo: 'assets/images/user/avatar-2.jpg',
      name: 'Lary Doe',
      "new": 1,
      status: 1,
      time: 'online'
    }, {
      id: 3,
      photo: 'assets/images/user/avatar-3.jpg',
      name: 'Alice',
      status: 1,
      time: 'online'
    }, {
      id: 4,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Alia',
      status: 0,
      "new": 1,
      time: '10 min ago'
    }, {
      id: 5,
      photo: 'assets/images/user/avatar-4.jpg',
      name: 'Suzen',
      status: 0,
      time: '15 min ago'
    }];
    /***/
  },

  /***/
  "./src/app/fack-db/user-chat.ts":
  /*!**************************************!*\
    !*** ./src/app/fack-db/user-chat.ts ***!
    \**************************************/

  /*! exports provided: UserChat */

  /***/
  function srcAppFackDbUserChatTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserChat", function () {
      return UserChat;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // type 0-send, 1-received


    var UserChat = function UserChat() {
      _classCallCheck(this, UserChat);
    };

    UserChat.chat = [{
      friend_id: 1,
      friend_photo: 'assets/images/avatar-3.jpg',
      messages: [{
        type: 1,
        msg: 'I\'m just looking around. Will you tell me something about yourself?',
        time: '8:20 a.m'
      }, {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      }, {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }]
    }, {
      friend_id: 2,
      friend_photo: 'assets/images/avatar-2.jpg',
      messages: [{
        type: 1,
        msg: 'Hiii!!! Good Morning',
        time: '6:48 a.m'
      }, {
        type: 0,
        msg: 'Hello, Very Good Morning',
        time: '6:50 a.m'
      }, {
        type: 0,
        msg: 'How are You?',
        time: '8:50 a.m'
      }, {
        type: 1,
        msg: 'Fine, What do you do?',
        time: '8:51 a.m'
      }]
    }, {
      friend_id: 3,
      friend_photo: 'assets/images/avatar-4.jpg',
      messages: [{
        type: 1,
        msg: 'I\'m just looking around. Will you tell me something about yourself?',
        time: '8:20 a.m'
      }, {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      }, {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }]
    }, {
      friend_id: 4,
      friend_photo: 'assets/images/avatar-3.jpg',
      messages: [{
        type: 1,
        msg: 'Hiii!!! Good Morning',
        time: '6:48 a.m'
      }, {
        type: 0,
        msg: 'Hello, Very Good Morning',
        time: '6:50 a.m'
      }, {
        type: 0,
        msg: 'How are You?',
        time: '8:50 a.m'
      }, {
        type: 1,
        msg: 'Fine, What do you do?',
        time: '8:51 a.m'
      }]
    }, {
      friend_id: 5,
      friend_photo: 'assets/images/avatar-2.jpg',
      messages: [{
        type: 1,
        msg: 'I\'m just looking around. Will you tell me something about yourself?',
        time: '8:20 a.m'
      }, {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      }, {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }]
    }];
    /***/
  },

  /***/
  "./src/app/services/AdminServices/Dashboard.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/AdminServices/Dashboard.service.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppServicesAdminServicesDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService(_http) {
        _classCallCheck(this, DashboardService);

        this._http = _http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
      } // Get Total Student Count


      _createClass(DashboardService, [{
        key: "GetStudentCount",
        value: function GetStudentCount(SessionId) {
          var sessionIds = parseInt(SessionId);
          return this._http.get(this.baseURL + 'DashBoardAdmin/AllStudentCount/' + sessionIds);
        }
      }, {
        key: "getActiveSession",
        value: function getActiveSession() {
          return this._http.get(this.baseURL + 'Session/ActiveSession');
        }
      }, {
        key: "TodayAdmissionCountCount",
        value: function TodayAdmissionCountCount() {
          return this._http.get(this.baseURL + 'DashBoardAdmin/TodayAdmissionCount');
        }
      }, {
        key: "getSession",
        value: function getSession() {
          return this._http.get(this.baseURL + 'Session');
        }
      }, {
        key: "ActivateSession",
        value: function ActivateSession(id) {
          return this._http.post(this.baseURL + 'DashBoardAdmin/Active' + '/' + id, {});
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DashboardService);
    /***/
  },

  /***/
  "./src/app/services/AuthServices/Auth.Insecptors.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/AuthServices/Auth.Insecptors.ts ***!
    \**********************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppServicesAuthServicesAuthInsecptorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(router) {
        _classCallCheck(this, AuthInterceptor);

        this.router = router;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this2 = this;

          if (localStorage.getItem('token') != null) {
            var clonedReq = req.clone({
              headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (succ) {}, function (err) {
              if (err.status == 401) {
                localStorage.removeItem('token');

                _this2.router.navigateByUrl('/auth/signin');
              } else if (err.status == 403) {
                localStorage.removeItem('token');

                _this2.router.navigateByUrl('/Forbidden');
              }
            }));
          } else return next.handle(req.clone());
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/services/AuthServices/Auth.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/AuthServices/Auth.service.ts ***!
    \*******************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(_http) {
        _classCallCheck(this, AuthService);

        this._http = _http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
      }

      _createClass(AuthService, [{
        key: "register",
        value: function register(authRes, role) {
          return this._http.post(this.baseURL + 'ApplicationManager/register' + '/' + role, authRes);
        }
      }, {
        key: "Sturegister",
        value: function Sturegister(authRes, role, admissionNo) {
          return this._http.post(this.baseURL + 'ApplicationManager/register' + '/' + role + '/' + admissionNo, authRes);
        }
      }, {
        key: "login",
        value: function login(formData, role) {
          return this._http.post(this.baseURL + 'ApplicationManager/login' + '/' + role, formData);
        }
      }, {
        key: "GetUserProfile",
        value: function GetUserProfile() {
          return this._http.get(this.baseURL + 'UserProfile');
        }
      }, {
        key: "roleMatch",
        value: function roleMatch(allowedRoles) {
          var isMatch = false;
          var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
          var userRole = payLoad.role;
          allowedRoles.forEach(function (element) {
            if (userRole == element) {
              isMatch = true;
              return false;
            }
          });
          return true;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/classlevel.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/classlevel.service.ts ***!
    \************************************************/

  /*! exports provided: ClasslevelService */

  /***/
  function srcAppServicesClasslevelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClasslevelService", function () {
      return ClasslevelService;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/operator/catch */
    "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
    /* harmony import */


    var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/add/observable/throw */
    "./node_modules/rxjs-compat/_esm2015/add/observable/throw.js");
    /* harmony import */


    var _Models_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../Models/Pagination */
    "./src/app/Models/Pagination.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var ClasslevelService = /*#__PURE__*/function () {
      function ClasslevelService(_http) {
        _classCallCheck(this, ClasslevelService);

        this._http = _http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
      }

      _createClass(ClasslevelService, [{
        key: "getClass",
        value: function getClass(id) {
          return this._http.get(this.baseURL + 'QuickAdmission/' + id);
        }
      }, {
        key: "getSection",
        value: function getSection(classes) {
          return this._http.get(this.baseURL + 'QuickAdmission/Sec/' + classes);
        }
      }, {
        key: "register",
        value: function register(student) {
          return this._http.post(this.baseURL + 'QuickAdmission/register', student);
        }
      }, {
        key: "getQuickAdmiStudent",
        value: function getQuickAdmiStudent(sessionId, page, itemsPerPage, userParams) {
          var paginatedResult = new _Models_Pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatedResult"]();
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

          return this._http.get(this.baseURL + 'QuickAdmission/AllQuickAdmission' + '/' + sessionId, {
            observe: 'response',
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            paginatedResult.result = response.body;

            if (response.headers.get('Pagination') != null) {
              paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }

            return paginatedResult;
          }));
        }
      }, {
        key: "getQuickStudent",
        value: function getQuickStudent(id) {
          return this._http.get(this.baseURL + 'QuickAdmission/QuickStudent/' + id);
        }
      }, {
        key: "getEduStudent",
        value: function getEduStudent(id) {
          return this._http.get(this.baseURL + 'QuickAdmission/' + id + '/EduStudent');
        }
      }, {
        key: "updateAdmission",
        value: function updateAdmission(id, student) {
          return this._http.put(this.baseURL + 'QuickAdmission/' + id, student);
        }
      }, {
        key: "registerUpdateEdu",
        value: function registerUpdateEdu(id, studentEdu) {
          return this._http.put(this.baseURL + 'QuickAdmission/' + id + '/EduRegister', studentEdu);
        }
      }, {
        key: "getLastAdmissionId",
        value: function getLastAdmissionId() {
          return this._http.get(this.baseURL + 'QuickAdmission/' + 'last/');
        }
      }]);

      return ClasslevelService;
    }();

    ClasslevelService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ClasslevelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ClasslevelService);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/admin.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/theme/layout/admin/admin.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/admin.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/theme/layout/admin/admin.component.ts ***!
    \*******************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppThemeLayoutAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
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


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(zone, location) {
        _classCallCheck(this, AdminComponent);

        this.zone = zone;
        this.location = location;
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["GradientConfig"].config;
        var currentURL = this.location.path();
        var baseHerf = this.location['_baseHref'];

        if (baseHerf) {
          currentURL = baseHerf + this.location.path();
        }

        this.windowWidth = window.innerWidth;

        if (currentURL === baseHerf + '/layout/collapse-menu' || currentURL === baseHerf + '/layout/box' || this.windowWidth >= 992 && this.windowWidth <= 1024) {
          this.gradientConfig.collapseMenu = true;
        }

        this.navCollapsed = this.windowWidth >= 992 ? this.gradientConfig.collapseMenu : false;
        this.navCollapsedMob = false;
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.windowWidth < 992) {
            this.gradientConfig.layout = 'vertical';
            setTimeout(function () {
              document.querySelector('.pcoded-navbar').classList.add('menupos-static');
              document.querySelector('#nav-ps-gradient-able').style.maxHeight = '100%'; // 100% amit
            }, 500);
          }
        }
      }, {
        key: "navMobClick",
        value: function navMobClick() {
          var _this3 = this;

          if (this.windowWidth < 992) {
            if (this.navCollapsedMob && !document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
              this.navCollapsedMob = !this.navCollapsedMob;
              setTimeout(function () {
                _this3.navCollapsedMob = !_this3.navCollapsedMob;
              }, 100);
            } else {
              this.navCollapsedMob = !this.navCollapsedMob;
            }
          }
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/admin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.scss */
      "./src/app/theme/layout/admin/admin.component.scss"))["default"]]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/configuration/configuration.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/theme/layout/admin/configuration/configuration.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminConfigurationConfigurationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu-styler .nav-pills {\n  margin-bottom: 8px;\n  box-shadow: none; }\n\nbody.gradient-dark .menu-styler .tab-content {\n  background: rgba(4, 169, 245, 0.03); }\n\nbody.gradient-dark .menu-styler h1,\nbody.gradient-dark .menu-styler h2,\nbody.gradient-dark .menu-styler h3,\nbody.gradient-dark .menu-styler h4,\nbody.gradient-dark .menu-styler h5,\nbody.gradient-dark .menu-styler p,\nbody.gradient-dark .menu-styler h6 {\n  color: #222; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL2NvbmZpZ3VyYXRpb24vUDpcXHNLdWxcXHNLdWxTUEEvc3JjXFxhcHBcXHRoZW1lXFxsYXlvdXRcXGFkbWluXFxjb25maWd1cmF0aW9uXFxjb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUlwQjtFQUdNLG1DQUFrQyxFQUFBOztBQUh4Qzs7Ozs7OztFQVlNLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1zdHlsZXIge1xyXG4gIC5uYXYtcGlsbHMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG59XHJcbmJvZHkuZ3JhZGllbnQtZGFya3tcclxuICAubWVudS1zdHlsZXJ7XHJcbiAgICAudGFiLWNvbnRlbnR7XHJcbiAgICAgIGJhY2tncm91bmQ6cmdiYSg0LCAxNjksIDI0NSwgMC4wMyk7XHJcbiAgICB9XHJcbiAgICBoMSxcclxuICAgIGgyLFxyXG4gICAgaDMsXHJcbiAgICBoNCxcclxuICAgIGg1LFxyXG4gICAgcCxcclxuICAgIGg2e1xyXG4gICAgICBjb2xvcjogIzIyMjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/configuration/configuration.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/theme/layout/admin/configuration/configuration.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ConfigurationComponent */

  /***/
  function srcAppThemeLayoutAdminConfigurationConfigurationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function () {
      return ConfigurationComponent;
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


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ConfigurationComponent = /*#__PURE__*/function () {
      function ConfigurationComponent(zone, location) {
        var _this4 = this;

        _classCallCheck(this, ConfigurationComponent);

        this.zone = zone;
        this.location = location;

        this.scroll = function () {
          if (_this4.headerFixedLayout === false) {
            document.querySelector('#nav-ps-gradient-able').style.maxHeight = 'calc(100vh)';
            var el = document.querySelector('.pcoded-navbar.menupos-fixed');
            var scrollPosition = window.pageYOffset;

            if (scrollPosition > 60) {
              el.style.position = 'fixed';
              el.style.transition = 'none';
              el.style.marginTop = '0';
            } else {
              el.style.position = 'absolute';
              el.style.marginTop = '60px';
            }
          } else if (document.querySelector('.pcoded-navbar').hasAttribute('style')) {
            document.querySelector('.pcoded-navbar.menupos-fixed').removeAttribute('style');
          }
        };

        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["GradientConfig"].config;
        this.setThemeLayout();
      }

      _createClass(ConfigurationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.styleSelectorToggle = false;
          this.layoutType = this.gradientConfig.layoutType;
          this.setLayout(this.layoutType);
          this.headerBackgroundColor = this.gradientConfig.headerBackColor;
          this.setHeaderBackground(this.headerBackgroundColor);
          this.rtlLayout = this.gradientConfig.rtlLayout;
          this.changeRtlLayout(this.rtlLayout);
          this.menuFixedLayout = this.gradientConfig.navFixedLayout;

          if (this.gradientConfig.layout === 'vertical') {
            this.changeMenuFixedLayout(this.menuFixedLayout);
          }

          this.headerFixedLayout = this.gradientConfig.headerFixedLayout;
          this.changeHeaderFixedLayout(this.headerFixedLayout);
          this.boxLayout = this.gradientConfig.boxLayout;
          this.changeBoxLayout(this.boxLayout);
        }
      }, {
        key: "setThemeLayout",
        value: function setThemeLayout() {
          var currentURL = this.location.path();
          var baseHref = this.location['_baseHref'];

          if (baseHref) {
            currentURL = baseHref + this.location.path();
          }

          switch (currentURL) {
            case baseHref + '/layout/static':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.navFixedLayout = false;
              this.gradientConfig.headerFixedLayout = false;
              break;

            case baseHref + '/layout/fixed':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.navFixedLayout = true;
              this.gradientConfig.headerFixedLayout = true;
              break;

            case baseHref + '/layout/nav-fixed':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.navFixedLayout = true;
              this.gradientConfig.headerFixedLayout = false;
              break;

            case baseHref + '/layout/collapse-menu':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.collapseMenu = true;
              break;

            case baseHref + '/layout/vertical-rtl':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.rtlLayout = true;
              break;

            case baseHref + '/layout/horizontal':
              this.gradientConfig.layout = 'horizontal';
              this.gradientConfig.navFixedLayout = false;
              this.gradientConfig.headerFixedLayout = false;
              break;

            case baseHref + '/layout/horizontal-l2':
              this.gradientConfig.layout = 'horizontal';
              this.gradientConfig.subLayout = 'horizontal-2';
              this.gradientConfig.navFixedLayout = false;
              this.gradientConfig.headerFixedLayout = false;
              break;

            case baseHref + '/layout/horizontal-rtl':
              this.gradientConfig.layout = 'horizontal';
              this.gradientConfig.subLayout = 'horizontal-2';
              this.gradientConfig.navFixedLayout = false;
              this.gradientConfig.headerFixedLayout = false;
              this.gradientConfig.rtlLayout = true;
              break;

            case baseHref + '/layout/box':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.boxLayout = true;
              this.gradientConfig.headerFixedLayout = false;
              this.gradientConfig.collapseMenu = true;
              break;

            case baseHref + '/layout/light':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.layoutType = 'menu-light';
              this.gradientConfig.headerBackColor = 'header-default';
              break;

            case baseHref + '/layout/dark':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.layoutType = 'dark';
              this.gradientConfig.headerBackColor = 'header-blue';
              break;

            case baseHref + '/layout/nav-color':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.layoutType = 'menu-light';
              this.gradientConfig.headerBackColor = 'header-info';
              this.gradientConfig.navFixedLayout = true;
              this.gradientConfig.headerFixedLayout = true;
              break;

            default:
              break;
          }
        }
      }, {
        key: "setHeaderBackColor",
        value: function setHeaderBackColor(color) {
          this.headerBackColor = color;
          document.querySelector('body').style.background = color;
        } // change main layout

      }, {
        key: "setLayout",
        value: function setLayout(layout) {
          this.isConfig = true;
          document.querySelector('.pcoded-navbar').classList.remove('menu-light');
          document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
          document.querySelector('.pcoded-navbar').classList.remove('navbar-dark');
          document.querySelector('.pcoded-navbar').classList.remove('brand-dark');
          document.querySelector('body').classList.remove('gradient-dark');
          this.layoutType = layout;

          if (layout === 'menu-light') {
            document.querySelector('.pcoded-navbar').classList.add(layout);
          }

          if (layout === 'dark') {
            document.querySelector('.pcoded-navbar').classList.add('navbar-dark');
            document.querySelector('.pcoded-navbar').classList.add('brand-dark');
            this.setHeaderBackground('header-blue');
            document.querySelector('body').classList.add('gradient-dark');
          }

          if (layout === 'reset') {
            this.reset();
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
          this.ngOnInit();
        }
      }, {
        key: "setRtlLayout",
        value: function setRtlLayout(e) {
          var flag = !!e.target.checked;
          this.changeRtlLayout(flag);
        }
      }, {
        key: "changeRtlLayout",
        value: function changeRtlLayout(flag) {
          if (flag) {
            document.querySelector('body').classList.add('gradient-rtl');
          } else {
            document.querySelector('body').classList.remove('gradient-rtl');
          }
        }
      }, {
        key: "setMenuFixedLayout",
        value: function setMenuFixedLayout(e) {
          var flag = !!e.target.checked;
          this.changeMenuFixedLayout(flag);
        }
      }, {
        key: "changeMenuFixedLayout",
        value: function changeMenuFixedLayout(flag) {
          var _this5 = this;

          setTimeout(function () {
            if (flag) {
              document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
              document.querySelector('.pcoded-navbar').classList.add('menupos-fixed');

              if (_this5.gradientConfig.layout === 'vertical') {
                document.querySelector('#nav-ps-gradient-able').style.maxHeight = 'calc(100vh - 60px)'; // calc(100vh - 70px) amit
              }

              window.addEventListener('scroll', _this5.scroll, true);
              window.scrollTo(0, 0);
            } else {
              document.querySelector('.pcoded-navbar').classList.add('menupos-static');
              document.querySelector('.pcoded-navbar').classList.remove('menupos-fixed');

              if (_this5.gradientConfig.layout === 'vertical') {
                document.querySelector('#nav-ps-gradient-able').style.maxHeight = 'calc(100%)'; // calc(100% - 70px) amit
              }

              if (_this5.gradientConfig.layout === 'vertical') {
                window.removeEventListener('scroll', _this5.scroll, true);
              }
            }
          }, 100);
        }
      }, {
        key: "setHeaderFixedLayout",
        value: function setHeaderFixedLayout(e) {
          var flag = !!e.target.checked;
          this.changeHeaderFixedLayout(flag);
        }
      }, {
        key: "changeHeaderFixedLayout",
        value: function changeHeaderFixedLayout(flag) {
          if (flag) {
            document.querySelector('.pcoded-header').classList.add('headerpos-fixed');
          } else {
            document.querySelector('.pcoded-header').classList.remove('headerpos-fixed'); // static

            if (this.gradientConfig.layout === 'vertical' && this.menuFixedLayout) {
              window.addEventListener('scroll', this.scroll, true);
              window.scrollTo(0, 0);
            } else {
              window.removeEventListener('scroll', this.scroll, true);
            }
          }
        }
      }, {
        key: "setBoxLayout",
        value: function setBoxLayout(e) {
          var flag = !!e.target.checked;
          this.changeBoxLayout(flag);
        }
      }, {
        key: "changeBoxLayout",
        value: function changeBoxLayout(flag) {
          if (flag) {
            document.querySelector('body').classList.add('container');
            document.querySelector('body').classList.add('box-layout');
          } else {
            document.querySelector('body').classList.remove('box-layout');
            document.querySelector('body').classList.remove('container');
          }
        }
      }, {
        key: "setHeaderBackground",
        value: function setHeaderBackground(background) {
          this.headerBackgroundColor = background;
          this.gradientConfig.headerBackColor = background;
          document.querySelector('.pcoded-header').classList.remove('header-blue');
          document.querySelector('.pcoded-header').classList.remove('header-red');
          document.querySelector('.pcoded-header').classList.remove('header-purple');
          document.querySelector('.pcoded-header').classList.remove('header-info');
          document.querySelector('.pcoded-header').classList.remove('header-dark');
          document.querySelector('.pcoded-header').classList.remove('header-orenge');
          document.querySelector('.pcoded-header').classList.remove('header-green');
          document.querySelector('.pcoded-header').classList.remove('header-yellow');
          document.querySelector('.pcoded-header').classList.remove('header-orchidgreen');
          document.querySelector('.pcoded-header').classList.remove('header-indigogreen');
          document.querySelector('.pcoded-header').classList.remove('header-darkgreen');
          document.querySelector('.pcoded-header').classList.remove('header-darkblue');

          if (background !== 'header-default') {
            document.querySelector('.pcoded-header').classList.add(background);
          }
        }
      }]);

      return ConfigurationComponent;
    }();

    ConfigurationComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    ConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-configuration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./configuration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/configuration/configuration.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./configuration.component.scss */
      "./src/app/theme/layout/admin/configuration/configuration.component.scss"))["default"]]
    })], ConfigurationComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavBarNavBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
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


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../app-config */
    "./src/app/app-config.ts");

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent() {
        _classCallCheck(this, NavBarComponent);

        this.onNavCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNavHeaderMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["GradientConfig"].config;
        this.menuClass = false;
        this.collapseStyle = 'none';
        this.windowWidth = window.innerWidth;
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleMobOption",
        value: function toggleMobOption() {
          this.menuClass = !this.menuClass;
          this.collapseStyle = this.menuClass ? 'block' : 'none';
        }
      }, {
        key: "navCollapse",
        value: function navCollapse() {
          if (this.windowWidth >= 992) {
            this.onNavCollapse.emit();
          } else {
            this.onNavHeaderMobCollapse.emit();
          }
        }
      }]);

      return NavBarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NavBarComponent.prototype, "onNavCollapse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NavBarComponent.prototype, "onNavHeaderMobCollapse", void 0);
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar.component.scss */
      "./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss"))["default"]]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavBarNavLeftNavLeftComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1sZWZ0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts ***!
    \***************************************************************************/

  /*! exports provided: NavLeftComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavLeftNavLeftComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavLeftComponent", function () {
      return NavLeftComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavLeftComponent = /*#__PURE__*/function () {
      function NavLeftComponent() {
        _classCallCheck(this, NavLeftComponent);
      }

      _createClass(NavLeftComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavLeftComponent;
    }();

    NavLeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-left',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-left.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-left.component.scss */
      "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss"))["default"]]
    })], NavLeftComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavBarNavLeftNavSearchNavSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1zZWFyY2gvbmF2LXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: NavSearchComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavLeftNavSearchNavSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavSearchComponent", function () {
      return NavSearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavSearchComponent = /*#__PURE__*/function () {
      function NavSearchComponent() {
        _classCallCheck(this, NavSearchComponent);

        this.searchOn = false;
      }

      _createClass(NavSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavSearchComponent;
    }();

    NavSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-search.component.scss */
      "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss"))["default"]]
    })], NavSearchComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightChatMsgChatMsgComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9jaGF0LW1zZy9jaGF0LW1zZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ChatMsgComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightChatMsgChatMsgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatMsgComponent", function () {
      return ChatMsgComponent;
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


    var _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../fack-db/friends-list */
    "./src/app/fack-db/friends-list.ts");
    /* harmony import */


    var _fack_db_user_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../fack-db/user-chat */
    "./src/app/fack-db/user-chat.ts");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");

    var ChatMsgComponent = /*#__PURE__*/function () {
      function ChatMsgComponent(rend) {
        _classCallCheck(this, ChatMsgComponent);

        this.rend = rend;
        this.onChatToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newReplay = '';
      }

      _createClass(ChatMsgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.friendsList = _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_2__["FriendsList"].friends;
          this.userChat = _fack_db_user_chat__WEBPACK_IMPORTED_MODULE_3__["UserChat"].chat;
          this.chatMessage = findObjectByKeyValue(this.friendsList, 'id', this.friendId);

          if (this.chatMessage) {
            var message = findObjectByKeyValue(this.userChat, 'friend_id', this.friendId);

            if (message) {
              this.chatMessage['chat'] = message['messages'];
            }
          }
        }
      }, {
        key: "sentMsg",
        value: function sentMsg(flag) {
          var _this6 = this;

          if (this.message === '' || this.message === undefined) {
            this.message_error = true;
          } else {
            if (flag === 1) {
              this.message_error = false;
            } else {
              this.message_error = false;
              var temp_replay = this.message;
              var html_send;
              html_send = '<div class="media chat-messages">' + '<div class="media-body chat-menu-reply">' + '<div class="">' + '<p class="chat-cont">' + this.message + '</p>' + '</div>' + '<p class="chat-time">now</p>' + '</div>' + '</div>';
              this.newReplay = this.newReplay + html_send;
              this.message = '';
              setTimeout(function () {
                _this6.componentRef.directiveRef.scrollToBottom();
              }, 100);
              this.friendWriting = true;
              setTimeout(function () {
                _this6.friendWriting = false;
                var html_replay;
                html_replay = '<div class="media chat-messages">' + '<a class="media-left photo-table" href="javascript:">' + '<img class="media-object img-radius img-radius m-t-5" src="' + _this6.chatMessage.photo + '" alt="' + _this6.chatMessage.name + '">' + '</a>' + '<div class="media-body chat-menu-content">' + '<div class="">' + '<p class="chat-cont">hello superior personality you write</p>' + '<p class="chat-cont">' + temp_replay + '</p>' + '</div>' + '<p class="chat-time">now</p>' + '</div>' + '</div>';
                _this6.newReplay = _this6.newReplay + html_replay;
                setTimeout(function () {
                  _this6.componentRef.directiveRef.scrollToBottom();
                }, 100);
              }, 3000);
            }
          }
        }
      }]);

      return ChatMsgComponent;
    }();

    ChatMsgComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatMsgComponent.prototype, "friendId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ChatMsgComponent.prototype, "onChatToggle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newChat', {
      "static": false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], ChatMsgComponent.prototype, "newChat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarComponent"], {
      "static": false
    })], ChatMsgComponent.prototype, "componentRef", void 0);
    ChatMsgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-msg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-msg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-msg.component.scss */
      "./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.scss"))["default"]]
    })], ChatMsgComponent);

    function findObjectByKeyValue(array, key, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
          return array[i];
        }
      }

      return false;
    }
    /***/

  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightChatUserListChatUserListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9jaGF0LXVzZXItbGlzdC9jaGF0LXVzZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ChatUserListComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightChatUserListChatUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatUserListComponent", function () {
      return ChatUserListComponent;
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


    var _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../fack-db/friends-list */
    "./src/app/fack-db/friends-list.ts");

    var ChatUserListComponent = /*#__PURE__*/function () {
      function ChatUserListComponent() {
        _classCallCheck(this, ChatUserListComponent);

        this.onChatCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChatToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.friendsList = _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_2__["FriendsList"].friends;
      }

      _createClass(ChatUserListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChatOn",
        value: function onChatOn(friend_id) {
          this.onChatToggle.emit(friend_id);
        }
      }]);

      return ChatUserListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ChatUserListComponent.prototype, "onChatCollapse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ChatUserListComponent.prototype, "onChatToggle", void 0);
    ChatUserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-user-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-user-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-user-list.component.scss */
      "./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.scss"))["default"]]
    })], ChatUserListComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightChatUserListFriendFriendComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9jaGF0LXVzZXItbGlzdC9mcmllbmQvZnJpZW5kLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: FriendComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightChatUserListFriendFriendComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendComponent", function () {
      return FriendComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FriendComponent = /*#__PURE__*/function () {
      function FriendComponent() {
        _classCallCheck(this, FriendComponent);

        this.onChatOn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(FriendComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "innerChatToggle",
        value: function innerChatToggle(id) {
          this.onChatOn.emit();
        }
      }]);

      return FriendComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FriendComponent.prototype, "friends", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FriendComponent.prototype, "onChatOn", void 0);
    FriendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-friend',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./friend.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./friend.component.scss */
      "./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.scss"))["default"]]
    })], FriendComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightNavRightComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9uYXYtcmlnaHQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: NavRightComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightNavRightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavRightComponent", function () {
      return NavRightComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_AuthServices_Auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/AuthServices/Auth.service */
    "./src/app/services/AuthServices/Auth.service.ts");
    /* harmony import */


    var src_app_services_AdminServices_Dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/AdminServices/Dashboard.service */
    "./src/app/services/AdminServices/Dashboard.service.ts");

    var NavRightComponent = /*#__PURE__*/function () {
      function NavRightComponent(_router, _auth, dashService) {
        _classCallCheck(this, NavRightComponent);

        this._router = _router;
        this._auth = _auth;
        this.dashService = dashService;
        this.visibleUserList = false;
        this.chatMessage = false;
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_4__["GradientConfig"].config;
      }

      _createClass(NavRightComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.role = localStorage.getItem('role');
          this.GetSession();

          if (!this.role) {
            this._router.navigateByUrl('/auth/signin');
          }

          this._auth.GetUserProfile().subscribe(function (res) {
            _this7.userDetails = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "LoadSession",
        value: function LoadSession($event) {
          localStorage.setItem("sessionId", $event);
          location.reload();
        }
      }, {
        key: "GetSession",
        value: function GetSession() {
          var _this8 = this;

          if (localStorage.getItem("sessionId") == null) {
            this.dashService.getSession().subscribe(function (data) {
              _this8.AllSession = data;

              _this8.AllSession.forEach(function (element) {
                if (element.IsActive == true) {
                  localStorage.setItem("sessionId", element.Id.toString());
                  _this8.selectedSession = element.Session;
                }
              });
            });
          } else {
            this.dashService.getSession().subscribe(function (data) {
              _this8.AllSession = data;

              _this8.AllSession.forEach(function (element) {
                if (element.Id.toString() == localStorage.getItem("sessionId")) {
                  _this8.selectedSession = element.Session;
                }
              });
            });
          }
        }
      }, {
        key: "onChatToggle",
        value: function onChatToggle(friendID) {
          this.friendId = friendID;
          this.chatMessage = !this.chatMessage;
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (document.querySelector('body').classList.contains('elite-rtl')) {
            this.gradientConfig['rtl-layout'] = true;
          } else {
            this.gradientConfig['rtl-layout'] = false;
          }
        }
      }, {
        key: "Logout",
        value: function Logout() {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          localStorage.removeItem("Id");
          localStorage.removeItem("sessionId");

          this._router.navigateByUrl('/auth/signin');
        }
      }]);

      return NavRightComponent;
    }();

    NavRightComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services_AuthServices_Auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: src_app_services_AdminServices_Dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]
      }];
    };

    NavRightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-right',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-right.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html"))["default"],
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInOutLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(0%)'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(100%)'
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInOutRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(-100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(0%)'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(-100%)'
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-right.component.scss */
      "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss"))["default"]]
    })], NavRightComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/Studentnavigation.ts":
  /*!********************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/Studentnavigation.ts ***!
    \********************************************************************/

  /*! exports provided: StudentNavigationItem */

  /***/
  function srcAppThemeLayoutAdminNavigationStudentnavigationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentNavigationItem", function () {
      return StudentNavigationItem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StudentNavigationItems = [{
      id: 'navigation',
      title: 'Student Navigation',
      type: 'group',
      icon: 'feather icon-monitor',
      children: [{
        id: 'Dashboard',
        title: 'Dashboard',
        type: 'item',
        icon: 'feather icon-home',
        url: '/layout/StuDash',
        breadcrumbs: false
      }, {
        id: 'FeeSatus',
        title: 'Fee',
        type: 'item',
        icon: 'feather icon-home',
        url: '/layout/FeeStatus',
        breadcrumbs: false
      }, {
        id: 'Attendace',
        title: 'Attendance',
        type: 'item',
        icon: 'feather icon-home',
        url: '/layout/Attendance',
        breadcrumbs: false
      }]
    }, {
      id: 'ui-element',
      title: 'Student Managment',
      type: 'group',
      icon: 'feather icon-layers',
      children: [{
        id: 'basic',
        title: 'Student',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [{
          id: 'res',
          title: 'Register',
          type: 'item',
          url: '/basic/student'
        }, {
          id: 'admission',
          title: 'Admission',
          type: 'item',
          url: '/basic/admission'
        }, {
          id: 'edit',
          title: 'Edit',
          type: 'item',
          url: '/basic/studentedit/id',
          hidden: 'true'
        }, {
          id: 'view',
          title: 'view',
          type: 'item',
          url: '/basic/studentview/id',
          hidden: 'true'
        }, {
          id: 'badges',
          title: 'Students',
          type: 'item',
          url: '/basic/studentlist'
        }, {
          id: 'feestatus',
          title: '',
          type: 'item',
          url: '/basic/feeStatus/id',
          hidden: 'true'
        }]
      }]
    }];

    var StudentNavigationItem = /*#__PURE__*/function () {
      function StudentNavigationItem() {
        _classCallCheck(this, StudentNavigationItem);
      }

      _createClass(StudentNavigationItem, [{
        key: "get",
        value: function get() {
          return StudentNavigationItems;
        }
      }]);

      return StudentNavigationItem;
    }();

    StudentNavigationItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], StudentNavigationItem);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavCollapseNavCollapseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb2xsYXBzZS9uYXYtY29sbGFwc2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: NavCollapseComponent */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavCollapseNavCollapseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavCollapseComponent", function () {
      return NavCollapseComponent;
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../app-config */
    "./src/app/app-config.ts");

    var NavCollapseComponent = /*#__PURE__*/function () {
      function NavCollapseComponent() {
        _classCallCheck(this, NavCollapseComponent);

        this.visible = false;
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["GradientConfig"].config;
        this.themeLayout = this.gradientConfig.layout;
      }

      _createClass(NavCollapseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.role = localStorage.getItem('role');
        }
      }, {
        key: "navCollapse",
        value: function navCollapse(e) {
          this.visible = !this.visible;
          var parent = e.target;

          if (this.themeLayout === 'vertical') {
            parent = parent.parentElement;
          }

          var sections = document.querySelectorAll('.pcoded-hasmenu');

          for (var i = 0; i < sections.length; i++) {
            if (sections[i] !== parent) {
              sections[i].classList.remove('pcoded-trigger');
            }
          }

          var firstParent = parent.parentElement;
          var preParent = parent.parentElement.parentElement;

          if (firstParent.classList.contains('pcoded-hasmenu')) {
            do {
              firstParent.classList.add('pcoded-trigger'); // firstParent.parentElement.classList.toggle('pcoded-trigger');

              firstParent = firstParent.parentElement.parentElement.parentElement;
            } while (firstParent.classList.contains('pcoded-hasmenu'));
          } else if (preParent.classList.contains('pcoded-submenu')) {
            do {
              preParent.parentElement.classList.add('pcoded-trigger');
              preParent = preParent.parentElement.parentElement.parentElement;
            } while (preParent.classList.contains('pcoded-submenu'));
          }

          parent.classList.toggle('pcoded-trigger');
        }
      }]);

      return NavCollapseComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavCollapseComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavCollapseComponent.prototype, "Stuitem", void 0);
    NavCollapseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-collapse',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-collapse.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(-100%)',
        display: 'block'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(0%)'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(-100%)'
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-collapse.component.scss */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss"))["default"]]
    })], NavCollapseComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavContentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts ***!
    \************************************************************************************/

  /*! exports provided: NavContentComponent */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavContentComponent", function () {
      return NavContentComponent;
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


    var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../navigation */
    "./src/app/theme/layout/admin/navigation/navigation.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _Studentnavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Studentnavigation */
    "./src/app/theme/layout/admin/navigation/Studentnavigation.ts");

    var NavContentComponent = /*#__PURE__*/function () {
      function NavContentComponent(nav, stuNav, zone, location) {
        _classCallCheck(this, NavContentComponent);

        this.nav = nav;
        this.stuNav = stuNav;
        this.zone = zone;
        this.location = location;
        this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["GradientConfig"].config;
        this.windowWidth = window.innerWidth;
        this.navigation = this.nav.get();
        this.Stunavigation = this.stuNav.get();
        this.prevDisabled = 'disabled';
        this.nextDisabled = '';
        this.scrollWidth = 0;
        this.contentWidth = 0;
      }

      _createClass(NavContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.role = localStorage.getItem('role');

          if (this.windowWidth < 992) {
            this.gradientConfig['layout'] = 'vertical';
            setTimeout(function () {
              document.querySelector('.pcoded-navbar').classList.add('menupos-static');
              document.querySelector('#nav-ps-gradient-able').style.maxHeight = '100%';
            }, 500);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.gradientConfig['layout'] === 'horizontal') {
            this.contentWidth = this.navbarContent.nativeElement.clientWidth;
            this.wrapperWidth = this.navbarWrapper.nativeElement.clientWidth;
          }
        }
      }, {
        key: "scrollPlus",
        value: function scrollPlus() {
          this.scrollWidth = this.scrollWidth + (this.wrapperWidth - 80);

          if (this.scrollWidth > this.contentWidth - this.wrapperWidth) {
            this.scrollWidth = this.contentWidth - this.wrapperWidth + 80;
            this.nextDisabled = 'disabled';
          }

          this.prevDisabled = '';

          if (this.gradientConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
          } else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
          }
        }
      }, {
        key: "scrollMinus",
        value: function scrollMinus() {
          this.scrollWidth = this.scrollWidth - this.wrapperWidth;

          if (this.scrollWidth < 0) {
            this.scrollWidth = 0;
            this.prevDisabled = 'disabled';
          }

          this.nextDisabled = '';

          if (this.gradientConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
          } else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
          }
        }
      }, {
        key: "fireLeave",
        value: function fireLeave() {
          var sections = document.querySelectorAll('.pcoded-hasmenu');

          for (var i = 0; i < sections.length; i++) {
            sections[i].classList.remove('active');
            sections[i].classList.remove('pcoded-trigger');
          }

          var current_url = this.location.path();

          if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
          }

          var link = "a.nav-link[ href='" + current_url + "' ]";
          var ele = document.querySelector(link);

          if (ele !== null && ele !== undefined) {
            var parent = ele.parentElement;
            var up_parent = parent.parentElement.parentElement;
            var last_parent = up_parent.parentElement;

            if (parent.classList.contains('pcoded-hasmenu')) {
              parent.classList.add('active');
            } else if (up_parent.classList.contains('pcoded-hasmenu')) {
              up_parent.classList.add('active');
            } else if (last_parent.classList.contains('pcoded-hasmenu')) {
              last_parent.classList.add('active');
            }
          }
        }
      }, {
        key: "navMob",
        value: function navMob() {
          if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
            this.onNavMobCollapse.emit();
          }
        }
      }, {
        key: "fireOutClick",
        value: function fireOutClick() {
          var current_url = this.location.path();

          if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
          }

          var link = "a.nav-link[ href='" + current_url + "' ]";
          var ele = document.querySelector(link);

          if (ele !== null && ele !== undefined) {
            var parent = ele.parentElement;
            var up_parent = parent.parentElement.parentElement;
            var last_parent = up_parent.parentElement;

            if (parent.classList.contains('pcoded-hasmenu')) {
              if (this.gradientConfig['layout'] === 'vertical') {
                parent.classList.add('pcoded-trigger');
              }

              parent.classList.add('active');
            } else if (up_parent.classList.contains('pcoded-hasmenu')) {
              if (this.gradientConfig['layout'] === 'vertical') {
                up_parent.classList.add('pcoded-trigger');
              }

              up_parent.classList.add('active');
            } else if (last_parent.classList.contains('pcoded-hasmenu')) {
              if (this.gradientConfig['layout'] === 'vertical') {
                last_parent.classList.add('pcoded-trigger');
              }

              last_parent.classList.add('active');
            }
          }
        }
      }]);

      return NavContentComponent;
    }();

    NavContentComponent.ctorParameters = function () {
      return [{
        type: _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]
      }, {
        type: _Studentnavigation__WEBPACK_IMPORTED_MODULE_5__["StudentNavigationItem"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NavContentComponent.prototype, "onNavMobCollapse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbarContent', {
      "static": false
    })], NavContentComponent.prototype, "navbarContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbarWrapper', {
      "static": false
    })], NavContentComponent.prototype, "navbarWrapper", void 0);
    NavContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-content.component.scss */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss"))["default"]]
    })], NavContentComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavGroupNavGroupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1ncm91cC9uYXYtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: NavGroupComponent */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavGroupNavGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavGroupComponent", function () {
      return NavGroupComponent;
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


    var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../app-config */
    "./src/app/app-config.ts");

    var NavGroupComponent = /*#__PURE__*/function () {
      function NavGroupComponent(zone, location) {
        _classCallCheck(this, NavGroupComponent);

        this.zone = zone;
        this.location = location;
        this.layout1 = false;
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["GradientConfig"].config;
      }

      _createClass(NavGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.role = localStorage.getItem('role'); // at reload time active and trigger link

          var current_url = this.location.path();

          if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
          }

          var link = "a.nav-link[ href='" + current_url + "' ]";
          var ele = document.querySelector(link);

          if (ele !== null && ele !== undefined) {
            var parent = ele.parentElement;
            var up_parent = parent.parentElement.parentElement;
            var last_parent = up_parent.parentElement;

            if (parent.classList.contains('pcoded-hasmenu')) {
              if (this.gradientConfig['layout'] === 'vertical') {
                parent.classList.add('pcoded-trigger');
              }

              parent.classList.add('active');
            } else if (up_parent.classList.contains('pcoded-hasmenu')) {
              if (this.gradientConfig['layout'] === 'vertical') {
                up_parent.classList.add('pcoded-trigger');
              }

              up_parent.classList.add('active');
            } else if (last_parent.classList.contains('pcoded-hasmenu')) {
              if (this.gradientConfig['layout'] === 'vertical') {
                last_parent.classList.add('pcoded-trigger');
              }

              last_parent.classList.add('active');
            }
          }
        }
      }]);

      return NavGroupComponent;
    }();

    NavGroupComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavGroupComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavGroupComponent.prototype, "Stuitem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavGroupComponent.prototype, "layout1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavGroupComponent.prototype, "activeId", void 0);
    NavGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-group',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-group.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-group.component.scss */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss"))["default"]]
    })], NavGroupComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavItemNavItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: NavItemComponent */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavItemNavItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavItemComponent", function () {
      return NavItemComponent;
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


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var NavItemComponent = /*#__PURE__*/function () {
      function NavItemComponent(location) {
        _classCallCheck(this, NavItemComponent);

        this.location = location;
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["GradientConfig"].config;
        this.themeLayout = this.gradientConfig['layout'];
      }

      _createClass(NavItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.role = localStorage.getItem('role');
        }
      }, {
        key: "closeOtherMenu",
        value: function closeOtherMenu(event) {
          var _this9 = this;

          if (this.gradientConfig['layout'] === 'vertical') {
            var ele = event.target;

            if (ele !== null && ele !== undefined) {
              var parent = ele.parentElement;
              var up_parent = parent.parentElement.parentElement;
              var last_parent = up_parent.parentElement;
              var sections = document.querySelectorAll('.pcoded-hasmenu');

              for (var i = 0; i < sections.length; i++) {
                sections[i].classList.remove('active');
                sections[i].classList.remove('pcoded-trigger');
              }

              if (parent.classList.contains('pcoded-hasmenu')) {
                parent.classList.add('pcoded-trigger');
                parent.classList.add('active');
              } else if (up_parent.classList.contains('pcoded-hasmenu')) {
                up_parent.classList.add('pcoded-trigger');
                up_parent.classList.add('active');
              } else if (last_parent.classList.contains('pcoded-hasmenu')) {
                last_parent.classList.add('pcoded-trigger');
                last_parent.classList.add('active');
              }
            }

            if (document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
              document.querySelector('app-navigation.pcoded-navbar').classList.remove('mob-open');
            }
          } else {
            setTimeout(function () {
              var sections = document.querySelectorAll('.pcoded-hasmenu');

              for (var _i = 0; _i < sections.length; _i++) {
                sections[_i].classList.remove('active');

                sections[_i].classList.remove('pcoded-trigger');
              }

              var current_url = _this9.location.path();

              if (_this9.location['_baseHref']) {
                current_url = _this9.location['_baseHref'] + _this9.location.path();
              }

              var link = "a.nav-link[ href='" + current_url + "' ]";
              var ele = document.querySelector(link);

              if (ele !== null && ele !== undefined) {
                var _parent = ele.parentElement;
                var _up_parent = _parent.parentElement.parentElement;
                var _last_parent = _up_parent.parentElement;

                if (_parent.classList.contains('pcoded-hasmenu')) {
                  _parent.classList.add('active');
                } else if (_up_parent.classList.contains('pcoded-hasmenu')) {
                  _up_parent.classList.add('active');
                } else if (_last_parent.classList.contains('pcoded-hasmenu')) {
                  _last_parent.classList.add('active');
                }
              }
            }, 500);
          }
        }
      }]);

      return NavItemComponent;
    }();

    NavItemComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavItemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavItemComponent.prototype, "Stuitem", void 0);
    NavItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-item.component.scss */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss"))["default"]]
    })], NavItemComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/navigation.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/navigation.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAdminNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/navigation.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/navigation.component.ts ***!
    \***********************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppThemeLayoutAdminNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
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


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../app-config */
    "./src/app/app-config.ts");

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);

        this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["GradientConfig"].config;
        this.windowWidth = window.innerWidth;
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navMobCollapse",
        value: function navMobCollapse() {
          if (this.windowWidth < 992) {
            this.onNavMobCollapse.emit();
          }
        }
      }]);

      return NavigationComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NavigationComponent.prototype, "onNavMobCollapse", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/navigation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.scss */
      "./src/app/theme/layout/admin/navigation/navigation.component.scss"))["default"]]
    })], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/theme/layout/admin/navigation/navigation.ts":
  /*!*************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/navigation.ts ***!
    \*************************************************************/

  /*! exports provided: NavigationItem */

  /***/
  function srcAppThemeLayoutAdminNavigationNavigationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationItem", function () {
      return NavigationItem;
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


    var src_app_gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_gaurd/Auth.guard */
    "./src/app/_gaurd/Auth.guard.ts"); //For Admin


    var NavigationItems = [{
      id: 'navigation',
      title: 'Admin Navigation',
      type: 'group',
      icon: 'feather icon-monitor',
      children: [{
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        icon: 'feather icon-home',
        url: '/layout/fixed',
        breadcrumbs: false
      }]
    }, {
      id: 'ui-element',
      title: 'Student Managment',
      type: 'group',
      icon: 'feather icon-layers',
      canActivate: [src_app_gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGaurd"]],
      data: {
        permittedRoles: ['Admin']
      },
      children: [{
        id: 'basic',
        title: 'Student',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [{
          id: 'res',
          title: 'Register',
          type: 'item',
          url: '/basic/student'
        }, {
          id: 'admission',
          title: 'Admission',
          type: 'item',
          url: '/basic/admission'
        }, {
          id: 'edit',
          title: 'Edit',
          type: 'item',
          url: '/basic/studentedit/id',
          hidden: 'true'
        }, {
          id: 'view',
          title: 'view',
          type: 'item',
          url: '/basic/studentview/id',
          hidden: 'true'
        }, {
          id: 'badges',
          title: 'Students',
          type: 'item',
          url: '/basic/studentlist'
        }, {
          id: 'feestatus',
          title: '',
          type: 'item',
          url: '/basic/feeStatus/id',
          hidden: 'true'
        }]
      }]
    }, {
      id: 'ui-element',
      title: 'Employee Managment',
      type: 'group',
      icon: 'feather icon-layers',
      canActivate: [src_app_gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGaurd"]],
      data: {
        permittedRoles: ['Admin']
      },
      children: [{
        id: 'basic',
        title: 'Employee',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [{
          id: 'res',
          title: 'Register',
          type: 'item',
          url: '/basic/EmployeeRegister'
        }, {
          id: 'admission',
          title: 'View',
          type: 'item',
          url: '/basic/admission'
        }, {
          id: 'edit',
          title: 'Edit',
          type: 'item',
          url: '/basic/empedit/id',
          hidden: 'true',
          breadcrumbs: false
        }, {
          id: 'view',
          title: 'view',
          type: 'item',
          url: '/basic/studentview/id',
          hidden: 'true'
        }, {
          id: 'badges',
          title: 'Employee',
          type: 'item',
          url: '/basic/emplist',
          canActivate: [src_app_gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGaurd"]],
          data: {
            permittedRoles: ['Admin']
          }
        }]
      }]
    }, {
      id: 'forms-table',
      title: 'Fee Section',
      type: 'group',
      icon: 'feather icon-layout',
      canActivate: [src_app_gaurd_Auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGaurd"]],
      data: {
        permittedRoles: ['Admin']
      },
      children: [{
        id: 'forms-element',
        title: 'Fee',
        type: 'item',
        icon: 'feather icon-file-text',
        url: '/forms/basic',
        breadcrumbs: false
      }, {
        id: 'forms-element',
        title: 'Fee',
        type: 'item',
        icon: 'feather icon-file-text',
        url: '/forms/Feeparticular',
        hidden: 'true',
        breadcrumbs: false
      }, {
        id: 'forms-element',
        title: 'Fee',
        type: 'item',
        icon: 'feather icon-file-text',
        url: '/forms/Feepackaging',
        hidden: 'true',
        breadcrumbs: false
      }, {
        id: 'forms-element',
        title: 'Fee',
        type: 'item',
        icon: 'feather icon-file-text',
        url: '/forms/AddFeePackaging',
        hidden: 'true',
        breadcrumbs: false
      }, {
        id: 'forms-element',
        title: 'Fee',
        type: 'item',
        icon: 'feather icon-file-text',
        url: '/forms/CollectFee',
        hidden: 'true',
        breadcrumbs: false
      }, {
        id: 'forms-element',
        title: 'Setting',
        type: 'item',
        icon: 'feather icon-file-text',
        url: '/forms/Setting',
        breadcrumbs: false
      }]
    }, {
      id: 'Attendance',
      title: 'Attendance',
      type: 'group',
      icon: 'feather icon-pie-chart',
      children: [{
        id: 'charts',
        title: 'Take Attendance',
        type: 'item',
        url: '/basic/TakeAttendance',
        icon: 'feather icon-pie-chart'
      }, {
        id: 'report',
        title: 'Show Attendance',
        type: 'item',
        url: '/basic/AttendanceReport',
        icon: 'feather icon-pie-chart'
      }]
    }, {
      id: 'pages',
      title: 'Pages',
      type: 'group',
      icon: 'feather icon-file-text',
      children: [{
        id: 'Acadmic',
        title: 'Acadmics',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [{
          id: 'classtimetable',
          title: 'Class TimeTable',
          type: 'item',
          url: '/Acadmic/AcadmicClassTimetable',
          children: []
        }, {
          id: 'classes',
          title: 'Class',
          type: 'item',
          url: '/Acadmic/AcadmicClass'
        }, {
          id: 'section',
          title: 'Section',
          type: 'item',
          url: '/Acadmic/AcadmicSection'
        }, {
          id: 'subject',
          title: 'Subject',
          type: 'item',
          url: '/Acadmic/AcadmicSubject'
        }, {
          id: 'addtimetable',
          title: 'Add Class TimeTable',
          type: 'item',
          url: '/Acadmic/AddClassTimetable',
          hidden: true
        }]
      }, {
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [{
          id: 'signup',
          title: 'Sign up',
          type: 'item',
          url: '/auth/signup',
          target: true,
          breadcrumbs: false
        }, {
          id: 'signin',
          title: 'Sign in',
          type: 'item',
          url: '/auth/signin',
          target: true,
          breadcrumbs: false
        }]
      }, {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      }, {
        id: 'Forbidden',
        title: 'Forbidden Page',
        type: 'item',
        url: '/Forbidden',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
        hidden: 'true'
      }, {
        id: 'ZoomLiveClass',
        title: 'Zoom Live Classes',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [{
          id: 'zoomliveclass',
          title: 'Live Class',
          type: 'item',
          url: '/ZoomLiveClass/LiveClass'
        }]
      }]
    }];

    var NavigationItem = /*#__PURE__*/function () {
      function NavigationItem() {
        _classCallCheck(this, NavigationItem);
      }

      _createClass(NavigationItem, [{
        key: "get",
        value: function get() {
          return NavigationItems;
        }
      }]);

      return NavigationItem;
    }();

    NavigationItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], NavigationItem);
    /***/
  },

  /***/
  "./src/app/theme/layout/auth/auth.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/theme/layout/auth/auth.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeLayoutAuthAuthComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/theme/layout/auth/auth.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/theme/layout/auth/auth.component.ts ***!
    \*****************************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppThemeLayoutAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthComponent = /*#__PURE__*/function () {
      function AuthComponent() {
        _classCallCheck(this, AuthComponent);
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthComponent;
    }();

    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/auth/auth.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth.component.scss */
      "./src/app/theme/layout/auth/auth.component.scss"))["default"]]
    })], AuthComponent);
    /***/
  },

  /***/
  "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeSharedComponentsBreadcrumbBreadcrumbComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts ***!
    \****************************************************************************/

  /*! exports provided: BreadcrumbComponent */

  /***/
  function srcAppThemeSharedComponentsBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
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


    var _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../layout/admin/navigation/navigation */
    "./src/app/theme/layout/admin/navigation/navigation.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var BreadcrumbComponent = /*#__PURE__*/function () {
      function BreadcrumbComponent(route, nav, titleService) {
        _classCallCheck(this, BreadcrumbComponent);

        this.route = route;
        this.nav = nav;
        this.titleService = titleService;
        this.breadcrumbList = [];
        this.navigationList = [];
        this.navigation = this.nav.get();
        this.type = 'theme2';
        this.setBreadcrumb();
      }

      _createClass(BreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var routerUrl;
          routerUrl = this.route.url;

          if (routerUrl && typeof routerUrl === 'string') {
            this.filterNavigation(routerUrl);
          }
        }
      }, {
        key: "setBreadcrumb",
        value: function setBreadcrumb() {
          var _this10 = this;

          var routerUrl;
          this.route.events.subscribe(function (router) {
            routerUrl = router.urlAfterRedirects;

            if (routerUrl && typeof routerUrl === 'string') {
              _this10.breadcrumbList.length = 0;
              var activeLink = router.url;

              _this10.filterNavigation(activeLink);
            }
          });
        }
      }, {
        key: "filterNavigation",
        value: function filterNavigation(activeLink) {
          var result = [];
          var title = 'Welcome';
          this.navigation.forEach(function (a) {
            if (a.type === 'item' && 'url' in a && a.url === activeLink) {
              result = [{
                url: 'url' in a ? a.url : false,
                title: a.title,
                breadcrumbs: 'breadcrumbs' in a ? a.breadcrumbs : true,
                type: a.type
              }];
              title = a.title;
            } else {
              if (a.type === 'group' && 'children' in a) {
                a.children.forEach(function (b) {
                  if (b.type === 'item' && 'url' in b && b.url === activeLink) {
                    result = [{
                      url: 'url' in b ? b.url : false,
                      title: b.title,
                      breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                      type: b.type
                    }];
                    title = b.title;
                  } else {
                    if (b.type === 'collapse' && 'children' in b) {
                      b.children.forEach(function (c) {
                        if (c.type === 'item' && 'url' in c && c.url === activeLink) {
                          result = [{
                            url: 'url' in b ? b.url : false,
                            title: b.title,
                            breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                            type: b.type
                          }, {
                            url: 'url' in c ? c.url : false,
                            title: c.title,
                            breadcrumbs: 'breadcrumbs' in c ? c.breadcrumbs : true,
                            type: c.type
                          }];
                          title = c.title;
                        } else {
                          if (c.type === 'collapse' && 'children' in c) {
                            c.children.forEach(function (d) {
                              if (d.type === 'item' && 'url' in d && d.url === activeLink) {
                                result = [{
                                  url: 'url' in b ? b.url : false,
                                  title: b.title,
                                  breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                                  type: b.type
                                }, {
                                  url: 'url' in c ? c.url : false,
                                  title: c.title,
                                  breadcrumbs: 'breadcrumbs' in c ? c.breadcrumbs : true,
                                  type: c.type
                                }, {
                                  url: 'url' in d ? d.url : false,
                                  title: d.title,
                                  breadcrumbs: 'breadcrumbs' in c ? d.breadcrumbs : true,
                                  type: d.type
                                }];
                                title = d.title;
                              }
                            });
                          }
                        }
                      });
                    }
                  }
                });
              }
            }
          });
          this.navigationList = result;
          this.titleService.setTitle(title + ' | A Complete School Solution');
        }
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BreadcrumbComponent.prototype, "type", void 0);
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-breadcrumb',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./breadcrumb.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/breadcrumb/breadcrumb.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./breadcrumb.component.scss */
      "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.scss"))["default"]]
    })], BreadcrumbComponent);
    /***/
  },

  /***/
  "./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts ***!
    \*************************************************************************/

  /*! exports provided: BreadcrumbModule */

  /***/
  function srcAppThemeSharedComponentsBreadcrumbBreadcrumbModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function () {
      return BreadcrumbModule;
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


    var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./breadcrumb.component */
    "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BreadcrumbModule = function BreadcrumbModule() {
      _classCallCheck(this, BreadcrumbModule);
    };

    BreadcrumbModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
      declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]],
      exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]]
    })], BreadcrumbModule);
    /***/
  },

  /***/
  "./src/app/theme/shared/components/card/card.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/theme/shared/components/card/card.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeSharedComponentsCardCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card.full-card {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  z-index: 99999;\n  border-radius: 0;\n  width: calc(100vw) !important;\n  height: 100vh !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9QOlxcc0t1bFxcc0t1bFNQQS9zcmNcXGFwcFxcdGhlbWVcXHNoYXJlZFxcY29tcG9uZW50c1xcY2FyZFxcY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQuZnVsbC1jYXJkIHtcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICB0b3A6IDAgIWltcG9ydGFudDtcclxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICB3aWR0aDogY2FsYygxMDB2dykgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/theme/shared/components/card/card.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/theme/shared/components/card/card.component.ts ***!
    \****************************************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppThemeSharedComponentsCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var css_animator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! css-animator */
    "./node_modules/css-animator/index.js");
    /* harmony import */


    var css_animator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent(animationService, config) {
        _classCallCheck(this, CardComponent);

        config.placement = 'bottom-right';
        this.customHeader = false;
        this.options = true;
        this.hidHeader = false;
        this.isCardFooter = false;
        this.cardTitle = '';
        this.animator = animationService.builder();
        this.animators = animationService.builder();
        this.animator.useVisibility = true;
        this.fullIcon = 'icon-maximize';
        this.isAnimating = false;
        this.collapsedCard = 'expanded';
        this.collapsedIcon = 'icon-minus';
        this.loadCard = false;
        this.cardRemove = 'open';
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.hidHeader) {
            this.options = false;
          }

          if (!this.options || this.hidHeader || this.customHeader) {
            this.collapsedCard = 'false';
          }
        }
      }, {
        key: "fullCardToggle",
        value: function fullCardToggle(element, animation, status) {
          var _this11 = this;

          animation = this.cardClass === 'full-card' ? 'zoomOut' : 'zoomIn';
          this.fullIcon = this.cardClass === 'full-card' ? 'icon-maximize' : 'icon-minimize'; // const duration = this.cardClass === 'full-card' ? 300 : 600;

          this.cardClass = this.cardClass === 'full-card' ? this.cardClass : 'full-card';

          if (status) {
            this.animation = animation;
          }

          this.isAnimating = true;
          this.animators.setType(this.animation).setDuration(500).setDirection('alternate').setTimingFunction('cubic-bezier(0.1, -0.6, 0.2, 0)').animate(element).then(function () {
            _this11.isAnimating = false;
          })["catch"](function () {
            _this11.isAnimating = false;
          });
          setTimeout(function () {
            _this11.cardClass = animation === 'zoomOut' ? '' : _this11.cardClass;

            if (_this11.cardClass === 'full-card') {
              document.querySelector('body').style.overflow = 'hidden';
            } else {
              document.querySelector('body').removeAttribute('style');
            }
          }, 500);
        }
      }, {
        key: "collapsedCardToggle",
        value: function collapsedCardToggle() {
          this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
          this.collapsedIcon = this.collapsedCard === 'collapsed' ? 'icon-plus' : 'icon-minus';
        }
      }, {
        key: "cardRefresh",
        value: function cardRefresh() {
          var _this12 = this;

          this.loadCard = true;
          this.cardClass = 'card-load';
          setTimeout(function () {
            _this12.loadCard = false;
            _this12.cardClass = 'expanded';
          }, 3000);
        }
      }, {
        key: "cardRemoveAction",
        value: function cardRemoveAction() {
          this.cardRemove = this.cardRemove === 'closed' ? 'open' : 'closed';
        }
      }]);

      return CardComponent;
    }();

    CardComponent.ctorParameters = function () {
      return [{
        type: css_animator__WEBPACK_IMPORTED_MODULE_3__["AnimationService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "cardTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "cardClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "blockClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "headerClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "hidHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "customHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "cardCaption", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "captionClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "isCardFooter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "footerClass", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/card/card.component.html"))["default"],
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('collapsedCard', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        overflow: 'hidden',
        height: '0px'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        overflow: 'hidden',
        height: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AUTO_STYLE"]
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('collapsed <=> expanded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('cardRemove', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 0,
        display: 'none'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card.component.scss */
      "./src/app/theme/shared/components/card/card.component.scss"))["default"]]
    })], CardComponent);
    /***/
  },

  /***/
  "./src/app/theme/shared/components/card/card.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/theme/shared/components/card/card.module.ts ***!
    \*************************************************************/

  /*! exports provided: CardModule */

  /***/
  function srcAppThemeSharedComponentsCardCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardModule", function () {
      return CardModule;
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


    var _card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./card.component */
    "./src/app/theme/shared/components/card/card.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var css_animator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! css-animator */
    "./node_modules/css-animator/index.js");
    /* harmony import */


    var css_animator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_5__);

    var CardModule = function CardModule() {
      _classCallCheck(this, CardModule);
    };

    CardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimatorModule"]],
      declarations: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
      exports: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
      providers: [css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimationService"]]
    })], CardModule);
    /***/
  },

  /***/
  "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeSharedComponentsChartApexChartApexChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2NoYXJ0L2FwZXgtY2hhcnQvYXBleC1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ApexChartComponent */

  /***/
  function srcAppThemeSharedComponentsChartApexChartApexChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApexChartComponent", function () {
      return ApexChartComponent;
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


    var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apexcharts/dist/apexcharts.common.js */
    "./node_modules/apexcharts/dist/apexcharts.common.js");
    /* harmony import */


    var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _apex_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./apex-chart.service */
    "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts");

    var ApexChartComponent = /*#__PURE__*/function () {
      function ApexChartComponent(apexEvent) {
        _classCallCheck(this, ApexChartComponent);

        this.apexEvent = apexEvent;
      }

      _createClass(ApexChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          setTimeout(function () {
            _this13.chart = new apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2___default.a(document.querySelector('#' + _this13.chartID), _this13.chartConfig);

            _this13.chart.render();
          });
          this.apexEvent.changeTimeRange.subscribe(function () {
            if (_this13.xAxis) {
              _this13.chart.updateOptions({
                xaxis: _this13.xAxis
              });
            }
          });
          this.apexEvent.changeSeriesData.subscribe(function () {
            if (_this13.newData) {
              _this13.chart.updateSeries([{
                data: _this13.newData
              }]);
            }
          });
        }
      }]);

      return ApexChartComponent;
    }();

    ApexChartComponent.ctorParameters = function () {
      return [{
        type: _apex_chart_service__WEBPACK_IMPORTED_MODULE_3__["ApexChartService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ApexChartComponent.prototype, "chartID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ApexChartComponent.prototype, "chartConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ApexChartComponent.prototype, "xAxis", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ApexChartComponent.prototype, "newData", void 0);
    ApexChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-apex-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./apex-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./apex-chart.component.scss */
      "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.scss"))["default"]]
    })], ApexChartComponent);
    /***/
  },

  /***/
  "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts ***!
    \********************************************************************************/

  /*! exports provided: ApexChartService */

  /***/
  function srcAppThemeSharedComponentsChartApexChartApexChartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApexChartService", function () {
      return ApexChartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ApexChartService = /*#__PURE__*/function () {
      function ApexChartService() {
        _classCallCheck(this, ApexChartService);

        this.changeTimeRange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeSeriesData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ApexChartService, [{
        key: "eventChangeTimeRange",
        value: function eventChangeTimeRange() {
          this.changeTimeRange.emit();
        }
      }, {
        key: "eventChangeSeriesData",
        value: function eventChangeSeriesData() {
          this.changeSeriesData.emit();
        }
      }]);

      return ApexChartService;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ApexChartService.prototype, "changeTimeRange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ApexChartService.prototype, "changeSeriesData", void 0);
    ApexChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ApexChartService);
    /***/
  },

  /***/
  "./src/app/theme/shared/components/index.ts":
  /*!**************************************************!*\
    !*** ./src/app/theme/shared/components/index.ts ***!
    \**************************************************/

  /*! exports provided: CardModule, BreadcrumbModule */

  /***/
  function srcAppThemeSharedComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _card_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./card/card.module */
    "./src/app/theme/shared/components/card/card.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardModule", function () {
      return _card_card_module__WEBPACK_IMPORTED_MODULE_1__["CardModule"];
    });
    /* harmony import */


    var _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./breadcrumb/breadcrumb.module */
    "./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function () {
      return _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbModule"];
    });
    /***/

  },

  /***/
  "./src/app/theme/shared/components/spinner/spinkit-css/sk-line-material.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/theme/shared/components/spinner/spinkit-css/sk-line-material.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeSharedComponentsSpinnerSpinkitCssSkLineMaterialScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%; }\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both; }\n\n@-webkit-keyframes sk-line-material {\n  0%, 80%, 100% {\n    transform: scaleX(0); }\n  40% {\n    transform: scaleX(1); } }\n\n@keyframes sk-line-material {\n  0% {\n    transform: scaleX(0); }\n  100% {\n    transform: scaleX(1); } }\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999; }\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0); }\n\n.colored-parent, .colored > div {\n  background-color: rgba(26, 188, 156, 0.8); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlua2l0LWNzcy9QOlxcc0t1bFxcc0t1bFNQQS9zcmNcXGFwcFxcdGhlbWVcXHNoYXJlZFxcY29tcG9uZW50c1xcc3Bpbm5lclxcc3BpbmtpdC1jc3NcXHNrLWxpbmUtbWF0ZXJpYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE1BQVE7RUFDUixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQUs7RUFDTCxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1FQUFtRTtFQUNuRSwyREFBMkQsRUFBQTs7QUFHL0Q7RUFDSTtJQUVJLG9CQUFvQixFQUFBO0VBRXhCO0lBRUksb0JBQW9CLEVBQUEsRUFBQTs7QUFJNUI7RUFDSTtJQUVJLG9CQUFvQixFQUFBO0VBRXhCO0lBRUksb0JBQW9CLEVBQUEsRUFBQTs7QUFJNUI7RUFDSSxNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGtDQUErQixFQUFBOztBQUduQztFQUNJLHlDQUEwQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1saW5lLW1hdGVyaWFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2stbGluZS1tYXRlcmlhbCB7XHJcbiAgICB0b3A6IDAgIDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2stbGluZS1tYXRlcmlhbCAuc2stY2hpbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stbGluZS1tYXRlcmlhbCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBib3RoO1xyXG4gICAgYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcclxuICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stbGluZS1tYXRlcmlhbCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNodHRwLWxvYWRlciB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4ubG9hZGVyLWJnIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xyXG59XHJcblxyXG4uY29sb3JlZC1wYXJlbnQsIC5jb2xvcmVkID4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDE4OCwgMTU2LCAwLjgwKTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/theme/shared/components/spinner/spinkits.ts":
  /*!*************************************************************!*\
    !*** ./src/app/theme/shared/components/spinner/spinkits.ts ***!
    \*************************************************************/

  /*! exports provided: Spinkit */

  /***/
  function srcAppThemeSharedComponentsSpinnerSpinkitsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Spinkit", function () {
      return Spinkit;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Spinkit = {
      skChasingDots: 'sk-chasing-dots',
      skCubeGrid: 'sk-cube-grid',
      skDoubleBounce: 'sk-double-bounce',
      skRotatingPlane: 'sk-rotationg-plane',
      skSpinnerPulse: 'sk-spinner-pulse',
      skThreeBounce: 'sk-three-bounce',
      skWanderingCubes: 'sk-wandering-cubes',
      skWave: 'sk-wave',
      skLine: 'sk-line-material'
    };
    /***/
  },

  /***/
  "./src/app/theme/shared/components/spinner/spinner.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/theme/shared/components/spinner/spinner.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeSharedComponentsSpinnerSpinnerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999; }\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: .7;\n  background-color: #f1f1f1; }\n\n.colored-parent, .colored > div {\n  background-color: #333; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9QOlxcc0t1bFxcc0t1bFNQQS9zcmNcXGFwcFxcdGhlbWVcXHNoYXJlZFxcY29tcG9uZW50c1xcc3Bpbm5lclxcc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaHR0cC1sb2FkZXIge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRlci1iZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xuICAgIG9wYWNpdHk6IC43O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/theme/shared/components/spinner/spinner.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/theme/shared/components/spinner/spinner.component.ts ***!
    \**********************************************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppThemeSharedComponentsSpinnerSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
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


    var _spinkits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./spinkits */
    "./src/app/theme/shared/components/spinner/spinkits.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var SpinnerComponent = /*#__PURE__*/function () {
      function SpinnerComponent(router, document) {
        var _this14 = this;

        _classCallCheck(this, SpinnerComponent);

        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_2__["Spinkit"];
        this.backgroundColor = '#2196f3';
        this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_2__["Spinkit"].skLine;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
            _this14.isSpinnerVisible = true;
          } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
            _this14.isSpinnerVisible = false;
          }
        }, function () {
          _this14.isSpinnerVisible = false;
        });
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.isSpinnerVisible = false;
        }
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SpinnerComponent.prototype, "backgroundColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SpinnerComponent.prototype, "spinner", void 0);
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-spinner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./spinner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/spinner/spinner.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinner.component.scss */
      "./src/app/theme/shared/components/spinner/spinner.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinkit-css/sk-line-material.scss */
      "./src/app/theme/shared/components/spinner/spinkit-css/sk-line-material.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]))], SpinnerComponent);
    /***/
  },

  /***/
  "./src/app/theme/shared/full-screen/toggle-full-screen.ts":
  /*!****************************************************************!*\
    !*** ./src/app/theme/shared/full-screen/toggle-full-screen.ts ***!
    \****************************************************************/

  /*! exports provided: ToggleFullScreenDirective */

  /***/
  function srcAppThemeSharedFullScreenToggleFullScreenTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleFullScreenDirective", function () {
      return ToggleFullScreenDirective;
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


    var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! screenfull */
    "./node_modules/screenfull/dist/screenfull.js");
    /* harmony import */


    var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);

    var ToggleFullScreenDirective = /*#__PURE__*/function () {
      function ToggleFullScreenDirective(elements) {
        _classCallCheck(this, ToggleFullScreenDirective);

        this.elements = elements;
      }

      _createClass(ToggleFullScreenDirective, [{
        key: "onClick",
        value: function onClick() {
          /*if (screenfull.enabled) {
            (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-maximize');
            (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-minimize');
            screenfull.toggle();
          }*/
          if (isScreenFull(screenfull__WEBPACK_IMPORTED_MODULE_2__)) {
            if (screenfull__WEBPACK_IMPORTED_MODULE_2__["isFullscreen"]) {
              screenfull__WEBPACK_IMPORTED_MODULE_2__["exit"]();
            } else {
              screenfull__WEBPACK_IMPORTED_MODULE_2__["request"]();
            }
          }
        }
      }]);

      return ToggleFullScreenDirective;
    }();

    ToggleFullScreenDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')], ToggleFullScreenDirective.prototype, "onClick", null);
    ToggleFullScreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appToggleFullScreen]'
    })], ToggleFullScreenDirective);

    function isScreenFull(sf) {
      return sf.isFullscreen;
    }
    /***/

  },

  /***/
  "./src/app/theme/shared/shared.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/theme/shared/shared.module.ts ***!
    \***********************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppThemeSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components */
    "./src/app/theme/shared/components/index.ts");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-click-outside */
    "./node_modules/ng-click-outside/lib/index.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/spinner/spinner.component */
    "./src/app/theme/shared/components/spinner/spinner.component.ts");
    /* harmony import */


    var _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/chart/apex-chart/apex-chart.component */
    "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts");
    /* harmony import */


    var _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/chart/apex-chart/apex-chart.service */
    "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts");

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      suppressScrollX: true
    };

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_4__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"]],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_4__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_8__["ApexChartComponent"]],
      declarations: [_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_8__["ApexChartComponent"]],
      providers: [{
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }, _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_9__["ApexChartService"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'https://localhost:5001/api/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! P:\sKul\sKulSPA\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map