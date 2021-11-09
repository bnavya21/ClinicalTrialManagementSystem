import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientLoginComponent } from './UI_Pages/patient-login/patient-login.component';
import { PhysicianLoginComponent } from './UI_Pages/physician-login/physician-login.component';
import { HomePageComponent } from './UI_Pages/home-page/home-page.component';
import { PatientRegisterComponent } from './UI_Pages/patient-register/patient-register.component';
import { PhysicianRegisterComponent } from './UI_Pages/physician-register/physician-register.component';
import { TrailManagerLoginComponent } from './UI_Pages/trail-manager-login/trail-manager-login.component';
import { PatientViewComponent } from './UI_Pages/patient-view/patient-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhysicianViewComponent } from './UI_Pages/physician-view/physician-view.component';
import { PatientListComponent } from './UI_Pages/patient-list/patient-list.component';
import { ClinicalTrailComponent } from './UI_Pages/clinical-trail/clinical-trail.component';
import { DiseaseListComponent } from './UI_Pages/disease-list/disease-list.component';
import { TrailNameListComponent } from './UI_Pages/trail-name-list/trail-name-list.component';
import { CommonModule } from '@angular/common';
import { PatientDiagnosis } from './Models/patient-diagnosis';
import { PatientDiagnosisComponent } from './UI_Pages/patient-diagnosis/patient-diagnosis.component';
import { DiseaseGroupComponent } from './UI_Pages/disease-group/disease-group.component';
import { PatientMedicationsComponent } from './UI_Pages/patient-medications/patient-medications.component';
import { TrialNamesComponent } from './UI_Pages/trial-names/trial-names.component';
import { IgxListModule } from 'igniteui-angular';
import { IgxInputGroupBase } from 'igniteui-angular/lib/input-group/input-group.common';
import { AddDiagnosisComponent } from './UI_Pages/add-diagnosis/add-diagnosis.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatListModule} from '@angular/material/list';
import { DiagnosisAndMedicationComponent } from './UI_Pages/diagnosis-and-medication/diagnosis-and-medication.component';
import { MatIconModule} from '@angular/material/icon';
import { AddMedicationComponent } from './UI_Pages/add-medication/add-medication.component';
import { TrialTitleDetailsComponent } from './UI_Pages/trial-title-details/trial-title-details.component';
import { TrialManagerViewComponent } from './UI_Pages/trial-manager-view/trial-manager-view.component';





@NgModule({
  declarations: [
    AppComponent,
    PatientLoginComponent,
    PhysicianLoginComponent,
    HomePageComponent,
    PatientRegisterComponent,
    PhysicianRegisterComponent,
    TrailManagerLoginComponent,
    PatientViewComponent,
    PhysicianViewComponent,
    PatientListComponent,
    ClinicalTrailComponent,
    DiseaseListComponent,
    TrailNameListComponent,
    PatientDiagnosisComponent,
    DiseaseGroupComponent,
    DiseaseListComponent,
    PatientDiagnosisComponent,
    PatientMedicationsComponent,
    TrialNamesComponent,
    AddDiagnosisComponent,
    DiagnosisAndMedicationComponent,
    AddMedicationComponent,
    TrialTitleDetailsComponent,
    TrialManagerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IgxListModule,
    MatMenuModule,
    MatListModule,
    MatIconModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[]
})
export class AppModule { }
