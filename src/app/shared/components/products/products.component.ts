import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../../app/core/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent{

  products$ = this.productsService.getAllProducts();
  isAddProductModalOpen: boolean = false;

  constructor(private productsService: ProductsService ) {}

}
