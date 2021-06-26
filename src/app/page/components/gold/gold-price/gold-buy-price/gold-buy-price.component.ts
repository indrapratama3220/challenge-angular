import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gold-buy-price',
  templateUrl: './gold-buy-price.component.html',
  styleUrls: ['./gold-buy-price.component.scss']
})
export class GoldBuyPriceComponent implements OnInit {

  public pieChartLabels1 = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData1 = [120, 150, 180, 90];
  
  constructor() { }

  ngOnInit(): void {
  }

}
