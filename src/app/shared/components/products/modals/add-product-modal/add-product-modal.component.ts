import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/state/products/products.actions';
import { Product } from '../../../../../product.interface';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
})
export class AddProductModalComponent {
  constructor(private store: Store) {}

  addNewProduct(productData: Product) {
    this.store.dispatch(actions.addProduct({ productData }));
  }

  closeAddModal(): void {
    this.store.dispatch(actions.closeAddModal());
  }
}
