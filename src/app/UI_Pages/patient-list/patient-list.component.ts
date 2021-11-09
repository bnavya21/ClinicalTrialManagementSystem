import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/Models/patient';
import { CommonModule } from '@angular/common';
import { PatientServiceService } from 'src/app/Services/patient-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SelectedPatientMrn } from 'src/app/Models/selectPatientmrn';
import { SelectedPatientmrnService } from 'src/app/DataShare/selected-patientmrn.service';
import { ShowPatientListService } from 'src/app/DataShare/show-patient-list.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  patients: Patient[] = [];
 
  constructor(private patientService:PatientServiceService,
              private http:HttpClient,
              private router:Router,
              private showPatientListService: ShowPatientListService,
              private selectedpatientmrn:SelectedPatientmrnService) { }
              ishide=true;
              patientlist=false;
  ngOnInit(): void {

    this.showPatientListService.CurrentShowPatientListValue.subscribe(data=>{
      this.patientlist = !data;
      this.ishide = data;
    });
    this.patientService.getAllPatientsProfile().subscribe(data=>{
      this.patients=data;
    });  
    
 }
 
    showdetails(mrn:string){
      this.selectedpatientmrn.changePatientmrn(mrn);
      console.log(mrn);
      this.ishide=false;
      this.patientlist=true;
      //this.showPatientListService.changeShowPatientListValue(false);
    }
    
    // onclick(){
    //   this.ishide=true;
    //   this.patientlist=false;
    // }

  
  }


