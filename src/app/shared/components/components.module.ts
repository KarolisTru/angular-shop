import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductsComponent } from './components/products/products.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { RouterModule } from '@angular/router';
import { AddProductModalComponent } from './components/add-product-modal/add-product-modal.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    NavbarComponent,
    ButtonComponent,
    BreadcrumbsComponent,
    CarouselComponent,
    ProductsComponent,
    ModalComponent,
    ProductCardComponent,
    HomepageComponent,
    ProductPageComponent,
    ProductDetailsComponent,
    AddProductModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ], 
  exports: [
    NavbarComponent,
    HomepageComponent,
    ProductPageComponent,
  ]
})
export class ComponentsModule { }
