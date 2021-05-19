import { Component, OnInit } from '@angular/core';
import {CarouselItem} from './carouselItem';
import {Observable } from 'rxjs';
import {CarouselService} from '../app/core/carousel.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  carouselItems$!: Observable<CarouselItem[]>;

  constructor(private carouselService: CarouselService) {}

  ngOnInit() {
    this.carouselItems$ = this.carouselService.getCarouselItems();
  }

}
