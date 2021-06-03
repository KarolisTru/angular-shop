import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProducts } from 'src/app/state/products/products.selectors';
import { Product } from '../../../../product.interface';
import * as actions from '../../../../state/products/products.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  products$ = this.store.select(selectProducts);
  productInModal!: Product;

  isEditProductModalOpen = false;
  isAddProductModalOpen = false;
  isDeleteProductModalOpen = false;

  constructor(private store: Store) {}

  trackByFn(index: number, item: any): number {
    return index;
  }

  openDeleteModal(product: Product): void {
    this.productInModal = product;
    this.isDeleteProductModalOpen = true;
  }
  openAddProductModal(): void {
    this.isAddProductModalOpen = true;
  }
  openEditProductModal(product: Product): void {
    this.productInModal = product;
    this.isEditProductModalOpen = true;
  }

  closeDeleteModal(): void {
    this.isDeleteProductModalOpen = false;
  }
  closeAddProductModal(): void {
    this.isAddProductModalOpen = false;
  }
  closeEditModal(): void {
    this.isEditProductModalOpen = false;
  }

  deleteProduct(deletedProd: Product): void {
    const { id } = deletedProd;
    this.store.dispatch(actions.deleteProduct({ id }));
  }
  addProduct(productData: Product): void {
    this.store.dispatch(actions.addProduct({ productData }));
  }
  editProduct(productData: Product): void {
    const id = this.productInModal.id;
    this.store.dispatch(actions.editProduct({ id, productData }));
  }
}
