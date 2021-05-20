import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { CarouselItem } from '../../../carouselItem';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  private activeIndex = 0;

  @Input() items!: CarouselItem[];

  @ViewChild('cardsContainer')
  private containerElement!: ElementRef<HTMLElement>;

  moveLeft(): void {
    if (!this.isFirstSlideActive) {
      this.showPreviousSlide();
    }
  }

  moveRight(): void {
    if (!this.isLastSlideActive) {
      this.showNextSlide();
    }
  }

  private showNextSlide(): void {
    this.containerElement.nativeElement.style.transform = `translateX(${this.nextTranslateXValue}px)`;
    this.activeIndex++;
  }

  private showPreviousSlide(): void {
    this.containerElement.nativeElement.style.transform = `translateX(${this.previousTranslateXValue}px)`;
    this.activeIndex--;
  }

  private get sliderWidth(): number {
    return this.containerElement.nativeElement.offsetWidth;
  }
  private get carouselLength(): number {
    return this.items.length;
  }
  private get isLastSlideActive(): boolean {
    return this.activeIndex === this.carouselLength - 1;
  }
  private get isFirstSlideActive(): boolean {
    return this.activeIndex === 0;
  }
  private get nextTranslateXValue(): number {
    return this.sliderWidth * -this.nextSlideIndex;
  }
  private get previousTranslateXValue(): number {
    return this.sliderWidth * -this.previousSlideIndex;
  }
  private get nextSlideIndex(): number {
    return this.activeIndex + 1;
  }
  private get previousSlideIndex(): number {
    return this.activeIndex - 1;
  }
}
