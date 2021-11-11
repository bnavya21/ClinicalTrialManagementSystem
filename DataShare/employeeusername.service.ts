import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeusernameService {
  userName ="";
  private employeeUserName = new BehaviorSubject<string>(this.userName);
  CurrentEmployeeUserName = this.employeeUserName.asObservable();
  constructor() {}
    changeEmployeeUserName(employeeUserId:string){
      this.employeeUserName.next(employeeUserId);
   }
}
