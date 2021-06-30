import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pocket } from '../models/pocket.model';
import { PurchaseDetails } from '../../profile/models/purchase-details.model';

import { PortofolioService } from '../service/portofolio.service';
import {Location} from '@angular/common';
import { Product } from '../models/product.model';
import { ReqBodyPurchase } from '../models/req-body-purchase.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(private readonly router: Router,
              private readonly goldService: PortofolioService,
              private location: Location       
      ) { }

  ngOnInit(): void {
    this.gram = parseFloat(sessionStorage.getItem('productValueInGram'))
    this.goldService.getProductById(sessionStorage.getItem('productId')).subscribe((response) => {
      this.product = response;
      if (this.reqBody.purchaseType == 0) 
      { 
        this.transactionPrice = response.productPriceBuy
        this.title = 'Pembelian'
      }
      else {
        this.transactionPrice = response.productPriceSell
        this.title = 'Penjualan'
      }
    })
    
    this.goldService.getAllPocket().subscribe((response) => {
      this.pockets = response.filter(pocket => pocket.product.id == sessionStorage.getItem('productId'))
    })
  }

  title:string;
  transactionPrice: number;
  product: Product = {}
  pockets: Pocket[] = [];
  gram:number = 0;
  pocketId: string;
  
  public reqBody: ReqBodyPurchase = {
    purchaseType:parseFloat(sessionStorage.getItem('purchaseType')),
    purchaseDetails:[
            {
            quantityInGram:0,
            pocket:{
                id:""  
            }
        }
    ]
  }

  backButton(){
    this.location.back();
  }

  buyTransaction(reqBody:ReqBodyPurchase){
    reqBody.purchaseDetails[0].quantityInGram = this.gram
    reqBody.purchaseDetails[0].pocket.id = this.pocketId
    this.goldService.buyTransaction(reqBody).subscribe((response) => {
      this.location.back();
    })
  }
 

}
