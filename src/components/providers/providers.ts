import { Component, Input } from '@angular/core';

/**
 * Generated class for the ProvidersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'providers',
  templateUrl: 'providers.html'
})
export class ProvidersComponent {

  @Input() providers: any

  constructor() {
    
  }

}
