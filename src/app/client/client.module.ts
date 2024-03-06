import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule} from './client-routing.module';
import {ClientComponent} from './client.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {ClientHomeComponent} from './modules/client-home/client-home.component';
import {ProductPageComponent} from './modules/product-page/product-page.component';
import {NavbarComponent} from './modules/layout/navbar/navbar.component';
import {CarouselComponent} from './modules/layout/carousel/carousel.component';
import {FooterComponent} from './modules/layout/footer/footer.component';
import {HomeSliderComponent} from './modules/client-home/home-slider/home-slider.component';
import {HomeProductCardComponent} from './modules/client-home/home-product-card/home-product-card.component';
import {LogInComponent} from './modules/auth/log-in/log-in.component';
import {RegisterComponent} from './modules/auth/register/register.component';
import {RouterModule} from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import { ContactComponent } from './modules/contact/contact.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { ProductCardComponent } from './shared/module/product-card/product-card.component';
import {FormsModule} from '@angular/forms';
import { ProductDetailComponent } from './modules/product-detail/product-detail.component';
import { CartComponent } from './modules/cart/cart.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';



@NgModule({
  declarations: [
    ClientComponent,
    ClientHomeComponent,
    HomeSliderComponent,
    HomeProductCardComponent,
    ProductPageComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    LogInComponent,
    RegisterComponent,
    ContactComponent,
    ProductCardComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    AboutUsComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule
  ],
  exports: [
    ClientComponent,
    ClientRoutingModule,
    HomeSliderComponent
  ]
})
export class ClientModule { }
