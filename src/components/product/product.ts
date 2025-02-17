import { Component, Input } from '@angular/core';

/**
 * Generated class for the ProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product',
  templateUrl: 'product.html'
})
export class ProductComponent {

	@Input() product: any
	tooltip: any

	ngOnInit() {
		document.getElementById("contentMarket").scrollIntoView(true);
		this.tooltip = document.getElementsByTagName("tooltip-box");

		for (let i = 0; i < this.tooltip.length; i++) {
			this.tooltip[i].style.visibility = "hidden";
		}
	}

	related_products = [{
		name: "Nozes sem casca",
		size: "180g",
		group: "Qualitá",
		group_value: 233.90,
		unit_value: 21.90,
		image: "../assets/img/recommends-products1.png"
	},
	{
		name: "Ovos Vermelho Grandes Org.",
		size: "Bandeja com 10 uni.",
		group: "TAEQ",
		group_value: 112.90,
		unit_value: 10.90,
		image: "../assets/img/recommends-products2.png"
	},
	{
		name: "Molho de Tomate Pronto",
		size: "Vidro 500g",
		group: "Salsaretti",
		group_value: 81.90,
		unit_value: 7.90,
		image: "../assets/img/recommends-products3.png"
	},
	{
		name: "Suco de Laranja",
		size: "Garrafa 1 Litro",
		group: "Blissimo",
		group_value: 91.90,
		unit_value: 8.90,
		image: "../assets/img/recommends-products4.png"
	},
	{
		name: "Azeite de Oliva Extra Virgem",
		size: "Vidro 500ml",
		group: "Gallo",
		group_value: 400.90,
		unit_value: 41.90,
		image: "../assets/img/recommends-products5.png"
	}];

	constructor() {
		this.product = {
			name: "Suco de Laranja",
			size: "Garrafa 1 Litro",
			group: "Blissimo",
			group_value: "R$ 91,90",
			unit_value: "R$ 8,90",
			image: "../assets/img/recommends-products4.png"
		}
	}

}
