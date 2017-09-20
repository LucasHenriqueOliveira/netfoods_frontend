import { Component, Input } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../popover/popover';

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

  constructor(private popoverCtrl: PopoverController) {
    
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(PopoverComponent, { menu: 'teste'});
    popover.present({
      ev: ev
    });
  }

}
