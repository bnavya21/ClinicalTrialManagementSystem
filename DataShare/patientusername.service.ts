import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientusernameService {
  userName ="";
private patientUserName = new BehaviorSubject<string>(this.userName);
CurrentPatientUserName = this.patientUserName.asObservable();
constructor() { }
changePatientUserName(patientUserId:string){
  this.patientUserName.next(patientUserId);
}
  
}


