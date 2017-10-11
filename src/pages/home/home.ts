import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	menu: string = 'dashboard';
	notifications = [{
		message: "Pedido #23902 confirmado como entregue.",
		supplier: "Nelore Prime Alimentos",
		date: "05/07/2017 - 10:43"
	}, {
		message: "Pedido #23902 faturado.",
		supplier: "Nelore Prime Alimentos",
		date: "04/07/2017 - 15:29"
	}, {
		message: "Pedido #23902 confirmado pagamento.",
		supplier: "Nelore Prime Alimentos",
		date: "04/07/2017 - 14:52"
	}, {
		message: "Pedido #23902 enviado ao Fornecedor.",
		supplier: "Nelore Prime Alimentos",
		date: "04/07/2017 - 12:35"
	}]
	
	constructor(public navCtrl: NavController, public events: Events) {
		events.subscribe('sidemenu', (menu) => {
			this.menu = menu;
		});
	}
}
