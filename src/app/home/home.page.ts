import { Component, OnInit } from '@angular/core';
import { IonContent, IonButton,IonText } from '@ionic/angular/standalone';

import { RouterModule } from '@angular/router';

import { CentralizedApiServiceService } from '../Services/centralized-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonButton ,IonText , RouterModule ],
})
export class HomePage implements OnInit {
  constructor(private dataServ:CentralizedApiServiceService) {}

  ngOnInit() {
    //i am subscribing fetchProducts method from product-managment service to fetch data before user gets on product page so that data is already available when user lands on product page
    this.dataServ.fetchProducts().subscribe((data: any) => {
      console.log('data initialization' , data);
    }) 
  }

}
