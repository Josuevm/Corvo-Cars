import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CarDataService } from '../../car-data.service'
import { SelectedCarService } from '../../selected-car.service'

@Component({
  selector: 'app-general-feature-picker',
  templateUrl: './general-feature-picker.component.html',
  styleUrls: ['./general-feature-picker.component.css']
})
export class GeneralFeaturePickerComponent implements OnInit {

  data: any;
  specs = {
    color: "",
    extras: [],
    inside: "",
    name: "",
    rims: "",
    motor: ""
  };

  selectedCardName: string = "";
  selectedCardID: Number = 0;

  @Input('type')
  type: String = ""



  constructor(private carData: CarDataService,
    private selectedCarSrv: SelectedCarService) { }

  ngOnInit() {
    this.selectedCarSrv.specs.subscribe(res => {
      this.specs = res
      this.setActiveDefaultInterior();
      //Llamar tambien a los otros metodos que setean el default
    });
  }

  ngOnChanges() {
    this.changeDataType();
    
  }

  //Cambia los datos de acuerdo a lo que se selecciona (motor, interior)
  changeDataType() {
    switch (this.type) {
      case 'interiors':
        this.carData.getInteriors().subscribe(res => { this.data = res });
        break;
      case 'motors':
        this.data = this.carData.getMotors().subscribe(res => { this.data = res });
        break;
      case 'extras':
        //Falta hacer el de extras!!
        break;
    }
  }

  //Simplemente se usa para que ponga el borde amarillo al seleccionado y guarde el spec cambiado en el service
  setSelectedCard(index) {
    this.selectedCardID = index;
    this.selectedCardName = this.data[index].name;
    this.changeCarSpecs()
  }

  //Se encarga de cambiar el spec en el servicio
  changeCarSpecs() {

    switch (this.type) {
      case 'interiors':
        this.specs = {
          ...this.specs,
          inside: this.selectedCardName
        }
        break;
      case 'motors':
        this.specs = {
          ...this.specs,
          motor: this.selectedCardName
        }
        break;
      case 'extras':
        //Falta hacer el de extras!!
        break;
    }

    this.selectedCarSrv.changeSpecs(this.specs);
  }

  //Los diferentes modelos tienen diferentes interiores por default, este metodo pone en active el que trae default
  //También hace que si selecciona un interior y se cierra el componente, cuando se vuelva a abrir tenga el mismo seleccionado
  //Hacer con cada spec!
  setActiveDefaultInterior() {
    console.log(this.specs.inside)
    switch (this.specs.inside) {
      case "Prime":
        this.selectedCardID = 0
        break;
      case "Gold":
        this.selectedCardID = 1
        break;
      case "Standard":
        this.selectedCardID = 2
        break;
      case "Sport":
        this.selectedCardID = 3
        break;
      default:
        break;
    }
  }

}
