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

	ngOnInit() {
		document.getElementById("contentMarket").scrollIntoView(true);
	}

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
		current_value: 18.90,
		previous_value: 19.90,
		average_value: 19.50,
		group_value: 17.90,
		arrow: "down",
		image: "../assets/img/acai.jpg"
	},
	{
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

	recommended_products = [{
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
	}];

	featured_suppliers = [{
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

	top_selling_products = [{
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

	submenu: string = '';
	market_content: string = 'home';
	product: any;
	
	constructor(public events: Events) {
		events.subscribe('submenu', (submenu) => {
			this.submenu = submenu;
			this.market_content = 'category';
		});

		events.subscribe('market_content', (data) => {
			this.market_content = data['type'];
			if(this.market_content == 'product') {
				this.product = data['product'];
			}
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

	getProduct() {
		this.market_content = 'product';
	}

}
