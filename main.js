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
/* harmony import */ var _skillpercent_skillpercent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skillpercent/skillpercent.component */ "./src/app/skillpercent/skillpercent.component.ts");
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
    {
        path: 'skillpercent', component: _skillpercent_skillpercent_component__WEBPACK_IMPORTED_MODULE_6__["SkillpercentComponent"], data: { animation: 'skillpercent' }
    },
    { path: '**', redirectTo: '/' },
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
/* harmony import */ var _contact_card_contact_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact-card/contact-card.component */ "./src/app/contact-card/contact-card.component.ts");
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
                _skillpercent_skillpercent_component__WEBPACK_IMPORTED_MODULE_16__["SkillpercentComponent"],
                _contact_card_contact_card_component__WEBPACK_IMPORTED_MODULE_17__["ContactCardComponent"]
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

/***/ "./src/app/contact-card/contact-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-card/contact-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-card works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact-card/contact-card.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/contact-card/contact-card.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtY2FyZC9jb250YWN0LWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/contact-card/contact-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-card/contact-card.component.ts ***!
  \********************************************************/
/*! exports provided: ContactCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCardComponent", function() { return ContactCardComponent; });
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

var ContactCardComponent = /** @class */ (function () {
    function ContactCardComponent() {
    }
    ContactCardComponent.prototype.ngOnInit = function () {
    };
    ContactCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-card',
            template: __webpack_require__(/*! ./contact-card.component.html */ "./src/app/contact-card/contact-card.component.html"),
            styles: [__webpack_require__(/*! ./contact-card.component.scss */ "./src/app/contact-card/contact-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactCardComponent);
    return ContactCardComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"overlay\"></div>\n<div class=\"root-container\">\n<div class=\"container\">\n    <div class=\"card\">\n      <div >\n        <div class=\"profile-logo\">\n          <img src=\"assets/images/profile-pic.png\" alt=\"\">\n        </div>\n        <div class=\"strip\"></div>\n        <div class=\"short-details\">\n          <blockquote class=\"quote tagLine\">\n            \"I like to explore new skills in a way of self-learning.\"\n          </blockquote>\n        </div>\n      </div>\n  \n      <div class=\"details\">\n          <div class=\"divider\">\n            <div class=\"stick \"></div>\n            <div class=\"stick \"></div>\n          </div>\n        <p class=\"bio\">I am a software developer cum software automation engineer and an aspiring Devops Engineer.\n        <br> I'm interested to work on frameowrks on Ruby, Python and in developing tools.\n        </p>\n        </div>\n      <div class=\"divider\">\n        <div class=\"stick\"></div>\n        <div class=\"stick\"></div>\n      </div>\n      <div class=\"typewriter\"><p>Contact me through any of these means: </p></div>\n      <br>\n      <div class=\"social\">\n          <div class=\"social-icon\">\n              <a href=\"https://www.facebook.com/Shswati1\" target=\"_blank\">\n                <img src=\"assets/assert/icons/facebook.png\" alt=\"slack icon\">\n              </a>\n            </div>\n        <div class=\"social-icon\">\n          <a href=\"https://www.slack.com/\" target=\"_blank\">\n            <img src=\"assets/assert/icons/slack.png\" alt=\"slack icon\">\n          </a>\n        </div>\n        <div class=\"social-icon\">\n          <a href=\"https://www.github.com/swati001\" target=\"_blank\">\n            <img src=\"assets/assert/icons/github.png\" alt=\"github icon\">\n          </a>\n        </div>\n        <div class=\"social-icon\">\n          <a href=\"https://www.linkedin.com/in/swati-sharma-aa423b89/\" target=\"_blank\">\n            <img src=\"assets/assert/icons/linkedin.png\" alt=\"linkedin icon\">\n          </a>\n        </div>\n        <div class=\"social-icon\">\n          <a href=\"mailto:swatiinfo86@gmail.com\">\n            <img src=\"assets/assert/icons/mail.png\" alt=\"email icon\">\n          </a>\n        </div>\n      </div>\n  \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  z-index: -1;\n  display: block;\n  background: #d2e1dd;\n  position: fixed;\n  right: 0;\n  top: 0;\n  -webkit-animation: 1s ease-in-out 0.1s both leftToRight;\n          animation: 1s ease-in-out 0.1s both leftToRight; }\n\n.root-container {\n  display: flex;\n  flex-direction: column;\n  height: 50vh;\n  width: 100vw;\n  margin: 7rem 5rem 0 0; }\n\n.container {\n  width: 30rem;\n  height: 44rem;\n  align-items: center;\n  margin: 0.1rem 40%;\n  justify-content: center;\n  background-color: #d2e1dd;\n  color: #e8eeea;\n  border-radius: 1.5rem;\n  flex-wrap: wrap;\n  transition: all 0.5s ease-in-out; }\n\n.container .card {\n    background-color: #085e72;\n    height: 100%;\n    max-height: 100%;\n    width: 100%;\n    text-align: center;\n    overflow-x: hidden;\n    z-index: 1;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    overflow: hidden;\n    box-shadow: 1.3rem 1.3rem 1.4rem 0rem #84a88a;\n    transition: all 0.3s ease-in-out;\n    -webkit-animation: dropin 1s ease-in-out 0s 1 normal both;\n            animation: dropin 1s ease-in-out 0s 1 normal both; }\n\n.container .profile-logo {\n    height: 14rem;\n    width: 14rem;\n    margin-top: 5.5rem;\n    display: inline-block;\n    position: relative;\n    z-index: 5; }\n\n.container .profile-logo img {\n      position: relative;\n      border: 0.4rem solid #e74c3c;\n      height: 70%;\n      width: 70%;\n      border-radius: 50%;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden;\n      transition: all 0.5s ease-in-out; }\n\n.container .strip {\n    background-color: #e74c3c;\n    height: 5rem;\n    width: 100%;\n    margin-left: 0rem;\n    margin-top: -20rem;\n    -webkit-transform: rotateZ(-16deg);\n            transform: rotateZ(-16deg);\n    z-index: -1;\n    position: absolute;\n    -webkit-animation: stripAnimation 1s ease-in-out 1.0s 1 normal both;\n            animation: stripAnimation 1s ease-in-out 1.0s 1 normal both; }\n\n.container .strip:hover::after {\n      -webkit-animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both;\n              animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both; }\n\n.container .short-details {\n    position: relative;\n    -webkit-animation: dropin 1s ease-in-out 0.4s 1 normal both;\n            animation: dropin 1s ease-in-out 0.4s 1 normal both; }\n\n.container .short-details .tagLine {\n      display: block;\n      width: 100%;\n      font-size: 1.2rem;\n      font-weight: lighter;\n      font-style: italic;\n      padding: 0.5rem; }\n\n.container .short-details .quote {\n      font-family: 'Cormorant Garamond', serif;\n      display: inline-block;\n      font-size: 1.2rem;\n      font-weight: 100;\n      width: 65%;\n      padding: 0.5rem 1rem;\n      padding-bottom: 0.2rem;\n      line-height: 1.2; }\n\n.container .details {\n    margin-top: 1rem; }\n\n.container .details .nameBlock {\n      transition: all 0.3s ease-in-out;\n      -webkit-animation: dropin 1s ease-in-out 0.1s 1 normal both;\n              animation: dropin 1s ease-in-out 0.1s 1 normal both; }\n\n.container .details .name {\n      display: inline-block;\n      position: relative;\n      width: 60%;\n      font-size: 2rem;\n      font-weight: 400;\n      line-height: 1.6;\n      text-transform: uppercase;\n      letter-spacing: 0.2rem; }\n\n.container .details .bio {\n      display: inline-block;\n      width: 70%;\n      font-size: 1.2rem;\n      margin: 0.4rem;\n      line-height: 1.2;\n      font-weight: lighter;\n      margin-bottom: 0.8rem;\n      text-align: center;\n      word-spacing: 0.2rem;\n      -webkit-animation: dropin 1s ease-in-out 0.3s 1 normal both;\n              animation: dropin 1s ease-in-out 0.3s 1 normal both; }\n\n.container .social {\n    display: block;\n    padding: 0rem 1rem;\n    padding-top: 0;\n    margin-top: 0.6rem;\n    -webkit-animation: dropin 1s ease-in-out 1.2s 1 normal both;\n            animation: dropin 1s ease-in-out 1.2s 1 normal both; }\n\n.container .social .social-icon {\n      display: inline-block;\n      width: 2rem;\n      height: 2rem;\n      margin: 0.1rem 0.5rem;\n      background-color: #ffffff;\n      transition: all 0.3s ease-in-out; }\n\n.container .social .social-icon img {\n        height: 100%;\n        width: 100%; }\n\n.container .social .social-icon:hover {\n        -webkit-transform: scale(1.3);\n                transform: scale(1.3); }\n\n.typewriter p {\n  overflow: hidden;\n  /* Ensures the content is not revealed until the animation */\n  border-right: .10em solid red;\n  /* The typwriter cursor */\n  white-space: nowrap;\n  /* Keeps the content on a single line */\n  margin: 1 auto;\n  /* Gives that scrolling effect as the typing happens */\n  letter-spacing: .12em;\n  /* Adjust as needed */\n  font-family: calibri;\n  font-size: 1.1rem;\n  -webkit-animation: typing 4.5s steps(30, end), blink-caret 0.75s step-end infinite;\n          animation: typing 4.5s steps(30, end), blink-caret 0.75s step-end infinite; }\n\n/* The typing effect */\n\n@-webkit-keyframes typing {\n  from {\n    width: 0; }\n  to {\n    width: 100%; } }\n\n@keyframes typing {\n  from {\n    width: 0; }\n  to {\n    width: 100%; } }\n\n@-webkit-keyframes blink-caret {\n  from, to {\n    border-color: transparent; }\n  50% {\n    border-color: red; } }\n\n@keyframes blink-caret {\n  from, to {\n    border-color: transparent; }\n  50% {\n    border-color: red; } }\n\n.divider {\n  padding: 1rem;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  position: relative; }\n\n.divider .stick {\n    display: inline-block;\n    position: relative;\n    height: 0.1rem;\n    background-color: #e74c3c;\n    margin: 0.1rem 0;\n    width: 75%;\n    clear: both; }\n\n@-webkit-keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%; }\n  100% {\n    opacity: 0.7;\n    left: 120%; } }\n\n@keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%; }\n  100% {\n    opacity: 0.7;\n    left: 120%; } }\n\n@-webkit-keyframes dropin {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes dropin {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes stripAnimation {\n  0% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1; } }\n\n@keyframes stripAnimation {\n  0% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1; } }\n\n@media screen and (max-width: 600px) {\n  .container {\n    width: 25rem;\n    margin: 0.1rem 10%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVFLGNBQWE7RUFDYixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxlQUFjO0VBQ2Qsb0JDUmM7RURTZCxnQkFBZTtFQUNmLFNBQVE7RUFDUixPQUFNO0VBRU4sd0RBQStDO1VBQS9DLGdEQUErQyxFQUNoRDs7QUFDRDtFQUNFLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLGFBQVk7RUFDWixzQkFBcUIsRUFDdEI7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLG9CQUFtQjtFQUVuQixtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLDBCQzdCYztFRDhCZCxlQ3pCaUI7RUQwQmpCLHNCQUFxQjtFQUNyQixnQkFBZTtFQUNmLGlDQUFnQyxFQWlKakM7O0FBNUpEO0lBYUksMEJDdENjO0lEdUNkLGFBQVk7SUFDWixpQkFBZ0I7SUFDaEIsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLDBCQUFpQjtPQUFqQix1QkFBaUI7UUFBakIsc0JBQWlCO1lBQWpCLGtCQUFpQjtJQUNqQixpQkFBZ0I7SUFFaEIsOENBQTZDO0lBQzdDLGlDQUFnQztJQUNoQywwREFBaUQ7WUFBakQsa0RBQWlELEVBQ2xEOztBQTFCSDtJQTRCSSxjQUFhO0lBQ2IsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsbUJBQWtCO0lBQ2xCLFdBQVUsRUFjWDs7QUEvQ0g7TUFzQ00sbUJBQWtCO01BQ2xCLDZCQzlEVTtNRCtEVixZQUFXO01BQ1gsV0FBVTtNQUNWLG1CQUFrQjtNQUNsQixvQ0FBMkI7Y0FBM0IsNEJBQTJCO01BQzNCLGlDQUFnQyxFQUVqQzs7QUE5Q0w7SUFpREksMEJDeEVZO0lEeUVaLGFBQVk7SUFDWixZQUFXO0lBQ1gsa0JBQWlCO0lBQ2pCLG1CQUFrQjtJQUNsQixtQ0FBMEI7WUFBMUIsMkJBQTBCO0lBQzFCLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsb0VBQTJEO1lBQTNELDREQUEyRCxFQWlCNUQ7O0FBMUVIO01Bd0VNLG1FQUEwRDtjQUExRCwyREFBMEQsRUFDM0Q7O0FBekVMO0lBaUZJLG1CQUFrQjtJQUNsQiw0REFBbUQ7WUFBbkQsb0RBQW1ELEVBbUJwRDs7QUFyR0g7TUFvRk0sZUFBYztNQUNkLFlBQVc7TUFDWCxrQkFBaUI7TUFDakIscUJBQW9CO01BQ3BCLG1CQUFrQjtNQUNsQixnQkFBZSxFQUNoQjs7QUExRkw7TUE0Rk0seUNBQXdDO01BQ3hDLHNCQUFxQjtNQUNyQixrQkFBaUI7TUFDakIsaUJBQWdCO01BQ2hCLFdBQVU7TUFDVixxQkFBb0I7TUFDcEIsdUJBQXNCO01BQ3RCLGlCQUFnQixFQUNqQjs7QUFwR0w7SUF1R0ksaUJBQWdCLEVBOEJqQjs7QUFySUg7TUF5R00saUNBQWdDO01BQ2hDLDREQUFtRDtjQUFuRCxvREFBbUQsRUFDcEQ7O0FBM0dMO01BNkdNLHNCQUFxQjtNQUNyQixtQkFBa0I7TUFDbEIsV0FBVTtNQUNWLGdCQUFlO01BQ2YsaUJBQWdCO01BQ2hCLGlCQUFnQjtNQUNoQiwwQkFBeUI7TUFDekIsdUJBQXNCLEVBQ3ZCOztBQXJITDtNQXVITSxzQkFBcUI7TUFDckIsV0FBVTtNQUNWLGtCQUFpQjtNQUNqQixlQUFjO01BQ2QsaUJBQWdCO01BQ2hCLHFCQUFvQjtNQUNwQixzQkFBcUI7TUFDckIsbUJBQWtCO01BQ2xCLHFCQUFvQjtNQUNwQiw0REFBbUQ7Y0FBbkQsb0RBQW1ELEVBQ3BEOztBQWpJTDtJQXVJSSxlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLGVBQWM7SUFDZCxtQkFBa0I7SUFDbEIsNERBQW1EO1lBQW5ELG9EQUFtRCxFQWdCcEQ7O0FBM0pIO01BNklNLHNCQUFxQjtNQUNyQixZQUFXO01BQ1gsYUFBWTtNQUNaLHNCQUFxQjtNQUNyQiwwQkFBeUI7TUFDekIsaUNBQWdDLEVBUWpDOztBQTFKTDtRQW9KUSxhQUFZO1FBQ1osWUFBVyxFQUNaOztBQXRKUDtRQXdKUSw4QkFBcUI7Z0JBQXJCLHNCQUFxQixFQUN0Qjs7QUFJUDtFQUNJLGlCQUFnQjtFQUFFLDZEQUE2RDtFQUMvRSw4QkFBNkI7RUFBRSwwQkFBMEI7RUFDekQsb0JBQW1CO0VBQUUsd0NBQXdDO0VBQzdELGVBQWM7RUFBRSx1REFBdUQ7RUFDdkUsc0JBQXFCO0VBQUUsc0JBQXNCO0VBQzdDLHFCQUFvQjtFQUNwQixrQkFBaUI7RUFFakIsbUZBRW9DO1VBRnBDLDJFQUVvQyxFQUNyQzs7QUFFRCx1QkFBdUI7O0FBQ3ZCO0VBQ0U7SUFBTyxTQUFTLEVBQUE7RUFDaEI7SUFBSyxZQUFZLEVBQUEsRUFBQTs7QUFGbkI7RUFDRTtJQUFPLFNBQVMsRUFBQTtFQUNoQjtJQUFLLFlBQVksRUFBQSxFQUFBOztBQUVuQjtFQUNFO0lBQVcsMEJBQTBCLEVBQUE7RUFDckM7SUFBTSxrQkFBaUIsRUFBQSxFQUFBOztBQUZ6QjtFQUNFO0lBQVcsMEJBQTBCLEVBQUE7RUFDckM7SUFBTSxrQkFBaUIsRUFBQSxFQUFBOztBQUczQjtFQUNFLGNBQWE7RUFDYixjQUFhO0VBQ2Isa0JBQWlCO0VBQ2pCLG9CQUFtQjtFQUNuQixtQkFBa0IsRUFVbkI7O0FBZkQ7SUFPSSxzQkFBcUI7SUFDckIsbUJBQWtCO0lBQ2xCLGVBQWM7SUFDZCwwQkN0Tlk7SUR1TlosaUJBQWdCO0lBQ2hCLFdBQVU7SUFDVixZQUFXLEVBQ1o7O0FBR0g7RUFDRTtJQUNFLGFBQVk7SUFDWixXQUFVLEVBQUE7RUFFWjtJQUNFLGFBQVk7SUFDWixXQUFVLEVBQUEsRUFBQTs7QUFQZDtFQUNFO0lBQ0UsYUFBWTtJQUNaLFdBQVUsRUFBQTtFQUVaO0lBQ0UsYUFBWTtJQUNaLFdBQVUsRUFBQSxFQUFBOztBQUlkO0VBQ0U7SUFDRSxXQUFVO0lBQ1YsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUFBO0VBRXJCO0lBQ0UsV0FBVTtJQUNWLDRCQUFtQjtZQUFuQixvQkFBbUIsRUFBQSxFQUFBOztBQVB2QjtFQUNFO0lBQ0UsV0FBVTtJQUNWLDRCQUFtQjtZQUFuQixvQkFBbUIsRUFBQTtFQUVyQjtJQUNFLFdBQVU7SUFDViw0QkFBbUI7WUFBbkIsb0JBQW1CLEVBQUEsRUFBQTs7QUFJdkI7RUFDRTtJQUNFLHFDQUE0QjtZQUE1Qiw2QkFBNEI7SUFDNUIsV0FBVSxFQUFBO0VBRVo7SUFDRSxtQ0FBMEI7WUFBMUIsMkJBQTBCO0lBQzFCLFdBQVUsRUFBQSxFQUFBOztBQVBkO0VBQ0U7SUFDRSxxQ0FBNEI7WUFBNUIsNkJBQTRCO0lBQzVCLFdBQVUsRUFBQTtFQUVaO0lBQ0UsbUNBQTBCO1lBQTFCLDJCQUEwQjtJQUMxQixXQUFVLEVBQUEsRUFBQTs7QUFJZDtFQUNFO0lBQ0UsYUFBWTtJQUNaLG1CQUFrQixFQUNuQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vZ2xvYmFsLnNjc3MnO1xuJHRleHQtY2FyZC1zaGlmdDo0NSU7XG4kcm93LWNvbG91bS1icmstcG9pbnQ6ICdtYXgtd2lkdGg6IDEwNDBweCc7XG5cbi5vdmVybGF5IHtcbiAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IC0xO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogJGNvbG9yMjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICAvLyBtYXJnaW4tdG9wOiA3LjklO1xuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuMXMgYm90aCBsZWZ0VG9SaWdodDtcbn1cbi5yb290LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogNTB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW46IDdyZW0gNXJlbSAwIDA7XG59XG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDMwcmVtO1xuICBoZWlnaHQ6IDQ0cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyBwYWRkaW5nOiAxcmVtIDA7XG4gIG1hcmdpbjogMC4xcmVtIDQwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XG4gIGNvbG9yOiAkb2ZmLXdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAxO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIGJveC1zaGFkb3c6IDEuM3JlbSAxLjNyZW0gMS40cmVtIDByZW0gIzg0YTg4YTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAwcyAxIG5vcm1hbCBib3RoO1xuICB9XG4gIC5wcm9maWxlLWxvZ28ge1xuICAgIGhlaWdodDogMTRyZW07XG4gICAgd2lkdGg6IDE0cmVtO1xuICAgIG1hcmdpbi10b3A6IDUuNXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDU7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC8vIHBlcnNwZWN0aXZlOiAxNTAwcHg7XG4gICAgLy8gYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMC40cyAxIG5vcm1hbCBib3RoO1xuICAgIGltZyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXI6IDAuNHJlbSBzb2xpZCAkY29sb3IxO1xuICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLy8gICBwZXJzcGVjdGl2ZTogMTUwMHB4O1xuICAgIH1cbiAgfVxuICAuc3RyaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xuICAgIG1hcmdpbi10b3A6IC0yMHJlbTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTE2ZGVnKTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYW5pbWF0aW9uOiBzdHJpcEFuaW1hdGlvbiAxcyBlYXNlLWluLW91dCAxLjBzIDEgbm9ybWFsIGJvdGg7XG4gICAgLy8gJjo6YWZ0ZXIge1xuICAgIC8vICAgY29udGVudDogJyc7XG4gICAgLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gICB3aWR0aDogMTAwJTtcbiAgICAvLyAgIG1hcmdpbi1sZWZ0OiAtNXJlbTtcbiAgICAvLyAgIG1hcmdpbi10b3A6IC0yMHJlbTtcbiAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gICBvcGFjaXR5OiAwO1xuICAgIC8vICAgdG9wOiAwO1xuICAgIC8vICAgbGVmdDogMDtcbiAgICAvLyB9XG4gICAgJjpob3Zlcjo6YWZ0ZXIge1xuICAgICAgYW5pbWF0aW9uOiBmYWRlTGVmdFRvUmlnaHQgMXMgZWFzZS1pbi1vdXQgMHMgMSBub3JtYWwgYm90aDtcbiAgICB9XG4gIH1cbiAgLy8gLnN0cmlwLWJsb2NrOmhvdmVyIHtcbiAgLy8gICAuc3RyaXA6YWZ0ZXIge1xuICAvLyAgICAgYW5pbWF0aW9uOiBmYWRlTGVmdFRvUmlnaHQgMXMgZWFzZS1pbi1vdXQgMHMgMSBub3JtYWwgYm90aDtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLnNob3J0LWRldGFpbHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAwLjRzIDEgbm9ybWFsIGJvdGg7XG4gICAgLnRhZ0xpbmUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgfVxuICAgIC5xdW90ZSB7XG4gICAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgd2lkdGg6IDY1JTtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgfVxuICB9XG4gIC5kZXRhaWxzIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIC5uYW1lQmxvY2sge1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAwLjFzIDEgbm9ybWFsIGJvdGg7XG4gICAgfVxuICAgIC5uYW1lIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xuICAgIH1cbiAgICAuYmlvIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIG1hcmdpbjogMC40cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd29yZC1zcGFjaW5nOiAwLjJyZW07XG4gICAgICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAwLjNzIDEgbm9ybWFsIGJvdGg7XG4gICAgfVxuICAgIC8vIC5iaW86aG92ZXIge1xuICAgIC8vICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCAwLjJzIGVhc2UtaW4tb3V0IDBzIDEgbm9ybWFsIGJvdGg7XG4gICAgLy8gICAgIH1cbiAgfVxuICAuc29jaWFsIHtcbiAgICBkaXNwbGF5OiBibG9jazsgLy8gcGFkZGluZzogMXJlbSAwO1xuICAgIHBhZGRpbmc6IDByZW0gMXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiAwLjZyZW07XG4gICAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMS4ycyAxIG5vcm1hbCBib3RoO1xuICAgIC5zb2NpYWwtaWNvbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMnJlbTtcbiAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgIG1hcmdpbjogMC4xcmVtIDAuNXJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLnR5cGV3cml0ZXIgcCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogRW5zdXJlcyB0aGUgY29udGVudCBpcyBub3QgcmV2ZWFsZWQgdW50aWwgdGhlIGFuaW1hdGlvbiAqL1xuICAgIGJvcmRlci1yaWdodDogLjEwZW0gc29saWQgcmVkOyAvKiBUaGUgdHlwd3JpdGVyIGN1cnNvciAqL1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIEtlZXBzIHRoZSBjb250ZW50IG9uIGEgc2luZ2xlIGxpbmUgKi9cbiAgICBtYXJnaW46IDEgYXV0bzsgLyogR2l2ZXMgdGhhdCBzY3JvbGxpbmcgZWZmZWN0IGFzIHRoZSB0eXBpbmcgaGFwcGVucyAqL1xuICAgIGxldHRlci1zcGFjaW5nOiAuMTJlbTsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xuICAgIGZvbnQtZmFtaWx5OiBjYWxpYnJpO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGFuaW1hdGlvbjogXG4gICAgICB0eXBpbmcgNC41cyBzdGVwcygzMCwgZW5kKSxcbiAgICAgIGJsaW5rLWNhcmV0IC43NXMgc3RlcC1lbmQgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC8qIFRoZSB0eXBpbmcgZWZmZWN0ICovXG4gIEBrZXlmcmFtZXMgdHlwaW5nIHtcbiAgICBmcm9tIHsgd2lkdGg6IDAgfVxuICAgIHRvIHsgd2lkdGg6IDEwMCUgfVxuICB9XG4gIEBrZXlmcmFtZXMgYmxpbmstY2FyZXQge1xuICAgIGZyb20sIHRvIHsgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB9XG4gICAgNTAlIHsgYm9yZGVyLWNvbG9yOiByZWQ7IH1cbiAgfVxuXG4uZGl2aWRlciB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5zdGljayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDAuMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xuICAgIG1hcmdpbjogMC4xcmVtIDA7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVMZWZ0VG9SaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjE7XG4gICAgbGVmdDogLTEwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgbGVmdDogMTIwJTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRyb3BpbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3RyaXBBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDI1cmVtO1xuICAgIG1hcmdpbjogMC4xcmVtIDEwJTtcbiAgfVxufSIsIiRiZy1jb2xvcjogIzA4NWU3Mjtcbi8vICMxN2E1OTg7XG4kY29sb3IxOiAjZTc0YzNjO1xuJGNvbG9yMjogI2QyZTFkZDtcbiRjb2xvcjM6ICNkYjM4MWI7XG4kZ3JlZW46ICMxN2E1OTg7XG4vLyAkdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiRibGFjazogIzU1NTtcbiRvZmYtd2hpdGU6ICNlOGVlZWE7XG4kdGV4dC1jb2xvcjogcmdiKDczLCAzOSwgMzkpO1xuLy8gIzY5OTtcbiR3aGl0ZTogI2ZmZjtcbiRjb2xvcjQ6IHJnYigyNDcsIDE2OCwgMTY4KTtcbiRjb2xvcjU6ICM1NGE0YWY7Il19 */"

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

module.exports = "\n<section class=\"portfolio-header\">\n    <div class=\"portfolio-selection__fixed\" >\n        <div class=\"navbar\">\n            <div class=\"side-nav-items\">\n                <h3 class=\"nav-item\">Swati Sharma</h3>\n            </div>\n            <div class=\"center-nav-items\">\n                <a [routerLink]=\"['/landing']\" class=\"nav-item\">Home</a>\n                <a [routerLink]=\"['/profiles']\" class=\"nav-item\" >About Me</a>\n                <a [routerLink]=\"['/projects']\" class=\"nav-item\">Projects</a>\n            </div>\n            <div class=\"right-nav-items\">\n                    <a class=\"social-icon\" href=\"https://github.com/swati001/swati001.github.io\" target=\"_blank\">\n                        <img src=\"assets/assert/icons/header-github.png\" alt=\"github icon\">\n                    </a>\n                    <a class=\"social-icon\" href=\"https://www.linkedin.com/in/swati-sharma-aa423b89/\" target=\"_blank\">\n                        <img src=\"assets/assert/icons/header-linkedin.png\" alt=\"linked icon\">\n                    </a>\n                    <a class=\"social-icon\" href=\"https://www.facebook.com/in/swati001/\" target=\"_blank\">\n                        <img src=\"assets/assert/icons/header-facebook.png\" alt=\"facebook icon\">\n                    </a>\n                    <!-- <a class=\"social-icon\" href=\"https://www.facebook.com/in/swati001/\" target=\"_blank\">\n                        <img src=\"assets/assert/icons/header-cv.png\" alt=\"facebook icon\">\n                    </a> -->\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio-header {\n  width: 100%;\n  height: 7rem;\n  display: flex;\n  justify-content: stretch;\n  margin: 0rem 0rem 2rem 0rem;\n  -webkit-animation: 1s ease-in-out 0.2s both rightToLeft;\n          animation: 1s ease-in-out 0.2s both rightToLeft; }\n\n.portfolio-selection__fixed {\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  color: #492727;\n  width: 100%;\n  transition: all 0.3s ease-in-out;\n  -webkit-animation: 1s ease-in-out 0.2s both rightToLeft;\n          animation: 1s ease-in-out 0.2s both rightToLeft; }\n\n.navbar {\n  width: 100%;\n  color: #e8eeea;\n  font-size: 1.5rem;\n  padding: 0.50rem;\n  display: flex;\n  align-items: right;\n  background-color: #17a598; }\n\n.navbar .side-nav-items {\n    display: inline;\n    padding: 0.2rem 0;\n    margin: 0.1rem 1rem;\n    margin-right: 0.321em; }\n\n.navbar .side-nav-items .nav-item {\n      display: inline-block;\n      padding: 0.2rem 0;\n      margin: 0.1rem 1rem;\n      color: #492727;\n      font-family: Brush Script MT, Brush Script Std, cursive; }\n\n.navbar .center-nav-items {\n    display: flex;\n    padding: 0.2rem 0;\n    margin: 0.1rem 29%;\n    margin-right: 0.321em;\n    color: #492727; }\n\n.navbar .center-nav-items .nav-item {\n      display: inline-block;\n      padding: 0.2rem 0rem;\n      margin: 0.1rem 0.75rem;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      cursor: pointer;\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n      color: #492727;\n      text-decoration: none; }\n\n.navbar .center-nav-items .nav-item:hover {\n        color: #e8eeea; }\n\n.navbar .right-nav-items {\n    display: flex;\n    padding: 0.2rem 0;\n    margin: 0.1rem 35%;\n    margin-right: 0.321em;\n    color: #492727; }\n\n.navbar .right-nav-items .social-icon {\n      display: inline-block;\n      width: 1.4rem;\n      height: 1.4rem;\n      margin: 0.1rem 0.2rem;\n      background-color: black;\n      transition: all 0.3s ease-in-out; }\n\n.navbar .right-nav-items .social-icon img {\n        height: 100%;\n        width: 100%; }\n\n.navbar .right-nav-items .social-icon:hover {\n        -webkit-transform: scale(1.3);\n                transform: scale(1.3); }\n\n@media (min-width: 400px) and (max-width: 1300px) {\n  .portfolio-header {\n    flex-direction: column;\n    padding: 0rem 0rem 10rem;\n    height: 7rem; }\n  .center-nav-items {\n    flex-direction: column;\n    font-size: 1.2rem;\n    padding: 0 0; }\n  .right-nav-items {\n    margin: 0.1rem 0.1rem 0.2rem;\n    flex-direction: column; } }\n\n@media screen and (min-width: 1330px) {\n  .right-nav-items {\n    margin: 0.1rem 39%; } }\n\n@media screen and (max-width: 1337px) and (min-width: 768px) {\n  .portfolio-header {\n    flex-direction: column;\n    padding: 0rem 0rem 10rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvZ2xvYmFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGNBQWE7RUFFWCx5QkFBd0I7RUFFMUIsNEJBQTJCO0VBSzNCLHdEQUErQztVQUEvQyxnREFBK0MsRUFDaEQ7O0FBRUE7RUFDRyxnQkFBZTtFQUNmLE9BQU07RUFDTixXQUFVO0VBQ1YsZUNid0I7RURjeEIsWUFBVztFQUNYLGlDQUFnQztFQUNoQyx3REFBK0M7VUFBL0MsZ0RBQStDLEVBQ2xEOztBQUVEO0VBQ0ksWUFBVztFQUNYLGVDdEJlO0VEdUJmLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQiwwQkM5QlcsRUQwRlo7O0FBbkVIO0lBVU0sZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsb0JBQW1CO0lBQ25CLHNCQUFxQixFQVN0Qjs7QUF0Qkw7TUFnQlEsc0JBQXFCO01BQ3JCLGtCQUFpQjtNQUNqQixvQkFBbUI7TUFDbkIsZUN0Q29CO01EdUNwQix3REFBdUQsRUFDeEQ7O0FBckJQO0lBd0JNLGNBQWE7SUFDYixrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLHNCQUFxQjtJQUNyQixlQy9Dc0IsRUQ2RHZCOztBQTFDTDtNQThCUSxzQkFBcUI7TUFDckIscUJBQW9CO01BQ3BCLHVCQUFzQjtNQUN0QiwwQkFBaUI7U0FBakIsdUJBQWlCO1VBQWpCLHNCQUFpQjtjQUFqQixrQkFBaUI7TUFDakIsZ0JBQWU7TUFDZix1RUFBc0U7TUFDdEUsZUN2RG9CO01Ed0RwQixzQkFBcUIsRUFJdEI7O0FBekNQO1FBdUNVLGVDM0RTLEVENERWOztBQXhDVDtJQTZDTSxjQUFhO0lBQ2Isa0JBQWlCO0lBQ2pCLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsZUNwRXNCLEVEcUZ2Qjs7QUFsRUw7TUFvRFEsc0JBQXFCO01BQ25CLGNBQWE7TUFDYixlQUFjO01BQ2Qsc0JBQXFCO01BQ3JCLHdCQUF1QjtNQUN2QixpQ0FBZ0MsRUFRbkM7O0FBakVQO1FBMkRZLGFBQVk7UUFDWixZQUFXLEVBQ1o7O0FBN0RYO1FBK0RZLDhCQUFxQjtnQkFBckIsc0JBQXFCLEVBQ3RCOztBQUtYO0VBQ0U7SUFDRSx1QkFBc0I7SUFDdEIseUJBQXdCO0lBQ3hCLGFBQVksRUFDYjtFQUNEO0lBQ0ksdUJBQXNCO0lBRXRCLGtCQUFpQjtJQUNqQixhQUFZLEVBQ2I7RUFDRDtJQUNFLDZCQUE0QjtJQUM1Qix1QkFBc0IsRUFDdkIsRUFBQTs7QUFHTDtFQVdFO0lBQ0UsbUJBQWtCLEVBRWpCLEVBQUE7O0FBR0w7RUFDRTtJQUNFLHVCQUFzQjtJQUN0Qix5QkFBd0IsRUFDekIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9nbG9iYWwuc2Nzcyc7XG5cblxuLnBvcnRmb2xpby1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgLy8gaGVpZ2h0OiAycmVtO1xuICBtYXJnaW46IDByZW0gMHJlbSAycmVtIDByZW07XG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBmb250LXNpemU6IDEuMnJlbTtcbiAgICAvLyB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjJzIGJvdGggcmlnaHRUb0xlZnQ7XG59XG5cbiAucG9ydGZvbGlvLXNlbGVjdGlvbl9fZml4ZWQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjJzIGJvdGggcmlnaHRUb0xlZnQ7XG59XG4gIFxuLm5hdmJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICRvZmYtd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZzogMC41MHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiByaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XG4gICBcbiAgICAuc2lkZS1uYXYtaXRlbXMge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgcGFkZGluZzogMC4ycmVtIDA7XG4gICAgICBtYXJnaW46IDAuMXJlbSAxcmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjMyMWVtO1xuICAgICAgXG4gICAgICAubmF2LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAuMnJlbSAwO1xuICAgICAgICBtYXJnaW46IDAuMXJlbSAxcmVtO1xuICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBCcnVzaCBTY3JpcHQgTVQsIEJydXNoIFNjcmlwdCBTdGQsIGN1cnNpdmU7XG4gICAgICB9XG4gICAgfVxuICAgIC5jZW50ZXItbmF2LWl0ZW1zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nOiAwLjJyZW0gMDtcbiAgICAgIG1hcmdpbjogMC4xcmVtIDI5JTtcbiAgICAgIG1hcmdpbi1yaWdodDogMC4zMjFlbTtcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMC4ycmVtIDByZW07XG4gICAgICAgIG1hcmdpbjogMC4xcmVtIDAuNzVyZW07XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG4gICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJG9mZi13aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5yaWdodC1uYXYtaXRlbXMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBhZGRpbmc6IDAuMnJlbSAwO1xuICAgICAgbWFyZ2luOiAwLjFyZW0gMzUlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjMyMWVtO1xuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgICAgXG4gICAgICAuc29jaWFsLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEuNHJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDEuNHJlbTtcbiAgICAgICAgICBtYXJnaW46IDAuMXJlbSAwLjJyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLnBvcnRmb2xpby1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMHJlbSAwcmVtIDEwcmVtO1xuICAgIGhlaWdodDogN3JlbTtcbiAgfVxuICAuY2VudGVyLW5hdi1pdGVtcyB7ICAgXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLy8gbWFyZ2luOiAwLjFyZW0gMjYlO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBwYWRkaW5nOiAwIDA7XG4gICAgfVxuICAgIC5yaWdodC1uYXYtaXRlbXMge1xuICAgICAgbWFyZ2luOiAwLjFyZW0gMC4xcmVtIDAuMnJlbTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzMwcHgpIHtcbiAgLy8gLnBvcnRmb2xpby1oZWFkZXIge1xuICAvLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8vICAgLy8gcGFkZGluZzogMHJlbSAwcmVtIDEwcmVtO1xuICAvLyB9XG4gIC8vIC5jZW50ZXItbmF2LWl0ZW1zIHsgICBcbiAgLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8vICAgICBtYXJnaW46IDAuNnJlbSAycmVtO1xuICAvLyAgICAgZm9udC1zaXplOiAxLjByZW07XG4gIC8vICAgICBwYWRkaW5nOiAwIDA7XG4gIC8vICAgfVxuICAucmlnaHQtbmF2LWl0ZW1zIHtcbiAgICBtYXJnaW46IDAuMXJlbSAzOSU7XG4gICAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMzN3B4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnBvcnRmb2xpby1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMHJlbSAwcmVtIDEwcmVtO1xuICB9XG4gIC8vIC5yaWdodC1uYXYtaXRlbXMge1xuICAvLyAgIG1hcmdpbjogMC42cmVtIDIyJTtcbiAgLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8vICAgfVxufSIsIiRiZy1jb2xvcjogIzA4NWU3Mjtcbi8vICMxN2E1OTg7XG4kY29sb3IxOiAjZTc0YzNjO1xuJGNvbG9yMjogI2QyZTFkZDtcbiRjb2xvcjM6ICNkYjM4MWI7XG4kZ3JlZW46ICMxN2E1OTg7XG4vLyAkdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiRibGFjazogIzU1NTtcbiRvZmYtd2hpdGU6ICNlOGVlZWE7XG4kdGV4dC1jb2xvcjogcmdiKDczLCAzOSwgMzkpO1xuLy8gIzY5OTtcbiR3aGl0ZTogI2ZmZjtcbiRjb2xvcjQ6IHJnYigyNDcsIDE2OCwgMTY4KTtcbiRjb2xvcjU6ICM1NGE0YWY7Il19 */"

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

module.exports = ".overlay {\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  z-index: -1;\n  display: block;\n  background: #d2e1dd;\n  position: fixed;\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(2) translate(27vw, -29vh) rotate(335deg);\n          transform: scale(2) translate(27vw, -29vh) rotate(335deg);\n  -webkit-animation: 1s ease-in-out 0.1s both leftToRight;\n          animation: 1s ease-in-out 0.1s both leftToRight; }\n\n.root-container {\n  display: flex;\n  flex-direction: column;\n  height: 50vh;\n  width: 100vw;\n  margin: 7rem 5rem 0 0; }\n\n.profile-image {\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn; }\n\n.container {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: 1.2rem;\n  color: #e8eeea;\n  margin-top: 1%; }\n\n.short-bio {\n  font-size: 1.2rem;\n  padding: 1rem;\n  color: #492727;\n  font-weight: normal;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn; }\n\n.quote {\n  font-family: 'Cormorant Garamond', serif;\n  font-size: 1.2rem;\n  padding: 1rem;\n  padding-top: 0rem;\n  color: #492727;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn; }\n\n.name {\n  font-family: 'Cormorant Garamond', serif;\n  font-size: 2.4rem;\n  font-weight: bold;\n  line-height: 1.6;\n  padding-top: 0.6rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4rem;\n  word-spacing: 0.2rem;\n  text-align: center;\n  margin-bottom: -2.5rem;\n  -webkit-animation: 1s ease-in-out 0.6s both fadeIn;\n          animation: 1s ease-in-out 0.6s both fadeIn; }\n\n.name:hover .strip::after {\n    left: -1rem; }\n\n.name:hover .strip::before {\n    left: 1rem; }\n\n.strip {\n  display: inline-block;\n  position: relative;\n  width: 28rem;\n  margin: auto;\n  margin-bottom: 1rem;\n  -webkit-animation: 1s ease-in-out 0.8s both fadeIn;\n          animation: 1s ease-in-out 0.8s both fadeIn; }\n\n.strip::before {\n    transition: 0.3s all ease-in-out;\n    content: '';\n    position: absolute;\n    display: inline-block;\n    height: 2px;\n    background-color: #e74c3c;\n    margin: 2px 0;\n    width: 100%;\n    margin: auto;\n    top: 0;\n    left: -1rem; }\n\n.strip::after {\n    transition: 0.3s all ease-in-out;\n    position: absolute;\n    display: inline-block;\n    content: '';\n    height: 2px;\n    background-color: #e74c3c;\n    margin: 2px 0;\n    width: 100%;\n    margin: auto;\n    top: 4px;\n    left: 1rem; }\n\n.special-btn {\n  min-width: 8rem;\n  line-height: 1.1;\n  font-size: 1.1rem;\n  padding: 0.5rem;\n  margin-top: 2rem;\n  background-color: #e74c3c;\n  color: #fff;\n  border: none;\n  outline: none;\n  border-radius: 100rem;\n  cursor: pointer;\n  transition: all .3s ease-in-out;\n  -webkit-animation: fadeIn 1s ease-in-out 1s both;\n          animation: fadeIn 1s ease-in-out 1s both;\n  box-shadow: 7px 5px 8px 0 rgba(0, 0, 0, 0.31);\n  position: relative; }\n\n.special-btn span {\n    position: relative;\n    -webkit-transform: translateX(0.7rem);\n            transform: translateX(0.7rem);\n    display: inline-block;\n    transition: all 0.3s ease-in-out; }\n\n.special-btn:hover {\n    background-color: #db381b;\n    -webkit-animation-play-state: paused;\n            animation-play-state: paused; }\n\n.special-btn:hover::after {\n      -webkit-transform: translateX(0.2rem);\n              transform: translateX(0.2rem);\n      opacity: 5; }\n\n.special-btn:hover span {\n      -webkit-transform: translateX(-0.2rem);\n              transform: translateX(-0.2rem); }\n\n.special-btn::after {\n    content: '\\2192';\n    position: relative;\n    opacity: 0;\n    vertical-align: sub;\n    font-size: 1.5rem;\n    line-height: 0;\n    display: inline-block;\n    transition: all 0.3s ease-in-out; }\n\n.link-animation {\n  -webkit-animation: shake 1s ease-in-out 0s 2 normal both;\n          animation: shake 1s ease-in-out 0s 2 normal both; }\n\n@-webkit-keyframes shake {\n  0% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); }\n  10% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  20% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  30% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  40% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  50% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  60% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  70% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  80% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  90% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  100% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); } }\n\n@keyframes shake {\n  0% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); }\n  10% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  20% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  30% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  40% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  50% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  60% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  70% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  80% {\n    -webkit-transform: scale(1.1) rotate(4deg);\n            transform: scale(1.1) rotate(4deg); }\n  90% {\n    -webkit-transform: scale(1.1) rotate(-4deg);\n            transform: scale(1.1) rotate(-4deg); }\n  100% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg); } }\n\n@media screen and (max-width: 600px) {\n  .container {\n    flex-direction: column;\n    margin-top: 2%; }\n  .short-bio {\n    font-size: 0.90rem;\n    padding: 0.50rem;\n    font-weight: bold; }\n  .quote {\n    font-size: 0.90rem;\n    padding: 0.50rem;\n    font-weight: bold; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQWE7RUFDYixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxlQUFjO0VBQ2Qsb0JDTmM7RURPZCxnQkFBZTtFQUNmLFNBQVE7RUFDUixPQUFNO0VBRU4sa0VBQXlEO1VBQXpELDBEQUF5RDtFQUN6RCx3REFBK0M7VUFBL0MsZ0RBQStDLEVBQ2hEOztBQUNEO0VBQ0UsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osYUFBWTtFQUNaLHNCQUFxQixFQUN0Qjs7QUFHRDtFQUNFLG1EQUEwQztVQUExQywyQ0FBMEMsRUFDM0M7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsUUFBTztFQUNQLHVCQUFzQjtFQUN0Qix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsZUM5QmlCO0VEK0JqQixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsY0FBYTtFQUNiLGVDcEMwQjtFRHFDMUIsb0JBQW1CO0VBQ25CLG1EQUEwQztVQUExQywyQ0FBMEMsRUFDM0M7O0FBRUQ7RUFDRSx5Q0FBd0M7RUFDeEMsa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYixrQkFBaUI7RUFDakIsZUM5QzBCO0VEK0MxQixtREFBMEM7VUFBMUMsMkNBQTBDLEVBQzNDOztBQUVEO0VBQ0UseUNBQXdDO0VBQ3hDLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQiwwQkFBeUI7RUFDekIsdUJBQXNCO0VBQ3RCLHFCQUFvQjtFQUNwQixtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLG1EQUEwQztVQUExQywyQ0FBMEMsRUFTM0M7O0FBcEJEO0lBY00sWUFBVyxFQUNaOztBQWZMO0lBaUJNLFdBQVUsRUFDWDs7QUFJTDtFQUNFLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsbURBQTBDO1VBQTFDLDJDQUEwQyxFQTJCM0M7O0FBakNEO0lBUUksaUNBQWdDO0lBQ2hDLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsc0JBQXFCO0lBQ3JCLFlBQVc7SUFDWCwwQkFBeUI7SUFDekIsY0FBYTtJQUNiLFlBQVc7SUFDWCxhQUFZO0lBQ1osT0FBTTtJQUNOLFlBQVcsRUFDWjs7QUFuQkg7SUFxQkksaUNBQWdDO0lBQ2hDLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsWUFBVztJQUNYLFlBQVc7SUFDWCwwQkFBeUI7SUFDekIsY0FBYTtJQUNiLFlBQVc7SUFDWCxhQUFZO0lBQ1osU0FBUTtJQUNSLFdBQVUsRUFDWDs7QUFHSDtFQUNFLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQiwwQkN4SGM7RUR5SGQsWUFBVztFQUNYLGFBQVk7RUFDWixjQUFhO0VBQ2Isc0JBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsZ0NBQStCO0VBQy9CLGlEQUF3QztVQUF4Qyx5Q0FBd0M7RUFDeEMsOENBQTRDO0VBQzVDLG1CQUFrQixFQWlDbkI7O0FBaEREO0lBaUJJLG1CQUFrQjtJQUNsQixzQ0FBNkI7WUFBN0IsOEJBQTZCO0lBQzdCLHNCQUFxQjtJQUNyQixpQ0FBZ0MsRUFDakM7O0FBckJIO0lBdUJJLDBCQ3ZJWTtJRHdJWixxQ0FBNEI7WUFBNUIsNkJBQTRCLEVBUTdCOztBQWhDSDtNQTBCTSxzQ0FBNkI7Y0FBN0IsOEJBQTZCO01BQzdCLFdBQVUsRUFDWDs7QUE1Qkw7TUE4Qk0sdUNBQThCO2NBQTlCLCtCQUE4QixFQUMvQjs7QUEvQkw7SUFzQ0ksaUJBQWdCO0lBQ2hCLG1CQUFrQjtJQUNsQixXQUFVO0lBQ1Ysb0JBQW1CO0lBQ25CLGtCQUFpQjtJQUNqQixlQUFjO0lBRWQsc0JBQXFCO0lBQ3JCLGlDQUFnQyxFQUNqQzs7QUFHSDtFQUNFLHlEQUFnRDtVQUFoRCxpREFBZ0QsRUFDakQ7O0FBRUQ7RUFDSTtJQUNFLHlDQUFnQztZQUFoQyxpQ0FBZ0MsRUFBQTtFQUVsQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUVwQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUVwQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUVwQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUVwQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLHlDQUFnQztZQUFoQyxpQ0FBZ0MsRUFBQSxFQUFBOztBQWhDdEM7RUFDSTtJQUNFLHlDQUFnQztZQUFoQyxpQ0FBZ0MsRUFBQTtFQUVsQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUVwQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUVwQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUVwQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUVwQztJQUNFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUVyQztJQUNFLHlDQUFnQztZQUFoQyxpQ0FBZ0MsRUFBQSxFQUFBOztBQUlwQztFQUNFO0lBQ0UsdUJBQXNCO0lBQ3RCLGVBQWMsRUFDZjtFQUNEO0lBQ0UsbUJBQWtCO0lBQ2xCLGlCQUFnQjtJQUNoQixrQkFBaUIsRUFFbEI7RUFDRDtJQUNFLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFFaEIsa0JBQWlCLEVBQ2xCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9nbG9iYWwuc2Nzcyc7XG4kc21fYnJlYWtfcG9pbnQ6NTYwcHg7XG5cbi5vdmVybGF5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAtMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICRjb2xvcjI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgLy8gY2xpcC1wYXRoOiBjaXJjbGUoNjAlIDQwJSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMikgdHJhbnNsYXRlKDI3dncsIC0yOXZoKSByb3RhdGUoMzM1ZGVnKTtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjFzIGJvdGggbGVmdFRvUmlnaHQ7XG59XG4ucm9vdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDUwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWFyZ2luOiA3cmVtIDVyZW0gMCAwO1xufVxuXG5cbi5wcm9maWxlLWltYWdlIHtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjJzIGJvdGggZmFkZUluO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAkb2ZmLXdoaXRlO1xuICBtYXJnaW4tdG9wOiAxJTtcbn1cblxuLnNob3J0LWJpbyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4ycyBib3RoIGZhZGVJbjtcbn1cblxuLnF1b3RlIHtcbiAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAwcmVtO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4ycyBib3RoIGZhZGVJbjtcbn1cblxuLm5hbWUge1xuICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIHBhZGRpbmctdG9wOiAwLjZyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRyZW07XG4gIHdvcmQtc3BhY2luZzogMC4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IC0yLjVyZW07XG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC42cyBib3RoIGZhZGVJbjtcbiAgJjpob3ZlciB7XG4gICAgLnN0cmlwOjphZnRlciB7XG4gICAgICBsZWZ0OiAtMXJlbTtcbiAgICB9XG4gICAgLnN0cmlwOjpiZWZvcmUge1xuICAgICAgbGVmdDogMXJlbTtcbiAgICB9XG4gIH1cbn1cblxuLnN0cmlwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyOHJlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuOHMgYm90aCBmYWRlSW47XG4gICY6OmJlZm9yZSB7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICAgIG1hcmdpbjogMnB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMXJlbTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb250ZW50OiAnJztcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICAgIG1hcmdpbjogMnB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogNHB4O1xuICAgIGxlZnQ6IDFyZW07XG4gIH1cbn1cblxuLnNwZWNpYWwtYnRuIHtcbiAgbWluLXdpZHRoOiA4cmVtO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMDByZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgZWFzZS1pbi1vdXQgMXMgYm90aDtcbiAgYm94LXNoYWRvdzogN3B4IDVweCA4cHggMCByZ2JhKDAsIDAsIDAsIC4zMSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgc3BhbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjdyZW0pO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IzO1xuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuMnJlbSk7XG4gICAgICBvcGFjaXR5OiA1O1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4ycmVtKTtcbiAgICB9XG4gIH1cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbi8vICAgICBib3gtc2hhZG93OiA0cHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMxKTtcbi8vICAgfVxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJ1xcMjE5Mic7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjVweCk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbi5saW5rLWFuaW1hdGlvbiB7XG4gIGFuaW1hdGlvbjogc2hha2UgMXMgZWFzZS1pbi1vdXQgMHMgMiBub3JtYWwgYm90aDtcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XG4gICAgfVxuICAgIDkwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIH1cbiAgICAuc2hvcnQtYmlve1xuICAgICAgZm9udC1zaXplOiAwLjkwcmVtO1xuICAgICAgcGFkZGluZzogMC41MHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgLy8gY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIH1cbiAgICAucXVvdGUge1xuICAgICAgZm9udC1zaXplOiAwLjkwcmVtO1xuICAgICAgcGFkZGluZzogMC41MHJlbTtcbiAgICAgIC8vIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfSIsIiRiZy1jb2xvcjogIzA4NWU3Mjtcbi8vICMxN2E1OTg7XG4kY29sb3IxOiAjZTc0YzNjO1xuJGNvbG9yMjogI2QyZTFkZDtcbiRjb2xvcjM6ICNkYjM4MWI7XG4kZ3JlZW46ICMxN2E1OTg7XG4vLyAkdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiRibGFjazogIzU1NTtcbiRvZmYtd2hpdGU6ICNlOGVlZWE7XG4kdGV4dC1jb2xvcjogcmdiKDczLCAzOSwgMzkpO1xuLy8gIzY5OTtcbiR3aGl0ZTogI2ZmZjtcbiRjb2xvcjQ6IHJnYigyNDcsIDE2OCwgMTY4KTtcbiRjb2xvcjU6ICM1NGE0YWY7Il19 */"

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

module.exports = "<div class=\"profile-logo\" [ngStyle]=\"logoStyles\">\n  <img [ngStyle]=\"imgStyle\" src=\"assets/images/profile-pic.png\" alt=\"Swati Sharma\"/>\n</div>"

/***/ }),

/***/ "./src/app/profile-pic/profile-pic.component.scss":
/*!********************************************************!*\
  !*** ./src/app/profile-pic/profile-pic.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-logo {\n  height: 12rem;\n  width: 12rem;\n  display: inline-block;\n  position: relative;\n  border-radius: 50%;\n  -webkit-perspective: 40rem;\n          perspective: 40rem; }\n  .profile-logo img {\n    position: relative;\n    border: 0.4rem solid #e74c3c;\n    height: 100%;\n    width: 100%;\n    border-radius: 50%;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 40rem;\n            perspective: 40rem; }\n  @media screen and (max-width: 600px) {\n  .profile-logo {\n    flex-direction: column; }\n    .profile-logo img {\n      height: 70%;\n      width: 70%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvcHJvZmlsZS1waWMvcHJvZmlsZS1waWMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc3NoYXJtYTAwMS9Eb2N1bWVudHMvTXlQcm9qZWN0cy9hbmd1bGFyLXBvcnRmb2xpby9zcmMvYXBwL2dsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBYTtFQUNiLGFBQVk7RUFFWixzQkFBcUI7RUFDckIsbUJBQWtCO0VBRWxCLG1CQUFrQjtFQUNsQiwyQkFBa0I7VUFBbEIsbUJBQWtCLEVBYW5CO0VBckJEO0lBWUksbUJBQWtCO0lBQ2xCLDZCQ2JZO0lEY1osYUFBWTtJQUNaLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsb0NBQTJCO1lBQTNCLDRCQUEyQjtJQUUzQiwyQkFBa0I7WUFBbEIsbUJBQWtCLEVBQ25CO0VBR0g7RUFDRTtJQUNFLHVCQUFzQixFQU12QjtJQVBEO01BSUUsWUFBVztNQUNYLFdBQVUsRUFDVCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS1waWMvcHJvZmlsZS1waWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9nbG9iYWwnO1xuXG4ucHJvZmlsZS1sb2dvIHtcbiAgaGVpZ2h0OiAxMnJlbTtcbiAgd2lkdGg6IDEycmVtO1xuICAvLyBtYXJnaW4tdG9wOiAycmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gei1pbmRleDogNTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwZXJzcGVjdGl2ZTogNDByZW07XG4gIC8vIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICAvLyBhbmltYXRpb246IGZhZGVpbiAxcyAwLjJzIDEgbm9ybWFsIGJvdGg7XG4gIGltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogMC40cmVtIHNvbGlkICRjb2xvcjE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLy8gdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgcGVyc3BlY3RpdmU6IDQwcmVtO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5wcm9maWxlLWxvZ28gIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vIHBhZGRpbmc6IDJyZW0gMnJlbTtcbiAgICBpbWcge1xuICAgIGhlaWdodDogNzAlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICB9XG59IiwiJGJnLWNvbG9yOiAjMDg1ZTcyO1xuLy8gIzE3YTU5ODtcbiRjb2xvcjE6ICNlNzRjM2M7XG4kY29sb3IyOiAjZDJlMWRkO1xuJGNvbG9yMzogI2RiMzgxYjtcbiRncmVlbjogIzE3YTU5ODtcbi8vICR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrOiAjNTU1O1xuJG9mZi13aGl0ZTogI2U4ZWVlYTtcbiR0ZXh0LWNvbG9yOiByZ2IoNzMsIDM5LCAzOSk7XG4vLyAjNjk5O1xuJHdoaXRlOiAjZmZmO1xuJGNvbG9yNDogcmdiKDI0NywgMTY4LCAxNjgpO1xuJGNvbG9yNTogIzU0YTRhZjsiXX0= */"

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

module.exports = "  <span class=\"overlay\"></span>\n  <div class=\"container\">\n    <section class=\"side1\">\n      <div class=\"text-container\">\n          <h4 class=\"text-header\">A little bit about myself</h4>\n        <p>\n          I have 10 years of experience in software engineering. I have worked as a software developer for different clients\n          and also gained experience in software automation testing. I started programming with Java and J2EE in 2008 and I learned about different tools\n          while working on different projects. I gained experience in Ruby, AngularJS, node.js. \n        </p>\n          <p>\n          I jumped into software automation in 2014 for building a frameowrk in Java. I love working on new skills and technologies and resolving problems.\n          In Software automation field, I got opportunity to work on Capybara, Calabash, Appium, Selenium, Cucumber.\n          I like to build frameowrks and tools to help teams and to gain experience with software architecture.\n        </p>\n        <br>\n        <h4>Highlights:</h4>\n         \n            <ul>\n              <li> Built a project dashboard using Struts/JSP for my first project, which checks the status of servers using cron jobs and triggers the mail. </li>\n              <li> Built a crawler script in Java to check each and every link of Web Application and stores the status in desired format.</li>\n              <li> Built ruby custom gems for different teams to use, for creating customers data to be used in login purpose.</li>\n            </ul>\n        \n        <br>\n        <p>\n          Apart from programming, I like to play badminton, baking and watch documentries about universe/planets.\n        </p>\n      </div>\n    </section>\n    <section class=\"side2\">\n      <div class=\"skill-container\">\n        <h4 class=\"skill-header\">\n            My core skill  and strengths<a [routerLink]=\"['/skillpercent']\" class=\"percent\">(see in percents)</a>\n        </h4>\n        <div *ngFor=\"let profile of profiles\">\n          <h4 class=\"skill-type\">{{profile.type}}</h4>\n          <h4 class=\"skill-names\">{{profile.name.join(', ')}}</h4>\n        </div>\n      </div>\n      \n    </section>\n  </div> "

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\n  display: inline-block;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  left: -100%;\n  position: fixed;\n  background: #d2e1dd;\n  -webkit-transform: scale(2) skew(-8deg);\n          transform: scale(2) skew(-8deg);\n  z-index: -1;\n  transition: 0.3s all ease-in-out;\n  margin-top: 0.25rem;\n  padding: 0rem; }\n\n.container {\n  font-size: 1.2rem;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  color: #492727;\n  transition: all 0.5s ease-in-out;\n  margin-top: 0.25rem;\n  padding: 0rem; }\n\n.container .side1 {\n    flex: 1;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding-top: 5.0rem;\n    padding-left: 2.5rem; }\n\n@media (max-width: 1040px) {\n      .container .side1 {\n        flex: none;\n        height: auto;\n        padding-top: 70rem; } }\n\n.container .side1 > h1 {\n      margin-bottom: 0;\n      padding: 3rem 0.8rem 0.2rem;\n      font-size: 3rem; }\n\n.container .side2 {\n    flex: 1;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding-top: 5.0rem; }\n\n@media (max-width: 1040px) {\n      .container .side2 {\n        flex: none;\n        height: auto; } }\n\n.text-container {\n  height: auto;\n  max-width: 35rem;\n  background-color: #54a4af;\n  padding: 3rem 1.8rem;\n  padding-top: 2.0rem;\n  border-radius: 2rem;\n  min-width: 35rem;\n  align-items: center;\n  font-size: 1.1rem;\n  box-shadow: 0.22rem 0.22rem 0.25rem 0.25rem #085e72; }\n\n.dp-logo {\n  font-size: 1.6rem;\n  -webkit-transform: translate(0, 45%);\n          transform: translate(0, 45%);\n  height: 10rem;\n  width: 10rem;\n  display: flex;\n  align-items: center; }\n\n.skill-container {\n  padding: 1rem 1.8rem;\n  margin-left: 5rem;\n  background: #d2e1dd;\n  padding-top: 2.0rem;\n  border-radius: 2rem;\n  min-width: 35rem;\n  height: auto;\n  max-width: 35rem;\n  align-items: right;\n  color: #492727;\n  box-shadow: 0.22rem 0.22rem 0.25rem 0.25rem #492727; }\n\n@media (max-width: 1040px) {\n    .skill-container {\n      margin: auto; } }\n\n.text-header {\n  margin: 2rem 0;\n  margin-bottom: 3.8rem;\n  position: relative;\n  letter-spacing: 2px;\n  padding-bottom: 0rem;\n  font-size: 1.8rem;\n  font-family: Brush Script MT, Brush Script Std, cursive;\n  justify-content: flex-start; }\n\n.text-header:after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 100%;\n    height: 3px;\n    top: 100%;\n    left: 0;\n    background: #db381b; }\n\n.skill-header {\n  margin: 2rem 0;\n  margin-bottom: 3.8rem;\n  position: relative;\n  letter-spacing: 2px;\n  padding-bottom: 0rem;\n  font-size: 1.8rem;\n  font-family: Brush Script MT, Brush Script Std, cursive;\n  justify-content: flex-start; }\n\n.skill-header .percent {\n    font-size: 1rem;\n    font-family: 'Times New Roman', Times, serif; }\n\n.skill-header:after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 100%;\n    height: 3px;\n    top: 100%;\n    left: 0;\n    background: #db381b; }\n\n.skill-type {\n  position: relative;\n  margin: 1.2rem 0;\n  padding-bottom: 0.2rem;\n  font-size: 1.2rem; }\n\n.skill-type:after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 70%;\n    height: 1.5px;\n    top: 100%;\n    left: 0;\n    background: #699; }\n\n.skill-names {\n  margin-left: 2.8rem;\n  margin-bottom: 2rem;\n  margin-top: -0.6rem; }\n\n@media screen and (max-width: 1040px) {\n  .container {\n    flex-direction: column;\n    margin-top: 2%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFxQjtFQUNyQixjQUFhO0VBQ2IsYUFBWTtFQUNaLE9BQU07RUFDTixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixvQkNSYztFRFNkLHdDQUErQjtVQUEvQixnQ0FBK0I7RUFDL0IsWUFBVztFQUNYLGlDQUFnQztFQUNoQyxvQkFBbUI7RUFDbkIsY0FBYSxFQUNkOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYixhQUFZO0VBQ1osY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiw4QkFBNkI7RUFDN0IsZUNqQjBCO0VEa0IxQixpQ0FBZ0M7RUFDaEMsb0JBQW1CO0VBQ25CLGNBQWEsRUErQmQ7O0FBekNEO0lBYUksUUFBTztJQUNQLGFBQVk7SUFDWixjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLG9CQUFtQjtJQUNuQixxQkFBb0IsRUFXckI7O0FBVkM7TUFuQko7UUFvQk0sV0FBVTtRQUNWLGFBQVk7UUFDWixtQkFBa0IsRUFPckIsRUFBQTs7QUE3Qkg7TUF5Qk0saUJBQWdCO01BQ2hCLDRCQUEyQjtNQUMzQixnQkFBZSxFQUNoQjs7QUE1Qkw7SUErQkksUUFBTztJQUNQLGFBQVk7SUFDWixjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLG9CQUFtQixFQUtwQjs7QUFKQztNQXBDSjtRQXFDTSxXQUFVO1FBQ1YsYUFBWSxFQUVmLEVBQUE7O0FBR0g7RUFDRSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLDBCQ3BEYztFRHFEZCxxQkFBb0I7RUFDcEIsb0JBQW1CO0VBQ25CLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixvREN4RWdCLEVEeUVqQjs7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQixxQ0FBNEI7VUFBNUIsNkJBQTRCO0VBQzVCLGNBQWE7RUFDYixhQUFZO0VBQ1osY0FBYTtFQUNiLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLHFCQUFvQjtFQUNwQixrQkFBaUI7RUFDakIsb0JDcEZjO0VEcUZkLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLGVDckYwQjtFRHNGMUIsb0RDdEYwQixFRDBGM0I7O0FBSEM7SUFaRjtNQWFJLGFBQVksRUFFZixFQUFBOztBQUVEO0VBQ0ksZUFBYztFQUNkLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLHFCQUFvQjtFQUNwQixrQkFBaUI7RUFDakIsd0RBQXVEO0VBQ3ZELDRCQUEyQixFQVc5Qjs7QUFuQkQ7SUFVSSxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLHNCQUFxQjtJQUNyQixZQUFXO0lBQ1gsWUFBVztJQUNYLFVBQVM7SUFDVCxRQUFPO0lBQ1Asb0JDbEhZLEVEbUhiOztBQUVIO0VBQ0UsZUFBYztFQUNkLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLHFCQUFvQjtFQUNwQixrQkFBaUI7RUFDakIsd0RBQXVEO0VBQ3ZELDRCQUEyQixFQWU1Qjs7QUF2QkQ7SUFVSSxnQkFBZTtJQUNmLDZDQUE0QyxFQUM3Qzs7QUFaSDtJQWNJLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsc0JBQXFCO0lBQ3JCLFlBQVc7SUFDWCxZQUFXO0lBQ1gsVUFBUztJQUNULFFBQU87SUFDUCxvQkMxSVksRUQySWI7O0FBR0g7RUFDRSxtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLHVCQUFzQjtFQUN0QixrQkFBaUIsRUFXbEI7O0FBZkQ7SUFNSSxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLHNCQUFxQjtJQUNyQixXQUFVO0lBQ1YsY0FBYTtJQUNiLFVBQVM7SUFDVCxRQUFPO0lBQ1AsaUJBQWdCLEVBQ2pCOztBQUdIO0VBQ0Usb0JBQW1CO0VBQ25CLG9CQUFtQjtFQUNuQixvQkFBbUIsRUFDcEI7O0FBR0Q7RUFDRTtJQUNFLHVCQUFzQjtJQUN0QixlQUFjLEVBQ2YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL2dsb2JhbCc7XG4kdGV4dC1jYXJkLXNoaWZ0OjIwJTtcbiRyb3ctY29sb3VtLWJyay1wb2ludDogJ21heC13aWR0aDogMTA0MHB4JztcblxuLm92ZXJsYXkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiAkY29sb3IyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpIHNrZXcoLThkZWcpO1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIHBhZGRpbmc6IDByZW07XG59XG5cbi5jb250YWluZXIge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZzogMHJlbTtcbiBcbiAgLnNpZGUxIHtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy10b3A6IDUuMHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgICBAbWVkaWEgKCRyb3ctY29sb3VtLWJyay1wb2ludCkge1xuICAgICAgZmxleDogbm9uZTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHBhZGRpbmctdG9wOiA3MHJlbTtcbiAgICB9XG4gICAgJj5oMSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgcGFkZGluZzogM3JlbSAwLjhyZW0gMC4ycmVtO1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIH1cbiAgfVxuICAuc2lkZTIge1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLXRvcDogNS4wcmVtO1xuICAgIEBtZWRpYSAoJHJvdy1jb2xvdW0tYnJrLXBvaW50KSB7XG4gICAgICBmbGV4OiBub25lO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG4udGV4dC1jb250YWluZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjU7XG4gIHBhZGRpbmc6IDNyZW0gMS44cmVtO1xuICBwYWRkaW5nLXRvcDogMi4wcmVtO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBtaW4td2lkdGg6IDM1cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgYm94LXNoYWRvdzogMC4yMnJlbSAwLjIycmVtIDAuMjVyZW0gMC4yNXJlbSAkYmctY29sb3I7XG59XG5cbi5kcC1sb2dvIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDQ1JSk7XG4gIGhlaWdodDogMTByZW07XG4gIHdpZHRoOiAxMHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNraWxsLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDFyZW0gMS44cmVtO1xuICBtYXJnaW4tbGVmdDogNXJlbTtcbiAgYmFja2dyb3VuZDogJGNvbG9yMjtcbiAgcGFkZGluZy10b3A6IDIuMHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgbWluLXdpZHRoOiAzNXJlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDM1cmVtO1xuICBhbGlnbi1pdGVtczogcmlnaHQ7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgYm94LXNoYWRvdzogMC4yMnJlbSAwLjIycmVtIDAuMjVyZW0gMC4yNXJlbSAkdGV4dC1jb2xvcjtcbiAgQG1lZGlhICgkcm93LWNvbG91bS1icmstcG9pbnQpIHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cblxuLnRleHQtaGVhZGVyIHtcbiAgICBtYXJnaW46IDJyZW0gMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjhyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDByZW07XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgZm9udC1mYW1pbHk6IEJydXNoIFNjcmlwdCBNVCwgQnJ1c2ggU2NyaXB0IFN0ZCwgY3Vyc2l2ZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4mOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogM3B4O1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6ICRjb2xvcjM7XG4gIH1cbn1cbi5za2lsbC1oZWFkZXIge1xuICBtYXJnaW46IDJyZW0gMDtcbiAgbWFyZ2luLWJvdHRvbTogMy44cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcmVtO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1mYW1pbHk6IEJydXNoIFNjcmlwdCBNVCwgQnJ1c2ggU2NyaXB0IFN0ZCwgY3Vyc2l2ZTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAucGVyY2VudCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yMztcbiAgfVxufVxuXG4uc2tpbGwtdHlwZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxLjJyZW0gMDtcbiAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDEuNXB4O1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6ICM2OTk7XG4gIH1cbn1cblxuLnNraWxsLW5hbWVzIHtcbiAgbWFyZ2luLWxlZnQ6IDIuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgbWFyZ2luLXRvcDogLTAuNnJlbTtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDQwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgfVxufSIsIiRiZy1jb2xvcjogIzA4NWU3Mjtcbi8vICMxN2E1OTg7XG4kY29sb3IxOiAjZTc0YzNjO1xuJGNvbG9yMjogI2QyZTFkZDtcbiRjb2xvcjM6ICNkYjM4MWI7XG4kZ3JlZW46ICMxN2E1OTg7XG4vLyAkdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiRibGFjazogIzU1NTtcbiRvZmYtd2hpdGU6ICNlOGVlZWE7XG4kdGV4dC1jb2xvcjogcmdiKDczLCAzOSwgMzkpO1xuLy8gIzY5OTtcbiR3aGl0ZTogI2ZmZjtcbiRjb2xvcjQ6IHJnYigyNDcsIDE2OCwgMTY4KTtcbiRjb2xvcjU6ICM1NGE0YWY7Il19 */"

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

module.exports = "<!-- <div class=\"portfolio-bg\"> -->\n<div class=\"portfolio-bg\">\n<div class=\"project-container\">\n  <!-- <app-tags></app-tags> -->\n  <div *ngFor=\"let proj of projects.slice().reverse()\" class=\"project-card\">\n    <div class=\"card-outer\">\n      <span class=\"card card__front\">\n        <div class=\"card-container\">\n          <h4 class=\"card-header\">{{proj.name}}</h4>\n          <span class=\"image\"><img src={{proj.imageLink}}/></span>\n          <!-- <div>\n            <p class=\"card-short-details\" >\n              {{proj.description}}\n            </p>\n          </div> -->\n          <div class=\"card-short-details\">\n              {{proj.description}}\n              <div class=\"tech-stuff-details\">\n                <br>\n                <span>What I learned: </span>\n                <p>{{proj.features}}</p>\n                <br><br>\n                <span>Tech Stuff: </span>\n                <br>\n                <p>{{proj.techStuff}} </p>\n              </div>\n            </div>\n        </div>\n      </span>\n      \n  </div>\n</div>\n</div>\n</div>\n \n\n\n"

/***/ }),

/***/ "./src/app/project/project.component.scss":
/*!************************************************!*\
  !*** ./src/app/project/project.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio-bg {\n  min-height: 100vh;\n  min-width: 100vw;\n  position: absolute;\n  overflow: hidden;\n  display: inline-block; }\n\n.portfolio-container {\n  padding: 3.5rem;\n  flex-direction: column;\n  color: #492727; }\n\n.card-outer {\n  position: relative;\n  font-family: Times;\n  font-weight: normal;\n  color: #492727;\n  cursor: pointer;\n  transition: all 0s ease-in-out; }\n\n.card-outer span {\n    -webkit-transform: translateX(0.7rem);\n            transform: translateX(0.7rem);\n    display: inline-block;\n    transition: all 0s ease-in-out; }\n\n.card {\n  width: 100%;\n  min-width: 18rem;\n  min-height: 18rem;\n  background-color: #e8eeea;\n  border-radius: 0.6rem;\n  overflow: hidden;\n  box-shadow: 0.35rem 0.35rem 0.35rem #492727;\n  transition: 0.8s ease-in-out;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.card.card__featured::before {\n    content: '\\269D';\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    font-size: 1.2rem;\n    padding: 0 0.4rem; }\n\n.card .card-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 0.6rem 1.6rem;\n    width: 100%;\n    height: 100%; }\n\n.card .card-container .image {\n      height: 10rem;\n      width: 12rem;\n      margin-top: 1rem;\n      display: inline-block;\n      position: relative;\n      margin-right: 2rem; }\n\n.card .card-container .image img {\n        position: relative;\n        border: 0.2rem solid #e8eeea;\n        box-shadow: 0.3rem 0.3rem 0.25rem rgba(1, 48, 54, 0.3);\n        height: 100%;\n        width: 100%; }\n\n.card .card-container .card-header {\n      font-family: cursive;\n      width: 100%;\n      font-size: 1.5rem;\n      margin: 1rem 0;\n      font-weight: bold;\n      margin: 1rem 0; }\n\n.card .card-container .card-header::before {\n        content: '';\n        position: absolute;\n        display: inline-block;\n        width: 100%;\n        height: 1rem;\n        top: 0rem;\n        left: 0;\n        background: #17a598;\n        border-radius: 0.25rem; }\n\n.card .card-container .card-short-details {\n      width: 100%;\n      flex: 1;\n      font-size: 1.2rem;\n      margin: 0.6rem 0;\n      color: #492727; }\n\n.card .card-container .tech-stuff-details > span {\n      font-weight: bold;\n      display: inline-block; }\n\n.card .card-container .tech-stuff-details > p {\n      display: inline;\n      margin-left: 0.3rem;\n      word-break: break-word; }\n\n.project-container {\n  width: 100%;\n  flex-wrap: wrap;\n  align-items: center;\n  transition: all 0.5s ease-in-out;\n  padding-bottom: 0rem; }\n\n.project-container .project-card {\n    margin: 2rem 6rem 0rem 6rem;\n    padding: 0rem;\n    transition: all 0.5s ease-in-out; }\n\n@-webkit-keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%; }\n  100% {\n    opacity: 0.7;\n    left: 120%; } }\n\n@keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%; }\n  100% {\n    opacity: 0.7;\n    left: 120%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLHVCQUFzQjtFQUN0QixlQ1AwQixFRFEzQjs7QUFjRDtFQUNFLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGVDMUIwQjtFRDJCMUIsZ0JBQWU7RUFDZiwrQkFBOEIsRUFPL0I7O0FBYkQ7SUFTSSxzQ0FBNkI7WUFBN0IsOEJBQTZCO0lBQzdCLHNCQUFxQjtJQUNyQiwrQkFBOEIsRUFDL0I7O0FBR0g7RUFDRSxZQUFXO0VBQ1gsaUJBN0NlO0VBOENmLGtCQS9DZ0I7RUFnRGhCLDBCQzFDaUI7RUQyQ2pCLHNCQUFxQjtFQUNyQixpQkFBZ0I7RUFDaEIsNENDNUMwQjtFRDZDMUIsNkJBQTRCO0VBQzVCLG9DQUEyQjtVQUEzQiw0QkFBMkI7RUFDM0IsMEJBQWlCO0tBQWpCLHVCQUFpQjtNQUFqQixzQkFBaUI7VUFBakIsa0JBQWlCLEVBNkZsQjs7QUF2R0Q7SUEwQk0saUJBQWdCO0lBQ2hCLG1CQUFrQjtJQUNsQixPQUFNO0lBQ04sUUFBTztJQUNQLFdBQVU7SUFDVixrQkFBaUI7SUFDakIsa0JBQWlCLEVBRWxCOztBQWxDTDtJQXNDSSxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLGdCQUFlO0lBQ2YsdUJBQXNCO0lBQ3RCLFlBQVc7SUFDWCxhQUFZLEVBMkRiOztBQXRHSDtNQTZDTSxjQUFhO01BQ2IsYUFBWTtNQUNaLGlCQUFnQjtNQUNoQixzQkFBcUI7TUFDckIsbUJBQWtCO01BQ2xCLG1CQUFrQixFQVFuQjs7QUExREw7UUFvRFEsbUJBQWtCO1FBQ2xCLDZCQzNGVztRRDRGWCx1REFBZ0Q7UUFDaEQsYUFBWTtRQUNaLFlBQVcsRUFDWjs7QUF6RFA7TUE2RE0scUJBQW9CO01BQ3BCLFlBQVc7TUFDWCxrQkFBaUI7TUFDakIsZUFBYztNQUNkLGtCQUFpQjtNQUNqQixlQUFjLEVBWWY7O0FBOUVMO1FBb0VRLFlBQVc7UUFDWCxtQkFBa0I7UUFDbEIsc0JBQXFCO1FBQ3JCLFlBQVc7UUFDWCxhQUFZO1FBQ1osVUFBUztRQUNULFFBQU87UUFDUCxvQkNwSE87UURxSFAsdUJBQXNCLEVBQ3ZCOztBQTdFUDtNQWlGTSxZQUFXO01BQ1gsUUFBTztNQUNQLGtCQUFpQjtNQUNqQixpQkFBZ0I7TUFDaEIsZUMxSHNCLEVEMkh2Qjs7QUF0Rkw7TUEwRlEsa0JBQWlCO01BQ2pCLHNCQUFxQixFQUN0Qjs7QUE1RlA7TUErRlEsZ0JBQWU7TUFDZixvQkFBbUI7TUFDbkIsdUJBQXNCLEVBQ3ZCOztBQU9QO0VBQ0UsWUFBVztFQUNYLGdCQUFlO0VBQ2Ysb0JBQW1CO0VBQ25CLGlDQUFnQztFQUNoQyxxQkFBb0IsRUFPckI7O0FBWkQ7SUFPSSw0QkFBMkI7SUFDM0IsY0FBYTtJQUNiLGlDQUFnQyxFQUVqQzs7QUFJSDtFQUNBO0lBQ0UsYUFBWTtJQUNaLFdBQVUsRUFBQTtFQUVaO0lBQ0UsYUFBWTtJQUNaLFdBQVUsRUFBQSxFQUFBOztBQVBaO0VBQ0E7SUFDRSxhQUFZO0lBQ1osV0FBVSxFQUFBO0VBRVo7SUFDRSxhQUFZO0lBQ1osV0FBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9nbG9iYWwuc2Nzcyc7XG5cbiRtaW4taGVpZ2h0OiAxOHJlbTtcbiRtaW4td2lkdGg6IDE4cmVtO1xuXG4ucG9ydGZvbGlvLWJnIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMuNXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xufVxuXG4vLyBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbi8vICAgLnBvcnRmb2xpby1jb250YWluZXIge1xuLy8gICAgIHBhZGRpbmc6IDMuNXJlbSAwLjVyZW07XG4vLyAgIH1cbi8vIH1cblxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDc0cmVtKSB7XG4vLyAgIC5wb3J0Zm9saW8taGVhZGVyIHtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICB9XG4vLyB9XG5cbi5jYXJkLW91dGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogVGltZXM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMHMgZWFzZS1pbi1vdXQ7XG4gIC8vIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2UtaW4tb3V0IDFzIGJvdGg7XG4gIHNwYW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjdyZW0pO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMHMgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAkbWluLXdpZHRoO1xuICBtaW4taGVpZ2h0OiAkbWluLWhlaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9mZi13aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwLjM1cmVtIDAuMzVyZW0gMC4zNXJlbSAkdGV4dC1jb2xvcjtcbiAgdHJhbnNpdGlvbjogMC44cyBlYXNlLWluLW91dDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLy8gJi5jYXJkX19mcm9udCB7XG4gIC8vICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAvLyB9XG5cbiAgLy8gJi5jYXJkX19iYWNrIHtcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I1O1xuICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gICB0b3A6IDA7XG4gIC8vICAgbGVmdDogMDtcbiAgLy8gICB6LWluZGV4OiAtMTtcbiAgLy8gICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgLy8gfVxuXG4gICYuY2FyZF9fZmVhdHVyZWQge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnXFwyNjlEJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBwYWRkaW5nOiAwIDAuNHJlbTtcbiAgICAgIFxuICAgIH1cbiAgfVxuICBcbiAgLmNhcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmc6IDAuNnJlbSAxLjZyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC5pbWFnZSB7XG4gICAgICBoZWlnaHQ6IDEwcmVtO1xuICAgICAgd2lkdGg6IDEycmVtO1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyOiAwLjJyZW0gc29saWQgJG9mZi13aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMC4zMHJlbSAwLjMwcmVtIDAuMjVyZW0gcmdiYSgjMDEzMDM2LCAwLjMpO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgIHRvcDogMHJlbTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYmFja2dyb3VuZDogJGdyZWVuO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkLXNob3J0LWRldGFpbHMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBtYXJnaW46IDAuNnJlbSAwO1xuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIH1cblxuICAgIC50ZWNoLXN0dWZmLWRldGFpbHMge1xuICAgICAgJiA+IHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICAmID4gcCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgIFxuICB9XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICBwYWRkaW5nLWJvdHRvbTogMHJlbTtcbiAgLnByb2plY3QtY2FyZCB7XG4gICAgbWFyZ2luOiAycmVtIDZyZW0gMHJlbSA2cmVtO1xuICAgIHBhZGRpbmc6IDByZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLy8gei1pbmRleDogNTA7XG4gIH1cbn1cblxuXG5Aa2V5ZnJhbWVzIGZhZGVMZWZ0VG9SaWdodCB7XG4wJSB7XG4gIG9wYWNpdHk6IDAuMTtcbiAgbGVmdDogLTEwJTtcbn1cbjEwMCUge1xuICBvcGFjaXR5OiAwLjc7XG4gIGxlZnQ6IDEyMCU7XG59XG59IiwiJGJnLWNvbG9yOiAjMDg1ZTcyO1xuLy8gIzE3YTU5ODtcbiRjb2xvcjE6ICNlNzRjM2M7XG4kY29sb3IyOiAjZDJlMWRkO1xuJGNvbG9yMzogI2RiMzgxYjtcbiRncmVlbjogIzE3YTU5ODtcbi8vICR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrOiAjNTU1O1xuJG9mZi13aGl0ZTogI2U4ZWVlYTtcbiR0ZXh0LWNvbG9yOiByZ2IoNzMsIDM5LCAzOSk7XG4vLyAjNjk5O1xuJHdoaXRlOiAjZmZmO1xuJGNvbG9yNDogcmdiKDI0NywgMTY4LCAxNjgpO1xuJGNvbG9yNTogIzU0YTRhZjsiXX0= */"

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

module.exports = "<span class=\"overlay\"></span>\n<div class=\"aboutme\">\n<section class=\"clearfix\">\n    <div class=\"clearfix aboutme content-text\">\n    <div class=\"button-skills-aboutme section per_80\"><span>Java</span></div>\n\n    <div class=\"button-skills-aboutme section per_80\"><span>Ruby</span></div>\n\n    <div class=\"button-skills-aboutme section per_30\"><span>Python</span></div>\n\n    <div class=\"button-skills-aboutme section per_80\"><span>AngularJS</span></div>\n\n    <div class=\"button-skills-aboutme section per_80\"><span>ExpressJS</span></div>\n\n    <div class=\"button-skills-aboutme section per_60\"><span>Node.js</span></div>\n\n    <div class=\"button-skills-aboutme section per_30\"><span>Vue.js</span></div>\n\n    <div class=\"button-skills-aboutme section per_70\"><span>npm</span></div>\n\n    <div class=\"button-skills-aboutme section per_70\"><span>CSS</span></div>\n\n    <div class=\"button-skills-aboutme section per_70\"><span>Appium</span></div>\n\n    <div class=\"button-skills-aboutme section per_80\"><span>Selenium</span></div>\n\n    <div class=\"button-skills-aboutme section per_50\"><span>Calabash</span></div>\n\n    <div class=\"button-skills-aboutme section per_60\"><span>Jenkins</span></div>\n\n    <div class=\"button-skills-aboutme section per_60\"><span>Docker</span></div>\n\n    <div class=\"button-skills-aboutme section per_40\"><span>Kubernetes</span></div>\n\n    <div class=\"button-skills-aboutme section per_50\"><span>MongoDB</span></div>\n\n    <div class=\"button-skills-aboutme section per_80\"><span>Oracle</span></div>\n\n    <div class=\"button-skills-aboutme section per_90\"><span>Git</span></div>\n    \n    <div class=\"button-skills-aboutme section per_100\"><span>Passion</span></div>\n\n    <div class=\"button-skills-aboutme section per_100\"><span>Potential</span></div>\n</div>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/skillpercent/skillpercent.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/skillpercent/skillpercent.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  z-index: -1;\n  display: block;\n  background: #d2e1dd;\n  position: fixed;\n  right: 0;\n  top: 0;\n  -webkit-animation: 1s ease-in-out 0.1s both leftToRight;\n          animation: 1s ease-in-out 0.1s both leftToRight; }\n\n.aboutme section {\n  display: flex;\n  margin: 4rem 20rem 4rem 20rem;\n  height: 40%;\n  width: 50%; }\n\n.aboutme p {\n  margin-left: 1rem; }\n\n.aboutme .button-skills-aboutme {\n  height: 4rem;\n  border-radius: 1.2rem;\n  background: #17a598;\n  font-family: 'Open Sans', Roboto, 'Droid Sans', 'Helvetica Neue', Helvetica, sans-serif;\n  color: white;\n  font-weight: 300; }\n\n.aboutme .button-skills-aboutme.section {\n  width: 48%;\n  float: left;\n  margin-bottom: 3rem;\n  line-height: 3.6rem; }\n\n.aboutme .button-skills-aboutme.section:nth-of-type(even) {\n  margin-left: 4%; }\n\n.aboutme [class*=\"per\"] span {\n  display: block;\n  height: 100%;\n  background: #085e72;\n  text-align: center;\n  border-radius: 1.2rem 0 0 1.2rem; }\n\n.aboutme .per_10 span {\n  width: 10%; }\n\n.aboutme .per_20 span {\n  width: 20%; }\n\n.aboutme .per_30 span {\n  width: 30%; }\n\n.aboutme .per_40 span {\n  width: 40%; }\n\n.aboutme .per_50 span {\n  width: 50%; }\n\n.aboutme .per_60 span {\n  width: 60%; }\n\n.aboutme .per_70 span {\n  width: 70%; }\n\n.aboutme .per_80 span {\n  width: 80%; }\n\n.aboutme .per_90 span {\n  width: 90%; }\n\n.aboutme .per_100 span {\n  width: 100%; }\n\n.aboutme .per_100 span {\n  border-radius: 10px; }\n\n@media (min-device-width: 768px) and (orientation: landscape) {\n  .aboutme [class*=\"per\"] span {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n    opacity: 0;\n    -webkit-animation: fadeIn ease-out 1;\n    animation: fadeIn ease-out 1;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-delay: 1s;\n    animation-delay: 1s; } }\n\n@media (min-device-width: 600px) and (orientation: portrait) {\n  .aboutme [class*=\"per\"] span {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n    opacity: 0;\n    -webkit-animation: fadeIn ease-out 1;\n    animation: fadeIn ease-out 1;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-delay: 1s;\n    animation-delay: 1s; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scaleX(0); }\n  to {\n    opacity: 1;\n    -webkit-transform: scaleX(1); } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scaleX(0);\n            transform: scaleX(0); }\n  to {\n    opacity: 1;\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1); } }\n\n@media screen and (max-width: 600px) {\n  .section {\n    flex-direction: column;\n    margin: 2rem 2rem 2rem 2rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvc2tpbGxwZXJjZW50L3NraWxscGVyY2VudC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvZ2xvYmFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NBO0VBQ0UsY0FBYTtFQUNiLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLGVBQWM7RUFDZCxvQkNsRGM7RURtRGQsZ0JBQWU7RUFDZixTQUFRO0VBQ1IsT0FBTTtFQUNOLHdEQUErQztVQUEvQyxnREFBK0MsRUFDaEQ7O0FBRUQ7RUFHSSxjQUFhO0VBQ2IsOEJBQTZCO0VBQzdCLFlBQVc7RUFDWCxXQUFVLEVBQ1g7O0FBUEg7RUFVSSxrQkFBaUIsRUFJbEI7O0FBZEg7RUFpQkksYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixvQkMxRVc7RUQyRVgsd0ZBQXVGO0VBQ3ZGLGFBQVk7RUFDWixpQkFBZ0IsRUFFakI7O0FBeEJIO0VBMkJJLFdBQVU7RUFDVixZQUFXO0VBQ1gsb0JBQW1CO0VBQ25CLG9CQUFtQixFQUNwQjs7QUEvQkg7RUFrQ0ksZ0JBQWUsRUFDaEI7O0FBbkNIO0VBMENJLGVBQWM7RUFDZCxhQUFZO0VBQ1osb0JDeEdjO0VEeUdkLG1CQUFrQjtFQUVsQixpQ0FBZ0MsRUFDakM7O0FBaERIO0VBeURNLFdBQXNDLEVBQ3ZDOztBQTFETDtFQXlETSxXQUFzQyxFQUN2Qzs7QUExREw7RUF5RE0sV0FBc0MsRUFDdkM7O0FBMURMO0VBeURNLFdBQXNDLEVBQ3ZDOztBQTFETDtFQXlETSxXQUFzQyxFQUN2Qzs7QUExREw7RUF5RE0sV0FBc0MsRUFDdkM7O0FBMURMO0VBeURNLFdBQXNDLEVBQ3ZDOztBQTFETDtFQXlETSxXQUFzQyxFQUN2Qzs7QUExREw7RUF5RE0sV0FBc0MsRUFDdkM7O0FBMURMO0VBeURNLFlBQXNDLEVBQ3ZDOztBQTFETDtFQThESSxvQkFBbUIsRUFDcEI7O0FBN0dDO0VBbUhGO0lBNUZBLDZCQUFtQjtJQUNuQixxQkFBVztJQWdHUCxXQUFVO0lBRVYscUNBQW9DO0lBQ3BDLDZCQUE0QjtJQUM1QixzQ0FBcUM7SUFDckMsOEJBQTZCO0lBQzdCLCtCQUE4QjtJQUM5Qix1QkFBc0I7SUFDdEIsNEJBQTJCO0lBQzNCLG9CQUFtQixFQUNwQixFQUFBOztBQTFIRDtFQWdJRjtJQWpIQSw2QkFBbUI7SUFDbkIscUJBQVc7SUFxSFAsV0FBVTtJQUVWLHFDQUFvQztJQUNwQyw2QkFBNEI7SUFDNUIsc0NBQXFDO0lBQ3JDLDhCQUE2QjtJQUM3QiwrQkFBOEI7SUFDOUIsdUJBQXNCO0lBQ3RCLDRCQUEyQjtJQUMzQixvQkFBbUIsRUFDcEIsRUFBQTs7QUFJTDtFQUNFO0lBQ0UsV0FBVTtJQUNWLDZCQUE0QixFQUFBO0VBRTlCO0lBQ0UsV0FBVTtJQUNWLDZCQUE0QixFQUFBLEVBQUE7O0FBSWhDO0VBQ0U7SUFDRSxXQUFVO0lBQ1YsNkJBQW9CO1lBQXBCLHFCQUFvQixFQUFBO0VBRXRCO0lBQ0UsV0FBVTtJQUNWLDZCQUFvQjtZQUFwQixxQkFBb0IsRUFBQSxFQUFBOztBQUt4QjtFQUNFO0lBQ0UsdUJBQXNCO0lBQ3RCLDRCQUEyQixFQUM1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2tpbGxwZXJjZW50L3NraWxscGVyY2VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL2dsb2JhbC5zY3NzJztcbiRtZWRpYV9icmVha3BvaW50X3dpZGU6IDEzNjZweDtcblxuQG1peGluIGVsbGlwc2lzKCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJyZWFrcG9pbnQoJG5hbWUpIHtcbiAgQGlmICRuYW1lID09IFwid2lkZVwiIHtcbiAgICAvLyBAbWVkaWEgKG1heC13aWR0aDogJG1lZGlhX2JyZWFrcG9pbnRfd2lkZSkge1xuICAgIC8vICAgQGNvbnRlbnQ7XG4gICAgLy8gfVxuICAgIEBtZWRpYSAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG4gIEBpZiAkbmFtZSA9PSBcInBob25lXCIge1xuICAgIC8vIEBtZWRpYSAobWF4LXdpZHRoOiAkbWVkaWFfYnJlYWtwb2ludF93aWRlKSB7XG4gICAgLy8gICBAY29udGVudDtcbiAgICAvLyB9XG4gICAgQG1lZGlhIChtaW4tZGV2aWNlLXdpZHRoOiA2MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHJhbnNpdGlvbnMoJHZhbHVlKSB7XG4gIC1tcy10cmFuc2l0aW9uOiAjeyR2YWx1ZX07XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogI3skdmFsdWV9O1xuICB0cmFuc2l0aW9uOiAjeyR2YWx1ZX07XG59XG5cbi8vIGNzcyB0cmFuc2Zvcm1cbkBtaXhpbiB0cmFuc2Zvcm0oJHZhbHVlKSB7XG4gIC1tcy10cmFuc2Zvcm06ICN7JHZhbHVlfTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06ICN7JHZhbHVlfTtcbiAgdHJhbnNmb3JtOiAjeyR2YWx1ZX07XG59XG5cbi8vIGNzcyBib3hzaGFkb3dcbkBtaXhpbiBib3hzaGFkb3coJHZhbHVlKSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogI3skdmFsdWV9O1xuICBib3gtc2hhZG93OiAjeyR2YWx1ZX07XG59XG5cbi5vdmVybGF5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAtMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICRjb2xvcjI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjFzIGJvdGggbGVmdFRvUmlnaHQ7XG59XG4kaW1hZ2VCYWNrZ3JvdW5kQ29udHJhc3Q6ICRiZy1jb2xvcjtcbi5hYm91dG1lIHtcblxuICBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogNHJlbSAyMHJlbSA0cmVtIDIwcmVtO1xuICAgIGhlaWdodDogNDAlO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgcCB7XG4gIC8vICAgLy8gbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAvLyAgIC8vIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG4gIC8vICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAvLyAgIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAuYnV0dG9uLXNraWxscy1hYm91dG1lIHtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xuICAgIGJhY2tncm91bmQ6ICRncmVlbjtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIFJvYm90bywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgLy8gbWFyZ2luOiAwIDAgMCAwO1xuICB9XG4gIFxuICAuYnV0dG9uLXNraWxscy1hYm91dG1lLnNlY3Rpb24ge1xuICAgIHdpZHRoOiA0OCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICBsaW5lLWhlaWdodDogMy42cmVtO1xuICB9XG5cbiAgLmJ1dHRvbi1za2lsbHMtYWJvdXRtZS5zZWN0aW9uOm50aC1vZi10eXBlKGV2ZW4pIHtcbiAgICBtYXJnaW4tbGVmdDogNCU7XG4gIH1cblxuICAvLyBbY2xhc3MqPVwicGVyXCJdIHtcbiAgLy8gICBAaW5jbHVkZSBlbGxpcHNpcygpO1xuICAvLyB9XG4gIC8vIzA0YjRkY1xuICBbY2xhc3MqPVwicGVyXCJdIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjJyZW0gMCAwIDEuMnJlbTtcbiAgfVxuXG4gIC8vIGxvb3AgdGhyb3VnaCB0aGUgcGVyXzcwIGNsYXNzZXMuXG4gIC8vIHRoaXMgZ2l2ZXMgYSAlIG9mIHdpZHRoIHdoaWNoIGl0IGV4dGVuZHMgb3ZlciBiYWNrZ3JvdW5kXG5cbiAgJHBlcmNlbnRhZ2U6IDEwO1xuXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJHBlcmNlbnRhZ2Uge1xuICAgIC5wZXJfI3skaSAqIDEwfSBzcGFuIHtcbiAgICAgIHdpZHRoOiAoKDEwMCAvICRwZXJjZW50YWdlKSAqICRpKSAqIDElO1xuICAgIH1cbiAgfVxuXG4gIC5wZXJfMTAwIHNwYW4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbn1cblxuLy8gYW5pbWF0aW9uIGlzIG9ubHkgZm9yIGRlc2t0b3AgYnJvd3NlcnMgYW5kIGhpZ2ggc3BlYyB0YWJsZXRzIGxpa2UgdGhlIGlQYWRcbkBpbmNsdWRlIGJyZWFrcG9pbnQod2lkZSkge1xuXG4gIC5hYm91dG1lIHtcblxuICAgIFtjbGFzcyo9XCJwZXJcIl0gc3BhbiB7XG5cbiAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybShcInNjYWxlWCgwKVwiKTtcbiAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1vdXQgMTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2Utb3V0IDE7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgYnJlYWtwb2ludChwaG9uZSkge1xuXG4gIC5hYm91dG1lIHtcblxuICAgIFtjbGFzcyo9XCJwZXJcIl0gc3BhbiB7XG5cbiAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybShcInNjYWxlWCgwKVwiKTtcbiAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1vdXQgMTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2Utb3V0IDE7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICB9XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zZWN0aW9uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMnJlbSAycmVtIDJyZW0gMnJlbTtcbiAgfVxuICBcbn0iLCIkYmctY29sb3I6ICMwODVlNzI7XG4vLyAjMTdhNTk4O1xuJGNvbG9yMTogI2U3NGMzYztcbiRjb2xvcjI6ICNkMmUxZGQ7XG4kY29sb3IzOiAjZGIzODFiO1xuJGdyZWVuOiAjMTdhNTk4O1xuLy8gJHRleHQtY29sb3I6ICNmZmZmZmY7XG4kYmxhY2s6ICM1NTU7XG4kb2ZmLXdoaXRlOiAjZThlZWVhO1xuJHRleHQtY29sb3I6IHJnYig3MywgMzksIDM5KTtcbi8vICM2OTk7XG4kd2hpdGU6ICNmZmY7XG4kY29sb3I0OiByZ2IoMjQ3LCAxNjgsIDE2OCk7XG4kY29sb3I1OiAjNTRhNGFmOyJdfQ== */"

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

module.exports = ".key-skills {\n  display: inline-block;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 0.2rem 17rem; }\n  .key-skills .key-skill {\n    z-index: 99;\n    font-size: 1.1rem;\n    font-family: 'Franklin Gothic Medium';\n    margin: 0.6rem;\n    padding: 0.4rem 2rem;\n    border: 0.2rem solid #699;\n    border-radius: 1.5rem;\n    color: #492727;\n    background-color: #54a4af;\n    transition: all 0.3s ease-in-out;\n    outline: none;\n    box-shadow: 0.2rem 0.2rem 0.2rem black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2hhcm1hMDAxL0RvY3VtZW50cy9NeVByb2plY3RzL2FuZ3VsYXItcG9ydGZvbGlvL3NyYy9hcHAvdGFncy90YWdzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NzaGFybWEwMDEvRG9jdW1lbnRzL015UHJvamVjdHMvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFxQjtFQUNyQixnQkFBZTtFQUNmLHdCQUF1QjtFQUN2QixxQkFBb0IsRUFzQnJCO0VBMUJEO0lBVUksWUFBVztJQUVYLGtCQUFpQjtJQUNqQixzQ0FBcUM7SUFDckMsZUFSdUI7SUFTdkIscUJBUjZCO0lBUzdCLDBCQUF5QjtJQUN6QixzQkFBcUI7SUFDckIsZUNYd0I7SURjeEIsMEJDVlk7SURXWixpQ0FBZ0M7SUFDaEMsY0FBYTtJQUNiLHVDQUFzQyxFQUN2QyIsImZpbGUiOiJzcmMvYXBwL3RhZ3MvdGFncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL2dsb2JhbCc7XG5cbi5rZXktc2tpbGxzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAuMnJlbSAxN3JlbTtcblxuICAka2V5X3NraWxsX21hcmdpbjogMC42cmVtO1xuICAka2V5X3NraWxsX3BhZGRpbmc6IDAuNHJlbSAycmVtO1xuXG4gIC5rZXktc2tpbGwge1xuICAgIHotaW5kZXg6IDk5O1xuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nO1xuICAgIG1hcmdpbjogJGtleV9za2lsbF9tYXJnaW47XG4gICAgcGFkZGluZzogJGtleV9za2lsbF9wYWRkaW5nO1xuICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkICM2OTk7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICAvLyBib3JkZXItYm90dG9tLWNvbG9yOiByZWQ7XG4gICAgLy8gbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yNTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAuMnJlbSAwLjJyZW0gMC4ycmVtIGJsYWNrO1xuICB9XG59IiwiJGJnLWNvbG9yOiAjMDg1ZTcyO1xuLy8gIzE3YTU5ODtcbiRjb2xvcjE6ICNlNzRjM2M7XG4kY29sb3IyOiAjZDJlMWRkO1xuJGNvbG9yMzogI2RiMzgxYjtcbiRncmVlbjogIzE3YTU5ODtcbi8vICR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrOiAjNTU1O1xuJG9mZi13aGl0ZTogI2U4ZWVlYTtcbiR0ZXh0LWNvbG9yOiByZ2IoNzMsIDM5LCAzOSk7XG4vLyAjNjk5O1xuJHdoaXRlOiAjZmZmO1xuJGNvbG9yNDogcmdiKDI0NywgMTY4LCAxNjgpO1xuJGNvbG9yNTogIzU0YTRhZjsiXX0= */"

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