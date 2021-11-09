import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientusernameService } from 'src/app/DataShare/patientusername.service';
import { CurrentPatientUserName } from 'src/app/Models/currentPatientUserName';
import { Patient } from 'src/app/Models/patient';
import { PatientServiceService } from 'src/app/Services/patient-service.service';


@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.scss']
})
export class PatientLoginComponent implements OnInit {
  patientLoginForm: any;
  username =" ";

  constructor(private formBuilder:FormBuilder,
              private patientService: PatientServiceService,
              private http :HttpClient, 
              private router :Router,
              private patientusername: PatientusernameService){
    
  } 

  ngOnInit(){
    this.patientLoginForm = this.formBuilder.group({
      userid:[''],
      password:['']
    })
    this.patientService.getAllPatientsProfile().subscribe(data =>{
      console.log(data);
    });
  }
  login(){
    this.patientService.getAllPatientsProfile().subscribe(data =>{
      const user = data.find((a:any)=>{
        return a.user_id === this.patientLoginForm.value.userid && a.password === this.patientLoginForm.value.password
      });
      if(user){
        console.log("login successfull");
        this.patientusername.changePatientUserName(this.patientLoginForm.value.userid);
        
        CurrentPatientUserName.userName = this.patientLoginForm.value.userid;
        console.log("setting static value");
        console.log(CurrentPatientUserName.userName);
        //this.patientLoginForm.reset();
        this.router.navigateByUrl("/PatientView");        
      }
      else{
        console.log("Patient not found");
      }
      
    })
  }
 
}


