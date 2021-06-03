import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectCarouselItems,
  selectCarouselLength,
} from 'src/app/state/carousel/carousel.selectors';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  private activeIndex = 0;

  items$ = this.store.select(selectCarouselItems);
  carouselLength!: number;

  @ViewChild('cardsContainer')
  private containerElement!: ElementRef<HTMLElement>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store
      .select(selectCarouselLength)
      .subscribe((length) => (this.carouselLength = length));
  }

  trackByFn(index: number, item: any): number {
    return index;
  }

  moveLeft(): void {
    if (!this.isFirstSlideActive) {
      this.activeIndex--;
    }
  }

  moveRight(): void {
    if (!this.isLastSlideActive) {
      this.activeIndex++;
    }
  }

  get sliderWidth(): number {
    return this.containerElement.nativeElement.offsetWidth;
  }
  private get isLastSlideActive(): boolean {
    return this.activeIndex === this.carouselLength - 1;
  }
  private get isFirstSlideActive(): boolean {
    return this.activeIndex === 0;
  }
  get currentTranslateXValue(): string {
    return this.activeIndex === 0
      ? `translateX(0px)`
      : `translateX(${this.sliderWidth * -this.activeIndex}px)`;
  }
}
