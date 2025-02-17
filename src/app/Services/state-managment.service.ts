import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateManagmentService {
authorisation = signal(false);
LoggedIn= signal(false);
setAuthorisation(value: boolean) {
  this.authorisation.set(value);
}

getUserLoggedIn(value: boolean) {
  return this.LoggedIn.set(value);
}
  constructor() { }
}
