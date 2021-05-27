import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/products.service';
import { Product } from '../../../../product.interface';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss'],
})
export class EditProductModalComponent implements OnInit {
  @Input() productToUpdate!: Product;

  private numberRegEx = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/;
  editProductForm!: FormGroup;

  @Output() onCloseEditProductModalEvent = new EventEmitter();
  @Output() onEditProductEvent = new EventEmitter<Product>();

  constructor(
    private fb: FormBuilder,
    public productsService: ProductsService
  ) {}

  ngOnInit() {
    this.editProductForm = this.fb.group({
      name: [this.productToUpdate.name, Validators.required],
      photoUrl: [this.productToUpdate?.photoUrl],
      price: [
        this.productToUpdate.price,
        Validators.compose([
          Validators.pattern(this.numberRegEx),
          Validators.required,
          Validators.min(0.01),
        ]),
      ],
      productDescription: [this.productToUpdate?.productDescription],
      flagged: [this.productToUpdate.flagged],
    });
  }

  onSubmit() {
    this.onEditProductEvent.emit(this.editProductForm.value);
  }
  closeEditProductModal(): void {
    this.onCloseEditProductModalEvent.emit();
  }
}
