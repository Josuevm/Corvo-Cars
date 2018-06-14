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
    this.rims = this.carData.getRims();
    this.carService.specs.subscribe(specs => {
      if(!this.rims) { // Este bloque se puede quitar cuando ya salga el builder cuando se selecciona Customize your own
        this.rims = this.carData.getRims();
      }
      this.updateCar(specs);
    });
  }

  private updateCar(specs) {
    if(!(typeof specs.color === "undefined")){ // Este if se puede quitar cuando ya salga el builder solo cuando se selecciona Customize your own

      this.bodyImg = this.getBackground(specs.name, 0);
      this.bodyImageStyle.backgroundImage = 'url(' + this.bodyImg + ')';
      this.extraImg = this.getBackground(specs.name, 1);
      this.changeCarColor(specs.color.name);
      this.color = specs.color.name;
      this.changeRimsImage(specs.rims);

    }
    
  }

  changeRimsImage(selectedRims) {
    if (this.rims) { // Este if se puede quitar cuando ya salga el builder solo cuando se selecciona Customize your own
      for (let rim of this.rims) {
        if (rim.modelId == selectedRims.modelId && rim.rimId == selectedRims.rimId) {
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
        this.bodyImageStyle.filter = "opacity(.72) drop-shadow(0 0 0 black) saturate(100%) brightness(54.0%)";
        break;
      case 'red':
        this.bodyImageStyle.filter = "opacity(.5) drop-shadow(0 0 0 red) saturate(330%) brightness(50%)";
        break;
      case 'white':
        this.bodyImageStyle.filter = "opacity(.5) drop-shadow(0 0 0 white) saturate(100%) brightness(160%)";
        break;
      case 'purple':
        this.bodyImageStyle.filter = "opacity(.7) drop-shadow(0 0 0 mediumpurple) saturate(700%) brightness(45%)";
        break;
      case 'blue':
        this.bodyImageStyle.filter = "opacity(0.77) drop-shadow(darkblue 0px 0px 0px) saturate(600%) brightness(70%)";
        break;
      case 'yellow':
        this.bodyImageStyle.filter = "opacity(.5) drop-shadow(0 0 0 gold) saturate(600%) brightness(135%)";
        break;
      case 'gray':
        this.bodyImageStyle.filter = "opacity(.2) drop-shadow(0 0 0 black) saturate(100%) brightness(550%)";
        break;
      case 'green':
        this.bodyImageStyle.filter = "opacity(0.77) drop-shadow(lime 0px 0px 0px) saturate(130%) brightness(188%)";
        break;
      default:
        this.bodyImageStyle.filter = "opacity(.5) drop-shadow(0 0 0 white) saturate(100%) brightness(500%)";
    }
  }

}
