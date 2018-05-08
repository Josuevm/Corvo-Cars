import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CarDataService } from '../../../car-data.service';

@Component({
  selector: 'rims-picker',
  templateUrl: './rims-picker.component.html',
  styleUrls: ['./rims-picker.component.css']
})
export class RimsPickerComponent implements OnInit {

  @Output("rimsChanged") rimsChanged = new EventEmitter();

  selectedRimID: string;

  //must Load images in this array
  rims = [
    { id: '1', img: 'rims1' },
    { id: '2', img: 'rims2' },
    { id: '3', img: 'rims3' },
    { id: '4', img: 'rims4' },
  ];

  constructor(private carImages: CarDataService) { }

  ngOnInit() {
    //load images on rims array from carImages
    // let rimsImages = this.carImages.getRims();
    // for(let rim of this.rims) {
    //   rim.img = rimsImages.pickerImages[rim.id];
    // }
  }

  onRimChange(rims) {
    this.selectedRimID = rims.id;
    this.rimsChanged.emit(rims.id);//send the rimID to the build screen
  }

}
