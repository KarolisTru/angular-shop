import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {CarouselItem} from '../../../carouselItem';
import {carouselItems} from '../../../carouselItems';


import {from, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit{

  private selectedSlideIndex = 0;
  private translateX = 0;
  carouselItems$!: Observable<CarouselItem>;

  @ViewChild('cardsContainer')
  private containerElement!: ElementRef<HTMLElement>;

  ngOnInit() {
    this.carouselItems$ = from(carouselItems);
  }

  moveLeft(): void {
    if (this.showsNotFirstSlide) {
      this.translateX += this.slideWidth;
      this.containerElement.nativeElement.style.transform = `translateX(${this.translateX}px)`;
      this.selectedSlideIndex--;
    }
  }

  moveRight(): void {
    if (this.showsNotLastSlide) {
      this.translateX -= this.slideWidth;
      this.containerElement.nativeElement.style.transform = `translateX(${this.translateX}px)`;
      this.selectedSlideIndex++;
    }
  }

  private get slideWidth(): number {
    return this.containerElement.nativeElement.offsetWidth;
  }

  private get showsNotLastSlide(): boolean {
    return this.selectedSlideIndex !== this.carouselItems$.length - 1;
  }
  private get showsNotFirstSlide(): boolean {
    return this.selectedSlideIndex !== 0;
  }
}
