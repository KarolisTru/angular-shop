import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketballPageComponent } from './shared/components/pages/basketball-page/basketball-page.component';
import {HomepageComponent} from './shared/components/pages/homepage/homepage.component';
import {ProductPageComponent} from './shared/components/pages/product-page/product-page.component';


const routes: Routes = [
  {path: 'products/:id', component: ProductPageComponent},
  {path: 'basketball', component: BasketballPageComponent},
  {path: '', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
