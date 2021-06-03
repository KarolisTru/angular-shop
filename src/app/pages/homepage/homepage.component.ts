import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as productActions from '../../state/products/products.actions';
import * as carouselActions from '../../state/carousel/carousel.actions';
import { selectLoadingProducts } from '../../state/products/products.selectors';
import { selectLoadingCarousel } from '../../state/carousel/carousel.selectors';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  isCarouselLoading$ = this.store.select(selectLoadingCarousel);
  isProductsLoading$ = this.store.select(selectLoadingProducts);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(productActions.loadProducts());
    this.store.dispatch(carouselActions.loadCarousel());
  }
}
