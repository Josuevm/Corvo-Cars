import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CarDataService } from '../../car-data.service'
import { SelectedCarService } from '../../selected-car.service';


@Component({
  selector: 'rims-picker',
  templateUrl: './rims-picker.component.html',
  styleUrls: ['./rims-picker.component.css']
})
export class RimsPickerComponent implements OnInit {

  @Output("rimsChanged") rimsChanged = new EventEmitter();

  selectedRimID: string;
  description: string;
  rimsImages: any;
  selectedRim = { rimId: "", name: "", price: "", img: "" }

  //must Load images in this array
  rims = [
    { ID: '0', img: 'rims1', name: '', price: "" },
    { ID: '1', img: 'rims2', name: '', price: "" },
    { ID: '2', img: 'rims3', name: '', price: "" },
  ];

  constructor(private carData: CarDataService, private carService: SelectedCarService) { }

  ngOnInit() {
    //load images on rims array from carImages
    // this.carData.loadRims().subscribe(res => {
    let data: any = this.carData.getRims();
    let modelid = this.carService.getModelID();
    console.log(modelid);
    for (let dat of data) {
      console.log(dat.ram == undefined);
      if (dat.description != undefined) {
        if (modelid != 0 && dat.ram == undefined) {
          this.rims[dat.rimId].img = dat.path;
          this.rims[dat.rimId].name = dat.description;
          this.rims[dat.rimId].price = dat.price;
        } else {
          if (modelid == 0 && dat.ram != undefined) {
            this.rims[dat.rimId].img = dat.path;
            this.rims[dat.rimId].name = dat.description;
            this.rims[dat.rimId].price = dat.price;
          }

        }
      }
    }
    // });
    //Need to update selected Rims to be sinchronized with the selected car when model change
    this.carService.specs.subscribe(specs => {
      this.selectedRim = specs.rims;
    });
  }

  onRimChange(rims) {
    this.selectedRim.name = this.rims[rims.ID].name;
    this.selectedRim.rimId = rims.ID;
    this.selectedRim.price = this.rims[rims.ID].price;
    this.rimsChanged.emit(this.selectedRim);
  }

}
