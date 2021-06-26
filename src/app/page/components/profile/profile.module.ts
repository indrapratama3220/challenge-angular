import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule, 
    MatCardModule,
    RouterModule
  ], exports:[ProfileComponent]
})
export class ProfileModule { }
