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
    //this.carData.getExtras().subscribe(res => {
      this.data = this.carData.getExtras();
    //});
    this.selectedCarSrv.specs.subscribe(res => { 
      this.specs = res;
      this.extras = res.extras;
    });
  }

  isActive(extra){
    let aux = this.extras.indexOf(extra);
    if(aux !== -1){
      return true;
    }else{
      return false;
    }
  }

  addExtra(extra) {  
  
    let aux = this.extras.indexOf(extra);
    console.log(extra);
    if(aux !== -1){
      this.extras.splice(aux, 1);
    }else{
      this.extras.push(extra);
    }
    this.specs = {
      ...this.specs,
      extras: this.extras
    }
    this.selectedCarSrv.changeSpecs(this.specs);
  }

}
