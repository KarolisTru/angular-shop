import { Component } from '@angular/core';
import { CarouselService } from '../../core/carousel.service';
import { ProductsService } from '../../core/products.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  carouselItems$ = this.carouselService.getCarouselItems();
  products$ = this.productsService.getAllProducts();

  constructor(
    private carouselService: CarouselService,
    private productsService: ProductsService
  ) {}
}
