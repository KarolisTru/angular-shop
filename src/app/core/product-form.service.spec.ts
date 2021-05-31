import { TestBed } from '@angular/core/testing';

import { ProductFormService } from './product-form.service';
import { FormBuilder } from '@angular/forms';


describe('ProductFormService', () => {
  let service: ProductFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [FormBuilder]});
    service = TestBed.inject(ProductFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
