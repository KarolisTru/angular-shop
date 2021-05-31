import { Component, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/core/products.service';
import { Product } from '../../../../../product.interface';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
})
export class AddProductModalComponent {

  @Output() closeAddProductModal = new EventEmitter();
  @Output() addProduct = new EventEmitter<Product>();

  constructor(
    public productsService: ProductsService,
  ) {}

   addNewProduct(productData: Product) {
     this.addProduct.emit(productData);
   }
  
  closeAddModal(): void {
    this.closeAddProductModal.emit();
  }

}
