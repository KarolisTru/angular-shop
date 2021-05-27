import { Component, Output, EventEmitter } from '@angular/core';
import {
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

  private numberRegEx = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/;

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
    public productsService: ProductsService
  ) {}

  onSubmit() {
    this.onAddProductEvent.emit(this.addProductForm.value);
  }
  
  closeAddProductModal(): void {
    this.onCloseAddProductModalEvent.emit();
  }

}
