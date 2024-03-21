import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {NbButtonModule, NbLayoutModule} from '@nebular/theme';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientRoutingModule,
    NbLayoutModule

  ]
})
export class ClientModule { }
