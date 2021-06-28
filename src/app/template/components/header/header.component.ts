import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly router: Router) { }


  navigateToGold() {
    this.router.navigateByUrl('reusable/gold?id=40288ceb7913596e0179136412e30000')
    console.log("test"); 
  }

  navigateToPlatinum() {
    this.router.navigateByUrl('reusable/gold?id=40288ceb7913596e01791365f2ac0004')
    console.log("test");

  }

  navigateToSilver() {
    this.router.navigateByUrl('reusable/gold?id=40288ceb7913596e01791364fc470002')
    console.log("test");
    
  }
  ngOnInit(): void {
  }

  nowDate = new Date();

}
