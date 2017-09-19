import { Component, Input } from '@angular/core';

/**
 * Generated class for the ActivitiesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'activities',
  templateUrl: 'activities.html'
})
export class ActivitiesComponent {

	date: any;
	@Input() activities: any

	constructor() {
		this.date = new Date();
	}

}
