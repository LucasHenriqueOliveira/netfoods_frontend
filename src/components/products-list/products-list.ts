import { Component, Input } from '@angular/core';
import { Events } from 'ionic-angular';

/**
 * Generated class for the ProductsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'products-list',
  templateUrl: 'products-list.html'
})
export class ProductsListComponent {

	@Input() products_list: any
	@Input() name: string
	@Input() type: string
	tooltip: any;
	
	constructor(public events: Events) {
		
	}

	getProduct() {
		this.tooltip = document.getElementsByTagName("tooltip-box")[0];
		if(this.tooltip) {
			this.tooltip.style.visibility = 'hidden';
		}

		this.events.publish('market_content', { type: 'product', product: {name: 'teste'}});
	}

}
