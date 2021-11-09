import { Component, OnInit } from '@angular/core';
import { Physician } from 'src/app/Models/physician';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';


@Component({
  selector: 'app-physician-register',
  templateUrl: './physician-register.component.html',
  styleUrls: ['./physician-register.component.scss']
})
export class PhysicianRegisterComponent implements OnInit {
  physician :Physician={
    emp_id:"",
    first_name: '',
    last_name: '',
    gender: '',
    address: '',
    mobile: '',
    user_id: '',
    password: '',
    mail: '',
    department: '',
    role: ''
  }
  constructor(private physicianService:EmployeeServiceService) { }

  ngOnInit(): void {
  }
  onRegister(){
    console.log(this.physician);
    this.physicianService.registerPhysician(this.physician).subscribe(data=>{
      console.log(data);
      
    });
  }
}
