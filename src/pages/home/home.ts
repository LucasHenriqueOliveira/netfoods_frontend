import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	menu: string = 'dashboard';
	
	constructor(public navCtrl: NavController, public events: Events) {
		events.subscribe('sidemenu', (menu) => {
			this.menu = menu;
		});
	}
}
