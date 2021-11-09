import { Component, OnInit } from '@angular/core';
import { EmployeeusernameService } from 'src/app/DataShare/employeeusername.service';
import { SelectedPatientmrnService } from 'src/app/DataShare/selected-patientmrn.service';
import { PatientMedication } from 'src/app/Models/PatientMedication';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.scss']
})
export class AddMedicationComponent implements OnInit {
pm:PatientMedication={mrn:"",emp_id:"",med_id:""};
  currentEmployeeUserName="";
  selectedPatient="";
  constructor(private employeeusername:EmployeeusernameService,
    private employeesService:EmployeeServiceService,
    private selectedpatientmrn:SelectedPatientmrnService) { }

  ngOnInit(): void {
    this.employeeusername.CurrentEmployeeUserName.subscribe(data=>{
      this.currentEmployeeUserName=data;
    this.employeesService.getPhysicianProfile(this.currentEmployeeUserName).subscribe(data=>{
      this.pm.emp_id=data.emp_id;
      console.log("this is th emp id");
      console.log(this.pm.emp_id);
  })
  })
  }
  onAdd(){
    this.selectedpatientmrn.selectedPatientmrn.subscribe(data=>{
      this.selectedPatient=data;
      this.pm.mrn=this.selectedPatient;
      console.log("this is th mrn");
      console.log(this.pm.mrn);
    this.employeesService.addMedication(this.pm).subscribe(data=>{
      console.log(this.pm);
    })
  })

  }
}
