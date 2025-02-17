import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonSelect,IonSelectOption, IonToolbar, IonBackButton, IonButtons, IonIcon, IonImg, IonCard } from '@ionic/angular/standalone';
import { ProductManagementService } from 'src/app/Services/product-managment/product-managment.service';

import { ActivatedRoute } from '@angular/router';
import { CentralizedApiServiceService } from 'src/app/Services/centralized-api-service.service';
import { heart, heartOutline, heartSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.page.html',
  styleUrls: ['./detailed-info.page.scss'],
  standalone: true,
  imports: [ IonImg,  IonBackButton, IonContent, IonHeader, IonToolbar, IonSelectOption,CommonModule, FormsModule, IonIcon, IonSelect ],
})
export class DetailedInfoPage implements OnInit {
Values:any=[{
  cardTitle: "Modern Wooden Keyboard",
  color:  "white",
  currency: "$",
  id: "2",
  imgLink: "https://loremflickr.com/640/480",
  price: "800.00",
  type: "Coordinator"}];

  constructor(private serv:ProductManagementService , private route:ActivatedRoute ,private apiServ:CentralizedApiServiceService) { 

    addIcons({heartSharp,heart,heartOutline});
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.apiServ.fetchProducts().subscribe({
      next: (data: any) => {  
       this.Values=this.serv.filterCardsWithId(Number(id) , data )
       console.log(this.Values)
      }
      })
})
}
}