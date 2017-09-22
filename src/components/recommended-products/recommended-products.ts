import { Component, Input } from '@angular/core';

/**
 * Generated class for the RecommendedProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'recommended-products',
  templateUrl: 'recommended-products.html'
})
export class RecommendedProductsComponent {

	@Input() recommended_products: any
	
	constructor() {

	}

}
