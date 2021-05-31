import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { priceRegEx } from '../utils/validation';
import { Product } from '../product.interface';


@Injectable({
  providedIn: 'root',
})
export class ProductFormService {
  constructor(private fb: FormBuilder) {}

  generateFormValidation(
    product ?: Product
  ) {
    return this.fb.group({
      name: [product?.name || '', Validators.required],
      photoUrl: [product?.photoUrl || ''],
      price: [
        product?.price || 0,
        Validators.compose([
          Validators.pattern(priceRegEx),
          Validators.required,
          Validators.min(0.01),
        ]),
      ],
      productDescription: [product?.productDescription || ''],
      flagged: [product?.flagged || false],
    });
  }
}
