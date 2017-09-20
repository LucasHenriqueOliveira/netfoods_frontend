import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders/orders';
import { HeaderComponent } from './header/header';
import { SidemenuComponent } from './sidemenu/sidemenu';
import { DashboardComponent } from './dashboard/dashboard';
import { ProvidersComponent } from './providers/providers';
import { ActivitiesComponent } from './activities/activities';
import { ProductsComponent } from './products/products';
import { PopoverComponent } from './popover/popover';
@NgModule({
	declarations: [OrdersComponent,
    HeaderComponent,
    SidemenuComponent,
    DashboardComponent,
    ProvidersComponent,
    ActivitiesComponent,
    ProductsComponent,
    PopoverComponent],
	imports: [],
	exports: [OrdersComponent,
    HeaderComponent,
    SidemenuComponent,
    DashboardComponent,
    ProvidersComponent,
    ActivitiesComponent,
    ProductsComponent,
    PopoverComponent]
})
export class ComponentsModule {}
