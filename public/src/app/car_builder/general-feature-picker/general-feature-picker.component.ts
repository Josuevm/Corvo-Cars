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
  type: String = "";

  constructor(private carData: CarDataService,
    private selectedCarSrv: SelectedCarService) { }

  ngOnInit() {
    this.selectedCarSrv.specs.subscribe(res => {this.specs = res});
    this.selectedCarSrv.specsChanged.subscribe((res) => this.changeDataType());
  }

  ngOnChanges() {
    this.changeDataType();
  }

  changeDataType() {
    switch (this.type) {
      case 'interiors':
        this.carData.getInteriors().subscribe(res => { 
          this.data = res;
          this.selectedCardName = this.specs.inside;
        });
        break;
      case 'motors':
        this.carData.getMotors().subscribe(res => { 
          this.data = res;
          this.selectedCardName = this.specs.motor;
        });
        break;
    }
  }

  setSelectedCard(name) {
    this.selectedCardName = name;
    this.changeCarSpecs()
  }

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
    }
    this.selectedCarSrv.changeSpecs(this.specs);
  }

}
