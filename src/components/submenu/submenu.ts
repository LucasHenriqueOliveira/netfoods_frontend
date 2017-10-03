import { Component } from '@angular/core';
import { Events, PopoverController } from 'ionic-angular';

/**
 * Generated class for the SubmenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  	selector: 'submenu',
  	templateUrl: 'submenu.html'
})
export class SubmenuComponent {
  
	submenu: string = '';
	
	constructor(public events: Events) {
	}

	go(menu: string, ev) {
		this.submenu = menu;
		this.events.publish('submenu', this.submenu);
	}
}
