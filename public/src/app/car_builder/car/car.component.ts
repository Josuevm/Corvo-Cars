import { Component, OnInit, Input } from '@angular/core';
import { SelectedCarService } from '../../selected-car.service';
import { CarDataService } from '../../car-data.service';
import { filter } from 'rxjs/operator/filter';

@Component({
  selector: 'car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carsImages = [
    [
      "../../../assets/images/Kubanyi/RAM-1.png",
      "../../../assets/images/Kubanyi/RAM-2.png",
    ]
    ,
    [
      "../../../assets/images/Imparatus/SUV-1.png",
      "../../../assets/images/Imparatus/SUV-2.png",
    ]
    ,
    [
      "../../../assets/images/Imperiale/Imperiale-1.png",
      "../../../assets/images/Imperiale/Imperiale-2.png",
    ]
  ];

  private bodyImg: string = '';
  private extraImg: string;
  private rimsImg: string;
  private color: string;
 
  private bodyImageStyle = {
    backgroundImage: 'url(' + this.bodyImg + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: '90%',
    filter: 'opacity(.5) drop-shadow(0 0 0 white)'
  }

  rims: any;

  constructor(public carService: SelectedCarService, public carData: CarDataService) {  }

  ngOnInit() {
    this.carData.getRims().subscribe(res => {
      this.rims = res;
    });
    this.carService.specs.subscribe(specs => {
      this.updateCar(specs);
    });
  }

  private updateCar(specs) {
    this.bodyImg = this.getBackground(specs.name, 0);
    this.bodyImageStyle.backgroundImage = 'url(' + this.bodyImg + ')';
    this.extraImg = this.getBackground(specs.name, 1);
    this.changeCarColor(specs.color);
    this.color = specs.color;
    this.changeRimsImage(specs.modelID, specs.rimsID);
  }

  changeRimsImage(modelID, rimsID) {
    if (this.rims) {
      for (let rim of this.rims) {
        if (rim.modelId == modelID && rim.rimId == rimsID) {
          console.log('modelID ' + modelID);
          console.log('rimsID ' + rimsID);
          console.log(rim.path);
          this.rimsImg = rim.path;
          return;
        }
      }
    }
  }

  //recibe el tipo de imagen que se ocupa, se encarga de devolverla la parte adecuada del carro seleccionado 
  getBackground(name, part) {
    switch(name) {
      case 'Corvo Imperiale': 
        return this.carsImages[2][part];
      case 'Corvo Kubanyi': 
        return this.carsImages[0][part];
      case 'Corvo Imparatus': 
        return this.carsImages[1][part];
    }
    
  }

  changeCarColor(color) {
    switch (color) {
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
        this.bodyImageStyle.filter = "opacity(.5) drop-shadow(0 0 0 blue) saturate(240%) brightness(120%)";
        break;
      case 'yellow':
        this.bodyImageStyle.filter = "opacity(.5) drop-shadow(0 0 0 yellow)";
        break;
      default:
        this.bodyImageStyle.filter = "opacity(.5) drop-shadow(0 0 0 white)";
    }
  }

}
