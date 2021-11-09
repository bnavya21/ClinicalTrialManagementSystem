import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';
import { FormsModule } from '@angular/forms';
import { SelectedTrialTitle } from 'src/app/Models/selectedTrialTitle';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trial-names',
  templateUrl: './trial-names.component.html',
  styleUrls: ['./trial-names.component.scss']
})
export class TrialNamesComponent implements OnInit {
trials:string[]=[];
trialsCopy=[];
trialtitle="";

  constructor(private employeeService:EmployeeServiceService,
              private router:Router) { }

  ngOnInit(): void {

    this.employeeService.getTrialNames().subscribe(data=>{
      this.trials=data;
      console.log(this.trials);
      this.trialsCopy=data;
    })
  }

  //   showInfo(trial:string){
  //     SelectedTrialTitle.title=trial;
  //     this.router.navigateByUrl('/TrailNameList');
    
  // }
  selectedTrialTitle(event:any){
    SelectedTrialTitle.title=event.target.value;
    console.log("selected trial title ");
    console.log(SelectedTrialTitle.title);
    this.router.navigateByUrl('/TrialTitleDetails');

  }
  

}
