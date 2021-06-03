import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../../product.interface';

export interface ProductsState {
  products: Product[];
  isLoading: boolean;
}

export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectProducts = createSelector(selectProductsState, (state) => {
  return state.products;
});

export const selectLoadingProducts = createSelector(selectProductsState, (state) => {
  return state.isLoading;
});

export const selectProductById = (id: number) =>
  createSelector(selectProducts, (products) => {
    return products.find((product) => product.id === id);
  });
