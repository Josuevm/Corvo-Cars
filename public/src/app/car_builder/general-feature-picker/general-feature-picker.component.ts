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
  selectedCardFeature: any;
  selectedCardID: Number = 0;
  isMotor = false;

  @Input('type')
  type: String = "";

  constructor(private carData: CarDataService,
    private selectedCarSrv: SelectedCarService) { }

  ngOnInit() {
    this.selectedCarSrv.specs.subscribe(res => {
      this.specs = res;
      this.changeDataType();
    });
    this.selectedCarSrv.specsChanged.subscribe((res) => this.changeDataType());
  }

  ngOnChanges() {
    this.changeDataType();
  }

  changeDataType() {
    switch (this.type) {
      case 'interiors':
        //this.carData.getInteriors().subscribe(res => { 
          this.data = this.carData.getInteriors();
          this.selectedCardFeature = this.specs.inside;
        //});
        break;
      case 'motors':
        //this.carData.getMotors().subscribe(res => { 
          this.data = this.carData.getMotors();
          this.selectedCardFeature = this.specs.motor;
          this.isMotor = true;
          console.log("......", this.specs.motor)
        //});
        break;
    }

    
  }

  setSelectedCard(data) {
    let info ={
      ID:data.ID,
      name: data.name,
      price: data.price
    }
    this.selectedCardFeature = info;
    this.changeCarSpecs()
  }

  changeCarSpecs() {
    switch (this.type) {
      case 'interiors':
        this.specs = {
          ...this.specs,
          inside: this.selectedCardFeature
        }
        break;
      case 'motors':
        this.specs = {
          ...this.specs,
          motor: this.selectedCardFeature
        }
        break;
    }
    this.selectedCarSrv.changeSpecs(this.specs);
  }

}
