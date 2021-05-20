import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../../product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() products: Product[] = [];

  trackByFn(index: number, item: any): number {
    return index;
  }

}
