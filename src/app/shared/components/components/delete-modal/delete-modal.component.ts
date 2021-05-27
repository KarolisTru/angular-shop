import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/core/products.service';
import { Product } from '../../../../product.interface';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent {
  @Input() productToDelete!: Product;
  @Output() onCloseDeleteModalEvent = new EventEmitter();
  @Output() onDeleteProductEvent = new EventEmitter<Product>();

  constructor(public productsService: ProductsService) {}

  closeDeleteModal() {
    this.onCloseDeleteModalEvent.emit();
  }

  deleteProduct() {
    this.onDeleteProductEvent.emit(this.productToDelete);
  }
}
