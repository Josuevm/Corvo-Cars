import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgStyle } from '@angular/common';
import {
  DomSanitizer, SafeHtml,
  SafeUrl,
  SafeStyle
} from '@angular/platform-browser';
import { SelectedCarService } from '../../selected-car.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {PreviewModalComponent} from '../../preview-modal/preview-modal.component'

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

  specs = {};

  bsModalRef: BsModalRef;

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


  constructor(private sanitizer: DomSanitizer, 
    private selectedCarSrv : SelectedCarService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.selectedCarSrv.specs.subscribe(res => this.specs = res);
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
    this.changeColor();
    this.bsModalRef = this.modalService.show(PreviewModalComponent);
  }

  changeColor() {//this method updates the car specs
    this.specs = {
      ...this.specs,
      color: this.car.colorID
    }
    this.selectedCarSrv.changeSpecs(this.specs);
  }

  setColor(color) {
    this.car.colorID = color;
    this.changeCarColor();
    this.changeColor();
  }

  changeCarColor() {
    switch (this.car.colorID) {
      case 'black':
        document.getElementById("bodyImage").style.filter = "opacity(.5) drop-shadow(0 0 0 black)";
        console.log("negro");
        break;
      case 'red':
        document.getElementById("bodyImage").style.filter = "opacity(.5) drop-shadow(0 0 0 red)";
        console.log("red");
        break;
      case 'white':
        document.getElementById("bodyImage").style.filter = "opacity(.5) drop-shadow(0 0 0 white)";
        console.log("white");
        break;
      case 'blue':
        document.getElementById("bodyImage").style.filter = "opacity(.5) drop-shadow(0 0 0 blue)";
        console.log("blue");
        break;
      case 'yellow':
        document.getElementById("bodyImage").style.filter = "opacity(.5) drop-shadow(0 0 0 yellow)";
        console.log("yellow");
        break;
    }
  }

  setRims(rims) {
    this.specs = {
      ...this.specs,
      rims: rims.id
    }
    this.selectedCarSrv.changeSpecs(this.specs);
    this.changeRimsImage(rims);
  }

  changeRimsImage(rimsID) {
    console.log("Rims Changed: " + rimsID);
    //change rims images LOCAL VARIABLE depending of 
    //the car, with rimID and ModelID get the image from the service
  }




}
