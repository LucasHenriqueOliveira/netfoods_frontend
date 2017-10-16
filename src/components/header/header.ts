import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../popover/popover';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

	constructor(private popoverCtrl: PopoverController) {
  	}
  
	showShoppingCart(ev) {
		let popover = this.popoverCtrl.create(PopoverComponent, { type: "cart"}, {cssClass: 'popover-ios'});

		popover.present({
			ev: ev
		});

		setTimeout(() => {  
			var element = document.querySelector('.popover-md');

			if(element) {
				element.classList.remove("popover-md");
			}
		}, 1);
	}
	
	showUserOptions(ev) {
		let popover = this.popoverCtrl.create(PopoverComponent, { type: "user", name: "Restaurante 013"}, {cssClass: 'popover-ios'});

		popover.present({
			ev: ev
		});

		setTimeout(() => {  
			var element = document.querySelector('.popover-md');
			
			if(element) {
				element.classList.remove("popover-md");
			}
		}, 1);
	}
}
