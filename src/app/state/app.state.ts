import { ProductsState } from './products/products.selectors';
import { CarouselState } from './carousel/carousel.selectors';

export interface AppState {
  products: ProductsState;
  carousel: CarouselState;
}
