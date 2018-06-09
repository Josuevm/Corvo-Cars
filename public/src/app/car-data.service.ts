import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { getDefaultService } from 'selenium-webdriver/opera';

@Injectable()
export class CarDataService {

  private rims: any;
  private motors: any;
  private interiors: any;
  private extras: any;

  constructor(private http: HttpClient) { 
    this.loadData();
  }

  /**
   * Loads the images path and save it in memory 
   * to not reload every time it's need it in the builder components
   */
  loadData() {
    this.loadRims().subscribe(res => {
      this.rims = res;
    });
    this.loadMotors().subscribe(res => {
      this.motors = res;
    });
    this.loadInteriors().subscribe(res => {
      this.interiors = res;
    });
    this.loadExtras().subscribe(res => {
      this.extras = res;
    });
  }

  getRims() {
    return this.rims;
  }
  getMotors() {
    return this.motors;
  }
  getInteriors() {
    return this.interiors;
  }
  getExtras() {
    return this.extras;
  }
  

  getModelImages(){
    return this.http.get('/model_models')
  }
  getModels(){
    return this.http.get('/car_models')
  }

  loadMotors(){
    return this.http.get('/motor_Paths')
  }
  loadRims(){
    return this.http.get('/rims_paths')
  }
  loadInteriors(){
    return this.http.get('/interior_paths')
  }
  loadExtras(){
    return this.http.get('/extras_paths')
  }

  getModel(modelName){
    return this.http.get('/car_models/models/' + modelName)
  }
  
}
