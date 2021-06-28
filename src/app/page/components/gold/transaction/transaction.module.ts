import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TransactionComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    RouterModule
  ]
})
export class TransactionModule { }
