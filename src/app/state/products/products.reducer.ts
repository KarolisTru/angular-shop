import { createReducer, on, Action, State } from '@ngrx/store';
import { ProductsState } from './products.selectors';

import * as actions from './products.actions';

export const initialState: ProductsState = {
  products: [],
  isLoading: false,
  productInModal: null,
  activeModal: null,
};

const _productsReducer = createReducer(
  initialState,
  on(actions.loadProducts, (state) => ({ ...state, isLoading: true })),
  on(actions.loadProductsSuccess, (state, action) => {
    return {
      ...state,
      products: action.productList,
      isLoading: false,
    };
  }),
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
      products: state.products.filter((product) => product.id !== id),
      isLoading: false,
      activeModal: null,
      productInModal: null,
    };
  }),
  on(actions.deleteProductError, (state) => {
    return {
      ...state,
      isLoading: false,
      activeModal: null,
      productInModal: null,
    };
  }),

  on(actions.addProduct, (state) => ({ ...state, isLoading: true })),
  on(actions.addProductSuccess, (state, { productData }) => {
    return {
      ...state,
      products: [...state.products, productData],
      isLoading: false,
      productInModal: null,
      activeModal: null,
    };
  }),
  on(actions.addProductError, (state) => ({
    ...state,
    isLoading: false,
    activeModal: null,
    productInModal: null,
  })),

  on(actions.editProduct, (state) => ({ ...state, isLoading: true })),
  on(actions.editProductSuccess, (state, { productData }) => {
    return {
      ...state,
      products: state.products.map((product) => {
        if (product.id !== productData.id) {
          return product;
        } else return productData;
      }),
      isLoading: false,
      productInModal: null,
      activeModal: null,
    };
  }),
  on(actions.editProductError, (state) => ({
    ...state,
    isLoading: false,
    activeModal: null,
    productInModal: null,
  })),
  on(actions.openDeleteModal, (state, { modal, productData }) => ({
    ...state,
    activeModal: modal,
    productInModal: productData,
  })),
  on(actions.closeDeleteModal, (state) => ({ ...state, activeModal: null, productInModal: null })),
  on(actions.openEditModal, (state, { modal, productData }) => ({
    ...state,
    activeModal: modal,
    productInModal: productData,
  })),
  on(actions.closeEditModal, (state) => ({ ...state, activeModal: null, productInModal: null })),
  on(actions.openAddModal, (state, { modal }) => ({ ...state, activeModal: modal })),
  on(actions.closeAddModal, (state) => ({ ...state, activeModal: null }))
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
  return _productsReducer(state, action);
}
