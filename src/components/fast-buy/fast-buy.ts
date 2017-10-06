import { Component } from '@angular/core';

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

	constructor() {
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

}
