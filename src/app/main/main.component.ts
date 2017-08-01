import { Component} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
	
 constructor(public router: Router) {

  }
   public email;
CiscoLogo:string="../assets/cisco-logo.png";
CdpLogo:string="../assets/cdp-logo.png";
MailIcon:string="../assets/email-icon.png";
PWDIcon:string="../assets/password-icon.png";
onClicked(mail:any,pwd:any):void{
this.email=mail;
if(mail&&pwd){
 this.router.navigate(['/mainPage']);
}else{
	alert("please enter email and password");
	this.router.navigate(['/']);
}
}


}
