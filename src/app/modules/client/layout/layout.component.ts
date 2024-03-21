import {Component} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  tabs: any[] = [
    {
      title: 'Trang chủ',
      route: '/client/home',
      responsive: true,
    },
    {
      title: 'Sản phẩm',
      route: '/client/product',
      responsive: true,
    },
    {
      title: 'Đơn hàng',
      route: '/client/order',
      responsive: true,
    },
    {
      title: 'Giới thiệu',
      route: '/client/intro',
      responsive: true,
    },
    {
      title: 'Liên hệ',
      route: '/client/contact',
      responsive: true,
    },
  ];

  imgCollection: Array<object> = [
    {
      image: './assets/image/banner/battlecats-banner.jpg',
      thumbImage: './assets/image/banner/battlecats-banner.jpg',
      alt: 'Battle Cats',
      title: 'Battle Cats'
    }, {
      image: './assets/image/banner/contact-banner.jpg',
      thumbImage: './assets/image/banner/contact-banner.jpg',
      title: 'Bear',
      alt: 'Bear'
    }, {
      image: './assets/image/banner/nesoberi.jpg',
      thumbImage: './assets/image/banner/nesoberi.jpg',
      title: 'Nesoberi',
      alt: 'Nesoberi'
    }, {
      image: './assets/image/banner/nesoberi-banner.jpg',
      thumbImage: './assets/image/banner/nesoberi-banner.jpg',
      title: 'Nesoberi 2',
      alt: 'Nesoberi 2'
    }, {
      image: './assets/image/banner/pokemon-banner.jpg',
      thumbImage: './assets/image/banner/pokemon-banner.jpg',
      title: 'Pokemon',
      alt: 'Pokemon'
    }, {
      image: './assets/image/banner/product-banner.jpg',
      thumbImage: './assets/image/banner/product-banner.jpg',
      title: 'Animals',
      alt: 'Animals'
    }
  ];
}
