import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButton, IonToolbar , IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle , IonSelect, IonSelectOption, IonCol, IonTitle, IonImg, IonIcon, IonProgressBar } from '@ionic/angular/standalone';
import { text, heart, atOutline, heartOutline, heartSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ProductManagementService} from '../Services/product-managment/product-managment.service';
import { map, pipe } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CentralizedApiServiceService } from '../Services/centralized-api-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
  standalone: true,
  imports: [IonProgressBar, IonIcon, IonContent,IonHeader,  IonToolbar, CommonModule, FormsModule , IonSelect, IonSelectOption ,IonButton, 
    IonCard, IonCardContent, IonCardHeader,  IonCardTitle , RouterLink]
})
export class MainPagePage implements OnInit {
selectedOption: any ;
loading:boolean=true;
  selected=[{text:'MEN', value:'Men'},{text:'WOMEN',value:'Women'},{text:'CHILDREN',value:'Children'} ];
  buttons=[{text:'New',class:'active'},{text:'BEST SELLERS',class:'NonActive'},{text:'JEANS',class:'NonActive'},{text:'hoodies',class:'NonActive'}];
  chosenButton:any;
    cardProperties=[
  {
   id:'0',imgLink:'../../assets/images/CardStaticImages/257713062d566842475ba127ee8494f4.png' , imgAlt:'clotheImage',
    cardTitle:'BAGGY JEANS' ,type:'COLLECTION' , price:'99.00', currency:'$'
  }
  ]
  constructor(private dataServ:CentralizedApiServiceService) {
      addIcons({heartSharp,heart,heartOutline}); }

ngOnInit() {
  this.selectedOption = this.selected[0].value;
  this.dataServ.fetchProducts().pipe(
    map((data: any) => data.map((item: any) => ({
      ...item,

    })))
  ).subscribe((transformedData: any) => {
    this.cardProperties = transformedData;
    setTimeout(() => {
       this.loading=false;
    }, 1500);
  });
}

  makeItActive(index:number){
    this.buttons.forEach(element => {
      element.class='NonActive';
    });
    this.buttons[index].class='active';
    this.chosenButton=this.buttons[index].text;
  }
}


