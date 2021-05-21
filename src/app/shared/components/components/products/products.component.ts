import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../../../core/products.service';
import { Product } from '../../../../product.interface';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit{
  products: any[] = [];
  productInModal!: Product;

  products$ = this.productsService.getAllProducts();
  isAddProductModalOpen: boolean = false;
  isDeleteProductModalOpen: boolean = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products$.pipe(first()).subscribe(data => this.products = data);
  }

  trackByFn(index: number, item: any): number {
    return index;
  }

  openDeleteModal(product: Product) {
    this.productInModal = product;
    this.isDeleteProductModalOpen = true;
  }
  closeDeleteModal() {
    this.isDeleteProductModalOpen = false;
  }

  deleteProduct(deletedProd: Product) {
    this.products = this.products.filter(product => deletedProd.id !== product.id);
    this.closeDeleteModal();

  }
}
