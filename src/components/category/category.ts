import { Component, Input, OnChanges } from '@angular/core';

/**
 * Generated class for the CategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'category',
  templateUrl: 'category.html'
})
export class CategoryComponent implements OnChanges {

	@Input() category: any

	products = [{
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

	items = [{
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

	options: any

	ngOnChanges(data) {
		this.options = [];
		this.getSubItems(data.category.currentValue.type);
	}

	ngOnInit() {
		this.getSubItems(this.category['type']);
	}

	getSubItems(category) {
		for(var i = 0; i < this.items.length; i++){
			if(this.items[i].name == category) {
				this.options = this.items[i].subitems;
			}
		}
	}

	constructor() {
	}

}
