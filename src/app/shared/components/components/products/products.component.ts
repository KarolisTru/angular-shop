import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../../../core/products.service';
import { Product } from '../../../../product.interface';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input() products: any[] = [];
  productInModal!: Product;

  isAddProductModalOpen: boolean = false;
  isDeleteProductModalOpen: boolean = false;

  trackByFn(index: number, item: any): number {
    return index;
  }

  openDeleteModal(product: Product): void {
    this.productInModal = product;
    this.isDeleteProductModalOpen = true;
  }

  openAddProductModal():void {
    this.isAddProductModalOpen = true;
  } 

  closeDeleteModal(): void {
    this.isDeleteProductModalOpen = false;
  }
  closeAddProductModal():void {
    this.isAddProductModalOpen = false;
  } 

  deleteProduct(deletedProd: Product): void {
    this.products = this.products.filter(product => deletedProd.id !== product.id);
    this.closeDeleteModal();
  }
  addProduct(newProduct: Product): void {
    this.products.push(newProduct);
    this.closeAddProductModal();
  }
}
