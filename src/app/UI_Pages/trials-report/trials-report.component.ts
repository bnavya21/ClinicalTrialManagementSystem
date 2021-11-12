import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectedTrialTitle } from 'src/app/Models/selectedTrialTitle';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-trials-report',
  templateUrl: './trials-report.component.html',
  styleUrls: ['./trials-report.component.scss']
})
export class TrialsReportComponent implements OnInit {
trials:string[]=[];
  constructor(private employeeService:EmployeeServiceService,
              private router:Router) { }

  ngOnInit(): void {
    this.employeeService.getTrialNames().subscribe(data=>{
      this.trials=data;
  })
}
selectedTrialTitle(event:any){
  SelectedTrialTitle.title=event.target.value;
  console.log("selected trial title ");
  console.log(SelectedTrialTitle.title);
  this.router.navigateByUrl('/PatientsReport');

}

}
