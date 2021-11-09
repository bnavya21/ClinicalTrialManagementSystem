import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicalTrial } from 'src/app/Models/clinical-trial';
import { SelectedTrialTitle } from 'src/app/Models/selectedTrialTitle';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-trial-title-details',
  templateUrl: './trial-title-details.component.html',
  styleUrls: ['./trial-title-details.component.scss']
})
export class TrialTitleDetailsComponent implements OnInit {
title="";
trial_id="";
name="";
duration="";
investigator="";
description="";
  constructor(private employeeService:EmployeeServiceService,
              private router:Router) { }

  ngOnInit(): void {
    this.title=SelectedTrialTitle.title;
    console.log(this.title);
    this.employeeService.getTrialInfo(this.title).subscribe(data=>{
      console.log(data);
      this.trial_id=data.trial_id;
      this.name=data.name;
      this.duration=data.duration;
      this.description=data.description;
      this.investigator=data.investigator;
  });

}
}
