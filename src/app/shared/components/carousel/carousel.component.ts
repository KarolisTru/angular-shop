import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { moveCarouselLeft, moveCarouselRight } from 'src/app/state/carousel/carousel.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import {
  selectActiveIndex,
  selectCarouselItems,
  selectIsLastIndexActive,
  selectIsFirstIndexActive,
} from 'src/app/state/carousel/carousel.selectors';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  items$ = this.store.select(selectCarouselItems);
  activeIndex$ = this.store.select(selectActiveIndex);
  isLastIndexActive$ = this.store.select(selectIsLastIndexActive);
  isFirstIndexActive$ = this.store.select(selectIsFirstIndexActive);

  private activeIndex = 0;
  private isLastSlideActive = false;
  private isFirstSlideActive = true;

  @ViewChild('cardsContainer')
  private containerElement!: ElementRef<HTMLElement>;
  private destroy$ = new Subject();

  constructor(private store: Store) {}

  ngOnInit() {
    this.activeIndex$
      .pipe(takeUntil(this.destroy$))
      .subscribe((index) => (this.activeIndex = index));
    this.isLastIndexActive$
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => (this.isLastSlideActive = val));
    this.isFirstIndexActive$
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => (this.isFirstSlideActive = val));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  trackByFn(index: number, item: any): number {
    return index;
  }

  moveLeft(): void {
    if (!this.isFirstSlideActive) {
      this.store.dispatch(moveCarouselLeft());
    }
  }

  moveRight(): void {
    if (!this.isLastSlideActive) {
      this.store.dispatch(moveCarouselRight());
    }
  }

  get sliderWidth(): number {
    return this.containerElement.nativeElement.offsetWidth;
  }

  get currentTranslateXValue(): string {
    return this.isFirstSlideActive
      ? `translateX(0px)`
      : `translateX(${this.sliderWidth * -this.activeIndex}px)`;
  }
}
