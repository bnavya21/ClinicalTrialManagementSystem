import { Component, OnInit } from '@angular/core';
import { PatientusernameService } from 'src/app/DataShare/patientusername.service';
import { CustomMedication } from 'src/app/Models/CustomMedication';
import { PatientMedication } from 'src/app/Models/PatientMedication';
import { PatientServiceService } from 'src/app/Services/patient-service.service';

@Component({
  selector: 'app-patient-medications',
  templateUrl: './patient-medications.component.html',
  styleUrls: ['./patient-medications.component.scss']
})

export class PatientMedicationsComponent implements OnInit {
  currentPatientusername="";
  mrn="";
 
  pms:CustomMedication[]=[];
  constructor(private patientService:PatientServiceService,
              private patientusername:PatientusernameService,
              ) { }

  ngOnInit(): void {
    this.patientusername.CurrentPatientUserName.subscribe(data=>{
      this.currentPatientusername=data;
    
          this.patientService.getPatientProfile(this.currentPatientusername).subscribe(element=>{
      this.mrn=element.mrn;
      console.log("this is the mrn");
      console.log(this.mrn);
          
    this.patientService.getPatientMedication(this.mrn).subscribe(data=>{
      this.pms=data;
      console.log(data);
  })
})
    })


  }  }
