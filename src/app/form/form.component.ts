import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {

  subg_title = ['Delivery', 'Legality', 'Price','Reward','Transaction', 'Brand']

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
