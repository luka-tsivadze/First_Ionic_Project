import { Attribute, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,  FormsModule,} from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, } from '@ionic/angular/standalone';
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from './login/login.component';
import { StateManagmentService } from '../Services/state-managment.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RegisterComponent, LoginComponent]
})
export class ProfilePage implements OnInit {
RegActive = {boolean:false, class: 'solid'};
LogActive = {boolean:false, class: 'outline'};

  constructor(public stateServ:StateManagmentService) {
    // Initialize form
  
  }

  ngOnInit() {
    console.log(this.stateServ.authorisation());
   }

toReg(){
this.RegActive.boolean = true;
this.LogActive.boolean = false;
this.RegActive.class = 'outline';
this.LogActive.class = 'solid';
this.stateServ.authorisation.set(false);
}
toLog(){
this.LogActive.boolean = true;  
this.RegActive.boolean = false;
this.RegActive.class = 'solid';
this.LogActive.class = 'outline';
this.stateServ.authorisation.set(true);
}
 
}
