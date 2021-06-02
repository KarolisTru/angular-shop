import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ComponentsModule } from '../shared/components/components.module';

@NgModule({
  declarations: [HomepageComponent, ProductPageComponent],
  imports: [CommonModule, RouterModule, ComponentsModule],
  exports: [HomepageComponent, ProductPageComponent],
})
export class PagesModule {}
