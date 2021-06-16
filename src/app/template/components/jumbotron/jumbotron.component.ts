import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  sliders = [
    {
      class: 'carousel-item active',
      image: 'assets/images/carousel-1.png',
      title: '',
      message: ''
    },
    {
      class: 'carousel-item',
      image: 'assets/images/carousel-2.png',
      title: '',
      message: ''
    },
    {
      class: 'carousel-item',
      image: 'assets/images/carousel-3.png',
      title: '',
      message: ''
    },
  ]

}
