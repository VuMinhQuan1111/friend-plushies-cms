import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {NbLayoutComponent, NbLayoutModule, NbRouteTabsetModule, NbTabsetModule, NbThemeModule} from '@nebular/theme';
import {ClientModule} from './modules/client/client.module';
import {AdminModule} from './modules/admin/admin.module';
import {LayoutComponent} from './modules/client';
import {HttpClientModule} from '@angular/common/http';
import {NgImageSliderModule} from 'ng-image-slider';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
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
    // RegisterComponent,=

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ClientModule,
    AdminModule,
    NbLayoutModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    NbTabsetModule,
    NbRouteTabsetModule,
    NgImageSliderModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'en'},
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ],
  exports: [
    // HomeSliderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
