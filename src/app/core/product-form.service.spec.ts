import { TestBed } from '@angular/core/testing';

import { ProductFormService } from './product-form.service';
import { FormBuilder, FormGroup } from '@angular/forms';


describe('ProductFormService', () => {
  let productFormService: ProductFormService;
  let productFormServiceSpy: jasmine.SpyObj<FormBuilder>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('FormBuilder', ['group']);

    TestBed.configureTestingModule({
      providers: [ProductFormService, { provide: FormBuilder, useValue: spy }],
    });
    productFormService = TestBed.inject(ProductFormService);
    productFormServiceSpy = TestBed.inject(FormBuilder) as jasmine.SpyObj<FormBuilder>;
  });

  it('generateFormValidation() should return a stubbed value when the argument object is provided (relevant for editItemForm)', () => {
    const fb = new FormBuilder;
    const argumentObject = {
      name: 'Name Example',
      photoUrl: 'Photo URL Example',
      price: 25.99,
      productDescription: 'Lorem Ipsum',
      flagged: true,
      id: 20
    }
    const stubValue = fb.group(argumentObject);
    productFormServiceSpy.group.and.returnValue(stubValue);

    expect(productFormService.generateFormValidation(argumentObject)).toBe(stubValue);
    expect(productFormServiceSpy.group.calls.count()).toBe(1);
    expect(productFormServiceSpy.group.calls.mostRecent().returnValue)
    .toBe(stubValue);
  })
  
  it('generateFormValidation() should return a defaultValue when no argument is provided (relevant for addItemForm)', () => {
    const fb = new FormBuilder;
    const defaultValue = {
      name: '',
      photoUrl: '',
      price: 0,
      productDescription: '',
      flagged: false,
    }
    const stubValue = fb.group(defaultValue);
    productFormServiceSpy.group.and.returnValue(stubValue);

    expect(productFormService.generateFormValidation()).toBe(stubValue);
    expect(productFormServiceSpy.group.calls.count()).toBe(1);
    expect(productFormServiceSpy.group.calls.mostRecent().returnValue)
    .toBe(stubValue);
  })
});
