webpackJsonp([0],{

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartPageModule", function() { return ShoppingCartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_cart__ = __webpack_require__(469);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShoppingCartPageModule = (function () {
    function ShoppingCartPageModule() {
    }
    return ShoppingCartPageModule;
}());
ShoppingCartPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__shopping_cart__["a" /* ShoppingCartPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shopping_cart__["a" /* ShoppingCartPage */]),
        ],
    })
], ShoppingCartPageModule);

//# sourceMappingURL=shopping-cart.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the ShoppingCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShoppingCartPage = (function () {
    function ShoppingCartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShoppingCartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShoppingCartPage');
    };
    return ShoppingCartPage;
}());
ShoppingCartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-shopping-cart',template:/*ion-inline-start:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/pages/shopping-cart/shopping-cart.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-grid>\n      <ion-row class="shopping-cart-header">\n        <ion-col col-5 class="col-logo">\n          	<img src="assets/img/logo-white.png" />\n		</ion-col>\n		<ion-col col-3>\n			<span>Precisa de ajuda? (11) 3090-7650</span>\n		</ion-col>\n		<ion-col text-right>\n			<span>Ambiente Seguro</span>\n		</ion-col>\n		<ion-col text-right>\n			<img src="assets/img/blindado.png" />\n		</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-grid class="shopping-cart-page" no-padding>\n		<ion-row class="sub-header">\n			<ion-col col-2>\n				<button ion-button full icon-start (click)="backButton()" class="back-order">\n					<ion-icon name="ios-arrow-back"></ion-icon>  \n					Escolher mais itens\n				</button>\n			</ion-col>\n			<ion-col text-right>\n				<span class="total-text">Total do Pedido</span>\n				<span class="total-number">R$ 2.528,20</span>\n			</ion-col>\n			<ion-col col-2 text-right class="shopping-cart-button-order">\n				<button ion-button full icon-start class="button-order">\n					<ion-icon name="cart"></ion-icon>\n					Efetuar Pedido\n				</button>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col col-3>\n				<div class="shopping-cart-message">\n					<ion-row>\n						<ion-col class="message-title">Carrinho</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col class="message-text">\n							<p>\n								Confirme as quantidades solicitadas em seu carrinho, e se os seus pedidos atingem o \n								mínimo de vendas do Fornecedor.\n							</p>\n							<p>\n								* Produtos vendidos por quilo, podem sofrer variação no preço final. Os fornecedores da nossa\n								plataforma vendem produtos de forma transparente, a quantidade que você paga é a quantidade que\n								você recebe!\n							</p>\n							<p>\n								A responsabilidade da entrega e da qualidade do produto é do Fornecedor. A Netfoods fica a \n								disposição para analisar todos os casos solitados através do email netfoods@netfoods.com.br ou pelo\n								telefone (11) 3090-7650.\n							</p>\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col>\n							<button ion-button full icon-start class="save-order">\n								Salvar Lista de Pedidos\n							</button>\n						</ion-col>\n					</ion-row>\n				</div>\n			</ion-col>\n			<ion-col class="shopping-cart-content">\n			</ion-col>\n		</ion-row>\n	</ion-grid>	\n</ion-content>\n'/*ion-inline-end:"/Users/lucas/Documents/sites/netfoods/netfoods-frontend/src/pages/shopping-cart/shopping-cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ShoppingCartPage);

//# sourceMappingURL=shopping-cart.js.map

/***/ })

});
//# sourceMappingURL=0.js.map