import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectedDisease } from 'src/app/Models/selected-disease';
import { SelectedDiseaseGroup } from 'src/app/Models/selectedDiseaseGroup';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-disease-list',
  templateUrl: './disease-list.component.html',
  styleUrls: ['./disease-list.component.scss']
})
export class DiseaseListComponent implements OnInit {

  diseaseGroup="";
  diseases:string[]=[];
  constructor(private employeeService:EmployeeServiceService,
              private http:HttpClient,
              private router:Router) { }

  ngOnInit(): void {
    this.diseaseGroup = SelectedDiseaseGroup.diseaseGroup;
    console.log(this.diseaseGroup);

    this.employeeService.getDiseases(this.diseaseGroup).subscribe(data=>{
      this.diseases=data;
    })
    
  }
  displaytrials(diseasename:string){
    console.log(diseasename);
    SelectedDisease.diseaseName = diseasename;
    this.router.navigateByUrl('/TrailNameList');
  }

}
