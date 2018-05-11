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
]
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
  getRims(){
    return this.http.get('/rimsPaths') //dont return the observable, return just the json data
  }
  getMotors(){
    return this.http.get('/motor_Paths')
  }
  getInteriors(){
    return this.http.get('/interior_paths')
  }
  selectModel(idModel:number){
   return this.model
  }
 
  
}
