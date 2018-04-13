import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  models = [
    {
      image: "Car Image",
      name : "Corvo Imperiale",
      description: "Car description"
    },
    {
      image: "Car Image",
      name : "Corvo 4x4",
      description: "Car description"
    },
    {
      image: "Car Image",
      name : "Corvo SUV",
      description: "Car description"
    }
  ];

  selectedModel: Number=1;

  constructor() { }

  ngOnInit() {
  }

  setSelectedModel(index){
    this.selectedModel = index;
  }
}
