import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'build-screen',
  templateUrl: './build-screen.component.html',
  styleUrls: ['./build-screen.component.css']
})
export class BuildScreenComponent implements OnInit {
  
  @Input('buildOption') buildOption;
  @Input('model') model;

  car = {
    modelID: -1,
    colorID : ''
  };

  constructor() { }

  ngOnInit() {
  }

  showPreview() {
    this.car.modelID = this.model;
    alert('modelID: ' + this.car.modelID + ' colorID: ' + this.car.colorID);
 }

 setColor(color) {
    this.car.colorID = color;
    this.changeCarColor();
  }

  changeCarColor() {
      //images logic goes HERE
  } 


}
