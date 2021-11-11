import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Patient } from '../Models/patient';




@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private api_url ='/api';
  private new_url = '/api/vi/Patient'
  //private api_url ='http://localhost:8080/api';
  constructor(private http: HttpClient) { }
  getAllPatientsProfile():Observable<any>{
    let requsetUrl = this.api_url+'/vi/Patients';
    return this.http.get(requsetUrl);
  }
  registerPatient(patient: Patient):Observable<any>{
    
    return this.http.post(this.api_url+'/vi/Patient',patient);
  }
  getPatientProfile(userName: string):Observable<any>{
    let requsetUrl = this.api_url+'/vi/Patient';
    let params = new HttpParams();
    params = params.append('user_id', userName);
    return this.http.get(requsetUrl,{params:params});
    //return this.http.get(requsetUrl,userName);
  }
  
  getPatientDiagnosis(mrn:string):Observable<any>{
    let requsetUrl=this.api_url+'/vi/PatientDiagnosis';
    let params = new HttpParams();
    params = params.append('mrn',mrn);
    return this.http.get(requsetUrl,{params:params});
  }

  getPatientMedication(mrn:string):Observable<any>{
    let requsetUrl=this.api_url+'/vi/PatientMedication';
    let params = new HttpParams();
    params = params.append('mrn',mrn);
    return this.http.get(requsetUrl,{params:params});
  }
  //to update the patient profile
  updatePatientProfile(mrn:string,patient:Patient):Observable<any>{
    //let requsetUrl = this.api_url+'/vi/Patient/mrn';
    //let params = new HttpParams();
    //params=params.append('Patient',patient);
    
    return this.http.put(`${this.new_url}/${mrn}`,patient);
  }
  
}
