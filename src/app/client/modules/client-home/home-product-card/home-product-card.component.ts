import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-product-card',
  templateUrl: './home-product-card.component.html',
  styleUrls: ['./home-product-card.component.css']
})
export class HomeProductCardComponent implements OnInit {
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
