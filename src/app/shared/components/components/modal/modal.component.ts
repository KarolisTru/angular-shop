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
  @Output() onCloseDeleteModalEvent = new EventEmitter();
  @Output() onDeleteProductEvent = new EventEmitter<Product>();

  closeDeleteModal() {
    this.onCloseDeleteModalEvent.emit();
  }

  deleteProduct() {
    this.productsService.deleteProduct(this.productToDelete.id).subscribe(() => {
       this.onDeleteProductEvent.emit(this.productToDelete);
    })
  }



}
