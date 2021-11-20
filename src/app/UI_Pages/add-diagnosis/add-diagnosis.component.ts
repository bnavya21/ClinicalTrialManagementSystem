import { Component, OnInit } from '@angular/core';
import { EmployeeusernameService } from 'src/app/DataShare/employeeusername.service';
import { SelectedPatientmrnService } from 'src/app/DataShare/selected-patientmrn.service';
import { PatientDiagnosis } from 'src/app/Models/patient-diagnosis';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-add-diagnosis',
  templateUrl: './add-diagnosis.component.html',
  styleUrls: ['./add-diagnosis.component.scss']
})
export class AddDiagnosisComponent implements OnInit {

  pd: PatientDiagnosis={mrn:"",emp_id:"",diag_id:"",DiagnosisDate:new Date()};
  currentEmployeeUserName="";
  selectedPatient="";

  constructor(private employeeusername:EmployeeusernameService,
              private employeesService:EmployeeServiceService,
              private selectedpatientmrn:SelectedPatientmrnService) { }

  ngOnInit(): void {
    this.employeeusername.CurrentEmployeeUserName.subscribe(data=>{
      this.currentEmployeeUserName=data;
    this.employeesService.getPhysicianProfile(this.currentEmployeeUserName).subscribe(data=>{
      this.pd.emp_id=data.emp_id;
      console.log("this is th emp id");
      console.log(this.pd.emp_id);
      
    })
    });
  }
  
  onAdd(){
    this.selectedpatientmrn.selectedPatientmrn.subscribe(data=>{
      this.selectedPatient=data;
      this.pd.mrn=this.selectedPatient;
      console.log("this is th mrn");
      console.log(this.pd.mrn);
    this.employeesService.addDiagnosis(this.pd).subscribe(data=>{
      console.log(this.pd);
      alert("Diagnosis is added");
    })
  })

  }
  onback(){
    
  }

}

  
