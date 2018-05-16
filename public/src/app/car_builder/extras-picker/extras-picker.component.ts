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
    this.selectedCarSrv.specs.subscribe(res => { this.specs = res });
  }

  isActive(extra){
    console.log(this.extras);
    console.log(extra.name);
    let aux = this.extras.indexOf(extra.name);
    if(aux !== -1){

      return true;
    }else{
 
      return false;
    }
  }

  addExtra(extra,id) {  
    let aux = this.extras.indexOf(extra.name);
    if(aux !== -1){
      this.extras.splice(aux, 1);
    }else{
      this.extras.push(extra.name);
    }
    this.specs = {
      ...this.specs,
      extras: this.extras
    }
    this.selectedCarSrv.changeSpecs(this.specs);
  }

}
