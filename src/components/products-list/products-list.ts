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
	@Input() title: string
	@Input() type: string
	
	constructor(public events: Events) {
		
	}

	getProduct() {
		this.events.publish('market_content', { type: 'product', product: {name: 'teste'}});
	}

}
