import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
patientLogin(){
  console.log("Patient login button clicked!")
  this.router.navigateByUrl('/PatientLogin');
}
physicianLogin(){
  console.log("Physician login button clicked!")
  this.router.navigateByUrl('/PhysicianLogin');
}
trailManagerLogin(){
  console.log("Trail Manager login button clicked!")
  this.router.navigateByUrl('/TrailManagerLogin');
}
}
