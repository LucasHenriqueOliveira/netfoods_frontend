import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChartsModule } from 'ng2-charts';
import { OrdersComponent } from '../components/orders/orders';
import { HeaderComponent } from '../components/header/header';
import { SidemenuComponent } from '../components/sidemenu/sidemenu';
import { DashboardComponent } from '../components/dashboard/dashboard';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OrdersComponent,
    HeaderComponent,
    SidemenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: 'pt-BR'},
  ]
})
export class AppModule {}
