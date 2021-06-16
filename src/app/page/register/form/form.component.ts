import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {

  subg_title = ['Delivery', 'Legality', 'Price','Reward','Transaction', 'Brand']

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

  description = ['We have delivery servide to all city in Indonesia',
                  'We commit to keep your trusted with legality transaction',
                  'Good quality with best prices',
                  'More transaction more point and reward',
                  'Our transaction is simple and secure',
                  'Our product is the best on quality and brand'
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
