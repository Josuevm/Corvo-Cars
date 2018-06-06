import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { getDefaultService } from 'selenium-webdriver/opera';

@Injectable()
export class CarDataService {
model = [
  {
    idModel:1,
    idMotor:1,
    idRims:1,
    idColor:1,
    idInterior:1,
    extras:[] 
  }
];

getDefault(idModel){

}
  constructor(private http: HttpClient) { }

  
//assing this shit to the model array
  getModelImages(){
    return this.http.get('/model_models')
  }
  getModels(){
    return this.http.get('/car_models')
  }
  getMotors(){
    return this.http.get('/motor_Paths')
  }
  getRims(){
    return this.http.get('/rims_paths')
  }
  getInteriors(){
    return this.http.get('/interior_paths')
  }

  getExtras(){
    return this.http.get('/extras_paths')
  }

  selectModel(idModel:number){
   return this.model
  }

  getModel(modelName){
    return this.http.get('/car_models/models/' + modelName)
  }
 
  
}
