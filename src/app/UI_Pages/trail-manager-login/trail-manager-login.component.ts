import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trail-manager-login',
  templateUrl: './trail-manager-login.component.html',
  styleUrls: ['./trail-manager-login.component.scss']
})
export class TrailManagerLoginComponent implements OnInit {
trialManagerLoginForm:any;
  constructor(private formBuilder:FormBuilder,
              private router:Router) { }

  ngOnInit(): void {
    this.trialManagerLoginForm = this.formBuilder.group({
      username:[''],
      password:['']
    })

  }
  login(){
    if(this.trialManagerLoginForm.value.username==="manager" && this.trialManagerLoginForm.value.password==="manager"){
    console.log("Manager login successfull");
    this.router.navigateByUrl('/TrialManagerView');
     } else{
          alert("Username or password is incorrect!!")
    }
    
  }

}
