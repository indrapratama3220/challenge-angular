import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      title:'platinum investment',
      image:'assets/images/1.png'
    },
    {
      title:'gold INVESTMENT',
      image:'assets/images/2.png'
    },
    {
      title:'SILVER investment',
      image:'assets/images/3.png'
    }
  ]

}