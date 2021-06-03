import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ProductsService } from '../../core/products.service';
import {
  addProduct,
  addProductError,
  addProductSuccess,
  deleteProduct,
  deleteProductError,
  deleteProductSuccess,
  editProduct,
  editProductError,
  editProductSuccess,
  loadProducts,
  loadProductsError,
  loadProductsSuccess,
} from './products.actions';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      exhaustMap(() =>
        this.productsService.getAllProducts().pipe(
          map((productList) => {
            return loadProductsSuccess({ productList });
          }),
          catchError(() => of(loadProductsError()))
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProduct),
      exhaustMap((action) => {
        return this.productsService.deleteProduct(action.id).pipe(
          map((id) => {
            return deleteProductSuccess({ id });
          }),
          catchError(() => of(deleteProductError()))
        );
      })
    )
  );

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addProduct),
      exhaustMap(({ productData }) => {
        return this.productsService.addProduct(productData).pipe(
          map((productData) => {
            return addProductSuccess({ productData });
          }),
          catchError(() => of(addProductError()))
        );
      })
    )
  );

  editProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editProduct),
      exhaustMap(({ id, productData }) => {
        return this.productsService.updateProduct(id, productData);
      }),
      map((response) => {
        return editProductSuccess({ productData: response });
      }),
      catchError(() => of(editProductError()))
    )
  );

  constructor(private actions$: Actions, private productsService: ProductsService) {}
}
