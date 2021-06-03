import { createReducer, on, Action } from '@ngrx/store';
import { CarouselState } from './carousel.selectors';
import * as carouselActions from './carousel.actions';

export const initialState: CarouselState = {
  carouselItems: [],
  isLoading: false,
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
  }))
);

export function carouselReducer(
  state: CarouselState | undefined,
  action: Action
) {
  return _carouselReducer(state, action);
}
