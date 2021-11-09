import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeusernameService } from 'src/app/DataShare/employeeusername.service';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';
import { CurrentEmployeeUserName} from 'src/app/Models/current-employee-user-name';

@Component({
  selector: 'app-physician-login',
  templateUrl: './physician-login.component.html',
  styleUrls: ['./physician-login.component.scss']
})
export class PhysicianLoginComponent implements OnInit {
  physicianLoginForm: any;

  constructor(private formBuilder:FormBuilder,
              private employeeService: EmployeeServiceService,
              private http :HttpClient,
              private router :Router,
              private employeeusername:EmployeeusernameService) { }

  ngOnInit(): void {
    this.physicianLoginForm =this.formBuilder.group({
      userid:[''],
      password:['']
    })
  }
onLogin(){
  this.employeeService.getAllPhysiciansProfile().subscribe(data =>{
    const user = data.find((a:any)=>{
      return a.user_id === this.physicianLoginForm.value.userid && a.password === this.physicianLoginForm.value.password
    });
    if(user){
      console.log("login successfull");
      this.employeeusername.changeEmployeeUserName(this.physicianLoginForm.value.userid);
        
      CurrentEmployeeUserName.userName = this.physicianLoginForm.value.userid;
      this.physicianLoginForm.reset();
      this.router.navigateByUrl("/PhysicianView");
    }
    else{
      console.log("Physician not found");
    }
  })
}
}
