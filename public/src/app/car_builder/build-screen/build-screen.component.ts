import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgStyle } from '@angular/common';
import {
  DomSanitizer, SafeHtml,
  SafeUrl,
  SafeStyle
} from '@angular/platform-browser';

@Component({
  selector: 'build-screen',
  templateUrl: './build-screen.component.html',
  styleUrls: ['./build-screen.component.css']
})
export class BuildScreenComponent implements OnInit {

  @Input('buildOption') buildOption;
  @Input('model') model;

  car = {
    modelID: 0,
    colorID: ''
  };

  

  //esto despues se cambia ya con la logica de las images desde la base 
  carsImages = [
    [
      "../../../assets/images/Imparatus/SUV-1.png",
      "../../../assets/images/Imparatus/SUV-2.png",
      "../../../assets/images/Imparatus/SUV-3.png"
    ]
    ,
    [
      "../../../assets/images/Kubanyi/RAM-1.png",
      "../../../assets/images/Kubanyi/RAM-2.png",
      "../../../assets/images/Kubanyi/RAM-3.png"
    ]
    ,
    [
      "../../../assets/images/Imperiale/Imperiale-1.png",
      "../../../assets/images/Imperiale/Imperiale-2.png",
      "../../../assets/images/Imperiale/Imperiale-3.png"
    ]
  ]
    ;


  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngOnChanges(){
   //cambia el id, de una vez en cadena se cambia lo grafico
    this.car.modelID = this.model;
  }

  //recibe el tipo de imagen que se ocupa, se encarga de devolverla la parte adecuada del carro seleccionado 
  getBackground(part) {
    return this.carsImages[this.car.modelID][part];
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
