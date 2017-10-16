import { Component, Input } from '@angular/core';
import { PopoverController, Events } from 'ionic-angular';
import { PopoverComponent } from '../popover/popover';

/**
 * Generated class for the OrdersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'orders',
  templateUrl: 'orders.html'
})
export class OrdersComponent {

	@Input() orders: any
	status: string = 'Em Processo'
	cssStatusBox: string = 'box-yellow'
	cssStatusCircle: string = 'circle-yellow'

	constructor(private popoverCtrl: PopoverController, public events: Events) {

		events.subscribe('option', (option) => {
			this.status = option;
			
			switch(this.status) { 
				case 'Em Processo': { 
					this.cssStatusBox = 'box-yellow';
					this.cssStatusCircle = 'circle-yellow';
					break; 
				} 
				case 'Aguardando': { 
					this.cssStatusBox = 'box-gray';
					this.cssStatusCircle = 'circle-gray';
					break; 
				} 
				case 'Cancelado': { 
					this.cssStatusBox = 'box-red';
					this.cssStatusCircle = 'circle-red';
					break; 
				} 
				case 'Entregues': { 
					this.cssStatusBox = 'box-green';
					this.cssStatusCircle = 'circle-green';
					break; 
				} 
				case 'Finalizados': { 
					this.cssStatusBox = 'box-blue';
					this.cssStatusCircle = 'circle-blue';
					break; 
				}
			}
		});
	}

	filter(ev) {
		let popover = this.popoverCtrl.create(PopoverComponent, { menu: [{
			name: 'Cancelado',
			css: 'circle-red'
		}, {
			name: 'Aguardando',
			css: 'circle-gray'
		}, {
			name: 'Em Processo',
			css: 'circle-yellow'
		}, {
			name: 'Entregues',
			css: 'circle-green'
		}, {
			name: 'Finalizados',
			css: 'circle-blue'
		}], type: "orders"}, {cssClass: 'popover-ios'});
		popover.present({
		  ev: ev
		});
	}

}
