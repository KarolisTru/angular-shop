import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrimaryColor]'
})
export class PrimaryColorDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = "rgba(172, 172, 235, 0.712)";
   }

}
