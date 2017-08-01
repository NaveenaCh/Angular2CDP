import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';
import {Router} from '@angular/router'; 
import { AgmCoreModule } from 'angular2-google-maps/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent{

   constructor(private router: Router) {

  }

/*  MapView:boolean=false;
  Dashboard:boolean=false;
  Policies:boolean=false;
  Events:boolean=false;
  Reports:boolean=false;*/
ciscoLogo:string="../assets/cisco_logo.png";
AlarmIcon:string="../assets/alarm_icon.png";
SettingsIcon:string="../assets/settings_icon.png";

/*mapViewClicked(){
	this.MapView=true;
  this.Dashboard=false;
  this.Policies=false;
  this.Events=false;
  this.Reports=false;
   this.router.navigate(['/mapview']);
}
dashboardClicked(){

	  this.MapView=false;
  this.Dashboard=true;
  this.Policies=false;
  this.Events=false;
  this.Reports=false;

 this.router.navigate(['/dashboard']);
}
policiesClicked(){
	  this.MapView=false;
  this.Dashboard=false;
  this.Policies=true;
  this.Events=false;
  this.Reports=false;
   this.router.navigate(['/policies']);
}
eventsClicked(){
	  this.MapView=false;
  this.Dashboard=false;
  this.Policies=false;
  this.Events=true;
  this.Reports=false;
   this.router.navigate(['/events']);
}
reportsClicked(){
	 
   this.MapView=false;
  this.Dashboard=false;
  this.Policies=false;
  this.Events=false;
  this.Reports=true;
   this.router.navigate(['/reports']);
}*/

}

