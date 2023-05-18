import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }
  // this list of students come from placedStudent componant
  selectedStudents:Student[];
  url:string="http://localhost:8080/";
}
