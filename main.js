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

module.exports = ".overlay {\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  z-index: -1;\n  display: block;\n  background-color: #17a598;\n  position: fixed;\n  right: 0;\n  top: 0;\n  pointer-events: none;\n  -webkit-clip-path: circle(50vw 40vh at 50% 50%);\n          clip-path: circle(50vw 40vh at 50% 50%);\n  -webkit-transform: scale(2) translate(27vw, -18vh) rotate(335deg);\n          transform: scale(2) translate(27vw, -18vh) rotate(335deg);\n  -webkit-animation: 1s ease-in-out 0.2s both rightToLeft;\n          animation: 1s ease-in-out 0.2s both rightToLeft; }\n\n.logo {\n  font-size: 2rem;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn; }\n\n.navbar {\n  width: 100%;\n  color: #e8eeea;\n  font-size: 2rem;\n  padding: 1.6rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn;\n  position: absolute; }\n\n.nav-items .nav-item {\n  display: inline-block;\n  padding: 0.2rem 0;\n  margin: 0.6rem 1rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  border-bottom: 0.3rem solid #17a598;\n  color: #e8eeea;\n  text-decoration: none; }\n\n.container {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: 1.6rem;\n  color: #e8eeea;\n  margin-top: 5%; }\n\n.short-bio {\n  font-size: 1.6rem;\n  padding: 1.6rem;\n  font-weight: normal;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn; }\n\n.quote {\n  font-family: 'Cormorant Garamond', serif;\n  font-size: 1.8rem;\n  padding: 1rem;\n  padding-top: 0rem;\n  -webkit-animation: 1s ease-in-out 0.4s both fadeIn;\n          animation: 1s ease-in-out 0.4s both fadeIn; }\n\n.name {\n  font-family: 'Cormorant Garamond', serif;\n  font-size: 2.4rem;\n  font-weight: bold;\n  line-height: 1.6;\n  padding-top: 0.6rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4rem;\n  word-spacing: 0.2rem;\n  text-align: center;\n  margin-bottom: -2.5rem;\n  -webkit-animation: 1s ease-in-out 0.6s both fadeIn;\n          animation: 1s ease-in-out 0.6s both fadeIn; }\n\n.name:hover .strip::after {\n    left: -1rem; }\n\n.name:hover .strip::before {\n    left: 1rem; }\n\n.strip {\n  display: inline-block;\n  position: relative;\n  width: 28rem;\n  margin: auto;\n  margin-bottom: 2rem;\n  -webkit-animation: 1s ease-in-out 0.8s both fadeIn;\n          animation: 1s ease-in-out 0.8s both fadeIn; }\n\n.strip::before {\n    transition: 0.3s all ease-in-out;\n    content: '';\n    position: absolute;\n    display: inline-block;\n    height: 2px;\n    background-color: #e74c3c;\n    margin: 2px 0;\n    width: 100%;\n    margin: auto;\n    top: 0;\n    left: -1rem; }\n\n.strip::after {\n    transition: 0.3s all ease-in-out;\n    position: absolute;\n    display: inline-block;\n    content: '';\n    height: 2px;\n    background-color: #e74c3c;\n    margin: 2px 0;\n    width: 100%;\n    margin: auto;\n    top: 4px;\n    left: 1rem; }\n\n.contact-btn {\n  min-width: 15rem;\n  line-height: 2.0;\n  font-size: 1.0rem;\n  padding: 0.5rem;\n  margin-top: 2rem;\n  background-color: #e74c3c;\n  color: #fff;\n  border: none;\n  outline: none;\n  border-radius: 70rem;\n  cursor: pointer;\n  transition: all .3s ease-in-out;\n  -webkit-animation: fadeIn 1s ease-in-out 1s both;\n          animation: fadeIn 1s ease-in-out 1s both;\n  box-shadow: 7px 5px 8px 0 rgba(0, 0, 0, 0.31);\n  position: relative; }\n\n.contact-btn span {\n    position: relative;\n    -webkit-transform: translateX(0.7rem);\n            transform: translateX(0.7rem);\n    display: inline-block;\n    transition: all 0.3s ease-in-out; }\n\n.contact-btn:hover {\n    background-color: #db381b;\n    -webkit-animation-play-state: paused;\n            animation-play-state: paused; }\n\n.contact-btn:hover::after {\n      -webkit-transform: translateX(0.2rem);\n              transform: translateX(0.2rem);\n      opacity: 1; }\n\n.contact-btn:hover span {\n      -webkit-transform: translateX(-0.2rem);\n              transform: translateX(-0.2rem); }\n\n.contact-btn:active {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    box-shadow: 4px 5px 5px 0px rgba(0, 0, 0, 0.31); }\n\n.contact-btn::after {\n    content: '\\00bb';\n    position: relative;\n    opacity: 0;\n    vertical-align: sub;\n    font-size: 2.7rem;\n    line-height: 0;\n    -webkit-transform: translateX(25px);\n            transform: translateX(25px);\n    display: inline-block;\n    transition: all 0.3s ease-in-out; }\n\n.tada-animation {\n  -webkit-animation: tada 1s ease-in-out 0s 2 normal both;\n          animation: tada 1s ease-in-out 0s 2 normal both; }\n\n@-webkit-keyframes leftToRight {\n  0% {\n    display: relative;\n    opacity: 0.1;\n    left: -20%; }\n  100% {\n    display: relative;\n    opacity: 1;\n    left: 0%; } }\n\n@keyframes leftToRight {\n  0% {\n    display: relative;\n    opacity: 0.1;\n    left: -20%; }\n  100% {\n    display: relative;\n    opacity: 1;\n    left: 0%; } }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes tada {\n  0% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); }\n  10% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  20% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  30% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  40% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  50% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  60% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  70% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  80% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  90% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  100% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); } }\n\n@keyframes tada {\n  0% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); }\n  10% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  20% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  30% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  40% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  50% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  60% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  70% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  80% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  90% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  100% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); } }\n\n@-webkit-keyframes stripAnimation {\n  0% {\n    -webkit-transform: translateX(-10px) rotateZ(0deg);\n            transform: translateX(-10px) rotateZ(0deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0px) rotateZ(-16deg);\n            transform: translateX(0px) rotateZ(-16deg);\n    opacity: 1; } }\n\n@keyframes stripAnimation {\n  0% {\n    -webkit-transform: translateX(-10px) rotateZ(0deg);\n            transform: translateX(-10px) rotateZ(0deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0px) rotateZ(-16deg);\n            transform: translateX(0px) rotateZ(-16deg);\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxlQUFjO0VBQ2QsMEJDUmM7RURTZCxnQkFBZTtFQUNmLFNBQVE7RUFDUixPQUFNO0VBQ04scUJBQW9CO0VBQ3BCLGdEQUF1QztVQUF2Qyx3Q0FBdUM7RUFDdkMsa0VBQXlEO1VBQXpELDBEQUF5RDtFQUN6RCx3REFBK0M7VUFBL0MsZ0RBQStDLEVBQ2hEOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixtREFBMEM7VUFBMUMsMkNBQTBDLEVBQzNDOztBQUVEO0VBQ0UsWUFBVztFQUNYLGVDbEJlO0VEbUJmLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixtREFBMEM7VUFBMUMsMkNBQTBDO0VBQzFDLG1CQUFrQixFQUNuQjs7QUFFRDtFQUVJLHNCQUFxQjtFQUNyQixrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLDBCQUFpQjtLQUFqQix1QkFBaUI7TUFBakIsc0JBQWlCO1VBQWpCLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLG9DQ3RDUztFRHVDVCxlQ3BDYTtFRHFDYixzQkFBcUIsRUFDdEI7O0FBR0g7RUFDRSxjQUFhO0VBQ2IsUUFBTztFQUNQLHVCQUFzQjtFQUN0Qix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsZUNqRGU7RURrRGYsZUFBYyxFQUNmOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2Ysb0JBQW1CO0VBQ25C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WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFFcEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFFcEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFFcEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFFcEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSx5Q0FBZ0M7WUFBaEMsaUNBQWdDLEVBQUEsRUFBQTs7QUFoQ3BDO0VBQ0U7SUFDRSx5Q0FBZ0M7WUFBaEMsaUNBQWdDLEVBQUE7RUFFbEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFFcEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFFcEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFFcEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFFcEM7SUFDRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFFckM7SUFDRSx5Q0FBZ0M7WUFBaEMsaUNBQWdDLEVBQUEsRUFBQTs7QUFJcEM7RUFDRTtJQUNFLG1EQUEwQztZQUExQywyQ0FBMEM7SUFDMUMsV0FBVSxFQUFBO0VBRVo7SUFDRSxtREFBMEM7WUFBMUMsMkNBQTBDO0lBQzFDLFdBQVUsRUFBQSxFQUFBOztBQVBkO0VBQ0U7SUFDRSxtREFBMEM7WUFBMUMsMkNBQTBDO0lBQzFDLFdBQVUsRUFBQTtFQUVaO0lBQ0UsbURBQTBDO1lBQTFDLDJDQUEwQztJQUMxQyxXQUFVLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vZ2xvYmFsJztcblxuLm92ZXJsYXkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogLTE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoNTB2dyA0MHZoIGF0IDUwJSA1MCUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMikgdHJhbnNsYXRlKDI3dncsIC0xOHZoKSByb3RhdGUoMzM1ZGVnKTtcbiAgICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuMnMgYm90aCByaWdodFRvTGVmdDtcbiAgfVxuICBcbiAgLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuMnMgYm90aCBmYWRlSW47XG4gIH1cbiAgXG4gIC5uYXZiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAkb2ZmLXdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nOiAxLjZyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4ycyBib3RoIGZhZGVJbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgXG4gIC5uYXYtaXRlbXMge1xuICAgIC5uYXYtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAwLjJyZW0gMDtcbiAgICAgIG1hcmdpbjogMC42cmVtIDFyZW07XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDAuM3JlbSBzb2xpZCAkZ3JlZW47XG4gICAgICBjb2xvcjogJG9mZi13aGl0ZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGNvbG9yOiAkb2ZmLXdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICB9XG4gIFxuICAuc2hvcnQtYmlvIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBwYWRkaW5nOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuMnMgYm90aCBmYWRlSW47XG4gIH1cbiAgXG4gIC5xdW90ZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBhZGRpbmctdG9wOiAwcmVtO1xuICAgIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC40cyBib3RoIGZhZGVJbjtcbiAgfVxuICBcbiAgLm5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBwYWRkaW5nLXRvcDogMC42cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNHJlbTtcbiAgICB3b3JkLXNwYWNpbmc6IDAuMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogLTIuNXJlbTtcbiAgICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuNnMgYm90aCBmYWRlSW47XG4gICAgJjpob3ZlciB7XG4gICAgICAuc3RyaXA6OmFmdGVyIHtcbiAgICAgICAgbGVmdDogLTFyZW07XG4gICAgICB9XG4gICAgICAuc3RyaXA6OmJlZm9yZSB7XG4gICAgICAgIGxlZnQ6IDFyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuc3RyaXAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDI4cmVtO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC44cyBib3RoIGZhZGVJbjtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgICAgIG1hcmdpbjogMnB4IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IC0xcmVtO1xuICAgIH1cbiAgICAmOjphZnRlciB7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICAgICAgbWFyZ2luOiAycHggMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgdG9wOiA0cHg7XG4gICAgICBsZWZ0OiAxcmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLmNvbnRhY3QtYnRuIHtcbiAgICBtaW4td2lkdGg6IDE1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjA7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA3MHJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcyBlYXNlLWluLW91dCAxcyBib3RoO1xuICAgIGJveC1zaGFkb3c6IDdweCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAuMzEpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjdyZW0pO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMztcbiAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjJyZW0pO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgICAgc3BhbiB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4ycmVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgICAgYm94LXNoYWRvdzogNHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zMSk7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICdcXDAwYmInO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gICAgICBmb250LXNpemU6IDIuN3JlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1cHgpO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICB9XG5cbiAgLnRhZGEtYW5pbWF0aW9uIHtcbiAgICBhbmltYXRpb246IHRhZGEgMXMgZWFzZS1pbi1vdXQgMHMgMiBub3JtYWwgYm90aDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBsZWZ0VG9SaWdodCB7XG4gICAgMCUge1xuICAgICAgZGlzcGxheTogcmVsYXRpdmU7XG4gICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICBsZWZ0OiAtMjAlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGxlZnQ6IDAlO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyB0YWRhIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICAgIH1cbiAgICA4MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgICB9XG4gICAgOTAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzdHJpcEFuaW1hdGlvbiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KSByb3RhdGVaKDBkZWcpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSByb3RhdGVaKC0xNmRlZyk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfSIsIiRiZy1jb2xvcjogIzE3YTU5ODtcbiRjb2xvcjE6ICNlNzRjM2M7XG4kY29sb3IyOiAjZDJlMWRkO1xuJGNvbG9yMzogI2RiMzgxYjtcbiRncmVlbjogIzE3YTU5ODtcbi8vICR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrOiAjNTU1O1xuJG9mZi13aGl0ZTogI2U4ZWVlYTtcbiR0ZXh0LWNvbG9yOiByZ2IoNzMsIDM5LCAzOSk7XG4vLyAjNjk5O1xuJHdoaXRlOiAjZmZmO1xuJGNvbG9yNDogcmdiKDI0NywgMTY4LCAxNjgpO1xuJGNvbG9yNTogcmdiKDYxLCA5MiwgOTIpOyJdfQ== */"

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

module.exports = "\n<div (click)=\"onBackClick()\">\n    <app-back-button></app-back-button> \n</div>\n\n<div class=\"overlay\"></div>\n<div class=\"container\">\n    <div class=\"card\">\n      <div class=\"strip-block\">\n        <div class=\"profile-logo\">\n          <img src=\"assets/images/profile-pic.png\" alt=\"\">\n        </div>\n        <div class=\"strip\"></div>\n        <div class=\"short-details\">\n          <blockquote class=\"quote tagLine\">\n            \"I like to explore new skills in a way of self-learning.\"\n          </blockquote>\n        </div>\n      </div>\n  \n      <div class=\"details\">\n          <div class=\"divider\">\n            <div class=\"stick \"></div>\n            <div class=\"stick \"></div>\n          </div>\n        <p class=\"bio\">I am a software developer cum software automation engineer and an aspiring Devops Engineer.\n        <br> I'm interested to work on frameowrks on Ruby, Python and in developing tools.\n        </p>\n        </div>\n      <div class=\"divider\">\n        <div class=\"stick\"></div>\n        <div class=\"stick\"></div>\n      </div>\n      <div class=\"typewriter\"><p>Contact me through any of these means: </p></div>\n      <div class=\"social\">\n        <div class=\"social-icon\">\n          <a href=\"https://www.slack.com/\" target=\"_blank\">\n            <img src=\"assets/assert/icons/slack.png\" alt=\"slack icon\">\n          </a>\n        </div>\n        <div class=\"social-icon\">\n          <a href=\"https://www.github.com/swati001\" target=\"_blank\">\n            <img src=\"assets/assert/icons/github.png\" alt=\"github icon\">\n          </a>\n        </div>\n        <div class=\"social-icon\">\n          <a href=\"https://www.linkedin.com/in/swati-sharma-aa423b89/\" target=\"_blank\">\n            <img src=\"assets/assert/icons/linkedin.png\" alt=\"linkedin icon\">\n          </a>\n        </div>\n        <div class=\"social-icon\">\n          <a href=\"mailto:swatiinfo86@gmail.com\">\n            <img src=\"assets/assert/icons/mail.png\" alt=\"email icon\">\n          </a>\n        </div>\n      </div>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\n  height: 90vh;\n  width: 90vw;\n  overflow: hidden;\n  z-index: -1;\n  display: block;\n  background: #d2e1dd;\n  position: fixed;\n  right: 0;\n  top: 0;\n  -webkit-clip-path: circle(60% 40%);\n          clip-path: circle(60% 40%);\n  -webkit-transform: scale(2) translate(27vw, -18vh) rotate(335deg);\n          transform: scale(2) translate(27vw, -18vh) rotate(335deg);\n  -webkit-animation: 1s ease-in-out 0.1s both leftToRight;\n          animation: 1s ease-in-out 0.1s both leftToRight; }\n\n.container {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  align-items: center;\n  padding: 1rem 0;\n  justify-content: center;\n  background-color: #d2e1dd;\n  color: #e8eeea; }\n\n.container .card {\n    background-color: #17a598;\n    height: auto;\n    max-height: 100vh;\n    width: 30rem;\n    text-align: center;\n    overflow-x: hidden;\n    position: relative;\n    z-index: 1;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    overflow: hidden;\n    border-radius: 10px;\n    box-shadow: 8px 7px 9px 0px #84a88a;\n    transition: all 0.3s ease-in-out;\n    -webkit-animation: dropin 1s ease-in-out 0s 1 normal both;\n            animation: dropin 1s ease-in-out 0s 1 normal both; }\n\n.container .profile-logo {\n    height: 14rem;\n    width: 14rem;\n    margin-top: 5.5rem;\n    display: inline-block;\n    position: relative;\n    z-index: 5;\n    -webkit-animation: dropin 1s ease-in-out 0.4s 1 normal both;\n            animation: dropin 1s ease-in-out 0.4s 1 normal both; }\n\n.container .profile-logo img {\n      position: relative;\n      border: 0.2rem solid #e74c3c;\n      height: 70%;\n      width: 70%;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden;\n      transition: all 0.5s ease-in-out; }\n\n.container .strip {\n    background-color: #e74c3c;\n    height: 4.5rem;\n    width: 150%;\n    margin-left: -5rem;\n    margin-top: -20rem;\n    z-index: -1;\n    position: absolute;\n    -webkit-animation: stripAnimation 1s ease-in-out 1.4s 1 normal both;\n            animation: stripAnimation 1s ease-in-out 1.4s 1 normal both; }\n\n.container .strip::after {\n      content: '';\n      display: inline-block;\n      position: absolute;\n      height: 100%;\n      width: 20%;\n      background-color: #ffffff;\n      opacity: 0;\n      top: 0;\n      left: 0; }\n\n.container .strip:hover::after {\n      -webkit-animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both;\n              animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both; }\n\n.container .strip-block:hover .strip:after {\n    -webkit-animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both;\n            animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both; }\n\n.container .short-details {\n    position: relative;\n    -webkit-animation: dropin 1s ease-in-out 0.4s 1 normal both;\n            animation: dropin 1s ease-in-out 0.4s 1 normal both; }\n\n.container .short-details .tagLine {\n      display: block;\n      width: 100%;\n      font-size: 1.2rem;\n      font-weight: lighter;\n      font-style: italic;\n      padding: 0.5rem; }\n\n.container .short-details .quote {\n      font-family: 'Cormorant Garamond', serif;\n      display: inline-block;\n      font-size: 1.2rem;\n      font-weight: 100;\n      width: 65%;\n      padding: 0.5rem 2rem;\n      padding-bottom: 0.2rem;\n      line-height: 1.2; }\n\n.container .details {\n    margin-top: 1rem; }\n\n.container .details .nameBlock {\n      transition: all 0.3s ease-in-out;\n      -webkit-animation: dropin 1s ease-in-out 0.6s 1 normal both;\n              animation: dropin 1s ease-in-out 0.6s 1 normal both; }\n\n.container .details .name {\n      display: inline-block;\n      position: relative;\n      width: 60%;\n      font-size: 2rem;\n      font-weight: 400;\n      line-height: 1.6;\n      text-transform: uppercase;\n      letter-spacing: 0.2rem; }\n\n.container .details .bio {\n      display: inline-block;\n      width: 70%;\n      font-size: 1.2rem;\n      margin: 0.4rem;\n      line-height: 1.2;\n      font-weight: lighter;\n      margin-bottom: 0.8rem;\n      text-align: center;\n      word-spacing: 1px;\n      -webkit-animation: dropin 1s ease-in-out 0.8s 1 normal both;\n              animation: dropin 1s ease-in-out 0.8s 1 normal both; }\n\n.container .social {\n    display: block;\n    padding: 3rem 3rem;\n    padding-top: 0;\n    margin-top: 0.6rem;\n    -webkit-animation: dropin 1s ease-in-out 1.2s 1 normal both;\n            animation: dropin 1s ease-in-out 1.2s 1 normal both; }\n\n.container .social .social-icon {\n      display: inline-block;\n      width: 2.5rem;\n      height: 2.5rem;\n      margin: 0.2rem 0.5rem;\n      background-color: #ffffff;\n      transition: all 0.3s ease-in-out; }\n\n.container .social .social-icon img {\n        height: 100%;\n        width: 100%; }\n\n.container .social .social-icon:hover {\n        -webkit-transform: scale(1.3);\n                transform: scale(1.3); }\n\n.typewriter p {\n  overflow: hidden;\n  /* Ensures the content is not revealed until the animation */\n  border-right: .10em solid red;\n  /* The typwriter cursor */\n  white-space: nowrap;\n  /* Keeps the content on a single line */\n  margin: 0 auto;\n  /* Gives that scrolling effect as the typing happens */\n  letter-spacing: .12em;\n  /* Adjust as needed */\n  font-family: Courier;\n  font-size: 1.1rem;\n  -webkit-animation: typing 4.5s steps(30, end), blink-caret 0.75s step-end infinite;\n          animation: typing 4.5s steps(30, end), blink-caret 0.75s step-end infinite; }\n\n/* The typing effect */\n\n@-webkit-keyframes typing {\n  from {\n    width: 0; }\n  to {\n    width: 80%; } }\n\n@keyframes typing {\n  from {\n    width: 0; }\n  to {\n    width: 80%; } }\n\n.divider {\n  padding: 1rem;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  position: relative; }\n\n.divider .stick {\n    display: inline-block;\n    position: relative;\n    height: 2px;\n    background-color: #e74c3c;\n    margin: 2px 0;\n    width: 75%;\n    clear: both; }\n\n@-webkit-keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%; }\n  100% {\n    opacity: 0.7;\n    left: 120%; } }\n\n@keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%; }\n  100% {\n    opacity: 0.7;\n    left: 120%; } }\n\n@-webkit-keyframes dropin {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes dropin {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes stripAnimation {\n  0% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1; } }\n\n@keyframes stripAnimation {\n  0% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVFLGFBQVk7RUFDWixZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxlQUFjO0VBQ2Qsb0JDVGM7RURVZCxnQkFBZTtFQUNmLFNBQVE7RUFDUixPQUFNO0VBQ04sbUNBQTBCO1VBQTFCLDJCQUEwQjtFQUMxQixrRUFBeUQ7VUFBekQsMERBQXlEO0VBQ3pELHdEQUErQztVQUEvQyxnREFBK0MsRUFDaEQ7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2Ysd0JBQXVCO0VBQ3ZCLDBCQzFCYztFRDJCZCxlQ3RCaUIsRURzS2xCOztBQXpKRDtJQVdJLDBCQy9CYztJRGdDZCxhQUFZO0lBQ1osa0JBQWlCO0lBQ2pCLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLG1CQUFrQjtJQUNsQixXQUFVO0lBQ1YsMEJBQWlCO09BQWpCLHVCQUFpQjtRQUFqQixzQkFBaUI7WUFBakIsa0JBQWlCO0lBQ2pCLGlCQUFnQjtJQUNoQixvQkFBbUI7SUFDbkIsb0NBQW1DO0lBQ25DLGlDQUFnQztJQUNoQywwREFBaUQ7WUFBakQsa0RBQWlELEVBQ2xEOztBQXpCSDtJQTJCSSxjQUFhO0lBQ2IsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsbUJBQWtCO0lBQ2xCLFdBQVU7SUFHViw0REFBbUQ7WUFBbkQsb0RBQW1ELEVBV3BEOztBQTlDSDtNQXFDTSxtQkFBa0I7TUFDbEIsNkJD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QUFZO0lBQ1osV0FBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRTtJQUNFLFdBQVU7SUFDViw0QkFBbUI7WUFBbkIsb0JBQW1CLEVBQUE7RUFFckI7SUFDRSxXQUFVO0lBQ1YsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUFBLEVBQUE7O0FBUHZCO0VBQ0U7SUFDRSxXQUFVO0lBQ1YsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUFBO0VBRXJCO0lBQ0UsV0FBVTtJQUNWLDRCQUFtQjtZQUFuQixvQkFBbUIsRUFBQSxFQUFBOztBQUl2QjtFQUNFO0lBQ0UscUNBQTRCO1lBQTVCLDZCQUE0QjtJQUM1QixXQUFVLEVBQUE7RUFFWjtJQUNFLG1DQUEwQjtZQUExQiwyQkFBMEI7SUFDMUIsV0FBVSxFQUFBLEVBQUE7O0FBUGQ7RUFDRTtJQUNFLHFDQUE0QjtZQUE1Qiw2QkFBNEI7SUFDNUIsV0FBVSxFQUFBO0VBRVo7SUFDRSxtQ0FBMEI7WUFBMUIsMkJBQTBCO0lBQzFCLFdBQVUsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vZ2xvYmFsLnNjc3MnO1xuJHRleHQtY2FyZC1zaGlmdDo0NSU7XG4kcm93LWNvbG91bS1icmstcG9pbnQ6ICdtYXgtd2lkdGg6IDEwNDBweCc7XG5cbi5vdmVybGF5IHtcbiAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDkwdmg7XG4gIHdpZHRoOiA5MHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAtMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICRjb2xvcjI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoNjAlIDQwJSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMikgdHJhbnNsYXRlKDI3dncsIC0xOHZoKSByb3RhdGUoMzM1ZGVnKTtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjFzIGJvdGggbGVmdFRvUmlnaHQ7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XG4gIGNvbG9yOiAkb2ZmLXdoaXRlO1xuICAuY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMzByZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogOHB4IDdweCA5cHggMHB4ICM4NGE4OGE7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMHMgMSBub3JtYWwgYm90aDtcbiAgfVxuICAucHJvZmlsZS1sb2dvIHtcbiAgICBoZWlnaHQ6IDE0cmVtO1xuICAgIHdpZHRoOiAxNHJlbTtcbiAgICBtYXJnaW4tdG9wOiA1LjVyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAvLyBwZXJzcGVjdGl2ZTogMTUwMHB4O1xuICAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuNHMgMSBub3JtYWwgYm90aDtcbiAgICBpbWcge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm9yZGVyOiAwLjJyZW0gc29saWQgJGNvbG9yMTtcbiAgICAgIGhlaWdodDogNzAlO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAvLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC8vICAgcGVyc3BlY3RpdmU6IDE1MDBweDtcbiAgICB9XG4gIH1cbiAgLnN0cmlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xuICAgIGhlaWdodDogNC41cmVtO1xuICAgIHdpZHRoOiAxNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAtMjByZW07XG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVaKC0xNmRlZyk7XG4gICAgei1pbmRleDogLTE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGFuaW1hdGlvbjogc3RyaXBBbmltYXRpb24gMXMgZWFzZS1pbi1vdXQgMS40cyAxIG5vcm1hbCBib3RoO1xuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgJjpob3Zlcjo6YWZ0ZXIge1xuICAgICAgYW5pbWF0aW9uOiBmYWRlTGVmdFRvUmlnaHQgMXMgZWFzZS1pbi1vdXQgMHMgMSBub3JtYWwgYm90aDtcbiAgICB9XG4gIH1cbiAgLnN0cmlwLWJsb2NrOmhvdmVyIHtcbiAgICAuc3RyaXA6YWZ0ZXIge1xuICAgICAgYW5pbWF0aW9uOiBmYWRlTGVmdFRvUmlnaHQgMXMgZWFzZS1pbi1vdXQgMHMgMSBub3JtYWwgYm90aDtcbiAgICB9XG4gIH1cbiAgLnNob3J0LWRldGFpbHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAwLjRzIDEgbm9ybWFsIGJvdGg7XG4gICAgLnRhZ0xpbmUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgfVxuICAgIC5xdW90ZSB7XG4gICAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgd2lkdGg6IDY1JTtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgfVxuICB9XG4gIC5kZXRhaWxzIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIC5uYW1lQmxvY2sge1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAwLjZzIDEgbm9ybWFsIGJvdGg7XG4gICAgfVxuICAgIC5uYW1lIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xuICAgIH1cbiAgICAuYmlvIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIG1hcmdpbjogMC40cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd29yZC1zcGFjaW5nOiAxcHg7XG4gICAgICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAwLjhzIDEgbm9ybWFsIGJvdGg7XG4gICAgfVxuICAgIC8vIC5iaW86aG92ZXIge1xuICAgIC8vICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCAwLjJzIGVhc2UtaW4tb3V0IDBzIDEgbm9ybWFsIGJvdGg7XG4gICAgLy8gICAgIH1cbiAgfVxuICAuc29jaWFsIHtcbiAgICBkaXNwbGF5OiBibG9jazsgLy8gcGFkZGluZzogMXJlbSAwO1xuICAgIHBhZGRpbmc6IDNyZW0gM3JlbTtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiAwLjZyZW07XG4gICAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMS4ycyAxIG5vcm1hbCBib3RoO1xuICAgIC5zb2NpYWwtaWNvbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICBtYXJnaW46IDAuMnJlbSAwLjVyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi50eXBld3JpdGVyIHAge1xuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIEVuc3VyZXMgdGhlIGNvbnRlbnQgaXMgbm90IHJldmVhbGVkIHVudGlsIHRoZSBhbmltYXRpb24gKi9cbiAgICBib3JkZXItcmlnaHQ6IC4xMGVtIHNvbGlkIHJlZDsgLyogVGhlIHR5cHdyaXRlciBjdXJzb3IgKi9cbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBLZWVwcyB0aGUgY29udGVudCBvbiBhIHNpbmdsZSBsaW5lICovXG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIEdpdmVzIHRoYXQgc2Nyb2xsaW5nIGVmZmVjdCBhcyB0aGUgdHlwaW5nIGhhcHBlbnMgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogLjEyZW07IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICBmb250LWZhbWlseTogQ291cmllcjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAvLyBmb250LXdlaWdodDogYm9sZDtcbiAgICBhbmltYXRpb246IFxuICAgICAgdHlwaW5nIDQuNXMgc3RlcHMoMzAsIGVuZCksXG4gICAgICBibGluay1jYXJldCAuNzVzIHN0ZXAtZW5kIGluZmluaXRlO1xuICB9XG4gIFxuICAvKiBUaGUgdHlwaW5nIGVmZmVjdCAqL1xuICBAa2V5ZnJhbWVzIHR5cGluZyB7XG4gICAgZnJvbSB7IHdpZHRoOiAwIH1cbiAgICB0byB7IHdpZHRoOiA4MCUgfVxuICB9XG5cbi5kaXZpZGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLnN0aWNrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XG4gICAgbWFyZ2luOiAycHggMDtcbiAgICB3aWR0aDogNzUlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUxlZnRUb1JpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgICBsZWZ0OiAtMTAlO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBsZWZ0OiAxMjAlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZHJvcGluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzdHJpcEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsIiRiZy1jb2xvcjogIzE3YTU5ODtcbiRjb2xvcjE6ICNlNzRjM2M7XG4kY29sb3IyOiAjZDJlMWRkO1xuJGNvbG9yMzogI2RiMzgxYjtcbiRncmVlbjogIzE3YTU5ODtcbi8vICR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrOiAjNTU1O1xuJG9mZi13aGl0ZTogI2U4ZWVlYTtcbiR0ZXh0LWNvbG9yOiByZ2IoNzMsIDM5LCAzOSk7XG4vLyAjNjk5O1xuJHdoaXRlOiAjZmZmO1xuJGNvbG9yNDogcmdiKDI0NywgMTY4LCAxNjgpO1xuJGNvbG9yNTogcmdiKDYxLCA5MiwgOTIpOyJdfQ== */"

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
    description: 'A web application for allowing customer to submit a claim.',
    client: 'AT&T',
    duration: '10/01/2007 - 11/01/2008',
    features: [
        'Customer can dispute one claim or more than one',
        'Customers can keep track of their submitted claim',
        'Client Side & Server side validation',
        'Stateful session maintained and Authentication & Authorization for user login',
        'Repository Pattern',
        'Application Architecture is quite robust and '
    ],
    tags: ['Java'],
    techStuff: [
        'Java',
        'J2EE, Struts, JSP',
        'EJB Stateful session',
        'javascript'
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
    description: 'A server maintainence and support project, which handle three different environment as well as production',
    client: 'British Telecom (BT)',
    duration: '11/11/2008 - 06/20/2010',
    features: [
        'Monitoring the servers and maintaining the servers health',
        'Build and deployment of applications on servers',
        'Testing the applications using data or timestamps and searching logs in Unix',
        'Automating the process of monitoring and maintaining the servers using unix scripts and cron jobs',
        'UI dashboard for server health status and status of deploymnet of applications',
    ],
    tags: ['Java'],
    techStuff: [
        'Java/J2EE',
        'JSP, javascript, Shell script, cron',
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
    description: 'A retail web application made handling supply to stores and warehouse items, orders and forecasting the demands',
    client: 'ICA',
    duration: '02/23/2012 - 04/15/2014',
    features: [
        'Retails Web Application for store or warehouse requests,  does orders management, supply management and pricing management',
        'There are over 1300 ICA stores throughout Sweden, Netherlands',
        'Developmnet of new features and defect fixing on existing features in production or testing',
        'Handling SOAP web services and messaging services for XML requests and responses',
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
    name: 'Lowes Mobile Application',
    description: 'A retail web and mobile web application for automation testing on different platforms and browsers.',
    client: 'Lowes',
    duration: '04/16/2014 - 02/01/2015',
    features: [
        'Retails Application for online shopping for customer on home improvemnt products and materials',
        'There are over 1300 ICA stores throughout United States',
        'Developed a new automation framework to move away from leagacy testing and to allow testng on mobile platforms as well.',
        'Parallel execution of test scenarios on web browsers and mobile browsers on real devies for iOS and Android',
        'Collaborating with developers, data team and preparing the daily reports of regression execution results'
    ],
    tags: ['Java'],
    techStuff: [
        'Java/J2EE, Java design patterns',
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
    features: [
        'Web Application for searching and finding libray material and collections of documents published',
        'Login and authentication of users as Students, organizations and libraries',
        'Developmnet of new web pages and unit testing of pages and features',
        'Interation with Database and handling validation sat client side.',
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
    description: 'A retail web application for selling mobile plans, offers and phone',
    client: 'Comcast',
    duration: '02/01/2015 - 11/20/2016',
    features: [
        'A web application introduced as Xfinity Mobile which sells mobile plans and phones',
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
    description: 'An entertainment mobile app for watching channels, movies, tv video contents on phone/tablets',
    client: 'Comcast',
    duration: '02/01/2015 - 11/20/2016',
    features: [
        'A mobile TV app which shows video contents like TV shows, movies, channels and daily live episodes',
        'Customers can subscribe to any channels, watch list of different categories of videos, on demand or recorded episodes',
        'Customers can also download and watch later the movies or tv shows for free or by On Demand',
        'Automated the app on mobile platform, using Ruby and calabash',
        'Wrote the performance script in Ruby to measure download speed',
        'Automated the apis in Ruby'
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

module.exports = ".root-container {\n  display: flex;\n  flex-direction: column;\n  height: 80vh;\n  width: 100vw; }\n\n.overlay {\n  height: 90vh;\n  width: 90vw;\n  overflow: hidden;\n  z-index: -1;\n  display: block;\n  background: #d2e1dd;\n  position: fixed;\n  right: 0;\n  top: 0;\n  -webkit-clip-path: circle(60% 40%);\n          clip-path: circle(60% 40%);\n  -webkit-transform: scale(2) translate(27vw, -18vh) rotate(335deg);\n          transform: scale(2) translate(27vw, -18vh) rotate(335deg);\n  -webkit-animation: 1s ease-in-out 0.1s both leftToRight;\n          animation: 1s ease-in-out 0.1s both leftToRight; }\n\n.profile-image {\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn; }\n\n.navbar {\n  width: 100%;\n  color: #e8eeea;\n  font-size: 1.5rem;\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.nav-items .nav-item {\n  display: inline-block;\n  padding: 0.2rem 0;\n  margin: 0.6rem 1rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  border-bottom: 0.3rem solid red;\n  color: #492727;\n  text-decoration: none; }\n\n.container {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: 1.2rem;\n  color: #e8eeea;\n  margin-top: 5%; }\n\n.short-bio {\n  font-size: 1.2rem;\n  padding: 1rem;\n  color: #492727;\n  font-weight: normal;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn; }\n\n.quote {\n  font-family: 'Cormorant Garamond', serif;\n  font-size: 1.2rem;\n  padding: 1rem;\n  padding-top: 0rem;\n  color: #492727;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn; }\n\n.name {\n  font-family: 'Cormorant Garamond', serif;\n  font-size: 2.4rem;\n  font-weight: bold;\n  line-height: 1.6;\n  padding-top: 0.6rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4rem;\n  word-spacing: 0.2rem;\n  text-align: center;\n  margin-bottom: -2.5rem;\n  -webkit-animation: 1s ease-in-out 0.6s both fadeIn;\n          animation: 1s ease-in-out 0.6s both fadeIn; }\n\n.name:hover .strip::after {\n    left: -1rem; }\n\n.name:hover .strip::before {\n    left: 1rem; }\n\n.strip {\n  display: inline-block;\n  position: relative;\n  width: 28rem;\n  margin: auto;\n  margin-bottom: 1rem;\n  -webkit-animation: 1s ease-in-out 0.8s both fadeIn;\n          animation: 1s ease-in-out 0.8s both fadeIn; }\n\n.strip::before {\n    transition: 0.3s all ease-in-out;\n    content: '';\n    position: absolute;\n    display: inline-block;\n    height: 2px;\n    background-color: #e74c3c;\n    margin: 2px 0;\n    width: 100%;\n    margin: auto;\n    top: 0;\n    left: -1rem; }\n\n.strip::after {\n    transition: 0.3s all ease-in-out;\n    position: absolute;\n    display: inline-block;\n    content: '';\n    height: 2px;\n    background-color: #e74c3c;\n    margin: 2px 0;\n    width: 100%;\n    margin: auto;\n    top: 4px;\n    left: 1rem; }\n\n.special-btn {\n  min-width: 8rem;\n  line-height: 1.1;\n  font-size: 1.1rem;\n  padding: 0.5rem;\n  margin-top: 2rem;\n  background-color: #e74c3c;\n  color: #fff;\n  border: none;\n  outline: none;\n  border-radius: 100rem;\n  cursor: pointer;\n  transition: all .3s ease-in-out;\n  -webkit-animation: fadeIn 1s ease-in-out 1s both;\n          animation: fadeIn 1s ease-in-out 1s both;\n  box-shadow: 7px 5px 8px 0 rgba(0, 0, 0, 0.31);\n  position: relative; }\n\n.special-btn span {\n    position: relative;\n    -webkit-transform: translateX(0.7rem);\n            transform: translateX(0.7rem);\n    display: inline-block;\n    transition: all 0.3s ease-in-out; }\n\n.special-btn:hover {\n    background-color: #db381b;\n    -webkit-animation-play-state: paused;\n            animation-play-state: paused; }\n\n.special-btn:hover::after {\n      -webkit-transform: translateX(0.2rem);\n              transform: translateX(0.2rem);\n      opacity: 5; }\n\n.special-btn:hover span {\n      -webkit-transform: translateX(-0.2rem);\n              transform: translateX(-0.2rem); }\n\n.special-btn::after {\n    content: '\\2192';\n    position: relative;\n    opacity: 0;\n    vertical-align: sub;\n    font-size: 1.5rem;\n    line-height: 0;\n    display: inline-block;\n    transition: all 0.3s ease-in-out; }\n\n.link-animation {\n  -webkit-animation: shake 1s ease-in-out 0s 2 normal both;\n          animation: shake 1s ease-in-out 0s 2 normal both; }\n\n@-webkit-keyframes shake {\n  0% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); }\n  10% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  20% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  30% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  40% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  50% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  60% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  70% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  80% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  90% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  100% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); } }\n\n@keyframes shake {\n  0% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); }\n  10% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  20% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  30% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  40% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  50% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  60% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  70% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  80% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  90% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  100% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLGFBQVksRUFDYjs7QUFFRDtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxlQUFjO0VBQ2Qsb0JDYmM7RURjZCxnQkFBZTtFQUNmLFNBQVE7RUFDUixPQUFNO0VBQ04sbUNBQTBCO1VBQTFCLDJCQUEwQjtFQUMxQixrRUFBeUQ7VUFBekQsMERBQXlEO0VBQ3pELHdEQUErQztVQUEvQyxnREFBK0MsRUFDaEQ7O0FBRUQ7RUFDRSxtREFBMEM7VUFBMUMsMkNBQTBDLEVBQzNDOztBQUVEO0VBQ0UsWUFBVztFQUNYLGVDdkJpQjtFRHdCakIsa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUVJLHNCQUFxQjtFQUNyQixrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLDBCQUFpQjtLQUFqQix1QkFBaUI7TUFBakIsc0JBQWlCO1VBQWpCLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGdDQUErQjtFQUMvQixlQ3RDd0I7RUR1Q3hCLHNCQUFxQixFQUN0Qjs7QUFHSDtFQUNFLGNBQWE7RUFDYixRQUFPO0VBQ1AsdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixlQ3BEaUI7RURxRGpCLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQixjQUFhO0VBQ2IsZUMx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O1lBQWxDLG1DQUFrQyxFQUFBO0VBRXBDO0lBQ0UsNENBQW1DO1lBQW5DLG9DQUFtQyxFQUFBO0VBRXJDO0lBQ0UsMkNBQWtDO1lBQWxDLG1DQUFrQyxFQUFBO0VBRXBDO0lBQ0UsNENBQW1DO1lBQW5DLG9DQUFtQyxFQUFBO0VBRXJDO0lBQ0UsMkNBQWtDO1lBQWxDLG1DQUFrQyxFQUFBO0VBRXBDO0lBQ0UsNENBQW1DO1lBQW5DLG9DQUFtQyxFQUFBO0VBRXJDO0lBQ0UsMkNBQWtDO1lBQWxDLG1DQUFrQyxFQUFBO0VBRXBDO0lBQ0UsNENBQW1DO1lBQW5DLG9DQUFtQyxFQUFBO0VBRXJDO0lBQ0UseUNBQWdDO1lBQWhDLGlDQUFnQyxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9nbG9iYWwuc2Nzcyc7XG4kc21fYnJlYWtfcG9pbnQ6NTYwcHg7XG4ucm9vdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDgwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLm92ZXJsYXkge1xuICBoZWlnaHQ6IDkwdmg7XG4gIHdpZHRoOiA5MHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAtMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICRjb2xvcjI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoNjAlIDQwJSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMikgdHJhbnNsYXRlKDI3dncsIC0xOHZoKSByb3RhdGUoMzM1ZGVnKTtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjFzIGJvdGggbGVmdFRvUmlnaHQ7XG59XG5cbi5wcm9maWxlLWltYWdlIHtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjJzIGJvdGggZmFkZUluO1xufVxuXG4ubmF2YmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAkb2ZmLXdoaXRlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXYtaXRlbXMge1xuICAubmF2LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwLjJyZW0gMDtcbiAgICBtYXJnaW46IDAuNnJlbSAxcmVtO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAwLjNyZW0gc29saWQgcmVkO1xuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogJG9mZi13aGl0ZTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5zaG9ydC1iaW8ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuMnMgYm90aCBmYWRlSW47XG59XG5cbi5xdW90ZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMHJlbTtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuMnMgYm90aCBmYWRlSW47XG59XG5cbi5uYW1lIHtcbiAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBwYWRkaW5nLXRvcDogMC42cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC40cmVtO1xuICB3b3JkLXNwYWNpbmc6IDAuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAtMi41cmVtO1xuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuNnMgYm90aCBmYWRlSW47XG4gICY6aG92ZXIge1xuICAgIC5zdHJpcDo6YWZ0ZXIge1xuICAgICAgbGVmdDogLTFyZW07XG4gICAgfVxuICAgIC5zdHJpcDo6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IDFyZW07XG4gICAgfVxuICB9XG59XG5cbi5zdHJpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjhyZW07XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjhzIGJvdGggZmFkZUluO1xuICAmOjpiZWZvcmUge1xuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgICBtYXJnaW46IDJweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTFyZW07XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgICBtYXJnaW46IDJweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6IDRweDtcbiAgICBsZWZ0OiAxcmVtO1xuICB9XG59XG5cbi5zcGVjaWFsLWJ0biB7XG4gIG1pbi13aWR0aDogOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2UtaW4tb3V0IDFzIGJvdGg7XG4gIGJveC1zaGFkb3c6IDdweCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAuMzEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHNwYW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC43cmVtKTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMztcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICAgICY6OmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjJyZW0pO1xuICAgICAgb3BhY2l0eTogNTtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMnJlbSk7XG4gICAgfVxuICB9XG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4vLyAgICAgYm94LXNoYWRvdzogNHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zMSk7XG4vLyAgIH1cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICdcXDIxOTInO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1cHgpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgfVxufVxuXG4ubGluay1hbmltYXRpb24ge1xuICBhbmltYXRpb246IHNoYWtlIDFzIGVhc2UtaW4tb3V0IDBzIDIgbm9ybWFsIGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gICAgfVxuICAgIDYwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xuICAgIH1cbiAgICA3MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gICAgfVxuICAgIDgwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xuICAgIH1cbiAgICA5MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gICAgfVxuICB9IiwiJGJnLWNvbG9yOiAjMTdhNTk4O1xuJGNvbG9yMTogI2U3NGMzYztcbiRjb2xvcjI6ICNkMmUxZGQ7XG4kY29sb3IzOiAjZGIzODFiO1xuJGdyZWVuOiAjMTdhNTk4O1xuLy8gJHRleHQtY29sb3I6ICNmZmZmZmY7XG4kYmxhY2s6ICM1NTU7XG4kb2ZmLXdoaXRlOiAjZThlZWVhO1xuJHRleHQtY29sb3I6IHJnYig3MywgMzksIDM5KTtcbi8vICM2OTk7XG4kd2hpdGU6ICNmZmY7XG4kY29sb3I0OiByZ2IoMjQ3LCAxNjgsIDE2OCk7XG4kY29sb3I1OiByZ2IoNjEsIDkyLCA5Mik7Il19 */"

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

module.exports = ".profile-logo {\n  height: 14rem;\n  width: 14rem;\n  display: inline-block;\n  position: relative;\n  z-index: 5;\n  -webkit-perspective: 1500px;\n          perspective: 1500px; }\n  .profile-logo img {\n    position: relative;\n    border: 0.2rem solid #e74c3c;\n    height: 100%;\n    width: 100%;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transition: all 0.2s ease-in-out;\n    -webkit-perspective: 1500px;\n            perspective: 1500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvcHJvZmlsZS1waWMvcHJvZmlsZS1waWMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc3NoYXJtYTAwMS9Eb2N1bWVudHMvTXlQcm9qZWN0cy9hbmd1bGFyLXBvcnRmb2xpby9zcmMvYXBwL2dsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBYTtFQUNiLGFBQVk7RUFFWixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLFdBQVU7RUFFViw0QkFBbUI7VUFBbkIsb0JBQW1CLEVBMENwQjtFQWxERDtJQVlJLG1CQUFrQjtJQUNsQiw2QkNkWTtJRGVaLGFBQVk7SUFDWixZQUFXO0lBRVgsb0NBQTJCO1lBQTNCLDRCQUEyQjtJQUMzQixpQ0FBZ0M7SUFDaEMsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtcGljL3Byb2ZpbGUtcGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vZ2xvYmFsJztcblxuLnByb2ZpbGUtbG9nbyB7XG4gIGhlaWdodDogMTRyZW07XG4gIHdpZHRoOiAxNHJlbTtcbiAgLy8gbWFyZ2luLXRvcDogNnJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGVyc3BlY3RpdmU6IDE1MDBweDtcbi8vICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4vLyAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuNHMgMSBub3JtYWwgYm90aDtcbiAgaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAwLjJyZW0gc29saWQgJGNvbG9yMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBwZXJzcGVjdGl2ZTogMTUwMHB4O1xuICB9XG4vLyAgICY6OmFmdGVyIHtcbi8vICAgICBjb250ZW50OiAnUml0d2ljayBEZXknO1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBjb2xvcjogI2ZmZjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xuLy8gICAgIGJvcmRlcjogMC44cmVtIHNvbGlkICRjb2xvcjM7XG4vLyAgICAgdG9wOiAwcHg7XG4vLyAgICAgbGVmdDogMHB4O1xuLy8gICAgIHotaW5kZXg6IDEwO1xuLy8gICAgIGZvbnQtc2l6ZTogMC44ZW07XG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4vLyAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4vLyAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuLy8gICAgIHBlcnNwZWN0aXZlOiAxNTAwcHg7XG4vLyAgIH1cbi8vICAgJjpob3ZlciB7XG4vLyAgICAgaW1nIHtcbi8vICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICAmOmhvdmVyOjphZnRlciB7XG4vLyAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuLy8gICB9XG59IiwiJGJnLWNvbG9yOiAjMTdhNTk4O1xuJGNvbG9yMTogI2U3NGMzYztcbiRjb2xvcjI6ICNkMmUxZGQ7XG4kY29sb3IzOiAjZGIzODFiO1xuJGdyZWVuOiAjMTdhNTk4O1xuLy8gJHRleHQtY29sb3I6ICNmZmZmZmY7XG4kYmxhY2s6ICM1NTU7XG4kb2ZmLXdoaXRlOiAjZThlZWVhO1xuJHRleHQtY29sb3I6IHJnYig3MywgMzksIDM5KTtcbi8vICM2OTk7XG4kd2hpdGU6ICNmZmY7XG4kY29sb3I0OiByZ2IoMjQ3LCAxNjgsIDE2OCk7XG4kY29sb3I1OiByZ2IoNjEsIDkyLCA5Mik7Il19 */"

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

module.exports = "\n<div (click)=\"onBackClick()\">\n     <app-back-button></app-back-button> \n</div>\n\n  <span class=\"overlay\"></span>\n  <div class=\"container\">\n    <div class=\"side1\">\n      <div class=\"text-container\">\n          <h1 class=\"text-header\">About</h1>\n        <p>\n          I have 10 years of experience in software engineering. I have worked as a software developer for different clients\n          and also gained experience in software automation testing. I started programming with Java and J2EE in 2008 and I learned about different tools\n          while working on different projects. I gained experience in Ruby, AngularJS, node.js. \n        </p>\n          <p>\n          I jumped into software automation in 2014 for building a frameowrk in Java. I love working on new skills and technologies and resolving problems.\n          In Software automation field, I got opportunity to work on Capybara, Calabash, Appium, Selenium, Cucumber.\n          I like to build frameowrks and tools to help teams and to gain experience with software architecture.\n        </p>\n        <p>Highlights:</p>\n         \n            <ul>\n              <li> Built a project dashboard using Struts/JSP for my first project, which checks the status of servers using cron jobs and shows up the result. </li>\n              <li> Built the framework for automation in Java using BDD framework (cucumber) for Mobile Web Application</li>\n              <li> Built the frameowrk for automation project in Ruby using Capybara and Selenium gems, for multi browser and parallel execution.</li>\n            </ul>\n        \n        <br>\n        <p>\n          Apart from programming, I like to play badminton, baking sweet treats and watch documentries about universe/planets.\n        </p>\n      </div>\n    </div>\n    <div class=\"side2\">\n      <div class=\"skill-container\">\n        <h1 class=\"skill-header\">\n          Skills\n        </h1>\n        <div *ngFor=\"let profile of profiles\">\n          <h4 class=\"skill-type\">{{profile.type}}</h4>\n          <h4 class=\"skill-names\">{{profile.name.join(', ')}}</h4>\n        </div>\n      </div>\n    </div>\n  </div> "

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\n  display: inline-block;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  left: -100%;\n  position: fixed;\n  background: #d2e1dd;\n  -webkit-transform: scale(2) skew(-8deg);\n          transform: scale(2) skew(-8deg);\n  z-index: -1;\n  transition: 0.3s all ease-in-out; }\n  @media (max-width: 1040px) {\n    .overlay {\n      -webkit-transform: scale(2) skew(0deg);\n              transform: scale(2) skew(0deg); } }\n  .container {\n  font-size: 1.2rem;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  color: #492727;\n  padding: 1rem; }\n  @media (max-width: 1040px) {\n    .container {\n      flex-direction: column; } }\n  .container .side1 {\n    flex: 1;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding-top: 5.0rem;\n    padding-left: 2.5rem; }\n  @media (max-width: 1040px) {\n      .container .side1 {\n        flex: none;\n        height: auto; } }\n  .container .side1 > h1 {\n      margin-bottom: 0;\n      padding: 3rem 0.8rem 0.2rem;\n      font-size: 3rem; }\n  .container .side2 {\n    flex: 1;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding-top: 5.0rem; }\n  @media (max-width: 1040px) {\n      .container .side2 {\n        flex: none;\n        height: auto; } }\n  .text-container {\n  height: auto;\n  max-width: 35rem;\n  background-color: #17a598;\n  padding: 3rem 1.8rem;\n  padding-top: 2.0rem;\n  border-radius: 2rem;\n  min-width: 35rem;\n  align-items: center;\n  font-size: 1.2rem; }\n  .dp-logo {\n  font-size: 1.6rem;\n  -webkit-transform: translate(0, 45%);\n          transform: translate(0, 45%);\n  height: 10rem;\n  width: 10rem;\n  display: flex;\n  align-items: center; }\n  .skill-container {\n  padding: 1rem 1.8rem;\n  margin-left: 5rem;\n  background: #d2e1dd;\n  padding-top: 2.0rem;\n  border-radius: 2rem;\n  min-width: 35rem;\n  height: auto;\n  max-width: 35rem;\n  align-items: right;\n  color: #492727; }\n  @media (max-width: 1040px) {\n    .skill-container {\n      margin: auto; } }\n  .text-header {\n  margin: 2rem 0;\n  margin-bottom: 3.8rem;\n  position: relative;\n  letter-spacing: 2px;\n  padding-bottom: 0rem;\n  font-size: 2.5rem;\n  font-family: 'Cormorant Garamond', serif;\n  justify-content: flex-start; }\n  .text-header:after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 100%;\n    height: 3px;\n    top: 100%;\n    left: 0;\n    background: #db381b; }\n  .skill-header {\n  margin: 2rem 0;\n  margin-bottom: 3.8rem;\n  position: relative;\n  letter-spacing: 2px;\n  padding-bottom: 0rem;\n  font-size: 2.5rem;\n  font-family: 'Cormorant Garamond', serif;\n  justify-content: flex-start; }\n  .skill-header:after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 100%;\n    height: 3px;\n    top: 100%;\n    left: 0;\n    background: #db381b; }\n  .skill-type {\n  position: relative;\n  margin: 1.2rem 0;\n  padding-bottom: 0.2rem;\n  font-size: 1.2rem; }\n  .skill-type:after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 70%;\n    height: 1.5px;\n    top: 100%;\n    left: 0;\n    background: #699; }\n  .skill-names {\n  margin-left: 2.8rem;\n  margin-bottom: 2rem;\n  margin-top: -0.6rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHNCQUFxQjtFQUNyQixjQUFhO0VBQ2IsYUFBWTtFQUNaLE9BQU07RUFDTixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixvQkNSYztFRFNkLHdDQUErQjtVQUEvQixnQ0FBK0I7RUFDL0IsWUFBVztFQUNYLGlDQUFnQyxFQUlqQztFQUhDO0lBWEY7TUFZSSx1Q0FBOEI7Y0FBOUIsK0JBQThCLEVBRWpDLEVBQUE7RUFFRDtFQUNFLGtCQUFpQjtFQUNqQixjQUFhO0VBQ2IsYUFBWTtFQUNaLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsOEJBQTZCO0VBQzdCLGVDbEIwQjtFRG9CMUIsY0FBYSxFQWdDZDtFQS9CQztJQVZGO01BV0ksdUJBQXNCLEVBOEJ6QixFQUFBO0VBekNEO0lBY0ksUUFBTztJQUNQLGFBQVk7SUFDWixjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLG9CQUFtQjtJQUNuQixxQkFBb0IsRUFVckI7RUFUQztNQXBCSjtRQXFCTSxXQUFVO1FBQ1YsYUFBWSxFQU9mLEVBQUE7RUE3Qkg7TUF5Qk0saUJBQWdCO01BQ2hCLDRCQUEyQjtNQUMzQixnQkFBZSxFQUNoQjtFQTVCTDtJQStCSSxRQUFPO0lBQ1AsYUFBWTtJQUNaLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsb0JBQW1CLEVBS3BCO0VBSkM7TUFwQ0o7UUFxQ00sV0FBVTtRQUNWLGFBQVksRUFFZixFQUFBO0VBR0g7RUFDRSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLDBCQ2pFZ0I7RURrRWhCLHFCQUFvQjtFQUNwQixvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsa0JBQWlCLEVBQ2xCO0VBRUQ7RUFDRSxrQkFBaUI7RUFDakIscUNBQTRCO1VBQTVCLDZCQUE0QjtFQUM1QixjQUFhO0VBQ2IsYUFBWTtFQUNaLGNBQWE7RUFDYixvQkFBbUIsRUFDcEI7RUFFRDtFQUNFLHFCQUFvQjtFQUNwQixrQkFBaUI7RUFDakIsb0JDcEZjO0VEcUZkLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLGVDckYwQixFRHlGM0I7RUFIQztJQVhGO01BWUksYUFBWSxFQUVmLEVBQUE7RUFHRDtFQUNJLGVBQWM7RUFDZCxzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixxQkFBb0I7RUFDcEIsa0JBQWlCO0VBQ2pCLHlDQUF3QztFQUN4Qyw0QkFBMkIsRUFXOUI7RUFuQkQ7SUFVSSxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLHNCQUFxQjtJQUNyQixZQUFXO0lBQ1gsWUFBVztJQUNYLFVBQVM7SUFDVCxRQUFPO0lBQ1Asb0JDbEhZLEVEbUhiO0VBRUg7RUFDRSxlQUFjO0VBQ2Qsc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIscUJBQW9CO0VBQ3BCLGtCQUFpQjtFQUNqQix5Q0FBd0M7RUFDeEMsNEJBQTJCLEVBVzVCO0VBbkJEO0lBVUksWUFBVztJQUNYLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsWUFBVztJQUNYLFlBQVc7SUFDWCxVQUFTO0lBQ1QsUUFBTztJQUNQLG9CQ3RJWSxFRHVJYjtFQUdIO0VBQ0UsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQix1QkFBc0I7RUFDdEIsa0JBQWlCLEVBV2xCO0VBZkQ7SUFNSSxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLHNCQUFxQjtJQUNyQixXQUFVO0lBQ1YsY0FBYTtJQUNiLFVBQVM7SUFDVCxRQUFPO0lBQ1AsaUJBQWdCLEVBQ2pCO0VBR0g7RUFDRSxvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL2dsb2JhbCc7XG4kdGV4dC1jYXJkLXNoaWZ0OjIwJTtcbiRyb3ctY29sb3VtLWJyay1wb2ludDogJ21heC13aWR0aDogMTA0MHB4Jztcbi5vdmVybGF5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHRvcDogMDtcbiAgbGVmdDogLTEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogJGNvbG9yMjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKSBza2V3KC04ZGVnKTtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xuICBAbWVkaWEgKCRyb3ctY29sb3VtLWJyay1wb2ludCkge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMikgc2tldygwZGVnKTtcbiAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgQG1lZGlhICgkcm93LWNvbG91bS1icmstcG9pbnQpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5zaWRlMSB7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctdG9wOiA1LjByZW07XG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG4gICAgQG1lZGlhICgkcm93LWNvbG91bS1icmstcG9pbnQpIHtcbiAgICAgIGZsZXg6IG5vbmU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICAgICY+aDEge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIHBhZGRpbmc6IDNyZW0gMC44cmVtIDAuMnJlbTtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG4gIH1cbiAgLnNpZGUyIHtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy10b3A6IDUuMHJlbTtcbiAgICBAbWVkaWEgKCRyb3ctY29sb3VtLWJyay1wb2ludCkge1xuICAgICAgZmxleDogbm9uZTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cbn1cblxuLnRleHQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDM1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4gIHBhZGRpbmc6IDNyZW0gMS44cmVtO1xuICBwYWRkaW5nLXRvcDogMi4wcmVtO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBtaW4td2lkdGg6IDM1cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmRwLWxvZ28ge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNDUlKTtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgd2lkdGg6IDEwcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2tpbGwtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMXJlbSAxLjhyZW07XG4gIG1hcmdpbi1sZWZ0OiA1cmVtO1xuICBiYWNrZ3JvdW5kOiAkY29sb3IyO1xuICBwYWRkaW5nLXRvcDogMi4wcmVtO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBtaW4td2lkdGg6IDM1cmVtO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMzVyZW07XG4gIGFsaWduLWl0ZW1zOiByaWdodDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBAbWVkaWEgKCRyb3ctY29sb3VtLWJyay1wb2ludCkge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG5cbi50ZXh0LWhlYWRlciB7XG4gICAgbWFyZ2luOiAycmVtIDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMy44cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuJjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3IzO1xuICB9XG59XG4uc2tpbGwtaGVhZGVyIHtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIG1hcmdpbi1ib3R0b206IDMuOHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHJlbTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3IzO1xuICB9XG59XG5cbi5za2lsbC10eXBlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEuMnJlbSAwO1xuICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogMS41cHg7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogIzY5OTtcbiAgfVxufVxuXG4uc2tpbGwtbmFtZXMge1xuICBtYXJnaW4tbGVmdDogMi44cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBtYXJnaW4tdG9wOiAtMC42cmVtO1xufSIsIiRiZy1jb2xvcjogIzE3YTU5ODtcbiRjb2xvcjE6ICNlNzRjM2M7XG4kY29sb3IyOiAjZDJlMWRkO1xuJGNvbG9yMzogI2RiMzgxYjtcbiRncmVlbjogIzE3YTU5ODtcbi8vICR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrOiAjNTU1O1xuJG9mZi13aGl0ZTogI2U4ZWVlYTtcbiR0ZXh0LWNvbG9yOiByZ2IoNzMsIDM5LCAzOSk7XG4vLyAjNjk5O1xuJHdoaXRlOiAjZmZmO1xuJGNvbG9yNDogcmdiKDI0NywgMTY4LCAxNjgpO1xuJGNvbG9yNTogcmdiKDYxLCA5MiwgOTIpOyJdfQ== */"

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

module.exports = "<div class=\"portfolio-bg\">\n<div class=\"back-icon\" (click)=\"onBackBtnClick()\">\n  <app-back-button></app-back-button>\n</div>\n<div class=\"portfolio-container\"> \n<div class=\"portfolio-header\" #portfolioHeader></div>\n<div class=\"portfolio-area\" #portfolioArea>   \n<div class=\"portfolio-selection\" #portfolioSelectionArea [ngClass]=\"{'portfolio-selection__fixed': setFixedPostion }\">\n  <h1>Projects</h1>\n<div>\n  <!-- <app-tags></app-tags> -->\n</div>\n</div>\n<div class=\"project-container\">\n<div *ngFor=\"let proj of projects\" class=\"project-card\">\n<div class=\"card-outer\">\n    <div class=\"card card__front\">\n      <div class=\"card-container\">\n        <h4 class=\"card-header\">{{proj.name}}</h4>\n        <p class=\"card-short-details\" >\n          {{proj.description}}\n        </p>\n      </div>\n    </div>\n    <div class=\"card card__back\">\n      <div class=\"card-container\">\n        <h4 class=\"card-header\">{{proj.name}}</h4>\n        <div class=\"card-short-details\">\n          <div class=\"tech-stuff-details\">\n            <span>Tech Stuff: </span>\n            <br>\n            <p>{{proj.techStuff}}</p>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n</div>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/project/project.component.scss":
/*!************************************************!*\
  !*** ./src/app/project/project.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio-bg {\n  min-height: 100vh;\n  min-width: 100vw;\n  position: relative;\n  background-color: #d2e1dd;\n  overflow: hidden;\n  display: flex; }\n\n.portfolio-container {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  padding: 3.5rem;\n  flex-direction: column;\n  color: #492727; }\n\n.portfolio-container .portfolio-header {\n    display: flex;\n    justify-content: stretch;\n    margin: auto;\n    align-items: center;\n    font-size: 1.2rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.portfolio-container .portfolio-area {\n    margin: 0rem 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    z-index: 50;\n    position: relative; }\n\n.portfolio-container .portfolio-area .portfolio-selection {\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n\n.portfolio-container .portfolio-area .portfolio-selection.portfolio-selection__fixed {\n        position: fixed;\n        top: 0;\n        z-index: 1;\n        background-color: #d2e1dd;\n        color: #492727;\n        width: 100%;\n        transition: all 0.3s ease-in-out; }\n\n.portfolio-container .portfolio-area .portfolio-selection > h1 {\n        font-family: 'Cormorant Garamond', serif;\n        font-weight: bold;\n        font-size: 1.9rem;\n        letter-spacing: 1px;\n        margin: 1rem auto;\n        text-align: center; }\n\n@media (max-width: 900px) {\n  .portfolio-container {\n    padding: 3.5rem 0.5rem; } }\n\n@media (max-width: 74rem) {\n  .portfolio-header {\n    flex-direction: column; } }\n\n.card-outer {\n  position: relative;\n  font-family: Times;\n  font-weight: normal;\n  color: #492727;\n  cursor: pointer; }\n\n.card-outer:hover .card__front {\n    cursor: pointer;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n\n.card-outer:hover .card__back {\n    cursor: pointer;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg); }\n\n.card {\n  width: 100%;\n  min-width: 18rem;\n  min-height: 18rem;\n  background-color: #e8eeea;\n  border-radius: 0.6rem;\n  cursor: pointer;\n  overflow: hidden;\n  box-shadow: 6px 6px 15px rgba(1, 100, 18, 0.3);\n  transition: 0.8s ease-in-out;\n  -webkit-perspective: 15000px;\n          perspective: 15000px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.card.card__front {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg); }\n\n.card.card__back {\n    background-color: #17a598;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n\n.card.card__featured::before {\n    content: '\\269D';\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    font-size: 1.2rem;\n    padding: 0 0.4rem;\n    color: #492727; }\n\n.card.card__featured:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 3.2rem;\n    height: 3.2rem;\n    background-color: #327e36;\n    -webkit-transform: rotateZ(45deg) translate(-88%) scale(2);\n            transform: rotateZ(45deg) translate(-88%) scale(2); }\n\n.card .card-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 0.6rem 1.6rem;\n    width: 100%;\n    height: 100%; }\n\n.card .card-container .card-header {\n      font-family: cursive;\n      width: 100%;\n      font-size: 1.5rem;\n      margin: 1rem 0;\n      font-weight: bold; }\n\n.card .card-container .card-short-details {\n      width: 100%;\n      flex: 1;\n      font-size: 1.2rem;\n      margin: 0.6rem 0; }\n\n.card .card-container .tech-stuff-details > span {\n      font-weight: bold;\n      display: inline-block; }\n\n.card .card-container .tech-stuff-details > p {\n      display: inline;\n      margin-left: 0.3rem;\n      word-break: break-word; }\n\n.card .card-container .full-width-btn {\n      display: block;\n      width: 100%;\n      position: fixed;\n      left: 0;\n      bottom: 0;\n      background: #e74c3c;\n      padding: 0.8rem 0.3rem;\n      line-height: 2;\n      font-size: 1.6rem;\n      color: #fff;\n      border: 0;\n      outline: none;\n      cursor: pointer; }\n\n.project-container {\n  width: 70%;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  transition: all 0.5s ease-in-out; }\n\n.project-container .project-card {\n    padding: 1rem;\n    flex-basis: 33.3%;\n    transition: all 0.5s ease-in-out; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLDBCQ0hZO0VESVosaUJBQWdCO0VBQ2hCLGNBQWEsRUFFZDs7QUFFRDtFQUNFLGNBQWE7RUFDYixRQUFPO0VBQ1Asd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osWUFBVztFQUVYLGdCQUFlO0VBQ2YsdUJBQXNCO0VBQ3RCLGVDYndCLEVEMkR6Qjs7QUF4REQ7SUFhSSxjQUFhO0lBQ2IseUJBQXdCO0lBQ3hCLGFBQVk7SUFDWixvQkFBbUI7SUFDbkIsa0JBQWlCO0lBQ2pCLDBCQUFpQjtPQUFqQix1QkFBaUI7UUFBakIsc0JBQWlCO1lBQWpCLGtCQUFpQixFQUVsQjs7QUFwQkg7SUF1QkksZUFBYztJQUNkLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsd0JBQXVCO0lBQ3ZCLG9CQUFtQjtJQUNuQixZQUFXO0lBQ1gsbUJBQWtCLEVBMEJuQjs7QUF2REg7TUFpQ00sMEJBQWlCO1NBQWpCLHVCQUFpQjtVQUFqQixzQkFBaUI7Y0FBakIsa0JBQWlCLEVBcUJsQjs7QUF0REw7UUFvQ1EsZ0JBQWU7UUFDZixPQUFNO1FBQ04sV0FBVTtRQUNWLDBCQ2hETTtRRGlETixlQzNDa0I7UUQ0Q2xCLFlBQVc7UUFFWCxpQ0FBZ0MsRUFDakM7O0FBNUNQO1FBK0NRLHlDQUF3QztRQUN4QyxrQkFBaUI7UUFDakIsa0JBQWlCO1FBQ2pCLG9CQUFtQjtRQUNuQixrQkFBaUI7UUFDakIsbUJBQWtCLEVBQ25COztBQUtQO0VBQ0U7SUFDRSx1QkFBc0IsRUFDdkIsRUFBQTs7QUFHSDtFQUNFO0lBQ0UsdUJBQXNCLEVBQ3ZCLEVBQUE7O0FBTUg7RUFDRSxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixlQ2hGd0I7RURpRnhCLGdCQUFlLEVBWWhCOztBQWpCRDtJQVNNLGdCQUFlO0lBQ2YsbUNBQTBCO1lBQTFCLDJCQUEwQixFQUMzQjs7QUFYTDtJQWFNLGdCQUFlO0lBQ2YsaUNBQXdCO1lBQXhCLHlCQUF3QixFQUN6Qjs7QUFJTDtFQUNFLFlBQVc7RUFDWCxpQkF2QmU7RUF3QmYsa0JBekJnQjtFQTBCaEIsMEJDcEdlO0VEcUdmLHNCQUFxQjtFQUNyQixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQiwrQ0FBcUM7RUFDckMsNkJBQTRCO0VBQzVCLDZCQUFvQjtVQUFwQixxQkFBb0I7RUFDcEIsb0NBQTJCO1VBQTNCLDRCQUEyQjtFQUMzQiwwQkFBaUI7S0FBakIsdUJBQWlCO01BQWpCLHNCQUFpQjtVQUFqQixrQkFBaUIsRUEyRmxCOztBQXZHRDtJQWVJLGlDQUF3QjtZQUF4Qix5QkFBd0IsRUFDekI7O0FBaEJIO0lBbUJJLDBCQ3RIUztJRHVIVCxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFFBQU87SUFDUCxZQUFXO0lBQ1gsbUNBQTBCO1lBQTFCLDJCQUEwQixFQUMzQjs7QUF6Qkg7SUE2Qk0saUJBQWdCO0lBQ2hCLG1CQUFrQjtJQUNsQixPQUFNO0lBQ04sUUFBTztJQUNQLFdBQVU7SUFDVixrQkFBaUI7SUFDakIsa0JBQWlCO0lBQ2pCLGVDbklvQixFRG9JckI7O0FBckNMO0lBdUNNLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFFBQU87SUFDUCxjQUFhO0lBQ2IsZUFBYztJQUNkLDBCQUF5QjtJQUN6QiwyREFBa0Q7WUFBbEQsbURBQWtELEVBQ25EOztBQS9DTDtJQW1ESSxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLGdCQUFlO0lBQ2YsdUJBQXNCO0lBQ3RCLFlBQVc7SUFDWCxhQUFZLEVBOENiOztBQXRHSDtNQTJETSxxQkFBb0I7TUFDcEIsWUFBVztNQUNYLGtCQUFpQjtNQUNqQixlQUFjO01BQ2Qsa0JBQWlCLEVBQ2xCOztBQWhFTDtNQW1FTSxZQUFXO01BQ1gsUUFBTztNQUNQLGtCQUFpQjtNQUNqQixpQkFBZ0IsRUFDakI7O0FBdkVMO01BMkVRLGtCQUFpQjtNQUNqQixzQkFBcUIsRUFDdEI7O0FBN0VQO01BZ0ZRLGdCQUFlO01BQ2Ysb0JBQW1CO01BQ25CLHVCQUFzQixFQUN2Qjs7QUFuRlA7TUF1Rk0sZUFBYztNQUNkLFlBQVc7TUFDWCxnQkFBZTtNQUNmLFFBQU87TUFDUCxVQUFTO01BQ1Qsb0JDbE1RO01EbU1SLHVCQUFzQjtNQUN0QixlQUFjO01BQ2Qsa0JBQWlCO01BQ2pCLFlBQVc7TUFDWCxVQUFTO01BQ1QsY0FBYTtNQUNiLGdCQUFlLEVBRWhCOztBQUlMO0VBQ0UsV0FBVTtFQUNWLGFBQVk7RUFDWixjQUFhO0VBQ2IsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsaUNBQWdDLEVBT2pDOztBQWJEO0lBU0ksY0FBYTtJQUNiLGtCQUFpQjtJQUNqQixpQ0FBZ0MsRUFDakMiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9nbG9iYWwnO1xuLnBvcnRmb2xpby1iZyB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWluLXdpZHRoOiAxMDB2dztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIFxuICB9XG4gIFxuICAucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHotaW5kZXg6IDEwO1xuICAgIHBhZGRpbmc6IDMuNXJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgXG4gICAgLnBvcnRmb2xpby1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICBcbiAgICB9XG4gIFxuICAgIC5wb3J0Zm9saW8tYXJlYSB7XG4gICAgICBtYXJnaW46IDByZW0gMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgei1pbmRleDogNTA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAgICAgLnBvcnRmb2xpby1zZWxlY3Rpb24ge1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgXG4gICAgICAgICYucG9ydGZvbGlvLXNlbGVjdGlvbl9fZml4ZWQge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xuICAgICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gICBib3gtc2hhZG93OiAwcHggOHB4IDIwcHggcmdiYSgkY29sb3I6ICMwMDAsICRhbHBoYTogMC40KTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgJiA+IGgxIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS45cmVtO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAzLjVyZW0gMC41cmVtO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc0cmVtKSB7XG4gICAgLnBvcnRmb2xpby1oZWFkZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIH1cbiBcbiAgJG1pbi1oZWlnaHQ6IDE4cmVtO1xuICAkbWluLXdpZHRoOiAxOHJlbTtcbiAgXG4gIC5jYXJkLW91dGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1mYW1pbHk6IFRpbWVzO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgXG4gICAgJjpob3ZlciB7XG4gICAgICAuY2FyZF9fZnJvbnQge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgICAgfVxuICAgICAgLmNhcmRfX2JhY2sge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6ICRtaW4td2lkdGg7XG4gICAgbWluLWhlaWdodDogJG1pbi1oZWlnaHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9mZi13aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjZyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogNnB4IDZweCAxNXB4IHJnYmEoIzAxNjQxMiwgMC4zKTtcbiAgICB0cmFuc2l0aW9uOiAwLjhzIGVhc2UtaW4tb3V0O1xuICAgIHBlcnNwZWN0aXZlOiAxNTAwMHB4O1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgXG4gICAgJi5jYXJkX19mcm9udCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgfVxuICBcbiAgICAmLmNhcmRfX2JhY2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgfVxuICBcbiAgICAmLmNhcmRfX2ZlYXR1cmVkIHtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICdcXDI2OUQnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIHBhZGRpbmc6IDAgMC40cmVtO1xuICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgICB9XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMy4ycmVtO1xuICAgICAgICBoZWlnaHQ6IDMuMnJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMyN2UzNjtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKSB0cmFuc2xhdGUoLTg4JSkgc2NhbGUoMik7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAuY2FyZC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBwYWRkaW5nOiAwLjZyZW0gMS42cmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gIFxuICAgICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICBcbiAgICAgIC5jYXJkLXNob3J0LWRldGFpbHMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIG1hcmdpbjogMC42cmVtIDA7XG4gICAgICB9XG4gIFxuICAgICAgLnRlY2gtc3R1ZmYtZGV0YWlscyB7XG4gICAgICAgICYgPiBzcGFuIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgXG4gICAgICAgICYgPiBwIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLmZ1bGwtd2lkdGgtYnRuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yMTtcbiAgICAgICAgcGFkZGluZzogMC44cmVtIDAuM3JlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC8vIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucHJvamVjdC1jb250YWluZXIge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIFxuICAgIC5wcm9qZWN0LWNhcmQge1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGZsZXgtYmFzaXM6IDMzLjMlO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICB9IiwiJGJnLWNvbG9yOiAjMTdhNTk4O1xuJGNvbG9yMTogI2U3NGMzYztcbiRjb2xvcjI6ICNkMmUxZGQ7XG4kY29sb3IzOiAjZGIzODFiO1xuJGdyZWVuOiAjMTdhNTk4O1xuLy8gJHRleHQtY29sb3I6ICNmZmZmZmY7XG4kYmxhY2s6ICM1NTU7XG4kb2ZmLXdoaXRlOiAjZThlZWVhO1xuJHRleHQtY29sb3I6IHJnYig3MywgMzksIDM5KTtcbi8vICM2OTk7XG4kd2hpdGU6ICNmZmY7XG4kY29sb3I0OiByZ2IoMjQ3LCAxNjgsIDE2OCk7XG4kY29sb3I1OiByZ2IoNjEsIDkyLCA5Mik7Il19 */"

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

module.exports = ".key-skills {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 1rem auto; }\n  .key-skills .key-skill {\n    z-index: 99;\n    position: relative;\n    font-size: 1.5rem;\n    font-family: 'Franklin Gothic Medium';\n    margin: 0.6rem;\n    padding: 0.4rem 2rem;\n    border: 2px solid #699;\n    border-radius: 50rem;\n    cursor: pointer;\n    color: #492727;\n    line-height: 1.5;\n    background-color: #17a598;\n    transition: all 0.3s ease-in-out;\n    outline: none;\n    box-shadow: 0.4rem 0.5rem 0.9rem #016412; }\n  .key-skills .key-skill:disabled {\n      background-color: #e85a41;\n      border: 2px solid #e85a41;\n      box-shadow: none; }\n  .key-skills .key-skill:hover:disabled {\n      margin: 0.6rem;\n      padding: 0.4rem 2rem;\n      cursor: not-allowed; }\n  .key-skills .key-skill.key-skill--disabled {\n      border: 2px solid #db381b;\n      background-color: transparent;\n      overflow: hidden;\n      transition: all 0.3s ease-in-out; }\n  .key-skills .key-skill.key-skill--disabled:after {\n      content: '';\n      position: absolute;\n      display: block;\n      width: 100%;\n      height: 2px;\n      background-color: #db381b;\n      top: 50%;\n      left: 0;\n      -webkit-transform: rotateZ(-14deg);\n              transform: rotateZ(-14deg);\n      transition: all 0.3s ease-in-out; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvdGFncy90YWdzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWE7RUFDYixnQkFBZTtFQUNmLHdCQUF1QjtFQUN2QixrQkFBaUIsRUFtRWxCO0VBdkVEO0lBVUksWUFBVztJQUNYLG1CQUFrQjtJQUNsQixrQkFBaUI7SUFDakIsc0NBQXFDO0lBQ3JDLGVBUnVCO0lBU3ZCLHFCQVI2QjtJQVM3Qix1QkFBc0I7SUFDdEIscUJBQW9CO0lBQ3BCLGdCQUFlO0lBQ2YsZUNid0I7SURleEIsaUJBQWdCO0lBQ2hCLDBCQ3hCYztJRHlCZCxpQ0FBZ0M7SUFDaEMsY0FBYTtJQUNiLHlDQUF3QyxFQTZDekM7RUF0RUg7TUE0Qk0sMEJBQStDO01BQy9DLDBCQUErQztNQUMvQyxpQkFBZ0IsRUFDakI7RUEvQkw7TUFrQ00sZUE1QnFCO01BNkJyQixxQkE1QjJCO01BNkIzQixvQkFBbUIsRUFDcEI7RUFyQ0w7TUFtRE0sMEJDbERVO01EbURWLDhCQUE2QjtNQUM3QixpQkFBZ0I7TUFDaEIsaUNBQWdDLEVBQ2pDO0VBdkRMO01BMERNLFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsZUFBYztNQUNkLFlBQVc7TUFDWCxZQUFXO01BQ1gsMEJDOURVO01EK0RWLFNBQVE7TUFDUixRQUFPO01BQ1AsbUNBQTBCO2NBQTFCLDJCQUEwQjtNQUMxQixpQ0FBZ0MsRUFFakMiLCJmaWxlIjoic3JjL2FwcC90YWdzL3RhZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9nbG9iYWwnO1xuXG4ua2V5LXNraWxscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuXG4gICRrZXlfc2tpbGxfbWFyZ2luOiAwLjZyZW07XG4gICRrZXlfc2tpbGxfcGFkZGluZzogMC40cmVtIDJyZW07XG5cbiAgLmtleS1za2lsbCB7XG4gICAgei1pbmRleDogOTk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bSc7XG4gICAgbWFyZ2luOiAka2V5X3NraWxsX21hcmdpbjtcbiAgICBwYWRkaW5nOiAka2V5X3NraWxsX3BhZGRpbmc7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzY5OTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIC8vIGJvcmRlci1ib3R0b20tY29sb3I6IHJlZDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAuNHJlbSAwLjVyZW0gMC45cmVtICMwMTY0MTI7XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yMywgJGFtb3VudDogMTApO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRlbigkY29sb3IzLCAkYW1vdW50OiAxMCk7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cblxuICAgICY6aG92ZXI6ZGlzYWJsZWQge1xuICAgICAgbWFyZ2luOiAka2V5X3NraWxsX21hcmdpbjtcbiAgICAgIHBhZGRpbmc6ICRrZXlfc2tpbGxfcGFkZGluZztcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuXG4gICAgLy8gJC5rZXktc2tpbGxcbiAgICAmOmhvdmVyIHtcbiAgICAvLyAgIHBhZGRpbmc6IDAuNHJlbSAzLjJyZW07XG4gICAgLy8gICBtYXJnaW46IDAuNnJlbSAycmVtO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjQ7XG4gICAgLy8gICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIC8vICAgICBtYXJnaW46ICRrZXlfc2tpbGxfbWFyZ2luO1xuICAgIC8vICAgICBwYWRkaW5nOiAka2V5X3NraWxsX3BhZGRpbmc7XG4gICAgLy8gICB9XG4gICAgfVxuXG4gICAgJi5rZXktc2tpbGwtLWRpc2FibGVkIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvcjM7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICB9XG5cbiAgICAmLmtleS1za2lsbC0tZGlzYWJsZWQ6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IzO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xNGRlZyk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIC8vIGFuaW1hdGlvbjogc2xpZGVJbiAwLjZzO1xuICAgIH1cbiAgfVxufSIsIiRiZy1jb2xvcjogIzE3YTU5ODtcbiRjb2xvcjE6ICNlNzRjM2M7XG4kY29sb3IyOiAjZDJlMWRkO1xuJGNvbG9yMzogI2RiMzgxYjtcbiRncmVlbjogIzE3YTU5ODtcbi8vICR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrOiAjNTU1O1xuJG9mZi13aGl0ZTogI2U4ZWVlYTtcbiR0ZXh0LWNvbG9yOiByZ2IoNzMsIDM5LCAzOSk7XG4vLyAjNjk5O1xuJHdoaXRlOiAjZmZmO1xuJGNvbG9yNDogcmdiKDI0NywgMTY4LCAxNjgpO1xuJGNvbG9yNTogcmdiKDYxLCA5MiwgOTIpOyJdfQ== */"

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