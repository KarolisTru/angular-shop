import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryColorDirective } from './primary-color.directive';



@NgModule({
  declarations: [
    PrimaryColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimaryColorDirective
  ]
})
export class DirectivesModule { }
