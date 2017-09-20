import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../popover/popover';

/**
 * Generated class for the DashboardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardComponent {
	  
	orders = [{
		number: "ORD.048922",
		value: "R$4.500,00",
		date: "28/08",
		type_label: "Fornecedores",
		providers: "Nutrivida; + 4 outras empresas",
		type_payment: "card",
		hasMessage: true
	},
	{
		number: "ORD.048723",
		value: "R$15.500,00",
		date: "27/08",
		type_label: "Fornecedores",
		providers: "Nutrivida; + 4 outras empresas",
		type_payment: "code",
		hasMessage: true
	},
	{
		number: "ORD.048654",
		value: "R$3.500,00",
		date: "27/08",
		type_label: "Fornecedores",
		providers: "Nutrivida; + 4 outras empresas",
		type_payment: "card",
		hasMessage: false
	},
	{
		number: "ORD.048723",
		value: "R$24.000,00",
		date: "28/08",
		type_label: "Cliente",
		providers: "Jam",
		type_payment: "code",
		hasMessage: true
	},
	{
		number: "ORD.048777",
		value: "R$3.500,00",
		date: "27/08",
		type_label: "Cliente",
		providers: "Grand Cru",
		type_payment: "code",
		hasMessage: false
	}, 
	{
		number: "ORD.048796",
		value: "R$24.500,00",
		date: "28/08",
		type_label: "Cliente",
		providers: "Jam",
		type_payment: "card",
		hasMessage: true
	},
	{
		number: "ORD.048723",
		value: "R$24.000,00",
		date: "28/08",
		type_label: "Cliente",
		providers: "Jam",
		type_payment: "code",
		hasMessage: true
	},
	{
		number: "ORD.048777",
		value: "R$3.500,00",
		date: "27/08",
		type_label: "Cliente",
		providers: "Grand Cru",
		type_payment: "code",
		hasMessage: false
	}, 
	{
		number: "ORD.048796",
		value: "R$24.500,00",
		date: "28/08",
		type_label: "Cliente",
		providers: "Jam",
		type_payment: "card",
		hasMessage: true
	}];
  
    products = [{
      name: "Açaí Orgânico c/ Guaraná",
      code: "1009072",
      group: "Grupo PA",
      current_value: "R$ 18,90",
      previous_value: "R$ 19,90",
      average_value: "R$ 19,50",
      arrow: "down",
      image: "../assets/img/acai.jpg"
    },
    {
      name: "Snack Orgânico s/ Casca",
      code: "1022429",
      group: "Grupo PA",
      current_value: "R$ 8,90",
      previous_value: "R$ 9,90",
      average_value: "R$ 9,50",
      arrow: "down",
      image: "../assets/img/bio2snack.jpg"
    },
    {
      name: "Bebida Orgânica de Arroz Amêndoa",
      code: "1041755",
      group: "Grupo PA",
      current_value: "R$ 18,90",
      previous_value: "R$ 17,90",
      average_value: "R$ 17,50",
      arrow: "up",
      image: "../assets/img/bebida_organica.jpg"
    },
    {
      name: "Ovos Vermelho G/ Orgânicos",
      code: "3182840",
      group: "Grupo PA",
      current_value: "R$ 7,90",
      previous_value: "R$ 9,90",
      average_value: "R$ 9,50",
      arrow: "down",
      image: "../assets/img/ovos_organico.png"
    },
    {
      name: "Vinho Argentino T/ Orgânico",
      code: "1009072",
      group: "Grupo PA",
      current_value: "R$ 78,90",
      previous_value: "R$ 77,90",
      average_value: "R$ 75,50",
      arrow: "up",
      image: "../assets/img/vinho_tinto.jpg"
    }];
  
    providers = [{
      name: "Grupo PA",
      value_expense: "R$85.000",
      last_order: "R$15.500",
      marketshare: "18.7%"
    },
    {
      name: "AO Alimentos Orgânicos",
      value_expense: "R$115.000",
      last_order: "R$27.500",
      marketshare: "37.2%"
    },
    {
      name: "Casa Santa Luzia",
      value_expense: "R$68.000",
      last_order: "R$16.300",
      marketshare: "48.6%"
    }];
  
    activities = [{
      name: "Grupo PA",
      id: "09809744",
      value: "R$15.500",
      date: "29/08/2017",
      arrow: "up"
    },
    {
      name: "Grupo PA",
      id: "09804444",
      value: "R$1.500",
      date: "28/08/2017",
      arrow: "down"
    },
    {
      name: "Grand Cru",
      id: "09801111",
      value: "R$11.250",
      date: "28/08/2017",
      arrow: "up"
    },
    {
      name: "Casa Santa Luzia",
      id: "09805689",
      value: "R$21.100",
      date: "29/08/2017",
      arrow: "up"
    },
    {
      name: "Grand Cru",
      id: "09805689",
      value: "R$21.100",
      date: "29/08/2017",
      arrow: "up"
    }];
  
    // lineChart
    public lineChartData:Array<any> = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
    ];
  
    public lineChartLabels:Array<any> = ['ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET'];
    public lineChartOptions:any = {
      responsive: true,
      legend: {
        display: false
      }
    };
  
    public lineChartColors:Array<any> = [{
      backgroundColor: 'rgba(50,148,176,0.2)',
      borderColor: 'rgba(50,148,176,1)',
      pointBackgroundColor: 'rgba(50,148,176,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(50,148,176,0.8)'
    }];
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';
  
    // barChart
    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true,
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };
  
    public barChartLabels:string[] = ['Temakeria', 'Paris 6', 'Grand Cru'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = false;
    public barChartColors:Array<any> = [{ 
      backgroundColor: 'rgba(52,68,83,1)',
    }];
    
    public barChartData:any[] = [
      {
        data: [65, 35, 90], 
        label: 'Por Fornecedor'
      }
    ];
  
    // Radar
    public radarChartLabels:string[] = ['ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET'];
  
    public radarChartOptions:any = {
      responsive: true,
      legend: {
        display: false
      }
    };
  
    public radarChartColors:Array<any> = [{ 
      backgroundColor: 'rgba(41,104,121,0.8)',
      borderColor: 'rgba(41,104,121,1)',
      pointBackgroundColor: 'rgba(41,104,121,1)',
      pointBorderColor: 'rgba(41,104,121,1)',
      pointHoverBackgroundColor: 'rgba(41,104,121,1)',
      pointHoverBorderColor: 'rgba(41,104,121,0.8)',
    }, {
      backgroundColor: 'rgba(122,209,212,0.8)',
      borderColor: 'rgba(122,209,212,1)',
      pointBackgroundColor: 'rgba(122,209,212,1)',
      pointBorderColor: 'rgba(122,209,212,1)',
      pointHoverBackgroundColor: 'rgba(122,209,212,1)',
      pointHoverBorderColor: 'rgba(122,209,212,0.8)'
    }];
    
    public radarChartData:any = [
       {data: [65, 59, 90, 81, 56, 55], label: 'Custo Planejado'},
       {data: [28, 48, 40, 19, 96, 27], label: 'Custo Realizado'}
    ];
    public radarChartType:string = 'radar';

  	constructor(private popoverCtrl: PopoverController) {
	
    }
    
    presentPopover(ev) {
      let popover = this.popoverCtrl.create(PopoverComponent, { menu: 'teste'});
      popover.present({
        ev: ev
      });
    }

}
