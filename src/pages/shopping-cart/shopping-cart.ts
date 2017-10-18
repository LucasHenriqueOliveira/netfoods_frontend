import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-shopping-cart',
	templateUrl: 'shopping-cart.html',
})
export class ShoppingCartPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
	}

	ionWillEnter() {
		console.log('ionViewDidLoad ShoppingCartPage');
	}

	backButton() {
		this.navCtrl.pop();
	}

}
