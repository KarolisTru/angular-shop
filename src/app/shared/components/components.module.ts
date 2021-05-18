import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LinkButtonComponent } from './link-button/link-button.component';
import { ButtonComponent } from './button/button.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CarouselComponent } from './carousel/carousel.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  declarations: [
    NavbarComponent,
    LinkButtonComponent,
    ButtonComponent,
    BreadcrumbsComponent,
    CarouselComponent,
    IconButtonComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ], 
  exports: [
    NavbarComponent,
    CarouselComponent
  ]
})
export class ComponentsModule { }
