import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShoppingCartPage } from '../../pages/shopping-cart/shopping-cart';

/**
 * Generated class for the FastBuyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fast-buy',
  templateUrl: 'fast-buy.html'
})
export class FastBuyComponent {
	
	private items: any;
	private items_quantity: number;
	suppliers = [{
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

	products = [{
		id: 1,
		name: "Açaí Orgânico c/ Guaraná",
		code: "1009072",
		group: "Grupo PA",
		current_value: 18.90,
		previous_value: 19.90,
		average_value: 19.50,
		group_value: 17.90,
		arrow: "down",
		image: "../assets/img/acai.jpg"
	},
	{
		id: 2,
		name: "Snack Orgânico s/ Casca",
		code: "1022429",
		group: "Grupo PA",
		current_value: 8.90,
		previous_value: 9.90,
		average_value: 9.50,
		group_value: 17.90,
		arrow: "down",
		image: "../assets/img/bio2snack.jpg"
	},
	{
		id: 3,
		name: "Bebida Orgânica de Arroz Amêndoa",
		code: "1041755",
		group: "Grupo PA",
		current_value: 18.90,
		previous_value: 17.90,
		average_value: 17.50,
		group_value: 17.90,
		arrow: "up",
		image: "../assets/img/bebida_organica.jpg"
	},
	{
		id: 4,
		name: "Ovos Vermelho G/ Orgânicos",
		code: "3182840",
		group: "Grupo PA",
		current_value: 7.90,
		previous_value: 9.90,
		average_value: 9.50,
		group_value: 17.90,
		arrow: "down",
		image: "../assets/img/ovos_organico.png"
	},
	{
		id: 5,
		name: "Vinho Argentino T/ Orgânico",
		code: "1009072",
		group: "Grupo PA",
		current_value: 78.90,
		previous_value: 77.90,
		average_value: 75.50,
		group_value: 17.90,
		arrow: "up",
		image: "../assets/img/vinho_tinto.jpg"
	}];

	shopping_cart = [{
		id: 1,
		name: "Açaí Orgânico c/ Guaraná",
		code: "1009072",
		group: "Grupo PA",
		current_value: 18.90,
		previous_value: 19.90,
		average_value: 19.50,
		group_value: 17.90,
		arrow: "down",
		image: "../assets/img/acai.jpg"
	},
	{
		id: 2,
		name: "Snack Orgânico s/ Casca",
		code: "1022429",
		group: "Grupo PA",
		current_value: 8.90,
		previous_value: 9.90,
		average_value: 9.50,
		group_value: 17.90,
		arrow: "down",
		image: "../assets/img/bio2snack.jpg"
	},
	{
		id: 3,
		name: "Bebida Orgânica de Arroz Amêndoa",
		code: "1041755",
		group: "Grupo PA",
		current_value: 18.90,
		previous_value: 17.90,
		average_value: 17.50,
		group_value: 17.90,
		arrow: "up",
		image: "../assets/img/bebida_organica.jpg"
	},
	{
		id: 4,
		name: "Ovos Vermelho G/ Orgânicos",
		code: "3182840",
		group: "Grupo PA",
		current_value: 7.90,
		previous_value: 9.90,
		average_value: 9.50,
		group_value: 17.90,
		arrow: "down",
		image: "../assets/img/ovos_organico.png"
	},
	{
		id: 5,
		name: "Vinho Argentino T/ Orgânico",
		code: "1009072",
		group: "Grupo PA",
		current_value: 78.90,
		previous_value: 77.90,
		average_value: 75.50,
		group_value: 17.90,
		arrow: "up",
		image: "../assets/img/vinho_tinto.jpg"
	}];

	constructor(public navCtrl: NavController) {
	}

	ngOnInit() {
		this.initializeItems();
	}

	initializeItems() {
		this.items = this.suppliers;
		this.items_quantity = this.items.length;
	}

	getSupplier(ev: any) {
		// Reset items back to all of the items
		this.initializeItems();

		// set val to the value of the searchbar
		let val = ev;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.items = this.items.filter((item) => {
				return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
			this.items_quantity = this.items.length;
		}
	}

	openShoppingCart() {
		this.navCtrl.push(ShoppingCartPage);
	}

}
