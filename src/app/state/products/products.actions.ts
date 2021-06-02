import { createAction, props } from '@ngrx/store';
import { Product } from '../../product.interface';

export const loadProducts = createAction('[Products] Load');

export const loadProductsSuccess = createAction(
  '[Products] Load Success',
  props<{
    response: any[];
  }>()
);

export const loadProductsError = createAction('[Products] Load Error');

export const deleteProduct = createAction(
  '[Products] Delete',
  props<{ id: number }>()
);

export const deleteProductSuccess = createAction(
  '[Products] Delete Success',
  props<{ id: number }>()
);

export const deleteProductError = createAction(
  '[Products] Delete Error'
);

export const editProduct = createAction(
  '[Products] Edit',
  props<{ id: number; productData: Product }>()
);

export const editProductSuccess = createAction(
  '[Products] Edit Success',
  props<{ productData: Product }>()
);

export const editProductError = createAction(
  '[Products] Edit Error'
);

export const addProduct = createAction(
  '[Products] Add',
  props<{ productData: Product }>()
);

export const addProductSuccess = createAction(
  '[Products] Add Success',
  props<{ productData: Product }>()
);

export const addProductError = createAction(
  '[Products] Add Error'
);