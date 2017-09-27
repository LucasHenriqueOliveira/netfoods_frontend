import { Component } from '@angular/core';
import { Events, PopoverController } from 'ionic-angular';
import { SubmenuPopoverComponent } from '../submenu-popover/submenu-popover';

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
	
	constructor(public events: Events, private popoverCtrl: PopoverController) {
	}

	go(menu: string, ev) {
		this.submenu = menu;
		this.events.publish('submenu', this.submenu);

		let popover = this.popoverCtrl.create(SubmenuPopoverComponent);
		
		popover.present({
			ev: ev
		});

		popover.onDidDismiss((popoverData) => {
			this.submenu = '';
		})
	}
}
