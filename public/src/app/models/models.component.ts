import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarDataService } from '../car-data.service';
import { SelectedCarService } from '../selected-car.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  @Output('modelChanged') modelChanged = new EventEmitter();
  models: any;
  selectedModel: Number = 1;
  selectedModelName: String = "";
  specs = {};

  constructor(private carData: CarDataService, private selectedCarSrv: SelectedCarService) { }

  ngOnInit() {
      this.carData.getModels().subscribe(res =>{
      this.models = res;
      this.selectedModelName = this.models[1].name;
      this.modelChanged.emit(this.selectedModelName);
      this.setSelectedModel(this.selectedModel);
    });
  }

  setSelectedModel(index){
    this.selectedModel = index;
    this.selectedModelName = this.models[index].name;
    this.modelChanged.emit(this.selectedModelName);
    this.selectedCarSrv.getDefaultData(this.selectedModelName);
    // this.selectedCarSrv.specs.subscribe(res => this.specs = res);
    // this.selectedCarSrv.changeSpecs(this.specs);
  }
}
