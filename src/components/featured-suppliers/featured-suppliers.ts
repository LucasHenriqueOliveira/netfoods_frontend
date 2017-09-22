import { Component, Input } from '@angular/core';

/**
 * Generated class for the FeaturedSuppliersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'featured-suppliers',
  templateUrl: 'featured-suppliers.html'
})
export class FeaturedSuppliersComponent {

	@Input() featured_suppliers: any

	constructor() {
		
	}

}
