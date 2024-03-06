import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientComponent} from './client.component';
import {ClientHomeComponent} from './modules/client-home/client-home.component';
import {ProductPageComponent} from './modules/product-page/product-page.component';
import {LogInComponent} from './modules/auth/log-in/log-in.component';
import {RegisterComponent} from './modules/auth/register/register.component';
import {ContactComponent} from './modules/contact/contact.component';
import {ProductDetailComponent} from './modules/product-detail/product-detail.component';
import {CartComponent} from './modules/cart/cart.component';
import {CheckoutComponent} from './modules/checkout/checkout.component';



const routes: Routes = [
  {path: '',
    component: ClientComponent,
    children: [
      {path: '', redirectTo: 'client-home', pathMatch: 'full'},
      {path: 'client-home', component: ClientHomeComponent},
      {path: 'product-page', component: ProductPageComponent},
      {path: 'login', component: LogInComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'product-details/:id', component: ProductDetailComponent},
      {path: 'cart', component: CartComponent},
      {path: 'checkout', component: CheckoutComponent},
    ]

  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
