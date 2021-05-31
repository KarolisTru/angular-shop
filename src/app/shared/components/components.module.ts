import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { ButtonComponent } from './util/button/button.component';
import { BreadcrumbsComponent } from './nav/breadcrumbs/breadcrumbs.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { DeleteModalComponent } from './products/modals/delete-modal/delete-modal.component';
import { ProductCardComponent } from './products/product-card/product-card.component';

import { RouterModule } from '@angular/router';
import { AddProductModalComponent } from './products/modals/add-product-modal/add-product-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductModalComponent } from './products/modals/edit-product-modal/edit-product-modal.component';
import { LoadingSpinnerComponent } from './util/loading-spinner/loading-spinner.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ModalComponent } from './util/modal/modal.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ButtonComponent,
    BreadcrumbsComponent,
    CarouselComponent,
    ProductsListComponent,
    DeleteModalComponent,
    ProductCardComponent,
    AddProductModalComponent,
    EditProductModalComponent,
    LoadingSpinnerComponent,
    ProductFormComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ], 
  exports: [
    NavbarComponent,
    CarouselComponent,
    LoadingSpinnerComponent,
    ProductsListComponent
  ]
})
export class ComponentsModule { }
