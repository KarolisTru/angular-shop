import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ProductsService } from 'src/app/core/products.service';
import { ProductsListComponent } from './products-list.component';
import { of } from 'rxjs';
import { Product } from 'src/app/product.interface';
import { defer } from 'rxjs';
import { By } from '@angular/platform-browser';
import { ProductCardComponent } from '../product-card/product-card.component';
import { DeleteModalComponent } from '../modals/delete-modal/delete-modal.component';
import { AddProductModalComponent } from '../modals/add-product-modal/add-product-modal.component';
import { EditProductModalComponent } from '../modals/edit-product-modal/edit-product-modal.component';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let productsService: jasmine.SpyObj<ProductsService>;
  let productList: Product[];

  //async await may be a deal-breaker, let's see
  beforeEach(async () => {
    productsService = jasmine.createSpyObj('ProductsService', [
      'deleteProduct',
      'addProduct',
      'updateProduct',
    ]);

    await TestBed.configureTestingModule({
      declarations: [
        ProductsListComponent,
        ProductCardComponent,
        DeleteModalComponent,
        AddProductModalComponent,
        EditProductModalComponent,
      ],
      providers: [{ provide: ProductsService, useValue: productsService }],
    }).compileComponents();
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
    let deleteServiceSpy: any;
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

      deleteServiceSpy = productsService.deleteProduct.and.returnValue(of({}));
      deleteServiceSpy.and.returnValue(asyncData({}));
      fixture.detectChanges();
    });

    it('should delete item from the page', fakeAsync(() => {
      component.deleteProduct(deleteProductObject);
      expect(productsService.deleteProduct).toHaveBeenCalledTimes(1);
      expect(productsService.deleteProduct.calls.allArgs()).toEqual([[13]]);
      tick();
      fixture.detectChanges();
      expect(component.products.length).toEqual(1);
      expect(ui.listEl.textContent).not.toContain('Opapa');
    }));
  });

  describe('addProduct()', () => {
    let addServiceSpy: any;
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

      addServiceSpy = productsService.addProduct.and.returnValue(
        of(addProductObject)
      );
      addServiceSpy.and.returnValue(asyncData(addProductObject));

      fixture.detectChanges();
    });

    it('should add a product to the page', fakeAsync(() => {
      component.addProduct(addProductObject);
      expect(productsService.addProduct).toHaveBeenCalledTimes(1);
      expect(productsService.addProduct.calls.allArgs()).toEqual([
        [addProductObject],
      ]);
      tick();
      fixture.detectChanges();
      expect(component.products.length).toEqual(3);
      expect(ui.listEl.textContent).toContain('New Product');
    }));
  });

  describe('editProduct()', () => {
    let editServiceSpy: any;
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

      editServiceSpy = productsService.updateProduct.and.returnValue(
        of(editProductObject)
      );
      editServiceSpy.and.returnValue(asyncData(editProductObject));
      fixture.detectChanges();
    });

    it('should update the product on the page', fakeAsync(() => {
      expect(ui.listEl.textContent).not.toContain('Edited Product');
      component.editProduct(editProductObject);
      expect(productsService.updateProduct).toHaveBeenCalledTimes(1);
      tick();
      fixture.detectChanges();
      expect(component.products.length).toEqual(2);
      expect(ui.listEl.textContent).toContain('Edited Product');
    }));
  });
});
