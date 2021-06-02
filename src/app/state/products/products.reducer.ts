import { createReducer, on, Action } from '@ngrx/store';
import { Product } from '../../product.interface';

import * as actions from './products.actions';

export const initialState = {
  products: [] as any[],
  isLoading: false,
};

const _productsReducer = createReducer(
  initialState,
  on(actions.loadProducts, (state) => ({ ...state, isLoading: true })),
  on(actions.loadProductsSuccess, (state, action) => ({
    ...state,
    products: action.response,
    isLoading: false,
  })),
  on(actions.loadProductsError, (state) => ({ ...state, isLoading: false })),

  on(actions.deleteProduct, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(actions.deleteProductSuccess, (state, { id }) => {
    return {
      ...state,
      products: state.products.filter((product: Product) => product.id !== id),
      isLoading: false,
    };
  }),
  on(actions.deleteProductError, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),

  on(actions.addProduct, (state) => ({...state, isLoading: true})),
  on(actions.addProductSuccess, (state, {productData}) => {
      return {
          ...state, 
          products: [...state.products, productData],
          isLoading: false
      }
  }),
  on(actions.addProductError, (state) => ({...state, isLoading: false})),
  
  on(actions.editProduct, (state) => ({...state, isLoading: true})),
  on(actions.editProductSuccess, (state, {productData}) => {
      return {
          ...state,
          products: state.products.map((product) => {
              if (product.id !== productData.id) {
                  return product;
              } else return productData;
          }),
          isLoading: false
      }
  }),
  on(actions.editProductError, (state) => ({...state, isLoading: false}))
);

export function productsReducer(state: any, action: any) {
  return _productsReducer(state, action);
}
