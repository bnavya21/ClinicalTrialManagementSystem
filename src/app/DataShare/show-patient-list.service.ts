import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowPatientListService {

  private showPatientList = new BehaviorSubject<boolean>(true);
  CurrentShowPatientListValue = this.showPatientList.asObservable();
  constructor() { }
  changeShowPatientListValue(showPatientList:boolean){
    this.showPatientList.next(showPatientList);
  }
}
