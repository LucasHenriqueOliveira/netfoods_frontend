import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

/**
 * Generated class for the SubmenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  	selector: 'submenu',
  	templateUrl: 'submenu.html'
})
export class SubmenuComponent {
  
	submenu: string = '';
	items: any = [{
		name: 'Mercearia',
		type: 'mercearia',
		icon: 'netfoods-groceries'
	}, {
		name: 'Hortifruti',
		type: 'hortifruti',
		icon: 'netfoods-carrot'
	}, {
		name: 'Carnes, Aves e Peixes',
		type: 'carnes',
		icon: 'netfoods-steak'
	}, {
		name: 'Frios e Laticínios',
		type: 'frios',
		icon: 'netfoods-cheese'
	}, {
		name: 'Congelados',
		type: 'congelados',
		icon: 'netfoods-frozen-food'
	}, {
		name: 'Bebidas',
		type: 'bebidas',
		icon: 'netfoods-alcoholic-drinks'
	}, {
		name: 'Confeitaria',
		type: 'confeitaria',
		icon: 'netfoods-cupcake'
	}, {
		name: 'Equipamentos e Utensílios',
		type: 'equipamentos',
		icon: 'netfoods-whisk'
	}, {
		name: 'Limpeza e Higiene',
		type: 'limpeza',
		icon: 'netfoods-hygienic-items'
	}, {
		name: 'Embalagem e Descartáveis',
		type: 'embalagem',
		icon: 'netfoods-packing'
	}]
	
	constructor(public events: Events) {
	}

	go(menu: any, ev) {
		this.submenu = menu;
		this.events.publish('submenu', this.submenu);
	}
}
