import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeeStructyreComponent } from './fee-structyre/fee-structyre.component';
import { HomeComponent } from './home/home.component';
import { PhotoGallaryComponent } from './photo-gallary/photo-gallary.component';
import { PlacedstudentsComponent } from './placedstudents/placedstudents.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
 
  {
    path:"placedstudents",
    component:PlacedstudentsComponent
  },
  {
    path:"feestructure",
    component:FeeStructyreComponent
  },
  {
    path:"gallary",
    component:PhotoGallaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
