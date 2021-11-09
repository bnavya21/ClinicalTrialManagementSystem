import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Models/patient';
import { PatientServiceService } from 'src/app/Services/patient-service.service';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.scss']
})
export class PatientRegisterComponent implements OnInit {

  patient: Patient={mrn:"",first_name:"", last_name:"", mobile:"", gender:"",user_id:"",
                    password:"",mail:"", address:"", date_of_birth:new Date()};
  
  constructor(private patientService: PatientServiceService,
              private router: Router) { }

  ngOnInit(): void {

  }
  onRegister(){
    console.log(this.patient);
    this.patientService.registerPatient(this.patient).subscribe(data=>{
      console.log(data);      
      this.router.navigateByUrl('/PatientLogin');
    });
  }
  
}
