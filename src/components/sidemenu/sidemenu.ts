import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

/**
 * Generated class for the SidemenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sidemenu',
  templateUrl: 'sidemenu.html'
})
export class SidemenuComponent {

	sidemenu: string = 'dashboard';

	constructor(public navCtrl: NavController, public events: Events) {
	}

	go(menu: string) {
		this.sidemenu = menu;
		this.events.publish('sidemenu', this.sidemenu);
	}
}
