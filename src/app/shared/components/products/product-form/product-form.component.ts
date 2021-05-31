import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductFormService } from 'src/app/core/product-form.service';
import { Product } from '../../../../product.interface';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  @Input() productToUpdate?: Product;
  @Output() setProduct = new EventEmitter<Product>();

  productForm!: FormGroup;

  constructor(private productFormService: ProductFormService) {}

  ngOnInit(): void {
    this.productForm = this.productFormService.generateFormValidation(
      this.productToUpdate
    );
  }

  onSubmit() {
    this.setProduct.emit(this.productForm.value);
  }
}
