import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CarouselItem } from '../carouselItem';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  
  private readonly getCarouselUrl = '/carousel';

  constructor(private _http: HttpClient) {}

  getCarouselItems(): Observable<CarouselItem[]> {
    return this._http
      .get<CarouselItem[]>(this.getCarouselUrl)
      .pipe(catchError(this.handleError<CarouselItem[]>([])));
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}