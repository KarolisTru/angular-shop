import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/core/products.service';
import {Product} from '../../../../product.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent{

  constructor(private productsService: ProductsService) { }

  @Input() productToDelete!: Product;
  @Output() closeDeleteModalEvent = new EventEmitter();
  @Output() deleteProductEvent = new EventEmitter<Product>();

  closeDeleteModal() {
    this.closeDeleteModalEvent.emit();
  }

  deleteProduct() {
    this.productsService.deleteProduct(this.productToDelete.id).subscribe(() => {
       this.deleteProductEvent.emit(this.productToDelete);
    })
  }



}
