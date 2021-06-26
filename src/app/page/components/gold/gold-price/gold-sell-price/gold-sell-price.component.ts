import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gold-sell-price',
  templateUrl: './gold-sell-price.component.html',
  styleUrls: ['./gold-sell-price.component.scss']
})
export class GoldSellPriceComponent implements OnInit {

  public pieChartLabels1 = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData1 = [120, 150, 180, 90];
  
  constructor() { }

  ngOnInit(): void {
  }

}
