import {Component, Input} from '@angular/core';
import {NbCardModule} from '@nebular/theme';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NbCardModule,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  /*featured = [
    {
      img: './assets/image/product/basic-cat.jpg',
      title: 'Basic cat plush',
      category: 'Animal-plush',
      price: 90000,
      description: 'A basic, white, round cat'
    },
    {
      img: './assets/image/product/chicken-leg.jpg',
      title: 'Chicken leg plush',
      category: 'Food-plush',
      price: 90000,
      description: 'A big chicken leg plush'
    },
    {
      img: './assets/image/product/sans.jpg',
      title: 'Sans plush',
      category: 'Game-plush',
      price: 80000,
      description: 'Bad time'
    },
    {
      img: './assets/image/product/ninja-cat.jpg',
      title: 'Ninja cat plush',
      category: 'Animal-plush',
      price: 90000,
      description: 'A basic, white, round cat wearing a ninja costume'
    }
  ];*/
}
