import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CarouselItem } from '../../carousel-item.interface';

export interface CarouselState {
  carouselItems: CarouselItem[];
  isLoading: boolean;
}

export const selectCarouselState =
  createFeatureSelector<CarouselState>('carousel');

export const selectCarouselItems = createSelector(
  selectCarouselState,
  (state) => {
    return state.carouselItems;
  }
);

export const selectLoadingCarousel = createSelector(
  selectCarouselState,
  (state) => {
    return state.isLoading;
  }
);

export const selectCarouselLength = createSelector(
  selectCarouselState,
  (state) => {
    return state.carouselItems.length;
  }
);
