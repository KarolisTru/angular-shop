import { Component } from '@angular/core';
import { CarouselService } from '../../../../core/carousel.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent{

  carouselItems$ = this.carouselService.getCarouselItems();

  constructor(private carouselService: CarouselService) {}

}
