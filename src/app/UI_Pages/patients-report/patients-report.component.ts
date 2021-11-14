import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Models/patient';
import { SelectedTrialTitle } from 'src/app/Models/selectedTrialTitle';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-patients-report',
  templateUrl: './patients-report.component.html',
  styleUrls: ['./patients-report.component.scss']
})
export class PatientsReportComponent implements OnInit {
  title="";
  patients:Patient[]=[];
  constructor(private employeeService:EmployeeServiceService,
              private router:Router) { }

  ngOnInit(): void {
    this.title=SelectedTrialTitle.title;
    this.employeeService.getPatientsListForTrial(this.title).subscribe(data=>{
      this.patients=data;
    });
  }
  sendemail(to:string){
    this.title=SelectedTrialTitle.title;
    let tt="You are qualified for the clinical trial "+this.title;
    this.employeeService.sendEmail(to,tt).subscribe(data=>{
      console.log("Email Sent");
    })
  }

}
