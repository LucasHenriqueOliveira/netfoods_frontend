import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders/orders';
import { HeaderComponent } from './header/header';
import { SidemenuComponent } from './sidemenu/sidemenu';
import { DashboardComponent } from './dashboard/dashboard';
import { ProvidersComponent } from './providers/providers';
import { ActivitiesComponent } from './activities/activities';
import { ProductsComponent } from './products/products';
@NgModule({
	declarations: [OrdersComponent,
    HeaderComponent,
    SidemenuComponent,
    DashboardComponent,
    ProvidersComponent,
    ActivitiesComponent,
    ProductsComponent],
	imports: [],
	exports: [OrdersComponent,
    HeaderComponent,
    SidemenuComponent,
    DashboardComponent,
    ProvidersComponent,
    ActivitiesComponent,
    ProductsComponent]
})
export class ComponentsModule {}
