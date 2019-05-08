import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BhShopComponent } from './bh-shop/bh-shop.component';

const routes: Routes = [
  {
    path: 'bhshop', component: BhShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
