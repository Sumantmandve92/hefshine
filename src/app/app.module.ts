import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { PlacedstudentsComponent } from './placedstudents/placedstudents.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LogoComponent } from './logo/logo.component';
import { ImageGallaryComponent } from './image-gallary/image-gallary.component';
import { FeeStructyreComponent } from './fee-structyre/fee-structyre.component';
import { PhotoGallaryComponent } from './photo-gallary/photo-gallary.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PlacedstudentsComponent,
  
    CoursedetailsComponent,
    ContactusComponent,
    LogoComponent,
    ImageGallaryComponent,
    FeeStructyreComponent,
    PhotoGallaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
