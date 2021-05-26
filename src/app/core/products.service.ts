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

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.getProductsUrl)
      .pipe(catchError(this.handleError<Product[]>([])));
  }

  getOneProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.getProductsUrl}/${id}`);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.getProductsUrl}/${id}`);
  }

  addProduct(productData: Product): Observable<Product> {
    return this.http.post<Product>(this.getProductsUrl, productData);
  }

  updateProduct(id: number, productData: Product): Observable<Product> {
    return this.http.put<Product>(`${this.getProductsUrl}/${id}`, productData);
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
