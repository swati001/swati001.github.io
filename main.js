(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { ProfilePicComponent } from './profile-pic/profile-pic.component';




var routes = [
    {
        path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"], pathMatch: 'full', data: { animation: 'landing-page' }
    },
    {
        path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], data: { animation: 'contact' }
    },
    {
        path: 'profiles', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], data: { animation: 'profile' }
    },
    {
        path: 'projects', component: _project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"], data: { animation: 'project' }
    },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//  export const appRouting = RouterModule.forRoot(this.APP_ROUTES, {
//   useHash: true
// });


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]=\"triggerAnimation(outlet)\">\n  <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  z-index: -1;\n  display: block;\n  background-color: #085e72;\n  position: fixed;\n  right: 0;\n  top: 0;\n  pointer-events: none;\n  -webkit-clip-path: circle(50vw 40vh at 50% 50%);\n          clip-path: circle(50vw 40vh at 50% 50%);\n  -webkit-transform: scale(2) translate(27vw, -18vh) rotate(335deg);\n          transform: scale(2) translate(27vw, -18vh) rotate(335deg);\n  -webkit-animation: 1s ease-in-out 0.2s both rightToLeft;\n          animation: 1s ease-in-out 0.2s both rightToLeft; }\n\n.logo {\n  font-size: 2rem;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn; }\n\n.navbar {\n  width: 100%;\n  color: #e8eeea;\n  font-size: 2rem;\n  padding: 1.6rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn;\n  position: absolute; }\n\n.nav-items .nav-item {\n  display: inline-block;\n  padding: 0.2rem 0;\n  margin: 0.6rem 1rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  border-bottom: 0.3rem solid #17a598;\n  color: #e8eeea;\n  text-decoration: none; }\n\n.container {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: 1.6rem;\n  color: #e8eeea;\n  margin-top: 5%; }\n\n.short-bio {\n  font-size: 1.6rem;\n  padding: 1.6rem;\n  font-weight: normal;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn; }\n\n.quote {\n  font-family: 'Cormorant Garamond', serif;\n  font-size: 1.8rem;\n  padding: 1rem;\n  padding-top: 0rem;\n  -webkit-animation: 1s ease-in-out 0.4s both fadeIn;\n          animation: 1s ease-in-out 0.4s both fadeIn; }\n\n.name {\n  font-family: 'Cormorant Garamond', serif;\n  font-size: 2.4rem;\n  font-weight: bold;\n  line-height: 1.6;\n  padding-top: 0.6rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4rem;\n  word-spacing: 0.2rem;\n  text-align: center;\n  margin-bottom: -2.5rem;\n  -webkit-animation: 1s ease-in-out 0.6s both fadeIn;\n          animation: 1s ease-in-out 0.6s both fadeIn; }\n\n.name:hover .strip::after {\n    left: -1rem; }\n\n.name:hover .strip::before {\n    left: 1rem; }\n\n.strip {\n  display: inline-block;\n  position: relative;\n  width: 28rem;\n  margin: auto;\n  margin-bottom: 2rem;\n  -webkit-animation: 1s ease-in-out 0.8s both fadeIn;\n          animation: 1s ease-in-out 0.8s both fadeIn; }\n\n.strip::before {\n    transition: 0.3s all ease-in-out;\n    content: '';\n    position: absolute;\n    display: inline-block;\n    height: 2px;\n    background-color: #e74c3c;\n    margin: 2px 0;\n    width: 100%;\n    margin: auto;\n    top: 0;\n    left: -1rem; }\n\n.strip::after {\n    transition: 0.3s all ease-in-out;\n    position: absolute;\n    display: inline-block;\n    content: '';\n    height: 2px;\n    background-color: #e74c3c;\n    margin: 2px 0;\n    width: 100%;\n    margin: auto;\n    top: 4px;\n    left: 1rem; }\n\n.contact-btn {\n  min-width: 15rem;\n  line-height: 2.0;\n  font-size: 1.0rem;\n  padding: 0.5rem;\n  margin-top: 2rem;\n  background-color: #e74c3c;\n  color: #fff;\n  border: none;\n  outline: none;\n  border-radius: 70rem;\n  cursor: pointer;\n  transition: all .3s ease-in-out;\n  -webkit-animation: fadeIn 1s ease-in-out 1s both;\n          animation: fadeIn 1s ease-in-out 1s both;\n  box-shadow: 7px 5px 8px 0 rgba(0, 0, 0, 0.31);\n  position: relative; }\n\n.contact-btn span {\n    position: relative;\n    -webkit-transform: translateX(0.7rem);\n            transform: translateX(0.7rem);\n    display: inline-block;\n    transition: all 0.3s ease-in-out; }\n\n.contact-btn:hover {\n    background-color: #db381b;\n    -webkit-animation-play-state: paused;\n            animation-play-state: paused; }\n\n.contact-btn:hover::after {\n      -webkit-transform: translateX(0.2rem);\n              transform: translateX(0.2rem);\n      opacity: 1; }\n\n.contact-btn:hover span {\n      -webkit-transform: translateX(-0.2rem);\n              transform: translateX(-0.2rem); }\n\n.contact-btn:active {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    box-shadow: 4px 5px 5px 0px rgba(0, 0, 0, 0.31); }\n\n.contact-btn::after {\n    content: '\\00bb';\n    position: relative;\n    opacity: 0;\n    vertical-align: sub;\n    font-size: 2.7rem;\n    line-height: 0;\n    -webkit-transform: translateX(25px);\n            transform: translateX(25px);\n    display: inline-block;\n    transition: all 0.3s ease-in-out; }\n\n.tada-animation {\n  -webkit-animation: tada 1s ease-in-out 0s 2 normal both;\n          animation: tada 1s ease-in-out 0s 2 normal both; }\n\n@-webkit-keyframes leftToRight {\n  0% {\n    display: relative;\n    opacity: 0.1;\n    left: -20%; }\n  100% {\n    display: relative;\n    opacity: 1;\n    left: 0%; } }\n\n@keyframes leftToRight {\n  0% {\n    display: relative;\n    opacity: 0.1;\n    left: -20%; }\n  100% {\n    display: relative;\n    opacity: 1;\n    left: 0%; } }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes tada {\n  0% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); }\n  10% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  20% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  30% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  40% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  50% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  60% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  70% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  80% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  90% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  100% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); } }\n\n@keyframes tada {\n  0% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); }\n  10% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  20% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  30% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  40% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  50% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  60% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  70% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  80% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  90% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  100% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); } }\n\n@-webkit-keyframes stripAnimation {\n  0% {\n    -webkit-transform: translateX(-10px) rotateZ(0deg);\n            transform: translateX(-10px) rotateZ(0deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0px) rotateZ(-16deg);\n            transform: translateX(0px) rotateZ(-16deg);\n    opacity: 1; } }\n\n@keyframes stripAnimation {\n  0% {\n    -webkit-transform: translateX(-10px) rotateZ(0deg);\n            transform: translateX(-10px) rotateZ(0deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0px) rotateZ(-16deg);\n            transform: translateX(0px) rotateZ(-16deg);\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxlQUFjO0VBQ2QsMEJDUmM7RURTZCxnQkFBZTtFQUNmLFNBQVE7RUFDUixPQUFNO0VBQ04scUJBQW9CO0VBQ3BCLGdEQUF1QztVQUF2Qyx3Q0FBdUM7RUFDdkMsa0VBQXlEO1VBQXpELDBEQUF5RDtFQUN6RCx3REFBK0M7VUFBL0MsZ0RBQStDLEVBQ2hEOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixtREFBMEM7VUFBMUMsMkNBQTBDLEVBQzNDOztBQUVEO0VBQ0UsWUFBVztFQUNYLGVDakJlO0VEa0JmLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixtREFBMEM7VUFBMUMsMkNBQTBDO0VBQzFDLG1CQUFrQixFQUNuQjs7QUFFRDtFQUVJLHNCQUFxQjtFQUNyQixrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLDBCQUFpQjtLQUFqQix1QkFBaUI7TUFBakIsc0JBQWlCO1VBQWpCLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLG9DQ3JDUztFRHNDVCxlQ25DYTtFRG9DYixzQkFBcUIsRUFDdEI7O0FBR0g7RUFDRSxjQUFhO0VBQ2IsUUFBTztFQUNQLHVCQUFzQjtFQUN0Qix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsZUNoRGU7RURpRGYsZUFBYyxFQUNmOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2Ysb0JBQW1CO0VBQ25CLG1EQUEwQztVQUExQywyQ0FBMEMsRUFDM0M7O0FBRUQ7RUFDRSx5Q0FBd0M7RUFDeEMsa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYixrQkFBaUI7RUFDakIsbURBQTBDO1VBQTFDLDJDQUEwQyxFQUMzQzs7QUFFRDtFQUNFLHlDQUF3QztFQUN4QyxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsMEJBQXlCO0VBQ3pCLHVCQUFzQjtFQUN0QixxQkFBb0I7RUFDcEIsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixtREFBMEM7VUFBMUMsMkNBQTBDLEVBUzNDOztBQXBCRDtJQWNNLFlBQVcsRUFDWjs7QUFmTDtJQWlCTSxXQUFVLEVBQ1g7O0FBSUw7RUFDRSxzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLG1EQUEwQztVQUExQywyQ0FBMEMsRUEyQjNDOztBQWpDRDtJQVFJLGlDQUFnQztJQUNoQyxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLHNCQUFxQjtJQUNyQixZQUFXO0lBQ1gsMEJBQXlCO0lBQ3pCLGNBQWE7SUFDYixZQUFXO0lBQ1gsYUFBWTtJQUNaLE9BQU07SUFDTixZQUFXLEVBQ1o7O0FBbkJIO0lBcUJJLGlDQUFnQztJQUNoQyxtQkFBa0I7SUFDbEIsc0JBQXFCO0lBQ3JCLFlBQVc7SUFDWCxZQUFXO0lBQ1gsMEJBQXlCO0lBQ3pCLGNBQWE7SUFDYixZQUFXO0lBQ1gsYUFBWTtJQUNaLFNBQVE7SUFDUixXQUFVLEVBQ1g7O0FBR0g7RUFDRSxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQiwwQkN4SVk7RUR5SVosWUFBVztFQUNYLGFBQVk7RUFDWixjQUFhO0VBQ2IscUJBQW9CO0VBQ3BCLGdCQUFlO0VBQ2YsZ0NBQStCO0VBQy9CLGlEQUF3QztVQUF4Qyx5Q0FBd0M7RUFDeEMsOENBQTRDO0VBQzVDLG1CQUFrQixFQWlDbkI7O0FBaEREO0lBaUJJLG1CQUFrQjtJQUNsQixzQ0FBNkI7WUFBN0IsOEJBQTZCO0lBQzdCLHNCQUFxQjtJQUNyQixpQ0FBZ0MsRUFDakM7O0FBckJIO0lBdUJJLDBCQ3ZKVTtJRHdKVixxQ0FBNEI7WUFBNUIsNkJBQTRCLEVBUTdCOztBQWhDSDtNQTBCTSxzQ0FBNkI7Y0FBN0IsOEJBQTZCO01BQzdCLFdBQVUsRUFDWDs7QUE1Qkw7TUE4Qk0sdUNBQThCO2NBQTlCLCtCQUE4QixFQUMvQjs7QUEvQkw7SUFrQ0ksOEJBQXFCO1lBQXJCLHNCQUFxQjtJQUNyQixnREFBK0MsRUFDaEQ7O0FBcENIO0lBc0NJLGlCQUFnQjtJQUNoQixtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLG9CQUFtQjtJQUNuQixrQkFBaUI7SUFDakIsZUFBYztJQUNkLG9DQUEyQjtZQUEzQiw0QkFBMkI7SUFDM0Isc0JBQXFCO0lBQ3JCLGlDQUFnQyxFQUNqQzs7QUFHSDtFQUNFLHdEQUErQztVQUEvQyxnREFBK0MsRUFDaEQ7O0FBRUQ7RUFDRTtJQUNFLGtCQUFpQjtJQUNqQixhQUFZO0lBQ1osV0FBVSxFQUFBO0VBRVo7SUFDRSxrQkFBaUI7SUFDakIsV0FBVTtJQUNWLFNBQVEsRUFBQSxFQUFBOztBQVRaO0VBQ0U7SUFDRSxrQkFBaUI7SUFDakIsYUFBWTtJQUNaLFdBQVUsRUFBQTtFQUVaO0lBQ0Usa0JBQWlCO0lBQ2pCLFdBQVU7SUFDVixTQUFRLEVBQUEsRUFBQTs7QUFJWjtFQUNFO0lBQ0UsV0FBVTtJQUNWLDRCQUFtQjtZQUFuQixvQkFBbUIsRUFBQTtFQUVyQjtJQUNFLFdBQVU7SUFDViw0QkFBbUI7WUFBbkIsb0JBQW1CLEVBQUEsRUFBQTs7QUFQdkI7RUFDRTtJQUNFLFdBQVU7SUFDViw0QkFBbUI7WUFBbkIsb0JBQW1CLEVBQUE7RUFFckI7SUFDRSxXQUFVO0lBQ1YsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUFBLEVBQUE7O0FBSXZCO0VBQ0U7SUFDRSx5Q0FBZ0M7WUFBaEMsaUNBQWdDLEVBQUE7RUFFbEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFFcEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFFcEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFFcEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFFcEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSx5Q0FBZ0M7WUFBaEMsaUNBQWdDLEVBQUEsRUFBQTs7QUFoQ3BDO0VBQ0U7SUFDRSx5Q0FBZ0M7WUFBaEMsaUNBQWdDLEVBQUE7RUFFbEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFFcEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFFcEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFFcEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFFcEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSx5Q0FBZ0M7WUFBaEMsaUNBQWdDLEVBQUEsRUFBQTs7QUFJcEM7RUFDRTtJQUNFLG1EQUEwQztZQUExQywyQ0FBMEM7SUFDMUMsV0FBVSxFQUFBO0VBRVo7SUFDRSxtREFBMEM7WUFBMUMsMkNBQTBDO0lBQzFDLFdBQVUsRUFBQSxFQUFBOztBQVBkO0VBQ0U7SUFDRSxtREFBMEM7WUFBMUMsMkNBQTBDO0lBQzFDLFdBQVUsRUFBQTtFQUVaO0lBQ0UsbURBQTBDO1lBQTFDLDJDQUEwQztJQUMxQyxXQUFVLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vZ2xvYmFsJztcblxuLm92ZXJsYXkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogLTE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoNTB2dyA0MHZoIGF0IDUwJSA1MCUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMikgdHJhbnNsYXRlKDI3dncsIC0xOHZoKSByb3RhdGUoMzM1ZGVnKTtcbiAgICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuMnMgYm90aCByaWdodFRvTGVmdDtcbiAgfVxuICBcbiAgLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuMnMgYm90aCBmYWRlSW47XG4gIH1cbiAgXG4gIC5uYXZiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAkb2ZmLXdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nOiAxLjZyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4ycyBib3RoIGZhZGVJbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgXG4gIC5uYXYtaXRlbXMge1xuICAgIC5uYXYtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAwLjJyZW0gMDtcbiAgICAgIG1hcmdpbjogMC42cmVtIDFyZW07XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDAuM3JlbSBzb2xpZCAkZ3JlZW47XG4gICAgICBjb2xvcjogJG9mZi13aGl0ZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGNvbG9yOiAkb2ZmLXdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICB9XG4gIFxuICAuc2hvcnQtYmlvIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBwYWRkaW5nOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuMnMgYm90aCBmYWRlSW47XG4gIH1cbiAgXG4gIC5xdW90ZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBhZGRpbmctdG9wOiAwcmVtO1xuICAgIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC40cyBib3RoIGZhZGVJbjtcbiAgfVxuICBcbiAgLm5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBwYWRkaW5nLXRvcDogMC42cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNHJlbTtcbiAgICB3b3JkLXNwYWNpbmc6IDAuMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogLTIuNXJlbTtcbiAgICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuNnMgYm90aCBmYWRlSW47XG4gICAgJjpob3ZlciB7XG4gICAgICAuc3RyaXA6OmFmdGVyIHtcbiAgICAgICAgbGVmdDogLTFyZW07XG4gICAgICB9XG4gICAgICAuc3RyaXA6OmJlZm9yZSB7XG4gICAgICAgIGxlZnQ6IDFyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuc3RyaXAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDI4cmVtO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC44cyBib3RoIGZhZGVJbjtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgICAgIG1hcmdpbjogMnB4IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IC0xcmVtO1xuICAgIH1cbiAgICAmOjphZnRlciB7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICAgICAgbWFyZ2luOiAycHggMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgdG9wOiA0cHg7XG4gICAgICBsZWZ0OiAxcmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLmNvbnRhY3QtYnRuIHtcbiAgICBtaW4td2lkdGg6IDE1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjA7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA3MHJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcyBlYXNlLWluLW91dCAxcyBib3RoO1xuICAgIGJveC1zaGFkb3c6IDdweCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAuMzEpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjdyZW0pO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMztcbiAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjJyZW0pO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgICAgc3BhbiB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4ycmVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgICAgYm94LXNoYWRvdzogNHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zMSk7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICdcXDAwYmInO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gICAgICBmb250LXNpemU6IDIuN3JlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1cHgpO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICB9XG5cbiAgLnRhZGEtYW5pbWF0aW9uIHtcbiAgICBhbmltYXRpb246IHRhZGEgMXMgZWFzZS1pbi1vdXQgMHMgMiBub3JtYWwgYm90aDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBsZWZ0VG9SaWdodCB7XG4gICAgMCUge1xuICAgICAgZGlzcGxheTogcmVsYXRpdmU7XG4gICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICBsZWZ0OiAtMjAlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGxlZnQ6IDAlO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyB0YWRhIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICAgIH1cbiAgICA4MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgICB9XG4gICAgOTAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzdHJpcEFuaW1hdGlvbiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KSByb3RhdGVaKDBkZWcpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSByb3RhdGVaKC0xNmRlZyk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfSIsIiRiZy1jb2xvcjogIzA4NWU3Mjtcbi8vICMxN2E1OTg7XG4kY29sb3IxOiAjZTc0YzNjO1xuJGNvbG9yMjogI2QyZTFkZDtcbiRjb2xvcjM6ICNkYjM4MWI7XG4kZ3JlZW46ICMxN2E1OTg7XG4vLyAkdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiRibGFjazogIzU1NTtcbiRvZmYtd2hpdGU6ICNlOGVlZWE7XG4kdGV4dC1jb2xvcjogcmdiKDczLCAzOSwgMzkpO1xuLy8gIzY5OTtcbiR3aGl0ZTogI2ZmZjtcbiRjb2xvcjQ6IHJnYigyNDcsIDE2OCwgMTY4KTtcbiRjb2xvcjU6ICM1NGE0YWY7Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.triggerAnimation = function (outlet) {
        return outlet.activatedRouteData.animation || null;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routerTransition', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), {
                            optional: true
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)', opacity: 0 }), {
                            optional: true
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["sequence"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@*, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()], { optional: true }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.8s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)', opacity: 0 }))
                                ], { optional: true }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)', opacity: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.8s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)', opacity: 1 }))
                                ], { optional: true }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@*, :enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()], { optional: true })
                            ])
                        ])
                    ])
                ])
            ]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _profile_pic_profile_pic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile-pic/profile-pic.component */ "./src/app/profile-pic/profile-pic.component.ts");
/* harmony import */ var _back_button_back_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./back-button/back-button.component */ "./src/app/back-button/back-button.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tags/tags.component */ "./src/app/tags/tags.component.ts");
// import { TagsService } from './services/tags.service';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
                _profile_pic_profile_pic_component__WEBPACK_IMPORTED_MODULE_10__["ProfilePicComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _back_button_back_button_component__WEBPACK_IMPORTED_MODULE_11__["BackButtonComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_12__["ProjectComponent"],
                _tags_tags_component__WEBPACK_IMPORTED_MODULE_13__["TagsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [
                // ProfileService,
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"], useValue: '!' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/back-button/back-button.component.html":
/*!********************************************************!*\
  !*** ./src/app/back-button/back-button.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"icon\">\n    <<back\n</div>"

/***/ }),

/***/ "./src/app/back-button/back-button.component.scss":
/*!********************************************************!*\
  !*** ./src/app/back-button/back-button.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  max-width: 5rem;\n  max-height: 5rem;\n  font-family: cursive;\n  color: red;\n  font-size: 1.4rem;\n  font-style: bold;\n  font-weight: 500%; }\n  .icon:hover {\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvYmFjay1idXR0b24vYmFjay1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixxQkFBb0I7RUFDcEIsV0FBVTtFQUNWLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBSWxCO0VBWEg7SUFTUSxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2JhY2stYnV0dG9uL2JhY2stYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xuICAgIG1heC13aWR0aDogNXJlbTtcbiAgICBtYXgtaGVpZ2h0OiA1cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICBmb250LXdlaWdodDogNTAwJTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyBcbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/back-button/back-button.component.ts":
/*!******************************************************!*\
  !*** ./src/app/back-button/back-button.component.ts ***!
  \******************************************************/
/*! exports provided: BackButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButtonComponent", function() { return BackButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackButtonComponent = /** @class */ (function () {
    function BackButtonComponent() {
    }
    BackButtonComponent.prototype.ngOnInit = function () {
    };
    BackButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-back-button',
            template: __webpack_require__(/*! ./back-button.component.html */ "./src/app/back-button/back-button.component.html"),
            styles: [__webpack_require__(/*! ./back-button.component.scss */ "./src/app/back-button/back-button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BackButtonComponent);
    return BackButtonComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div (click)=\"onBackClick()\">\n    <app-back-button></app-back-button> \n</div>\n\n<div class=\"overlay\"></div>\n<div class=\"container\">\n    <div class=\"card\">\n      <div class=\"strip-block\">\n        <div class=\"profile-logo\">\n          <img src=\"assets/images/profile-pic.png\" alt=\"\">\n        </div>\n        <div class=\"strip\"></div>\n        <div class=\"short-details\">\n          <blockquote class=\"quote tagLine\">\n            \"I like to explore new skills in a way of self-learning.\"\n          </blockquote>\n        </div>\n      </div>\n  \n      <div class=\"details\">\n          <div class=\"divider\">\n            <div class=\"stick \"></div>\n            <div class=\"stick \"></div>\n          </div>\n        <p class=\"bio\">I am a software developer cum software automation engineer and an aspiring Devops Engineer.\n        <br> I'm interested to work on frameowrks on Ruby, Python and in developing tools.\n        </p>\n        </div>\n      <div class=\"divider\">\n        <div class=\"stick\"></div>\n        <div class=\"stick\"></div>\n      </div>\n      <div class=\"typewriter\"><p>Contact me through any of these means: </p></div>\n      <div class=\"social\">\n          <div class=\"social-icon\">\n              <a href=\"https://www.facebook.com/Shswati1\" target=\"_blank\">\n                <img src=\"assets/assert/icons/facebook.png\" alt=\"slack icon\">\n              </a>\n            </div>\n        <div class=\"social-icon\">\n          <a href=\"https://www.slack.com/\" target=\"_blank\">\n            <img src=\"assets/assert/icons/slack.png\" alt=\"slack icon\">\n          </a>\n        </div>\n        <div class=\"social-icon\">\n          <a href=\"https://www.github.com/swati001\" target=\"_blank\">\n            <img src=\"assets/assert/icons/github.png\" alt=\"github icon\">\n          </a>\n        </div>\n        <div class=\"social-icon\">\n          <a href=\"https://www.linkedin.com/in/swati-sharma-aa423b89/\" target=\"_blank\">\n            <img src=\"assets/assert/icons/linkedin.png\" alt=\"linkedin icon\">\n          </a>\n        </div>\n        <div class=\"social-icon\">\n          <a href=\"mailto:swatiinfo86@gmail.com\">\n            <img src=\"assets/assert/icons/mail.png\" alt=\"email icon\">\n          </a>\n        </div>\n      </div>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\n  height: 90vh;\n  width: 90vw;\n  overflow: hidden;\n  z-index: -1;\n  display: block;\n  background: #d2e1dd;\n  position: fixed;\n  right: 0;\n  top: 0;\n  -webkit-clip-path: circle(60% 40%);\n          clip-path: circle(60% 40%);\n  -webkit-transform: scale(2) translate(27vw, -18vh) rotate(335deg);\n          transform: scale(2) translate(27vw, -18vh) rotate(335deg);\n  -webkit-animation: 1s ease-in-out 0.1s both leftToRight;\n          animation: 1s ease-in-out 0.1s both leftToRight; }\n\n.container {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  align-items: center;\n  padding: 1rem 0;\n  justify-content: center;\n  background-color: #d2e1dd;\n  color: #e8eeea; }\n\n.container .card {\n    background-color: #085e72;\n    height: auto;\n    max-height: 100vh;\n    width: 30rem;\n    text-align: center;\n    overflow-x: hidden;\n    position: relative;\n    z-index: 1;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    overflow: hidden;\n    border-radius: 10px;\n    box-shadow: 8px 7px 9px 0px #84a88a;\n    transition: all 0.3s ease-in-out;\n    -webkit-animation: dropin 1s ease-in-out 0s 1 normal both;\n            animation: dropin 1s ease-in-out 0s 1 normal both; }\n\n.container .profile-logo {\n    height: 14rem;\n    width: 14rem;\n    margin-top: 5.5rem;\n    display: inline-block;\n    position: relative;\n    z-index: 5; }\n\n.container .profile-logo img {\n      position: relative;\n      border: 0.2rem solid #e74c3c;\n      height: 70%;\n      width: 70%;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden;\n      transition: all 0.5s ease-in-out; }\n\n.container .strip {\n    background-color: #e74c3c;\n    height: 5rem;\n    width: 150%;\n    margin-left: -5rem;\n    margin-top: -20rem;\n    z-index: -1;\n    position: absolute;\n    -webkit-animation: stripAnimation 1s ease-in-out 1.4s 1 normal both;\n            animation: stripAnimation 1s ease-in-out 1.4s 1 normal both; }\n\n.container .strip::after {\n      content: '';\n      display: inline-block;\n      position: absolute;\n      height: 100%;\n      width: 20%;\n      background-color: #ffffff;\n      opacity: 0;\n      top: 0;\n      left: 0; }\n\n.container .strip:hover::after {\n      -webkit-animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both;\n              animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both; }\n\n.container .strip-block:hover .strip:after {\n    -webkit-animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both;\n            animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both; }\n\n.container .short-details {\n    position: relative;\n    -webkit-animation: dropin 1s ease-in-out 0.4s 1 normal both;\n            animation: dropin 1s ease-in-out 0.4s 1 normal both; }\n\n.container .short-details .tagLine {\n      display: block;\n      width: 100%;\n      font-size: 1.2rem;\n      font-weight: lighter;\n      font-style: italic;\n      padding: 0.5rem; }\n\n.container .short-details .quote {\n      font-family: 'Cormorant Garamond', serif;\n      display: inline-block;\n      font-size: 1.2rem;\n      font-weight: 100;\n      width: 65%;\n      padding: 0.5rem 2rem;\n      padding-bottom: 0.2rem;\n      line-height: 1.2; }\n\n.container .details {\n    margin-top: 1rem; }\n\n.container .details .nameBlock {\n      transition: all 0.3s ease-in-out;\n      -webkit-animation: dropin 1s ease-in-out 0.6s 1 normal both;\n              animation: dropin 1s ease-in-out 0.6s 1 normal both; }\n\n.container .details .name {\n      display: inline-block;\n      position: relative;\n      width: 60%;\n      font-size: 2rem;\n      font-weight: 400;\n      line-height: 1.6;\n      text-transform: uppercase;\n      letter-spacing: 0.2rem; }\n\n.container .details .bio {\n      display: inline-block;\n      width: 70%;\n      font-size: 1.2rem;\n      margin: 0.4rem;\n      line-height: 1.2;\n      font-weight: lighter;\n      margin-bottom: 0.8rem;\n      text-align: center;\n      word-spacing: 1px;\n      -webkit-animation: dropin 1s ease-in-out 0.8s 1 normal both;\n              animation: dropin 1s ease-in-out 0.8s 1 normal both; }\n\n.container .details .bio:hover {\n      -webkit-animation: fadeOut 0.2s ease-in-out 0s 1 normal both;\n              animation: fadeOut 0.2s ease-in-out 0s 1 normal both; }\n\n.container .social {\n    display: block;\n    padding: 3rem 3rem;\n    padding-top: 0;\n    margin-top: 0.6rem;\n    -webkit-animation: dropin 1s ease-in-out 1.2s 1 normal both;\n            animation: dropin 1s ease-in-out 1.2s 1 normal both; }\n\n.container .social .social-icon {\n      display: inline-block;\n      width: 2.2rem;\n      height: 2.2rem;\n      margin: 0.1rem 0.5rem;\n      background-color: #ffffff;\n      transition: all 0.3s ease-in-out; }\n\n.container .social .social-icon img {\n        height: 100%;\n        width: 100%; }\n\n.container .social .social-icon:hover {\n        -webkit-transform: scale(1.3);\n                transform: scale(1.3); }\n\n.typewriter p {\n  overflow: hidden;\n  /* Ensures the content is not revealed until the animation */\n  border-right: .10em solid red;\n  /* The typwriter cursor */\n  white-space: nowrap;\n  /* Keeps the content on a single line */\n  margin: 0 auto;\n  /* Gives that scrolling effect as the typing happens */\n  letter-spacing: .12em;\n  /* Adjust as needed */\n  font-family: Courier;\n  font-size: 1.1rem;\n  -webkit-animation: typing 4.5s steps(30, end), blink-caret 0.75s step-end infinite;\n          animation: typing 4.5s steps(30, end), blink-caret 0.75s step-end infinite; }\n\n/* The typing effect */\n\n@-webkit-keyframes typing {\n  from {\n    width: 0; }\n  to {\n    width: 80%; } }\n\n@keyframes typing {\n  from {\n    width: 0; }\n  to {\n    width: 80%; } }\n\n.divider {\n  padding: 1rem;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  position: relative; }\n\n.divider .stick {\n    display: inline-block;\n    position: relative;\n    height: 2px;\n    background-color: #e74c3c;\n    margin: 2px 0;\n    width: 75%;\n    clear: both; }\n\n@-webkit-keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%; }\n  100% {\n    opacity: 0.7;\n    left: 120%; } }\n\n@keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%; }\n  100% {\n    opacity: 0.7;\n    left: 120%; } }\n\n@-webkit-keyframes dropin {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes dropin {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes stripAnimation {\n  0% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1; } }\n\n@keyframes stripAnimation {\n  0% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVFLGFBQVk7RUFDWixZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxlQUFjO0VBQ2Qsb0JDUmM7RURTZCxnQkFBZTtFQUNmLFNBQVE7RUFDUixPQUFNO0VBQ04sbUNBQTBCO1VBQTFCLDJCQUEwQjtFQUMxQixrRUFBeUQ7VUFBekQsMERBQXlEO0VBQ3pELHdEQUErQztVQUEvQyxnREFBK0MsRUFDaEQ7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2Ysd0JBQXVCO0VBQ3ZCLDBCQ3pCYztFRDBCZCxlQ3JCaUIsRURxS2xCOztBQXpKRDtJQVdJLDBCQy9CYztJRGdDZCxhQUFZO0lBQ1osa0JBQWlCO0lBQ2pCLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLG1CQUFrQjtJQUNsQixXQUFVO0lBQ1YsMEJBQWlCO09BQWpCLHVCQUFpQjtRQUFqQixzQkFBaUI7WUFBakIsa0JBQWlCO0lBQ2pCLGlCQUFnQjtJQUNoQixvQkFBbUI7SUFDbkIsb0NBQW1DO0lBQ25DLGlDQUFnQztJQUNoQywwREFBaUQ7WUFBakQsa0RBQWlELEVBQ2xEOztBQXpCSDtJQTJCSSxjQUFhO0lBQ2IsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsbUJBQWtCO0lBQ2xCLFdBQVUsRUFjWDs7QUE5Q0g7TUFxQ00sbUJBQWtCO01BQ2xCLDZCQ3hEVTtNRHlEVixZQUFXO01BQ1gsV0FBVTtN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QTtFQUVaO0lBQ0UsYUFBWTtJQUNaLFdBQVUsRUFBQSxFQUFBOztBQUlkO0VBQ0U7SUFDRSxXQUFVO0lBQ1YsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUFBO0VBRXJCO0lBQ0UsV0FBVTtJQUNWLDRCQUFtQjtZQUFuQixvQkFBbUIsRUFBQSxFQUFBOztBQVB2QjtFQUNFO0lBQ0UsV0FBVTtJQUNWLDRCQUFtQjtZQUFuQixvQkFBbUIsRUFBQTtFQUVyQjtJQUNFLFdBQVU7SUFDViw0QkFBbUI7WUFBbkIsb0JBQW1CLEVBQUEsRUFBQTs7QUFJdkI7RUFDRTtJQUNFLHFDQUE0QjtZQUE1Qiw2QkFBNEI7SUFDNUIsV0FBVSxFQUFBO0VBRVo7SUFDRSxtQ0FBMEI7WUFBMUIsMkJBQTBCO0lBQzFCLFdBQVUsRUFBQSxFQUFBOztBQVBkO0VBQ0U7SUFDRSxxQ0FBNEI7WUFBNUIsNkJBQTRCO0lBQzVCLFdBQVUsRUFBQTtFQUVaO0lBQ0UsbUNBQTBCO1lBQTFCLDJCQUEwQjtJQUMxQixXQUFVLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL2dsb2JhbC5zY3NzJztcbiR0ZXh0LWNhcmQtc2hpZnQ6NDUlO1xuJHJvdy1jb2xvdW0tYnJrLXBvaW50OiAnbWF4LXdpZHRoOiAxMDQwcHgnO1xuXG4ub3ZlcmxheSB7XG4gIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA5MHZoO1xuICB3aWR0aDogOTB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogLTE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAkY29sb3IyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDYwJSA0MCUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpIHRyYW5zbGF0ZSgyN3Z3LCAtMTh2aCkgcm90YXRlKDMzNWRlZyk7XG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4xcyBib3RoIGxlZnRUb1JpZ2h0O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xuICBjb2xvcjogJG9mZi13aGl0ZTtcbiAgLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDMwcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDhweCA3cHggOXB4IDBweCAjODRhODhhO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDBzIDEgbm9ybWFsIGJvdGg7XG4gIH1cbiAgLnByb2ZpbGUtbG9nbyB7XG4gICAgaGVpZ2h0OiAxNHJlbTtcbiAgICB3aWR0aDogMTRyZW07XG4gICAgbWFyZ2luLXRvcDogNS41cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogNTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLy8gcGVyc3BlY3RpdmU6IDE1MDBweDtcbiAgICAvLyBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAwLjRzIDEgbm9ybWFsIGJvdGg7XG4gICAgaW1nIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkICRjb2xvcjE7XG4gICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAvLyAgIHBlcnNwZWN0aXZlOiAxNTAwcHg7XG4gICAgfVxuICB9XG4gIC5zdHJpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgd2lkdGg6IDE1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC01cmVtO1xuICAgIG1hcmdpbi10b3A6IC0yMHJlbTtcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVooLTE2ZGVnKTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYW5pbWF0aW9uOiBzdHJpcEFuaW1hdGlvbiAxcyBlYXNlLWluLW91dCAxLjRzIDEgbm9ybWFsIGJvdGg7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMjAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAmOmhvdmVyOjphZnRlciB7XG4gICAgICBhbmltYXRpb246IGZhZGVMZWZ0VG9SaWdodCAxcyBlYXNlLWluLW91dCAwcyAxIG5vcm1hbCBib3RoO1xuICAgIH1cbiAgfVxuICAuc3RyaXAtYmxvY2s6aG92ZXIge1xuICAgIC5zdHJpcDphZnRlciB7XG4gICAgICBhbmltYXRpb246IGZhZGVMZWZ0VG9SaWdodCAxcyBlYXNlLWluLW91dCAwcyAxIG5vcm1hbCBib3RoO1xuICAgIH1cbiAgfVxuICAuc2hvcnQtZGV0YWlscyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuNHMgMSBub3JtYWwgYm90aDtcbiAgICAudGFnTGluZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB9XG4gICAgLnF1b3RlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICB3aWR0aDogNjUlO1xuICAgICAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB9XG4gIH1cbiAgLmRldGFpbHMge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgLm5hbWVCbG9jayB7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuNnMgMSBub3JtYWwgYm90aDtcbiAgICB9XG4gICAgLm5hbWUge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG4gICAgfVxuICAgIC5iaW8ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgbWFyZ2luOiAwLjRyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3b3JkLXNwYWNpbmc6IDFweDtcbiAgICAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuOHMgMSBub3JtYWwgYm90aDtcbiAgICB9XG4gICAgLmJpbzpob3ZlciB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IDAuMnMgZWFzZS1pbi1vdXQgMHMgMSBub3JtYWwgYm90aDtcbiAgICAgICAgfVxuICB9XG4gIC5zb2NpYWwge1xuICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBwYWRkaW5nOiAxcmVtIDA7XG4gICAgcGFkZGluZzogM3JlbSAzcmVtO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIG1hcmdpbi10b3A6IDAuNnJlbTtcbiAgICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAxLjJzIDEgbm9ybWFsIGJvdGg7XG4gICAgLnNvY2lhbC1pY29uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyLjJyZW07XG4gICAgICBoZWlnaHQ6IDIuMnJlbTtcbiAgICAgIG1hcmdpbjogMC4xcmVtIDAuNXJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLnR5cGV3cml0ZXIgcCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogRW5zdXJlcyB0aGUgY29udGVudCBpcyBub3QgcmV2ZWFsZWQgdW50aWwgdGhlIGFuaW1hdGlvbiAqL1xuICAgIGJvcmRlci1yaWdodDogLjEwZW0gc29saWQgcmVkOyAvKiBUaGUgdHlwd3JpdGVyIGN1cnNvciAqL1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIEtlZXBzIHRoZSBjb250ZW50IG9uIGEgc2luZ2xlIGxpbmUgKi9cbiAgICBtYXJnaW46IDAgYXV0bzsgLyogR2l2ZXMgdGhhdCBzY3JvbGxpbmcgZWZmZWN0IGFzIHRoZSB0eXBpbmcgaGFwcGVucyAqL1xuICAgIGxldHRlci1zcGFjaW5nOiAuMTJlbTsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xuICAgIGZvbnQtZmFtaWx5OiBDb3VyaWVyO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGFuaW1hdGlvbjogXG4gICAgICB0eXBpbmcgNC41cyBzdGVwcygzMCwgZW5kKSxcbiAgICAgIGJsaW5rLWNhcmV0IC43NXMgc3RlcC1lbmQgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC8qIFRoZSB0eXBpbmcgZWZmZWN0ICovXG4gIEBrZXlmcmFtZXMgdHlwaW5nIHtcbiAgICBmcm9tIHsgd2lkdGg6IDAgfVxuICAgIHRvIHsgd2lkdGg6IDgwJSB9XG4gIH1cblxuLmRpdmlkZXIge1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAuc3RpY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcbiAgICBtYXJnaW46IDJweCAwO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlTGVmdFRvUmlnaHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4xO1xuICAgIGxlZnQ6IC0xMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGxlZnQ6IDEyMCU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBkcm9waW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHN0cmlwQW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59IiwiJGJnLWNvbG9yOiAjMDg1ZTcyO1xuLy8gIzE3YTU5ODtcbiRjb2xvcjE6ICNlNzRjM2M7XG4kY29sb3IyOiAjZDJlMWRkO1xuJGNvbG9yMzogI2RiMzgxYjtcbiRncmVlbjogIzE3YTU5ODtcbi8vICR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrOiAjNTU1O1xuJG9mZi13aGl0ZTogI2U4ZWVlYTtcbiR0ZXh0LWNvbG9yOiByZ2IoNzMsIDM5LCAzOSk7XG4vLyAjNjk5O1xuJHdoaXRlOiAjZmZmO1xuJGNvbG9yNDogcmdiKDI0NywgMTY4LCAxNjgpO1xuJGNvbG9yNTogIzU0YTRhZjsiXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(router) {
        this.router = router;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onContactClick = function () {
        this.router.navigateByUrl('/');
    };
    ContactComponent.prototype.onBackClick = function () {
        this.router.navigateByUrl('/');
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/data/exclaim.data.ts":
/*!**************************************!*\
  !*** ./src/app/data/exclaim.data.ts ***!
  \**************************************/
/*! exports provided: ExclaimData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExclaimData", function() { return ExclaimData; });
var ExclaimData = {
    id: '1',
    name: 'Exclaim',
    description: 'A web application for allowing customer to submit a claims, more efficient tracking of repeat disputes, to view the status of disputes any time',
    client: 'AT&T',
    duration: '10/01/2007 - 11/01/2008',
    imageLink: '../../assets/images/exclaim.png',
    features: [
        'Build JSP pages',
        'Javascript validations of pages',
        'Stateful session implemetation and Authentication & Authorization for user login',
        'Implementation of multiple Java design patterns like Singleton, Factory and DAO'
    ],
    tags: ['Java'],
    techStuff: [
        'Java',
        'Struts, JSP, Javascript',
        'EJB',
        'Oracle'
    ],
    additionalData: []
};


/***/ }),

/***/ "./src/app/data/fame-met.data.ts":
/*!***************************************!*\
  !*** ./src/app/data/fame-met.data.ts ***!
  \***************************************/
/*! exports provided: FameMetData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FameMetData", function() { return FameMetData; });
var FameMetData = {
    id: '2',
    name: 'Fame-Met',
    description: 'A BT application which deals in telecommunication domain and serves customers in different regions of UK.',
    client: 'British Telecom (BT)',
    duration: '11/11/2008 - 06/20/2010',
    imageLink: '../../assets/images/fame.png',
    features: [
        'Monitoring the servers and maintaining the servers health',
        'Deployment of applications on servers and maintains the deployment status if required',
        'Testing the applications using data or timestamps and searching logs in Unix',
        'Automating the process of monitoring servers using unix scripts and cron jobs and triggers an email if any issue',
        'Build a UI dashboard for server health status and status of deploymnet of applications, which helps in represeting',
    ],
    tags: ['Java'],
    techStuff: [
        'Unix, Shell scripting',
        'Java/J2EE',
        'JSP, Javascript, Cron',
        'Oracle'
    ],
    additionalData: []
};


/***/ }),

/***/ "./src/app/data/ica.data.ts":
/*!**********************************!*\
  !*** ./src/app/data/ica.data.ts ***!
  \**********************************/
/*! exports provided: IcaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IcaData", function() { return IcaData; });
var IcaData = {
    id: '4',
    name: 'ICA',
    description: 'A retail web application for handling supply to stores and warehouses, orders and forecasting the demands',
    client: 'ICA',
    duration: '02/23/2012 - 04/15/2014',
    imageLink: '../../assets/images/ica.png',
    features: [
        'Retails Web Application for store or warehouse requests,  does orders management, supply management and pricing management',
        'There are over 1300 ICA stores throughout Sweden, Netherlands',
        'Developmnet of new features and defect fixing on existing features in production or test',
        'Handling messaging services and SOAP web services',
    ],
    tags: ['Java'],
    techStuff: [
        'Java/J2EE, Java design patterns',
        'Struts, Javascript, Hibernate, JMS, Web Services, GWT',
        'Oracle'
    ],
    additionalData: []
};


/***/ }),

/***/ "./src/app/data/lowes.data.ts":
/*!************************************!*\
  !*** ./src/app/data/lowes.data.ts ***!
  \************************************/
/*! exports provided: LowesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LowesData", function() { return LowesData; });
var LowesData = {
    id: '5',
    name: 'Lowes Mobile App',
    description: 'A retail web and mobile application for customers online shopping for customer on home improvemnt products and materials',
    client: 'Lowes',
    duration: '04/16/2014 - 02/01/2015',
    imageLink: '../../assets/images/lowes.png',
    features: [
        'Built a framework using Cucumber for automation test to remove legacy testing.',
        'Implementation to support multiple mobile platforms.',
        'Parallel execution of test scenarios on web browsers and mobile browsers on real devies for iOS and Android',
        'Implemnetation of crawler script which vistes each and every link of website and stores the status in excel sheet for each link visited.'
    ],
    tags: ['Java'],
    techStuff: [
        'Java design patterns',
        'Cucumber, Gherkin, Selenium, Appium, Saucelabs, Android, iOS',
        'Oracle, SQL'
    ],
    additionalData: []
};


/***/ }),

/***/ "./src/app/data/proquest.data.ts":
/*!***************************************!*\
  !*** ./src/app/data/proquest.data.ts ***!
  \***************************************/
/*! exports provided: ProquestData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProquestData", function() { return ProquestData; });
var ProquestData = {
    id: '3',
    name: 'ProQuest',
    description: 'A web application made to search to access the best journals, databases, and ebook resources. It curates content that matters to the students, libraries, researchers.',
    client: 'ProQuest',
    duration: ' 06/23/2010 - 01/09/2012',
    imageLink: '../../assets/images/proquest.png',
    features: [
        'Implementations of JSF pages and binding with database folowing MVC pattern using Oracle ADF',
        'Login and authentication functionality for users as Students, organizations and libraries',
        'Developmnet of new web pages and unit testing of pages and features',
        'Validations of fields on JSF pages',
    ],
    tags: ['Java'],
    techStuff: [
        'Java/J2EE',
        'JSF, Javascript, Oracle ADF, CSS, WebLogic server',
        'Oracle 10g'
    ],
    additionalData: []
};


/***/ }),

/***/ "./src/app/data/xfinity-mobile.data.ts":
/*!*********************************************!*\
  !*** ./src/app/data/xfinity-mobile.data.ts ***!
  \*********************************************/
/*! exports provided: XfinityMobileData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XfinityMobileData", function() { return XfinityMobileData; });
var XfinityMobileData = {
    id: '5',
    name: 'Xfinity Mobile',
    description: 'A retail web application introduced as Xfinity Mobile which sells mobile plans and phones',
    client: 'Comcast',
    duration: '02/01/2015 - 11/20/2016',
    imageLink: '../../assets/images/xmobile.png',
    features: [
        'Xfinity customers can purchase phone and plans',
        'Xfinity customers can also see their account informations like billing histories and payments',
        'Created the automation frameowrk in Java and also in Ruby and Selenium',
        'Wrote the automated tests to cover end to end functionality',
        'Automated the process of parallel execution on Saucelabas and implemented CI/CD pipeline'
    ],
    tags: ['Ruby'],
    techStuff: [
        'Ruby',
        'Cucumber, Gherkin, Selenium, Capybara, Saucelabs, Jenkins',
        'APIs'
    ],
    additionalData: []
};


/***/ }),

/***/ "./src/app/data/xfinitytv.data.ts":
/*!****************************************!*\
  !*** ./src/app/data/xfinitytv.data.ts ***!
  \****************************************/
/*! exports provided: XfinityTvData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XfinityTvData", function() { return XfinityTvData; });
var XfinityTvData = {
    id: '5',
    name: 'Xfinity TV App',
    description: 'An entertainment mobile TV app for watching channels, movies, tv video contents on phone/tablets',
    client: 'Comcast',
    duration: '02/01/2015 - 11/20/2016',
    imageLink: '../../assets/images/xfinitytv.png',
    features: [
        'Customers can subscribe to any channels, watch list of different categories of videos, on demand or recorded episodes',
        'Implemented automation scripts to tests the feature for playing movies or tv shows on mobile',
        'Automated the app on mobile platform, using Ruby and calabash',
        'Wrote the performance script in Ruby to measure download speed of viedo contents of different type and length',
        'Automated the Rest apis in Ruby'
    ],
    tags: ['Ruby'],
    techStuff: [
        'Ruby',
        'Cucumber, Gherkin, Selenium, Calabash, Jenkins, Android, iOS',
        'Rest API'
    ],
    additionalData: []
};


/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"overlay\"></div>\n<div class=\"root-container\">\n  <div class=\"navbar\">\n    <div class=\"nav-items\">\n      <a [routerLink]=\"['profiles']\" class=\"nav-item\" >About & Skills</a>\n      <!-- <a [routerLink]=\"['/skills']\" class=\"nav-item\"></a> -->\n      <a [routerLink]=\"['/projects']\" class=\"nav-item\">Projects</a>\n    </div>\n  </div>\n  <br><br>\n  <div class=\"container\">\n      <app-profile-pic class=\"profile-image\"></app-profile-pic>\n      <h4 class=\"short-bio\">Software/Web Developer | Mobile/Web Application Automation Tester | Devops Engineer </h4>\n      <q class=\"quote\">Hi! I am Swati Sharma,\n      I love programming and have passion to learn new technologies. </q>\n      <q class=\"quote\">I like to explore new skills in a way of self-learning.</q>\n      <div class=\"strip\"></div>\n      <br><br><br>\n      <span (click)=\"onContactClick()\" (mouseover)=\"startLink1Animation = false\" [ngClass]=\"{'link-animation':startLink1Animation}\">\n        <button class=\"special-btn\">\n        <span>\n          Contact Me\n        </span>\n        </button>\n      </span>\n  </div>\n</div>  "

/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root-container {\n  display: flex;\n  flex-direction: column;\n  height: 80vh;\n  width: 100vw; }\n\n.overlay {\n  height: 90vh;\n  width: 90vw;\n  overflow: hidden;\n  z-index: -1;\n  display: block;\n  background: #d2e1dd;\n  position: fixed;\n  right: 0;\n  top: 0;\n  -webkit-clip-path: circle(60% 40%);\n          clip-path: circle(60% 40%);\n  -webkit-transform: scale(2) translate(27vw, -18vh) rotate(335deg);\n          transform: scale(2) translate(27vw, -18vh) rotate(335deg);\n  -webkit-animation: 1s ease-in-out 0.1s both leftToRight;\n          animation: 1s ease-in-out 0.1s both leftToRight; }\n\n.profile-image {\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn; }\n\n.navbar {\n  width: 100%;\n  color: #e8eeea;\n  font-size: 1.5rem;\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.nav-items .nav-item {\n  display: inline-block;\n  padding: 0.2rem 0;\n  margin: 0.6rem 1rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  border-bottom: 0.3rem solid red;\n  color: #492727;\n  text-decoration: none; }\n\n.container {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: 1.2rem;\n  color: #e8eeea;\n  margin-top: 5%; }\n\n.short-bio {\n  font-size: 1.2rem;\n  padding: 1rem;\n  color: #492727;\n  font-weight: normal;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn; }\n\n.quote {\n  font-family: 'Cormorant Garamond', serif;\n  font-size: 1.2rem;\n  padding: 1rem;\n  padding-top: 0rem;\n  color: #492727;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn; }\n\n.name {\n  font-family: 'Cormorant Garamond', serif;\n  font-size: 2.4rem;\n  font-weight: bold;\n  line-height: 1.6;\n  padding-top: 0.6rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4rem;\n  word-spacing: 0.2rem;\n  text-align: center;\n  margin-bottom: -2.5rem;\n  -webkit-animation: 1s ease-in-out 0.6s both fadeIn;\n          animation: 1s ease-in-out 0.6s both fadeIn; }\n\n.name:hover .strip::after {\n    left: -1rem; }\n\n.name:hover .strip::before {\n    left: 1rem; }\n\n.strip {\n  display: inline-block;\n  position: relative;\n  width: 28rem;\n  margin: auto;\n  margin-bottom: 1rem;\n  -webkit-animation: 1s ease-in-out 0.8s both fadeIn;\n          animation: 1s ease-in-out 0.8s both fadeIn; }\n\n.strip::before {\n    transition: 0.3s all ease-in-out;\n    content: '';\n    position: absolute;\n    display: inline-block;\n    height: 2px;\n    background-color: #e74c3c;\n    margin: 2px 0;\n    width: 100%;\n    margin: auto;\n    top: 0;\n    left: -1rem; }\n\n.strip::after {\n    transition: 0.3s all ease-in-out;\n    position: absolute;\n    display: inline-block;\n    content: '';\n    height: 2px;\n    background-color: #e74c3c;\n    margin: 2px 0;\n    width: 100%;\n    margin: auto;\n    top: 4px;\n    left: 1rem; }\n\n.special-btn {\n  min-width: 8rem;\n  line-height: 1.1;\n  font-size: 1.1rem;\n  padding: 0.5rem;\n  margin-top: 2rem;\n  background-color: #e74c3c;\n  color: #fff;\n  border: none;\n  outline: none;\n  border-radius: 100rem;\n  cursor: pointer;\n  transition: all .3s ease-in-out;\n  -webkit-animation: fadeIn 1s ease-in-out 1s both;\n          animation: fadeIn 1s ease-in-out 1s both;\n  box-shadow: 7px 5px 8px 0 rgba(0, 0, 0, 0.31);\n  position: relative; }\n\n.special-btn span {\n    position: relative;\n    -webkit-transform: translateX(0.7rem);\n            transform: translateX(0.7rem);\n    display: inline-block;\n    transition: all 0.3s ease-in-out; }\n\n.special-btn:hover {\n    background-color: #db381b;\n    -webkit-animation-play-state: paused;\n            animation-play-state: paused; }\n\n.special-btn:hover::after {\n      -webkit-transform: translateX(0.2rem);\n              transform: translateX(0.2rem);\n      opacity: 5; }\n\n.special-btn:hover span {\n      -webkit-transform: translateX(-0.2rem);\n              transform: translateX(-0.2rem); }\n\n.special-btn::after {\n    content: '\\2192';\n    position: relative;\n    opacity: 0;\n    vertical-align: sub;\n    font-size: 1.5rem;\n    line-height: 0;\n    display: inline-block;\n    transition: all 0.3s ease-in-out; }\n\n.link-animation {\n  -webkit-animation: shake 1s ease-in-out 0s 2 normal both;\n          animation: shake 1s ease-in-out 0s 2 normal both; }\n\n@-webkit-keyframes shake {\n  0% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); }\n  10% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  20% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  30% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  40% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  50% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  60% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  70% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  80% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  90% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  100% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); } }\n\n@keyframes shake {\n  0% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); }\n  10% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  20% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  30% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  40% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  50% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  60% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  70% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  80% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  90% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  100% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLGFBQVksRUFDYjs7QUFFRDtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxlQUFjO0VBQ2Qsb0JDWmM7RURhZCxnQkFBZTtFQUNmLFNBQVE7RUFDUixPQUFNO0VBQ04sbUNBQTBCO1VBQTFCLDJCQUEwQjtFQUMxQixrRUFBeUQ7VUFBekQsMERBQXlEO0VBQ3pELHdEQUErQztVQUEvQyxnREFBK0MsRUFDaEQ7O0FBRUQ7RUFDRSxtREFBMEM7VUFBMUMsMkNBQTBDLEVBQzNDOztBQUVEO0VBQ0UsWUFBVztFQUNYLGVDdEJpQjtFRHVCakIsa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUVJLHNCQUFxQjtFQUNyQixrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLDBCQUFpQjtLQUFqQix1QkFBaUI7TUFBakIsc0JBQWlCO1VBQWpCLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGdDQUErQjtFQUMvQixlQ3JDd0I7RURzQ3hCLHNCQUFxQixFQUN0Qjs7QUFHSDtFQUNFLGNBQWE7RUFDYixRQUFPO0VBQ1AsdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixlQ25EaUI7RURvRGpCLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQixjQUFhO0VBQ2IsZUN6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O1lBQWxDLG1DQUFrQyxFQUFBO0VBRXBDO0lBQ0UsNENBQW1DO1lBQW5DLG9DQUFtQyxFQUFBO0VBRXJDO0lBQ0UsMkNBQWtDO1lBQWxDLG1DQUFrQyxFQUFBO0VBRXBDO0lBQ0UsNENBQW1DO1lBQW5DLG9DQUFtQyxFQUFBO0VBRXJDO0lBQ0UsMkNBQWtDO1lBQWxDLG1DQUFrQyxFQUFBO0VBRXBDO0lBQ0UsNENBQW1DO1lBQW5DLG9DQUFtQyxFQUFBO0VBRXJDO0lBQ0UsMkNBQWtDO1lBQWxDLG1DQUFrQyxFQUFBO0VBRXBDO0lBQ0UsNENBQW1DO1lBQW5DLG9DQUFtQyxFQUFBO0VBRXJDO0lBQ0UseUNBQWdDO1lBQWhDLGlDQUFnQyxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9nbG9iYWwuc2Nzcyc7XG4kc21fYnJlYWtfcG9pbnQ6NTYwcHg7XG4ucm9vdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDgwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLm92ZXJsYXkge1xuICBoZWlnaHQ6IDkwdmg7XG4gIHdpZHRoOiA5MHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAtMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICRjb2xvcjI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoNjAlIDQwJSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMikgdHJhbnNsYXRlKDI3dncsIC0xOHZoKSByb3RhdGUoMzM1ZGVnKTtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjFzIGJvdGggbGVmdFRvUmlnaHQ7XG59XG5cbi5wcm9maWxlLWltYWdlIHtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjJzIGJvdGggZmFkZUluO1xufVxuXG4ubmF2YmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAkb2ZmLXdoaXRlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXYtaXRlbXMge1xuICAubmF2LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwLjJyZW0gMDtcbiAgICBtYXJnaW46IDAuNnJlbSAxcmVtO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAwLjNyZW0gc29saWQgcmVkO1xuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogJG9mZi13aGl0ZTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5zaG9ydC1iaW8ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuMnMgYm90aCBmYWRlSW47XG59XG5cbi5xdW90ZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMHJlbTtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuMnMgYm90aCBmYWRlSW47XG59XG5cbi5uYW1lIHtcbiAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBwYWRkaW5nLXRvcDogMC42cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC40cmVtO1xuICB3b3JkLXNwYWNpbmc6IDAuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAtMi41cmVtO1xuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuNnMgYm90aCBmYWRlSW47XG4gICY6aG92ZXIge1xuICAgIC5zdHJpcDo6YWZ0ZXIge1xuICAgICAgbGVmdDogLTFyZW07XG4gICAgfVxuICAgIC5zdHJpcDo6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IDFyZW07XG4gICAgfVxuICB9XG59XG5cbi5zdHJpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjhyZW07XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjhzIGJvdGggZmFkZUluO1xuICAmOjpiZWZvcmUge1xuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgICBtYXJnaW46IDJweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTFyZW07XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgICBtYXJnaW46IDJweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6IDRweDtcbiAgICBsZWZ0OiAxcmVtO1xuICB9XG59XG5cbi5zcGVjaWFsLWJ0biB7XG4gIG1pbi13aWR0aDogOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2UtaW4tb3V0IDFzIGJvdGg7XG4gIGJveC1zaGFkb3c6IDdweCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAuMzEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHNwYW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC43cmVtKTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMztcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICAgICY6OmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjJyZW0pO1xuICAgICAgb3BhY2l0eTogNTtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMnJlbSk7XG4gICAgfVxuICB9XG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4vLyAgICAgYm94LXNoYWRvdzogNHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zMSk7XG4vLyAgIH1cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICdcXDIxOTInO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1cHgpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgfVxufVxuXG4ubGluay1hbmltYXRpb24ge1xuICBhbmltYXRpb246IHNoYWtlIDFzIGVhc2UtaW4tb3V0IDBzIDIgbm9ybWFsIGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gICAgfVxuICAgIDYwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xuICAgIH1cbiAgICA3MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gICAgfVxuICAgIDgwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xuICAgIH1cbiAgICA5MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gICAgfVxuICB9IiwiJGJnLWNvbG9yOiAjMDg1ZTcyO1xuLy8gIzE3YTU5ODtcbiRjb2xvcjE6ICNlNzRjM2M7XG4kY29sb3IyOiAjZDJlMWRkO1xuJGNvbG9yMzogI2RiMzgxYjtcbiRncmVlbjogIzE3YTU5ODtcbi8vICR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrOiAjNTU1O1xuJG9mZi13aGl0ZTogI2U4ZWVlYTtcbiR0ZXh0LWNvbG9yOiByZ2IoNzMsIDM5LCAzOSk7XG4vLyAjNjk5O1xuJHdoaXRlOiAjZmZmO1xuJGNvbG9yNDogcmdiKDI0NywgMTY4LCAxNjgpO1xuJGNvbG9yNTogIzU0YTRhZjsiXX0= */"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = /** @class */ (function () {
    function LandingComponent(router) {
        this.router = router;
        this.Contact = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startLink1Animation = false;
        this.startLink2Animation = false;
        this.startLink3Animation = false;
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.startLink1Animation = !_this.startLink1Animation;
        }, 2000);
        setInterval(function () {
            _this.startLink2Animation = !_this.startLink2Animation;
        }, 3500);
        setInterval(function () {
            _this.startLink3Animation = !_this.startLink3Animation;
        }, 5000);
    };
    LandingComponent.prototype.onContactClick = function () {
        this.Contact.emit();
        this.router.navigateByUrl('contact');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('ExploreMe'),
        __metadata("design:type", Object)
    ], LandingComponent.prototype, "Contact", void 0);
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/profile-pic/profile-pic.component.html":
/*!********************************************************!*\
  !*** ./src/app/profile-pic/profile-pic.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-logo\" [ngStyle]=\"logoStyles\">\n    <img [ngStyle]=\"imgStyle\" src=\"assets/images/profile-pic.png\" alt=\"my pic\"/>\n  </div>"

/***/ }),

/***/ "./src/app/profile-pic/profile-pic.component.scss":
/*!********************************************************!*\
  !*** ./src/app/profile-pic/profile-pic.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-logo {\n  height: 14rem;\n  width: 14rem;\n  display: inline-block;\n  position: relative;\n  z-index: 5;\n  -webkit-perspective: 1500px;\n          perspective: 1500px; }\n  .profile-logo img {\n    position: relative;\n    border: 0.2rem solid #e74c3c;\n    height: 100%;\n    width: 100%;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transition: all 0.2s ease-in-out;\n    -webkit-perspective: 1500px;\n            perspective: 1500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvcHJvZmlsZS1waWMvcHJvZmlsZS1waWMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc3NoYXJtYTAwMS9Eb2N1bWVudHMvTXlQcm9qZWN0cy9hbmd1bGFyLXBvcnRmb2xpby9zcmMvYXBwL2dsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBYTtFQUNiLGFBQVk7RUFFWixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLFdBQVU7RUFFViw0QkFBbUI7VUFBbkIsb0JBQW1CLEVBMENwQjtFQWxERDtJQVlJLG1CQUFrQjtJQUNsQiw2QkNiWTtJRGNaLGFBQVk7SUFDWixZQUFXO0lBRVgsb0NBQTJCO1lBQTNCLDRCQUEyQjtJQUMzQixpQ0FBZ0M7SUFDaEMsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtcGljL3Byb2ZpbGUtcGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vZ2xvYmFsJztcblxuLnByb2ZpbGUtbG9nbyB7XG4gIGhlaWdodDogMTRyZW07XG4gIHdpZHRoOiAxNHJlbTtcbiAgLy8gbWFyZ2luLXRvcDogNnJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGVyc3BlY3RpdmU6IDE1MDBweDtcbi8vICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4vLyAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuNHMgMSBub3JtYWwgYm90aDtcbiAgaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAwLjJyZW0gc29saWQgJGNvbG9yMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBwZXJzcGVjdGl2ZTogMTUwMHB4O1xuICB9XG4vLyAgICY6OmFmdGVyIHtcbi8vICAgICBjb250ZW50OiAnUml0d2ljayBEZXknO1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBjb2xvcjogI2ZmZjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xuLy8gICAgIGJvcmRlcjogMC44cmVtIHNvbGlkICRjb2xvcjM7XG4vLyAgICAgdG9wOiAwcHg7XG4vLyAgICAgbGVmdDogMHB4O1xuLy8gICAgIHotaW5kZXg6IDEwO1xuLy8gICAgIGZvbnQtc2l6ZTogMC44ZW07XG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4vLyAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4vLyAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuLy8gICAgIHBlcnNwZWN0aXZlOiAxNTAwcHg7XG4vLyAgIH1cbi8vICAgJjpob3ZlciB7XG4vLyAgICAgaW1nIHtcbi8vICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICAmOmhvdmVyOjphZnRlciB7XG4vLyAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuLy8gICB9XG59IiwiJGJnLWNvbG9yOiAjMDg1ZTcyO1xuLy8gIzE3YTU5ODtcbiRjb2xvcjE6ICNlNzRjM2M7XG4kY29sb3IyOiAjZDJlMWRkO1xuJGNvbG9yMzogI2RiMzgxYjtcbiRncmVlbjogIzE3YTU5ODtcbi8vICR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrOiAjNTU1O1xuJG9mZi13aGl0ZTogI2U4ZWVlYTtcbiR0ZXh0LWNvbG9yOiByZ2IoNzMsIDM5LCAzOSk7XG4vLyAjNjk5O1xuJHdoaXRlOiAjZmZmO1xuJGNvbG9yNDogcmdiKDI0NywgMTY4LCAxNjgpO1xuJGNvbG9yNTogIzU0YTRhZjsiXX0= */"

/***/ }),

/***/ "./src/app/profile-pic/profile-pic.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile-pic/profile-pic.component.ts ***!
  \******************************************************/
/*! exports provided: ProfilePicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicComponent", function() { return ProfilePicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfilePicComponent = /** @class */ (function () {
    function ProfilePicComponent() {
    }
    ProfilePicComponent.prototype.ngOnInit = function () {
        this.logoStyles = {
            height: this.height,
            width: this.width
        };
        this.imgStyle = {
            borderWidth: this.borderWidth
        };
    };
    ProfilePicComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('height'),
        __metadata("design:type", String)
    ], ProfilePicComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('width'),
        __metadata("design:type", String)
    ], ProfilePicComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('borderWidth'),
        __metadata("design:type", String)
    ], ProfilePicComponent.prototype, "borderWidth", void 0);
    ProfilePicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-pic',
            template: __webpack_require__(/*! ./profile-pic.component.html */ "./src/app/profile-pic/profile-pic.component.html"),
            styles: [__webpack_require__(/*! ./profile-pic.component.scss */ "./src/app/profile-pic/profile-pic.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfilePicComponent);
    return ProfilePicComponent;
}());



/***/ }),

/***/ "./src/app/profile.data.ts":
/*!*********************************!*\
  !*** ./src/app/profile.data.ts ***!
  \*********************************/
/*! exports provided: PROFILE_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_DATA", function() { return PROFILE_DATA; });
var PROFILE_DATA = [
    {
        type: 'Programming Language',
        name: [
            'Java', 'Ruby', 'Python'
        ]
    },
    {
        type: 'Backend',
        name: [
            'Node.js & Express.js', 'Rest API'
        ]
    },
    {
        type: 'Frontend',
        name: [
            'AngularJS 7', 'CSS', 'HTML'
        ]
    },
    {
        type: 'Database & ORM',
        name: [
            'Oracle', 'MongoDB', 'SqlLite', 'Mongoose'
        ]
    },
    {
        type: 'Software Tools',
        name: [
            'Eclipse', 'Visual Studio', 'RubyMine'
        ]
    },
    {
        type: 'Software Automation Frameworks',
        name: [
            'Calabash', 'Capybara', 'Selenium', 'Appium'
        ]
    },
    {
        type: 'Testing Frameworks',
        name: [
            'JUnit', 'Chai', 'TestNG'
        ]
    },
    {
        type: 'Others',
        name: [
            'Git & GitHub', 'Jenkins', 'Docker', 'Postman', 'JWT', 'Auth0'
        ]
    }
];


/***/ }),

/***/ "./src/app/profile.service.ts":
/*!************************************!*\
  !*** ./src/app/profile.service.ts ***!
  \************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _profile_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.data */ "./src/app/profile.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { MessageService } from './message.service';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ProfileService = /** @class */ (function () {
    function ProfileService() {
    }
    ProfileService.prototype.getSkills = function () {
        return _profile_data__WEBPACK_IMPORTED_MODULE_2__["PROFILE_DATA"];
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div (click)=\"onBackClick()\">\n     <app-back-button></app-back-button> \n</div>\n\n  <span class=\"overlay\"></span>\n  <div class=\"container\">\n    <div class=\"side1\">\n      <div class=\"text-container\">\n          <h1 class=\"text-header\">About</h1>\n        <p>\n          I have 10 years of experience in software engineering. I have worked as a software developer for different clients\n          and also gained experience in software automation testing. I started programming with Java and J2EE in 2008 and I learned about different tools\n          while working on different projects. I gained experience in Ruby, AngularJS, node.js. \n        </p>\n          <p>\n          I jumped into software automation in 2014 for building a frameowrk in Java. I love working on new skills and technologies and resolving problems.\n          In Software automation field, I got opportunity to work on Capybara, Calabash, Appium, Selenium, Cucumber.\n          I like to build frameowrks and tools to help teams and to gain experience with software architecture.\n        </p>\n        <br>\n        <h4>Highlights:</h4>\n         \n            <ul>\n              <li> Built a project dashboard using Struts/JSP for my first project, which checks the status of servers using cron jobs and triggers the mail. </li>\n              <li> Built a crawler script in Java to check each and every link of Web Application and stores the status in desired format.</li>\n              <li> Built ruby custom gems for different teams to use, for creating customers data to be used in login purpose.</li>\n            </ul>\n        \n        <br>\n        <p>\n          Apart from programming, I like to play badminton, baking and watch documentries about universe/planets.\n        </p>\n      </div>\n    </div>\n    <div class=\"side2\">\n      <div class=\"skill-container\">\n        <h1 class=\"skill-header\">\n          Skills\n        </h1>\n        <div *ngFor=\"let profile of profiles\">\n          <h4 class=\"skill-type\">{{profile.type}}</h4>\n          <h4 class=\"skill-names\">{{profile.name.join(', ')}}</h4>\n        </div>\n      </div>\n    </div>\n  </div> "

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\n  display: inline-block;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  left: -100%;\n  position: fixed;\n  background: #d2e1dd;\n  -webkit-transform: scale(2) skew(-8deg);\n          transform: scale(2) skew(-8deg);\n  z-index: -1;\n  transition: 0.3s all ease-in-out; }\n  @media (max-width: 1040px) {\n    .overlay {\n      -webkit-transform: scale(2) skew(0deg);\n              transform: scale(2) skew(0deg); } }\n  .container {\n  font-size: 1.2rem;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  color: #492727;\n  padding: 1rem; }\n  @media (max-width: 1040px) {\n    .container {\n      flex-direction: column; } }\n  .container .side1 {\n    flex: 1;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding-top: 5.0rem;\n    padding-left: 2.5rem; }\n  @media (max-width: 1040px) {\n      .container .side1 {\n        flex: none;\n        height: auto; } }\n  .container .side1 > h1 {\n      margin-bottom: 0;\n      padding: 3rem 0.8rem 0.2rem;\n      font-size: 3rem; }\n  .container .side2 {\n    flex: 1;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding-top: 5.0rem; }\n  @media (max-width: 1040px) {\n      .container .side2 {\n        flex: none;\n        height: auto; } }\n  .text-container {\n  height: auto;\n  max-width: 35rem;\n  background-color: #54a4af;\n  padding: 3rem 1.8rem;\n  padding-top: 2.0rem;\n  border-radius: 2rem;\n  min-width: 35rem;\n  align-items: center;\n  font-size: 1.1rem; }\n  .dp-logo {\n  font-size: 1.6rem;\n  -webkit-transform: translate(0, 45%);\n          transform: translate(0, 45%);\n  height: 10rem;\n  width: 10rem;\n  display: flex;\n  align-items: center; }\n  .skill-container {\n  padding: 1rem 1.8rem;\n  margin-left: 5rem;\n  background: #d2e1dd;\n  padding-top: 2.0rem;\n  border-radius: 2rem;\n  min-width: 35rem;\n  height: auto;\n  max-width: 35rem;\n  align-items: right;\n  color: #492727; }\n  @media (max-width: 1040px) {\n    .skill-container {\n      margin: auto; } }\n  .text-header {\n  margin: 2rem 0;\n  margin-bottom: 3.8rem;\n  position: relative;\n  letter-spacing: 2px;\n  padding-bottom: 0rem;\n  font-size: 2.5rem;\n  font-family: 'Cormorant Garamond', serif;\n  justify-content: flex-start; }\n  .text-header:after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 100%;\n    height: 3px;\n    top: 100%;\n    left: 0;\n    background: #db381b; }\n  .skill-header {\n  margin: 2rem 0;\n  margin-bottom: 3.8rem;\n  position: relative;\n  letter-spacing: 2px;\n  padding-bottom: 0rem;\n  font-size: 2.5rem;\n  font-family: 'Cormorant Garamond', serif;\n  justify-content: flex-start; }\n  .skill-header:after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 100%;\n    height: 3px;\n    top: 100%;\n    left: 0;\n    background: #db381b; }\n  .skill-type {\n  position: relative;\n  margin: 1.2rem 0;\n  padding-bottom: 0.2rem;\n  font-size: 1.2rem; }\n  .skill-type:after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 70%;\n    height: 1.5px;\n    top: 100%;\n    left: 0;\n    background: #699; }\n  .skill-names {\n  margin-left: 2.8rem;\n  margin-bottom: 2rem;\n  margin-top: -0.6rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHNCQUFxQjtFQUNyQixjQUFhO0VBQ2IsYUFBWTtFQUNaLE9BQU07RUFDTixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixvQkNQYztFRFFkLHdDQUErQjtVQUEvQixnQ0FBK0I7RUFDL0IsWUFBVztFQUNYLGlDQUFnQyxFQUlqQztFQUhDO0lBWEY7TUFZSSx1Q0FBOEI7Y0FBOUIsK0JBQThCLEVBRWpDLEVBQUE7RUFFRDtFQUNFLGtCQUFpQjtFQUNqQixjQUFhO0VBQ2IsYUFBWTtFQUNaLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsOEJBQTZCO0VBQzdCLGVDakIwQjtFRG1CMUIsY0FBYSxFQWdDZDtFQS9CQztJQVZGO01BV0ksdUJBQXNCLEVBOEJ6QixFQUFBO0VBekNEO0lBY0ksUUFBTztJQUNQLGFBQVk7SUFDWixjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLG9CQUFtQjtJQUNuQixxQkFBb0IsRUFVckI7RUFUQztNQXBCSjtRQXFCTSxXQUFVO1FBQ1YsYUFBWSxFQU9mLEVBQUE7RUE3Qkg7TUF5Qk0saUJBQWdCO01BQ2hCLDRCQUEyQjtNQUMzQixnQkFBZSxFQUNoQjtFQTVCTDtJQStCSSxRQUFPO0lBQ1AsYUFBWTtJQUNaLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsb0JBQW1CLEVBS3BCO0VBSkM7TUFwQ0o7UUFxQ00sV0FBVTtRQUNWLGFBQVksRUFFZixFQUFBO0VBR0g7RUFDRSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLDBCQ3BEYztFRHFEZCxxQkFBb0I7RUFDcEIsb0JBQW1CO0VBQ25CLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsb0JBQW1CO0VBQ25CLGtCQUFpQixFQUNsQjtFQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLHFDQUE0QjtVQUE1Qiw2QkFBNEI7RUFDNUIsY0FBYTtFQUNiLGFBQVk7RUFDWixjQUFhO0VBQ2Isb0JBQW1CLEVBQ3BCO0VBRUQ7RUFDRSxxQkFBb0I7RUFDcEIsa0JBQWlCO0VBQ2pCLG9CQ25GYztFRG9GZCxvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixlQ3BGMEIsRUR3RjNCO0VBSEM7SUFYRjtNQVlJLGFBQVksRUFFZixFQUFBO0VBR0Q7RUFDSSxlQUFjO0VBQ2Qsc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIscUJBQW9CO0VBQ3BCLGtCQUFpQjtFQUNqQix5Q0FBd0M7RUFDeEMsNEJBQTJCLEVBVzlCO0VBbkJEO0lBVUksWUFBVztJQUNYLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsWUFBVztJQUNYLFlBQVc7SUFDWCxVQUFTO0lBQ1QsUUFBTztJQUNQLG9CQ2pIWSxFRGtIYjtFQUVIO0VBQ0UsZUFBYztFQUNkLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLHFCQUFvQjtFQUNwQixrQkFBaUI7RUFDakIseUNBQXdDO0VBQ3hDLDRCQUEyQixFQVc1QjtFQW5CRDtJQVVJLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsc0JBQXFCO0lBQ3JCLFlBQVc7SUFDWCxZQUFXO0lBQ1gsVUFBUztJQUNULFFBQU87SUFDUCxvQkNySVksRURzSWI7RUFHSDtFQUNFLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsdUJBQXNCO0VBQ3RCLGtCQUFpQixFQVdsQjtFQWZEO0lBTUksWUFBVztJQUNYLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsV0FBVTtJQUNWLGNBQWE7SUFDYixVQUFTO0lBQ1QsUUFBTztJQUNQLGlCQUFnQixFQUNqQjtFQUdIO0VBQ0Usb0JBQW1CO0VBQ25CLG9CQUFtQjtFQUNuQixvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9nbG9iYWwnO1xuJHRleHQtY2FyZC1zaGlmdDoyMCU7XG4kcm93LWNvbG91bS1icmstcG9pbnQ6ICdtYXgtd2lkdGg6IDEwNDBweCc7XG4ub3ZlcmxheSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0xMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICRjb2xvcjI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMikgc2tldygtOGRlZyk7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcbiAgQG1lZGlhICgkcm93LWNvbG91bS1icmstcG9pbnQpIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpIHNrZXcoMGRlZyk7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIEBtZWRpYSAoJHJvdy1jb2xvdW0tYnJrLXBvaW50KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuc2lkZTEge1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLXRvcDogNS4wcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICAgIEBtZWRpYSAoJHJvdy1jb2xvdW0tYnJrLXBvaW50KSB7XG4gICAgICBmbGV4OiBub25lO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAmPmgxIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBwYWRkaW5nOiAzcmVtIDAuOHJlbSAwLjJyZW07XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxuICB9XG4gIC5zaWRlMiB7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctdG9wOiA1LjByZW07XG4gICAgQG1lZGlhICgkcm93LWNvbG91bS1icmstcG9pbnQpIHtcbiAgICAgIGZsZXg6IG5vbmU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG59XG5cbi50ZXh0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAzNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yNTtcbiAgcGFkZGluZzogM3JlbSAxLjhyZW07XG4gIHBhZGRpbmctdG9wOiAyLjByZW07XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIG1pbi13aWR0aDogMzVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uZHAtbG9nbyB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA0NSUpO1xuICBoZWlnaHQ6IDEwcmVtO1xuICB3aWR0aDogMTByZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5za2lsbC1jb250YWluZXIge1xuICBwYWRkaW5nOiAxcmVtIDEuOHJlbTtcbiAgbWFyZ2luLWxlZnQ6IDVyZW07XG4gIGJhY2tncm91bmQ6ICRjb2xvcjI7XG4gIHBhZGRpbmctdG9wOiAyLjByZW07XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIG1pbi13aWR0aDogMzVyZW07XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAzNXJlbTtcbiAgYWxpZ24taXRlbXM6IHJpZ2h0O1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIEBtZWRpYSAoJHJvdy1jb2xvdW0tYnJrLXBvaW50KSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5cblxuLnRleHQtaGVhZGVyIHtcbiAgICBtYXJnaW46IDJyZW0gMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjhyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDByZW07XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4mOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogM3B4O1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6ICRjb2xvcjM7XG4gIH1cbn1cbi5za2lsbC1oZWFkZXIge1xuICBtYXJnaW46IDJyZW0gMDtcbiAgbWFyZ2luLWJvdHRvbTogMy44cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcmVtO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogM3B4O1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6ICRjb2xvcjM7XG4gIH1cbn1cblxuLnNraWxsLXR5cGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMS4ycmVtIDA7XG4gIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiAxLjVweDtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiAjNjk5O1xuICB9XG59XG5cbi5za2lsbC1uYW1lcyB7XG4gIG1hcmdpbi1sZWZ0OiAyLjhyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIG1hcmdpbi10b3A6IC0wLjZyZW07XG59IiwiJGJnLWNvbG9yOiAjMDg1ZTcyO1xuLy8gIzE3YTU5ODtcbiRjb2xvcjE6ICNlNzRjM2M7XG4kY29sb3IyOiAjZDJlMWRkO1xuJGNvbG9yMzogI2RiMzgxYjtcbiRncmVlbjogIzE3YTU5ODtcbi8vICR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrOiAjNTU1O1xuJG9mZi13aGl0ZTogI2U4ZWVlYTtcbiR0ZXh0LWNvbG9yOiByZ2IoNzMsIDM5LCAzOSk7XG4vLyAjNjk5O1xuJHdoaXRlOiAjZmZmO1xuJGNvbG9yNDogcmdiKDI0NywgMTY4LCAxNjgpO1xuJGNvbG9yNTogIzU0YTRhZjsiXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService, router) {
        this.profileService = profileService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.profiles = this.profileService.getSkills();
    };
    ProfileComponent.prototype.onBackClick = function () {
        this.router.navigateByUrl('');
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/project-data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/project-data.service.ts ***!
  \*****************************************/
/*! exports provided: ProjectDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDataService", function() { return ProjectDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-data */ "./src/app/project-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectDataService = /** @class */ (function () {
    function ProjectDataService() {
    }
    ProjectDataService.prototype.getProjects = function () {
        return _project_data__WEBPACK_IMPORTED_MODULE_1__["ALL_PROJECT_DATA"];
    };
    ProjectDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], ProjectDataService);
    return ProjectDataService;
}());



/***/ }),

/***/ "./src/app/project-data.ts":
/*!*********************************!*\
  !*** ./src/app/project-data.ts ***!
  \*********************************/
/*! exports provided: ALL_PROJECT_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_PROJECT_DATA", function() { return ALL_PROJECT_DATA; });
/* harmony import */ var _data_exclaim_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/exclaim.data */ "./src/app/data/exclaim.data.ts");
/* harmony import */ var _data_fame_met_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/fame-met.data */ "./src/app/data/fame-met.data.ts");
/* harmony import */ var _data_proquest_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/proquest.data */ "./src/app/data/proquest.data.ts");
/* harmony import */ var _data_ica_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/ica.data */ "./src/app/data/ica.data.ts");
/* harmony import */ var _data_lowes_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/lowes.data */ "./src/app/data/lowes.data.ts");
/* harmony import */ var _data_xfinitytv_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/xfinitytv.data */ "./src/app/data/xfinitytv.data.ts");
/* harmony import */ var _data_xfinity_mobile_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/xfinity-mobile.data */ "./src/app/data/xfinity-mobile.data.ts");
// import { testUniqueness } from './utils';







var getAllProject = function () {
    var projects = [
        _data_exclaim_data__WEBPACK_IMPORTED_MODULE_0__["ExclaimData"],
        _data_fame_met_data__WEBPACK_IMPORTED_MODULE_1__["FameMetData"],
        _data_proquest_data__WEBPACK_IMPORTED_MODULE_2__["ProquestData"],
        _data_ica_data__WEBPACK_IMPORTED_MODULE_3__["IcaData"],
        _data_lowes_data__WEBPACK_IMPORTED_MODULE_4__["LowesData"],
        _data_xfinitytv_data__WEBPACK_IMPORTED_MODULE_5__["XfinityTvData"],
        _data_xfinity_mobile_data__WEBPACK_IMPORTED_MODULE_6__["XfinityMobileData"]
    ];
    // if (!environment.production) {
    // const result = testUniqueness(projects, project => project.id);
    // if (result.error) {
    //   const errorLog = [];
    //   result.duplicates.forEach((project: IProject) => {
    //     errorLog.push(`Duplicate E-id ${project.id} of ${project.name} `);
    //   });
    //   throw new Error(JSON.stringify(errorLog));
    // }
    // }
    return projects;
};
var ALL_PROJECT_DATA = getAllProject();


/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"portfolio-bg\">\n<div class=\"back-icon\" (click)=\"onBackBtnClick()\">\n  <app-back-button></app-back-button>\n</div>\n<div class=\"portfolio-container\"> \n<div class=\"portfolio-header\" #portfolioHeader></div>\n<div class=\"portfolio-area\" #portfolioArea>   \n<div class=\"portfolio-selection\" #portfolioSelectionArea [ngClass]=\"{'portfolio-selection__fixed': setFixedPostion }\">\n  <h1>Projects</h1>\n<div>\n  <!-- <app-tags></app-tags> -->\n</div>\n</div>\n<div class=\"project-container\">\n<div *ngFor=\"let proj of projects\" class=\"project-card\">\n<div class=\"card-outer\">\n    <div class=\"card card__front\">\n      <div class=\"card-container\">\n        <h4 class=\"card-header\">{{proj.name}}</h4>\n        <span class=\"image\"><img src={{proj.imageLink}}/></span>\n        <div>\n        <p class=\"card-short-details\" >\n          {{proj.description}}\n        </p>\n      </div>\n      </div>\n    </div>\n    <div class=\"card card__back\">\n      <div class=\"card-container\">\n        <h4 class=\"card-header\">{{proj.name}}</h4>\n        <div class=\"card-short-details\">\n          <div class=\"tech-stuff-details\">\n            <span>Tech Stuff: </span>\n            <br>\n            <p>{{proj.techStuff}}</p>\n          </div>\n        \n        </div>\n       \n            <div class=\"strip1\"></div>\n            <div class=\"strip2\"></div>\n            <div class=\"strip3\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n</div>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/project/project.component.scss":
/*!************************************************!*\
  !*** ./src/app/project/project.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio-bg {\n  min-height: 100vh;\n  min-width: 100vw;\n  position: relative;\n  background-color: #d2e1dd;\n  overflow: hidden;\n  display: flex; }\n\n.portfolio-container {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  padding: 3.5rem;\n  flex-direction: column;\n  color: #492727; }\n\n.portfolio-container .portfolio-header {\n    display: flex;\n    justify-content: stretch;\n    margin: auto;\n    align-items: center;\n    font-size: 1.2rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.portfolio-container .portfolio-area {\n    margin: 0rem 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    z-index: 50;\n    position: relative; }\n\n.portfolio-container .portfolio-area .portfolio-selection {\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n\n.portfolio-container .portfolio-area .portfolio-selection.portfolio-selection__fixed {\n        position: fixed;\n        top: 0;\n        z-index: 1;\n        background-color: #d2e1dd;\n        color: #492727;\n        width: 100%;\n        transition: all 0.3s ease-in-out; }\n\n.portfolio-container .portfolio-area .portfolio-selection > h1 {\n        font-family: 'Cormorant Garamond', serif;\n        font-weight: bold;\n        font-size: 1.9rem;\n        letter-spacing: 1px;\n        margin: 1rem auto;\n        text-align: center; }\n\n@media (max-width: 900px) {\n  .portfolio-container {\n    padding: 3.5rem 0.5rem; } }\n\n@media (max-width: 74rem) {\n  .portfolio-header {\n    flex-direction: column; } }\n\n.card-outer {\n  position: relative;\n  font-family: Times;\n  font-weight: normal;\n  color: #492727;\n  cursor: pointer; }\n\n.card-outer:hover .card__front {\n    cursor: pointer;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n\n.card-outer:hover .card__back {\n    cursor: pointer;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg); }\n\n.card {\n  width: 100%;\n  min-width: 18rem;\n  min-height: 18rem;\n  background-color: #e8eeea;\n  border-radius: 0.6rem;\n  cursor: pointer;\n  overflow: hidden;\n  box-shadow: 6px 6px 15px rgba(1, 100, 18, 0.3);\n  transition: 0.8s ease-in-out;\n  -webkit-perspective: 15000px;\n          perspective: 15000px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.card.card__front {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg); }\n\n.card.card__back {\n    background-color: #54a4af;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n\n.card.card__featured::before {\n    content: '\\269D';\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    font-size: 1.2rem;\n    padding: 0 0.4rem;\n    color: #492727; }\n\n.card.card__featured:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 3.2rem;\n    height: 3.2rem;\n    background-color: #327e36;\n    -webkit-transform: rotateZ(45deg) translate(-88%) scale(2);\n            transform: rotateZ(45deg) translate(-88%) scale(2); }\n\n.card .card-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 0.6rem 1.6rem;\n    width: 100%;\n    height: 100%; }\n\n.card .card-container .image {\n      height: 6rem;\n      width: 6rem;\n      margin-top: 1rem;\n      display: inline-block;\n      position: relative; }\n\n.card .card-container .image img {\n        position: relative;\n        border: 0.2rem solid #e74c3c;\n        height: 100%;\n        width: 100%; }\n\n.card .card-container .card-header {\n      font-family: cursive;\n      width: 100%;\n      font-size: 1.5rem;\n      margin: 1rem 0;\n      font-weight: bold; }\n\n.card .card-container .card-short-details {\n      width: 100%;\n      flex: 1;\n      font-size: 1.2rem;\n      margin: 0.6rem 0; }\n\n.card .card-container .tech-stuff-details > span {\n      font-weight: bold;\n      display: inline-block; }\n\n.card .card-container .tech-stuff-details > p {\n      display: inline;\n      margin-left: 0.3rem;\n      word-break: break-word; }\n\n.card .card-container .strip1 {\n      background-color: red;\n      display: block;\n      width: 150%;\n      position: fixed;\n      left: 0;\n      bottom: 1.5rem;\n      background: #e74c3c;\n      height: 1rem;\n      outline: none;\n      -webkit-transform: rotateZ(-19deg);\n              transform: rotateZ(-19deg);\n      display: block;\n      z-index: -2;\n      position: absolute; }\n\n.card .card-container .strip2 {\n      background-color: red;\n      display: block;\n      width: 150%;\n      position: fixed;\n      left: 0;\n      bottom: 0.9rem;\n      background: #e74c3c;\n      height: 0.32rem;\n      outline: none;\n      -webkit-transform: rotateZ(-19deg);\n              transform: rotateZ(-19deg);\n      display: block;\n      z-index: -1;\n      position: absolute; }\n\n.card .card-container .strip3 {\n      background-color: red;\n      display: block;\n      width: 150%;\n      position: fixed;\n      left: 0;\n      bottom: 0.6rem;\n      background: #e74c3c;\n      height: 0.14rem;\n      outline: none;\n      -webkit-transform: rotateZ(-19deg);\n              transform: rotateZ(-19deg);\n      display: block;\n      z-index: -1;\n      position: absolute; }\n\n.project-container {\n  width: 70%;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  transition: all 0.5s ease-in-out; }\n\n.project-container .project-card {\n    padding: 1rem;\n    flex-basis: 33.3%;\n    transition: all 0.5s ease-in-out; }\n\n@-webkit-keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%; }\n  100% {\n    opacity: 0.7;\n    left: 120%; } }\n\n@keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%; }\n  100% {\n    opacity: 0.7;\n    left: 120%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLDBCQ0ZjO0VER2QsaUJBQWdCO0VBQ2hCLGNBQWEsRUFFZDs7QUFFRDtFQUNFLGNBQWE7RUFDYixRQUFPO0VBQ1Asd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osWUFBVztFQUVYLGdCQUFlO0VBQ2YsdUJBQXNCO0VBQ3RCLGVDWjBCLEVEMEQzQjs7QUF4REQ7SUFhSSxjQUFhO0lBQ2IseUJBQXdCO0lBQ3hCLGFBQVk7SUFDWixvQkFBbUI7SUFDbkIsa0JBQWlCO0lBQ2pCLDBCQUFpQjtPQUFqQix1QkFBaUI7UUFBakIsc0JBQWlCO1lBQWpCLGtCQUFpQixFQUVsQjs7QUFwQkg7SUF1QkksZUFBYztJQUNkLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsd0JBQXVCO0lBQ3ZCLG9CQUFtQjtJQUNuQixZQUFXO0lBQ1gsbUJBQWtCLEVBMEJuQjs7QUF2REg7TUFpQ00sMEJBQWlCO1NBQWpCLHVCQUFpQjtVQUFqQixzQkFBaUI7Y0FBakIsa0JBQWlCLEVBcUJsQjs7QUF0REw7UUFvQ1EsZ0JBQWU7UUFDZixPQUFNO1FBQ04sV0FBVTtRQUNWLDBCQy9DUTtRRGdEUixlQzFDb0I7UUQyQ3BCLFlBQVc7UUFFWCxpQ0FBZ0MsRUFDakM7O0FBNUNQO1FBK0NRLHlDQUF3QztRQUN4QyxrQkFBaUI7UUFDakIsa0JBQWlCO1FBQ2pCLG9CQUFtQjtRQUNuQixrQkFBaUI7UUFDakIsbUJBQWtCLEVBQ25COztBQUtQO0VB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QUNiLGdCQUFlO0VBQ2Ysb0JBQW1CO0VBQ25CLGlDQUFnQyxFQU9qQzs7QUFiRDtJQVNJLGNBQWE7SUFDYixrQkFBaUI7SUFDakIsaUNBQWdDLEVBQ2pDOztBQUlIO0VBQ0E7SUFDRSxhQUFZO0lBQ1osV0FBVSxFQUFBO0VBRVo7SUFDRSxhQUFZO0lBQ1osV0FBVSxFQUFBLEVBQUE7O0FBUFo7RUFDQTtJQUNFLGFBQVk7SUFDWixXQUFVLEVBQUE7RUFFWjtJQUNFLGFBQVk7SUFDWixXQUFVLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL2dsb2JhbCc7XG4ucG9ydGZvbGlvLWJnIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcblxufVxuXG4ucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyB6LWluZGV4OiAxMDtcbiAgcGFkZGluZzogMy41cmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG5cbiAgLnBvcnRmb2xpby1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIH1cblxuICAucG9ydGZvbGlvLWFyZWEge1xuICAgIG1hcmdpbjogMHJlbSAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDUwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5wb3J0Zm9saW8tc2VsZWN0aW9uIHtcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgICAgJi5wb3J0Zm9saW8tc2VsZWN0aW9uX19maXhlZCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xuICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLy8gICBib3gtc2hhZG93OiAwcHggOHB4IDIwcHggcmdiYSgkY29sb3I6ICMwMDAsICRhbHBoYTogMC40KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICB9XG5cbiAgICAgICYgPiBoMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuOXJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5wb3J0Zm9saW8tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzLjVyZW0gMC41cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NHJlbSkge1xuICAucG9ydGZvbGlvLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4kbWluLWhlaWdodDogMThyZW07XG4kbWluLXdpZHRoOiAxOHJlbTtcblxuLmNhcmQtb3V0ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBUaW1lcztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgLmNhcmRfX2Zyb250IHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIH1cbiAgICAuY2FyZF9fYmFjayB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgfVxuICB9XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogJG1pbi13aWR0aDtcbiAgbWluLWhlaWdodDogJG1pbi1oZWlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRvZmYtd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiA2cHggNnB4IDE1cHggcmdiYSgjMDE2NDEyLCAwLjMpO1xuICB0cmFuc2l0aW9uOiAwLjhzIGVhc2UtaW4tb3V0O1xuICBwZXJzcGVjdGl2ZTogMTUwMDBweDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAmLmNhcmRfX2Zyb250IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIH1cblxuICAmLmNhcmRfX2JhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB9XG5cbiAgJi5jYXJkX19mZWF0dXJlZCB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICdcXDI2OUQnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIHBhZGRpbmc6IDAgMC40cmVtO1xuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAzLjJyZW07XG4gICAgICBoZWlnaHQ6IDMuMnJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjdlMzY7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpIHRyYW5zbGF0ZSgtODglKSBzY2FsZSgyKTtcbiAgICB9XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogMC42cmVtIDEuNnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAuaW1hZ2Uge1xuICAgICAgaGVpZ2h0OiA2cmVtO1xuICAgICAgd2lkdGg6IDZyZW07XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLy8gYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCAkY29sb3IxO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLy8gICBwZXJzcGVjdGl2ZTogMTUwMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5jYXJkLXNob3J0LWRldGFpbHMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBtYXJnaW46IDAuNnJlbSAwO1xuICAgIH1cblxuICAgIC50ZWNoLXN0dWZmLWRldGFpbHMge1xuICAgICAgJiA+IHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICAmID4gcCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3RyaXAxIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDE1MCU7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYm90dG9tOiAxLjVyZW07XG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3IxO1xuICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xOWRlZyk7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHotaW5kZXg6IC0yO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICAuc3RyaXAyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDE1MCU7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYm90dG9tOiAwLjlyZW07XG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3IxO1xuICAgICAgaGVpZ2h0OiAwLjMycmVtO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtMTlkZWcpO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAuc3RyaXAzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDE1MCU7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYm90dG9tOiAwLjZyZW07XG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3IxO1xuICAgICAgaGVpZ2h0OiAwLjE0cmVtO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtMTlkZWcpO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gIH1cbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuXG4gIC5wcm9qZWN0LWNhcmQge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZmxleC1iYXNpczogMzMuMyU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cblxuXG5Aa2V5ZnJhbWVzIGZhZGVMZWZ0VG9SaWdodCB7XG4wJSB7XG4gIG9wYWNpdHk6IDAuMTtcbiAgbGVmdDogLTEwJTtcbn1cbjEwMCUge1xuICBvcGFjaXR5OiAwLjc7XG4gIGxlZnQ6IDEyMCU7XG59XG59IiwiJGJnLWNvbG9yOiAjMDg1ZTcyO1xuLy8gIzE3YTU5ODtcbiRjb2xvcjE6ICNlNzRjM2M7XG4kY29sb3IyOiAjZDJlMWRkO1xuJGNvbG9yMzogI2RiMzgxYjtcbiRncmVlbjogIzE3YTU5ODtcbi8vICR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrOiAjNTU1O1xuJG9mZi13aGl0ZTogI2U4ZWVlYTtcbiR0ZXh0LWNvbG9yOiByZ2IoNzMsIDM5LCAzOSk7XG4vLyAjNjk5O1xuJHdoaXRlOiAjZmZmO1xuJGNvbG9yNDogcmdiKDI0NywgMTY4LCAxNjgpO1xuJGNvbG9yNTogIzU0YTRhZjsiXX0= */"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _project_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-data.service */ "./src/app/project-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
        this.setFixedPostion = false;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        console.log('project component created');
        this.projects = this.projectService.getProjects();
    };
    ProjectComponent.prototype.onScroll = function () {
        var portfolioHeader = this.portfolioHeaderRef.nativeElement;
        var portfolioArea = this.portfolioAreaRef.nativeElement;
        var portfolioSelectionArea = this.portfolioSelectionAreaRef
            .nativeElement;
        var thresoldHeight = portfolioHeader.scrollHeight + portfolioHeader.offsetTop;
        var portfolioSelectionHeight = portfolioSelectionArea.scrollHeight + portfolioSelectionArea.offsetTop;
        if (window.scrollY > thresoldHeight) {
            portfolioArea.style.marginTop = portfolioSelectionHeight + 5 + "px";
            this.setFixedPostion = true;
        }
        else {
            portfolioArea.style.marginTop = "inherit";
            this.setFixedPostion = false;
            var factor = 1 - window.scrollY / (thresoldHeight + 40);
            // const netFactor = window.innerWidth < 900 ? 1 : 1 - factor;
            portfolioHeader.style.opacity = factor.toString();
        }
    };
    ProjectComponent.prototype.onBackBtnClick = function () {
        this.router.navigateByUrl('/');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('portfolioHeader'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProjectComponent.prototype, "portfolioHeaderRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('portfolioArea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProjectComponent.prototype, "portfolioAreaRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('portfolioSelectionArea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProjectComponent.prototype, "portfolioSelectionAreaRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProjectComponent.prototype, "onScroll", null);
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/project/project.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-25%)', opacity: 0 }), {
                            optional: true
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)', opacity: 1 }), {
                            optional: true
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('0.05s', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        transform: 'translateY(-25%)',
                                        opacity: 0,
                                        offset: 0
                                    }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)', opacity: 1, offset: 1 })
                                ]))
                            ])
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('0.05s', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)', offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-25%)', opacity: 0, offset: 1 })
                                ]))
                            ])
                        ], { optional: true })
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animateChildren', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@*, :enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@*, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()], { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_project_data_service__WEBPACK_IMPORTED_MODULE_2__["ProjectDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/tags-data.ts":
/*!******************************!*\
  !*** ./src/app/tags-data.ts ***!
  \******************************/
/*! exports provided: tagData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagData", function() { return tagData; });
var tagData = [
    { displayName: 'Angular', isSelected: true },
    { displayName: 'Ruby', isSelected: true },
    { displayName: 'Java', isSelected: true },
    { displayName: 'API', isSelected: true },
    { displayName: 'Appium', isSelected: true },
    { displayName: 'Jenkins', isSelected: !true }
];


/***/ }),

/***/ "./src/app/tags.service.ts":
/*!*********************************!*\
  !*** ./src/app/tags.service.ts ***!
  \*********************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tags_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags-data */ "./src/app/tags-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagsService = /** @class */ (function () {
    // tags: ITag[];
    // onTagUpdate = new EventEmitter();
    function TagsService() {
        // this.tags = tagData;
    }
    TagsService.prototype.getTagSkills = function () {
        return _tags_data__WEBPACK_IMPORTED_MODULE_1__["tagData"];
    };
    TagsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], TagsService);
    return TagsService;
}());



/***/ }),

/***/ "./src/app/tags/tags.component.html":
/*!******************************************!*\
  !*** ./src/app/tags/tags.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"key-skills\">\n    <button class=\"key-skill\"\n      *ngFor=\"let keySkill of keySkills\">\n      {{keySkill.displayName}}\n    </button>\n  </div>"

/***/ }),

/***/ "./src/app/tags/tags.component.scss":
/*!******************************************!*\
  !*** ./src/app/tags/tags.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".key-skills {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 1rem auto; }\n  .key-skills .key-skill {\n    z-index: 99;\n    position: relative;\n    font-size: 1.5rem;\n    font-family: 'Franklin Gothic Medium';\n    margin: 0.6rem;\n    padding: 0.4rem 2rem;\n    border: 2px solid #699;\n    border-radius: 50rem;\n    cursor: pointer;\n    color: #492727;\n    line-height: 1.5;\n    background-color: #085e72;\n    transition: all 0.3s ease-in-out;\n    outline: none;\n    box-shadow: 0.4rem 0.5rem 0.9rem #016412; }\n  .key-skills .key-skill:disabled {\n      background-color: #e85a41;\n      border: 2px solid #e85a41;\n      box-shadow: none; }\n  .key-skills .key-skill:hover:disabled {\n      margin: 0.6rem;\n      padding: 0.4rem 2rem;\n      cursor: not-allowed; }\n  .key-skills .key-skill.key-skill--disabled {\n      border: 2px solid #db381b;\n      background-color: transparent;\n      overflow: hidden;\n      transition: all 0.3s ease-in-out; }\n  .key-skills .key-skill.key-skill--disabled:after {\n      content: '';\n      position: absolute;\n      display: block;\n      width: 100%;\n      height: 2px;\n      background-color: #db381b;\n      top: 50%;\n      left: 0;\n      -webkit-transform: rotateZ(-14deg);\n              transform: rotateZ(-14deg);\n      transition: all 0.3s ease-in-out; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvdGFncy90YWdzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWE7RUFDYixnQkFBZTtFQUNmLHdCQUF1QjtFQUN2QixrQkFBaUIsRUFtRWxCO0VBdkVEO0lBVUksWUFBVztJQUNYLG1CQUFrQjtJQUNsQixrQkFBaUI7SUFDakIsc0NBQXFDO0lBQ3JDLGVBUnVCO0lBU3ZCLHFCQVI2QjtJQVM3Qix1QkFBc0I7SUFDdEIscUJBQW9CO0lBQ3BCLGdCQUFlO0lBQ2YsZUNad0I7SURjeEIsaUJBQWdCO0lBQ2hCLDBCQ3hCYztJRHlCZCxpQ0FBZ0M7SUFDaEMsY0FBYTtJQUNiLHlDQUF3QyxFQTZDekM7RUF0RUg7TUE0Qk0sMEJBQStDO01BQy9DLDBCQUErQztNQUMvQyxpQkFBZ0IsRUFDakI7RUEvQkw7TUFrQ00sZUE1QnFCO01BNkJyQixxQkE1QjJCO01BNkIzQixvQkFBbUIsRUFDcEI7RUFyQ0w7TUFtRE0sMEJDakRVO01Ea0RWLDhCQUE2QjtNQUM3QixpQkFBZ0I7TUFDaEIsaUNBQWdDLEVBQ2pDO0VBdkRMO01BMERNLFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsZUFBYztNQUNkLFlBQVc7TUFDWCxZQUFXO01BQ1gsMEJDN0RVO01EOERWLFNBQVE7TUFDUixRQUFPO01BQ1AsbUNBQTBCO2NBQTFCLDJCQUEwQjtNQUMxQixpQ0FBZ0MsRUFFakMiLCJmaWxlIjoic3JjL2FwcC90YWdzL3RhZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9nbG9iYWwnO1xuXG4ua2V5LXNraWxscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuXG4gICRrZXlfc2tpbGxfbWFyZ2luOiAwLjZyZW07XG4gICRrZXlfc2tpbGxfcGFkZGluZzogMC40cmVtIDJyZW07XG5cbiAgLmtleS1za2lsbCB7XG4gICAgei1pbmRleDogOTk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bSc7XG4gICAgbWFyZ2luOiAka2V5X3NraWxsX21hcmdpbjtcbiAgICBwYWRkaW5nOiAka2V5X3NraWxsX3BhZGRpbmc7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzY5OTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIC8vIGJvcmRlci1ib3R0b20tY29sb3I6IHJlZDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAuNHJlbSAwLjVyZW0gMC45cmVtICMwMTY0MTI7XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yMywgJGFtb3VudDogMTApO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRlbigkY29sb3IzLCAkYW1vdW50OiAxMCk7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cblxuICAgICY6aG92ZXI6ZGlzYWJsZWQge1xuICAgICAgbWFyZ2luOiAka2V5X3NraWxsX21hcmdpbjtcbiAgICAgIHBhZGRpbmc6ICRrZXlfc2tpbGxfcGFkZGluZztcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuXG4gICAgLy8gJC5rZXktc2tpbGxcbiAgICAmOmhvdmVyIHtcbiAgICAvLyAgIHBhZGRpbmc6IDAuNHJlbSAzLjJyZW07XG4gICAgLy8gICBtYXJnaW46IDAuNnJlbSAycmVtO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjQ7XG4gICAgLy8gICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIC8vICAgICBtYXJnaW46ICRrZXlfc2tpbGxfbWFyZ2luO1xuICAgIC8vICAgICBwYWRkaW5nOiAka2V5X3NraWxsX3BhZGRpbmc7XG4gICAgLy8gICB9XG4gICAgfVxuXG4gICAgJi5rZXktc2tpbGwtLWRpc2FibGVkIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvcjM7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICB9XG5cbiAgICAmLmtleS1za2lsbC0tZGlzYWJsZWQ6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IzO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xNGRlZyk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIC8vIGFuaW1hdGlvbjogc2xpZGVJbiAwLjZzO1xuICAgIH1cbiAgfVxufSIsIiRiZy1jb2xvcjogIzA4NWU3Mjtcbi8vICMxN2E1OTg7XG4kY29sb3IxOiAjZTc0YzNjO1xuJGNvbG9yMjogI2QyZTFkZDtcbiRjb2xvcjM6ICNkYjM4MWI7XG4kZ3JlZW46ICMxN2E1OTg7XG4vLyAkdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiRibGFjazogIzU1NTtcbiRvZmYtd2hpdGU6ICNlOGVlZWE7XG4kdGV4dC1jb2xvcjogcmdiKDczLCAzOSwgMzkpO1xuLy8gIzY5OTtcbiR3aGl0ZTogI2ZmZjtcbiRjb2xvcjQ6IHJnYigyNDcsIDE2OCwgMTY4KTtcbiRjb2xvcjU6ICM1NGE0YWY7Il19 */"

/***/ }),

/***/ "./src/app/tags/tags.component.ts":
/*!****************************************!*\
  !*** ./src/app/tags/tags.component.ts ***!
  \****************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tags.service */ "./src/app/tags.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TagsComponent = /** @class */ (function () {
    function TagsComponent(tagsService, router) {
        this.tagsService = tagsService;
        this.router = router;
    }
    TagsComponent.prototype.ngOnInit = function () {
        this.keySkills = this.tagsService.getTagSkills();
    };
    TagsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__(/*! ./tags.component.html */ "./src/app/tags/tags.component.html"),
            styles: [__webpack_require__(/*! ./tags.component.scss */ "./src/app/tags/tags.component.scss")]
        }),
        __metadata("design:paramtypes", [_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ssharma001/Documents/MyProjects/angular-portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map