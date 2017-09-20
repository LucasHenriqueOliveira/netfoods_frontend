import { Component, Input } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../popover/popover';

/**
 * Generated class for the ActivitiesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'activities',
  templateUrl: 'activities.html'
})
export class ActivitiesComponent {

	date: any;
	@Input() activities: any

	constructor(private popoverCtrl: PopoverController) {
		this.date = new Date();
	}
	
	presentPopover(ev) {
		let popover = this.popoverCtrl.create(PopoverComponent, { menu: 'teste'});
		popover.present({
			ev: ev
		});
	}

}
