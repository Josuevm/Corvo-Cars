import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SelectedCarService {

  private carSpecs = new BehaviorSubject<any>({});
  specs = this.carSpecs.asObservable();
  car = {
    name: "",
    color: "",
    rims: "",
    extras: "",
    inside: ""
  }

  constructor(private http: HttpClient) { }

  changeSpecs(specs) {
    this.carSpecs.next(specs)
    console.log(this.carSpecs);
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
          inside: res['inside']
        }
        this.changeSpecs(this.car);
      })
  }



}
