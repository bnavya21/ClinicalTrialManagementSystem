import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClinicalTrial } from 'src/app/Models/clinical-trial';
import { SelectedDisease } from 'src/app/Models/selected-disease';
import { SelectedTrialTitle } from 'src/app/Models/selectedTrialTitle';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-trail-name-list',
  templateUrl: './trail-name-list.component.html',
  styleUrls: ['./trail-name-list.component.scss']
})
export class TrailNameListComponent implements OnInit {

  diseaseName="";
  title="";
  trials:ClinicalTrial[]=[];
  constructor(private employeeService:EmployeeServiceService,
              private http:HttpClient,
              ) { }

  ngOnInit(): void {
    this.diseaseName=SelectedDisease.diseaseName;
    this.employeeService.getTrials(this.diseaseName).subscribe(data=>{
      this.trials=data;
    
      })
    

   

  }

}
