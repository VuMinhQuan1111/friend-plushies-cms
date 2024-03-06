import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {
  @Input() title: any;
  @Input() products: any;

  constructor() { }

  ngOnInit(): void {
  }

}
