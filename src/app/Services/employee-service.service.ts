import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Physician } from '../Models/physician';
import { PatientDiagnosis } from '../Models/patient-diagnosis';
import { PatientMedication } from '../Models/PatientMedication';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private api_url ='/api';
  private new_url ='/api/vi/Employee';
  //private api_url ='http://localhost:8080/api';
  constructor(private http: HttpClient) { }
  
  registerPhysician(physician: Physician):Observable<any>{
    
    return this.http.post(this.api_url+'/vi/Employee',physician);
  }
  getAllPhysiciansProfile():Observable<any>{
    let requsetUrl = this.api_url+'/vi/Employees';
    return this.http.get(requsetUrl);
  }
  getPhysicianProfile(userName: string):Observable<any>{
    let requsetUrl = this.api_url+'/vi/Employee';
    let params = new HttpParams();
    params = params.append('user_id', userName);
    return this.http.get(requsetUrl,{params:params});
} 
//to get the disease groups and dispaly the buttons
 getDiseaseGroups():Observable<any>{
   let requestUrl = this.api_url+'/vi/clinicaltrial';
   return this.http.get(requestUrl);
 }
 //to get the diseases in the diseasegroup
 getDiseases(diseaseGroup:string):Observable<any>{
  let requestUrl = this.api_url+'/vi/clinicaltrialdiseases';
  let params = new HttpParams();
  params=params.append('diseasegroup',diseaseGroup);
  return this.http.get(requestUrl,{params:params});
 }
 //to get the list of trials info for the given disease
 getTrials(disease:string):Observable<any>{
   let requestUrl = this.api_url+'/vi/clinicaltrialnames';
   let params = new HttpParams();
   params=params.append('disease',disease);
   return this.http.get(requestUrl,{params:params});
 }
  //to get the trial info given the trial name
  getTrialInfo(trialName:string):Observable<any>{
    let requestUrl = this.api_url+'/vi/clinicaltrialname';
    let params = new HttpParams();
    params = params.append('name',trialName);
    return this.http.get(requestUrl,{params:params});
  }
  //to get the  list trial names
  getTrialNames():Observable<any>{
    let requsetUrl = this.api_url+'/vi/clinicaltrials';
    return this.http.get(requsetUrl);
  }

  //to add patient diagnosis by the physician
  addDiagnosis(pd:PatientDiagnosis):Observable<any>{
    return this.http.post(this.api_url+'/vi/PatientDiagnosis',pd);
  }

  //to add patient medication by the physician
  addMedication(pm:PatientMedication):Observable<any>{
    return this.http.post(this.api_url+'/vi/PatientMedication',pm);
  }

  //to update the employee using the emp_id
  updateEmployeeProfile(emp_id:string,physician:Physician):Observable<any>{
    return this.http.put(`${this.new_url}/${emp_id}`,physician);
  }

  //to pull the report of the patients qualifying for the trial using the trial title
    getPatientsListForTrial(name:string):Observable<any>{
      let requestUrl=this.api_url+'/vi/trialconditionforpatients';
      let params=new HttpParams();
      params=params.append('name',name);
      return this.http.get(requestUrl,{params:params});
    }
}
 
