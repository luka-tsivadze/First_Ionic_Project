import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouteReuseStrategy } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { routes } from 'src/app/app.routes';
import { CentralizedApiServiceService } from 'src/app/Services/centralized-api-service.service';
import { StateManagmentService } from 'src/app/Services/state-managment.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [IonicModule,ReactiveFormsModule, NgIf ],
  standalone: true,
})
export class RegisterComponent  implements OnInit {

  registrationForm: FormGroup;
  
constructor(private formBuilder: FormBuilder ,private Apiservice:CentralizedApiServiceService , private routes:Router ,
  private stateServ:StateManagmentService) {

    this.registrationForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        passwordRepeat: ['', [Validators.required]],
      },
      {
        validator: this.matchPasswords('password', 'passwordRepeat'),
      }
    );
  }
  ngOnInit() {}



    isFieldInvalid(fieldName: string): boolean {
      const field = this.registrationForm.get(fieldName);
      return field ? field.invalid && field.touched : false;
    }
  
    // Check if password and repeat password match  
    matchPasswords(password: string, passwordRepeat: string) {
      return (formGroup: FormGroup) => {
        const passwordControl = formGroup.get(password);
        const passwordRepeatControl = formGroup.get(passwordRepeat);
  
        if (passwordControl?.value !== passwordRepeatControl?.value) {
          passwordRepeatControl?.setErrors({ mismatch: true });
        } else {
          passwordRepeatControl?.setErrors(null);
        }
      };
    }
  
  
    onSubmit() {  
//hare i am using formGroup to get the data from the form  but in login i used NgModel i did that so i would understand both ways of getting data from a form
      if (this.registrationForm.valid) {
        console.log('Registration Data:', this.registrationForm.value);
          this.Apiservice.RegisterUser(this.registrationForm.value).subscribe({
            next: data => {
              console.log('data is sent Succesfully ', data);
              this.stateServ.setAuthorisation(true);
            },
            error: error => {
              console.error('There was an error!', error);

            }

          });
      }
    }

}
