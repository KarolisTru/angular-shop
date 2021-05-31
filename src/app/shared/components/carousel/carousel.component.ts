import {
  Component,
  ElementRef,
  ViewChild,
  Input,
} from '@angular/core';
import { CarouselItem } from '../../../carousel-item.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  private activeIndex = 0;

  @Input() items: CarouselItem[] = [];

  @ViewChild('cardsContainer')
  private containerElement!: ElementRef<HTMLElement>;

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

  private get sliderWidth(): number {
    return this.containerElement.nativeElement.offsetWidth;
  }
  private get isLastSlideActive(): boolean {
    return this.activeIndex === this.items.length - 1;
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
