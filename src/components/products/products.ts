import { Component, Input } from '@angular/core';
import { Events } from 'ionic-angular';
import { ShoppingCartProvider } from '../../providers/shopping-cart/shopping-cart';
import { Item } from '../../models/item-model';

/**
 * Generated class for the ProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'products',
  templateUrl: 'products.html'
})
export class ProductsComponent {

	@Input() products: any
	@Input() name: string
	@Input() source: string
	private items: any;
	private qtd_items: number;

	constructor(public events: Events, private ShoppingCartProvider: ShoppingCartProvider) {
		
	}

	getProduct() {
		this.events.publish('market_content', { type: 'product', product: {name: 'teste'}});
	}

	ngOnInit() {
		this.initializeItems();
	}

	initializeItems() {
		this.items = this.products;
		this.qtd_items = this.items.length;
	}

	getItems(ev: any) {

		// Reset items back to all of the items
		this.initializeItems();
	
		// set val to the value of the searchbar
		let val = ev;
	
		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
		  this.items = this.items.filter((item) => {
			return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
		  })
		  this.qtd_items = this.items.length;
		}
	}

	removeItem(item: any) {
		this.ShoppingCartProvider.removeItem(item);
	}
	
	addItem(item: Item) {
		if(!this.hasItem(item)) {
			this.ShoppingCartProvider.addItem(item);
		} else {
			this.removeItem(item);
		}
	}

	hasItem(item: Item) {
		return this.ShoppingCartProvider.hasItem(item);
	}
}
