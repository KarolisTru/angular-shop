import { Component, Input } from '@angular/core';
import { ProductsService } from '../../../../core/products.service';
import { Product } from '../../../../product.interface';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  @Input() products: any[] = [];
  productInModal!: Product;

  isEditProductModalOpen: boolean = false;
  isAddProductModalOpen: boolean = false;
  isDeleteProductModalOpen: boolean = false;

  constructor(private productsService: ProductsService) {}

  trackByFn(index: number, item: any): number {
    return index;
  }

  openDeleteModal(product: Product): void {
    this.productInModal = product;
    this.isDeleteProductModalOpen = true;
  }
  openAddProductModal(): void {
    this.isAddProductModalOpen = true;
  }
  openEditProductModal(product: Product): void {
    this.productInModal = product;
    this.isEditProductModalOpen = true;
  }

  closeDeleteModal(): void {
    this.isDeleteProductModalOpen = false;
  }
  closeAddProductModal(): void {
    this.isAddProductModalOpen = false;
  }
  closeEditModal(): void {
    this.isEditProductModalOpen = false;
  }

  deleteProduct(deletedProd: Product): void {
    this.productsService.deleteProduct(deletedProd.id).subscribe(() => {
      this.products = this.products.filter((product) => deletedProd.id !== product.id);
      this.closeDeleteModal();
    });
  }
  addProduct(newProductData: Product): void {
    this.productsService.addProduct(newProductData).subscribe((data) => {
      this.products.push(data);
      this.closeAddProductModal();
    });
  }
  editProduct(editedProductData: Product): void {
    this.productsService.updateProduct(this.productInModal.id, editedProductData).subscribe((data) => {
      this.replaceProduct(data);
      this.closeEditModal();
    });
  }
  replaceProduct(updatedProductData: Product) {
    const indexToReplace = this.products.findIndex((prod) => prod.id === updatedProductData.id);
    this.products.splice(indexToReplace, 1, updatedProductData);
  }
}
