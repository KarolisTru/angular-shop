import { Component } from '@angular/core';
import { act } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  selectOpenModal,
  selectProductInModal,
  selectProducts,
} from 'src/app/state/products/products.selectors';
import { Product } from '../../../../product.interface';
import * as actions from '../../../../state/products/products.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  products$ = this.store.select(selectProducts);
  openModal$ = this.store.select(selectOpenModal);
  openModal: 'delete' | 'add' | 'edit' | null = null;

  destroy$ = new Subject();

  constructor(private store: Store) {}

  ngOnInit() {
    this.openModal$
      .pipe(takeUntil(this.destroy$))
      .subscribe((modalIdentifier) => (this.openModal = modalIdentifier));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  trackByFn(index: number, item: any): number {
    return index;
  }

  openDeleteModal(product: Product): void {
    this.store.dispatch(actions.openDeleteModal({ modal: 'delete', productData: product }));
  }

  openAddProductModal(): void {
    this.store.dispatch(actions.openAddModal({ modal: 'add' }));
  }
  openEditProductModal(product: Product): void {
    this.store.dispatch(actions.openEditModal({ modal: 'edit', productData: product }));
  }

  // closeEditModal(): void {
  //   this.isEditProductModalOpen = false;
  // }

  // editProduct(productData: Product): void {
  //   const id = this.productInModal.id;
  //   this.store.dispatch(actions.editProduct({ id, productData }));
  // }
}
