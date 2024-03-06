import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminHomeComponent} from './modules/admin-home/admin-home.component';


const routes: Routes = [
  {path: 'admin',
    component: AdminComponent,
    children: [
      {path: '', component: AdminHomeComponent},
      {path: 'admin-home', component: AdminHomeComponent}
    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
