import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './shared/components/pages/homepage/homepage.component';
import {ProductPageComponent} from './shared/components/pages/product-page/product-page.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomepageComponent},
  {path: 'products/:id', component: ProductPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
