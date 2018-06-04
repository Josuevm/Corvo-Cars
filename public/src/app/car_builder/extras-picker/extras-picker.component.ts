import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CarDataService } from '../../car-data.service'
import { SelectedCarService } from '../../selected-car.service'

@Component({
  selector: 'extras-picker',
  templateUrl: './extras-picker.component.html',
  styleUrls: ['./extras-picker.component.css']
})
export class ExtrasPickerComponent implements OnInit {

  data: any;
  specs = {
    color: "",
    extras: [],
    inside: "",
    name: "",
    rims: "",
    motor: ""
  };

  extras = [];


  constructor(private carData: CarDataService,
    private selectedCarSrv: SelectedCarService) { }

  ngOnInit() {
    this.carData.getExtras().subscribe(res => {
      this.data = res;
    });
    this.selectedCarSrv.specs.subscribe(res => { 
      this.specs = res;
      this.extras = res.extras;
    });
  }

  isActive(extra){
    let isSelected;
    for (let ext of this.extras) {
      if(extra.name == ext.name){
        isSelected = true;
      }
    }
    return isSelected;
  }

  addExtra(extra,id) {  
    let aux = this.extras.indexOf(extra.name);
    if(aux !== -1){
      this.extras.splice(aux, 1);
    }else{
      let data= {name: extra.name, price: extra.price}
      this.extras.push(data);
    }
    this.specs = {
      ...this.specs,
      extras: this.extras
    }
    this.selectedCarSrv.changeSpecs(this.specs);
  }

}
