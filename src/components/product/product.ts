import { Component, Input } from '@angular/core';

/**
 * Generated class for the ProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product',
  templateUrl: 'product.html'
})
export class ProductComponent {

	@Input() product: any

	constructor() {
		
	}

}
