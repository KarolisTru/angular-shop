import { createAction, props } from '@ngrx/store';
import { CarouselItem } from '../../carousel-item.interface';

export const loadCarousel = createAction('[Carousel] Load');
export const loadCarouselSuccess = createAction(
  '[Carousel] Load Success',
  props<{
    carouselItems: CarouselItem[];
  }>()
);
export const loadCarouselError = createAction('[Carousel] Load Error');
export const moveCarouselRight = createAction('[Carousel] Move Right');
export const moveCarouselLeft = createAction('[Carousel] Move Left');
