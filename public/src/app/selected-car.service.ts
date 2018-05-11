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
    name: "",
    color: "",
    rims: "",
    extras: "",
    inside: "",
    motor:""
  }

  constructor(private http: HttpClient) { }

  changeSpecs(specs) {
    this.carSpecs.next(specs)
    console.log(this.carSpecs);
    this.specsChanged.emit(specs);
  }

  getFeatures(idModel){
    return this.http.get('/car_models/features/'+idModel)
}


  getDefaultData(modelName) { //this should be called before subcribe to the service and call the changeSpecs method
    this.http.get('/car_models/models/' + modelName)
      .subscribe(res => {
        this.car = {
          name: res['name'],
          color: res['color'],
          rims: res['rims'],
          extras: res['extras'],
          inside: res['inside'],
          motor: res['motor']
        }
        this.changeSpecs(this.car);
      })
  }



}
