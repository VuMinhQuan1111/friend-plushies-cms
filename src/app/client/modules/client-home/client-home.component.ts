import { Component, OnInit } from '@angular/core';
import {featured} from '../../../../assets/data/featured/featured';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {
  featured: any;
  constructor() { }

  ngOnInit(): void {
    this.featured = featured.slice(0, 4);
  }

}
