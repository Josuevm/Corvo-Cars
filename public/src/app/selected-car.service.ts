import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SelectedCarService {

  private carSpecs = new BehaviorSubject<any>({});
  specs = this.carSpecs.asObservable();

  @Output() specsChanged = new EventEmitter();

  car = {
    modelID: 1,
    name: "",
    color: "",
    rims: "",
    rimsID: 0,
    extras: "",
    inside: "",
    motor:""
  }

  constructor(private http: HttpClient) { }

  changeSpecs(specs) {
    this.carSpecs.next(specs);
    this.specsChanged.emit(specs);
  }

  getFeatures(idModel){
    return this.http.get('/car_models/features/'+idModel)
}


  getDefaultData(modelName) { //this should be called before subcribe to the service and call the changeSpecs method
    this.http.get('/car_models/models/' + modelName)
      .subscribe(res => {
        //cambiar eso
                      let modelID;
                      switch(res['name']) {
                        case 'Corvo Imperiale': 
                          modelID = 2;
                          break;
                        case 'Corvo Kubanyi': 
                        modelID = 0;
                        break;
                        case 'Corvo Imparatus': 
                        modelID = 1;
                        break;
                      }
        this.car = {
          modelID: modelID,
          name: res['name'],
          color: res['color'],
          rims: res['rims'],
          rimsID: 0,
          extras: res['extras'],
          inside: res['inside'],
          motor: res['motor']
        }
        this.changeSpecs(this.car);
      })
  }



}
