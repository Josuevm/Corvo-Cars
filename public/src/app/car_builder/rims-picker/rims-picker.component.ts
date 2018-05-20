import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CarDataService } from '../../car-data.service'


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

  data: any;

  constructor(private carData: CarDataService) {

  }

  ngOnInit() {
    //load images on rims array from carImages
    this.carData.getRims().subscribe(res => {
      this.data = res;
      for (let dat of this.data) {
          if(dat.description != undefined){
            this.rims[dat.rimId].img = dat.path;
            this.rims[dat.rimId].description = dat.description;
          }
       }
    
    });
  }

  onRimChange(rims) {
    this.selectedRimID = rims.id;
    this.description = rims.description
    this.rimsChanged.emit(rims);//send the rimID to the build screen
  }

}
