import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as actions from 'src/app/state/products/products.actions';
import { selectProductInModal } from 'src/app/state/products/products.selectors';
import { Product } from '../../../../../product.interface';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss'],
})
export class EditProductModalComponent {
  productToUpdate$ = this.store.select(selectProductInModal);
  productToUpdate: Product | null = null;

  destroy$ = new Subject();

  constructor(private store: Store) {}

  ngOnInit() {
    this.productToUpdate$
      .pipe(takeUntil(this.destroy$))
      .subscribe((product) => (this.productToUpdate = product));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateProduct(productData: Product) {
    if (this.productToUpdate) {
      const { id } = this.productToUpdate;
      this.store.dispatch(actions.editProduct({ id, productData }));
    }
  }

  closeEditProductModal(): void {
    this.store.dispatch(actions.closeEditModal());
  }
}
