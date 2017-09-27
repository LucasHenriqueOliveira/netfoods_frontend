import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders/orders';
import { HeaderComponent } from './header/header';
import { SidemenuComponent } from './sidemenu/sidemenu';
import { DashboardComponent } from './dashboard/dashboard';
import { SuppliersComponent } from './suppliers/suppliers';
import { ActivitiesComponent } from './activities/activities';
import { ProductsComponent } from './products/products';
import { PopoverComponent } from './popover/popover';
import { MarketComponent } from './market/market';
import { SubmenuComponent } from './submenu/submenu';
import { ProductsListComponent } from './products-list/products-list';
import { FeaturedSuppliersComponent } from './featured-suppliers/featured-suppliers';
import { SubmenuPopoverComponent } from './submenu-popover/submenu-popover';
import { ProductComponent } from './product/product';
@NgModule({
	declarations: [OrdersComponent,
    HeaderComponent,
    SidemenuComponent,
    DashboardComponent,
    SuppliersComponent,
    ActivitiesComponent,
    ProductsComponent,
    PopoverComponent,
    MarketComponent,
    SubmenuComponent,
    ProductsListComponent,
    FeaturedSuppliersComponent,
    SubmenuPopoverComponent,
    ProductComponent],
	imports: [],
	exports: [OrdersComponent,
    HeaderComponent,
    SidemenuComponent,
    DashboardComponent,
    SuppliersComponent,
    MarketComponent,
    ActivitiesComponent,
    ProductsComponent,
    PopoverComponent,
    SubmenuComponent,
    ProductsListComponent,
    FeaturedSuppliersComponent,
    SubmenuPopoverComponent,
    ProductComponent]
})
export class ComponentsModule {}
