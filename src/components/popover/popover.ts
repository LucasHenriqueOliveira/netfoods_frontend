import { Component } from '@angular/core';
import { NavParams, Events, ViewController } from 'ionic-angular';

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
	selector: 'popover',
	templateUrl: 'popover.html'
})
export class PopoverComponent {

	shopping_cart = [{
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

	options: any
	type: string
	name: string
	
	constructor(private params: NavParams, public events: Events, public viewCtrl: ViewController) {
		this.options = this.params.get("menu");
		this.type = this.params.get("type");
		this.name = this.params.get("name");
	}

	selectOption(option: any) {
		if(this.type == 'orders') {
			this.events.publish('option', option.name);
			this.viewCtrl.dismiss();
		}
	}

}
