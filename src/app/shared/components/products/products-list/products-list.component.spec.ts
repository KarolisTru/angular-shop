import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ProductsService } from 'src/app/core/products.service';
import { ProductsListComponent } from './products-list.component';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from 'src/app/product.interface';
import { By } from '@angular/platform-browser';
import { ProductCardComponent } from '../product-card/product-card.component';
import { DeleteModalComponent } from '../modals/delete-modal/delete-modal.component';
import { AddProductModalComponent } from '../modals/add-product-modal/add-product-modal.component';
import { EditProductModalComponent } from '../modals/edit-product-modal/edit-product-modal.component';


describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let productsServiceSpy: jasmine.SpyObj<ProductsService>;
  let productList: Product[];

  //async await may be a deal-breaker, let's see
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        ProductsListComponent,
        ProductCardComponent,
        DeleteModalComponent,
        AddProductModalComponent,
        EditProductModalComponent,
      ],
      providers: [{ provide: ProductsService, useValue: jasmine.createSpyObj('ProductsService', [
        'deleteProduct',
        'addProduct',
        'updateProduct',
      ]) }],
    }).compileComponents();

    productsServiceSpy = TestBed.inject(ProductsService) as jasmine.SpyObj<ProductsService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;

    productList = [
      {
        name: 'Opapa',
        photoUrl: 'https://picsum.photos/id/14/200/300',
        price: 233,
        productDescription: '',
        flagged: false,
        id: 13,
      },
      {
        name: 'Pls new one1',
        photoUrl: 'https://picsum.photos/id/54/200/300',
        price: 34,
        productDescription: '',
        flagged: true,
        id: 16,
      },
    ];

    component.products = productList;
    fixture.detectChanges();
  });

  const ui = {
    get listEl() {
      return fixture.debugElement.query(By.css('.product-cards-container'))
        .nativeElement;
    },
  };

  describe('component is created', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('deleteProduct()', () => {
    let deleteProductObject: Product;

    beforeEach(() => {
      deleteProductObject = {
        name: 'Opapa',
        photoUrl: 'https://picsum.photos/id/14/200/300',
        price: 233,
        productDescription: '',
        flagged: false,
        id: 13,
      };

      productsServiceSpy.deleteProduct.and.returnValue(
        of({}).pipe(delay(1000))
      );
      fixture.detectChanges();
    });

    it('should delete item from the page', fakeAsync(() => {
      component.deleteProduct(deleteProductObject);
      expect(productsServiceSpy.deleteProduct).toHaveBeenCalledWith(13);
      tick(1000);
      fixture.detectChanges();
      expect(component.products.length).toEqual(1);
      expect(ui.listEl.textContent).not.toContain('Opapa');
    }));
  });

  describe('addProduct()', () => {
    let addProductObject: Product;

    beforeEach(() => {
      addProductObject = {
        name: 'New Product',
        photoUrl: 'https://picsum.photos/id/15/200/300',
        price: 222,
        productDescription: '',
        flagged: false,
        id: 120,
      };

      productsServiceSpy.addProduct.and.returnValue(
        of(addProductObject).pipe(delay(1000))
      );
      fixture.detectChanges();
    });

    it('should add a product to the page', fakeAsync(() => {
      component.addProduct(addProductObject);
      expect(productsServiceSpy.addProduct).toHaveBeenCalledWith(addProductObject);
      tick(1000);
      fixture.detectChanges();
      expect(component.products.length).toEqual(3);
      expect(ui.listEl.textContent).toContain('New Product');
    }));
  });

  describe('editProduct()', () => {
    let editProductObject: Product;

    beforeEach(() => {
      editProductObject = {
        name: 'Edited Product',
        photoUrl: 'https://picsum.photos/id/54/200/300',
        price: 34,
        productDescription: '',
        flagged: true,
        id: 16,
      };

      component.productInModal = editProductObject;

      productsServiceSpy.updateProduct.and.returnValue(
        of(editProductObject).pipe(delay(1000))
      );
      fixture.detectChanges();
    });

    it('should update the product on the page', fakeAsync(() => {
      expect(ui.listEl.textContent).not.toContain('Edited Product');
      component.editProduct(editProductObject);
      expect(productsServiceSpy.updateProduct).toHaveBeenCalledWith(16, editProductObject);
      tick(1000);
      fixture.detectChanges();
      expect(component.products.length).toEqual(2);
      expect(ui.listEl.textContent).toContain('Edited Product');
    }));
  });
});
