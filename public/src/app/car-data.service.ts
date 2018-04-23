import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IfObservable } from 'rxjs/observable/IfObservable';

@Injectable()
export class CarDataService {

  constructor(private http: HttpClient) { }

  getFeatures(model){
      return this.http.get('/car_models/features/'+model)
  }

  getModels(){
    return this.http.get('/car_models')
  }

}
