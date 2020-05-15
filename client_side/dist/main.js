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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
            _this.renderer.listenGlobal('window', 'scroll', function (event) {
                var number = window.scrollY;
                var _location = _this.location.path();
                _location = _location.split('/')[2];
                if (number > 150 || window.pageYOffset > 150) {
                    navbar.classList.remove('navbar-transparent');
                }
                else if (_location !== 'login' && _this.location.path() !== '/nucleoicons') {
                    // remove logic
                    navbar.classList.add('navbar-transparent');
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _examples_examples_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/examples.module */ "./src/app/examples/examples.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _service_vinicola_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/vinicola.service */ "./src/app/service/vinicola.service.ts");

 // this is needed!











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _examples_examples_module__WEBPACK_IMPORTED_MODULE_8__["ExamplesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [_service_vinicola_service__WEBPACK_IMPORTED_MODULE_12__["VinicolaService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/landing/landing.component */ "./src/app/examples/landing/landing.component.ts");
/* harmony import */ var _examples_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/login/login.component */ "./src/app/examples/login/login.component.ts");
/* harmony import */ var _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/profile/profile.component */ "./src/app/examples/profile/profile.component.ts");
/* harmony import */ var _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");










var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: _components_components_component__WEBPACK_IMPORTED_MODULE_5__["ComponentsComponent"] },
    { path: 'nucleoicons', component: _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__["NucleoiconsComponent"] },
    { path: 'examples/landing', component: _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
    { path: 'examples/login', component: _examples_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'examples/profile', component: _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-basic\">\n    <div class=\"container\">\n      <h3 class=\"title\">Basic Elements</h3>\n      <div id=\"buttons\">\n          <h4>Buttons</h4>\n          <p class=\"category\">Pick your style</p>\n          <div class=\"row\">\n              <div class=\"col-md-10\">\n                  <button class=\"btn btn-primary\" type=\"button\">Default</button>\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">Round</button>\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> With Icon\n                  </button>\n                  <button class=\"btn btn-primary btn-icon btn-round\" type=\"button\">\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                  </button>\n                  <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">Simple</button>\n              </div>\n          </div>\n          <p class=\"category\">Pick your size</p>\n          <div class=\"row\">\n              <div class=\"col-md-10\">\n                  <button class=\"btn btn-primary btn-sm\">Small</button>\n                  <button class=\"btn btn-primary\">Regular</button>\n                  <button class=\"btn btn-primary btn-lg\">Large</button>\n              </div>\n          </div>\n          <p class=\"category\">Pick your color</p>\n          <div class=\"row\">\n              <div class=\"col-md-10\">\n                  <button class=\"btn\">Default</button>\n                  <button class=\"btn btn-primary\">Primary</button>\n                  <button class=\"btn btn-info\">Info</button>\n                  <button class=\"btn btn-success\">Success</button>\n                  <button class=\"btn btn-warning\">Warning</button>\n                  <button class=\"btn btn-danger\">Danger</button>\n                  <button class=\"btn btn-neutral\">Neutral</button>\n              </div>\n          </div>\n          <h4>Links</h4>\n          <div class=\"row\">\n              <div class=\"col-md-8\">\n                  <button class=\"btn btn-link\">Default</button>\n                  <button class=\"btn btn-link btn-primary \">Primary</button>\n                  <button class=\"btn btn-link btn-info\">Info</button>\n                  <button class=\"btn btn-link btn-success\">Success</button>\n                  <button class=\"btn btn-link btn-warning\">Warning</button>\n                  <button class=\"btn btn-link btn-danger\">Danger</button>\n              </div>\n          </div>\n      </div>\n      <div id=\"inputs\">\n          <h4>Inputs</h4>\n          <p class=\"category\">Form Controls</p>\n          <div class=\"row\">\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group\">\n                      <input type=\"text\" value=\"\" placeholder=\"Regular\" class=\"form-control\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group has-success\">\n                      <input type=\"text\" value=\"Success\" class=\"form-control form-control-success\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group has-danger\">\n                      <input type=\"email\" value=\"Error Input\" class=\"form-control form-control-danger\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <div class=\"input-group-prepend\" >\n                      <span class=\"input-group-text\">\n                          <i class=\"fa fa-user-circle\"></i>\n                      </span>\n                    </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Right Nucleo Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">\n                            <i class=\"now-ui-icons users_single-02\"></i>\n                        </span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"row\" id=\"checkRadios\">\n        <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Checkboxes</p>\n            <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\">\n                    <span class=\"form-check-sign\"></span>\n                    Unchecked\n                </label>\n            </div>\n            <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" checked>\n                    <span class=\"form-check-sign\"></span>\n                    Checked\n                </label>\n            </div>\n            <div class=\"form-check disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" disabled>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled Unchecked\n                </label>\n            </div>\n            <div class=\"form-check disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" checked disabled>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled Checked\n                </label>\n            </div>\n        </div>\n        <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Radios</p>\n            <div class=\"form-check form-check-radio\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\n                    <span class=\"form-check-sign\"></span>\n                    Radio is off\n                </label>\n            </div>\n            <div class=\"form-check form-check-radio\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option2\" checked>\n                    <span class=\"form-check-sign\"></span>\n                    Radio is on\n                </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option3\" disabled>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled radio is off\n                </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option4\" disabled checked>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled radio is on\n                </label>\n            </div>\n        </div>\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Toggle Buttons</p>\n              <bSwitch\n                  [(ngModel)]=\"state\">\n              </bSwitch>\n              <bSwitch> Toggle is off\n              </bSwitch>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Sliders</p>\n              <nouislider class=\"slider\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"true\"></nouislider>\n              <br>\n              <nouislider class=\"slider slider-primary\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\n          </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFzaWNlbGVtZW50cy9iYXNpY2VsZW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state = true;
        this.tagItems = ['Minimal', 'Light', 'New', 'Friends'];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
    }
    BasicelementsComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Multiple Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
        this.dropdownList1 = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {
            singleSelection: true,
            text: "Single Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
    };
    BasicelementsComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basicelements',
            template: __webpack_require__(/*! ./basicelements.component.html */ "./src/app/components/basicelements/basicelements.component.html"),
            styles: [__webpack_require__(/*! ./basicelements.component.scss */ "./src/app/components/basicelements/basicelements.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page-header clear-filter\" filter-color=\"orange\">\n    <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-7\" style=\"background-image: url('assets/img/header.jpg');\">\n\n    </div>\n      <div class=\"container\">\n          <div class=\"content-center brand\">\n              <img class=\"n-logo\" src=\"assets/img/now-logo.png\" alt=\"\">\n              <h1 class=\"h1-seo\">Now UI Kit.</h1>\n              <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3>\n          </div>\n          <h6 class=\"category category-absolute\">Designed by\n              <a href=\"https://invisionapp.com/\" target=\"_blank\">\n                  <img src=\"assets/img/invision-white-slim.png\" class=\"invision-logo\" />\n              </a>. Coded by\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">\n                  <img src=\"assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\" />\n              </a>.</h6>\n      </div>\n  </div>\n\n  <div class=\"main\">\n    <div class=\"section section-images\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"hero-images-container\">\n                        <img src=\"assets/img/hero-image-1.png\" alt=\"\">\n                    </div>\n                    <div class=\"hero-images-container-1\">\n                        <img src=\"assets/img/hero-image-2.png\" alt=\"\">\n                    </div>\n                    <div class=\"hero-images-container-2\">\n                        <img src=\"assets/img/hero-image-3.png\" alt=\"\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n      <app-basicelements></app-basicelements>\n      <app-navigation></app-navigation>\n      <div class=\"section section-tabs\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n                      <p class=\"category\">Tabs with Icons on Card</p>\n                      <!-- Nav tabs -->\n\n                      <div class=\"card\">\n                        <div class=\"nav-tabs-navigation\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\">\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons shopping_cart-simple\"></i> Profile\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                            <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                          <i class=\"now-ui-icons shopping_shop\"></i> Messages\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                            <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                          <p>\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                          </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                            </div>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n                      <p class=\"category\">Tabs with Background on Card</p>\n                      <!-- Tabs with Background on Card -->\n                      <div class=\"card\">\n                        <div class=\"nav-tabs-navigation\" data-tabs-color=\"orange\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\" >\n                                    <ngb-tab title=\"Home\">\n                                      <ng-template ngbTabContent>\n                                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Profile\">\n                                      <ng-template ngbTabContent>\n                                          <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Messages\">\n                                      <ng-template ngbTabContent>\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Settings\">\n                                        <ng-template ngbTabContent>\n                                          <p>\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                          </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                            </div>\n                        </div>\n                      </div>\n                      <!-- End Tabs on plain Card -->\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-pagination\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <h4>Progress Bars</h4>\n                      <div class=\"progress-container\">\n                        <span class=\"progress-badge\">Default</span>\n\n                        <ngb-progressbar [value]=\"25\"><span class=\"progress-value\">25%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-primary\">\n                          <span class=\"progress-badge\">Primary</span>\n                          <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                      <br />\n                      <h4>Navigation Pills</h4>\n                      <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-start tab-space nav-pills-just-icons\">\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"far fa-gem\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"fa fa-thermometer-full\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                              <ng-template ngbTabTitle>\n                                <i class=\"fa fa-suitcase\"></i>\n                              </ng-template>\n                              <ng-template ngbTabContent>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab [disabled]=\"true\">\n                              <ng-template ngbTabTitle>\n                                <i class=\"fa fa-exclamation\"></i>\n                              </ng-template>\n                              <ng-template ngbTabContent>\n                              </ng-template>\n                          </ngb-tab>\n                      </ngb-tabset>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Pagination</h4>\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" aria-label=\"Default pagination\" class=\"pagination-primary\"></ngb-pagination>\n                      <br/>\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page2\" aria-label=\"Default pagination\"></ngb-pagination>\n                      <br>\n                      <h4>Labels</h4>\n                      <span class=\"badge badge-default\">Default</span>\n                      <span class=\"badge badge-primary\">Primary</span>\n                      <span class=\"badge badge-success\">Success</span>\n                      <span class=\"badge badge-info\">Info</span>\n                      <span class=\"badge badge-warning\">Warning</span>\n                      <span class=\"badge badge-danger\">Danger</span>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section\" id=\"notifications\">\n          <div class=\"container\">\n            <h4>Notifications</h4>\n          </div>\n          <app-notification></app-notification>\n      </div>\n      <app-typography></app-typography>\n      <div class=\"section section-javascript\" id=\"javascriptComponents\">\n          <div class=\"container\">\n              <h3 class=\"title\">Angular Native Components</h3>\n              <div class=\"row\" id=\"modals\">\n                  <div class=\"col-md-6\">\n                      <h4>Modal</h4>\n                      <ngbd-modal-component></ngbd-modal-component>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Popovers</h4>\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"right\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\" popoverClass=\"popover-primary\">\n                          On right\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"top\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n                          On top\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"left\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n                          On left\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"bottom\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n                          On bottom\n                      </button>\n                  </div>\n                  <br />\n                  <br />\n                  <div class=\"col-md-6\">\n                      <h4>Datetimepicker</h4>\n                      <div class=\"row\">\n                          <div class=\"col-md-6\">\n                              <div class=\"datepicker-container\">\n                                  <div class=\"form-group\">\n                                    <input class=\"form-control datetimepicker\" placeholder=\"06/07/2017\"\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" data-color=\"orange\">\n                \t\t\t            </div>\n                              </div>\n                          </div>\n                      </div>\n                      <!--                 end collapse -->\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Tooltips</h4>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                         On right\n                     </button>\n                     <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                       On left\n                     </button>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                         On top\n                      </button>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                          On bottom\n                      </button>\n                      <div class=\"clearfix\"></div>\n                      <br>\n                      <br>\n                  </div>\n              <!-- </div>\n            </div> -->\n          </div>\n\n          <div class=\"section\" id=\"carousel\">\n              <div class=\"container\">\n                  <div class=\"title\">\n                      <h4>Carousel</h4>\n                  </div>\n                  <div class=\"row justify-content-center\">\n                      <div class=\"col-8\">\n                        <ngb-carousel>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg1.jpg\" alt=\"First slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Nature, United States</h5>\n                              </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg3.jpg\" alt=\"Second slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Somewhere Beyond, United States</h5>\n                              </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg4.jpg\" alt=\"Third slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Yellowstone National Park, United States</h5>\n                              </div>\n                            </ng-template>\n                        </ngb-carousel>\n                      </div>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"section section-nucleo-icons\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-12\">\n                      <h2 class=\"title\">Nucleo Icons</h2>\n                      <h5 class=\"description\">\n                          Now UI Kit PRO comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit PRO Make sure you check all of them and use those that you like the most.\n                      </h5>\n                      <!-- <div class=\"nucleo-container\">\n        <img src=\"assets/img/nucleo.svg\" alt=\"\">\n      </div> -->\n                      <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-primary btn-round btn-lg\">View Demo Icons</a>\n                      <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-primary btn-simple btn-round btn-lg\" target=\"_blank\">View All Icons</a>\n                  </div>\n                  <div class=\"col-lg-6 col-md-12\">\n                      <div class=\"icons-container\">\n                          <i class=\"now-ui-icons ui-1_send\"></i>\n                          <i class=\"now-ui-icons ui-2_like\"></i>\n                          <i class=\"now-ui-icons transportation_air-baloon\"></i>\n                          <i class=\"now-ui-icons text_bold\"></i>\n                          <i class=\"now-ui-icons tech_headphones\"></i>\n                          <i class=\"now-ui-icons emoticons_satisfied\"></i>\n                          <i class=\"now-ui-icons shopping_cart-simple\"></i>\n                          <i class=\"now-ui-icons objects_spaceship\"></i>\n                          <i class=\"now-ui-icons media-2_note-03\"></i>\n                          <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                          <i class=\"now-ui-icons design_palette\"></i>\n                          <i class=\"now-ui-icons clothes_tie-bow\"></i>\n                          <i class=\"now-ui-icons location_pin\"></i>\n                          <i class=\"now-ui-icons objects_key-25\"></i>\n                          <i class=\"now-ui-icons travel_istanbul\"></i>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"section\">\n          <div class=\"container text-center\">\n              <div class=\"row justify-content-md-center\">\n                  <div class=\"col-md-12 col-lg-8\">\n                      <h2 class=\"title\">Completed with examples</h2>\n                      <h5 class=\"description\">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 ui kit.</h5>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-signup\" style=\"background-image: url('assets/img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;\">\n          <div class=\"container login-page\">\n            <div class=\"row\">\n              <div class=\"col-md-4 content-center ml-auto mr-auto\">\n                  <div class=\"card card-login card-plain\">\n                      <form class=\"form\" method=\"\" action=\"\">\n                          <div class=\"header header-primary text-center\">\n                              <div class=\"logo-container\">\n                                  <img src=\"assets/img/now-logo.png\" alt=\"\">\n                              </div>\n                          </div>\n                          <div class=\"content\">\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                              <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\n                              </div>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                            </div>\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                              <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n                              </div>\n                                <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\n                            </div>\n                          </div>\n                          <div class=\"footer text-center\">\n                              <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a>\n                          </div>\n                          <div class=\"text-center\">\n                              <h6>\n                                  <a href=\"#pablo\" class=\"link\">Create Account</a>\n                              </h6>\n                          </div>\n                          <div class=\"text-center\">\n                              <h6>\n                                  <a href=\"#pablo\" class=\"link\">Need Help?</a>\n                              </h6>\n                          </div>\n                      </form>\n                  </div>\n              </div>\n            </div>\n              <div class=\"col text-center\">\n                  <a [routerLink]=\"['/examples/login']\" class=\"btn btn-simple btn-round btn-white btn-lg\">View Login Page</a>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-examples\" data-background-color=\"black\">\n          <div class=\"space-50\"></div>\n          <div class=\"container text-center\">\n              <div class=\"row\">\n                  <div class=\"col\">\n                      <a [routerLink]=\"['/examples/landing']\">\n                          <img src=\"assets/img/landing.jpg\" alt=\"Image\" class=\"img-raised\">\n                      </a>\n                      <a [routerLink]=\"['/examples/landing']\" class=\"btn btn-simple btn-primary btn-round\">View Landing Page</a>\n                  </div>\n                  <div class=\"col\">\n                      <a [routerLink]=\"['/examples/profile']\">\n                          <img src=\"assets/img/profile.jpg\" alt=\"Image\" class=\"img-raised\">\n                      </a>\n                      <a [routerLink]=\"['/examples/profile']\" class=\"btn btn-simple btn-primary btn-round\">View Profile Page</a>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-download\" id=\"#download-section\" data-background-color=\"black\">\n          <div class=\"container\">\n              <div class=\"row justify-content-md-center\">\n                  <div class=\"text-center col-md-12 col-lg-8\">\n                      <h3 class=\"title\">Do you love this Bootstrap 4 UI Kit?</h3>\n                      <h5 class=\"description\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim or Invision where you can find the kit in HTML or Sketch/PSD format. Start a new project or give an old Bootstrap project a new look!</h5>\n                  </div>\n                  <div class=\"text-center col-md-12 col-lg-8\">\n                      <a href=\"https://www.creative-tim.com/product/now-ui-kit-angular\" class=\"btn btn-primary btn-lg btn-round\" role=\"button\">\n                          Download Angular\n                      </a>\n                      <a href=\"https://www.invisionapp.com/now\" target=\"_blank\" class=\"btn btn-primary btn-lg btn-simple btn-round\" role=\"button\">\n                          Download PSD/Sketch\n                      </a>\n                  </div>\n              </div>\n              <br>\n              <br>\n              <br>\n              <div class=\"row text-center mt-5\">\n                  <div class=\"col-md-8 ml-auto mr-auto\">\n                      <h2>Want more?</h2>\n                      <h5 class=\"description\">We've just launched\n                          <a href=\"https://timcreative.github.io/now-ui-kit-pro-angular/presentation\" target=\"_blank\">Now UI Kit PRO Angular</a>. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap 4 UI Kit.</h5>\n                  </div>\n                  <div class=\"col-md-12\">\n                      <a href=\"https://timcreative.github.io/now-ui-kit-pro-angular/presentation\" class=\"btn btn-neutral btn-round btn-lg\" target=\"_blank\">\n                          <i class=\"now-ui-icons arrows-1_share-66\"></i> Upgrade to PRO\n                      </a>\n                  </div>\n              </div>\n              <br>\n              <br>\n              <div class=\"row justify-content-md-center sharing-area text-center\">\n                <div class=\"text-center col-md-12 col-lg-8\">\n                  <h3>Thank you for supporting us!</h3>\n                </div>\n                <div class=\"text-center col-md-12 col-lg-8\">\n                  <a target=\"_blank\" href=\"https://www.twitter.com/creativetim\" class=\"btn btn-neutral btn-icon btn-twitter btn-round btn-lg\" rel=\"tooltip\" title=\"Follow us\">\n                    <i class=\"fab fa-twitter\"></i>\n                  </a>\n                  <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\" class=\"btn btn-neutral btn-icon btn-facebook btn-round btn-lg\" rel=\"tooltip\" title=\"Like us\">\n                    <i class=\"fab fa-facebook-square\"></i>\n                  </a>\n                  <a target=\"_blank\" href=\"https://www.linkedin.com/company-beta/9430489/\" class=\"btn btn-neutral btn-icon btn-linkedin btn-lg btn-round\" rel=\"tooltip\" title=\"Follow us\">\n                    <i class=\"fab fa-linkedin\"></i>\n                  </a>\n                  <a target=\"_blank\" href=\"https://github.com/creativetimofficial/now-ui-kit-angular\" class=\"btn btn-neutral btn-icon btn-github btn-round btn-lg\" rel=\"tooltip\" title=\"Star on Github\">\n                    <i class=\"fab fa-github\"></i>\n                  </a>\n                </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <footer class=\"footer\" data-background-color=\"black\">\n      <div class=\"container\">\n          <nav>\n              <ul>\n                  <li>\n                      <a href=\"https://www.creative-tim.com\">\n                          Creative Tim\n                      </a>\n                  </li>\n                  <li>\n                      <a href=\"https://www.creative-tim.com/about-us\">\n                          About Us\n                      </a>\n                  </li>\n                  <li>\n                      <a href=\"http://blog.creative-tim.com\">\n                          Blog\n                      </a>\n                  </li>\n                  <li>\n                      <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                          MIT License\n                      </a>\n                  </li>\n              </ul>\n          </nav>\n          <div class=\"copyright\">\n              &copy;\n            {{data | date: 'yyyy'}}, Designed by\n              <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n          </div>\n      </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);




var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer, config) {
        this.renderer = renderer;
        this.data = new Date();
        this.page = 4;
        this.page1 = 5;
        this.page2 = 3;
        this.isCollapsed = true;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.state_icon_primary = true;
        config.closeOthers = true;
        config.type = 'info';
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    };
    ComponentsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    };
    ComponentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/components/components.component.html"),
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "./src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_8__["BasicelementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_10__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_11__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["NgbdModalBasic"]
            ],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" (click)=\"open(classic,'' , '')\">\n Launch Modal\n</button>\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header justify-content-center\">\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\n            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n        </button>\n        <h4 class=\"title title-up\">Modal title</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\n        </p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\">Nice Button</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">Close</button>\n    </div>\n</ng-template>\n\n<button class=\"btn btn-warning\" (click)=\"open(modal_mini, 'modal_mini', 'sm')\">\n   Launch Modal Mini\n</button>\n<ng-template #modal_mini let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header justify-content-center\">\n      <div class=\"modal-profile\">\n          <i class=\"now-ui-icons users_circle-08\"></i>\n      </div>\n  </div>\n  <div class=\"modal-body\">\n      <p>Always have an access to your profile</p>\n  </div>\n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-link btn-neutral\">Back</button>\n      <button type=\"button\" class=\"btn btn-link btn-neutral\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasic", function() { return NgbdModalBasic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBasic.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension == undefined && type === 'Login') {
            this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngbd-modal-component',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-navbars\">\n    <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h4>Menu</h4>\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar\" data-nav-image=\"assets/img/blurred-image-1.jpg\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item active\">\n                                    <a class=\"nav-link\" href=\"#\">\n                                        <p>Link</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#\">\n                                        <p>Link</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                  <div ngbDropdown class=\"dropdown\">\n                                      <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n                                        <p>\n                                            Dropdown\n                                        </p>\n                                      </a>\n                                      <div ngbDropdownMenu class=\"dropdown-menu\">\n                                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                                      </div>\n                                  </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n            <div class=\"col-md-6\">\n                <h4>Menu with Icons</h4>\n                <nav class=\"navbar navbar-expand-lg bg-info\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-icons\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar-icons\">\n                            <ul class=\"navbar-nav ml-auto\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons ui-1_send\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons users_single-02\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <div ngbDropdown class=\"dropdown\">\n                                        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n                                            <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                        </a>\n                                        <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\n                                            <div class=\"dropdown-header\">Dropdown header</div>\n                                            <a class=\"dropdown-item\">Action</a>\n                                            <a class=\"dropdown-item\">Another action</a>\n                                            <a class=\"dropdown-item\">Something else here</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Separated link</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Another separated link</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n        <h4>Navigation</h4>\n    </div>\n    <div id=\"navbar\">\n        <div class=\"navigation-example\" style=\"background-image:url('assets/img/bg7.jpg')\">\n            <!-- Navbar Primary  -->\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Primary color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons objects_globe\"></i>\n                                    <p>Discover</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\n                                    <p>Profile</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                    <p>Settings</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Primary -->\n            <!-- Navbar Info -->\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Info Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-info\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-info\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Discover</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Profile</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Settings</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Info -->\n            <!-- Navbar Success -->\n            <nav class=\"navbar navbar-expand-lg bg-success\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#\">Success Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-success\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-success\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons objects_globe\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Success -->\n            <!-- Navbar Warning -->\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Warning Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-warning\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-warning\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-instagram\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Warning -->\n            <!-- Navbar Danger -->\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Danger Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-danger\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-danger\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                    <p>Share</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>Tweet</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-pinterest\"></i>\n                                    <p>Pin</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Danger -->\n            <!-- Navbar Transparent -->\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Transparent</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-transparent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-transparent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                    <p>Facebook</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>Twitter</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-instagram\"></i>\n                                    <p>Instagram</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Transparent-->\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/notification/notification.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\" >\n        <div class=\"container\">\n            <div class=\"alert-wrapper\">\n                <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n                  <span aria-hidden=\"true\">\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                  </span>\n                </button>\n                <div class=\"message\">\n                    <ng-container *ngIf=\"alert.icon\">\n                      <div class=\"alert-icon\">\n                          <i class=\"now-ui-icons {{alert.icon}}\"></i>\n                      </div>\n                    </ng-container>\n                    <strong>{{alert.strong}} </strong>{{ alert.message }}\n                </div>\n            </div>\n        </div>\n    </ngb-alert>\n</div>\n"

/***/ }),

/***/ "./src/app/components/notification/notification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Well done!',
            message: 'You successfully read this important alert message.',
            icon: 'ui-2_like'
        }, {
            id: 2,
            strong: 'Heads up!',
            type: 'info',
            message: 'This is an info alert',
            icon: 'travel_info'
        }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert',
            icon: 'ui-1_bell-53'
        }, {
            id: 4,
            type: 'danger',
            strong: 'Oh snap!',
            message: 'This is a danger alert',
            icon: 'objects_support-17'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/notification/notification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nucleo-icons-style\">\n  <header>\n      <h1>Nucleo Outline Web Font v2.9</h1>\n      <p>\n          <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a>\n      </p>\n  </header>\n  <div id=\"cd-nav\">\n      <nav>\n          <ul id=\"cd-main-nav\">\n              <li>\n                  <a href=\"#arrows\">Arrows</a>\n              </li>\n              <li>\n                  <a href=\"#business\">Business &amp; Finance</a>\n              </li>\n              <li>\n                  <a href=\"#clothes\">Clothes &amp; Accessories</a>\n              </li>\n              <li>\n                  <a href=\"#design\">Design &amp; Development</a>\n              </li>\n              <li>\n                  <a href=\"#emoticons\">Emoticons</a>\n              </li>\n              <li>\n                  <a href=\"#files\">Files &amp; Folders</a>\n              </li>\n              <li>\n                  <a href=\"#medical\">Healthcare &amp; Medical</a>\n              </li>\n              <li>\n                  <a href=\"#loaders\">Loaders</a>\n              </li>\n              <li>\n                  <a href=\"#maps\">Maps &amp; Location</a>\n              </li>\n              <li>\n                  <a href=\"#media\">Media</a>\n              </li>\n              <li>\n                  <a href=\"#objects\">Objects</a>\n              </li>\n              <li>\n                  <a href=\"#school\">School &amp; Education</a>\n              </li>\n              <li>\n                  <a href=\"#shopping\">Shopping</a>\n              </li>\n              <li>\n                  <a href=\"#sport\">Sport</a>\n              </li>\n              <li>\n                  <a href=\"#technology\">Technology</a>\n              </li>\n              <li>\n                  <a href=\"#text\">Text Editing</a>\n              </li>\n              <li>\n                  <a href=\"#gestures\">Touch Gestures</a>\n              </li>\n              <li>\n                  <a href=\"#transportation\">Transportation</a>\n              </li>\n              <li>\n                  <a href=\"#travel\">Travel</a>\n              </li>\n              <li>\n                  <a href=\"#interface\">User Interface</a>\n              </li>\n              <li>\n                  <a href=\"#users\">Users</a>\n              </li>\n          </ul>\n      </nav>\n  </div>\n  <div id=\"icons-wrapper\">\n      <section id=\"arrows\">\n          <h2>Arrows</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\n                  <p>arrows-1_cloud-download-93</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\n                  <p>arrows-1_cloud-upload-94</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                  <p>arrows-1_minimal-down</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-left\"></i>\n                  <p>arrows-1_minimal-left</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\n                  <p>arrows-1_minimal-right</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-up\"></i>\n                  <p>arrows-1_minimal-up</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\n                  <p>arrows-1_refresh-69</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_share-66\"></i>\n                  <p>arrows-1_share-66</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"business\">\n          <h2>Business &amp; Finance</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons business_badge\"></i>\n                  <p>business_badge</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_bank\"></i>\n                  <p>business_bank</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_briefcase-24\"></i>\n                  <p>business_briefcase-24</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_bulb-63\"></i>\n                  <p>business_bulb-63</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_chart-bar-32\"></i>\n                  <p>business_chart-bar-32</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_chart-pie-36\"></i>\n                  <p>business_chart-pie-36</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_globe\"></i>\n                  <p>business_globe</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_money-coins\"></i>\n                  <p>business_money-coins</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"clothes\">\n          <h2>Clothes &amp; Accessories</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons clothes_tie-bow\"></i>\n                  <p>clothes_tie-bow</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"design\">\n          <h2>Design &amp; Development</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons design_app\"></i>\n                  <p>design_app</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_bullet-list-67\"></i>\n                  <p>design_bullet-list-67</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_image\"></i>\n                  <p>design_image</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_palette\"></i>\n                  <p>design_palette</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_scissors\"></i>\n                  <p>design_scissors</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_vector\"></i>\n                  <p>design_vector</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design-2_html5\"></i>\n                  <p>design-2_html5</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                  <p>design-2_ruler-pencil</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"emoticons\">\n          <h2>Emoticons</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons emoticons_satisfied\"></i>\n                  <p>emoticons_satisfied</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"files\">\n          <h2>Files &amp; Folders</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons files_box\"></i>\n                  <p>files_box</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons files_paper\"></i>\n                  <p>files_paper</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons files_single-copy-04\"></i>\n                  <p>files_single-copy-04</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"medical\">\n          <h2>Healthcare &amp; Medical</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons health_ambulance\"></i>\n                  <p>health_ambulance</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"loaders\">\n          <h2>Loaders</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons loader_gear spin\"></i>\n                  <p>loader_gear</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons loader_refresh spin\"></i>\n                  <p>loader_refresh</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"maps\">\n          <h2>Maps &amp; Location</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons location_bookmark\"></i>\n                  <p>location_bookmark</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_compass-05\"></i>\n                  <p>location_compass-05</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_map-big\"></i>\n                  <p>location_map-big</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_pin\"></i>\n                  <p>location_pin</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_world\"></i>\n                  <p>location_world</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"media\">\n          <h2>Media</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons media-1_album\"></i>\n                  <p>media-1_album</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-pause\"></i>\n                  <p>media-1_button-pause</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-play\"></i>\n                  <p>media-1_button-play</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-power\"></i>\n                  <p>media-1_button-power</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_camera-compact\"></i>\n                  <p>media-1_camera-compact</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-2_note-03\"></i>\n                  <p>media-2_note-03</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-2_sound-wave\"></i>\n                  <p>media-2_sound-wave</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"objects\">\n          <h2>Objects</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons objects_diamond\"></i>\n                  <p>objects_diamond</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_globe\"></i>\n                  <p>objects_globe</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_key-25\"></i>\n                  <p>objects_key-25</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_planet\"></i>\n                  <p>objects_planet</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_spaceship\"></i>\n                  <p>objects_spaceship</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_support-17\"></i>\n                  <p>objects_support-17</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_umbrella-13\"></i>\n                  <p>objects_umbrella-13</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"school\">\n          <h2>School &amp; Education</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons education_agenda-bookmark\"></i>\n                  <p>education_agenda-bookmark</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_atom\"></i>\n                  <p>education_atom</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_glasses\"></i>\n                  <p>education_glasses</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_hat\"></i>\n                  <p>education_hat</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_paper\"></i>\n                  <p>education_paper</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"shopping\">\n          <h2>Shopping</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons shopping_bag-16\"></i>\n                  <p>shopping_bag-16</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_basket\"></i>\n                  <p>shopping_basket</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_box\"></i>\n                  <p>shopping_box</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_cart-simple\"></i>\n                  <p>shopping_cart-simple</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_credit-card\"></i>\n                  <p>shopping_credit-card</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_delivery-fast\"></i>\n                  <p>shopping_delivery-fast</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_shop\"></i>\n                  <p>shopping_shop</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_tag-content\"></i>\n                  <p>shopping_tag-content</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"sport\">\n          <h2>Sport</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons sport_trophy\"></i>\n                  <p>sport_trophy</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons sport_user-run\"></i>\n                  <p>sport_user-run</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"technology\">\n          <h2>Technology</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons tech_controller-modern\"></i>\n                  <p>tech_controller-modern</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_headphones\"></i>\n                  <p>tech_headphones</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_laptop\"></i>\n                  <p>tech_laptop</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_mobile\"></i>\n                  <p>tech_mobile</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_tablet\"></i>\n                  <p>tech_tablet</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_tv\"></i>\n                  <p>tech_tv</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_watch-time\"></i>\n                  <p>tech_watch-time</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"text\">\n          <h2>Text Editing</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons text_align-center\"></i>\n                  <p>text_align-center</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_align-left\"></i>\n                  <p>text_align-left</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_bold\"></i>\n                  <p>text_bold</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_caps-small\"></i>\n                  <p>text_caps-small</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"gestures\">\n          <h2>Touch Gestures</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons gestures_tap-01\"></i>\n                  <p>gestures_tap-01</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"transportation\">\n          <h2>Transportation</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons transportation_air-baloon\"></i>\n                  <p>transportation_air-baloon</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons transportation_bus-front-12\"></i>\n                  <p>transportation_bus-front-12</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"travel\">\n          <h2>Travel</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons travel_info\"></i>\n                  <p>travel_info</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons travel_istanbul\"></i>\n                  <p>travel_istanbul</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"interface\">\n          <h2>User Interface</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons ui-1_bell-53\"></i>\n                  <p>ui-1_bell-53</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_calendar-60\"></i>\n                  <p>ui-1_calendar-60</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_check\"></i>\n                  <p>ui-1_check</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_lock-circle-open\"></i>\n                  <p>ui-1_lock-circle-open</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_send\"></i>\n                  <p>ui-1_send</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                  <p>ui-1_settings-gear-63</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-add\"></i>\n                  <p>ui-1_simple-add</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-delete\"></i>\n                  <p>ui-1_simple-delete</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                  <p>ui-1_simple-remove</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\n                  <p>ui-1_zoom-bold</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_chat-round\"></i>\n                  <p>ui-2_chat-round</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                  <p>ui-2_favourite-28</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_like\"></i>\n                  <p>ui-2_like</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                  <p>ui-2_settings-90</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_time-alarm\"></i>\n                  <p>ui-2_time-alarm</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_email-85\"></i>\n                  <p>ui-1_email-85</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"users\">\n          <h2>Users</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons users_circle-08\"></i>\n                  <p>users_circle-08</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons users_single-02\"></i>\n                  <p>users_single-02</p>\n              </li>\n          </ul>\n      </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nucleo-icons-style,\n.nucleo-icons-style,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* .nucleo-icons-style5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain {\n  display: block; }\n\n.nucleo-icons-style {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/* --------------------------------\n\nNucleo Outline Web Font - nucleoapp.com/\nLicense - nucleoapp.com/license/\nCreated using IcoMoon - icomoon.io\n\n-------------------------------- */\n\n/* --------------------------------\n\nPrimary style\n\n-------------------------------- */\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box; }\n\n.nucleo-icons-style {\n  font-size: 62.5%; }\n\n.nucleo-icons-style {\n  font-size: 1.6rem;\n  font-family: sans-serif;\n  color: #333333;\n  background: #efefef; }\n\na {\n  color: #766acf;\n  text-decoration: none; }\n\n/* --------------------------------\n\nMain components\n\n-------------------------------- */\n\nheader {\n  text-align: center;\n  padding: 120px 0 0; }\n\nheader h1 {\n  font-size: 1.2rem; }\n\nheader p {\n  font-size: .9rem;\n  margin-top: .6em; }\n\nheader a:hover {\n  text-decoration: underline; }\n\nsection {\n  width: 90%;\n  max-width: 1200px;\n  margin: 50px auto; }\n\nsection h2 {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 0 0 1em .2em;\n  margin-bottom: 1em;\n  font-size: 1rem; }\n\nul::after {\n  clear: both;\n  content: \"\";\n  display: table; }\n\nul li {\n  width: 25%;\n  float: left;\n  padding: 16px 0;\n  text-align: center;\n  border-radius: .25em;\n  transition: background 0.2s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden; }\n\nul li:hover {\n  background: #dbdbdb; }\n\nul p,\nul em,\nul input {\n  display: inline-block;\n  font-size: 0.7rem;\n  color: #999999;\n  -webkit-user-select: auto;\n  -moz-user-select: auto;\n  -ms-user-select: auto;\n  user-select: auto;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer; }\n\nul p {\n  padding: 10px;\n  margin-top: 10px; }\n\nul p::-moz-selection,\nul em::-moz-selection {\n  background: #766acf;\n  color: #efefef; }\n\nul p::selection,\nul em::selection {\n  background: #766acf;\n  color: #efefef; }\n\nul em {\n  margin-bottom: 8px; }\n\nul em::before {\n  content: '['; }\n\nul em::after {\n  content: ']'; }\n\nul input {\n  text-align: center;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  outline: none; }\n\n@media only screen and (min-width: 768px) {\n  ul li {\n    width: 20%;\n    float: left; } }\n\n@media only screen and (min-width: 1024px) {\n  ul li {\n    width: 12.5%;\n    float: left;\n    padding: 32px 0; } }\n\n/* --------------------------------\n\nSmart fixed navigation\n\n-------------------------------- */\n\n#cd-nav ul {\n  /* mobile first */\n  position: fixed;\n  width: 90%;\n  max-width: 400px;\n  max-height: 90%;\n  right: 5%;\n  bottom: 5%;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: white;\n  visibility: hidden;\n  /* remove overflow:hidden if you want to create a drop-down menu - but then remember to fix/eliminate the list items animation */\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 1;\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: scale(0);\n  transform-origin: 100% 100%;\n  transition: transform 0.3s, visibility 0s 0.3s; }\n\n#cd-nav ul li {\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: block;\n  width: 100%;\n  padding: 0;\n  text-align: left; }\n\n#cd-nav ul li:hover {\n  background-color: #FFF; }\n\n#cd-nav ul.is-visible {\n  visibility: visible;\n  transform: scale(1);\n  transition: transform 0.3s, visibility 0s 0s; }\n\n#cd-nav li a {\n  display: block;\n  padding: 1em;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #eff2f6; }\n\n#cd-nav li a:hover {\n  color: #333333; }\n\n#cd-nav li:last-child a {\n  border-bottom: none; }\n\n.cd-nav-trigger {\n  position: fixed;\n  bottom: 5%;\n  right: 5%;\n  width: 44px;\n  height: 44px;\n  background: white;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  /* image replacement */\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  z-index: 2; }\n\n.cd-nav-trigger span {\n  /* the span element is used to create the menu icon */\n  position: absolute;\n  display: block;\n  width: 20px;\n  height: 2px;\n  background: #333333;\n  top: 50%;\n  margin-top: -1px;\n  left: 50%;\n  margin-left: -10px;\n  transition: background 0.3s; }\n\n.cd-nav-trigger span::before,\n.cd-nav-trigger span::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  background: inherit;\n  width: 100%;\n  height: 100%;\n  /* Force Hardware Acceleration in WebKit */\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: transform 0.3s, background 0s; }\n\n.cd-nav-trigger span::before {\n  top: -6px;\n  transform: rotate(0); }\n\n.cd-nav-trigger span::after {\n  bottom: -6px;\n  transform: rotate(0); }\n\n.cd-nav-trigger.menu-is-open {\n  box-shadow: none; }\n\n.cd-nav-trigger.menu-is-open span {\n  background: rgba(232, 74, 100, 0); }\n\n.cd-nav-trigger.menu-is-open span::before,\n.cd-nav-trigger.menu-is-open span::after {\n  background: #333333; }\n\n.cd-nav-trigger.menu-is-open span::before {\n  top: 0;\n  transform: rotate(135deg); }\n\n.cd-nav-trigger.menu-is-open span::after {\n  bottom: 0;\n  transform: rotate(225deg); }\n\n.now-ui-icons {\n  display: inline-block;\n  font: normal normal normal 32px/1 'Nucleo Outline';\n  speak: none;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZGVyc29uL2dpdGh1Yi9Sb3RhLWRvLVZpbmhvL2NsaWVudF9zaWRlL3NyYy9hcHAvY29tcG9uZW50cy9udWNsZW9pY29ucy9udWNsZW9pY29ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9udWNsZW9pY29ucy9udWNsZW9pY29ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZJLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCLEVBQUE7O0FBRzVCLCtEQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7RUFZSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjs7RUFFSSxnQkFBZ0IsRUFBQTs7QUFHcEI7O0VBRUksWUFBWSxFQUFBOztBQUdoQjs7OztFQUlJLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2pCO0VBQ0kseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBOztBQUtyQjs7Ozs7O2tDQ0prQzs7QURZbEM7Ozs7a0NDUGtDOztBRGFsQzs7O0VBR0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQixFQUFBOztBQUd6Qjs7OztrQ0Naa0M7O0FEa0JsQztFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUdwQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2Qjs7O0VBR0kscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUdwQjs7RUFFSSxtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUhsQjs7RUFFSSxtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTs7QUFHakI7RUFDSTtJQUNJLFVBQVU7SUFDVixXQUFXLEVBQUEsRUFDZDs7QUFHTDtFQUNJO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlLEVBQUEsRUFDbEI7O0FBR0w7Ozs7a0NDakNrQzs7QUR1Q2xDO0VBQ0ksaUJBQUE7RUFDQSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsdUNBQXVDO0VBQ3ZDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0lBQUE7RUFDQSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViwwQ0FBQTtFQUNBLG1DQUFtQztFQUNuQywyQkFBMkI7RUFLM0IsbUJBQW1CO0VBS25CLDJCQUEyQjtFQUczQiw4Q0FBOEMsRUFBQTs7QUFHbEQ7RUFDSSwwQ0FBQTtFQUNBLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IsY0FBYztFQUNkLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksbUJBQW1CO0VBS25CLG1CQUFtQjtFQUduQiw0Q0FBNEMsRUFBQTs7QUFHaEQ7RUFDSSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHVDQUF1QztFQUN2QyxzQkFBQTtFQUNBLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHFEQUFBO0VBQ0Esa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxrQkFBa0I7RUFHbEIsMkJBQTJCLEVBQUE7O0FBRy9COztFQUVJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDBDQUFBO0VBS0Esd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQywyQkFBMkI7RUFHM0IseUNBQXlDLEVBQUE7O0FBRzdDO0VBQ0ksU0FBUztFQUtULG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLFlBQVk7RUFLWixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQ0FBaUMsRUFBQTs7QUFHckM7O0VBRUksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksTUFBTTtFQUtOLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLFNBQVM7RUFLVCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxxQkFBcUI7RUFDckIsa0RBQWtEO0VBQ2xELFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLGtDQUFrQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9udWNsZW9pY29ucy9udWNsZW9pY29ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5udWNsZW8taWNvbnMtc3R5bGUsXG4ubnVjbGVvLWljb25zLXN0eWxlLFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogLm51Y2xlby1pY29ucy1zdHlsZTUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uLFxubWFpbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5udWNsZW8taWNvbnMtc3R5bGUge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCxcbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gICAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuTnVjbGVvIE91dGxpbmUgV2ViIEZvbnQgLSBudWNsZW9hcHAuY29tL1xuTGljZW5zZSAtIG51Y2xlb2FwcC5jb20vbGljZW5zZS9cbkNyZWF0ZWQgdXNpbmcgSWNvTW9vbiAtIGljb21vb24uaW9cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuUHJpbWFyeSBzdHlsZVxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4qLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5udWNsZW8taWNvbnMtc3R5bGUge1xuICAgIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbi5udWNsZW8taWNvbnMtc3R5bGUge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbmEge1xuICAgIGNvbG9yOiAjNzY2YWNmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuTWFpbiBjb21wb25lbnRzXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEyMHB4IDAgMDtcbn1cblxuaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuaGVhZGVyIHAge1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgbWFyZ2luLXRvcDogLjZlbTtcbn1cblxuaGVhZGVyIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5zZWN0aW9uIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG5zZWN0aW9uIGgyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZTJlMjtcbiAgICBwYWRkaW5nOiAwIDAgMWVtIC4yZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxudWw6OmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xufVxuXG51bCBsaSB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbnVsIGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGJkYmRiO1xufVxuXG51bCBwLFxudWwgZW0sXG51bCBpbnB1dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGF1dG87XG4gICAgLW1vei11c2VyLXNlbGVjdDogYXV0bztcbiAgICAtbXMtdXNlci1zZWxlY3Q6IGF1dG87XG4gICAgdXNlci1zZWxlY3Q6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudWwgcCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG51bCBwOjpzZWxlY3Rpb24sXG51bCBlbTo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjNzY2YWNmO1xuICAgIGNvbG9yOiAjZWZlZmVmO1xufVxuXG51bCBlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG51bCBlbTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnWyc7XG59XG5cbnVsIGVtOjphZnRlciB7XG4gICAgY29udGVudDogJ10nO1xufVxuXG51bCBpbnB1dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICB1bCBsaSB7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICB1bCBsaSB7XG4gICAgICAgIHdpZHRoOiAxMi41JTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDMycHggMDtcbiAgICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblNtYXJ0IGZpeGVkIG5hdmlnYXRpb25cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuI2NkLW5hdiB1bCB7XG4gICAgLyogbW9iaWxlIGZpcnN0ICovXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XG4gICAgcmlnaHQ6IDUlO1xuICAgIGJvdHRvbTogNSU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLyogcmVtb3ZlIG92ZXJmbG93OmhpZGRlbiBpZiB5b3Ugd2FudCB0byBjcmVhdGUgYSBkcm9wLWRvd24gbWVudSAtIGJ1dCB0aGVuIHJlbWVtYmVyIHRvIGZpeC9lbGltaW5hdGUgdGhlIGxpc3QgaXRlbXMgYW5pbWF0aW9uICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHotaW5kZXg6IDE7XG4gICAgLyogRm9yY2UgSGFyZHdhcmUgQWNjZWxlcmF0aW9uIGluIFdlYktpdCAqL1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDAuM3M7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcbn1cblxuI2NkLW5hdiB1bCBsaSB7XG4gICAgLyogRm9yY2UgSGFyZHdhcmUgQWNjZWxlcmF0aW9uIGluIFdlYktpdCAqL1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbiNjZC1uYXYgdWwgbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG5cbiNjZC1uYXYgdWwuaXMtdmlzaWJsZSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDBzO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDBzO1xufVxuXG4jY2QtbmF2IGxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZjJmNjtcbn1cblxuI2NkLW5hdiBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMzMzMztcbn1cblxuI2NkLW5hdiBsaTpsYXN0LWNoaWxkIGEge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNSU7XG4gICAgcmlnaHQ6IDUlO1xuICAgIHdpZHRoOiA0NHB4O1xuICAgIGhlaWdodDogNDRweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIC8qIGltYWdlIHJlcGxhY2VtZW50ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LWluZGVudDogMTAwJTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuIHtcbiAgICAvKiB0aGUgc3BhbiBlbGVtZW50IGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBtZW51IGljb24gKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YmVmb3JlLFxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzLCBiYWNrZ3JvdW5kIDBzO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBiYWNrZ3JvdW5kIDBzO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YmVmb3JlIHtcbiAgICB0b3A6IC02cHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmFmdGVyIHtcbiAgICBib3R0b206IC02cHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMiwgNzQsIDEwMCwgMCk7XG59XG5cbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3Bhbjo6YmVmb3JlLFxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcbn1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjphZnRlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xufVxuXG4ubm93LXVpLWljb25zIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMzJweC8xICdOdWNsZW8gT3V0bGluZSc7XG4gICAgc3BlYWs6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cbiIsIi5udWNsZW8taWNvbnMtc3R5bGUsXG4ubnVjbGVvLWljb25zLXN0eWxlLFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxuXG4vKiAubnVjbGVvLWljb25zLXN0eWxlNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uLFxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5udWNsZW8taWNvbnMtc3R5bGUge1xuICBsaW5lLWhlaWdodDogMTsgfVxuXG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTsgfVxuXG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgY29udGVudDogbm9uZTsgfVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbk51Y2xlbyBPdXRsaW5lIFdlYiBGb250IC0gbnVjbGVvYXBwLmNvbS9cbkxpY2Vuc2UgLSBudWNsZW9hcHAuY29tL2xpY2Vuc2UvXG5DcmVhdGVkIHVzaW5nIEljb01vb24gLSBpY29tb29uLmlvXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5QcmltYXJ5IHN0eWxlXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4qLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi5udWNsZW8taWNvbnMtc3R5bGUge1xuICBmb250LXNpemU6IDYyLjUlOyB9XG5cbi5udWNsZW8taWNvbnMtc3R5bGUge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmOyB9XG5cbmEge1xuICBjb2xvcjogIzc2NmFjZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbk1haW4gY29tcG9uZW50c1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMjBweCAwIDA7IH1cblxuaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAxLjJyZW07IH1cblxuaGVhZGVyIHAge1xuICBmb250LXNpemU6IC45cmVtO1xuICBtYXJnaW4tdG9wOiAuNmVtOyB9XG5cbmhlYWRlciBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cblxuc2VjdGlvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bzsgfVxuXG5zZWN0aW9uIGgyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmUyZTI7XG4gIHBhZGRpbmc6IDAgMCAxZW0gLjJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBmb250LXNpemU6IDFyZW07IH1cblxudWw6OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlOyB9XG5cbnVsIGxpIHtcbiAgd2lkdGg6IDI1JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAuMjVlbTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxudWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGJkYmRiOyB9XG5cbnVsIHAsXG51bCBlbSxcbnVsIGlucHV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IGF1dG87XG4gIC1tb3otdXNlci1zZWxlY3Q6IGF1dG87XG4gIC1tcy11c2VyLXNlbGVjdDogYXV0bztcbiAgdXNlci1zZWxlY3Q6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbnVsIHAge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4OyB9XG5cbnVsIHA6OnNlbGVjdGlvbixcbnVsIGVtOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjNzY2YWNmO1xuICBjb2xvcjogI2VmZWZlZjsgfVxuXG51bCBlbSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDsgfVxuXG51bCBlbTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1snOyB9XG5cbnVsIGVtOjphZnRlciB7XG4gIGNvbnRlbnQ6ICddJzsgfVxuXG51bCBpbnB1dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTsgfVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIHVsIGxpIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGZsb2F0OiBsZWZ0OyB9IH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgdWwgbGkge1xuICAgIHdpZHRoOiAxMi41JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAzMnB4IDA7IH0gfVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5TbWFydCBmaXhlZCBuYXZpZ2F0aW9uXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4jY2QtbmF2IHVsIHtcbiAgLyogbW9iaWxlIGZpcnN0ICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWF4LWhlaWdodDogOTAlO1xuICByaWdodDogNSU7XG4gIGJvdHRvbTogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAvKiByZW1vdmUgb3ZlcmZsb3c6aGlkZGVuIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSBhIGRyb3AtZG93biBtZW51IC0gYnV0IHRoZW4gcmVtZW1iZXIgdG8gZml4L2VsaW1pbmF0ZSB0aGUgbGlzdCBpdGVtcyBhbmltYXRpb24gKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgei1pbmRleDogMTtcbiAgLyogRm9yY2UgSGFyZHdhcmUgQWNjZWxlcmF0aW9uIGluIFdlYktpdCAqL1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zczsgfVxuXG4jY2QtbmF2IHVsIGxpIHtcbiAgLyogRm9yY2UgSGFyZHdhcmUgQWNjZWxlcmF0aW9uIGluIFdlYktpdCAqL1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuI2NkLW5hdiB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7IH1cblxuI2NkLW5hdiB1bC5pcy12aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7IH1cblxuI2NkLW5hdiBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZmMmY2OyB9XG5cbiNjZC1uYXYgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjMzMzMzMzOyB9XG5cbiNjZC1uYXYgbGk6bGFzdC1jaGlsZCBhIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuXG4uY2QtbmF2LXRyaWdnZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNSU7XG4gIHJpZ2h0OiA1JTtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAvKiBpbWFnZSByZXBsYWNlbWVudCAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWluZGVudDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgei1pbmRleDogMjsgfVxuXG4uY2QtbmF2LXRyaWdnZXIgc3BhbiB7XG4gIC8qIHRoZSBzcGFuIGVsZW1lbnQgaXMgdXNlZCB0byBjcmVhdGUgdGhlIG1lbnUgaWNvbiAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7IH1cblxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmJlZm9yZSxcbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCBiYWNrZ3JvdW5kIDBzO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBiYWNrZ3JvdW5kIDBzOyB9XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjpiZWZvcmUge1xuICB0b3A6IC02cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDApOyB9XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjphZnRlciB7XG4gIGJvdHRvbTogLTZweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiB7XG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzIsIDc0LCAxMDAsIDApOyB9XG5cbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3Bhbjo6YmVmb3JlLFxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7IH1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTsgfVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmFmdGVyIHtcbiAgYm90dG9tOiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7IH1cblxuLm5vdy11aS1pY29ucyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMzJweC8xICdOdWNsZW8gT3V0bGluZSc7XG4gIHNwZWFrOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
  \*****************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-transparent');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    };
    NucleoiconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nucleoicons',
            template: __webpack_require__(/*! ./nucleoicons.component.html */ "./src/app/components/nucleoicons/nucleoicons.component.html"),
            styles: [__webpack_require__(/*! ./nucleoicons.component.scss */ "./src/app/components/nucleoicons/nucleoicons.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container\">\n        <h3 class=\"title\">Typography</h3>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"typography-line\">\n                        <h1>\n                            <span>Header 1</span>The Life of Now UI Kit </h1>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h2>\n                            <span>Header 2</span>The Life of Now UI Kit</h2>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h3>\n                            <span>Header 3</span>The Life of Now UI Kit</h3>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h4>\n                            <span>Header 4</span>The Life of Now UI Kit</h4>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h5>\n                            <span>Header 5</span>The Life of Now UI Kit</h5>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h6>\n                            <span>Header 6</span>The Life of Now UI Kit</h6>\n                    </div>\n                    <div class=\"typography-line\">\n                        <p>\n                            <span>Paragraph</span>\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Quote</span>\n                        <blockquote>\n                            <p class=\"blockquote blockquote-primary\">\n                                \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                <br>\n                                <br>\n                                <small>\n                                    - Noaa\n                                </small>\n                            </p>\n                        </blockquote>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Muted Text</span>\n                        <p class=\"text-muted\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Primary Text</span>\n                        <p class=\"text-primary\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Info Text</span>\n                        <p class=\"text-info\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Success Text</span>\n                        <p class=\"text-success\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Warning Text</span>\n                        <p class=\"text-warning\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Danger Text</span>\n                        <p class=\"text-danger\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h2>\n                            <span>Small Tag</span>\n                            Header with small subtitle\n                            <br>\n                            <small>Use \"small\" tag for the headers</small>\n                        </h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"space-50\"></div>\n        <div id=\"images\">\n            <h4>Images</h4>\n            <div class=\"row\">\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Image</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Rounded Image\" class=\"rounded\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Circle Image</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Circle Image\" class=\"rounded-circle\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Raised</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Raised Image\" class=\"rounded img-raised\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Circle Raised</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-raised\">\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/components/typography/typography.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/components/typography/typography.component.html"),
            styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/components/typography/typography.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/examples/examples.component.html":
/*!**************************************************!*\
  !*** ./src/app/examples/examples.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  examples works!\n</p>\n"

/***/ }),

/***/ "./src/app/examples/examples.component.scss":
/*!**************************************************!*\
  !*** ./src/app/examples/examples.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/examples/examples.component.ts":
/*!************************************************!*\
  !*** ./src/app/examples/examples.component.ts ***!
  \************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/examples/examples.module.ts":
/*!*********************************************!*\
  !*** ./src/app/examples/examples.module.ts ***!
  \*********************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/examples/landing/landing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/examples/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/examples/profile/profile.component.ts");
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples.component */ "./src/app/examples/examples.component.ts");












var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_KEY_HERE'
                })
            ],
            declarations: [
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _examples_component__WEBPACK_IMPORTED_MODULE_11__["ExamplesComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
            ]
        })
    ], ExamplesModule);
    return ExamplesModule;
}());



/***/ }),

/***/ "./src/app/examples/landing/landing.component.html":
/*!*********************************************************!*\
  !*** ./src/app/examples/landing/landing.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg6.jpg');\">\n        </div>\n        <div class=\"container\">\n            <div class=\"content-center\">\n                <h1 class=\"title\"></h1>\n                <div class=\"text-center\">\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\n                    <i class=\"fab fa-facebook-square\"></i>\n                  </a>\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\n                    <i class=\"fab fa-twitter\"></i>\n                  </a>\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\n                    <i class=\"fab fa-google-plus\"></i>\n                  </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-about-us\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Who we are?</h2>\n                    <h5 class=\"description\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</h5>\n                </div>\n            </div>\n            <div class=\"separator separator-primary\"></div>\n            <div class=\"section-story-overview\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"image-container image-left\" style=\"background-image: url('assets/img/login.jpg')\">\n                            <!-- First image on the left side -->\n                            <p class=\"blockquote blockquote-primary\">\"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly\"\n                                <br>\n                                <br>\n                                <small>-NOAA</small>\n                            </p>\n                        </div>\n                        <!-- Second image on the left side of the article -->\n                        <div class=\"image-container\" style=\"background-image: url('assets/img/bg3.jpg')\"></div>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <!-- First image on the right side, above the article -->\n                        <div class=\"image-container image-right\" style=\"background-image: url('assets/img/bg1.jpg')\"></div>\n                        <h3>So what does the new record for the lowest level of winter ice actually mean</h3>\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\n                        </p>\n                        <p>\n                            For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.\n                        </p>\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-team text-center\">\n        <div class=\"container\">\n            <h2 class=\"title\">Here is our team</h2>\n            <div class=\"team\">\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <div class=\"team-player\">\n                            <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\n                            <h4 class=\"title\">Romina Hadid</h4>\n                            <p class=\"category text-primary\">Model</p>\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-instagram\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-facebook-square\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"team-player\">\n                            <img src=\"assets/img/ryan.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\n                            <h4 class=\"title\">Ryan Tompson</h4>\n                            <p class=\"category text-primary\">Designer</p>\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-linkedin\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"team-player\">\n                            <img src=\"assets/img/eva.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\n                            <h4 class=\"title\">Eva Jenner</h4>\n                            <p class=\"category text-primary\">Fashion</p>\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-google-plus\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-youtube\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-twitter\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-contact-us text-center\">\n        <div class=\"container\">\n            <h2 class=\"title\">Want to work with us?</h2>\n            <p class=\"description\">Your project is very important to us.</p>\n            <div class=\"row\">\n                <div class=\"col-lg-6 text-center col-md-8 ml-auto mr-auto\">\n                  <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <div class=\"input-group-prepend\" >\n                      <span class=\"input-group-text\">\n                          <i class=\"now-ui-icons users_circle-08\"></i>\n                      </span>\n                    </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n                  <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                    <div class=\"input-group-prepend\" >\n                      <span class=\"input-group-text\">\n                            <i class=\"now-ui-icons ui-1_email-85\"></i>\n                      </span>\n                    </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                  </div>\n                    <div class=\"textarea-container\">\n                        <textarea class=\"form-control\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\n                    </div>\n                    <div class=\"send-button\">\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-block btn-lg\">Send Message</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer footer-default\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.creative-tim.com\">\n                            Creative Tim\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.creative-tim.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.creative-tim.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                            MIT License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n                {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/examples/landing/landing.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/examples/landing/landing.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/examples/landing/landing.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/examples/landing/landing.component.ts ***!
  \*******************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_vinicola_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/vinicola.service */ "./src/app/service/vinicola.service.ts");




var LandingComponent = /** @class */ (function () {
    function LandingComponent(vinicolaService) {
        this.vinicolaService = vinicolaService;
        this.vinicolas = [];
        this.data = new Date();
    }
    LandingComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_2__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        this.getVinicola();
        console.log(this.vinicolas);
    };
    LandingComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LandingComponent.prototype.getVinicola = function () {
        var _this = this;
        this.vinicolaService.getVinicola().subscribe(function (res) {
            console.log(res);
            _this.vinicolas = res;
        }, function (err) { return console.log(err); });
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/examples/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/examples/landing/landing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_vinicola_service__WEBPACK_IMPORTED_MODULE_3__["VinicolaService"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/examples/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/examples/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page-header\" filter-color=\"orange\">\n    <div class=\"page-header-image\" style=\"background-image:url(assets/img/login.jpg)\"></div>\n    <div class=\"container\">\n        <div class=\"col-md-4 content-center\">\n            <div class=\"card card-login card-plain\">\n                <form class=\"form\" method=\"\" action=\"\">\n                    <div class=\"header header-primary text-center\">\n                        <div class=\"logo-container\">\n                            <img src=\"assets/img/now-logo.png\" alt=\"\">\n                        </div>\n                    </div>\n                    <div class=\"content\">\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\n                        </div>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                      </div>\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n                        </div>\n                          <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\n                      </div>\n                    </div>\n                    <div class=\"footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a>\n                    </div>\n                    <div class=\"pull-left\">\n                        <h6>\n                            <a href=\"#pablo\" class=\"link\">Create Account</a>\n                        </h6>\n                    </div>\n                    <div class=\"pull-right\">\n                        <h6>\n                            <a href=\"#pablo\" class=\"link\">Need Help?</a>\n                        </h6>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.creative-tim.com\">\n                            Creative Tim\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.creative-tim.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.creative-tim.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                            MIT License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n              {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/examples/login/login.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/examples/login/login.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/examples/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/examples/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.data = new Date();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/examples/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/examples/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/examples/profile/profile.component.html":
/*!*********************************************************!*\
  !*** ./src/app/examples/profile/profile.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\" filter-color=\"orange\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg5.jpg') ;\">\n        </div>\n        <div class=\"container\">\n            <div class=\"content-center\">\n                <div class=\"photo-container\">\n                    <img src=\"assets/img/ryan.jpg\" alt=\"\">\n                </div>\n                <h3 class=\"title\">Ryan Scheinder</h3>\n                <p class=\"category\">Photographer</p>\n                <div class=\"content\">\n                    <div class=\"social-description\">\n                        <h2>26</h2>\n                        <p>Comments</p>\n                    </div>\n                    <div class=\"social-description\">\n                        <h2>26</h2>\n                        <p>Comments</p>\n                    </div>\n                    <div class=\"social-description\">\n                        <h2>48</h2>\n                        <p>Bookmarks</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section\">\n        <div class=\"container\">\n          <div class=\"button-container\">\n              <a href=\"#button\" class=\"btn btn-primary btn-round btn-lg\">Follow</a>\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Twitter\">\n                <i class=\"fab fa-twitter\"></i>\n              </a>\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Instagram\">\n                <i class=\"fab fa-instagram\"></i>\n              </a>\n          </div>\n          <h3 class=\"title\">About me</h3>\n          <h5 class=\"description\">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</h5>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <h4 class=\"title text-center\">My Portfolio</h4>\n                      <ngb-tabset [justify]=\"'center'\" type=\"pills\" class=\"nav nav-pills nav-pills-primary  nav-pills-just-icons justify-content-center tab-space\">\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons design_image\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\n                                      <div class=\"row collections\">\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg1.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                      </div>\n                                  </div>\n                                </div>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons location_world\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\n                                      <div class=\"row collections\">\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg11.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                      </div>\n                                  </div>\n                                </div>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons sport_user-run\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\n                                      <div class=\"row collections\">\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\n                                          </div>\n                                      </div>\n                                  </div>\n                                </div>\n                              </ng-template>\n                          </ngb-tab>\n                      </ngb-tabset>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer footer-default\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.creative-tim.com\">\n                            Creative Tim\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.creative-tim.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.creative-tim.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                            MIT License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n                {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/examples/profile/profile.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/examples/profile/profile.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/examples/profile/profile.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/examples/profile/profile.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_2__);



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.styles = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
        this.data = new Date();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_2__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/examples/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/examples/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/service/vinicola.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/vinicola.service.ts ***!
  \*********************************************/
/*! exports provided: VinicolaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinicolaService", function() { return VinicolaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var VinicolaService = /** @class */ (function () {
    function VinicolaService(http) {
        this.http = http;
        this.API_URI = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_uri;
    }
    VinicolaService.prototype.getVinicola = function () {
        return this.http.get(this.API_URI + "vinicolaControl/lista");
    };
    VinicolaService.prototype.getInfoVinicola = function (id) {
        return this.http.get(this.API_URI + "vinicolaControl/infoGeral/" + id);
    };
    VinicolaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VinicolaService);
    return VinicolaService;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\" color-on-scroll=\"500\">\n  <div class=\"container\">\n    <div class=\"dropdown button-dropdown\">\n      <div ngbDropdown>\n        <a class=\"dropdown-toggle\" ngbDropdownToggle>\n          <span class=\"button-bar\"></span>\n          <span class=\"button-bar\"></span>\n          <span class=\"button-bar\"></span>\n        </a>\n        <div ngbDropdownMenu>\n          <a class=\"dropdown-item\" *ngFor=\"let vinicola of vinicolas\">{{vinicola.nomeEmpresa}}</a>\n          <div class=\"dropdown-divider\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"navbar-translate\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/index']\" placement=\"bottom\" ngbTooltip=\"Lista de Vinicolas\">\n        AVISTa\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\"\n        aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n        (click)=\"sidebarToggle()\">\n        <span class=\"navbar-toggler-bar bar1\"></span>\n        <span class=\"navbar-toggler-bar bar2\"></span>\n        <span class=\"navbar-toggler-bar bar3\"></span>\n      </button>\n    </div>\n\n\n\n    <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"orange\">\n      <ul class=\"navbar-nav ml-auto\">\n\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://www.creative-tim.com/product/now-ui-kit-angular\" target=\"_blank\">\n            <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\n            <p>Vinicolas</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"\" target=\"_blank\" style=\"margin-right: 350px;\">\n            <i class=\"now-ui-icons files_paper\"></i>\n            <p>Rotas</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Twitter\" data-placement=\"bottom\"\n            href=\"https://twitter.com/CreativeTim\" target=\"_blank\">\n            <i class=\"fab fa-twitter\"></i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\"\n            href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\">\n            <i class=\"fab fa-facebook-square\"></i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\" target=\"_blank\">\n            <i class=\"fab fa-instagram\"></i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_service_vinicola_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/vinicola.service */ "./src/app/service/vinicola.service.ts");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, vinicolaService) {
        this.location = location;
        this.element = element;
        this.vinicolaService = vinicolaService;
        this.vinicolas = [];
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.vinicolaService.getVinicola().subscribe(function (res) {
            _this.vinicolas = res;
        }, function (err) { return console.log(err); });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], app_service_vinicola_service__WEBPACK_IMPORTED_MODULE_3__["VinicolaService"]])
    ], NavbarComponent);
    return NavbarComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api_uri: 'http://localhost:3000/api/'
};


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
/*!

=========================================================
* Now UI Kit Angular - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/anderson/github/Rota-do-Vinho/client_side/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map