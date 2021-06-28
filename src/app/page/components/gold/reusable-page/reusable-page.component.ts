import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-page',
  templateUrl: './reusable-page.component.html',
  styleUrls: ['./reusable-page.component.scss']
})
export class ReusablePageComponent implements OnInit {

  update = "40288ceb7913596e01791364fc470002"
  constructor() { }

  ngOnInit(): void {
  }

}
