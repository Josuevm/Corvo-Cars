import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgStyle } from '@angular/common';
import {
  DomSanitizer, SafeHtml,
  SafeUrl,
  SafeStyle
} from '@angular/platform-browser';
import { SelectedCarService } from '../../selected-car.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PreviewModalComponent } from '../../preview-modal/preview-modal.component';
import { CarDataService } from '../../car-data.service';
import { filter } from 'rxjs/operator/filter';

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

  specs: any;

  bsModalRef: BsModalRef;

  rims: any;

  rimPath: any;

  carsImages = [

    [
      "../../../assets/images/Kubanyi/RAM-1.png",
      "../../../assets/images/Kubanyi/RAM-2.png",
    ],
    [
      "../../../assets/images/Imparatus/SUV-1.png",
      "../../../assets/images/Imparatus/SUV-2.png",
    ]
    ,
    [
      "../../../assets/images/Imperiale/Imperiale-1.png",
      "../../../assets/images/Imperiale/Imperiale-2.png",
    ]
  ]
    ;


  bodyImageStyle = {
    backgroundImage: 'url(' + this.getBackground(0) + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: '90%',
    filter: 'opacity(.5) drop-shadow(0 0 0 white)' // se cambia para cambiar el color tito
  }


  constructor(private sanitizer: DomSanitizer,
    private selectedCarSrv: SelectedCarService,
    private modalService: BsModalService,
    private carData: CarDataService) { }

  ngOnInit() {
    this.selectedCarSrv.specs.subscribe(res => this.specs = res);
    this.carData.getRims().subscribe(res => {
      this.rims = res;
    });
  }

  ngOnChanges() {
    //cambia el id, de una vez en cadena se cambia lo grafico
    this.car.modelID = this.model;
    this.bodyImageStyle.backgroundImage = 'url(' + this.getBackground(0) + ')', // cambia la imagen del modelo
      this.changeRimsImage(0); //cambia al rim basico, se supone que josue dice que el sleccionado varia dependiendo del carro, asi que hay que hacer esa logica
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
        this.bodyImageStyle.filter = "opacity(.5) drop-shadow(0 0 0 black)";
        break;
      case 'red':
        this.bodyImageStyle.filter = "opacity(.5) drop-shadow(0 0 0 red)";
        break;
      case 'white':
        this.bodyImageStyle.filter = "opacity(.5) drop-shadow(0 0 0 white)";
        break;
      case 'blue':
        this.bodyImageStyle.filter = "opacity(.5) drop-shadow(0 0 0 blue)";
        break;
      case 'yellow':
        this.bodyImageStyle.filter = "opacity(.5) drop-shadow(0 0 0 yellow)";
        break;
    }
  }

  setRims(rims) {
    this.specs = {
      ...this.specs,
      rims: rims.description
    }
    this.selectedCarSrv.changeSpecs(this.specs);
    this.changeRimsImage(rims.id);
  }

  changeRimsImage(rimsID) {
    console.log("Rims Changed: " + rimsID);
    for (let rim of this.rims) {
      if (rim.modelId == this.car.modelID && rim.rimId == rimsID) {
        this.rimPath = rim.path;
        return;
      }
    }
  }




}
