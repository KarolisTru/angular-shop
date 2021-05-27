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
  @Output() closeModal = new EventEmitter();
  @Output() confirmDelete = new EventEmitter<Product>();

  constructor(public productsService: ProductsService) {}

  closeDeleteModal() {
    this.closeModal.emit();
  }

  deleteProduct() {
    this.confirmDelete.emit(this.productToDelete);
  }
}
