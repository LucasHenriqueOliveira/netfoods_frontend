import { Component, Input } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../popover/popover';

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
	private items: any;
	private inputItem: string = '';
	private qtd_items: number;

	constructor(private popoverCtrl: PopoverController) {
		
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

	presentPopover(ev) {
		let popover = this.popoverCtrl.create(PopoverComponent, { menu: 'teste'});
			popover.present({
			ev: ev
		});
	}

}
