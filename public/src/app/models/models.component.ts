import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  models: any;

  selectedModel: Number=1;
  selectedModelName: String = "Corvo imperiale";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getModels();
  }

  getModels(){
    this.http.get('/car_models').subscribe( data =>{
      this.models = data;
    })
  }

  setSelectedModel(index){
    this.selectedModel = index;
    this.selectedModelName = this.models[index].name;
  }
}
