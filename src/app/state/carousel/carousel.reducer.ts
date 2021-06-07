import { createReducer, on, Action } from '@ngrx/store';
import { CarouselState } from './carousel.selectors';
import * as carouselActions from './carousel.actions';

export const initialState: CarouselState = {
  carouselItems: [],
  isLoading: false,
  activeIndex: 0,
};

const _carouselReducer = createReducer(
  initialState,
  on(carouselActions.loadCarousel, (state) => ({ ...state, isLoading: true })),
  on(carouselActions.loadCarouselSuccess, (state, { carouselItems }) => {
    return {
      ...state,
      carouselItems: carouselItems,
      isLoading: false,
    };
  }),
  on(carouselActions.loadCarouselError, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(carouselActions.moveCarouselRight, (state) => ({
    ...state,
    activeIndex: state.activeIndex + 1,
  })),
  on(carouselActions.moveCarouselLeft, (state) => ({
    ...state,
    activeIndex: state.activeIndex - 1,
  }))
);

export function carouselReducer(state: CarouselState | undefined, action: Action) {
  return _carouselReducer(state, action);
}
