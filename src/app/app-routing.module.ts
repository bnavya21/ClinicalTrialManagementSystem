import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicalTrailComponent } from './UI_Pages/clinical-trail/clinical-trail.component';
import { DiseaseGroupComponent } from './UI_Pages/disease-group/disease-group.component';
import { DiseaseListComponent } from './UI_Pages/disease-list/disease-list.component';
import { HomePageComponent } from './UI_Pages/home-page/home-page.component';
import { PatientDiagnosisComponent } from './UI_Pages/patient-diagnosis/patient-diagnosis.component';
import { PatientListComponent } from './UI_Pages/patient-list/patient-list.component';
import { PatientLoginComponent } from './UI_Pages/patient-login/patient-login.component';
import { PatientMedicationsComponent } from './UI_Pages/patient-medications/patient-medications.component';
import { PatientRegisterComponent } from './UI_Pages/patient-register/patient-register.component';
import { PatientViewComponent } from './UI_Pages/patient-view/patient-view.component';
import { PhysicianLoginComponent } from './UI_Pages/physician-login/physician-login.component';
import { PhysicianRegisterComponent } from './UI_Pages/physician-register/physician-register.component';
import { PhysicianViewComponent } from './UI_Pages/physician-view/physician-view.component';
import { TrailManagerLoginComponent } from './UI_Pages/trail-manager-login/trail-manager-login.component';
import { TrailNameListComponent } from './UI_Pages/trail-name-list/trail-name-list.component';
import { TrialNamesComponent } from './UI_Pages/trial-names/trial-names.component';
import { IgxListModule } from 'igniteui-angular';
import { AddDiagnosisComponent } from './UI_Pages/add-diagnosis/add-diagnosis.component';
import { DiagnosisAndMedicationComponent } from './UI_Pages/diagnosis-and-medication/diagnosis-and-medication.component';
import { AddMedicationComponent } from './UI_Pages/add-medication/add-medication.component';
import { TrialTitleDetailsComponent } from './UI_Pages/trial-title-details/trial-title-details.component';
import { TrialManagerViewComponent } from './UI_Pages/trial-manager-view/trial-manager-view.component';
import { TrialsReportComponent } from './UI_Pages/trials-report/trials-report.component';
import { PatientsReportComponent } from './UI_Pages/patients-report/patients-report.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/HomePage',
    pathMatch:'full'
  },
  {
    path:'PatientLogin',
    component:PatientLoginComponent
  },
  {
    path:'PhysicianLogin',
    component:PhysicianLoginComponent 
  },
  {
    path:'HomePage',
    component:HomePageComponent
  },
  
    {
      path:'PatientRegister',
      component:PatientRegisterComponent
    },
    {
      path:'PhysicianRegister',
      component:PhysicianRegisterComponent
    },
    {
      path:'TrailManagerLogin',
      component:TrailManagerLoginComponent
    },
    {
      path:'PatientView',
      component:PatientViewComponent
    },
    {
      path:'PhysicianView',
      component:PhysicianViewComponent
    },
    {
      path:'PatientDiagnosis',
      component:PatientDiagnosisComponent
    },
    {
      path:'PatientMedication',
      component:PatientMedicationsComponent
    },
    {
      path:'PatientList',
      component:PatientListComponent
    },
    {
      path:'ClinicalTrail',
      component:ClinicalTrailComponent
    },
    {
      path:'DiseaseGroup',
      component:DiseaseGroupComponent
    },
    {
      path:'DiseaseList',
      component:DiseaseListComponent
    },
    {
      path:'TrailNameList',
      component:TrailNameListComponent
    },
    {
      path:'TrialNames',
      component:TrialNamesComponent
    },
    {
      path:'AddDiagnosis',
      component:AddDiagnosisComponent
    },
    {
      path:'DiagnosisAndMedication',
      component:DiagnosisAndMedicationComponent
    },
    {
      path:'AddMedication',
      component:AddMedicationComponent
    },
    {
      path:'PatientListView',
      component:PatientListComponent
    },
    {
      path:'TrialTitleDetails',
      component:TrialTitleDetailsComponent
    },
    {
      path:'TrialManagerView',
      component:TrialManagerViewComponent
    },
    {
      path:'TrialsReport',
      component:TrialsReportComponent
    },
    {
      path:'PatientsReport',
      component:PatientsReportComponent
    }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
