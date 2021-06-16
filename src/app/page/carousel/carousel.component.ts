import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sliders = [
    {
      class: 'carousel-item active',
      image: 'assets/images/carousel-1.png',
      title: 'Gold Investment',
      message: 'Invest your wealth, for the future'
    },
    {
      class: 'carousel-item',
      image: 'assets/images/carousel-2.png',
      title: 'Gold Investment',
      message: 'Invest your wealth, for the future'
    },
    {
      class: 'carousel-item',
      image: 'assets/images/carousel-3.png',
      title: 'Gold Investment',
      message: 'Invest your wealth, for the future'
    },
  ]
}
