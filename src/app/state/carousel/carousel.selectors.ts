import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CarouselItem } from '../../carousel-item.interface';

export interface CarouselState {
  carouselItems: CarouselItem[];
  isLoading: boolean;
  activeIndex: number;
  carouselWidth: number;
}

export const selectCarouselState = createFeatureSelector<CarouselState>('carousel');

export const selectCarouselItems = createSelector(selectCarouselState, (state) => {
  return state.carouselItems;
});

export const selectLoadingCarousel = createSelector(selectCarouselState, (state) => {
  return state.isLoading;
});

export const selectCarouselLength = createSelector(selectCarouselState, (state) => {
  return state.carouselItems.length;
});

export const selectActiveIndex = createSelector(selectCarouselState, (state) => state.activeIndex);

export const selectIsLastIndexActive = createSelector(
  selectCarouselLength,
  selectActiveIndex,
  (length, activeIndex) => length - 1 === activeIndex
);

export const selectIsFirstIndexActive = createSelector(
  selectCarouselState,
  (state) => state.activeIndex === 0
);
