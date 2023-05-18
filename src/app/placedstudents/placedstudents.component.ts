import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-placedstudents',
  templateUrl: './placedstudents.component.html',
  styleUrls: ['./placedstudents.component.css']
})
export class PlacedstudentsComponent implements OnInit {

  constructor(public serve:ServiceService) { }

  ngOnInit(): void {
    console.log(this.serve.selectedStudents);
  }
   

  // this link will come from database /placed student details
youtubelink:string="https://www.youtube.com/watch?v=MLtkcIBUmQk";

}
