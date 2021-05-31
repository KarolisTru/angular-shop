import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../../../../product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product!: Product;
  @Output() onOpenDeleteModalEvent = new EventEmitter<Product>();
  @Output() onOpenEditModalEvent = new EventEmitter<Product>();


  openDeleteModal(product: Product) {
    this.onOpenDeleteModalEvent.emit(product);
  }
  openEditProductModal(product: Product) {
    this.onOpenEditModalEvent.emit(product);
  }
}
