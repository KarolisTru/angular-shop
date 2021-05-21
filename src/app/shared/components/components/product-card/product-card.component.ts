import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../../../../product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product!: Product;
  @Output() openDeleteModalEvent = new EventEmitter<Product>();

  openDeleteModal(product: Product) {
    this.openDeleteModalEvent.emit(product);
  }
}
