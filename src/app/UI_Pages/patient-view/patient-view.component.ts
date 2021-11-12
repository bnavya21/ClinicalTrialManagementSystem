import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { PatientusernameService } from 'src/app/DataShare/patientusername.service';
import { CurrentPatientUserName } from 'src/app/Models/currentPatientUserName';
import { Patient } from 'src/app/Models/patient';
import { PatientServiceService } from 'src/app/Services/patient-service.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})
export class PatientViewComponent implements OnInit {
  mrn="";
  first_name = "";
  last_name = "" ;
  mobile = "";
  address ="";
  mail="";
  username="";
  password="";
  dob="";
  gender="";
  patientLoginForm: any;
  currentPatientUserName="";

  patient1: Patient={mrn:"",first_name:"", last_name:"", mobile:"", gender:"",user_id:"",
  password:"",mail:"", address:"", date_of_birth:new Date()};

  constructor(private patientService: PatientServiceService,
              private patientusername: PatientusernameService,
              private router:Router) { }

  hidePatientview = false;
  hidePatientDiagnoses = true;
  hidePatientMedications = true;

  ngOnInit(): void {
  this.currentPatientUserName = CurrentPatientUserName.userName;
  console.log("current static value for patient");
  console.log(CurrentPatientUserName.userName);
    console.log("Inside ngOnInit of patient view")
    this.patientusername.CurrentPatientUserName.subscribe(data=>{
      console.log("Inside current paitent user name ")
        this.currentPatientUserName=data;
        
  this.currentPatientUserName = CurrentPatientUserName.userName;
    
    this.patientService.getPatientProfile(this.currentPatientUserName).subscribe(data =>{
      console.log(data);
      this.patient1=data;
      //   data.forEach((element: { first_name: string; last_name:string; mobile:string;user_id:string;
      //  password:string;address:string;mail:string;date_of_birth:string; }) => {
        //  this.mrn=data.mrn;
        // this.first_name = data.first_name;
        //  this.last_name = data.last_name;
        // this.mobile = data.mobile;
        // this.address = data.address;
        //  this.dob = data.date_of_birth;
        // this.username=data.user_id;
        // this.password=data.password;
        //  this.mail = data.mail;
        // this.gender = data.gender;

       //});

      // this.firstName = data.first_Name;
      // this.lastName = data.last_Name;
      // this.mobile = data.mobile;
      // this.address = data.address;
      // this.dob = data.date_of_birth;
      // this.username=data.user_id;
      // this.password=data.password;
    })
    });
  }

  onclicksave(){
   
    this.patientService.updatePatientProfile(this.patient1.mrn,this.patient1).subscribe(data=>{
        console.log(data);
    })
  


  }
  profileClicked(){
    this.hidePatientview = false;
    this.hidePatientDiagnoses = true;
    this.hidePatientMedications = true;
  }
  diagnosisClicked(){
    this.hidePatientview = true;
    this.hidePatientDiagnoses = false;
    this.hidePatientMedications = true;
  }
  medicationClicked(){
    this.hidePatientview = true;
    this.hidePatientDiagnoses = true;
    this.hidePatientMedications = false;
  }

}


