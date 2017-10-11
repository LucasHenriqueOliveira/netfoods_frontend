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
		id: 1,
		name: "Nozes sem casca",
		size: "180g",
		group: "Qualitá",
		group_value: 233.90,
		unit_value: 21.90,
		image: "../assets/img/recommends-products1.png"
	},
	{
		id: 2,
		name: "Ovos Vermelho Grandes Org.",
		size: "Bandeja com 10 uni.",
		group: "TAEQ",
		group_value: 112.90,
		unit_value: 10.90,
		image: "../assets/img/recommends-products2.png"
	},
	{
		id: 3,
		name: "Molho de Tomate Pronto",
		size: "Vidro 500g",
		group: "Salsaretti",
		group_value: 81.90,
		unit_value: 7.90,
		image: "../assets/img/recommends-products3.png"
	},
	{
		id: 4,
		name: "Suco de Laranja",
		size: "Garrafa 1 Litro",
		group: "Blissimo",
		group_value: 91.90,
		unit_value: 8.90,
		image: "../assets/img/recommends-products4.png"
	},
	{
		id: 5,
		name: "Azeite de Oliva Extra Virgem",
		size: "Vidro 500ml",
		group: "Gallo",
		group_value: 400.90,
		unit_value: 41.90,
		image: "../assets/img/recommends-products5.png"
	},
	{
		id: 6,
		name: "Nozes sem casca",
		size: "180g",
		group: "Qualitá",
		group_value: 233.90,
		unit_value: 21.90,
		image: "../assets/img/recommends-products1.png"
	},
	{
		id: 7,
		name: "Ovos Vermelho Grandes Org.",
		size: "Bandeja com 10 uni.",
		group: "TAEQ",
		group_value: 112.90,
		unit_value: 10.90,
		image: "../assets/img/recommends-products2.png"
	},
	{
		id: 8,
		name: "Molho de Tomate Pronto",
		size: "Vidro 500g",
		group: "Salsaretti",
		group_value: 81.90,
		unit_value: 7.90,
		image: "../assets/img/recommends-products3.png"
	},
	{
		id: 9,
		name: "Suco de Laranja",
		size: "Garrafa 1 Litro",
		group: "Blissimo",
		group_value: 91.90,
		unit_value: 8.90,
		image: "../assets/img/recommends-products4.png"
	},
	{
		id: 10,
		name: "Azeite de Oliva Extra Virgem",
		size: "Vidro 500ml",
		group: "Gallo",
		group_value: 400.90,
		unit_value: 41.90,
		image: "../assets/img/recommends-products5.png"
	}, {
		id: 1,
		name: "Nozes sem casca",
		size: "180g",
		group: "Qualitá",
		group_value: 233.90,
		unit_value: 21.90,
		image: "../assets/img/recommends-products1.png"
	},
	{
		id: 2,
		name: "Ovos Vermelho Grandes Org.",
		size: "Bandeja com 10 uni.",
		group: "TAEQ",
		group_value: 112.90,
		unit_value: 10.90,
		image: "../assets/img/recommends-products2.png"
	},
	{
		id: 3,
		name: "Molho de Tomate Pronto",
		size: "Vidro 500g",
		group: "Salsaretti",
		group_value: 81.90,
		unit_value: 7.90,
		image: "../assets/img/recommends-products3.png"
	},
	{
		id: 4,
		name: "Suco de Laranja",
		size: "Garrafa 1 Litro",
		group: "Blissimo",
		group_value: 91.90,
		unit_value: 8.90,
		image: "../assets/img/recommends-products4.png"
	},
	{
		id: 5,
		name: "Azeite de Oliva Extra Virgem",
		size: "Vidro 500ml",
		group: "Gallo",
		group_value: 400.90,
		unit_value: 41.90,
		image: "../assets/img/recommends-products5.png"
	},
	{
		id: 6,
		name: "Nozes sem casca",
		size: "180g",
		group: "Qualitá",
		group_value: 233.90,
		unit_value: 21.90,
		image: "../assets/img/recommends-products1.png"
	},
	{
		id: 7,
		name: "Ovos Vermelho Grandes Org.",
		size: "Bandeja com 10 uni.",
		group: "TAEQ",
		group_value: 112.90,
		unit_value: 10.90,
		image: "../assets/img/recommends-products2.png"
	},
	{
		id: 8,
		name: "Molho de Tomate Pronto",
		size: "Vidro 500g",
		group: "Salsaretti",
		group_value: 81.90,
		unit_value: 7.90,
		image: "../assets/img/recommends-products3.png"
	},
	{
		id: 9,
		name: "Suco de Laranja",
		size: "Garrafa 1 Litro",
		group: "Blissimo",
		group_value: 91.90,
		unit_value: 8.90,
		image: "../assets/img/recommends-products4.png"
	},
	{
		id: 10,
		name: "Azeite de Oliva Extra Virgem",
		size: "Vidro 500ml",
		group: "Gallo",
		group_value: 400.90,
		unit_value: 41.90,
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
