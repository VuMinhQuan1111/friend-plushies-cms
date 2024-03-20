import { Component } from '@angular/core';
import {NbCardModule, NbCheckboxModule, NbFormFieldModule, NbSelectModule, NbSidebarModule} from '@nebular/theme';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NbCardModule,
    NgForOf,
    NbSidebarModule,
    NbCheckboxModule,
    NbSelectModule,
    NbFormFieldModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
