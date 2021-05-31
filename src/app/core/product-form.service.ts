import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {priceRegEx} from '../utils/validation';

@Injectable({
  providedIn: 'root',
})
export class ProductFormService {

  constructor(private fb: FormBuilder) {}

  generateFormValidation(name = '', photoUrl = '', price = 0, productDescription = '', flagged = false) {
    return this.fb.group({
      name: [name, Validators.required],
      photoUrl: [photoUrl],
      price: [
        price,
        Validators.compose([
          Validators.pattern(priceRegEx),
          Validators.required,
          Validators.min(0.01),
        ]),
      ],
      productDescription: [productDescription],
      flagged: [flagged],
    });
  }
}
