import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.clear()
    this.router.navigateByUrl('/login')
  }

}
