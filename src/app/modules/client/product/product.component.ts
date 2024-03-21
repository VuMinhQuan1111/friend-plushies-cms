import { Component } from '@angular/core';
import {NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbSelectModule, NbSidebarModule} from '@nebular/theme';
import {NgForOf} from '@angular/common';
import {product} from '../../../../assets/data/product/product'

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
    NbButtonModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  protected readonly product = product;
}
