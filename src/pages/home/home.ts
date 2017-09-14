import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	pedidos = [{
		number: "ORD.048922",
		value: "R$4.500,00",
		date: "28/08",
		client: "Temakeria"
	},
	{
		number: "ORD.048723",
		value: "R$15.500,00",
		date: "27/08",
		client: "Paris 6"
	},
	{
		number: "ORD.048654",
		value: "R$3.500,00",
		date: "27/08",
		client: "Grand Cru"
	},
	{
		number: "ORD.048723",
		value: "R$24.000,00",
		date: "28/08",
		client: "Jam"
	},
	{
		number: "ORD.048777",
		value: "R$3.500,00",
		date: "27/08",
		client: "Grand Cru"
	}, 
	{
		number: "ORD.048796",
		value: "R$24.500,00",
		date: "28/08",
		client: "Jam"
	}]
	
	constructor(public navCtrl: NavController) {

	}

	go() {
		
	}

}
