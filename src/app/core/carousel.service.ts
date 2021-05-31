import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CarouselItem } from '../carousel-item.interface';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  
  private readonly getCarouselUrl = '/api/carousel';

  constructor(private http: HttpClient) {}

  getCarouselItems(): Observable<CarouselItem[]> {
    return this.http
      .get<CarouselItem[]>(this.getCarouselUrl)
      .pipe(catchError(this.handleError([])));
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
