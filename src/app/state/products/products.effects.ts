import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductsService } from '../../core/products.service';
import { loadProducts, loadProductsError, loadProductsSuccess } from './products.actions';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.productsService.getAllProducts().pipe(
          map((productList) => {
            return loadProductsSuccess({ productList });
          }),
          catchError(() => of(loadProductsError))
        )
      )
    )
  );

  //   loadProducts$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loadProducts),
  //     mergeMap(() =>
  //       this.productsService.getAllProducts().pipe(
  //         map((productList) => {
  //           return loadProductsSuccess({ productList });
  //         }),
  //         catchError(() => of(loadProductsError))
  //       )
  //     )
  //   )
  // );

  constructor(private actions$: Actions, private productsService: ProductsService) {}
}
