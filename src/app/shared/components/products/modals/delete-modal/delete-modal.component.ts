import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as actions from 'src/app/state/products/products.actions';
import { selectOpenModal, selectProductInModal } from 'src/app/state/products/products.selectors';
import { Product } from '../../../../../product.interface';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent {
  productToDelete$ = this.store.select(selectProductInModal);
  productToDelete: Product | null = null;

  destroy$ = new Subject();

  constructor(private store: Store) {}

  ngOnInit() {
    this.productToDelete$
      .pipe(takeUntil(this.destroy$))
      .subscribe((product) => (this.productToDelete = product));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  closeDeleteModal() {
    this.store.dispatch(actions.closeDeleteModal());
  }

  deleteProduct() {
    if (this.productToDelete) {
      const { id } = this.productToDelete;
      this.store.dispatch(actions.deleteProduct({ id }));
    }
  }
}
