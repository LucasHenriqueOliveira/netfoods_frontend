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

	options: any
	type: string
	
	constructor(private params: NavParams, public events: Events, public viewCtrl: ViewController) {
		this.options = this.params.get("menu");
		this.type = this.params.get("type");
	}

	selectOption(option: any) {
		if(this.type == 'orders') {
			this.events.publish('option', option.name);
			this.viewCtrl.dismiss();
		}
	}

}
