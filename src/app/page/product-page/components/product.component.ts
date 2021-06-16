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
      title:'Platinum Investment',
      image:'assets/images/1.png'
    },
    {
      title:'Gold Investment',
      image:'assets/images/2.png'
    },
    {
      title:'Silver investment',
      image:'assets/images/3.png'
    }
  ]

}
