import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hefshine2';



  
  constructor( public serve:ServiceService){
  
  }
  ngOnInit(): void 
    {
      // this.serve.http.get(this.serve.url+"ourPlacedStudents/").subscribe((students:Student[])=>{});
      let s1:Student={
        "name":"Komal",
        "feedback":"dgsajdgjh hjvdhjsa gsavdhjsv hsdvhjs hsvdhj hsdv",
        "position":"Software developer",
        "package":"5.25 LPA",
        "company":"Bista Pvt. Ltd."
      }
      let s2:Student={
        "name":"Harshal",
        "feedback":"dgsajdgjh hjvdhjsa gsavdhjsv hsdv hjs hsvdhj hsdvvvvv vnnn nn nnnn   nn nnn nnnnnnnnnnnnnnn",
        "position":"Software developer",
        "package":"5.21 LPA",
        "company":"Bista Pvt.Ltd."
      }
      let s3:Student={
        "name":"Vishal",
        "feedback":"dgsajdgjh hjvdhjsa gsavdhjsv hsdvhjs hsvdhj hsdv",
        "position":"Software developer",
        "package":"5.26 LPA",
        "company":"Appcino Pvt. Ltd."
      }
      let s4:Student={
        "name":"Sumant",
        "feedback":"dgsajdgjh hjvdhjsa gsavdhjsv hsdvhjs hsvdhj hsdv",
        "position":"Software developer",
        "package":"5.2 LPA",
        "company":"Unknown"
      }
      let s5:Student={
        "name":"Mayuri",
        "feedback":"dgsajdgjh hjvdhjsa gsavdhjsv hsdvhjs hsvdhj hsdv",
        "position":"Software developer",
        "package":"5.0 LPA",
        "company":"Unknown"
      }
     
      let students:Student[]=[s1,s2,s3,s4,s5];
      this.serve.selectedStudents=students;
      console.warn(students);

    }

  }
