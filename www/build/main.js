webpackJsonp([0],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
        this.menu = 'dashboard';
        events.subscribe('sidemenu', function (menu) {
            _this.menu = menu;
        });
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/pages/home/home.html"*/'<ion-header class="header">\n	<ion-navbar>\n		<!-- Component header -->\n		<header></header>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-grid no-padding>\n		<ion-row>\n			<!-- Component sidemenu -->\n			<sidemenu></sidemenu>\n\n			<dashboard *ngIf="menu == \'dashboard\'"></dashboard>\n			<market *ngIf="menu == \'market\'"></market>\n			<fast-buy *ngIf="menu == \'fast_buy\'"></fast-buy>\n\n			<div id="o-wrapper" class="o-wrapper">\n				<main class="o-content">\n					<div class="o-container">\n						<div class="c-buttons"></div>\n					</div>\n				</main>\n			</div>\n			<nav id="c-menu--slide-right" class="c-menu c-menu--slide-right">\n				\n			</nav><!-- /c-menu slide-right -->\n			\n			<div id="c-mask" class="c-mask"></div><!-- /c-mask -->\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(342);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_tooltips__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_orders_orders__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_header_header__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_sidemenu_sidemenu__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_suppliers_suppliers__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_activities_activities__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_products_products__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_popover_popover__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_market_market__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_submenu_submenu__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_products_list_products_list__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_featured_suppliers_featured_suppliers__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_submenu_popover_submenu_popover__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_product_product__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_rating_rating__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_category_category__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_fast_buy_fast_buy__ = __webpack_require__(461);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__components_orders_orders__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_header_header__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_sidemenu_sidemenu__["a" /* SidemenuComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_suppliers_suppliers__["a" /* SuppliersComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_activities_activities__["a" /* ActivitiesComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_products_products__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_market_market__["a" /* MarketComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_popover_popover__["a" /* PopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_submenu_submenu__["a" /* SubmenuComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_products_list_products_list__["a" /* ProductsListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_featured_suppliers_featured_suppliers__["a" /* FeaturedSuppliersComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_submenu_popover_submenu_popover__["a" /* SubmenuPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_product_product__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_rating_rating__["a" /* RatingComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_category_category__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_fast_buy_fast_buy__["a" /* FastBuyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_7_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_8_ionic_tooltips__["a" /* TooltipsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__components_popover_popover__["a" /* PopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_submenu_popover_submenu_popover__["a" /* SubmenuPopoverComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: 'pt-BR' },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/app/app.html"*/'<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 206,
	"./af.js": 206,
	"./ar": 207,
	"./ar-dz": 208,
	"./ar-dz.js": 208,
	"./ar-kw": 209,
	"./ar-kw.js": 209,
	"./ar-ly": 210,
	"./ar-ly.js": 210,
	"./ar-ma": 211,
	"./ar-ma.js": 211,
	"./ar-sa": 212,
	"./ar-sa.js": 212,
	"./ar-tn": 213,
	"./ar-tn.js": 213,
	"./ar.js": 207,
	"./az": 214,
	"./az.js": 214,
	"./be": 215,
	"./be.js": 215,
	"./bg": 216,
	"./bg.js": 216,
	"./bn": 217,
	"./bn.js": 217,
	"./bo": 218,
	"./bo.js": 218,
	"./br": 219,
	"./br.js": 219,
	"./bs": 220,
	"./bs.js": 220,
	"./ca": 221,
	"./ca.js": 221,
	"./cs": 222,
	"./cs.js": 222,
	"./cv": 223,
	"./cv.js": 223,
	"./cy": 224,
	"./cy.js": 224,
	"./da": 225,
	"./da.js": 225,
	"./de": 226,
	"./de-at": 227,
	"./de-at.js": 227,
	"./de-ch": 228,
	"./de-ch.js": 228,
	"./de.js": 226,
	"./dv": 229,
	"./dv.js": 229,
	"./el": 230,
	"./el.js": 230,
	"./en-au": 231,
	"./en-au.js": 231,
	"./en-ca": 232,
	"./en-ca.js": 232,
	"./en-gb": 233,
	"./en-gb.js": 233,
	"./en-ie": 234,
	"./en-ie.js": 234,
	"./en-nz": 235,
	"./en-nz.js": 235,
	"./eo": 236,
	"./eo.js": 236,
	"./es": 237,
	"./es-do": 238,
	"./es-do.js": 238,
	"./es.js": 237,
	"./et": 239,
	"./et.js": 239,
	"./eu": 240,
	"./eu.js": 240,
	"./fa": 241,
	"./fa.js": 241,
	"./fi": 242,
	"./fi.js": 242,
	"./fo": 243,
	"./fo.js": 243,
	"./fr": 244,
	"./fr-ca": 245,
	"./fr-ca.js": 245,
	"./fr-ch": 246,
	"./fr-ch.js": 246,
	"./fr.js": 244,
	"./fy": 247,
	"./fy.js": 247,
	"./gd": 248,
	"./gd.js": 248,
	"./gl": 249,
	"./gl.js": 249,
	"./gom-latn": 250,
	"./gom-latn.js": 250,
	"./he": 251,
	"./he.js": 251,
	"./hi": 252,
	"./hi.js": 252,
	"./hr": 253,
	"./hr.js": 253,
	"./hu": 254,
	"./hu.js": 254,
	"./hy-am": 255,
	"./hy-am.js": 255,
	"./id": 256,
	"./id.js": 256,
	"./is": 257,
	"./is.js": 257,
	"./it": 258,
	"./it.js": 258,
	"./ja": 259,
	"./ja.js": 259,
	"./jv": 260,
	"./jv.js": 260,
	"./ka": 261,
	"./ka.js": 261,
	"./kk": 262,
	"./kk.js": 262,
	"./km": 263,
	"./km.js": 263,
	"./kn": 264,
	"./kn.js": 264,
	"./ko": 265,
	"./ko.js": 265,
	"./ky": 266,
	"./ky.js": 266,
	"./lb": 267,
	"./lb.js": 267,
	"./lo": 268,
	"./lo.js": 268,
	"./lt": 269,
	"./lt.js": 269,
	"./lv": 270,
	"./lv.js": 270,
	"./me": 271,
	"./me.js": 271,
	"./mi": 272,
	"./mi.js": 272,
	"./mk": 273,
	"./mk.js": 273,
	"./ml": 274,
	"./ml.js": 274,
	"./mr": 275,
	"./mr.js": 275,
	"./ms": 276,
	"./ms-my": 277,
	"./ms-my.js": 277,
	"./ms.js": 276,
	"./my": 278,
	"./my.js": 278,
	"./nb": 279,
	"./nb.js": 279,
	"./ne": 280,
	"./ne.js": 280,
	"./nl": 281,
	"./nl-be": 282,
	"./nl-be.js": 282,
	"./nl.js": 281,
	"./nn": 283,
	"./nn.js": 283,
	"./pa-in": 284,
	"./pa-in.js": 284,
	"./pl": 285,
	"./pl.js": 285,
	"./pt": 286,
	"./pt-br": 287,
	"./pt-br.js": 287,
	"./pt.js": 286,
	"./ro": 288,
	"./ro.js": 288,
	"./ru": 289,
	"./ru.js": 289,
	"./sd": 290,
	"./sd.js": 290,
	"./se": 291,
	"./se.js": 291,
	"./si": 292,
	"./si.js": 292,
	"./sk": 293,
	"./sk.js": 293,
	"./sl": 294,
	"./sl.js": 294,
	"./sq": 295,
	"./sq.js": 295,
	"./sr": 296,
	"./sr-cyrl": 297,
	"./sr-cyrl.js": 297,
	"./sr.js": 296,
	"./ss": 298,
	"./ss.js": 298,
	"./sv": 299,
	"./sv.js": 299,
	"./sw": 300,
	"./sw.js": 300,
	"./ta": 301,
	"./ta.js": 301,
	"./te": 302,
	"./te.js": 302,
	"./tet": 303,
	"./tet.js": 303,
	"./th": 304,
	"./th.js": 304,
	"./tl-ph": 305,
	"./tl-ph.js": 305,
	"./tlh": 306,
	"./tlh.js": 306,
	"./tr": 307,
	"./tr.js": 307,
	"./tzl": 308,
	"./tzl.js": 308,
	"./tzm": 309,
	"./tzm-latn": 310,
	"./tzm-latn.js": 310,
	"./tzm.js": 309,
	"./uk": 311,
	"./uk.js": 311,
	"./ur": 312,
	"./ur.js": 312,
	"./uz": 313,
	"./uz-latn": 314,
	"./uz-latn.js": 314,
	"./uz.js": 313,
	"./vi": 315,
	"./vi.js": 315,
	"./x-pseudo": 316,
	"./x-pseudo.js": 316,
	"./yo": 317,
	"./yo.js": 317,
	"./zh-cn": 318,
	"./zh-cn.js": 318,
	"./zh-hk": 319,
	"./zh-hk.js": 319,
	"./zh-tw": 320,
	"./zh-tw.js": 320
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 424;

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_popover__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OrdersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var OrdersComponent = (function () {
    function OrdersComponent(popoverCtrl, events) {
        var _this = this;
        this.popoverCtrl = popoverCtrl;
        this.events = events;
        this.status = 'Em Processo';
        this.cssStatusBox = 'box-yellow';
        this.cssStatusCircle = 'circle-yellow';
        events.subscribe('option', function (option) {
            _this.status = option;
            switch (_this.status) {
                case 'Em Processo': {
                    _this.cssStatusBox = 'box-yellow';
                    _this.cssStatusCircle = 'circle-yellow';
                    break;
                }
                case 'Aguardando': {
                    _this.cssStatusBox = 'box-gray';
                    _this.cssStatusCircle = 'circle-gray';
                    break;
                }
                case 'Cancelado': {
                    _this.cssStatusBox = 'box-red';
                    _this.cssStatusCircle = 'circle-red';
                    break;
                }
                case 'Entregues': {
                    _this.cssStatusBox = 'box-green';
                    _this.cssStatusCircle = 'circle-green';
                    break;
                }
                case 'Finalizados': {
                    _this.cssStatusBox = 'box-blue';
                    _this.cssStatusCircle = 'circle-blue';
                    break;
                }
            }
        });
    }
    OrdersComponent.prototype.filter = function (ev) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__popover_popover__["a" /* PopoverComponent */], { menu: [{
                    name: 'Cancelado',
                    css: 'circle-red'
                }, {
                    name: 'Aguardando',
                    css: 'circle-gray'
                }, {
                    name: 'Em Processo',
                    css: 'circle-yellow'
                }, {
                    name: 'Entregues',
                    css: 'circle-green'
                }, {
                    name: 'Finalizados',
                    css: 'circle-blue'
                }], type: "orders" });
        popover.present({
            ev: ev
        });
    };
    return OrdersComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], OrdersComponent.prototype, "orders", void 0);
OrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'orders',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/orders/orders.html"*/'<ion-col class="content-right">\n  <ion-row class="margin-top-10">\n    <ion-col col-5 text-center class="orders-label">\n      <span>Pedidos</span>\n    </ion-col>\n    <ion-col col-7>\n      <fieldset (click)="filter($event)">\n        <legend>Filtros</legend>\n        <div [class]="cssStatusCircle"></div>\n        <span>\n          {{status}} <ion-icon name="ios-arrow-down"></ion-icon>\n        </span>\n      </fieldset>\n    </ion-col>\n  </ion-row>\n  <ion-row class="orders" *ngFor="let order of orders">\n    <ion-col class="order">\n      <ion-row>\n        <ion-col class="order-text">	\n          Ordem\n        </ion-col>\n        <div [class]="cssStatusBox" ></div>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7 class="order-number no-padding-top">	\n          {{order.number}}\n        </ion-col>\n        <ion-col col-5 text-right class="order-actions no-padding-top">	\n          <ion-icon name="netfoods-edit"></ion-icon>\n          <ion-icon name="netfoods-trash"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="no-padding-top">	\n          <span class="order-label">Valor</span><br/>\n          <span class="order-value">{{order.value}}</span>\n        </ion-col>\n        <ion-col class="no-padding-top">	\n          <span class="order-label">Data</span><br/>\n          <span class="order-value">{{order.date}}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="no-padding-top">	\n          <span class="order-label">{{order.type_label}}</span><br/>\n          <span class="order-value">{{order.providers}}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="order-information">\n          <ion-icon *ngIf="order.type_payment == \'card\'" name="ios-card"></ion-icon>\n          <ion-icon *ngIf="order.type_payment == \'code\'" name="md-barcode"></ion-icon>\n          <ion-icon *ngIf="order.hasMessage" name="ios-chatboxes-outline" class="message-red"></ion-icon>\n        </ion-col>\n        <ion-col text-right class="order-details">	\n          <span>Mais Detalhes</span> \n          <ion-icon name="ios-arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-col>'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/orders/orders.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], OrdersComponent);

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.toggleMessage = function (ev) {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'header',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/header/header.html"*/'<ion-grid>\n	<ion-row>\n		<ion-col col-2 class="col-logo">\n			<img src="assets/img/logo-white.png" />\n		</ion-col>\n		<ion-col col-4>\n			<ion-item>        \n				<ion-label> <ion-icon name="search"></ion-icon></ion-label>\n				<ion-input clearInput type="text"></ion-input>\n			</ion-item>\n		</ion-col>\n		<ion-col no-padding col-4>\n			<ion-row>\n				<ion-col text-right col-10>\n					<button class="button-user" ion-button clear>\n						Catherine Ramos\n						<ion-icon class="arrow-user" name="ios-arrow-down"></ion-icon>              \n					</button>\n				</ion-col>\n				<ion-col text-left no-padding col-2>\n					<img src="../assets/img/user.png" class="img-user" />\n				</ion-col>\n			</ion-row>\n		</ion-col>\n		<ion-col text-center col-2>\n			<button (click)="toggleMessage($event)" id="c-button--slide-right" class="notification-button" ion-button clear>\n				<ion-icon name="netfoods-notifications">\n					<ion-badge class="notifications-badge badge-blue">3</ion-badge>\n				</ion-icon>              \n			</button>\n			<button class="notification-button" ion-button clear>\n				<ion-icon name="ios-cart-outline">\n					<ion-badge class="notifications-badge badge-green badge-cart-header">17</ion-badge>\n				</ion-icon>              \n			</button>\n		</ion-col>\n	</ion-row>\n</ion-grid>'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/header/header.html"*/
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SidemenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SidemenuComponent = (function () {
    function SidemenuComponent(navCtrl, events) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.sidemenu = 'dashboard';
    }
    SidemenuComponent.prototype.go = function (menu) {
        this.sidemenu = menu;
        this.events.publish('sidemenu', this.sidemenu);
    };
    return SidemenuComponent;
}());
SidemenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sidemenu',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/sidemenu/sidemenu.html"*/'<ion-col class="menu" no-padding col-2>\n	<ion-list>\n		<ion-item (click)="go(\'dashboard\')" class="current" [class.current]="sidemenu == \'dashboard\'" text-wrap>\n			<ion-icon name="netfoods-dashboard"></ion-icon> <span>Dashboard</span>\n		</ion-item>\n		<ion-item (click)="go(\'market\')" [class.current]="sidemenu == \'market\'" text-wrap>\n			<ion-icon name="netfoods-cart"></ion-icon> <span>Mercado</span>\n		</ion-item>\n		<ion-item (click)="go(\'fast_buy\')" [class.current]="sidemenu == \'fast_buy\'" text-wrap>\n			<ion-icon name="netfoods-fast-buy"></ion-icon> <span>Compra Rápida</span>\n		</ion-item>\n		<ion-item (click)="go(\'orders\')" [class.current]="sidemenu == \'orders\'" text-wrap>\n			<ion-icon name="netfoods-orders"></ion-icon> <span>Pedidos</span>\n		</ion-item>\n		<ion-item (click)="go(\'providers\')" [class.current]="sidemenu == \'providers\'" text-wrap>\n			<ion-icon name="netfoods-restaurant"></ion-icon> <span>Fornecedores</span>\n		</ion-item>\n		<ion-item (click)="go(\'messages\')" [class.current]="sidemenu == \'messages\'" text-wrap>\n			<ion-icon name="netfoods-message"></ion-icon> <span>Mensagens</span>\n			<ion-badge class="badge-blue">3</ion-badge>\n		</ion-item>\n		<ion-item (click)="go(\'settings\')" [class.current]="sidemenu == \'settings\'" text-wrap>\n			<ion-icon name="netfoods-settings"></ion-icon> <span>Configurações</span>\n		</ion-item>\n	</ion-list>\n</ion-col>'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/sidemenu/sidemenu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], SidemenuComponent);

//# sourceMappingURL=sidemenu.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_popover__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DashboardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DashboardComponent = (function () {
    function DashboardComponent(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.orders = [{
                number: "ORD.048922",
                value: "R$4.500,00",
                date: "28/08",
                type_label: "Fornecedores",
                providers: "Nutrivida; + 4 outras empresas",
                type_payment: "card",
                hasMessage: true
            },
            {
                number: "ORD.048723",
                value: "R$15.500,00",
                date: "27/08",
                type_label: "Fornecedores",
                providers: "Nutrivida; + 4 outras empresas",
                type_payment: "code",
                hasMessage: true
            },
            {
                number: "ORD.048654",
                value: "R$3.500,00",
                date: "27/08",
                type_label: "Fornecedores",
                providers: "Nutrivida; + 4 outras empresas",
                type_payment: "card",
                hasMessage: false
            },
            {
                number: "ORD.048723",
                value: "R$24.000,00",
                date: "28/08",
                type_label: "Cliente",
                providers: "Jam",
                type_payment: "code",
                hasMessage: true
            },
            {
                number: "ORD.048777",
                value: "R$3.500,00",
                date: "27/08",
                type_label: "Cliente",
                providers: "Grand Cru",
                type_payment: "code",
                hasMessage: false
            },
            {
                number: "ORD.048796",
                value: "R$24.500,00",
                date: "28/08",
                type_label: "Cliente",
                providers: "Jam",
                type_payment: "card",
                hasMessage: true
            },
            {
                number: "ORD.048723",
                value: "R$24.000,00",
                date: "28/08",
                type_label: "Cliente",
                providers: "Jam",
                type_payment: "code",
                hasMessage: true
            },
            {
                number: "ORD.048777",
                value: "R$3.500,00",
                date: "27/08",
                type_label: "Cliente",
                providers: "Grand Cru",
                type_payment: "code",
                hasMessage: false
            },
            {
                number: "ORD.048796",
                value: "R$24.500,00",
                date: "28/08",
                type_label: "Cliente",
                providers: "Jam",
                type_payment: "card",
                hasMessage: true
            }];
        this.products = [{
                name: "Açaí Orgânico c/ Guaraná",
                code: "1009072",
                group: "Grupo PA",
                current_value: "R$ 18,90",
                previous_value: "R$ 19,90",
                average_value: "R$ 19,50",
                arrow: "down",
                image: "../assets/img/acai.jpg"
            },
            {
                name: "Snack Orgânico s/ Casca",
                code: "1022429",
                group: "Grupo PA",
                current_value: "R$ 8,90",
                previous_value: "R$ 9,90",
                average_value: "R$ 9,50",
                arrow: "down",
                image: "../assets/img/bio2snack.jpg"
            },
            {
                name: "Bebida Orgânica de Arroz Amêndoa",
                code: "1041755",
                group: "Grupo PA",
                current_value: "R$ 18,90",
                previous_value: "R$ 17,90",
                average_value: "R$ 17,50",
                arrow: "up",
                image: "../assets/img/bebida_organica.jpg"
            },
            {
                name: "Ovos Vermelho G/ Orgânicos",
                code: "3182840",
                group: "Grupo PA",
                current_value: "R$ 7,90",
                previous_value: "R$ 9,90",
                average_value: "R$ 9,50",
                arrow: "down",
                image: "../assets/img/ovos_organico.png"
            },
            {
                name: "Vinho Argentino T/ Orgânico",
                code: "1009072",
                group: "Grupo PA",
                current_value: "R$ 78,90",
                previous_value: "R$ 77,90",
                average_value: "R$ 75,50",
                arrow: "up",
                image: "../assets/img/vinho_tinto.jpg"
            }];
        this.suppliers = [{
                name: "Grupo PA",
                value_expense: "R$85.000",
                last_order: "R$15.500",
                marketshare: "18.7%"
            },
            {
                name: "AO Alimentos Orgânicos",
                value_expense: "R$115.000",
                last_order: "R$27.500",
                marketshare: "37.2%"
            },
            {
                name: "Casa Santa Luzia",
                value_expense: "R$68.000",
                last_order: "R$16.300",
                marketshare: "48.6%"
            }];
        this.activities = [{
                name: "Grupo PA",
                id: "09809744",
                value: "R$15.500",
                date: "29/08/2017",
                arrow: "up"
            },
            {
                name: "Grupo PA",
                id: "09804444",
                value: "R$1.500",
                date: "28/08/2017",
                arrow: "down"
            },
            {
                name: "Grand Cru",
                id: "09801111",
                value: "R$11.250",
                date: "28/08/2017",
                arrow: "up"
            },
            {
                name: "Casa Santa Luzia",
                id: "09805689",
                value: "R$21.100",
                date: "29/08/2017",
                arrow: "up"
            },
            {
                name: "Grand Cru",
                id: "09805689",
                value: "R$21.100",
                date: "29/08/2017",
                arrow: "up"
            }];
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
        ];
        this.lineChartLabels = ['ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET'];
        this.lineChartOptions = {
            responsive: true,
            legend: {
                display: false
            }
        };
        this.lineChartColors = [{
                backgroundColor: 'rgba(50,148,176,0.2)',
                borderColor: 'rgba(50,148,176,1)',
                pointBackgroundColor: 'rgba(50,148,176,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(50,148,176,0.8)'
            }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        // barChart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        this.barChartLabels = ['Temakeria', 'Paris 6', 'Grand Cru'];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.barChartColors = [{
                backgroundColor: 'rgba(52,68,83,1)',
            }];
        this.barChartData = [
            {
                data: [65, 35, 90],
                label: 'Por Fornecedor'
            }
        ];
        // Radar
        this.radarChartLabels = ['ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET'];
        this.radarChartOptions = {
            responsive: true,
            legend: {
                display: false
            }
        };
        this.radarChartColors = [{
                backgroundColor: 'rgba(41,104,121,0.8)',
                borderColor: 'rgba(41,104,121,1)',
                pointBackgroundColor: 'rgba(41,104,121,1)',
                pointBorderColor: 'rgba(41,104,121,1)',
                pointHoverBackgroundColor: 'rgba(41,104,121,1)',
                pointHoverBorderColor: 'rgba(41,104,121,0.8)',
            }, {
                backgroundColor: 'rgba(122,209,212,0.8)',
                borderColor: 'rgba(122,209,212,1)',
                pointBackgroundColor: 'rgba(122,209,212,1)',
                pointBorderColor: 'rgba(122,209,212,1)',
                pointHoverBackgroundColor: 'rgba(122,209,212,1)',
                pointHoverBorderColor: 'rgba(122,209,212,0.8)'
            }];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55], label: 'Custo Planejado' },
            { data: [28, 48, 40, 19, 96, 27], label: 'Custo Realizado' }
        ];
        this.radarChartType = 'radar';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        document.getElementById("contentDashboard").scrollIntoView(true);
    };
    DashboardComponent.prototype.presentPopover = function (ev) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__popover_popover__["a" /* PopoverComponent */], { menu: [{
                    name: 'Option 1'
                }, {
                    name: 'Option 2'
                }, {
                    name: 'Option 3'
                }] });
        popover.present({
            ev: ev
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/dashboard/dashboard.html"*/'<ion-col class="content" id="contentDashboard" col-10>\n	<ion-row>\n		<ion-col col-9>\n			<ion-row class="statistics">\n				<ion-col class="statistics-box">\n					<ion-row>\n						<ion-col class="statistics-label">\n							Pedidos em Aberto\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="statistics-number no-padding-top">\n							150\n						</ion-col>\n						<ion-col class="img-chart">\n							<img src="../assets/img/chart1.png" />\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col text-right class="statistics-details">\n							<span>Mais Detalhes</span> \n							<ion-icon name="ios-arrow-forward"></ion-icon>\n						</ion-col>\n					</ion-row>\n				</ion-col>\n				<ion-col class="statistics-box">\n					<ion-row>\n						<ion-col class="statistics-label">\n							Total de Pedidos\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="statistics-number no-padding-top">\n							1274\n						</ion-col>\n						<ion-col class="img-chart">\n							<img src="../assets/img/chart2.png" />\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col text-right class="statistics-details">\n							<span>Mais Detalhes</span> \n							<ion-icon name="ios-arrow-forward"></ion-icon>\n						</ion-col>\n					</ion-row>\n				</ion-col>\n				<ion-col class="statistics-box">\n					<ion-row>\n						<ion-col class="statistics-label">\n							Total em Compras\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="statistics-number no-padding-top">\n							R$ 950k\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col text-right class="statistics-details">\n							<span>Mais Detalhes</span> \n							<ion-icon name="ios-arrow-forward"></ion-icon>\n						</ion-col>\n					</ion-row>\n				</ion-col>\n				<ion-col class="statistics-box">\n					<ion-row>\n						<ion-col class="statistics-label">\n							Fornecedores\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="statistics-number no-padding-top">\n							748\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col text-right class="statistics-details">\n							<span>Mais Detalhes</span> \n							<ion-icon name="ios-arrow-forward"></ion-icon>\n						</ion-col>\n					</ion-row>\n				</ion-col>\n			</ion-row>\n			<ion-row class="charts">\n				<ion-col class="charts-box no-margin" col-8>\n					<ion-row>\n						<ion-col class="charts-label" col-8>\n							Vendas\n						</ion-col>\n						<ion-col class="margin-right-12">\n							<fieldset>\n								<legend>Filtros</legend>\n								<span>\n									Semestre <ion-icon name="ios-arrow-down"></ion-icon>\n								</span>\n							</fieldset>\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col>\n							<canvas baseChart width="400" height="230"\n								[datasets]="lineChartData"\n								[labels]="lineChartLabels"\n								[options]="lineChartOptions"\n								[colors]="lineChartColors"\n								[legend]="lineChartLegend"\n								[chartType]="lineChartType"\n								(chartHover)="chartHovered($event)"\n								(chartClick)="chartClicked($event)">\n							</canvas>\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col text-right class="charts-details">\n							<span>Mais Detalhes</span> \n							<ion-icon name="ios-arrow-forward"></ion-icon>\n						</ion-col>\n					</ion-row>\n				</ion-col>\n				<ion-col class="charts-box no-margin" col-4>\n					<ion-row>\n						<ion-col class="charts-label" col-12>\n							Por Fornecedor\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col>\n							<canvas baseChart width="150" height="190"\n								[datasets]="barChartData"\n								[labels]="barChartLabels"\n								[options]="barChartOptions"\n								[colors]="barChartColors"\n								[legend]="barChartLegend"\n								[chartType]="barChartType"\n								(chartHover)="chartHovered($event)"\n								(chartClick)="chartClicked($event)">\n							</canvas>\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col text-right class="charts-details">\n							<span>Mais Detalhes</span> \n							<ion-icon name="ios-arrow-forward"></ion-icon>\n						</ion-col>\n					</ion-row>\n				</ion-col>\n			</ion-row>\n			<ion-row class="products">\n				<ion-col class="products-box">\n					<products [products]="products" source="dashboard" name="Produtos Mais Comprados"></products>\n				</ion-col>\n			</ion-row>\n			<ion-row class="reports">\n				<ion-col class="reports-box">\n					<suppliers [suppliers]="suppliers"></suppliers>\n				</ion-col>\n				<ion-col class="reports-box no-chart-view">\n					<div class="no-chart-monitoring">\n						<div class="text-no-chart">\n							<span>Desculpe, nenhum dado está disponível atualmente!</span>\n						</div>\n					</div>\n					<div class="content-chart">\n						<ion-row>\n							<ion-col class="reports-label no-padding-bottom" col-10>\n								Acompanhamento\n							</ion-col>\n							<ion-col class="reports-icon" col-2>\n								<ion-icon name="ios-more" (click)="presentPopover($event)"></ion-icon>\n							</ion-col>\n						</ion-row>\n						<ion-row>\n							<ion-col class="reports-label no-padding-top">Gasto x Orçamento</ion-col>\n						</ion-row>\n						<ion-row class="loading-bar">\n							<ion-col class="no-padding-right" col-10>\n								<div class="loading-bar-done"></div>\n							</ion-col>\n							<ion-col class="no-padding-left" col-2>\n								<div class="loading-bar-no-done"></div>\n							</ion-col>\n						</ion-row>\n						<ion-row class="monitoring">\n							<ion-col>\n								<span class="monitoring-label">Custo Planejado</span>\n								<span class="monitoring-value-plan">R$45.5k</span>\n							</ion-col>\n							<ion-col text-right>\n								<span class="monitoring-label">Custo realizado</span>\n								<span class="monitoring-value-realized">R$40.5k</span>\n							</ion-col>\n						</ion-row>\n						<ion-row>\n							<ion-col>\n								<canvas baseChart height="300"\n									[datasets]="radarChartData"\n									[labels]="radarChartLabels"\n									[options]="radarChartOptions"\n									[colors]="radarChartColors"\n									[chartType]="radarChartType"\n									(chartHover)="chartHovered($event)"\n									(chartClick)="chartClicked($event)">\n								</canvas>\n							</ion-col>\n						</ion-row>\n						<ion-row>\n							<ion-col class="monitoring-number" text-center>\n								R$ 5k <ion-icon name="md-arrow-round-down"></ion-icon>\n							</ion-col>\n						</ion-row>\n					</div>\n				</ion-col>\n				<ion-col class="reports-box">\n					<activities [activities]="activities"></activities>\n				</ion-col>\n			</ion-row>\n		</ion-col>\n		<orders [orders]="orders"></orders>\n	</ion-row>\n</ion-col>'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/dashboard/dashboard.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */]])
], DashboardComponent);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PopoverComponent = (function () {
    function PopoverComponent(params, events, viewCtrl) {
        this.params = params;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.options = this.params.get("menu");
        this.type = this.params.get("type");
    }
    PopoverComponent.prototype.selectOption = function (option) {
        if (this.type == 'orders') {
            this.events.publish('option', option.name);
            this.viewCtrl.dismiss();
        }
    };
    return PopoverComponent;
}());
PopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'popover',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/popover/popover.html"*/'<ion-list>\n	<ion-item (click)="selectOption(option)" class="item-menu-popover" *ngFor="let option of options">\n		<div *ngIf="type == \'orders\'" [class]="option.css"></div> \n		{{option.name}}\n	</ion-item>\n</ion-list>'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/popover/popover.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], PopoverComponent);

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuppliersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_popover__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SuppliersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SuppliersComponent = (function () {
    function SuppliersComponent(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    SuppliersComponent.prototype.presentPopover = function (ev) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__popover_popover__["a" /* PopoverComponent */], { menu: [{
                    name: 'Option 1'
                }, {
                    name: 'Option 2'
                }, {
                    name: 'Option 3'
                }] });
        popover.present({
            ev: ev
        });
    };
    return SuppliersComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SuppliersComponent.prototype, "suppliers", void 0);
SuppliersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'suppliers',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/suppliers/suppliers.html"*/'<ion-row>\n	<ion-col class="reports-label" col-10>\n		Fornecedores\n	</ion-col>\n	<ion-col class="reports-icon" col-2>\n		<ion-icon name="ios-more" (click)="presentPopover($event)"></ion-icon>\n	</ion-col>\n</ion-row>\n<ion-row class="report" *ngFor="let supplier of suppliers">\n	<ion-col class="report-box">\n		<ion-row>\n			<ion-col class="report-label">\n				{{supplier.name}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<span class="report-label-text">Valor Gasto</span>\n				<span class="report-number">{{supplier.value_expense}}</span>\n			</ion-col>\n			<ion-col>\n				<span class="report-label-text">Último Pedido</span>\n				<span class="report-number">{{supplier.last_order}}</span>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<span class="report-label-text">Marketshare</span>\n				<span class="report-number">{{supplier.marketshare}}</span>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col text-right class="report-details">\n				<span>Acessar Loja</span> \n				<ion-icon name="ios-arrow-forward"></ion-icon>\n			</ion-col>\n		</ion-row>\n	</ion-col>\n</ion-row>'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/suppliers/suppliers.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */]])
], SuppliersComponent);

//# sourceMappingURL=suppliers.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_popover__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ActivitiesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ActivitiesComponent = (function () {
    function ActivitiesComponent(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.date = new Date();
    }
    ActivitiesComponent.prototype.presentPopover = function (ev) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__popover_popover__["a" /* PopoverComponent */], { menu: [{
                    name: 'Option 1'
                }, {
                    name: 'Option 2'
                }, {
                    name: 'Option 3'
                }] });
        popover.present({
            ev: ev
        });
    };
    return ActivitiesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ActivitiesComponent.prototype, "activities", void 0);
ActivitiesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'activities',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/activities/activities.html"*/'<ion-row>\n	<ion-col class="reports-label" col-10>\n		Atividades\n	</ion-col>\n	<ion-col class="reports-icon" col-2>\n		<ion-icon name="ios-more" (click)="presentPopover($event)"></ion-icon>\n	</ion-col>\n</ion-row>\n<ion-row>\n	<ion-col class="reports-date">Hoje, {{date | date: \'dd\'}} de {{date | date: \'MMMM\'}}</ion-col>\n</ion-row>\n<ion-row class="activities" *ngFor="let activity of activities">\n	<ion-col class="activities-box">\n		<ion-row>\n			<ion-col>\n				<span class="activities-label-text">{{activity.name}}</span>\n				<span class="activities-subtitle">ID: {{activity.id}}</span>\n			</ion-col>\n			<ion-col text-right>\n				<span class="activities-label-value">{{activity.value}}</span>\n				<ion-icon class="down" *ngIf="activity.arrow == \'down\'" name="md-arrow-round-down"></ion-icon>\n				<ion-icon class="up" *ngIf="activity.arrow == \'up\'" name="md-arrow-round-up"></ion-icon>\n				<span class="activities-subtitle">{{activity.date}}</span>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col text-right class="activities-details">\n				<span>Mais Detalhes</span> \n				<ion-icon name="ios-arrow-forward"></ion-icon>\n			</ion-col>\n		</ion-row>\n	</ion-col>\n</ion-row>'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/activities/activities.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */]])
], ActivitiesComponent);

//# sourceMappingURL=activities.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProductsComponent = (function () {
    function ProductsComponent(events) {
        this.events = events;
    }
    ProductsComponent.prototype.getProduct = function () {
        this.events.publish('market_content', { type: 'product', product: { name: 'teste' } });
    };
    ProductsComponent.prototype.ngOnInit = function () {
        this.initializeItems();
    };
    ProductsComponent.prototype.initializeItems = function () {
        this.items = this.products;
        this.qtd_items = this.items.length;
    };
    ProductsComponent.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.qtd_items = this.items.length;
        }
    };
    return ProductsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductsComponent.prototype, "products", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProductsComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProductsComponent.prototype, "source", void 0);
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'products',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/products/products.html"*/'<ion-row [class.padding-top-7]="source == \'market\'">\n	<ion-col class="products-label" [class.padding-left-5]="source == \'fast_buy\'" [class.step-title]="source == \'fast_buy\'" col-6>\n		{{name}}\n	</ion-col>\n	<ion-col [class.col-4]="source == \'dashboard\'" *ngIf="source != \'fast_buy\'">\n		<ion-item class="products-search">        \n			<ion-label> <ion-icon name="search"></ion-icon></ion-label>\n			<ion-input clearInput [ngModel]="inputItem" (ngModelChange)="getItems($event)" placeholder="Buscar"></ion-input>\n		</ion-item>\n	</ion-col>\n	<ion-col col-2 *ngIf="source == \'dashboard\'">\n		<fieldset>\n			<legend>Filtros</legend>\n			<span>\n				Semana <ion-icon name="ios-arrow-down"></ion-icon>\n			</span>\n		</fieldset>\n	</ion-col>\n</ion-row>\n<ion-row *ngIf="source == \'fast_buy\'">\n	<ion-col class="step-subtitle">Selecione a quantidade e adicione a seu carrinho</ion-col>\n</ion-row>\n<ion-row *ngIf="source == \'fast_buy\'">\n	<ion-col class="no-padding-top">\n		<ion-item class="products-search">        \n			<ion-label> <ion-icon name="search"></ion-icon></ion-label>\n			<ion-input clearInput [ngModel]="inputItem" (ngModelChange)="getItems($event)" placeholder="Buscar"></ion-input>\n		</ion-item>\n	</ion-col>\n</ion-row>\n<ion-row>\n	<ion-col class="quantity-total" [class.step-quantity]="source == \'fast_buy\'">\n		<span *ngIf="qtd_items == 1">{{qtd_items}} produto encontrado</span>\n		<span *ngIf="qtd_items > 1">{{qtd_items}} produtos encontrados</span>\n		<span *ngIf="!qtd_items">Nenhum produto encontrado!</span>\n	</ion-col>\n</ion-row>\n<div class="products-offers-day" [class.step-suppliers]="source == \'fast_buy\'">\n	<ion-row class="product-list" *ngFor="let product of items">\n		<ion-col class="product-box">\n			<ion-row>\n				<ion-col class="cursor-pointer" col-2 [class.column-1]="source == \'dashboard\'" (click)="getProduct()">\n					<img [src]="product.image" />\n				</ion-col>\n				<ion-col class="cursor-pointer" [class.col-4]="source == \'dashboard\'" (click)="getProduct()">\n					<ion-row>\n						<ion-col class="product-name" tooltip="{{product.name}}" positionV="bottom" arrow event="hover">\n							{{product.name}}\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col *ngIf="source == \'dashboard\'" class="product-code">Cód.: {{product.code}}</ion-col>\n						<ion-col *ngIf="source == \'market\' || source == \'fast_buy\'" class="product-current-value">{{product.current_value}} <span>p/ unidade</span></ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col *ngIf="source == \'dashboard\'" class="product-group">{{product.group}}</ion-col>\n						<ion-col *ngIf="source == \'market\' || source == \'fast_buy\'" class="product-group-value">{{product.group_value}} <span>p/ caixa c/ 10 uni.</span></ion-col>\n					</ion-row>\n				</ion-col>\n				<ion-col *ngIf="source == \'dashboard\'" col-2>\n					<ion-row>\n						<ion-col text-right class="product-label">Valor Atual</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col text-right class="product-label">Valor Anterior</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col text-right class="product-label">Valor Médio</ion-col>\n					</ion-row>\n				</ion-col>\n				<ion-col *ngIf="source == \'dashboard\'" col-2>\n					<ion-row>\n						<ion-col class="product-current-value down no-padding-top"\n						[class.down]="product.arrow == \'down\'" [class.up]="product.arrow == \'up\'">\n							{{product.current_value}} \n							<ion-icon *ngIf="product.arrow == \'down\'" name="md-arrow-round-down"></ion-icon>\n							<ion-icon *ngIf="product.arrow == \'up\'" name="md-arrow-round-up"></ion-icon>\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="product-previous-value">{{product.previous_value}}</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="product-average-value">{{product.average_value}}</ion-col>\n					</ion-row>\n				</ion-col>\n				<ion-col class="product-cart-quantity">\n					<ion-row>\n						<ion-col>\n							<span class="product-quantity">\n								<ion-icon name="md-remove"></ion-icon>\n								<span>01</span>\n								<ion-icon name="md-add" class="icon-plus"></ion-icon>\n							</span>\n							<span class="product-cart">\n								<ion-icon name="cart"></ion-icon>\n							</span>\n						</ion-col>\n					</ion-row>\n					<ion-row *ngIf="source == \'dashboard\'">\n						<ion-col>\n							<span class="product-price-history">\n								Ver Histórico de Preço\n							</span>\n						</ion-col>\n					</ion-row>\n				</ion-col>\n			</ion-row>\n		</ion-col>\n	</ion-row>\n</div>'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/products/products.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], ProductsComponent);

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MarketComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MarketComponent = (function () {
    function MarketComponent(events) {
        var _this = this;
        this.events = events;
        this.images = [{
                image: "assets/img/slide1.jpg"
            }, {
                image: "assets/img/slide2.jpg"
            }, {
                image: "assets/img/slide3.jpg"
            }];
        this.products = [{
                name: "Açaí Orgânico c/ Guaraná",
                code: "1009072",
                group: "Grupo PA",
                current_value: "R$ 18,90",
                previous_value: "R$ 19,90",
                average_value: "R$ 19,50",
                group_value: "R$ 17,90",
                arrow: "down",
                image: "../assets/img/acai.jpg"
            },
            {
                name: "Snack Orgânico s/ Casca",
                code: "1022429",
                group: "Grupo PA",
                current_value: "R$ 8,90",
                previous_value: "R$ 9,90",
                average_value: "R$ 9,50",
                group_value: "R$ 17,90",
                arrow: "down",
                image: "../assets/img/bio2snack.jpg"
            },
            {
                name: "Bebida Orgânica de Arroz Amêndoa",
                code: "1041755",
                group: "Grupo PA",
                current_value: "R$ 18,90",
                previous_value: "R$ 17,90",
                average_value: "R$ 17,50",
                group_value: "R$ 17,90",
                arrow: "up",
                image: "../assets/img/bebida_organica.jpg"
            },
            {
                name: "Ovos Vermelho G/ Orgânicos",
                code: "3182840",
                group: "Grupo PA",
                current_value: "R$ 7,90",
                previous_value: "R$ 9,90",
                average_value: "R$ 9,50",
                group_value: "R$ 17,90",
                arrow: "down",
                image: "../assets/img/ovos_organico.png"
            },
            {
                name: "Vinho Argentino T/ Orgânico",
                code: "1009072",
                group: "Grupo PA",
                current_value: "R$ 78,90",
                previous_value: "R$ 77,90",
                average_value: "R$ 75,50",
                group_value: "R$ 17,90",
                arrow: "up",
                image: "../assets/img/vinho_tinto.jpg"
            }];
        this.recommended_products = [{
                name: "Nozes sem casca",
                size: "180g",
                group: "Qualitá",
                group_value: "R$ 233,90",
                unit_value: "R$ 21,90",
                image: "../assets/img/recommends-products1.png"
            },
            {
                name: "Ovos Vermelho Grandes Org.",
                size: "Bandeja com 10 uni.",
                group: "TAEQ",
                group_value: "R$ 112,90",
                unit_value: "R$ 10,90",
                image: "../assets/img/recommends-products2.png"
            },
            {
                name: "Molho de Tomate Pronto",
                size: "Vidro 500g",
                group: "Salsaretti",
                group_value: "R$ 81,90",
                unit_value: "R$ 7,90",
                image: "../assets/img/recommends-products3.png"
            },
            {
                name: "Suco de Laranja",
                size: "Garrafa 1 Litro",
                group: "Blissimo",
                group_value: "R$ 91,90",
                unit_value: "R$ 8,90",
                image: "../assets/img/recommends-products4.png"
            },
            {
                name: "Azeite de Oliva Extra Virgem",
                size: "Vidro 500ml",
                group: "Gallo",
                group_value: "R$ 400,90",
                unit_value: "R$ 41,90",
                image: "../assets/img/recommends-products5.png"
            }];
        this.featured_suppliers = [{
                name: "Produto Orgânico Brasil",
                image: "../assets/img/company/selo-organico.png"
            },
            {
                name: "Grupo Bimbo",
                image: "../assets/img/company/ORGANIZACION_GRUPO_BIMBO-01.png"
            },
            {
                name: "Kelloggs",
                image: "../assets/img/company/Kellogg_s.png"
            },
            {
                name: "Kimberly-Clark",
                image: "../assets/img/company/KimberlyClark.png"
            },
            {
                name: "Unilever",
                image: "../assets/img/company/Unilever.jpg"
            }];
        this.top_selling_products = [{
                name: "Nozes sem casca",
                size: "180g",
                group: "Qualitá",
                group_value: "R$ 233,90",
                unit_value: "R$ 21,90",
                image: "../assets/img/recommends-products1.png"
            },
            {
                name: "Ovos Vermelho Grandes Org.",
                size: "Bandeja com 10 uni.",
                group: "TAEQ",
                group_value: "R$ 112,90",
                unit_value: "R$ 10,90",
                image: "../assets/img/recommends-products2.png"
            },
            {
                name: "Molho de Tomate Pronto",
                size: "Vidro 500g",
                group: "Salsaretti",
                group_value: "R$ 81,90",
                unit_value: "R$ 7,90",
                image: "../assets/img/recommends-products3.png"
            },
            {
                name: "Suco de Laranja",
                size: "Garrafa 1 Litro",
                group: "Blissimo",
                group_value: "R$ 91,90",
                unit_value: "R$ 8,90",
                image: "../assets/img/recommends-products4.png"
            },
            {
                name: "Azeite de Oliva Extra Virgem",
                size: "Vidro 500ml",
                group: "Gallo",
                group_value: "R$ 400,90",
                unit_value: "R$ 41,90",
                image: "../assets/img/recommends-products5.png"
            },
            {
                name: "Nozes sem casca",
                size: "180g",
                group: "Qualitá",
                group_value: "R$ 233,90",
                unit_value: "R$ 21,90",
                image: "../assets/img/recommends-products1.png"
            },
            {
                name: "Ovos Vermelho Grandes Org.",
                size: "Bandeja com 10 uni.",
                group: "TAEQ",
                group_value: "R$ 112,90",
                unit_value: "R$ 10,90",
                image: "../assets/img/recommends-products2.png"
            },
            {
                name: "Molho de Tomate Pronto",
                size: "Vidro 500g",
                group: "Salsaretti",
                group_value: "R$ 81,90",
                unit_value: "R$ 7,90",
                image: "../assets/img/recommends-products3.png"
            },
            {
                name: "Suco de Laranja",
                size: "Garrafa 1 Litro",
                group: "Blissimo",
                group_value: "R$ 91,90",
                unit_value: "R$ 8,90",
                image: "../assets/img/recommends-products4.png"
            },
            {
                name: "Azeite de Oliva Extra Virgem",
                size: "Vidro 500ml",
                group: "Gallo",
                group_value: "R$ 400,90",
                unit_value: "R$ 41,90",
                image: "../assets/img/recommends-products5.png"
            }];
        this.submenu = '';
        this.market_content = 'home';
        events.subscribe('submenu', function (submenu) {
            _this.submenu = submenu;
            _this.market_content = 'category';
        });
        events.subscribe('market_content', function (data) {
            _this.market_content = data['type'];
            if (_this.market_content == 'product') {
                _this.product = data['product'];
            }
        });
    }
    MarketComponent.prototype.ngOnInit = function () {
        document.getElementById("contentMarket").scrollIntoView(true);
    };
    MarketComponent.prototype.ionViewDidEnter = function () {
        this.slides.update();
    };
    MarketComponent.prototype.ngAfterViewInit = function () {
        this.slides.startAutoplay();
        this.slides.autoplay = "5000";
        this.slides.loop = true;
        this.slides.initialSlide = 0;
    };
    MarketComponent.prototype.getProduct = function () {
        this.market_content = 'product';
    };
    return MarketComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
], MarketComponent.prototype, "slides", void 0);
MarketComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'market',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/market/market.html"*/'<ion-col class="content market" id="contentMarket" no-padding col-10>\n	<submenu></submenu>\n\n	<div *ngIf="market_content == \'home\'" no-padding>\n		<ion-row class="market-content">\n			<ion-col col-7 class="padding-top-10">\n				<ion-row>\n					<ion-col class="market-title">\n						Ofertas da Semana\n					</ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col class="padding-top-35">\n						<ion-slides>\n							<ion-slide *ngFor="let slide of images">\n								<img [src]="slide.image">\n							</ion-slide>\n						</ion-slides>\n					</ion-col>\n				</ion-row>\n			</ion-col>\n			<ion-col col-5>\n				<ion-row class="products no-margin-top">\n					<ion-col class="products-box" no-padding>\n						<products [products]="products" source="market" name="Ofertas do Dia"></products>\n					</ion-col>\n				</ion-row>\n			</ion-col>\n		</ion-row>\n		\n		<products-list [products_list]="recommended_products" type="recommended-products" name="Produtos Recomendados"></products-list>\n	\n		<featured-suppliers [featured_suppliers]="featured_suppliers"></featured-suppliers>\n	\n		<products-list [products_list]="top_selling_products" type="top-selling-products" name="Produtos Mais Vendidos"></products-list>\n	</div>\n\n	<div *ngIf="market_content == \'category\'">\n		<category [category]="submenu"></category>\n	</div>\n\n	<div class="product" *ngIf="market_content == \'product\'">\n		<product [product]="product"></product>\n	</div>\n</ion-col>'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/market/market.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], MarketComponent);

//# sourceMappingURL=market.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SubmenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SubmenuComponent = (function () {
    function SubmenuComponent(events) {
        this.events = events;
        this.submenu = '';
        this.items = [{
                name: 'Mercearia',
                type: 'mercearia',
                icon: 'netfoods-groceries'
            }, {
                name: 'Hortifruti',
                type: 'hortifruti',
                icon: 'netfoods-carrot'
            }, {
                name: 'Carnes, Aves e Peixes',
                type: 'carnes',
                icon: 'netfoods-steak'
            }, {
                name: 'Frios e Laticínios',
                type: 'frios',
                icon: 'netfoods-cheese'
            }, {
                name: 'Congelados',
                type: 'congelados',
                icon: 'netfoods-frozen-food'
            }, {
                name: 'Bebidas',
                type: 'bebidas',
                icon: 'netfoods-alcoholic-drinks'
            }, {
                name: 'Confeitaria',
                type: 'confeitaria',
                icon: 'netfoods-cupcake'
            }, {
                name: 'Equipamentos e Utensílios',
                type: 'equipamentos',
                icon: 'netfoods-whisk'
            }, {
                name: 'Limpeza e Higiene',
                type: 'limpeza',
                icon: 'netfoods-hygienic-items'
            }, {
                name: 'Embalagem e Descartáveis',
                type: 'embalagem',
                icon: 'netfoods-packing'
            }];
    }
    SubmenuComponent.prototype.go = function (menu, ev) {
        this.submenu = menu;
        this.events.publish('submenu', this.submenu);
    };
    return SubmenuComponent;
}());
SubmenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'submenu',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/submenu/submenu.html"*/'<ion-row class="submenu">\n	<ion-col *ngFor="let item of items" (click)="go(item, $event)" [class.current]="submenu.type == item.type">\n		<ion-icon [name]="item.icon"></ion-icon>\n		{{item.name}}\n	</ion-col>\n</ion-row>'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/submenu/submenu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], SubmenuComponent);

//# sourceMappingURL=submenu.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProductsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProductsListComponent = (function () {
    function ProductsListComponent(events) {
        this.events = events;
    }
    ProductsListComponent.prototype.getProduct = function () {
        this.events.publish('market_content', { type: 'product', product: { name: 'teste' } });
    };
    return ProductsListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductsListComponent.prototype, "products_list", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProductsListComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProductsListComponent.prototype, "type", void 0);
ProductsListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'products-list',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/products-list/products-list.html"*/'<ion-row class="margin-left-8">\n	<ion-col [class.padding-top-35]="type == \'top-selling-products\'" class="market-title">\n		{{name}}\n	</ion-col>\n</ion-row>\n\n<ion-row class="products-list-list">\n	<ion-col col-2 class="products-list" [class.col-half-offset]="i % 5 !== 0" *ngFor="let product_list of products_list; let i = index">\n		<ion-row class="cursor-pointer" (click)="getProduct()">\n			<ion-col class="products-list-group" col-10>\n				<ion-icon name="netfoods-box"></ion-icon> \n				<span class="products-list-group-text">Caixa c/ 10 uni.</span>\n			</ion-col>\n			<ion-col class="products-icon-heart" text-right>\n				<ion-icon name="netfoods-heart"></ion-icon>\n			</ion-col>\n		</ion-row>\n		<ion-row class="cursor-pointer" (click)="getProduct()">\n			<ion-col text-center>\n				<img [src]="product_list.image">\n			</ion-col>\n		</ion-row>\n		<ion-row class="cursor-pointer" (click)="getProduct()">\n			<ion-col class="products-list-group-name no-padding-top">\n				{{product_list.group}}\n			</ion-col>\n		</ion-row>\n		<ion-row class="cursor-pointer" (click)="getProduct()">\n			<ion-col class="products-list-type">\n				<span tooltip="{{product_list.name}}" positionV="bottom" arrow event="hover">{{product_list.name}}</span>\n				<span>{{product_list.group | uppercase}} {{product_list.size}}</span>\n			</ion-col>\n		</ion-row>\n		<ion-row class="padding-top-10">\n			<ion-col class="products-list-group-value">{{product_list.group_value}} <span>p/ caixa c/ 10 uni.</span></ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="products-list-current-value">{{product_list.unit_value}} <span>p/ unidade</span></ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="products-list-quantity-label">\n				<span class="products-list-quantity">\n					<ion-icon name="md-remove"></ion-icon>\n					<span>01</span>\n					<ion-icon name="md-add" class="icon-plus"></ion-icon>\n				</span>\n				<span class="products-list-cart">\n					<ion-icon name="cart"></ion-icon> Adicionar\n				</span>\n			</ion-col>\n		</ion-row>\n	</ion-col>\n</ion-row>\n'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/products-list/products-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], ProductsListComponent);

//# sourceMappingURL=products-list.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedSuppliersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the FeaturedSuppliersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FeaturedSuppliersComponent = (function () {
    function FeaturedSuppliersComponent() {
    }
    return FeaturedSuppliersComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FeaturedSuppliersComponent.prototype, "featured_suppliers", void 0);
FeaturedSuppliersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'featured-suppliers',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/featured-suppliers/featured-suppliers.html"*/'<ion-row class="featured-suppliers">\n	<ion-col class="margin-top-25 padding-bottom-35">\n		<ion-row text-center>\n			<ion-col class="featured-suppliers-title">Fornecedores em Destaque</ion-col>\n		</ion-row>\n		<ion-row text-center>\n			<ion-col class="featured-suppliers-subtitle">Acesse a loja do fornecedor, veja suas qualificações, converse com a empresa e faça seu pedido</ion-col>\n		</ion-row>\n		<ion-row class="featured-suppliers-images margin-top-25 margin-bottom-10">\n			<ion-col *ngFor="let featured_supplier of featured_suppliers">\n				<img [src]="featured_supplier.image">\n			</ion-col>\n		</ion-row>\n	</ion-col>\n</ion-row>'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/featured-suppliers/featured-suppliers.html"*/
    }),
    __metadata("design:paramtypes", [])
], FeaturedSuppliersComponent);

//# sourceMappingURL=featured-suppliers.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmenuPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SubmenuPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SubmenuPopoverComponent = (function () {
    function SubmenuPopoverComponent() {
    }
    return SubmenuPopoverComponent;
}());
SubmenuPopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'submenu-popover',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/submenu-popover/submenu-popover.html"*/'<ion-list>\n    <ion-item class="item-menu-popover">\n		Teste\n	</ion-item>\n	<ion-item class="item-menu-popover">\n		Teste\n	</ion-item>\n	<ion-item class="item-menu-popover">\n		Teste\n	</ion-item>\n	<ion-item class="item-menu-popover">\n		Teste\n	</ion-item>\n</ion-list>'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/submenu-popover/submenu-popover.html"*/
    }),
    __metadata("design:paramtypes", [])
], SubmenuPopoverComponent);

//# sourceMappingURL=submenu-popover.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProductComponent = (function () {
    function ProductComponent() {
        this.related_products = [{
                name: "Nozes sem casca",
                size: "180g",
                group: "Qualitá",
                group_value: "R$ 233,90",
                unit_value: "R$ 21,90",
                image: "../assets/img/recommends-products1.png"
            },
            {
                name: "Ovos Vermelho Grandes Org.",
                size: "Bandeja com 10 uni.",
                group: "TAEQ",
                group_value: "R$ 112,90",
                unit_value: "R$ 10,90",
                image: "../assets/img/recommends-products2.png"
            },
            {
                name: "Molho de Tomate Pronto",
                size: "Vidro 500g",
                group: "Salsaretti",
                group_value: "R$ 81,90",
                unit_value: "R$ 7,90",
                image: "../assets/img/recommends-products3.png"
            },
            {
                name: "Suco de Laranja",
                size: "Garrafa 1 Litro",
                group: "Blissimo",
                group_value: "R$ 91,90",
                unit_value: "R$ 8,90",
                image: "../assets/img/recommends-products4.png"
            },
            {
                name: "Azeite de Oliva Extra Virgem",
                size: "Vidro 500ml",
                group: "Gallo",
                group_value: "R$ 400,90",
                unit_value: "R$ 41,90",
                image: "../assets/img/recommends-products5.png"
            }];
        this.product = {
            name: "Suco de Laranja",
            size: "Garrafa 1 Litro",
            group: "Blissimo",
            group_value: "R$ 91,90",
            unit_value: "R$ 8,90",
            image: "../assets/img/recommends-products4.png"
        };
    }
    ProductComponent.prototype.ngOnInit = function () {
        document.getElementById("contentMarket").scrollIntoView(true);
        this.tooltip = document.getElementsByTagName("tooltip-box");
        for (var i = 0; i < this.tooltip.length; i++) {
            this.tooltip[i].style.visibility = "hidden";
        }
    };
    return ProductComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductComponent.prototype, "product", void 0);
ProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/product/product.html"*/'<ion-row class="market-content">\n	<ion-col class="breadcrumbs">Mercado <span>></span> Bebidas <span>> Sucos</span></ion-col>\n</ion-row>\n<ion-row>\n	<ion-col col-3>\n		<ion-row>\n			<ion-col>\n				<img src="../assets/img/recommends-products4.png">\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="product-zoom" text-center>\n				<ion-icon name="netfoods-zoom"></ion-icon> Passe o mouse para ampliar\n			</ion-col>\n		</ion-row>\n	</ion-col>\n	<ion-col col-6>\n		<ion-row>\n			<ion-col class="product-name">Do Bem</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="product-desc">Suco Verde Detox Misto Integral DO BEM 1 Litro</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="font-size-12 product-sold-by">Vendido por: <span>Grupo PA <ion-icon name="netfoods-valid"></ion-icon></span></ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="product-rating">\n				<ion-icon class="full-star" name="star"></ion-icon>\n				<ion-icon class="full-star" name="star"></ion-icon>\n				<ion-icon class="full-star" name="star"></ion-icon>\n				<ion-icon class="full-star" name="star"></ion-icon>\n				<ion-icon class="gray-star" name="ios-star-outline"></ion-icon>\n				<span>(451)</span>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="product-size">\n				Dados de Embalagem: Caixa com 10Kg\n			</ion-col>\n		</ion-row>\n		<ion-row class="product-prices">\n			<ion-col col-5>\n				<ion-row><ion-col class="product-price">R$ 1113,90</ion-col></ion-row>\n				<ion-row><ion-col class="product-price-unit">Valor Unitário: <span>R$ 16,90</span></ion-col></ion-row>\n			</ion-col>\n			<ion-col class="product-quantity-column quantity-column-big" text-right>\n				<span class="products-list-quantity list-quantity-big">\n					<ion-icon name="md-remove"></ion-icon>\n					<span>01</span>\n					<ion-icon name="md-add" class="icon-plus"></ion-icon>\n				</span>\n				<span class="products-list-cart list-cart-big">\n					<ion-icon name="cart"></ion-icon> Adicionar\n				</span>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="product-group-text">\n				Este produto tem desconto na compra acima de:\n			</ion-col>\n		</ion-row>\n		<ion-row class="product-groups" text-center>\n			<ion-col class="product-group">\n				<ion-row><ion-col>Acima de 3 Caixas</ion-col></ion-row>\n				<ion-row>\n					<ion-col class="no-padding-top"><span>R$ 14,90</span> p/ uni.</ion-col>\n				</ion-row>\n			</ion-col>\n			<ion-col class="product-group">\n				<ion-row><ion-col>Acima de 6 Caixas</ion-col></ion-row>\n				<ion-row>\n					<ion-col class="no-padding-top"><span>R$ 13,90</span> p/ uni.</ion-col>\n				</ion-row>\n			</ion-col>\n			<ion-col class="product-group">\n				<ion-row><ion-col>Acima de 9 Caixas</ion-col></ion-row>\n				<ion-row>\n					<ion-col class="no-padding-top"><span>R$ 12,90</span> p/ uni.</ion-col>\n				</ion-row>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="product-action">\n				<ion-icon class="font-size-20" name="netfoods-card"></ion-icon> \n				<span class="padding-left-5">Formas de pagamento</span>\n			</ion-col>\n			<ion-col class="product-action">\n				<ion-icon class="font-size-25" name="netfoods-heart"></ion-icon> \n				<span>Adicionar a Favoritos</span>\n			</ion-col>\n			<ion-col class="product-action">\n				<ion-icon class="font-size-20" name="netfoods-information"></ion-icon> \n				<span>Info</span>\n			</ion-col>\n		</ion-row>\n	</ion-col>\n</ion-row>\n<products-list [products_list]="related_products" type="related-products" name="Produtos Similares"></products-list>\n<ion-row class="product-description">\n	<ion-col>\n		<ion-row>\n			<ion-col class="market-title margin-top-10 margin-bottom-15">\n				Descrição do Produto\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="product-description-text">\n				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n			</ion-col>\n		</ion-row>\n	</ion-col>\n</ion-row>\n<ion-row class="product-supplier">\n	<ion-col col-8>\n		<ion-row>\n			<ion-col class="market-title margin-top-10 no-padding-bottom">\n				Informações sobre o fornecedor\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="product-supplier-text no-padding-top padding-left-13">\n				Grupo PA <ion-icon name="netfoods-valid"></ion-icon>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="product-supplier-comments no-padding-top padding-left-13">\n				(451) Comentários\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="product-supplier-local no-padding-top padding-left-13 margin-bottom-15">\n				Santos, São Paulo, Cadastrado desde Janeiro de 2017\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="product-description-text">\n				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.\n			</ion-col>\n		</ion-row>\n	</ion-col>\n	<ion-col class="margin-top-25" text-right>\n		<button ion-button class="button-supplier">Fale com o Fornecedor</button>\n	</ion-col>\n</ion-row>\n<rating></rating>\n<products-list [products_list]="related_products" type="recommended_products" name="Produtos Recomendados"></products-list>\n'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/product/product.html"*/
    }),
    __metadata("design:paramtypes", [])
], ProductComponent);

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the RatingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RatingComponent = (function () {
    function RatingComponent() {
        this.rating_option = 'rating';
    }
    return RatingComponent;
}());
RatingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rating',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/rating/rating.html"*/'<ion-row>\n	<ion-col>\n		<ion-row>\n			<ion-col class="market-title margin-top-10 no-padding-bottom">\n				Avaliações\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="rating">\n				<ion-row>\n					<ion-col class="no-padding">\n						<ion-segment [(ngModel)]="rating_option">\n							<ion-segment-button value="rating">\n								Avaliações\n							</ion-segment-button>\n							<ion-segment-button value="questions">\n								Perguntas\n							</ion-segment-button>\n						</ion-segment>\n					</ion-col>\n				</ion-row>\n				<ion-row class="rating_options">\n					<ion-col>\n						<div [ngSwitch]="rating_option">\n							<div *ngSwitchCase="\'rating\'">\n								<ion-row class="rating-option-text">\n									<ion-col col-4 class="padding-top-15">\n										<span class="rating-number">4.1</span>\n										<div class="rating-stars">\n											<ion-icon class="full-star" name="star"></ion-icon>\n											<ion-icon class="full-star" name="star"></ion-icon>\n											<ion-icon class="full-star" name="star"></ion-icon>\n											<ion-icon class="full-star" name="star"></ion-icon>\n											<ion-icon class="gray-star" name="ios-star-outline"></ion-icon>\n										</div>\n										<span class="rating-comments">(451)</span>\n									</ion-col>\n									<ion-col col-5 class="padding-top-15">\n										<span class="rating-percentage">90%</span>\n										<span class="rating-percentage-text">dos clientes recomendam este produto</span>\n									</ion-col>\n									<ion-col text-right>\n										<button ion-button class="button-supplier">Avaliar Produto</button>\n									</ion-col>\n								</ion-row>\n								<ion-row class="rating-option-text">\n									<ion-col>\n										<ion-row>\n											<ion-col class="rating-title">Eu compraria de novo</ion-col>\n										</ion-row>\n										<ion-row>\n											<ion-col>\n												<div class="rating-stars">\n													<ion-icon class="full-star" name="star"></ion-icon>\n													<ion-icon class="full-star" name="star"></ion-icon>\n													<ion-icon class="full-star" name="star"></ion-icon>\n													<ion-icon class="full-star" name="star"></ion-icon>\n													<ion-icon class="gray-star" name="ios-star-outline"></ion-icon>\n												</div>\n												<span class="rating-date">25/09/2016</span>\n											</ion-col>\n										</ion-row>\n										<ion-row>\n											<ion-col class="rating-message">\n												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.\n												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.\n												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.\n											</ion-col>\n										</ion-row>\n									</ion-col>\n								</ion-row>\n								<ion-row class="rating-option-text">\n									<ion-col>\n										<ion-row>\n											<ion-col class="rating-title">Muito bom o produto</ion-col>\n										</ion-row>\n										<ion-row>\n											<ion-col>\n												<div class="rating-stars">\n													<ion-icon class="full-star" name="star"></ion-icon>\n													<ion-icon class="full-star" name="star"></ion-icon>\n													<ion-icon class="full-star" name="star"></ion-icon>\n													<ion-icon class="full-star" name="star"></ion-icon>\n													<ion-icon class="gray-star" name="ios-star-outline"></ion-icon>\n												</div>\n												<span class="rating-date">16/08/2016</span>\n											</ion-col>\n										</ion-row>\n										<ion-row>\n											<ion-col class="rating-message">\n												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.\n												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.\n												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.\n											</ion-col>\n										</ion-row>\n									</ion-col>\n								</ion-row>\n							</div>\n							<ion-list *ngSwitchCase="\'questions\'">\n								<ion-item>\n									<h2>Seja o primeiro a perguntar!</h2>\n								</ion-item>\n							</ion-list>\n						</div>\n					</ion-col>\n				</ion-row>\n			</ion-col>\n		</ion-row>\n	</ion-col>\n</ion-row>'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/rating/rating.html"*/
    }),
    __metadata("design:paramtypes", [])
], RatingComponent);

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CategoryComponent = (function () {
    function CategoryComponent() {
        this.products = [{
                name: "Nozes sem casca",
                size: "180g",
                group: "Qualitá",
                group_value: "R$ 233,90",
                unit_value: "R$ 21,90",
                image: "../assets/img/recommends-products1.png"
            },
            {
                name: "Ovos Vermelho Grandes Org.",
                size: "Bandeja com 10 uni.",
                group: "TAEQ",
                group_value: "R$ 112,90",
                unit_value: "R$ 10,90",
                image: "../assets/img/recommends-products2.png"
            },
            {
                name: "Molho de Tomate Pronto",
                size: "Vidro 500g",
                group: "Salsaretti",
                group_value: "R$ 81,90",
                unit_value: "R$ 7,90",
                image: "../assets/img/recommends-products3.png"
            },
            {
                name: "Suco de Laranja",
                size: "Garrafa 1 Litro",
                group: "Blissimo",
                group_value: "R$ 91,90",
                unit_value: "R$ 8,90",
                image: "../assets/img/recommends-products4.png"
            },
            {
                name: "Azeite de Oliva Extra Virgem",
                size: "Vidro 500ml",
                group: "Gallo",
                group_value: "R$ 400,90",
                unit_value: "R$ 41,90",
                image: "../assets/img/recommends-products5.png"
            },
            {
                name: "Nozes sem casca",
                size: "180g",
                group: "Qualitá",
                group_value: "R$ 233,90",
                unit_value: "R$ 21,90",
                image: "../assets/img/recommends-products1.png"
            },
            {
                name: "Ovos Vermelho Grandes Org.",
                size: "Bandeja com 10 uni.",
                group: "TAEQ",
                group_value: "R$ 112,90",
                unit_value: "R$ 10,90",
                image: "../assets/img/recommends-products2.png"
            },
            {
                name: "Molho de Tomate Pronto",
                size: "Vidro 500g",
                group: "Salsaretti",
                group_value: "R$ 81,90",
                unit_value: "R$ 7,90",
                image: "../assets/img/recommends-products3.png"
            },
            {
                name: "Suco de Laranja",
                size: "Garrafa 1 Litro",
                group: "Blissimo",
                group_value: "R$ 91,90",
                unit_value: "R$ 8,90",
                image: "../assets/img/recommends-products4.png"
            },
            {
                name: "Azeite de Oliva Extra Virgem",
                size: "Vidro 500ml",
                group: "Gallo",
                group_value: "R$ 400,90",
                unit_value: "R$ 41,90",
                image: "../assets/img/recommends-products5.png"
            },
            {
                name: "Nozes sem casca",
                size: "180g",
                group: "Qualitá",
                group_value: "R$ 233,90",
                unit_value: "R$ 21,90",
                image: "../assets/img/recommends-products1.png"
            },
            {
                name: "Ovos Vermelho Grandes Org.",
                size: "Bandeja com 10 uni.",
                group: "TAEQ",
                group_value: "R$ 112,90",
                unit_value: "R$ 10,90",
                image: "../assets/img/recommends-products2.png"
            },
            {
                name: "Molho de Tomate Pronto",
                size: "Vidro 500g",
                group: "Salsaretti",
                group_value: "R$ 81,90",
                unit_value: "R$ 7,90",
                image: "../assets/img/recommends-products3.png"
            },
            {
                name: "Suco de Laranja",
                size: "Garrafa 1 Litro",
                group: "Blissimo",
                group_value: "R$ 91,90",
                unit_value: "R$ 8,90",
                image: "../assets/img/recommends-products4.png"
            },
            {
                name: "Azeite de Oliva Extra Virgem",
                size: "Vidro 500ml",
                group: "Gallo",
                group_value: "R$ 400,90",
                unit_value: "R$ 41,90",
                image: "../assets/img/recommends-products5.png"
            },
            {
                name: "Nozes sem casca",
                size: "180g",
                group: "Qualitá",
                group_value: "R$ 233,90",
                unit_value: "R$ 21,90",
                image: "../assets/img/recommends-products1.png"
            },
            {
                name: "Ovos Vermelho Grandes Org.",
                size: "Bandeja com 10 uni.",
                group: "TAEQ",
                group_value: "R$ 112,90",
                unit_value: "R$ 10,90",
                image: "../assets/img/recommends-products2.png"
            },
            {
                name: "Molho de Tomate Pronto",
                size: "Vidro 500g",
                group: "Salsaretti",
                group_value: "R$ 81,90",
                unit_value: "R$ 7,90",
                image: "../assets/img/recommends-products3.png"
            },
            {
                name: "Suco de Laranja",
                size: "Garrafa 1 Litro",
                group: "Blissimo",
                group_value: "R$ 91,90",
                unit_value: "R$ 8,90",
                image: "../assets/img/recommends-products4.png"
            },
            {
                name: "Azeite de Oliva Extra Virgem",
                size: "Vidro 500ml",
                group: "Gallo",
                group_value: "R$ 400,90",
                unit_value: "R$ 41,90",
                image: "../assets/img/recommends-products5.png"
            }];
        this.items = [{
                name: "bebidas",
                subitems: [{
                        name: "água",
                        subsubitems: [{
                                name: "Com gás"
                            }, {
                                name: "Sem gás"
                            }]
                    }, {
                        name: "refrigerante",
                        subsubitems: [{
                                name: "Diet"
                            }, {
                                name: "Light"
                            }, {
                                name: "Normal"
                            }]
                    }, {
                        name: "suco",
                        subsubitems: [{
                                name: "Natural"
                            }, {
                                name: "Integral"
                            }]
                    }, {
                        name: "cerveja",
                        subsubitems: [{
                                name: "Com álcool"
                            }, {
                                name: "Sem álcool"
                            }]
                    }]
            }];
    }
    CategoryComponent.prototype.ngOnChanges = function (data) {
        this.options = [];
        this.getSubItems(data.category.currentValue.type);
    };
    CategoryComponent.prototype.ngOnInit = function () {
        this.getSubItems(this.category['type']);
    };
    CategoryComponent.prototype.getSubItems = function (category) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].name == category) {
                this.options = this.items[i].subitems;
            }
        }
    };
    return CategoryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CategoryComponent.prototype, "category", void 0);
CategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'category',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/category/category.html"*/'<ion-row class="market-content">\n	<ion-col class="breadcrumbs">Mercado <span>> {{category.name}}</span></ion-col>\n</ion-row>\n<ion-row>\n	<ion-col class="category-title">\n		<ion-icon [name]="category.icon"></ion-icon> {{category.name}}\n	</ion-col>\n</ion-row>\n<ion-row>\n	<ion-col>\n		<ion-row class="category-filter">\n			<ion-col col-8>\n				<ion-icon name="ios-funnel-outline"></ion-icon> Filtrar por: \n				<span class="category-subitems" (click)="getSubItems()" *ngFor="let option of options">{{option.name}}</span>\n			</ion-col>\n			<ion-col class="category-sort" text-right>\n				<span>Ordernar por:</span> Relevância <ion-icon name="ios-arrow-down"></ion-icon>\n			</ion-col>\n		</ion-row>\n	</ion-col>\n</ion-row>\n<products-list [products_list]="products" type="products"></products-list>\n	'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/category/category.html"*/
    }),
    __metadata("design:paramtypes", [])
], CategoryComponent);

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FastBuyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the FastBuyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FastBuyComponent = (function () {
    function FastBuyComponent() {
        this.suppliers = [{
                id: 1,
                name: "Pão de Açucar",
                image: "../assets/img/pao_de_acucar.png"
            }, {
                id: 2,
                name: "Carrefour",
                image: "../assets/img/carrefour.png"
            }, {
                id: 3,
                name: "Casa Santa Luzia",
                image: "../assets/img/casa_santa_luzia.png"
            }, {
                id: 4,
                name: "Walmart",
                image: "../assets/img/walmart.png"
            }, {
                id: 5,
                name: "Dia %",
                image: "../assets/img/dia.png"
            }];
        this.products = [{
                name: "Açaí Orgânico c/ Guaraná",
                code: "1009072",
                group: "Grupo PA",
                current_value: "R$ 18,90",
                previous_value: "R$ 19,90",
                average_value: "R$ 19,50",
                group_value: "R$ 17,90",
                arrow: "down",
                image: "../assets/img/acai.jpg"
            },
            {
                name: "Snack Orgânico s/ Casca",
                code: "1022429",
                group: "Grupo PA",
                current_value: "R$ 8,90",
                previous_value: "R$ 9,90",
                average_value: "R$ 9,50",
                group_value: "R$ 17,90",
                arrow: "down",
                image: "../assets/img/bio2snack.jpg"
            },
            {
                name: "Bebida Orgânica de Arroz Amêndoa",
                code: "1041755",
                group: "Grupo PA",
                current_value: "R$ 18,90",
                previous_value: "R$ 17,90",
                average_value: "R$ 17,50",
                group_value: "R$ 17,90",
                arrow: "up",
                image: "../assets/img/bebida_organica.jpg"
            },
            {
                name: "Ovos Vermelho G/ Orgânicos",
                code: "3182840",
                group: "Grupo PA",
                current_value: "R$ 7,90",
                previous_value: "R$ 9,90",
                average_value: "R$ 9,50",
                group_value: "R$ 17,90",
                arrow: "down",
                image: "../assets/img/ovos_organico.png"
            },
            {
                name: "Vinho Argentino T/ Orgânico",
                code: "1009072",
                group: "Grupo PA",
                current_value: "R$ 78,90",
                previous_value: "R$ 77,90",
                average_value: "R$ 75,50",
                group_value: "R$ 17,90",
                arrow: "up",
                image: "../assets/img/vinho_tinto.jpg"
            }];
        this.shopping_cart = [{
                name: "Açaí Orgânico c/ Guaraná",
                code: "1009072",
                group: "Grupo PA",
                current_value: "R$ 18,90",
                previous_value: "R$ 19,90",
                average_value: "R$ 19,50",
                group_value: "R$ 17,90",
                arrow: "down",
                image: "../assets/img/acai.jpg"
            },
            {
                name: "Snack Orgânico s/ Casca",
                code: "1022429",
                group: "Grupo PA",
                current_value: "R$ 8,90",
                previous_value: "R$ 9,90",
                average_value: "R$ 9,50",
                group_value: "R$ 17,90",
                arrow: "down",
                image: "../assets/img/bio2snack.jpg"
            },
            {
                name: "Bebida Orgânica de Arroz Amêndoa",
                code: "1041755",
                group: "Grupo PA",
                current_value: "R$ 18,90",
                previous_value: "R$ 17,90",
                average_value: "R$ 17,50",
                group_value: "R$ 17,90",
                arrow: "up",
                image: "../assets/img/bebida_organica.jpg"
            },
            {
                name: "Ovos Vermelho G/ Orgânicos",
                code: "3182840",
                group: "Grupo PA",
                current_value: "R$ 7,90",
                previous_value: "R$ 9,90",
                average_value: "R$ 9,50",
                group_value: "R$ 17,90",
                arrow: "down",
                image: "../assets/img/ovos_organico.png"
            },
            {
                name: "Vinho Argentino T/ Orgânico",
                code: "1009072",
                group: "Grupo PA",
                current_value: "R$ 78,90",
                previous_value: "R$ 77,90",
                average_value: "R$ 75,50",
                group_value: "R$ 17,90",
                arrow: "up",
                image: "../assets/img/vinho_tinto.jpg"
            }];
    }
    FastBuyComponent.prototype.ngOnInit = function () {
        this.initializeItems();
    };
    FastBuyComponent.prototype.initializeItems = function () {
        this.items = this.suppliers;
        this.items_quantity = this.items.length;
    };
    FastBuyComponent.prototype.getSupplier = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.items_quantity = this.items.length;
        }
    };
    return FastBuyComponent;
}());
FastBuyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fast-buy',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/fast-buy/fast-buy.html"*/'<ion-col class="content fast-buy" id="contentFastBuy" no-padding col-10>\n	<ion-row class="fast-buy-content">\n		<ion-col col-3>\n			<div class="step">\n				<ion-row>\n					<ion-col class="step-title">Passo 1</ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col class="step-subtitle">Selecione o Fornecedor</ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col class="no-padding-top">\n						<ion-item class="products-search">        \n							<ion-label> <ion-icon name="search"></ion-icon></ion-label>\n							<ion-input clearInput [ngModel]="inputSupplier" (ngModelChange)="getSupplier($event)" placeholder="Buscar"></ion-input>\n						</ion-item>\n					</ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col class="step-quantity">\n						<span *ngIf="items_quantity">{{items_quantity}} </span>\n						<span *ngIf="items_quantity == 1">fornecedor encontrado</span>\n						<span *ngIf="items_quantity > 1">fornecedores encontrados</span>\n						<span *ngIf="items_quantity == 0"> Nenhum fornecedor encontrado!</span>\n					</ion-col>\n				</ion-row>\n				<ion-row class="step-suppliers">\n					<ion-col>\n						<ion-row class="step-supplier" *ngFor="let supplier of items">\n							<ion-col col-5><img [src]="supplier.image"></ion-col>\n							<ion-col col-7 class="step-supplier-name">{{supplier.name}}</ion-col>\n						</ion-row>\n					</ion-col>\n				</ion-row>\n			</div>\n		</ion-col>\n		<ion-col>\n			<div class="step">\n				<ion-row>\n					<ion-col class="products-box" no-padding>\n						<products [products]="products" source="fast_buy" name="Passo 2"></products>\n					</ion-col>\n				</ion-row>\n			</div>\n		</ion-col>\n		<ion-col col-4 class="step-3">\n			<ion-row class="margin-left-10">\n				<ion-col class="step-title">Passo 3</ion-col>\n			</ion-row>\n			<ion-row class="margin-left-10">\n				<ion-col class="step-subtitle">Confirme seu Pedido</ion-col>\n			</ion-row>\n			<ion-row class="step-subtotal margin-left-15">\n				<ion-col>\n					<span class="step-subtotal-supplier">Multifoods</span>\n					<span class="step-subtotal-quantity">3 itens</span>\n				</ion-col>\n				<ion-col class="step-subtotal-price">\n					R$ 617,90\n				</ion-col>\n			</ion-row>\n			<ion-row class="product-list margin-left-10 step-product-list">\n				<ion-col *ngFor="let item of shopping_cart" class="product-box step-product-box">\n					<ion-row>\n						<ion-col col-2>\n							<img [src]="item.image" />\n						</ion-col>\n						<ion-col>\n							<ion-row>\n								<ion-col class="product-name" tooltip="{{item.name}}" positionV="bottom" arrow event="hover">\n									{{item.name}}\n								</ion-col>			\n							</ion-row>\n							<ion-row>\n								<ion-col class="product-current-value no-padding-bottom">{{item.current_value}} <span>p/ unidade</span></ion-col>\n							</ion-row>\n							<ion-row>\n								<ion-col class="step-product-quantity">Qtd: 10</ion-col>\n							</ion-row>\n						</ion-col>\n						<ion-col col-2 class="step-product-remove">\n							<ion-icon name="netfoods-trash"></ion-icon>\n						</ion-col>\n					</ion-row>\n				</ion-col>\n			</ion-row>\n			<ion-row class="step-total padding-left-10">\n				<ion-col>\n					<ion-row>\n						<ion-col class="step-subtotal-supplier">\n							Multifoods\n						</ion-col>\n						<ion-col class="step-total-text" text-right>\n							valor total do pedido\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="step-subtotal-quantity no-padding-top">\n							2 fornecedores\n						</ion-col>\n						<ion-col class="step-total-price no-padding-top" text-right>\n							R$ 617,90\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col text-center>\n							<button ion-button full icon-start class="button-order">\n								<ion-icon name="cart"></ion-icon>\n								Efetuar Pedido\n							</button>\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="step-save-order " text-center>\n							Salvar Pedido\n						</ion-col>\n					</ion-row>\n				</ion-col>\n			</ion-row>\n		</ion-col>\n	</ion-row>\n</ion-col>'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/components/fast-buy/fast-buy.html"*/
    }),
    __metadata("design:paramtypes", [])
], FastBuyComponent);

//# sourceMappingURL=fast-buy.js.map

/***/ })

},[323]);
//# sourceMappingURL=main.js.map