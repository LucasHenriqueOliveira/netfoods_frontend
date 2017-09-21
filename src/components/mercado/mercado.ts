import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the MercadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mercado',
  templateUrl: 'mercado.html'
})
export class MercadoComponent {
  
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

	constructor() {

	}

	ngAfterViewInit() {
		this.slides.enableKeyboardControl(true);
	}

}
