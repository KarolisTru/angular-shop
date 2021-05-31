import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly getProductsUrl = '/api/products';
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.getProductsUrl)
      .pipe(catchError(this.handleError<Product[]>([])));
  }

  deleteProduct(id: number): Observable<any> {
    this.isLoading = true;
    return this.http
      .delete(`${this.getProductsUrl}/${id}`)
      .pipe(catchError(this.handleError()));
  }

  addProduct(productData: Product): Observable<Product> {
    this.isLoading = true;
    return this.http
      .post<Product>(this.getProductsUrl, productData)
      .pipe(catchError(this.handleError<any>({})));
  }

  updateProduct(id: number, productData: Product): Observable<Product> {
    this.isLoading = true;
    return this.http
      .put<Product>(`${this.getProductsUrl}/${id}`, productData)
      .pipe(catchError(this.handleError<any>({})));
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
