import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { CartItem } from '../../models/cart-item.model';
import { Item } from "../../models/item-model";

/*
  Generated class for the ShoppingCartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShoppingCartProvider {

	constructor() {
		
	}

	items: CartItem[] = []

	addItem(item: any) {
        let foundItem = this.items.find((mItem) => mItem.Item.id === item.id)

        if(foundItem) {
            this.increaseQty(foundItem)
        } else {
            this.items.push(new CartItem(item))
        }
	}

	removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
    }
	
	increaseQty(item: CartItem) {
        item.quantity = item.quantity + 1
    }

    decreaseQty(item: CartItem) {
        item.quantity = item.quantity - 1
        if(item.quantity === 0) {
            this.removeItem(item)
        }
	}

	hasItem(item: any) {
		let foundItem = this.items.find((mItem) => mItem.Item.id === item.id)
		
		if(foundItem) {
			return true;
		} else {
			return false;
		}
	}
}
