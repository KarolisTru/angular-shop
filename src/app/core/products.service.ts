import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Product} from '../product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly getProductsUrl = '/products';

  constructor(private _http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this._http
      .get<Product[]>(this.getProductsUrl)
      .pipe(catchError(this.handleError<Product[]>([])));
  }
  
  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
