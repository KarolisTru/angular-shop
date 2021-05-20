import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsComponent } from './products/products.component';
import { ModalComponent } from './modal/modal.component';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ButtonComponent,
    BreadcrumbsComponent,
    CarouselComponent,
    ProductsComponent,
    ModalComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
  ], 
  exports: [
    NavbarComponent,
    CarouselComponent,
    ProductsComponent
  ]
})
export class ComponentsModule { }
