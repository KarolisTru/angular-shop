import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { CarouselService } from '../../core/carousel.service';
import {
  loadCarousel,
  loadCarouselError,
  loadCarouselSuccess,
} from './carousel.actions';

@Injectable()
export class CarouselEffects {
  loadCarousel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCarousel),
      exhaustMap(() =>
        this.carouselService.getCarouselItems().pipe(
          map((carouselItems) => {
            return loadCarouselSuccess({ carouselItems });
          }),
          catchError(() => of(loadCarouselError()))
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private carouselService: CarouselService
  ) {}
}
