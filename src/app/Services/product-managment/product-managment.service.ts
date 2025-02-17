import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, filter, shareReplay, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductManagementService {


  //this function can be used to filter the data based on the id
filterCardsWithId(id: number ,data:any){
  return  data.filter((item: any) => Number(item.id) === id);
}
}
