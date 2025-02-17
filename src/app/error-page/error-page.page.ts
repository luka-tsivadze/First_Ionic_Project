import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.page.html',
  styleUrls: ['./error-page.page.scss'],
  standalone: true,
  imports: [IonTitle, IonToolbar, IonHeader, CommonModule, FormsModule ,RouterLink]
})
export class ErrorPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
