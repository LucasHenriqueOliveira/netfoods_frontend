import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChartsModule } from 'ng2-charts';
import { OrdersComponent } from '../components/orders/orders';
import { HeaderComponent } from '../components/header/header';
import { SidemenuComponent } from '../components/sidemenu/sidemenu';
import { DashboardComponent } from '../components/dashboard/dashboard';
import { SuppliersComponent } from '../components/suppliers/suppliers';
import { ActivitiesComponent } from '../components/activities/activities';
import { ProductsComponent } from '../components/products/products';
import { PopoverComponent } from '../components/popover/popover';
import { MarketComponent } from '../components/market/market';
import { SubmenuComponent } from '../components/submenu/submenu';
import { ProductsListComponent } from '../components/products-list/products-list';
import { FeaturedSuppliersComponent } from '../components/featured-suppliers/featured-suppliers';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrdersComponent,
    HeaderComponent,
    SidemenuComponent,
    DashboardComponent,
    SuppliersComponent,
    ActivitiesComponent,
    ProductsComponent,
    MarketComponent,
    PopoverComponent,
    SubmenuComponent,
    ProductsListComponent,
    FeaturedSuppliersComponent
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
    PopoverComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: 'pt-BR'},
  ]
})
export class AppModule {}
