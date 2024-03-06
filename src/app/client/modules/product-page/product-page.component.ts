import { Component, OnInit } from '@angular/core';
import {filters} from './FilterData';
import {featured} from '../../../../assets/data/featured/featured';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  featured: any;
  filterData: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.filterData = filters;
    this.featured = featured;
  }

  handleMultipleSelectFilter(value: string, sectionId: string){
    const queryParams = {...this.activatedRoute.snapshot.queryParams};

    console.log(' query params', queryParams);
  }
}
