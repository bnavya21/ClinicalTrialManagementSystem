import { Component, OnInit } from '@angular/core';
import { PatientDiagnosis } from 'src/app/Models/patient-diagnosis';
import { PatientServiceService } from 'src/app/Services/patient-service.service';
import { BrowserModule} from '@angular/platform-browser'
import { HttpClient } from '@angular/common/http';
import { PatientusernameService } from 'src/app/DataShare/patientusername.service';


@Component({
  selector: 'app-patient-diagnosis',
  templateUrl: './patient-diagnosis.component.html',
  styleUrls: ['./patient-diagnosis.component.scss']
})
export class PatientDiagnosisComponent implements OnInit {

pds:PatientDiagnosis[]=[];
currentPatientusername="";
mrn="";
  constructor(private patientService:PatientServiceService,
              private http:HttpClient,
              private patientusername: PatientusernameService) { }

  ngOnInit(): void {
    this.patientusername.CurrentPatientUserName.subscribe(data=>{
      this.currentPatientusername=data;
    
          this.patientService.getPatientProfile(this.currentPatientusername).subscribe(element=>{
      this.mrn=element.mrn;
      console.log("this is the mrn");
      console.log(this.mrn);
          
    this.patientService.getPatientDiagnosis(this.mrn).subscribe(data=>{
      this.pds=data;
      console.log(data);
    })
  })
   })
  }

}
