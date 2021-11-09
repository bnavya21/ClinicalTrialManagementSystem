import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeusernameService } from 'src/app/DataShare/employeeusername.service';
import { ShowPatientListService } from 'src/app/DataShare/show-patient-list.service';
import { Physician } from 'src/app/Models/physician';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-physician-view',
  templateUrl: './physician-view.component.html',
  styleUrls: ['./physician-view.component.scss']
})
export class PhysicianViewComponent implements OnInit {
  firstName = "";
  lastName = "" ;
  mobile = "";
  address ="";
  mail="";
  username="";
  password="";
  department="";
  role="";
  physicianLoginForm: any;
  currentEmployeeUserName="";

  employee:Physician={emp_id:"",first_name:"", last_name:"", mobile:"", gender:"",user_id:"",
  password:"",mail:"", address:"",department:"",role:""};

  constructor(private employeeService:EmployeeServiceService,
              private employeeusername:EmployeeusernameService,
              private showPatientListService: ShowPatientListService,
              private router: Router) { }

              hideProfile=false;
              hidePatientlist=true;
              hideClinicaltrial=true;

              
  ngOnInit(): void {
    this.employeeusername.CurrentEmployeeUserName.subscribe(data=>{
      this.currentEmployeeUserName=data;
    
     this.showPatientListService.CurrentShowPatientListValue.subscribe( data =>{
       console.log("Inside ShowPatientList subscribe from physician view");
       console.log(data);
       this.hidePatientlist = data;
    });
    this.employeeService.getPhysicianProfile(this.currentEmployeeUserName).subscribe(data =>{
      console.log(data);
      this.employee=data;
       
  });
     });
  }
  onclicksave(){
    this.employeeService.updateEmployeeProfile(this.employee.emp_id,this.employee).subscribe(data=>{
      alert("profile is updated");
    });
  }
  profileclicked(){
    this.hideProfile=false;
    this.hidePatientlist=true;
    this.hideClinicaltrial=true;
  }
  patientlistclicked(){
    this.hideProfile=true;
   this.hidePatientlist=false;
    this.hideClinicaltrial=true;

  //   this.router.navigateByUrl('/PhysicianViewComponent', { skipLocationChange: true }).then(() => {
  //     this.router.navigate(['/PhysicianViewComponent']);
  // }); 

  }
  clinicaltrialclicked(){
    this.hideProfile=true;
    this.hidePatientlist=true;
    this.hideClinicaltrial=false;
  }

}
