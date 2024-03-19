import { Component } from '@angular/core';
import {NbCardModule, NbCheckboxModule, NbSidebarModule} from '@nebular/theme';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NbCardModule,
    NgForOf,
    NbSidebarModule,
    NbCheckboxModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
