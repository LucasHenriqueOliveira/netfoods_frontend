import { Component, ViewChild } from '@angular/core';
import { Slides, Events } from 'ionic-angular';

/**
 * Generated class for the MarketComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'market',
  templateUrl: 'market.html'
})
export class MarketComponent {
  
	@ViewChild(Slides) slides: Slides;

	images = [{
		image: "assets/img/slide1.jpg"
	}, {
		image: "assets/img/slide2.jpg"
	},{
		image: "assets/img/slide3.jpg"
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

	recommended_products = [{
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

	featured_suppliers = [{
		name: "Produto Orgânico Brasil",
		image: "../assets/img/featured-suppliers1.png"
	},
	{
		name: "Grupo Bimbo",
		image: "../assets/img/featured-suppliers2.png"
	},
	{
		name: "Kelloggs",
		image: "../assets/img/featured-suppliers3.png"
	},
	{
		name: "Kimberly-Clark",
		image: "../assets/img/featured-suppliers4.png"
	},
	{
		name: "Unilever",
		image: "../assets/img/featured-suppliers5.png"
	}];

	top_selling_products = [{
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

	submenu: string = '';
	
	constructor(public events: Events) {
		events.subscribe('submenu', (submenu) => {
			this.submenu = submenu;
		});
	}

	ionViewDidEnter() {
		this.slides.update();
	}

	ngAfterViewInit() {
		this.slides.startAutoplay();
		this.slides.autoplay = "5000";
		this.slides.loop = true;
		this.slides.initialSlide = 0;
	}

}
