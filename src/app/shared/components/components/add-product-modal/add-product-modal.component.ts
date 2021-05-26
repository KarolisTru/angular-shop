import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ProductsService } from 'src/app/core/products.service';
import { Product } from '../../../../product.interface';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
})
export class AddProductModalComponent {
  private numberRegEx = /\-?\d*\.?\d{1,2}/;
  addProductForm = this.fb.group({
    name: ['', Validators.required],
    photoUrl: [''],
    price: [
      0,
      Validators.compose([
        Validators.pattern(this.numberRegEx),
        Validators.required,
        Validators.min(0.01),
      ]),
    ],
    productDescription: [''],
    flagged: [false],
  });

  @Output() onCloseAddProductModalEvent = new EventEmitter();
  @Output() onAddProductEvent = new EventEmitter<Product>();

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {}

  onSubmit() {
    this.productsService
      .addProduct(this.productData)
      .subscribe((data) => this.onAddProductEvent.emit(data));
  }
  closeAddProductModal(): void {
    this.onCloseAddProductModalEvent.emit();
  }

  get productData() {
    return this.addProductForm.value;
  }
}
