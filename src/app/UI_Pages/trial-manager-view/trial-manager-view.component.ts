import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trial-manager-view',
  templateUrl: './trial-manager-view.component.html',
  styleUrls: ['./trial-manager-view.component.scss']
})
export class TrialManagerViewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onclick1(){
    console.log("Find by disease button is clicked");
    this.router.navigateByUrl('/DiseaseGroup')
  }
  onclick2(){
    console.log("Find by title button is clicked");
    this.router.navigateByUrl('/TrialNames')
  }
  onclick3(){
    console.log("Pull report button is clicked")
    this.router.navigateByUrl('/TrialsReport');

  }
}
