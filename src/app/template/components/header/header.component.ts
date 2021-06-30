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
    this.router.navigateByUrl('/portofolio?id=40288ceb7913596e0179136412e30000')
    sessionStorage.setItem('productId', '40288ceb7913596e0179136412e30000')
  }

  navigateToPlatinum() {
    this.router.navigateByUrl('/portofolio?id=40288ceb7913596e01791365f2ac0004')
    sessionStorage.setItem('productId', '40288ceb7913596e01791365f2ac0004');
  }

  navigateToSilver() {
    this.router.navigateByUrl('portofolio?id=40288ceb7913596e01791364fc470002')
    sessionStorage.setItem('productId', '40288ceb7913596e01791364fc470002')
  }
  
  ngOnInit(): void {}

  nowDate = new Date();

}
