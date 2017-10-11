import { Item } from "./item-model";

export class CartItem {
    constructor(public Item: Item, 
        public quantity: number = 1) {}

    value(): number {
        return this.Item.unit_value * this.quantity
    }
}