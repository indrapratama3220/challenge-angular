import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits-list',
  templateUrl: './benefits-list.component.html',
  styleUrls: ['./benefits-list.component.scss']
})
export class BenefitsListComponent implements OnInit {

  serviceBenefits = [
    {
      title: 'Delivery',
      description: 'We have delivery servide to all city in Indonesia'
    },
    {
      title: 'Legality',
      description: 'We commit to keep your trusted with legality transaction'
    },
    {
      title: 'Price',
      description: 'Good quality with best prices'
    }
  ]

    productBenefits = [
      {
        title: 'Reward',
        description: 'More transaction more point and reward'
      },
      {
        title: 'Transaction',
        description: 'Our transaction is simple and secure'
      },
      {
        title: 'Brand',
        description: 'Our product is the best on quality and brand'
      }

  ]

  title = 'Advantages';

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
