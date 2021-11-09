import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedPatientmrnService {
  mrn="";
  private patientmrn = new BehaviorSubject<string>(this.mrn);
  selectedPatientmrn = this.patientmrn.asObservable();
  constructor() { }
  changePatientmrn(selectedmrn:string){
    this.patientmrn.next(selectedmrn);
  }
}



