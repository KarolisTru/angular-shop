import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../../../../product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product!: Product;
  @Output() openDelete = new EventEmitter<Product>();
  @Output() openEdit = new EventEmitter<Product>();


  openDeleteModal(product: Product) {
    this.openDelete.emit(product);
  }
  openEditProductModal(product: Product) {
    this.openEdit.emit(product);
  }
}
