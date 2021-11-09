import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicalTrial } from 'src/app/Models/clinical-trial';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-clinical-trail',
  templateUrl: './clinical-trail.component.html',
  styleUrls: ['./clinical-trail.component.scss']
})
export class ClinicalTrailComponent implements OnInit {
  
  
  constructor(private router:Router,
              private http:HttpClient,
              private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    
  }
onclick1(){
  console.log("Find by disease button is clicked");
  this.router.navigateByUrl('/DiseaseGroup')
}
onclick2(){
  console.log("Find by title button is clicked");
  this.router.navigateByUrl('/TrialNames')
}
}
