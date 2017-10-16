import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChartsModule } from 'ng2-charts';
import { TooltipsModule } from 'ionic-tooltips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { SubmenuPopoverComponent } from '../components/submenu-popover/submenu-popover';
import { ProductComponent } from '../components/product/product';
import { RatingComponent } from '../components/rating/rating';
import { CategoryComponent } from '../components/category/category';
import { FastBuyComponent } from '../components/fast-buy/fast-buy';
import { ShoppingCartProvider } from '../providers/shopping-cart/shopping-cart';
import { PopoverModule } from "ngx-popover";

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
    FeaturedSuppliersComponent,
    SubmenuPopoverComponent,
    ProductComponent,
    RatingComponent,
    CategoryComponent,
    FastBuyComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      popoverEnter: 'popover-pop-in',
      popoverLeave: 'popover-pop-out'
    }),
    ChartsModule,
    TooltipsModule,
    BrowserAnimationsModule,
    PopoverModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PopoverComponent,
    SubmenuPopoverComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    ShoppingCartProvider,
  ]
})
export class AppModule {}
