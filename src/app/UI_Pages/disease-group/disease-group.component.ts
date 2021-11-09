import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicalTrial } from 'src/app/Models/clinical-trial';
import { DiseaseGroup } from 'src/app/Models/diseasegroup';
import { SelectedDiseaseGroup } from 'src/app/Models/selectedDiseaseGroup';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-disease-group',
  templateUrl: './disease-group.component.html',
  styleUrls: ['./disease-group.component.scss']
})
export class DiseaseGroupComponent implements OnInit {
  cts:string[]=[];
  constructor(private employeeService:EmployeeServiceService,
              private http:HttpClient,
              private router:Router) { }

  ngOnInit(): void {
    this.employeeService.getDiseaseGroups().subscribe(data=>{
      this.cts=data;
    });
  }
  displaydiseases(group:string){
    console.log(group);
    SelectedDiseaseGroup.diseaseGroup = group;
    this.router.navigateByUrl('/DiseaseList');
  }

  }


