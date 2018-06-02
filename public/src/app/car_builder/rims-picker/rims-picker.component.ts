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

  //must Load images in this array
  rims = [
    { id: '0', img: 'rims1', description: '' },
    { id: '1', img: 'rims2', description: '' },
    { id: '2', img: 'rims3', description: '' },
  ];

  constructor(private carData: CarDataService, private carService: SelectedCarService) {}

  ngOnInit() {
    //load images on rims array from carImages
    this.carData.getRims().subscribe(res => {
      let data: any = res;
      for (let dat of data) {
          if(dat.description != undefined){
            this.rims[dat.rimId].img = dat.path;
            this.rims[dat.rimId].description = dat.description;
          }
       }
    });
    //Need to update selected Rims to be sinchronized with the selected car when model change
    this.carService.specs.subscribe(specs => {
      this.selectedRimID = specs.rimsID;
      this.description = specs.rims;
    });
  }

  onRimChange(rims) {
    this.selectedRimID = rims.id;
    this.description = rims.description
    this.rimsChanged.emit(rims);//send the rimID to the build screen
  }

}
