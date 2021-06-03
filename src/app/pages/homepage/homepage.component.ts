import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CarouselService } from '../../core/carousel.service';
import * as actions from '../../state/products/products.actions';
import { ProductsState, selectLoadingProducts, selectProducts } from '../../state/products/products.selectors';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  carouselItems$ = this.carouselService.getCarouselItems();
  products$ = this.store.select(selectProducts);
  isProductsLoading$ = this.store.select(selectLoadingProducts);

  constructor(private store: Store<ProductsState>, private carouselService: CarouselService) {}

  ngOnInit() {
    this.store.dispatch(actions.loadProducts());
  }
}
