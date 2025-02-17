import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, Observable, shareReplay, throwError } from 'rxjs';
import { StateManagmentService } from './state-managment.service';

@Injectable({
  providedIn: 'root'
})
export class CentralizedApiServiceService {
  private products$: Observable<any> | null = null;
userId:any;
userInformation:any;
  constructor(private http: HttpClient , private stateServ:StateManagmentService) {

   const encid = localStorage.getItem('userId');
   this.userId = encid ? atob(encid) : null; //i am decrypting the email so that it can be used as a key in firebase
 
  if (this.userId) {
   
  this.LoginUser({username: this.userId}).subscribe({//maybe not the best way to do this but this is best i managed from front end
    next: (data) => {
      this.userInformation = data;
      console.log('User Information:', data);
      this.stateServ.getUserLoggedIn(true);
    }
  });
  }
}
 




  RegisterUser(data: any): Observable<any> {
    const encodedEmail = data.email.replace('.', ','); // Encode email so we can use it as a key in Firebase
    const url = `https://firstionic-33af7-default-rtdb.europe-west1.firebasedatabase.app/users/${encodedEmail}.json`;
    return this.http.put(url, data).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error registering user:', error.message);
        return throwError(() => new Error('Failed to register user. Please try again later.'));
      })
    );
  }


  
  
  LoginUser(data: any): Observable<any> {
    const encEmail = data.username.replace('.',','); // Encode email so we can use it as a key in Firebase
    console.log(encEmail ,data);
    return this.http.get(`https://firstionic-33af7-default-rtdb.europe-west1.firebasedatabase.app/users/${encEmail}.json`, ).pipe(
  
      catchError((error: any) => {
        console.error('Error logging in user:', error);
        return throwError(() => error); // Propagate the error
      })
    );

  }

  fetchProducts(): Observable<any> {
    if (!this.products$) {
      this.products$ = this.http.get('https://67acc1d53f5a4e1477dbc260.mockapi.io/clothes').pipe(
        shareReplay(1), // Cache the value and replay for new subscribers
        catchError((error: any) => {
          console.error('Error loading products:', error);
          this.products$ = null; // Reset cache on error
          return throwError(() => error); // Propagate the error
        })
      );
    }
    return this.products$; 
  }
}
