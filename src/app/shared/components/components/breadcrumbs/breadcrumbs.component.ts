import { Component } from '@angular/core';
import { Category } from '../../../../category.interface';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {

  constructor() { }

  categories: Category[] = [
    {
      name: 'Basketball',
      link: '#'
    },
    {
      name: 'Football',
      link: '#'
    },
    {
      name: 'Swimming',
      link: '#'
    },
    {
      name: 'Tennis',
      link: '#'
    },
    {
      name: 'Chess',
      link: '#'
    },
  ]

}
