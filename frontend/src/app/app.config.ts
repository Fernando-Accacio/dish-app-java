import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishFormComponent } from './components/dish-form/dish-form.component';
import { DishStoreComponent } from './components/dish-store/dish-store.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderTrackingComponent } from './components/order-tracking/order-tracking.component';

const routes: Routes = [
  { path: '', component: DishStoreComponent },
  { path: 'finalizado', component: CheckoutComponent },
  { path: 'pedido', component: OrderTrackingComponent },
  { path: 'gerente', component: DishListComponent },
  { path: 'add-dish', component: DishFormComponent },
  { path: 'edit-dish/:id', component: DishFormComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
};