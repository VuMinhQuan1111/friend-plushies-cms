import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { AdminHomeComponent } from './admin/modules/admin-home/admin-home.component';
import { AdminRoutingModule} from './admin/admin-routing.module';
import {ClientRoutingModule} from './client/client-routing.module';
import { NavbarComponent } from './client/modules/layout/navbar/navbar.component';
import { CarouselComponent } from './client/modules/layout/carousel/carousel.component';
import { FooterComponent } from './client/modules/layout/footer/footer.component';
import { ClientHomeComponent } from './client/modules/client-home/client-home.component';
import { HomeProductCardComponent } from './client/modules/client-home/home-product-card/home-product-card.component';
import {HomeSliderComponent} from './client/modules/client-home/home-slider/home-slider.component';
import {ProductPageComponent} from './client/modules/product-page/product-page.component';
import { LogInComponent } from './client/modules/auth/log-in/log-in.component';
import { RegisterComponent } from './client/modules/auth/register/register.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {ClientModule} from './client/client.module';
import {AdminModule} from './admin/admin.module';



@NgModule({
  declarations: [
    AppComponent,
    // HomeSliderComponent,
    // AdminComponent,
    // ClientComponent,
    // ClientHomeComponent,
    // AdminHomeComponent,
    // NavbarComponent,
    // CarouselComponent,
    // FooterComponent,
    // HomeProductCardComponent,
    // ProductPageComponent,
    // LogInComponent,
    // RegisterComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    AdminRoutingModule,
    ClientRoutingModule,
    ClientModule,
    AdminModule,
    AdminRoutingModule,
  ],
  providers: [],
  exports: [
    // HomeSliderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
