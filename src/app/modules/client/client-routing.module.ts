import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout';
import {HomeComponent} from './home/home.component';
import {IntroComponent} from './intro/intro.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'intro',
      component: IntroComponent,
    },
    {
      path: 'product',
      component: ProductComponent,
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
