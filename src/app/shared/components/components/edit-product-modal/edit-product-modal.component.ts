import { Component, Output, Input, EventEmitter} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/core/products.service';
import { Product } from '../../../../product.interface';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss'],
})
export class EditProductModalComponent {
  @Input() productToUpdate!: Product;
  editProductForm!: FormGroup;

  @Output() closeModal = new EventEmitter();
  @Output() editProduct = new EventEmitter<Product>();

  constructor(
    public productsService: ProductsService,
  ) {}

  updateProduct(productData: Product) {
    this.editProduct.emit(productData);
  }
  closeEditProductModal(): void {
    this.closeModal.emit();
  }
}
