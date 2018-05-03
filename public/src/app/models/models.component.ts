import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarDataService } from '../car-data.service';
import { SelectedCarService } from '../selected-car.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  @Output('modelIDChanged') modelIDChanged = new EventEmitter();
  models: any;
  selectedModel: Number = 2;
  selectedModelName: String = "";
  specs = {};

  constructor(private carData: CarDataService, private selectedCarSrv: SelectedCarService) { }

  ngOnInit() {
      this.carData.getModels().subscribe(res =>{
      this.models = res
      this.selectedModelName = this.models[1].name;
    });
  }

  // getModels(){
  //   this.http.get('/car_models').subscribe( data =>{
  //     this.models = data;
  //     this.selectedModelName = this.models[1].name; // selecciona el modelo inicial, asi no tiene que usar el default prros
  //   });
    
  // }

  setSelectedModel(index){
    this.selectedModel = index;
    this.selectedModelName = this.models[index].name;
    this.modelIDChanged.emit(index);
    this.selectedCarSrv.getDefaultData(this.selectedModelName);
  }
}
