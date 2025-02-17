import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CentralizedApiServiceService } from 'src/app/Services/centralized-api-service.service';
import { StateManagmentService } from 'src/app/Services/state-managment.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],

})
export class LoginComponent  implements OnInit {
  loginData = {
    username: '',
    password: '',
  };

  animateForm: boolean = false;

  constructor(private apiServ:CentralizedApiServiceService , private stateServ:StateManagmentService) {}

  ngOnInit() {
 
    setTimeout(() => {
      this.animateForm = true;
    }, 500); // Delay for animation effect
  }

  onLogin() {
    //i am using NgModel to bind the data to the loginData object in this component 
this.apiServ.LoginUser(this.loginData).subscribe({
next: (data) => {
if (data.password == this.loginData.password) {
  this.stateServ.getUserLoggedIn(true);
  console.log('Login successful');
  const encryptedEmail = btoa(data.email);

  localStorage.setItem('userId', encryptedEmail);
}else{
  console.log('Invalid password');
}
}

})

   
  }



}
