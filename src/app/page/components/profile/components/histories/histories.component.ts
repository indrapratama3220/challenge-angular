import { Component, OnInit } from '@angular/core';
import { Purchase } from '../../models/purchase.model';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.scss']
})
export class HistoriesComponent implements OnInit {

  constructor(private readonly profileService:ProfileService) { }

  purchaseHistory: Purchase;
  

  ngOnInit(): void {
    this.profileService.getHistoryTransaction().subscribe((response) => {
      this.purchaseHistory = response;
      console.log(response);
      
    })


  }

}
