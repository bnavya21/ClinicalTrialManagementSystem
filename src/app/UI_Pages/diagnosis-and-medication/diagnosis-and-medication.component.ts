import { Component, OnInit } from '@angular/core';
import { PatientusernameService } from 'src/app/DataShare/patientusername.service';
import { SelectedPatientmrnService } from 'src/app/DataShare/selected-patientmrn.service';
import { ShowPatientListService } from 'src/app/DataShare/show-patient-list.service';
import { PatientDiagnosis } from 'src/app/Models/patient-diagnosis';
import { patientdiag } from 'src/app/Models/patientdiag';
import { patientmed } from 'src/app/Models/patientmed';
import { PatientMedication } from 'src/app/Models/PatientMedication';
import { SelectedPatientMrn } from 'src/app/Models/selectPatientmrn';
import { PatientServiceService } from 'src/app/Services/patient-service.service';

@Component({
  selector: 'app-diagnosis-and-medication',
  templateUrl: './diagnosis-and-medication.component.html',
  styleUrls: ['./diagnosis-and-medication.component.scss']
})
export class DiagnosisAndMedicationComponent implements OnInit {

  pms:patientmed[]=[];
  pds:patientdiag[]=[];
  selectedPatient="";
  constructor(private patientService:PatientServiceService,
              private showPatientlistService: ShowPatientListService,
              private selectedpatientmrn:SelectedPatientmrnService) { }

              diagandmed=false;
              adddiagnosis=true;
              addmedication=true;
               patientlist=true;

  ngOnInit(): void {
    this.selectedpatientmrn.selectedPatientmrn.subscribe(data=>{
      this.selectedPatient=data;
    this.showPatientlistService.CurrentShowPatientListValue.subscribe(data=>{
      this.patientlist = data;
      this.diagandmed = !data;
      this.adddiagnosis = data;
      this.addmedication = data;
    })
   
    // this.selectedPatient=SelectedPatientMrn.mrn;
    console.log("this is the selected patient mrn");
    console.log(this.selectedPatient);
    this.patientService.getPatientDiagnosis(this.selectedPatient).subscribe(data=>{
      this.pds=data;
      console.log(data);
    this.patientService.getPatientMedication(this.selectedPatient).subscribe(data=>{
      this.pms=data;
      console.log("this is patient medication data");
      console.log(data);
    });
    });
  });
  }
    adddiagnosisclicked(){
      this.showPatientlistService.CurrentShowPatientListValue.subscribe(data=>{
      this.diagandmed=!data;
      this.adddiagnosis=!data;
    });}
    addmedicationclicked(){
      this.showPatientlistService.CurrentShowPatientListValue.subscribe(data=>{
      this.diagandmed=!data;
      this.addmedication=!data;
    });}

    backButtonClicked(){
      this.patientlist = false;
      this.diagandmed=true;
      this.adddiagnosis=true;
      this.addmedication=true;
      this.showPatientlistService.changeShowPatientListValue(true);
    }
    //  backclicked(){
    //  this.patientlist=false;
    //    this.diagandmed=true;
    //  }

}

