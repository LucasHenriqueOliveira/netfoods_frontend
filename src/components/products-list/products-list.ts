import { Component, Input } from '@angular/core';
import { Events } from 'ionic-angular';
import { ShoppingCartProvider } from '../../providers/shopping-cart/shopping-cart';
import { Item } from '../../models/item-model';

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
	
	constructor(public events: Events, private ShoppingCartProvider: ShoppingCartProvider) {
		
	}

	getProduct() {
		this.events.publish('market_content', { type: 'product', product: {name: 'teste'}});
	}

	removeItem(item: any) {
		this.ShoppingCartProvider.removeItem(item);
	}
	
	addItem(item: Item) {
		this.ShoppingCartProvider.addItem(item);
	}

	hasItem(item: Item) {
		return this.ShoppingCartProvider.hasItem(item);
	}

	labelProduct(item: Item) {
		if(this.hasItem(item)) {
			return 'Adicionado';
		} else {
			return 'Adicionar';
		}
	}

}
