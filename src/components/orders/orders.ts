import { Component, Input } from '@angular/core';

/**
 * Generated class for the OrdersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'orders',
  templateUrl: 'orders.html'
})
export class OrdersComponent {

  @Input() orders: any

  constructor() {

  }

}
