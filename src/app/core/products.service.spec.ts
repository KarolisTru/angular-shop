import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { Product } from '../product.interface';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  describe('getAllProducts()', () => {
    let expectedProducts: Product[];

    beforeEach(() => {
      expectedProducts = [
        {
          name: 'New Product Opa',
          photoUrl: 'https://picsum.photos/id/32/200/300',
          price: 23.21,
          productDescription: 'agedhdgb',
          flagged: false,
          id: 9,
        },
        {
          name: 'Mhmewf',
          photoUrl: 'https://picsum.photos/id/14/200/300',
          price: 233,
          productDescription: '',
          flagged: false,
          id: 13,
        },
      ];
    });

    it('should return expectedProducts', () => {
      service.getAllProducts().subscribe((products) => {
        expect(products).toEqual(expectedProducts);
      });
      const req = httpTestingController.expectOne('/api/products');
      expect(req.request.method).toEqual('GET');
      req.flush(expectedProducts);
    });

    it('should return an empty array on network error', () => {
      service.getAllProducts().subscribe((products) => {
        expect(products).toEqual([]);
      });

      const req = httpTestingController.expectOne('/api/products');
      req.error(new ErrorEvent('network error'));
    });
  });

  describe('deleteProduct()', () => {
    let expectedResult: object;

    beforeEach(() => {
      expectedResult = {};
    });

    it('should return empty object', () => {
      service.deleteProduct(13).subscribe((response) => {
        expect(response).toEqual(expectedResult);
      });
      const req = httpTestingController.expectOne('/api/products/13');
      expect(req.request.method).toEqual('DELETE');
      req.flush({});
    });
  });

  describe('addProduct()', () => {
    let expectedResult: Product;

    beforeEach(() => {
      expectedResult = {
        name: 'Product 1',
        photoUrl: 'https://picsum.photos/id/51/200/300',
        price: 23,
        productDescription: 'Lorem ipsum description',
        flagged: true,
        id: 21,
      };
    });

    it('should add a product and return it as expectedResult', () => {
      service.addProduct(expectedResult).subscribe((responseProduct) => {
        expect(responseProduct).toEqual(expectedResult);
      });

      const req = httpTestingController.expectOne('/api/products');
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(expectedResult);
      req.flush(expectedResult);
    });
  });

  describe('updateProduct()', () => {
    let expectedResult: Product;

    beforeEach(() => {
      expectedResult = {
        name: 'Product 1',
        photoUrl: 'https://picsum.photos/id/51/200/300',
        price: 23,
        productDescription: 'Lorem ipsum description',
        flagged: true,
        id: 21,
      };
    });

    it('should update a product and return the updated product as expectedResult', () => {
      service.updateProduct(21, expectedResult).subscribe((responseProduct) => {
        expect(responseProduct).toEqual(expectedResult);
      });

      const req = httpTestingController.expectOne('/api/products/21');
      expect(req.request.method).toEqual('PUT');
      expect(req.request.body).toEqual(expectedResult);
      req.flush(expectedResult);
    });
  });
});
