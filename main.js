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

module.exports = "<app-header></app-header>\n<div [@routerTransition]=\"triggerAnimation(outlet)\">\n  <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  font-size: 2rem;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn; }\n\n@-webkit-keyframes leftToRight {\n  0% {\n    display: relative;\n    opacity: 0.1;\n    left: -20%; }\n  100% {\n    display: relative;\n    opacity: 1;\n    left: 0%; } }\n\n@keyframes leftToRight {\n  0% {\n    display: relative;\n    opacity: 0.1;\n    left: -20%; }\n  100% {\n    display: relative;\n    opacity: 1;\n    left: 0%; } }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1ERTtFQUNFLGdCQUFlO0VBQ2YsbURBQTBDO1VBQTFDLDJDQUEwQyxFQUMzQzs7QUFxS0Q7RUFDRTtJQUNFLGtCQUFpQjtJQUNqQixhQUFZO0lBQ1osV0FBVSxFQUFBO0VBRVo7SUFDRSxrQkFBaUI7SUFDakIsV0FBVTtJQUNWLFNBQVEsRUFBQSxFQUFBOztBQVRaO0VBQ0U7SUFDRSxrQkFBaUI7SUFDakIsYUFBWTtJQUNaLFdBQVUsRUFBQTtFQUVaO0lBQ0Usa0JBQWlCO0lBQ2pCLFdBQVU7SUFDVixTQUFRLEVBQUEsRUFBQTs7QUFJWjtFQUNFO0lBQ0UsV0FBVTtJQUNWLDRCQUFtQjtZQUFuQixvQkFBbUIsRUFBQTtFQUVyQjtJQUNFLFdBQVU7SUFDViw0QkFBbUI7WUFBbkIsb0JBQW1CLEVBQUEsRUFBQTs7QUFQdkI7RUFDRTtJQUNFLFdBQVU7SUFDViw0QkFBbUI7WUFBbkIsb0JBQW1CLEVBQUE7RUFFckI7SUFDRSxXQUFVO0lBQ1YsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL2dsb2JhbCc7XG5cbi8vIC5vdmVybGF5IHtcbiAgICAvLyBoZWlnaHQ6IDEwMHZoO1xuICAgIC8vIHdpZHRoOiAxMDB2dztcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8vIHotaW5kZXg6IC0xO1xuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gcmlnaHQ6IDA7XG4gICAgLy8gdG9wOiAwO1xuICAgIC8vIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIC8vIGNsaXAtcGF0aDogY2lyY2xlKDUwdncgNDB2aCBhdCA1MCUgNTAlKTtcbiAgICAvLyB0cmFuc2Zvcm06IHNjYWxlKDIpIHRyYW5zbGF0ZSgyN3Z3LCAtMTh2aCkgcm90YXRlKDMzNWRlZyk7XG4gICAgLy8gYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjJzIGJvdGggcmlnaHRUb0xlZnQ7XG4gIC8vIH1cblxuICAgICAgICAgICAgLy8gICAucG9ydGZvbGlvLWhlYWRlciB7XG4gICAgICAgICAgICAvLyAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I1O1xuICAgICAgICAgICAgLy8gICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICAgICAgICAgIC8vICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAvLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC8vICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIC8vICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC8vICAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcbiAgICAgICAgICAgIC8vICAgICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuMnMgYm90aCByaWdodFRvTGVmdDtcbiAgICAgICAgICAgIC8vICAgfVxuXG4gICAgICAgICAgICAvLyAucG9ydGZvbGlvLXNlbGVjdGlvbl9fZml4ZWQge1xuICAgICAgICAgICAgLy8gICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIC8vICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgICAgICAgICAgLy8gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC8vICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAvLyAgICAgICAgIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4ycyBib3RoIHJpZ2h0VG9MZWZ0O1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgICAvLyAgICAgLnBvcnRmb2xpby1jb250YWluZXIge1xuICAgICAgICAgICAgLy8gICAgICAgcGFkZGluZzogMy41cmVtIDAuNXJlbTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NHJlbSkge1xuICAgICAgICAgICAgLy8gICAgIC5wb3J0Zm9saW8taGVhZGVyIHtcbiAgICAgICAgICAgIC8vICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICB9XG4gIC5sb2dvIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjJzIGJvdGggZmFkZUluO1xuICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gLm5hdmJhciB7XG4gICAgICAgICAgLy8gICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAvLyAgIGNvbG9yOiAkb2ZmLXdoaXRlO1xuICAgICAgICAgIC8vICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIC8vICAgcGFkZGluZzogMS42cmVtO1xuICAgICAgICAgIC8vICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAvLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIC8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAvLyAgIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4ycyBib3RoIGZhZGVJbjtcbiAgICAgICAgICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gLm5hdi1pdGVtcyB7XG4gICAgICAgICAgLy8gICAubmF2LWl0ZW0ge1xuICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgLy8gICAgIHBhZGRpbmc6IDAuMnJlbSAwO1xuICAgICAgICAgIC8vICAgICBtYXJnaW46IDAuNnJlbSAxcmVtO1xuICAgICAgICAgIC8vICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAvLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIC8vICAgICBib3JkZXItYm90dG9tOiAwLjNyZW0gc29saWQgJGdyZWVuO1xuICAgICAgICAgIC8vICAgICBjb2xvcjogJG9mZi13aGl0ZTtcbiAgICAgICAgICAvLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vIH1cbiAgXG4gIC8vIC5jb250YWluZXIge1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gZmxleDogMTtcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIC8vIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIC8vIGNvbG9yOiAkb2ZmLXdoaXRlO1xuICAgIC8vIG1hcmdpbi10b3A6IDUlO1xuICAvLyB9XG4gIFxuICAvLyAuc2hvcnQtYmlvIHtcbiAgLy8gICBmb250LXNpemU6IDEuNnJlbTtcbiAgLy8gICBwYWRkaW5nOiAxLjZyZW07XG4gIC8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgLy8gICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuMnMgYm90aCBmYWRlSW47XG4gIC8vIH1cbiAgXG4gIC8vIC5xdW90ZSB7XG4gIC8vICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcbiAgLy8gICBmb250LXNpemU6IDEuOHJlbTtcbiAgLy8gICBwYWRkaW5nOiAxcmVtO1xuICAvLyAgIHBhZGRpbmctdG9wOiAwcmVtO1xuICAvLyAgIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC40cyBib3RoIGZhZGVJbjtcbiAgLy8gfVxuICBcbiAgLy8gLm5hbWUge1xuICAvLyAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XG4gIC8vICAgZm9udC1zaXplOiAyLjRyZW07XG4gIC8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8vICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgLy8gICBwYWRkaW5nLXRvcDogMC42cmVtO1xuICAvLyAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC8vICAgbGV0dGVyLXNwYWNpbmc6IDAuNHJlbTtcbiAgLy8gICB3b3JkLXNwYWNpbmc6IDAuMnJlbTtcbiAgLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8vICAgbWFyZ2luLWJvdHRvbTogLTIuNXJlbTtcbiAgLy8gICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuNnMgYm90aCBmYWRlSW47XG4gIC8vICAgJjpob3ZlciB7XG4gIC8vICAgICAuc3RyaXA6OmFmdGVyIHtcbiAgLy8gICAgICAgbGVmdDogLTFyZW07XG4gIC8vICAgICB9XG4gIC8vICAgICAuc3RyaXA6OmJlZm9yZSB7XG4gIC8vICAgICAgIGxlZnQ6IDFyZW07XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIFxuICAvLyAuc3RyaXAge1xuICAvLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vICAgd2lkdGg6IDI4cmVtO1xuICAvLyAgIG1hcmdpbjogYXV0bztcbiAgLy8gICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAvLyAgIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC44cyBib3RoIGZhZGVJbjtcbiAgLy8gICAmOjpiZWZvcmUge1xuICAvLyAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gIC8vICAgICBjb250ZW50OiAnJztcbiAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLy8gICAgIGhlaWdodDogMnB4O1xuICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgLy8gICAgIG1hcmdpbjogMnB4IDA7XG4gIC8vICAgICB3aWR0aDogMTAwJTtcbiAgLy8gICAgIG1hcmdpbjogYXV0bztcbiAgLy8gICAgIHRvcDogMDtcbiAgLy8gICAgIGxlZnQ6IC0xcmVtO1xuICAvLyAgIH1cbiAgLy8gICAmOjphZnRlciB7XG4gIC8vICAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcbiAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLy8gICAgIGNvbnRlbnQ6ICcnO1xuICAvLyAgICAgaGVpZ2h0OiAycHg7XG4gIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICAvLyAgICAgbWFyZ2luOiAycHggMDtcbiAgLy8gICAgIHdpZHRoOiAxMDAlO1xuICAvLyAgICAgbWFyZ2luOiBhdXRvO1xuICAvLyAgICAgdG9wOiA0cHg7XG4gIC8vICAgICBsZWZ0OiAxcmVtO1xuICAvLyAgIH1cbiAgLy8gfVxuICBcbiAgLy8gLmNvbnRhY3QtYnRuIHtcbiAgLy8gICBtaW4td2lkdGg6IDE1cmVtO1xuICAvLyAgIGxpbmUtaGVpZ2h0OiAyLjA7XG4gIC8vICAgZm9udC1zaXplOiAxLjByZW07XG4gIC8vICAgcGFkZGluZzogMC41cmVtO1xuICAvLyAgIG1hcmdpbi10b3A6IDJyZW07XG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcbiAgLy8gICBjb2xvcjogI2ZmZjtcbiAgLy8gICBib3JkZXI6IG5vbmU7XG4gIC8vICAgb3V0bGluZTogbm9uZTtcbiAgLy8gICBib3JkZXItcmFkaXVzOiA3MHJlbTtcbiAgLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8vICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgLy8gICBhbmltYXRpb246IGZhZGVJbiAxcyBlYXNlLWluLW91dCAxcyBib3RoO1xuICAvLyAgIGJveC1zaGFkb3c6IDFyZW0gMXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAuMzEpO1xuICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gICBzcGFuIHtcbiAgLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjdyZW0pO1xuICAvLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvLyAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC8vICAgfVxuICAvLyAgICY6aG92ZXIge1xuICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMztcbiAgLy8gICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gIC8vICAgICAmOjphZnRlciB7XG4gIC8vICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjJyZW0pO1xuICAvLyAgICAgICBvcGFjaXR5OiAxO1xuICAvLyAgICAgfVxuICAvLyAgICAgc3BhbiB7XG4gIC8vICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4ycmVtKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgJjphY3RpdmUge1xuICAvLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAvLyAgICAgYm94LXNoYWRvdzogMXJlbSAxcmVtIDFyZW0gMHJlbSByZ2JhKDAsIDAsIDAsIDAuMzEpO1xuICAvLyAgIH1cbiAgLy8gICAmOjphZnRlciB7XG4gIC8vICAgICBjb250ZW50OiAnXFwwMGJiJztcbiAgLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gICAgIG9wYWNpdHk6IDA7XG4gIC8vICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAvLyAgICAgZm9udC1zaXplOiAyLjdyZW07XG4gIC8vICAgICBsaW5lLWhlaWdodDogMDtcbiAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjJyZW0pO1xuICAvLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvLyAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gLnRhZGEtYW5pbWF0aW9uIHtcbiAgLy8gICBhbmltYXRpb246IHRhZGEgMXMgZWFzZS1pbi1vdXQgMHMgMiBub3JtYWwgYm90aDtcbiAgLy8gfVxuICBcbiAgQGtleWZyYW1lcyBsZWZ0VG9SaWdodCB7XG4gICAgMCUge1xuICAgICAgZGlzcGxheTogcmVsYXRpdmU7XG4gICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICBsZWZ0OiAtMjAlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGxlZnQ6IDAlO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gQGtleWZyYW1lcyB0YWRhIHtcbiAgLy8gICAwJSB7XG4gIC8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgLy8gICB9XG4gIC8vICAgMTAlIHtcbiAgLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICAvLyAgIH1cbiAgLy8gICAyMCUge1xuICAvLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgLy8gICB9XG4gIC8vICAgMzAlIHtcbiAgLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICAvLyAgIH1cbiAgLy8gICA0MCUge1xuICAvLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgLy8gICB9XG4gIC8vICAgNTAlIHtcbiAgLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICAvLyAgIH1cbiAgLy8gICA2MCUge1xuICAvLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgLy8gICB9XG4gIC8vICAgNzAlIHtcbiAgLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICAvLyAgIH1cbiAgLy8gICA4MCUge1xuICAvLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgLy8gICB9XG4gIC8vICAgOTAlIHtcbiAgLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICAvLyAgIH1cbiAgLy8gICAxMDAlIHtcbiAgLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICAvLyAgIH1cbiAgLy8gfVxuICBcbiAgLy8gQGtleWZyYW1lcyBzdHJpcEFuaW1hdGlvbiB7XG4gIC8vICAgMCUge1xuICAvLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KSByb3RhdGVaKDBkZWcpO1xuICAvLyAgICAgb3BhY2l0eTogMDtcbiAgLy8gICB9XG4gIC8vICAgMTAwJSB7XG4gIC8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSByb3RhdGVaKC0xNmRlZyk7XG4gIC8vICAgICBvcGFjaXR5OiAxO1xuICAvLyAgIH1cbiAgLy8gfSJdfQ== */"

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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _skillpercent_skillpercent_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./skillpercent/skillpercent.component */ "./src/app/skillpercent/skillpercent.component.ts");
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
                _tags_tags_component__WEBPACK_IMPORTED_MODULE_13__["TagsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _skillpercent_skillpercent_component__WEBPACK_IMPORTED_MODULE_16__["SkillpercentComponent"]
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

module.exports = "\n\n<div class=\"overlay\"></div>\n<div class=\"container\">\n    <div class=\"card\">\n      <div class=\"strip-block\">\n        <div class=\"profile-logo\">\n          <img src=\"assets/images/profile-pic.png\" alt=\"\">\n        </div>\n        <div class=\"strip\"></div>\n        <div class=\"short-details\">\n          <blockquote class=\"quote tagLine\">\n            \"I like to explore new skills in a way of self-learning.\"\n          </blockquote>\n        </div>\n      </div>\n  \n      <div class=\"details\">\n          <div class=\"divider\">\n            <div class=\"stick \"></div>\n            <div class=\"stick \"></div>\n          </div>\n        <p class=\"bio\">I am a software developer cum software automation engineer and an aspiring Devops Engineer.\n        <br> I'm interested to work on frameowrks on Ruby, Python and in developing tools.\n        </p>\n        </div>\n      <div class=\"divider\">\n        <div class=\"stick\"></div>\n        <div class=\"stick\"></div>\n      </div>\n      <div class=\"typewriter\"><p>Contact me through any of these means: </p></div>\n      <br>\n      <div class=\"social\">\n          <div class=\"social-icon\">\n              <a href=\"https://www.facebook.com/Shswati1\" target=\"_blank\">\n                <img src=\"assets/assert/icons/facebook.png\" alt=\"slack icon\">\n              </a>\n            </div>\n        <div class=\"social-icon\">\n          <a href=\"https://www.slack.com/\" target=\"_blank\">\n            <img src=\"assets/assert/icons/slack.png\" alt=\"slack icon\">\n          </a>\n        </div>\n        <div class=\"social-icon\">\n          <a href=\"https://www.github.com/swati001\" target=\"_blank\">\n            <img src=\"assets/assert/icons/github.png\" alt=\"github icon\">\n          </a>\n        </div>\n        <div class=\"social-icon\">\n          <a href=\"https://www.linkedin.com/in/swati-sharma-aa423b89/\" target=\"_blank\">\n            <img src=\"assets/assert/icons/linkedin.png\" alt=\"linkedin icon\">\n          </a>\n        </div>\n        <div class=\"social-icon\">\n          <a href=\"mailto:swatiinfo86@gmail.com\">\n            <img src=\"assets/assert/icons/mail.png\" alt=\"email icon\">\n          </a>\n        </div>\n      </div>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\n  height: 100%;\n  width: 100%;\n  display: block;\n  background: #d2e1dd;\n  position: fixed;\n  right: 0;\n  top: 0;\n  margin-top: 7.9%;\n  -webkit-animation: 1s ease-in-out 0.1s both leftToRight;\n          animation: 1s ease-in-out 0.1s both leftToRight; }\n\n.container {\n  width: 30rem;\n  height: 44rem;\n  align-items: center;\n  padding: 0rem 0;\n  margin: 0rem 1rem 1rem 28rem;\n  justify-content: center;\n  background-color: #d2e1dd;\n  color: #e8eeea;\n  border-radius: 1.5rem; }\n\n.container .card {\n    background-color: #085e72;\n    height: 100%;\n    max-height: 100%;\n    width: 100%;\n    text-align: center;\n    overflow-x: hidden;\n    z-index: 1;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    overflow: hidden;\n    box-shadow: 1.3rem 1.3rem 1.4rem 0rem #84a88a;\n    transition: all 0.3s ease-in-out;\n    -webkit-animation: dropin 1s ease-in-out 0s 1 normal both;\n            animation: dropin 1s ease-in-out 0s 1 normal both; }\n\n.container .profile-logo {\n    height: 14rem;\n    width: 14rem;\n    margin-top: 5.5rem;\n    display: inline-block;\n    position: relative;\n    z-index: 5; }\n\n.container .profile-logo img {\n      position: relative;\n      border: 0.4rem solid #e74c3c;\n      height: 70%;\n      width: 70%;\n      border-radius: 50%;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden;\n      transition: all 0.5s ease-in-out; }\n\n.container .strip {\n    background-color: #e74c3c;\n    height: 5rem;\n    width: 150%;\n    margin-left: -5rem;\n    margin-top: -20rem;\n    z-index: -1;\n    position: absolute;\n    -webkit-animation: stripAnimation 1s ease-in-out 1.4s 1 normal both;\n            animation: stripAnimation 1s ease-in-out 1.4s 1 normal both; }\n\n.container .strip::after {\n      content: '';\n      display: inline-block;\n      position: absolute;\n      height: 100%;\n      width: 20%;\n      background-color: #ffffff;\n      opacity: 0;\n      top: 0;\n      left: 0; }\n\n.container .strip:hover::after {\n      -webkit-animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both;\n              animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both; }\n\n.container .strip-block:hover .strip:after {\n    -webkit-animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both;\n            animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both; }\n\n.container .short-details {\n    position: relative;\n    -webkit-animation: dropin 1s ease-in-out 0.4s 1 normal both;\n            animation: dropin 1s ease-in-out 0.4s 1 normal both; }\n\n.container .short-details .tagLine {\n      display: block;\n      width: 100%;\n      font-size: 1.2rem;\n      font-weight: lighter;\n      font-style: italic;\n      padding: 0.5rem; }\n\n.container .short-details .quote {\n      font-family: 'Cormorant Garamond', serif;\n      display: inline-block;\n      font-size: 1.2rem;\n      font-weight: 100;\n      width: 65%;\n      padding: 0.5rem 1rem;\n      padding-bottom: 0.2rem;\n      line-height: 1.2; }\n\n.container .details {\n    margin-top: 1rem; }\n\n.container .details .nameBlock {\n      transition: all 0.3s ease-in-out;\n      -webkit-animation: dropin 1s ease-in-out 0.1s 1 normal both;\n              animation: dropin 1s ease-in-out 0.1s 1 normal both; }\n\n.container .details .name {\n      display: inline-block;\n      position: relative;\n      width: 60%;\n      font-size: 2rem;\n      font-weight: 400;\n      line-height: 1.6;\n      text-transform: uppercase;\n      letter-spacing: 0.2rem; }\n\n.container .details .bio {\n      display: inline-block;\n      width: 70%;\n      font-size: 1.2rem;\n      margin: 0.4rem;\n      line-height: 1.2;\n      font-weight: lighter;\n      margin-bottom: 0.8rem;\n      text-align: center;\n      word-spacing: 0.2rem;\n      -webkit-animation: dropin 1s ease-in-out 0.3s 1 normal both;\n              animation: dropin 1s ease-in-out 0.3s 1 normal both; }\n\n.container .social {\n    display: block;\n    padding: 0rem 1rem;\n    padding-top: 0;\n    margin-top: 0.6rem;\n    -webkit-animation: dropin 1s ease-in-out 1.2s 1 normal both;\n            animation: dropin 1s ease-in-out 1.2s 1 normal both; }\n\n.container .social .social-icon {\n      display: inline-block;\n      width: 2rem;\n      height: 2rem;\n      margin: 0.1rem 0.5rem;\n      background-color: #ffffff;\n      transition: all 0.3s ease-in-out; }\n\n.container .social .social-icon img {\n        height: 100%;\n        width: 100%; }\n\n.container .social .social-icon:hover {\n        -webkit-transform: scale(1.3);\n                transform: scale(1.3); }\n\n.typewriter p {\n  overflow: hidden;\n  /* Ensures the content is not revealed until the animation */\n  border-right: .10em solid red;\n  /* The typwriter cursor */\n  white-space: nowrap;\n  /* Keeps the content on a single line */\n  margin: 1 auto;\n  /* Gives that scrolling effect as the typing happens */\n  letter-spacing: .12em;\n  /* Adjust as needed */\n  font-family: calibri;\n  font-size: 1.1rem;\n  -webkit-animation: typing 4.5s steps(30, end), blink-caret 0.75s step-end infinite;\n          animation: typing 4.5s steps(30, end), blink-caret 0.75s step-end infinite; }\n\n/* The typing effect */\n\n@-webkit-keyframes typing {\n  from {\n    width: 0; }\n  to {\n    width: 100%; } }\n\n@keyframes typing {\n  from {\n    width: 0; }\n  to {\n    width: 100%; } }\n\n@-webkit-keyframes blink-caret {\n  from, to {\n    border-color: transparent; }\n  50% {\n    border-color: red; } }\n\n@keyframes blink-caret {\n  from, to {\n    border-color: transparent; }\n  50% {\n    border-color: red; } }\n\n.divider {\n  padding: 1rem;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  position: relative; }\n\n.divider .stick {\n    display: inline-block;\n    position: relative;\n    height: 0.1rem;\n    background-color: #e74c3c;\n    margin: 0.1rem 0;\n    width: 75%;\n    clear: both; }\n\n@-webkit-keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%; }\n  100% {\n    opacity: 0.7;\n    left: 120%; } }\n\n@keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%; }\n  100% {\n    opacity: 0.7;\n    left: 120%; } }\n\n@-webkit-keyframes dropin {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes dropin {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes stripAnimation {\n  0% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1; } }\n\n@keyframes stripAnimation {\n  0% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVFLGFBQVk7RUFDWixZQUFXO0VBR1gsZUFBYztFQUNkLG9CQ1JjO0VEU2QsZ0JBQWU7RUFDZixTQUFRO0VBQ1IsT0FBTTtFQUNOLGlCQUFnQjtFQUdoQix3REFBK0M7VUFBL0MsZ0RBQStDLEVBQ2hEOztBQUVEO0VBSUUsYUFBWTtFQUNaLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZiw2QkFBNEI7RUFDNUIsd0JBQXVCO0VBQ3ZCLDBCQzVCYztFRDZCZCxlQ3hCaUI7RUR5QmpCLHNCQUFxQixFQStJdEI7O0FBM0pEO0lBY0ksMEJDbkNjO0lEb0NkLGFBQVk7SUFDWixpQkFBZ0I7SUFDaEIsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLDBCQUFpQjtPQUFqQix1QkFBaUI7UUFBakIsc0JBQWlCO1lBQWpCLGtCQUFpQjtJQUNqQixpQkFBZ0I7SUFFaEIsOENBQTZDO0lBQzdDLGlDQUFnQztJQUNoQywwREFBaUQ7WUFBakQsa0RBQWlELEVBQ2xEOztBQTNCSDtJQTZCSSxjQUFhO0lBQ2IsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsbUJBQWtCO0lBQ2xCLFdBQVUsRUFjWDs7QUFoREg7TUF1Q00sbUJBQWtCO01BQ2xCLDZCQzNEVTtNRDREVixZQUFXO01BQ1gsV0FBVTtNQUNWLG1CQUFrQjtNQUNsQixvQ0FBMkI7Y0FBM0IsNEJBQTJCO01BQzNCLGlDQUFnQyxFQUVqQzs7QUEvQ0w7SUFrREksMEJDckVZO0lEc0VaLGFBQVk7SUFDWixZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLG1CQUFrQjtJQUVsQixZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLG9FQUEyRDtZQUEzRCw0REFBMkQsRUFlNUQ7O0FBekVIO01BNERNLFlBQVc7TUFDWCxzQkFBcUI7TUFDckIsbUJBQWtCO01BQ2xCLGFBQVk7TUFDWixXQUFVO01BQ1YsMEJBQXlCO01BQ3pCLFdBQVU7TUFDVixPQUFNO01BQ04sUUFBTyxFQUNSOztBQXJFTDtNQXVFTSxtRUFBMEQ7Y0FBMUQsMkRBQTBELEVBQzNEOztBQXhFTDtJQTRFTSxtRUFBMEQ7WUFBMUQsMkRBQTBELEVBQzNEOztBQTdFTDtJQWdGSSxtQkFBa0I7SUFDbEIsNERBQW1EO1lBQW5ELG9EQUFtRCxFQW1CcEQ7O0FBcEdIO01BbUZNLGVBQWM7TUFDZCxZQUFXO01BQ1gsa0JBQWlCO01BQ2pCLHFCQUFvQjtNQUNwQixtQkFBa0I7TUFDbEIsZ0JBQWUsRUFDaEI7O0FBekZMO01BMkZNLHlDQUF3QztNQUN4QyxzQkFBcUI7TUFDckIsa0JBQWlCO01BQ2pCLGlCQUFnQjtNQUNoQixXQUFVO01BQ1YscUJBQW9CO01BQ3BCLHVCQUFzQjtNQUN0QixpQkFBZ0IsRUFDakI7O0FBbkdMO0lBc0dJLGlCQUFnQixFQThCakI7O0FBcElIO01Bd0dNLGlDQUFnQztNQUNoQyw0REFBbUQ7Y0FBbkQsb0RBQW1ELEVBQ3BEOztBQTFHTDtNQTRHTSxzQkFBcUI7TUFDckIsbUJBQWtCO01BQ2xCLFdBQVU7TUFDVixnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixpQkFBZ0I7TUFDaEIsMEJBQXlCO01BQ3pCLHVCQUFzQixFQUN2Qjs7QUFwSEw7TUFzSE0sc0JBQXFCO01BQ3JCLFdBQVU7TUFDVixrQkFBaUI7TUFDakIsZUFBYztNQUNkLGlCQUFnQjtNQUNoQixxQkFBb0I7TUFDcEIsc0JBQXFCO01BQ3JCLG1CQUFrQjtNQUNsQixxQkFBb0I7TUFDcEIsNERBQW1EO2NBQW5ELG9EQUFtRCxFQUNwRDs7QUFoSUw7SUFzSUksZUFBYztJQUNkLG1CQUFrQjtJQUNsQixlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLDREQUFtRDtZQUFuRCxvREFBbUQsRUFnQnBEOztBQTFKSDtNQTRJTSxzQkFBcUI7TUFDckIsWUFBVztNQUNYLGFBQVk7TUFDWixzQkFBcUI7TUFDckIsMEJBQXlCO01BQ3pCLGlDQUFnQyxFQVFqQzs7QUF6Skw7UUFtSlEsYUFBWTtRQUNaLFlBQVcsRUFDWjs7QUFySlA7UUF1SlEsOEJBQXFCO2dCQUFyQixzQkFBcUIsRUFDdEI7O0FBSVA7RUFDSSxpQkFBZ0I7RUFBRSw2REFBNkQ7RUFDL0UsOEJBQTZCO0VBQUUsMEJBQTBCO0VBQ3pELG9CQUFtQjtFQUFFLHdDQUF3QztFQUM3RCxlQUFjO0VBQUUsdURBQXVEO0VBQ3ZFLHNCQUFxQjtFQUFFLHNCQUFzQjtFQUM3QyxxQkFBb0I7RUFDcEIsa0JBQWlCO0VBRWpCLG1GQUVvQztVQUZwQywyRUFFb0MsRUFDckM7O0FBRUQsdUJBQXVCOztBQUN2QjtFQUNFO0lBQU8sU0FBUyxFQUFBO0VBQ2hCO0lBQUssWUFBWSxFQUFBLEVBQUE7O0FBRm5CO0VBQ0U7SUFBTyxTQUFTLEVBQUE7RUFDaEI7SUFBSyxZQUFZLEVBQUEsRUFBQTs7QUFFbkI7RUFDRTtJQUFXLDBCQUEwQixFQUFBO0VBQ3JDO0lBQU0sa0JBQWlCLEVBQUEsRUFBQTs7QUFGekI7RUFDRTtJQUFXLDBCQUEwQixFQUFBO0VBQ3JDO0lBQU0sa0JBQWlCLEVBQUEsRUFBQTs7QUFHM0I7RUFDRSxjQUFhO0VBQ2IsY0FBYTtFQUNiLGtCQUFpQjtFQUNqQixvQkFBbUI7RUFDbkIsbUJBQWtCLEVBVW5COztBQWZEO0lBT0ksc0JBQXFCO0lBQ3JCLG1CQUFrQjtJQUNsQixlQUFjO0lBQ2QsMEJDak5ZO0lEa05aLGlCQUFnQjtJQUNoQixXQUFVO0lBQ1YsWUFBVyxFQUNaOztBQUdIO0VBQ0U7SUFDRSxhQUFZO0lBQ1osV0FBVSxFQUFBO0VBRVo7SUFDRSxhQUFZO0lBQ1osV0FBVSxFQUFBLEVBQUE7O0FBUGQ7RUFDRTtJQUNFLGFBQVk7SUFDWixXQUFVLEVBQUE7RUFFWjtJQUNFLGFBQVk7SUFDWixXQUFVLEVBQUEsRUFBQTs7QUFJZDtFQUNFO0lBQ0UsV0FBVTtJQUNWLDRCQUFtQjtZQUFuQixvQkFBbUIsRUFBQTtFQUVyQjtJQUNFLFdBQVU7SUFDViw0QkFBbUI7WUFBbkIsb0JBQW1CLEVBQUEsRUFBQTs7QUFQdkI7RUFDRTtJQUNFLFdBQVU7SUFDViw0QkFBbUI7WUFBbkIsb0JBQW1CLEVBQUE7RUFFckI7SUFDRSxXQUFVO0lBQ1YsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUFBLEVBQUE7O0FBSXZCO0VBQ0U7SUFDRSxxQ0FBNEI7WUFBNUIsNkJBQTRCO0lBQzVCLFdBQVUsRUFBQTtFQUVaO0lBQ0UsbUNBQTBCO1lBQTFCLDJCQUEwQjtJQUMxQixXQUFVLEVBQUEsRUFBQTs7QUFQZDtFQUNFO0lBQ0UscUNBQTRCO1lBQTVCLDZCQUE0QjtJQUM1QixXQUFVLEVBQUE7RUFFWjtJQUNFLG1DQUEwQjtZQUExQiwyQkFBMEI7SUFDMUIsV0FBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9nbG9iYWwuc2Nzcyc7XG4kdGV4dC1jYXJkLXNoaWZ0OjQ1JTtcbiRyb3ctY29sb3VtLWJyay1wb2ludDogJ21heC13aWR0aDogMTA0MHB4JztcblxuLm92ZXJsYXkge1xuICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gIC8vIHotaW5kZXg6IC0xO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogJGNvbG9yMjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBtYXJnaW4tdG9wOiA3LjklO1xuICAvLyBjbGlwLXBhdGg6IGNpcmNsZSg2MCUgNDAlKTtcbiAgLy8gdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoMnZ3LCAydmgpIHJvdGF0ZSgxODBkZWcpO1xuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuMXMgYm90aCBsZWZ0VG9SaWdodDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIC8vIGRpc3BsYXk6IGNlbnRlcjtcbiAgLy8gcG9zaXRpb246IGZsZXg7XG4gIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzMHJlbTtcbiAgaGVpZ2h0OiA0NHJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMHJlbSAwO1xuICBtYXJnaW46IDByZW0gMXJlbSAxcmVtIDI4cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMjtcbiAgY29sb3I6ICRvZmYtd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgYm94LXNoYWRvdzogMS4zcmVtIDEuM3JlbSAxLjRyZW0gMHJlbSAjODRhODhhO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDBzIDEgbm9ybWFsIGJvdGg7XG4gIH1cbiAgLnByb2ZpbGUtbG9nbyB7XG4gICAgaGVpZ2h0OiAxNHJlbTtcbiAgICB3aWR0aDogMTRyZW07XG4gICAgbWFyZ2luLXRvcDogNS41cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogNTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLy8gcGVyc3BlY3RpdmU6IDE1MDBweDtcbiAgICAvLyBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAwLjRzIDEgbm9ybWFsIGJvdGg7XG4gICAgaW1nIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlcjogMC40cmVtIHNvbGlkICRjb2xvcjE7XG4gICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAvLyAgIHBlcnNwZWN0aXZlOiAxNTAwcHg7XG4gICAgfVxuICB9XG4gIC5zdHJpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgd2lkdGg6IDE1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC01cmVtO1xuICAgIG1hcmdpbi10b3A6IC0yMHJlbTtcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVooLTE2ZGVnKTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYW5pbWF0aW9uOiBzdHJpcEFuaW1hdGlvbiAxcyBlYXNlLWluLW91dCAxLjRzIDEgbm9ybWFsIGJvdGg7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMjAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAmOmhvdmVyOjphZnRlciB7XG4gICAgICBhbmltYXRpb246IGZhZGVMZWZ0VG9SaWdodCAxcyBlYXNlLWluLW91dCAwcyAxIG5vcm1hbCBib3RoO1xuICAgIH1cbiAgfVxuICAuc3RyaXAtYmxvY2s6aG92ZXIge1xuICAgIC5zdHJpcDphZnRlciB7XG4gICAgICBhbmltYXRpb246IGZhZGVMZWZ0VG9SaWdodCAxcyBlYXNlLWluLW91dCAwcyAxIG5vcm1hbCBib3RoO1xuICAgIH1cbiAgfVxuICAuc2hvcnQtZGV0YWlscyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuNHMgMSBub3JtYWwgYm90aDtcbiAgICAudGFnTGluZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB9XG4gICAgLnF1b3RlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICB3aWR0aDogNjUlO1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB9XG4gIH1cbiAgLmRldGFpbHMge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgLm5hbWVCbG9jayB7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuMXMgMSBub3JtYWwgYm90aDtcbiAgICB9XG4gICAgLm5hbWUge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG4gICAgfVxuICAgIC5iaW8ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgbWFyZ2luOiAwLjRyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3b3JkLXNwYWNpbmc6IDAuMnJlbTtcbiAgICAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuM3MgMSBub3JtYWwgYm90aDtcbiAgICB9XG4gICAgLy8gLmJpbzpob3ZlciB7XG4gICAgLy8gICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IDAuMnMgZWFzZS1pbi1vdXQgMHMgMSBub3JtYWwgYm90aDtcbiAgICAvLyAgICAgfVxuICB9XG4gIC5zb2NpYWwge1xuICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBwYWRkaW5nOiAxcmVtIDA7XG4gICAgcGFkZGluZzogMHJlbSAxcmVtO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIG1hcmdpbi10b3A6IDAuNnJlbTtcbiAgICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAxLjJzIDEgbm9ybWFsIGJvdGg7XG4gICAgLnNvY2lhbC1pY29uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgbWFyZ2luOiAwLjFyZW0gMC41cmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4udHlwZXdyaXRlciBwIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBFbnN1cmVzIHRoZSBjb250ZW50IGlzIG5vdCByZXZlYWxlZCB1bnRpbCB0aGUgYW5pbWF0aW9uICovXG4gICAgYm9yZGVyLXJpZ2h0OiAuMTBlbSBzb2xpZCByZWQ7IC8qIFRoZSB0eXB3cml0ZXIgY3Vyc29yICovXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogS2VlcHMgdGhlIGNvbnRlbnQgb24gYSBzaW5nbGUgbGluZSAqL1xuICAgIG1hcmdpbjogMSBhdXRvOyAvKiBHaXZlcyB0aGF0IHNjcm9sbGluZyBlZmZlY3QgYXMgdGhlIHR5cGluZyBoYXBwZW5zICovXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xMmVtOyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXG4gICAgZm9udC1mYW1pbHk6IGNhbGlicmk7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYW5pbWF0aW9uOiBcbiAgICAgIHR5cGluZyA0LjVzIHN0ZXBzKDMwLCBlbmQpLFxuICAgICAgYmxpbmstY2FyZXQgLjc1cyBzdGVwLWVuZCBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLyogVGhlIHR5cGluZyBlZmZlY3QgKi9cbiAgQGtleWZyYW1lcyB0eXBpbmcge1xuICAgIGZyb20geyB3aWR0aDogMCB9XG4gICAgdG8geyB3aWR0aDogMTAwJSB9XG4gIH1cbiAgQGtleWZyYW1lcyBibGluay1jYXJldCB7XG4gICAgZnJvbSwgdG8geyBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IH1cbiAgICA1MCUgeyBib3JkZXItY29sb3I6IHJlZDsgfVxuICB9XG5cbi5kaXZpZGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLnN0aWNrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMC4xcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XG4gICAgbWFyZ2luOiAwLjFyZW0gMDtcbiAgICB3aWR0aDogNzUlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUxlZnRUb1JpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgICBsZWZ0OiAtMTAlO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBsZWZ0OiAxMjAlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZHJvcGluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzdHJpcEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsIiRiZy1jb2xvcjogIzA4NWU3Mjtcbi8vICMxN2E1OTg7XG4kY29sb3IxOiAjZTc0YzNjO1xuJGNvbG9yMjogI2QyZTFkZDtcbiRjb2xvcjM6ICNkYjM4MWI7XG4kZ3JlZW46ICMxN2E1OTg7XG4vLyAkdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiRibGFjazogIzU1NTtcbiRvZmYtd2hpdGU6ICNlOGVlZWE7XG4kdGV4dC1jb2xvcjogcmdiKDczLCAzOSwgMzkpO1xuLy8gIzY5OTtcbiR3aGl0ZTogI2ZmZjtcbiRjb2xvcjQ6IHJnYigyNDcsIDE2OCwgMTY4KTtcbiRjb2xvcjU6ICM1NGE0YWY7Il19 */"

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
        ' Build new UI pages in JSP',
        ' Javascript validations of pages',
        ' Stateful session implemetation and Authentication & Authorization for user login',
        ' Implementation of multiple Java design patterns like Singleton, Factory and DAO'
    ],
    tags: ['Java'],
    techStuff: [
        ' Java',
        ' Struts, JSP, Javascript',
        ' EJB',
        ' Oracle'
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
        ' Monitoring the servers and maintaining the servers health',
        ' Deployment of applications on servers and maintains the deployment status if required',
        ' Testing the applications using data or timestamps and searching logs in Unix',
        ' Automating the process of monitoring servers using unix scripts and cron jobs and triggers an email if any issue',
        ' Build a UI dashboard for server health status and status of deploymnet of applications, which helps in represeting',
    ],
    tags: ['Java'],
    techStuff: [
        ' Unix, Shell scripting',
        ' Java/J2EE',
        ' JSP, Javascript, Cron',
        ' Oracle'
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
    description: 'A retail web application for handling supply to stores and warehouses, orders and forecasting the demands. Retails Web Application for store or warehouse requests,  does orders management, supply management and pricing management',
    client: 'ICA',
    duration: '02/23/2012 - 04/15/2014',
    imageLink: '../../assets/images/ica.png',
    features: [
        ' Developmnet of new features and defect fixing on existing features in production or test',
        ' Handling messaging services and SOAP web services',
    ],
    tags: ['Java'],
    techStuff: [
        ' Java/J2EE, Java design patterns',
        ' Struts, Javascript, Hibernate, JMS, Web Services, GWT',
        ' Oracle'
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
        ' Built a framework using Cucumber for automation test to remove legacy testing.',
        ' Implementation to support multiple mobile platforms.',
        ' Parallel execution of test scenarios on web browsers and mobile browsers on real devies for iOS and Android',
        ' Implemnetation of crawler script which vistes each and every link of website and stores the status in excel sheet for each link visited.'
    ],
    tags: ['Java'],
    techStuff: [
        ' Java design patterns',
        ' Cucumber, Gherkin, Selenium, Appium, Saucelabs, Android, iOS',
        ' Oracle, SQL'
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
        ' Implementations of JSF pages and binding with database folowing MVC pattern using Oracle ADF',
        ' Login and authentication functionality for users as Students, organizations and libraries',
        ' Developmnet of new web pages and unit testing of pages and features',
        ' Validations of fields on JSF pages',
    ],
    tags: ['Java'],
    techStuff: [
        ' Java/J2EE',
        ' JSF, Javascript, Oracle ADF, CSS, WebLogic server',
        ' Oracle 10g'
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
    description: 'A retail web application introduced as Xfinity Mobile which sells mobile plans and phones. Xfinity customers can purchase phone and plans and can also make payments and see their billing histories and services',
    client: 'Comcast',
    duration: '02/01/2015 - 11/20/2016',
    imageLink: '../../assets/images/xmobile.png',
    features: [
        ' Created the automation frameowrk in Java and also in Ruby and Selenium',
        ' Wrote the automated tests to cover end to end functionality',
        ' Automated the process of parallel execution on Saucelabas and implemented CI/CD pipeline'
    ],
    tags: ['Ruby'],
    techStuff: [
        ' Ruby',
        ' Cucumber, Gherkin, Selenium, Capybara, Saucelabs, Jenkins',
        ' APIs'
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
    description: 'An entertainment mobile TV app for watching channels, movies, tv video contents on phone/tablets. Customers can subscribe to any channels, watch list of different categories of videos, on demand or recorded episodes',
    client: 'Comcast',
    duration: '02/01/2015 - 11/20/2016',
    imageLink: '../../assets/images/xfinitytv.png',
    features: [
        ' Implemented automation scripts to tests the feature for playing movies or tv shows on mobile',
        ' Automated the app on mobile platform, using Ruby and calabash',
        ' Wrote a performance script in Ruby to measure download speed of viedo contents of different type and length',
        ' Automated the Rest apis in Ruby'
    ],
    tags: ['Ruby'],
    techStuff: [
        ' Ruby',
        ' Cucumber, Gherkin, Selenium, Calabash, Jenkins, Android, iOS',
        ' Rest API'
    ],
    additionalData: []
};


/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"portfolio-footer\">\n<p>\n  footer works!\n</p>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio-footer {\n  position: fixed;\n  margin-top: 6rem;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #54a4af;\n  color: white;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvZ2xvYmFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixRQUFPO0VBQ1AsVUFBUztFQUNULFlBQVc7RUFDWCwwQkNJWTtFREhaLGFBQVk7RUFDWixtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vZ2xvYmFsLnNjc3MnO1xuXG5cbi5wb3J0Zm9saW8tZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbWFyZ2luLXRvcDogNnJlbTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuIiwiJGJnLWNvbG9yOiAjMDg1ZTcyO1xuLy8gIzE3YTU5ODtcbiRjb2xvcjE6ICNlNzRjM2M7XG4kY29sb3IyOiAjZDJlMWRkO1xuJGNvbG9yMzogI2RiMzgxYjtcbiRncmVlbjogIzE3YTU5ODtcbi8vICR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrOiAjNTU1O1xuJG9mZi13aGl0ZTogI2U4ZWVlYTtcbiR0ZXh0LWNvbG9yOiByZ2IoNzMsIDM5LCAzOSk7XG4vLyAjNjk5O1xuJHdoaXRlOiAjZmZmO1xuJGNvbG9yNDogcmdiKDI0NywgMTY4LCAxNjgpO1xuJGNvbG9yNTogIzU0YTRhZjsiXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"portfolio-header\">\n    <div class=\"portfolio-selection__fixed\" >\n        <div class=\"navbar\">\n            <div class=\"side-nav-items\">\n                <h3 class=\"nav-item\">Swati Sharma</h3>\n            </div>\n            <div class=\"center-nav-items\">\n                <a [routerLink]=\"['/landing']\" class=\"nav-item\">Home</a>\n                <a [routerLink]=\"['/profiles']\" class=\"nav-item\" >About & Skills</a>\n                <a [routerLink]=\"['/projects']\" class=\"nav-item\">Projects</a>\n            </div>\n            <div class=\"right-nav-items\">\n                    <a class=\"social-icon\" href=\"https://github.com/swati001/swati001.github.io\" target=\"_blank\">\n                        <img src=\"assets/assert/icons/header-github.png\" alt=\"github icon\">\n                    </a>\n                    <a class=\"social-icon\" href=\"https://www.linkedin.com/in/swati-sharma-aa423b89/\" target=\"_blank\">\n                        <img src=\"assets/assert/icons/header-linkedin.png\" alt=\"linked icon\">\n                    </a>\n                    <a class=\"social-icon\" href=\"https://www.facebook.com/in/swati001/\" target=\"_blank\">\n                        <img src=\"assets/assert/icons/header-facebook.png\" alt=\"facebook icon\">\n                    </a>\n                    <!-- <a class=\"social-icon\" href=\"https://www.facebook.com/in/swati001/\" target=\"_blank\">\n                        <img src=\"assets/assert/icons/header-cv.png\" alt=\"facebook icon\">\n                    </a> -->\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio-header {\n  width: 100%;\n  height: 7.1rem;\n  display: flex;\n  background-color: darkcyan;\n  margin: 0rem 0rem 5rem 0rem;\n  -webkit-animation: 1s ease-in-out 0.2s both rightToLeft;\n          animation: 1s ease-in-out 0.2s both rightToLeft; }\n\n.portfolio-selection__fixed {\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  color: #492727;\n  width: 100%;\n  transition: all 0.3s ease-in-out;\n  -webkit-animation: 1s ease-in-out 0.2s both rightToLeft;\n          animation: 1s ease-in-out 0.2s both rightToLeft; }\n\n.navbar {\n  width: 100%;\n  color: #e8eeea;\n  font-size: 1.5rem;\n  padding: 0.50rem;\n  display: flex;\n  align-items: right;\n  background-color: #17a598; }\n\n.navbar .side-nav-items {\n    display: inline;\n    padding: 0.2rem 0;\n    margin: 0.6rem 1rem;\n    margin-right: 0.321em; }\n\n.navbar .side-nav-items .nav-item {\n      display: inline-block;\n      padding: 0.2rem 0;\n      margin: 0.6rem 1rem;\n      color: #492727;\n      font-family: Brush Script MT, Brush Script Std, cursive;\n      font-size: 2rem; }\n\n.navbar .center-nav-items {\n    display: flex;\n    padding: 0.2rem 0;\n    margin: 0.6rem 17rem;\n    margin-right: 0.321em;\n    color: #492727; }\n\n.navbar .center-nav-items .nav-item {\n      display: inline-block;\n      padding: 0.2rem 0;\n      margin: 0.6rem 0.75rem;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      cursor: pointer;\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n      color: #492727;\n      text-decoration: none; }\n\n.navbar .center-nav-items .nav-item:hover {\n        color: #e8eeea; }\n\n.navbar .right-nav-items {\n    display: flex;\n    padding: 0.2rem 0;\n    margin: 0.6rem 27rem;\n    margin-right: 0.321em;\n    color: #492727; }\n\n.navbar .right-nav-items .social-icon {\n      display: inline-block;\n      width: 1.4rem;\n      height: 1.4rem;\n      margin: 0.1rem 0.2rem;\n      background-color: black;\n      transition: all 0.3s ease-in-out; }\n\n.navbar .right-nav-items .social-icon img {\n        height: 100%;\n        width: 100%; }\n\n.navbar .right-nav-items .social-icon:hover {\n        -webkit-transform: scale(1.3);\n                transform: scale(1.3); }\n\n.navbar1 {\n  width: 100%;\n  color: #e8eeea;\n  font-size: 1.5rem;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  background-color: #085e72; }\n\n.navbar1 .nav-items .nav-item {\n    display: inline-block;\n    padding: 0.2rem 0;\n    margin: 0.6rem 1rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer;\n    border-bottom: 0.3rem solid red;\n    color: #e8eeea;\n    text-decoration: none; }\n\n.navbar1 .nav-items .nav-item:hover {\n      border-bottom-color: #e8eeea;\n      font-style: oblique; }\n\n@media (max-width: 900px) {\n  .portfolio-container {\n    padding: 3.5rem 0.5rem; } }\n\n@media (max-width: 74rem) {\n  .portfolio-header {\n    flex-direction: column; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvZ2xvYmFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxZQUFXO0VBQ1gsZUFBYztFQUNaLGNBQWE7RUFDYiwyQkFBMEI7RUFHMUIsNEJBQTJCO0VBSzNCLHdEQUErQztVQUEvQyxnREFBK0MsRUFDaEQ7O0FBRUY7RUFDTyxnQkFBZTtFQUNmLE9BQU07RUFDTixXQUFVO0VBQ1YsZUNib0I7RURjcEIsWUFBVztFQUNYLGlDQUFnQztFQUNoQyx3REFBK0M7VUFBL0MsZ0RBQStDLEVBQ3REOztBQUdEO0VBQ0ksWUFBVztFQUNYLGVDdkJlO0VEd0JmLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQiwwQkMvQlcsRUQ4Rlo7O0FBdEVIO0lBV00sZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsb0JBQW1CO0lBQ25CLHNCQUFxQixFQVV0Qjs7QUF4Qkw7TUFpQlEsc0JBQXFCO01BQ3JCLGtCQUFpQjtNQUNqQixvQkFBbUI7TUFDbkIsZUN4Q29CO01EeUNwQix3REFBdUQ7TUFDdkQsZ0JBQWUsRUFDaEI7O0FBdkJQO0lBMEJNLGNBQWE7SUFDYixrQkFBaUI7SUFDakIscUJBQW9CO0lBQ3BCLHNCQUFxQjtJQUNyQixlQ2xEc0IsRURrRXZCOztBQTlDTDtNQWdDUSxzQkFBcUI7TUFDckIsa0JBQWlCO01BQ2pCLHVCQUFzQjtNQUN0QiwwQkFBaUI7U0FBakIsdUJBQWlCO1VBQWpCLHNCQUFpQjtjQUFqQixrQkFBaUI7TUFDakIsZ0JBQWU7TUFDZix1RUFBc0U7TUFFdEUsZUMzRG9CO01ENERwQixzQkFBcUIsRUFLdEI7O0FBN0NQO1FBMENVLGVDL0RTLEVEaUVWOztBQTVDVDtJQWlETSxjQUFhO0lBQ2Isa0JBQWlCO0lBQ2pCLHFCQUFvQjtJQUNwQixzQkFBcUI7SUFDckIsZUN6RXNCLEVEeUZ2Qjs7QUFyRUw7TUF1RFEsc0JBQXFCO01BQ25CLGNBQWE7TUFDYixlQUFjO01BQ2Qsc0JBQXFCO01BQ3JCLHdCQUF1QjtNQUN2QixpQ0FBZ0MsRUFRbkM7O0FBcEVQO1FBOERZLGFBQVk7UUFDWixZQUFXLEVBQ1o7O0FBaEVYO1FBa0VZLDhCQUFxQjtnQkFBckIsc0JBQXFCLEVBQ3RCOztBQUtUO0VBQ0UsWUFBVztFQUNYLGVDL0ZlO0VEZ0dmLGtCQUFpQjtFQUNqQixjQUFhO0VBQ2IsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiwwQkM1R2MsRUQ4SGpCOztBQXpCQztJQVdJLHNCQUFxQjtJQUNyQixrQkFBaUI7SUFDakIsb0JBQW1CO0lBQ25CLDBCQUFpQjtPQUFqQix1QkFBaUI7UUFBakIsc0JBQWlCO1lBQWpCLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLGdDQUErQjtJQUMvQixlQzlHYTtJRCtHYixzQkFBcUIsRUFLdEI7O0FBdkJIO01Bb0JNLDZCQ2pIVztNRGtIWCxvQkFBbUIsRUFDcEI7O0FBS1A7RUFDRTtJQUNFLHVCQUFzQixFQUN2QixFQUFBOztBQUdIO0VBQ0U7SUFDRSx1QkFBc0IsRUFDdkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9nbG9iYWwuc2Nzcyc7XG5cblxuLnBvcnRmb2xpby1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3LjFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgLy8gaGVpZ2h0OiAycmVtO1xuICAgIG1hcmdpbjogMHJlbSAwcmVtIDVyZW0gMHJlbTtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIC8vIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC8vIHBhZGRpbmctYm90dG9tOiA1cmVtO1xuICAgIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4ycyBib3RoIHJpZ2h0VG9MZWZ0O1xuICB9XG5cbiAucG9ydGZvbGlvLXNlbGVjdGlvbl9fZml4ZWQge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4ycyBib3RoIHJpZ2h0VG9MZWZ0O1xufVxuICBcbiAgXG4ubmF2YmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogJG9mZi13aGl0ZTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjUwcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IHJpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcbiAgICBcblxuICAgIC5zaWRlLW5hdi1pdGVtcyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBwYWRkaW5nOiAwLjJyZW0gMDtcbiAgICAgIG1hcmdpbjogMC42cmVtIDFyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuMzIxZW07XG4gICAgICBcbiAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMC4ycmVtIDA7XG4gICAgICAgIG1hcmdpbjogMC42cmVtIDFyZW07XG4gICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IEJydXNoIFNjcmlwdCBNVCwgQnJ1c2ggU2NyaXB0IFN0ZCwgY3Vyc2l2ZTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgfVxuICAgIH1cbiAgICAuY2VudGVyLW5hdi1pdGVtcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogMC4ycmVtIDA7XG4gICAgICBtYXJnaW46IDAuNnJlbSAxN3JlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogMC4zMjFlbTtcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMC4ycmVtIDA7XG4gICAgICAgIG1hcmdpbjogMC42cmVtIDAuNzVyZW07XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IDAuM3JlbSBzb2xpZCByZWQ7XG4gICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJG9mZi13aGl0ZTtcbiAgICAgICAgICAvLyBmb250LXN0eWxlOiBvYmxpcXVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJpZ2h0LW5hdi1pdGVtcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogMC4ycmVtIDA7XG4gICAgICBtYXJnaW46IDAuNnJlbSAyN3JlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogMC4zMjFlbTtcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICAgIC5zb2NpYWwtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogMS40cmVtO1xuICAgICAgICAgIGhlaWdodDogMS40cmVtO1xuICAgICAgICAgIG1hcmdpbjogMC4xcmVtIDAuMnJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAubmF2YmFyMSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICRvZmYtd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuXG4gIC5uYXYtaXRlbXMge1xuICAgIC5uYXYtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAwLjJyZW0gMDtcbiAgICAgIG1hcmdpbjogMC42cmVtIDFyZW07XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDAuM3JlbSBzb2xpZCByZWQ7XG4gICAgICBjb2xvcjogJG9mZi13aGl0ZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkb2ZmLXdoaXRlO1xuICAgICAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuICBcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMy41cmVtIDAuNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzRyZW0pIHtcbiAgLnBvcnRmb2xpby1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbiIsIiRiZy1jb2xvcjogIzA4NWU3Mjtcbi8vICMxN2E1OTg7XG4kY29sb3IxOiAjZTc0YzNjO1xuJGNvbG9yMjogI2QyZTFkZDtcbiRjb2xvcjM6ICNkYjM4MWI7XG4kZ3JlZW46ICMxN2E1OTg7XG4vLyAkdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiRibGFjazogIzU1NTtcbiRvZmYtd2hpdGU6ICNlOGVlZWE7XG4kdGV4dC1jb2xvcjogcmdiKDczLCAzOSwgMzkpO1xuLy8gIzY5OTtcbiR3aGl0ZTogI2ZmZjtcbiRjb2xvcjQ6IHJnYigyNDcsIDE2OCwgMTY4KTtcbiRjb2xvcjU6ICM1NGE0YWY7Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.setFixedPostion = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onScroll = function () {
        var portfolioHeader = this.portfolioHeaderRef.nativeElement;
        var thresoldHeight = portfolioHeader.scrollHeight + portfolioHeader.offsetTop;
        if (window.scrollY > thresoldHeight) {
            portfolioHeader.style.position.fixed;
        }
        else {
            portfolioHeader.style.position.fixed;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('portfolioHeader'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderComponent.prototype, "portfolioHeaderRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onScroll", null);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"overlay\"></div>\n<div class=\"root-container\">\n  <br><br>\n  <div class=\"container\">\n      <app-profile-pic class=\"profile-image\"></app-profile-pic>\n      <h4 class=\"short-bio\">Software/Web Developer | Mobile/Web Application Automation Tester | Devops Engineer </h4>\n      <q class=\"quote\">Hi! I am Swati Sharma,\n      I love programming and have passion to learn new technologies. </q>\n      <q class=\"quote\">I like to explore new skills in a way of self-learning.</q>\n      <div class=\"strip\"></div>\n      <br><br><br>\n      <span (click)=\"onContactClick()\" (mouseover)=\"startLink1Animation = false\" [ngClass]=\"{'link-animation':startLink1Animation}\">\n        <button class=\"special-btn\">\n        <span>\n          Contact Me\n        </span>\n        </button>\n      </span>\n  </div>\n</div>  "

/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root-container {\n  display: flex;\n  flex-direction: column;\n  height: 50vh;\n  width: 100vw; }\n\n.overlay {\n  height: 90vh;\n  width: 90vw;\n  overflow: hidden;\n  z-index: -1;\n  display: block;\n  background: #d2e1dd;\n  position: fixed;\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(2) translate(27vw, -18vh) rotate(334deg);\n          transform: scale(2) translate(27vw, -18vh) rotate(334deg);\n  -webkit-animation: 1s ease-in-out 0.1s both leftToRight;\n          animation: 1s ease-in-out 0.1s both leftToRight; }\n\n.profile-image {\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn; }\n\n.container {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: 1.2rem;\n  color: #e8eeea;\n  margin-top: 1%; }\n\n.short-bio {\n  font-size: 1.2rem;\n  padding: 1rem;\n  color: #492727;\n  font-weight: normal;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn; }\n\n.quote {\n  font-family: 'Cormorant Garamond', serif;\n  font-size: 1.2rem;\n  padding: 1rem;\n  padding-top: 0rem;\n  color: #492727;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn; }\n\n.name {\n  font-family: 'Cormorant Garamond', serif;\n  font-size: 2.4rem;\n  font-weight: bold;\n  line-height: 1.6;\n  padding-top: 0.6rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4rem;\n  word-spacing: 0.2rem;\n  text-align: center;\n  margin-bottom: -2.5rem;\n  -webkit-animation: 1s ease-in-out 0.6s both fadeIn;\n          animation: 1s ease-in-out 0.6s both fadeIn; }\n\n.name:hover .strip::after {\n    left: -1rem; }\n\n.name:hover .strip::before {\n    left: 1rem; }\n\n.strip {\n  display: inline-block;\n  position: relative;\n  width: 28rem;\n  margin: auto;\n  margin-bottom: 1rem;\n  -webkit-animation: 1s ease-in-out 0.8s both fadeIn;\n          animation: 1s ease-in-out 0.8s both fadeIn; }\n\n.strip::before {\n    transition: 0.3s all ease-in-out;\n    content: '';\n    position: absolute;\n    display: inline-block;\n    height: 2px;\n    background-color: #e74c3c;\n    margin: 2px 0;\n    width: 100%;\n    margin: auto;\n    top: 0;\n    left: -1rem; }\n\n.strip::after {\n    transition: 0.3s all ease-in-out;\n    position: absolute;\n    display: inline-block;\n    content: '';\n    height: 2px;\n    background-color: #e74c3c;\n    margin: 2px 0;\n    width: 100%;\n    margin: auto;\n    top: 4px;\n    left: 1rem; }\n\n.special-btn {\n  min-width: 8rem;\n  line-height: 1.1;\n  font-size: 1.1rem;\n  padding: 0.5rem;\n  margin-top: 2rem;\n  background-color: #e74c3c;\n  color: #fff;\n  border: none;\n  outline: none;\n  border-radius: 100rem;\n  cursor: pointer;\n  transition: all .3s ease-in-out;\n  -webkit-animation: fadeIn 1s ease-in-out 1s both;\n          animation: fadeIn 1s ease-in-out 1s both;\n  box-shadow: 7px 5px 8px 0 rgba(0, 0, 0, 0.31);\n  position: relative; }\n\n.special-btn span {\n    position: relative;\n    -webkit-transform: translateX(0.7rem);\n            transform: translateX(0.7rem);\n    display: inline-block;\n    transition: all 0.3s ease-in-out; }\n\n.special-btn:hover {\n    background-color: #db381b;\n    -webkit-animation-play-state: paused;\n            animation-play-state: paused; }\n\n.special-btn:hover::after {\n      -webkit-transform: translateX(0.2rem);\n              transform: translateX(0.2rem);\n      opacity: 5; }\n\n.special-btn:hover span {\n      -webkit-transform: translateX(-0.2rem);\n              transform: translateX(-0.2rem); }\n\n.special-btn::after {\n    content: '\\2192';\n    position: relative;\n    opacity: 0;\n    vertical-align: sub;\n    font-size: 1.5rem;\n    line-height: 0;\n    display: inline-block;\n    transition: all 0.3s ease-in-out; }\n\n.link-animation {\n  -webkit-animation: shake 1s ease-in-out 0s 2 normal both;\n          animation: shake 1s ease-in-out 0s 2 normal both; }\n\n@-webkit-keyframes shake {\n  0% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); }\n  10% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  20% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  30% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  40% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  50% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  60% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  70% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  80% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  90% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  100% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); } }\n\n@keyframes shake {\n  0% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); }\n  10% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  20% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  30% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  40% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  50% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  60% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  70% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  80% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  90% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  100% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLGFBQVksRUFDYjs7QUFFRDtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxlQUFjO0VBQ2Qsb0JDWmM7RURhZCxnQkFBZTtFQUNmLFNBQVE7RUFDUixPQUFNO0VBRU4sa0VBQXlEO1VBQXpELDBEQUF5RDtFQUN6RCx3REFBK0M7VUFBL0MsZ0RBQStDLEVBQ2hEOztBQUVEO0VBQ0UsbURBQTBDO1VBQTFDLDJDQUEwQyxFQUMzQzs7QUE2QkQ7RUFDRSxjQUFhO0VBQ2IsUUFBTztFQUNQLHVCQUFzQjtFQUN0Qix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsZUN2RGlCO0VEd0RqQixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsY0FBYTtFQUNiLGVDN0QwQjtFRDhEMUIsb0JBQW1CO0VBQ25CLG1EQUEwQztVQUExQywyQ0FBMEMsRUFDM0M7O0FBRUQ7RUFDRSx5Q0FBd0M7RUFDeEMsa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYixrQkFBaUI7RUFDakIsZUN2RTBCO0VEd0UxQixtREFBMEM7VUFBMUMsMkNBQTBDLEVBQzNDOztBQUVEO0VBQ0UseUNBQXdDO0VBQ3hDLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQiwwQkFBeUI7RUFDekIsdUJBQXNCO0VBQ3RCLHFCQUFvQjtFQUNwQixtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLG1EQUEwQztVQUExQywyQ0FBMEMsRUFTM0M7O0FBcEJEO0lBY00sWUFBVyxFQUNaOztBQWZMO0lBaUJNLFdBQVUsRUFDWDs7QUFJTDtFQUNFLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsbURBQTBDO1VBQTFDLDJDQUEwQyxFQTJCM0M7O0FBakNEO0lBUUksaUNBQWdDO0lBQ2hDLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsc0JBQXFCO0lBQ3JCLFlBQVc7SUFDWCwwQkFBeUI7SUFDekIsY0FBYTtJQUNiLFlBQVc7SUFDWCxhQUFZO0lBQ1osT0FBTTtJQUNOLFlBQVcsRUFDWjs7QUFuQkg7SUFxQkksaUNBQWdDO0lBQ2hDLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsWUFBVztJQUNYLFlBQVc7SUFDWCwwQkFBeUI7SUFDekIsY0FBYTtJQUNiLFlBQVc7SUFDWCxhQUFZO0lBQ1osU0FBUTtJQUNSLFdBQVUsRUFDWDs7QUFHSDtFQUNFLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQiwwQkNqSmM7RURrSmQsWUFBVztFQUNYLGFBQVk7RUFDWixjQUFhO0VBQ2Isc0JBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsZ0NBQStCO0VBQy9CLGlEQUF3QztVQUF4Qyx5Q0FBd0M7RUFDeEMsOENBQTRDO0VBQzVDLG1CQUFrQixFQWlDbkI7O0FBaEREO0lBaUJJLG1CQUFrQjtJQUNsQixzQ0FBNkI7WUFBN0IsOEJBQTZCO0lBQzdCLHNCQUFxQjtJQUNyQixpQ0FBZ0MsRUFDakM7O0FBckJIO0lBdUJJLDBCQ2hLWTtJRGlLWixxQ0FBNEI7WUFBNUIsNkJBQTRCLEVBUTdCOztBQWhDSDtNQTBCTSxzQ0FBNkI7Y0FBN0IsOEJBQTZCO01BQzdCLFdBQVUsRUFDWDs7QUE1Qkw7TUE4Qk0sdUNBQThCO2NBQTlCLCtCQUE4QixFQUMvQjs7QUEvQkw7SUFzQ0ksaUJBQWdCO0lBQ2hCLG1CQUFrQjtJQUNsQixXQUFVO0lBQ1Ysb0JBQW1CO0lBQ25CLGtCQUFpQjtJQUNqQixlQUFjO0lBRWQsc0JBQXFCO0lBQ3JCLGlDQUFnQyxFQUNqQzs7QUFHSDtFQUNFLHlEQUFnRDtVQUFoRCxpREFBZ0QsRUFDakQ7O0FBRUQ7RUFDSTtJQUNFLHlDQUFnQztZQUFoQyxpQ0FBZ0MsRUFBQTtFQUVsQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUVwQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUVwQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUVwQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUVwQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLHlDQUFnQztZQUFoQyxpQ0FBZ0MsRUFBQSxFQUFBOztBQWhDdEM7RUFDSTtJQUNFLHlDQUFnQztZQUFoQyxpQ0FBZ0MsRUFBQTtFQUVsQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUVwQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUVwQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUVwQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUVwQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLHlDQUFnQztZQUFoQyxpQ0FBZ0MsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vZ2xvYmFsLnNjc3MnO1xuJHNtX2JyZWFrX3BvaW50OjU2MHB4O1xuLnJvb3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiA1MHZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5vdmVybGF5IHtcbiAgaGVpZ2h0OiA5MHZoO1xuICB3aWR0aDogOTB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogLTE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAkY29sb3IyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIC8vIGNsaXAtcGF0aDogY2lyY2xlKDYwJSA0MCUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpIHRyYW5zbGF0ZSgyN3Z3LCAtMTh2aCkgcm90YXRlKDMzNGRlZyk7XG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4xcyBib3RoIGxlZnRUb1JpZ2h0O1xufVxuXG4ucHJvZmlsZS1pbWFnZSB7XG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4ycyBib3RoIGZhZGVJbjtcbn1cblxuLy8gLm5hdmJhciB7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBjb2xvcjogJG9mZi13aGl0ZTtcbi8vICAgZm9udC1zaXplOiAxLjVyZW07XG4vLyAgIHBhZGRpbmc6IDFyZW07XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gfVxuXG4vLyAubmF2LWl0ZW1zIHtcbi8vICAgLm5hdi1pdGVtIHtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgcGFkZGluZzogMC4ycmVtIDA7XG4vLyAgICAgbWFyZ2luOiAwLjZyZW0gMXJlbTtcbi8vICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgYm9yZGVyLWJvdHRvbTogMC4zcmVtIHNvbGlkIHJlZDtcbi8vICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICAgICY6aG92ZXIge1xuLy8gICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHRleHQtY29sb3I7XG4vLyAgICAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAkb2ZmLXdoaXRlO1xuICBtYXJnaW4tdG9wOiAxJTtcbn1cblxuLnNob3J0LWJpbyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4ycyBib3RoIGZhZGVJbjtcbn1cblxuLnF1b3RlIHtcbiAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAwcmVtO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4ycyBib3RoIGZhZGVJbjtcbn1cblxuLm5hbWUge1xuICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIHBhZGRpbmctdG9wOiAwLjZyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRyZW07XG4gIHdvcmQtc3BhY2luZzogMC4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IC0yLjVyZW07XG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC42cyBib3RoIGZhZGVJbjtcbiAgJjpob3ZlciB7XG4gICAgLnN0cmlwOjphZnRlciB7XG4gICAgICBsZWZ0OiAtMXJlbTtcbiAgICB9XG4gICAgLnN0cmlwOjpiZWZvcmUge1xuICAgICAgbGVmdDogMXJlbTtcbiAgICB9XG4gIH1cbn1cblxuLnN0cmlwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyOHJlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuOHMgYm90aCBmYWRlSW47XG4gICY6OmJlZm9yZSB7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICAgIG1hcmdpbjogMnB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMXJlbTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb250ZW50OiAnJztcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICAgIG1hcmdpbjogMnB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogNHB4O1xuICAgIGxlZnQ6IDFyZW07XG4gIH1cbn1cblxuLnNwZWNpYWwtYnRuIHtcbiAgbWluLXdpZHRoOiA4cmVtO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMDByZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgZWFzZS1pbi1vdXQgMXMgYm90aDtcbiAgYm94LXNoYWRvdzogN3B4IDVweCA4cHggMCByZ2JhKDAsIDAsIDAsIC4zMSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgc3BhbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjdyZW0pO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IzO1xuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuMnJlbSk7XG4gICAgICBvcGFjaXR5OiA1O1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4ycmVtKTtcbiAgICB9XG4gIH1cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbi8vICAgICBib3gtc2hhZG93OiA0cHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMxKTtcbi8vICAgfVxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJ1xcMjE5Mic7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjVweCk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbi5saW5rLWFuaW1hdGlvbiB7XG4gIGFuaW1hdGlvbjogc2hha2UgMXMgZWFzZS1pbi1vdXQgMHMgMiBub3JtYWwgYm90aDtcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XG4gICAgfVxuICAgIDkwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gIH0iLCIkYmctY29sb3I6ICMwODVlNzI7XG4vLyAjMTdhNTk4O1xuJGNvbG9yMTogI2U3NGMzYztcbiRjb2xvcjI6ICNkMmUxZGQ7XG4kY29sb3IzOiAjZGIzODFiO1xuJGdyZWVuOiAjMTdhNTk4O1xuLy8gJHRleHQtY29sb3I6ICNmZmZmZmY7XG4kYmxhY2s6ICM1NTU7XG4kb2ZmLXdoaXRlOiAjZThlZWVhO1xuJHRleHQtY29sb3I6IHJnYig3MywgMzksIDM5KTtcbi8vICM2OTk7XG4kd2hpdGU6ICNmZmY7XG4kY29sb3I0OiByZ2IoMjQ3LCAxNjgsIDE2OCk7XG4kY29sb3I1OiAjNTRhNGFmOyJdfQ== */"

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

module.exports = ".profile-logo {\n  height: 12rem;\n  width: 12rem;\n  display: inline-block;\n  position: relative;\n  z-index: 5;\n  border-radius: 50%;\n  -webkit-perspective: 40rem;\n          perspective: 40rem; }\n  .profile-logo img {\n    position: relative;\n    border: 0.4rem solid #e74c3c;\n    height: 100%;\n    width: 100%;\n    border-radius: 50%;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 40rem;\n            perspective: 40rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvcHJvZmlsZS1waWMvcHJvZmlsZS1waWMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc3NoYXJtYTAwMS9Eb2N1bWVudHMvTXlQcm9qZWN0cy9hbmd1bGFyLXBvcnRmb2xpby9zcmMvYXBwL2dsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBYTtFQUNiLGFBQVk7RUFFWixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsMkJBQWtCO1VBQWxCLG1CQUFrQixFQWFuQjtFQXJCRDtJQVlJLG1CQUFrQjtJQUNsQiw2QkNiWTtJRGNaLGFBQVk7SUFDWixZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLG9DQUEyQjtZQUEzQiw0QkFBMkI7SUFFM0IsMkJBQWtCO1lBQWxCLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtcGljL3Byb2ZpbGUtcGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vZ2xvYmFsJztcblxuLnByb2ZpbGUtbG9nbyB7XG4gIGhlaWdodDogMTJyZW07XG4gIHdpZHRoOiAxMnJlbTtcbiAgLy8gbWFyZ2luLXRvcDogMnJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGVyc3BlY3RpdmU6IDQwcmVtO1xuICAvLyB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbiAgLy8gYW5pbWF0aW9uOiBmYWRlaW4gMXMgMC4ycyAxIG5vcm1hbCBib3RoO1xuICBpbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IDAuNHJlbSBzb2xpZCAkY29sb3IxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC8vIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIHBlcnNwZWN0aXZlOiA0MHJlbTtcbiAgfVxufSIsIiRiZy1jb2xvcjogIzA4NWU3Mjtcbi8vICMxN2E1OTg7XG4kY29sb3IxOiAjZTc0YzNjO1xuJGNvbG9yMjogI2QyZTFkZDtcbiRjb2xvcjM6ICNkYjM4MWI7XG4kZ3JlZW46ICMxN2E1OTg7XG4vLyAkdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiRibGFjazogIzU1NTtcbiRvZmYtd2hpdGU6ICNlOGVlZWE7XG4kdGV4dC1jb2xvcjogcmdiKDczLCAzOSwgMzkpO1xuLy8gIzY5OTtcbiR3aGl0ZTogI2ZmZjtcbiRjb2xvcjQ6IHJnYigyNDcsIDE2OCwgMTY4KTtcbiRjb2xvcjU6ICM1NGE0YWY7Il19 */"

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
            'Eclipse', 'Visual Studio', 'RubyMine', 'Sublime'
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
            'Git & GitHub', 'Jenkins', 'Docker', 'Kubernetes', 'Postman', 'JWT', 'Auth0'
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

module.exports = "  <span class=\"overlay\"></span>\n  <div class=\"container\">\n    <div class=\"side1\">\n      <div class=\"text-container\">\n          <h4 class=\"text-header\">A little bit about myself</h4>\n        <p>\n          I have 10 years of experience in software engineering. I have worked as a software developer for different clients\n          and also gained experience in software automation testing. I started programming with Java and J2EE in 2008 and I learned about different tools\n          while working on different projects. I gained experience in Ruby, AngularJS, node.js. \n        </p>\n          <p>\n          I jumped into software automation in 2014 for building a frameowrk in Java. I love working on new skills and technologies and resolving problems.\n          In Software automation field, I got opportunity to work on Capybara, Calabash, Appium, Selenium, Cucumber.\n          I like to build frameowrks and tools to help teams and to gain experience with software architecture.\n        </p>\n        <br>\n        <h4>Highlights:</h4>\n         \n            <ul>\n              <li> Built a project dashboard using Struts/JSP for my first project, which checks the status of servers using cron jobs and triggers the mail. </li>\n              <li> Built a crawler script in Java to check each and every link of Web Application and stores the status in desired format.</li>\n              <li> Built ruby custom gems for different teams to use, for creating customers data to be used in login purpose.</li>\n            </ul>\n        \n        <br>\n        <p>\n          Apart from programming, I like to play badminton, baking and watch documentries about universe/planets.\n        </p>\n      </div>\n    </div>\n    <div class=\"side2\">\n      <div class=\"skill-container\">\n        <h4 class=\"skill-header\">\n            My core skill  and strengths\n        </h4>\n        <div *ngFor=\"let profile of profiles\">\n          <h4 class=\"skill-type\">{{profile.type}}</h4>\n          <h4 class=\"skill-names\">{{profile.name.join(', ')}}</h4>\n        </div>\n      </div>\n    </div>\n  </div> "

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\n  display: inline-block;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  left: -100%;\n  position: fixed;\n  background: #d2e1dd;\n  -webkit-transform: scale(2) skew(-8deg);\n          transform: scale(2) skew(-8deg);\n  z-index: -1;\n  transition: 0.3s all ease-in-out;\n  margin-top: 0.25rem;\n  padding: 0rem; }\n\n.container {\n  font-size: 1.2rem;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  color: #492727;\n  margin-top: 0.25rem;\n  padding: 0rem; }\n\n.container .side1 {\n    flex: 1;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding-top: 5.0rem;\n    padding-left: 2.5rem; }\n\n@media (max-width: 1040px) {\n      .container .side1 {\n        flex: none;\n        height: auto; } }\n\n.container .side1 > h1 {\n      margin-bottom: 0;\n      padding: 3rem 0.8rem 0.2rem;\n      font-size: 3rem; }\n\n.container .side2 {\n    flex: 1;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding-top: 5.0rem; }\n\n@media (max-width: 1040px) {\n      .container .side2 {\n        flex: none;\n        height: auto; } }\n\n.text-container {\n  height: auto;\n  max-width: 35rem;\n  background-color: #54a4af;\n  padding: 3rem 1.8rem;\n  padding-top: 2.0rem;\n  border-radius: 2rem;\n  min-width: 35rem;\n  align-items: center;\n  font-size: 1.1rem;\n  box-shadow: 0.22rem 0.22rem 0.25rem 0.25rem #085e72; }\n\n.dp-logo {\n  font-size: 1.6rem;\n  -webkit-transform: translate(0, 45%);\n          transform: translate(0, 45%);\n  height: 10rem;\n  width: 10rem;\n  display: flex;\n  align-items: center; }\n\n.skill-container {\n  padding: 1rem 1.8rem;\n  margin-left: 5rem;\n  background: #d2e1dd;\n  padding-top: 2.0rem;\n  border-radius: 2rem;\n  min-width: 35rem;\n  height: auto;\n  max-width: 35rem;\n  align-items: right;\n  color: #492727;\n  box-shadow: 0.22rem 0.22rem 0.25rem 0.25rem #492727; }\n\n@media (max-width: 1040px) {\n    .skill-container {\n      margin: auto; } }\n\n.text-header {\n  margin: 2rem 0;\n  margin-bottom: 3.8rem;\n  position: relative;\n  letter-spacing: 2px;\n  padding-bottom: 0rem;\n  font-size: 1.8rem;\n  font-family: Brush Script MT, Brush Script Std, cursive;\n  justify-content: flex-start; }\n\n.text-header:after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 100%;\n    height: 3px;\n    top: 100%;\n    left: 0;\n    background: #db381b; }\n\n.skill-header {\n  margin: 2rem 0;\n  margin-bottom: 3.8rem;\n  position: relative;\n  letter-spacing: 2px;\n  padding-bottom: 0rem;\n  font-size: 1.8rem;\n  font-family: Brush Script MT, Brush Script Std, cursive;\n  justify-content: flex-start; }\n\n.skill-header:after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 100%;\n    height: 3px;\n    top: 100%;\n    left: 0;\n    background: #db381b; }\n\n.skill-type {\n  position: relative;\n  margin: 1.2rem 0;\n  padding-bottom: 0.2rem;\n  font-size: 1.2rem; }\n\n.skill-type:after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 70%;\n    height: 1.5px;\n    top: 100%;\n    left: 0;\n    background: #699; }\n\n.skill-names {\n  margin-left: 2.8rem;\n  margin-bottom: 2rem;\n  margin-top: -0.6rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHNCQUFxQjtFQUNyQixjQUFhO0VBQ2IsYUFBWTtFQUNaLE9BQU07RUFDTixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixvQkNQYztFRFFkLHdDQUErQjtVQUEvQixnQ0FBK0I7RUFDL0IsWUFBVztFQUNYLGlDQUFnQztFQUNoQyxvQkFBbUI7RUFDbkIsY0FBYSxFQUNkOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYixhQUFZO0VBQ1osY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiw4QkFBNkI7RUFDN0IsZUNoQjBCO0VEa0I1QixvQkFBbUI7RUFDakIsY0FBYSxFQWdDZDs7QUExQ0Q7SUFlSSxRQUFPO0lBQ1AsYUFBWTtJQUNaLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsb0JBQW1CO0lBQ25CLHFCQUFvQixFQVVyQjs7QUFUQztNQXJCSjtRQXNCTSxXQUFVO1FBQ1YsYUFBWSxFQU9mLEVBQUE7O0FBOUJIO01BMEJNLGlCQUFnQjtNQUNoQiw0QkFBMkI7TUFDM0IsZ0JBQWUsRUFDaEI7O0FBN0JMO0lBZ0NJLFFBQU87SUFDUCxhQUFZO0lBQ1osY0FBYTtJQUNiLHVCQUFzQjtJQUN0QixvQkFBbUIsRUFLcEI7O0FBSkM7TUFyQ0o7UUFzQ00sV0FBVTtRQUNWLGFBQVksRUFFZixFQUFBOztBQUdIO0VBQ0UsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQiwwQkNwRGM7RURxRGQscUJBQW9CO0VBQ3BCLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsb0RDeEVnQixFRHlFakI7O0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIscUNBQTRCO1VBQTVCLDZCQUE0QjtFQUM1QixjQUFhO0VBQ2IsYUFBWTtFQUNaLGNBQWE7RUFDYixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxxQkFBb0I7RUFDcEIsa0JBQWlCO0VBQ2pCLG9CQ3BGYztFRHFGZCxvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixlQ3JGMEI7RURzRjFCLG9EQ3RGMEIsRUQwRjNCOztBQUhDO0lBWkY7TUFhSSxhQUFZLEVBRWYsRUFBQTs7QUFHRDtFQUNJLGVBQWM7RUFDZCxzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixxQkFBb0I7RUFDcEIsa0JBQWlCO0VBQ2pCLHdEQUF1RDtFQUN2RCw0QkFBMkIsRUFXOUI7O0FBbkJEO0lBVUksWUFBVztJQUNYLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsWUFBVztJQUNYLFlBQVc7SUFDWCxVQUFTO0lBQ1QsUUFBTztJQUNQLG9CQ25IWSxFRG9IYjs7QUFFSDtFQUNFLGVBQWM7RUFDZCxzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixxQkFBb0I7RUFDcEIsa0JBQWlCO0VBQ2pCLHdEQUF1RDtFQUN2RCw0QkFBMkIsRUFXNUI7O0FBbkJEO0lBVUksWUFBVztJQUNYLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsWUFBVztJQUNYLFlBQVc7SUFDWCxVQUFTO0lBQ1QsUUFBTztJQUNQLG9CQ3ZJWSxFRHdJYjs7QUFHSDtFQUNFLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsdUJBQXNCO0VBQ3RCLGtCQUFpQixFQVdsQjs7QUFmRDtJQU1JLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsc0JBQXFCO0lBQ3JCLFdBQVU7SUFDVixjQUFhO0lBQ2IsVUFBUztJQUNULFFBQU87SUFDUCxpQkFBZ0IsRUFDakI7O0FBR0g7RUFDRSxvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL2dsb2JhbCc7XG4kdGV4dC1jYXJkLXNoaWZ0OjIwJTtcbiRyb3ctY29sb3VtLWJyay1wb2ludDogJ21heC13aWR0aDogMTA0MHB4Jztcbi5vdmVybGF5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHRvcDogMDtcbiAgbGVmdDogLTEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogJGNvbG9yMjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKSBza2V3KC04ZGVnKTtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICBwYWRkaW5nOiAwcmVtO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbm1hcmdpbi10b3A6IDAuMjVyZW07XG4gIHBhZGRpbmc6IDByZW07XG4gIC8vIEBtZWRpYSAoJHJvdy1jb2xvdW0tYnJrLXBvaW50KSB7XG4gIC8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLy8gfVxuICAuc2lkZTEge1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLXRvcDogNS4wcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICAgIEBtZWRpYSAoJHJvdy1jb2xvdW0tYnJrLXBvaW50KSB7XG4gICAgICBmbGV4OiBub25lO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAmPmgxIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBwYWRkaW5nOiAzcmVtIDAuOHJlbSAwLjJyZW07XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxuICB9XG4gIC5zaWRlMiB7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctdG9wOiA1LjByZW07XG4gICAgQG1lZGlhICgkcm93LWNvbG91bS1icmstcG9pbnQpIHtcbiAgICAgIGZsZXg6IG5vbmU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG59XG5cbi50ZXh0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAzNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yNTtcbiAgcGFkZGluZzogM3JlbSAxLjhyZW07XG4gIHBhZGRpbmctdG9wOiAyLjByZW07XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIG1pbi13aWR0aDogMzVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBib3gtc2hhZG93OiAwLjIycmVtIDAuMjJyZW0gMC4yNXJlbSAwLjI1cmVtICRiZy1jb2xvcjtcbn1cblxuLmRwLWxvZ28ge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNDUlKTtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgd2lkdGg6IDEwcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2tpbGwtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMXJlbSAxLjhyZW07XG4gIG1hcmdpbi1sZWZ0OiA1cmVtO1xuICBiYWNrZ3JvdW5kOiAkY29sb3IyO1xuICBwYWRkaW5nLXRvcDogMi4wcmVtO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBtaW4td2lkdGg6IDM1cmVtO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMzVyZW07XG4gIGFsaWduLWl0ZW1zOiByaWdodDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBib3gtc2hhZG93OiAwLjIycmVtIDAuMjJyZW0gMC4yNXJlbSAwLjI1cmVtICR0ZXh0LWNvbG9yO1xuICBAbWVkaWEgKCRyb3ctY29sb3VtLWJyay1wb2ludCkge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG5cbi50ZXh0LWhlYWRlciB7XG4gICAgbWFyZ2luOiAycmVtIDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMy44cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBCcnVzaCBTY3JpcHQgTVQsIEJydXNoIFNjcmlwdCBTdGQsIGN1cnNpdmU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuJjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3IzO1xuICB9XG59XG4uc2tpbGwtaGVhZGVyIHtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIG1hcmdpbi1ib3R0b206IDMuOHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHJlbTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtZmFtaWx5OiBCcnVzaCBTY3JpcHQgTVQsIEJydXNoIFNjcmlwdCBTdGQsIGN1cnNpdmU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3IzO1xuICB9XG59XG5cbi5za2lsbC10eXBlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEuMnJlbSAwO1xuICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogMS41cHg7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogIzY5OTtcbiAgfVxufVxuXG4uc2tpbGwtbmFtZXMge1xuICBtYXJnaW4tbGVmdDogMi44cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBtYXJnaW4tdG9wOiAtMC42cmVtO1xufSIsIiRiZy1jb2xvcjogIzA4NWU3Mjtcbi8vICMxN2E1OTg7XG4kY29sb3IxOiAjZTc0YzNjO1xuJGNvbG9yMjogI2QyZTFkZDtcbiRjb2xvcjM6ICNkYjM4MWI7XG4kZ3JlZW46ICMxN2E1OTg7XG4vLyAkdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiRibGFjazogIzU1NTtcbiRvZmYtd2hpdGU6ICNlOGVlZWE7XG4kdGV4dC1jb2xvcjogcmdiKDczLCAzOSwgMzkpO1xuLy8gIzY5OTtcbiR3aGl0ZTogI2ZmZjtcbiRjb2xvcjQ6IHJnYigyNDcsIDE2OCwgMTY4KTtcbiRjb2xvcjU6ICM1NGE0YWY7Il19 */"

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

module.exports = "<!-- <div class=\"portfolio-bg\"> -->\n<div class=\"portfolio-bg\">\n<div class=\"project-container\">\n  <div *ngFor=\"let proj of projects\" class=\"project-card\">\n    <div class=\"card-outer\">\n      <div class=\"card card__front\">\n        <div class=\"card-container\">\n          <h4 class=\"card-header\">{{proj.name}}</h4>\n          <span class=\"image\"><img src={{proj.imageLink}}/></span>\n          <!-- <div>\n            <p class=\"card-short-details\" >\n              {{proj.description}}\n            </p>\n          </div> -->\n          <div class=\"card-short-details\">\n              {{proj.description}}\n              <div class=\"tech-stuff-details\">\n                <br>\n                <span>What I learned: </span>\n                <p>{{proj.features}}</p>\n                <br><br>\n                <span>Tech Stuff: </span>\n                <br>\n                <p>{{proj.techStuff}} </p>\n              </div>\n            </div>\n        </div>\n      </div>\n      \n  </div>\n</div>\n</div>\n</div>\n \n\n\n"

/***/ }),

/***/ "./src/app/project/project.component.scss":
/*!************************************************!*\
  !*** ./src/app/project/project.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio-bg {\n  min-height: 100vh;\n  min-width: 100vw;\n  position: absolute;\n  overflow: hidden;\n  display: inline-block; }\n\n.portfolio-container {\n  padding: 3.5rem;\n  flex-direction: column;\n  color: #492727; }\n\n.card-outer {\n  position: relative;\n  font-family: Times;\n  font-weight: normal;\n  color: #492727;\n  cursor: pointer; }\n\n.card {\n  width: 100%;\n  min-width: 18rem;\n  min-height: 18rem;\n  background-color: #e8eeea;\n  border-radius: 0.6rem;\n  overflow: hidden;\n  box-shadow: 0.35rem 0.35rem 0.35rem #492727;\n  transition: 0.8s ease-in-out;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.card.card__featured::before {\n    content: '\\269D';\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    font-size: 1.2rem;\n    padding: 0 0.4rem; }\n\n.card .card-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 0.6rem 1.6rem;\n    width: 100%;\n    height: 100%; }\n\n.card .card-container .image {\n      height: 10rem;\n      width: 12rem;\n      margin-top: 1rem;\n      display: inline-block;\n      position: relative;\n      margin-right: 2rem; }\n\n.card .card-container .image img {\n        position: relative;\n        border: 0.2rem solid #e8eeea;\n        box-shadow: 0.3rem 0.3rem 0.25rem rgba(1, 48, 54, 0.3);\n        height: 100%;\n        width: 100%; }\n\n.card .card-container .card-header {\n      font-family: cursive;\n      width: 100%;\n      font-size: 1.5rem;\n      margin: 1rem 0;\n      font-weight: bold;\n      margin: 1rem 0; }\n\n.card .card-container .card-header::before {\n        content: '';\n        position: absolute;\n        display: inline-block;\n        width: 100%;\n        height: 1rem;\n        top: 0rem;\n        left: 0;\n        background: #17a598;\n        border-radius: 0.25rem; }\n\n.card .card-container .card-short-details {\n      width: 100%;\n      flex: 1;\n      font-size: 1.2rem;\n      margin: 0.6rem 0;\n      color: #492727; }\n\n.card .card-container .tech-stuff-details > span {\n      font-weight: bold;\n      display: inline-block; }\n\n.card .card-container .tech-stuff-details > p {\n      display: inline;\n      margin-left: 0.3rem;\n      word-break: break-word; }\n\n.project-container {\n  width: 100%;\n  flex-wrap: wrap;\n  align-items: center;\n  transition: all 0.5s ease-in-out;\n  padding-bottom: 0rem; }\n\n.project-container .project-card {\n    margin: 2rem 6rem 0rem 6rem;\n    padding: 0rem;\n    transition: all 0.5s ease-in-out; }\n\n@-webkit-keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%; }\n  100% {\n    opacity: 0.7;\n    left: 120%; } }\n\n@keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%; }\n  100% {\n    opacity: 0.7;\n    left: 120%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLHVCQUFzQjtFQUN0QixlQ1AwQixFRFEzQjs7QUFjRDtFQUNFLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGVDMUIwQjtFRDJCMUIsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBdENlO0VBdUNmLGtCQXhDZ0I7RUF5Q2hCLDBCQ25DaUI7RURvQ2pCLHNCQUFxQjtFQUNyQixpQkFBZ0I7RUFDaEIsNENDckMwQjtFRHNDMUIsNkJBQTRCO0VBQzVCLG9DQUEyQjtVQUEzQiw0QkFBMkI7RUFDM0IsMEJBQWlCO0tBQWpCLHVCQUFpQjtNQUFqQixzQkFBaUI7VUFBakIsa0JBQWlCLEVBNkZsQjs7QUF2R0Q7SUEwQk0saUJBQWdCO0lBQ2hCLG1CQUFrQjtJQUNsQixPQUFNO0lBQ04sUUFBTztJQUNQLFdBQVU7SUFDVixrQkFBaUI7SUFDakIsa0JBQWlCLEVBRWxCOztBQWxDTDtJQXNDSSxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLGdCQUFlO0lBQ2YsdUJBQXNCO0lBQ3RCLFlBQVc7SUFDWCxhQUFZLEVBMkRiOztBQXRHSDtNQTZDTSxjQUFhO01BQ2IsYUFBWTtNQUNaLGlCQUFnQjtNQUNoQixzQkFBcUI7TUFDckIsbUJBQWtCO01BQ2xCLG1CQUFrQixFQVFuQjs7QUExREw7UUFvRFEsbUJBQWtCO1FBQ2xCLDZCQ3BGVztRRHFGWCx1REFBZ0Q7UUFDaEQsYUFBWTtRQUNaLFlBQVcsRUFDWjs7QUF6RFA7TUE2RE0scUJBQW9CO01BQ3BCLFlBQVc7TUFDWCxrQkFBaUI7TUFDakIsZUFBYztNQUNkLGtCQUFpQjtNQUNqQixlQUFjLEVBWWY7O0FBOUVMO1FBb0VRLFlBQVc7UUFDWCxtQkFBa0I7UUFDbEIsc0JBQXFCO1FBQ3JCLFlBQVc7UUFDWCxhQUFZO1FBQ1osVUFBUztRQUNULFFBQU87UUFDUCxvQkM3R087UUQ4R1AsdUJBQXNCLEVBQ3ZCOztBQTdFUDtNQWlGTSxZQUFXO01BQ1gsUUFBTztNQUNQLGtCQUFpQjtNQUNqQixpQkFBZ0I7TUFDaEIsZUNuSHNCLEVEb0h2Qjs7QUF0Rkw7TUEwRlEsa0JBQWlCO01BQ2pCLHNCQUFxQixFQUN0Qjs7QUE1RlA7TUErRlEsZ0JBQWU7TUFDZixvQkFBbUI7TUFDbkIsdUJBQXNCLEVBQ3ZCOztBQU9QO0VBQ0UsWUFBVztFQUNYLGdCQUFlO0VBQ2Ysb0JBQW1CO0VBQ25CLGlDQUFnQztFQUNoQyxxQkFBb0IsRUFPckI7O0FBWkQ7SUFPSSw0QkFBMkI7SUFDM0IsY0FBYTtJQUNiLGlDQUFnQyxFQUVqQzs7QUFJSDtFQUNBO0lBQ0UsYUFBWTtJQUNaLFdBQVUsRUFBQTtFQUVaO0lBQ0UsYUFBWTtJQUNaLFdBQVUsRUFBQSxFQUFBOztBQVBaO0VBQ0E7SUFDRSxhQUFZO0lBQ1osV0FBVSxFQUFBO0VBRVo7SUFDRSxhQUFZO0lBQ1osV0FBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9nbG9iYWwuc2Nzcyc7XG5cbiRtaW4taGVpZ2h0OiAxOHJlbTtcbiRtaW4td2lkdGg6IDE4cmVtO1xuXG4ucG9ydGZvbGlvLWJnIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMuNXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xufVxuXG4vLyBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbi8vICAgLnBvcnRmb2xpby1jb250YWluZXIge1xuLy8gICAgIHBhZGRpbmc6IDMuNXJlbSAwLjVyZW07XG4vLyAgIH1cbi8vIH1cblxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDc0cmVtKSB7XG4vLyAgIC5wb3J0Zm9saW8taGVhZGVyIHtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICB9XG4vLyB9XG5cbi5jYXJkLW91dGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogVGltZXM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6ICRtaW4td2lkdGg7XG4gIG1pbi1oZWlnaHQ6ICRtaW4taGVpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2ZmLXdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAuMzVyZW0gMC4zNXJlbSAwLjM1cmVtICR0ZXh0LWNvbG9yO1xuICB0cmFuc2l0aW9uOiAwLjhzIGVhc2UtaW4tb3V0O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAvLyAmLmNhcmRfX2Zyb250IHtcbiAgLy8gICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIC8vIH1cblxuICAvLyAmLmNhcmRfX2JhY2sge1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjU7XG4gIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyAgIHRvcDogMDtcbiAgLy8gICBsZWZ0OiAwO1xuICAvLyAgIHotaW5kZXg6IC0xO1xuICAvLyAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAvLyB9XG5cbiAgJi5jYXJkX19mZWF0dXJlZCB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICdcXDI2OUQnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIHBhZGRpbmc6IDAgMC40cmVtO1xuICAgICAgXG4gICAgfVxuICB9XG4gIFxuICAuY2FyZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogMC42cmVtIDEuNnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLmltYWdlIHtcbiAgICAgIGhlaWdodDogMTByZW07XG4gICAgICB3aWR0aDogMTJyZW07XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCAkb2ZmLXdoaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAwLjMwcmVtIDAuMzByZW0gMC4yNXJlbSByZ2JhKCMwMTMwMzYsIDAuMyk7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgdG9wOiAwcmVtO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmQtc2hvcnQtZGV0YWlscyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIG1hcmdpbjogMC42cmVtIDA7XG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgfVxuXG4gICAgLnRlY2gtc3R1ZmYtZGV0YWlscyB7XG4gICAgICAmID4gc3BhbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICYgPiBwIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgfVxuICAgIH1cblxuICAgXG4gIH1cbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcmVtO1xuICAucHJvamVjdC1jYXJkIHtcbiAgICBtYXJnaW46IDJyZW0gNnJlbSAwcmVtIDZyZW07XG4gICAgcGFkZGluZzogMHJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAvLyB6LWluZGV4OiA1MDtcbiAgfVxufVxuXG5cbkBrZXlmcmFtZXMgZmFkZUxlZnRUb1JpZ2h0IHtcbjAlIHtcbiAgb3BhY2l0eTogMC4xO1xuICBsZWZ0OiAtMTAlO1xufVxuMTAwJSB7XG4gIG9wYWNpdHk6IDAuNztcbiAgbGVmdDogMTIwJTtcbn1cbn0iLCIkYmctY29sb3I6ICMwODVlNzI7XG4vLyAjMTdhNTk4O1xuJGNvbG9yMTogI2U3NGMzYztcbiRjb2xvcjI6ICNkMmUxZGQ7XG4kY29sb3IzOiAjZGIzODFiO1xuJGdyZWVuOiAjMTdhNTk4O1xuLy8gJHRleHQtY29sb3I6ICNmZmZmZmY7XG4kYmxhY2s6ICM1NTU7XG4kb2ZmLXdoaXRlOiAjZThlZWVhO1xuJHRleHQtY29sb3I6IHJnYig3MywgMzksIDM5KTtcbi8vICM2OTk7XG4kd2hpdGU6ICNmZmY7XG4kY29sb3I0OiByZ2IoMjQ3LCAxNjgsIDE2OCk7XG4kY29sb3I1OiAjNTRhNGFmOyJdfQ== */"

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

/***/ "./src/app/skillpercent/skillpercent.component.html":
/*!**********************************************************!*\
  !*** ./src/app/skillpercent/skillpercent.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  skillpercent works!\n</p>\n"

/***/ }),

/***/ "./src/app/skillpercent/skillpercent.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/skillpercent/skillpercent.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscGVyY2VudC9za2lsbHBlcmNlbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/skillpercent/skillpercent.component.ts":
/*!********************************************************!*\
  !*** ./src/app/skillpercent/skillpercent.component.ts ***!
  \********************************************************/
/*! exports provided: SkillpercentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillpercentComponent", function() { return SkillpercentComponent; });
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

var SkillpercentComponent = /** @class */ (function () {
    function SkillpercentComponent() {
    }
    SkillpercentComponent.prototype.ngOnInit = function () {
    };
    SkillpercentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skillpercent',
            template: __webpack_require__(/*! ./skillpercent.component.html */ "./src/app/skillpercent/skillpercent.component.html"),
            styles: [__webpack_require__(/*! ./skillpercent.component.scss */ "./src/app/skillpercent/skillpercent.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillpercentComponent);
    return SkillpercentComponent;
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