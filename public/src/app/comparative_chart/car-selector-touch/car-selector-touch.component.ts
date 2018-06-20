import { Component, OnInit } from '@angular/core';
import { CarDataService } from '../../car-data.service';


@Component({
  selector: 'app-car-selector-touch',
  templateUrl: './car-selector-touch.component.html',
  styleUrls: ['./car-selector-touch.component.css']
})
export class CarSelectorTouchComponent implements OnInit {

  models: any;
  firstIsDropped: Boolean = false;
  secondIsDropped: Boolean = false;
  firstData: any;
  secondData: any;
  firstCarName = null;
  secondCarName = null;
  cars = {};

  constructor(private carData: CarDataService) {
  }

  ngOnInit() {
    this.carData.getModels().subscribe(res => {
      this.models = res
    });
  }

  areComparable() { //Checks if there are 2 options selected. If is the case emits an object with both car names
    this.cars = {
      option1: this.firstCarName,
      option2: this.secondCarName
    }
  }

  selectCar(car) {
    console.log(car)
    if (!this.firstIsDropped && !this.secondIsDropped) {

      this.firstData = car;
      this.firstCarName = car.name;
      this.firstIsDropped = true;

    } else if (this.firstIsDropped && !this.secondIsDropped) {

      if (!(this.firstCarName == car.name)) {
        this.secondData = car;
        this.secondCarName = car.name;
        this.secondIsDropped = true;
      }

    } else if (!this.firstIsDropped && this.secondIsDropped) {
      if (!(this.secondCarName == car.name)) {
        this.firstData = car;
        this.firstCarName = car.name;
        this.firstIsDropped = true;
      }
    }
    this.areComparable();
  }

  deleteFirstData() {
    this.firstIsDropped = false;
    this.firstData = null;
    this.firstCarName = null;
    this.areComparable();
  }

  deleteSecondData() {
    this.secondIsDropped = false;
    this.secondData = null;
    this.secondCarName = null;
    this.areComparable();
  }

  validateSelect(selectZone) {
    let show = false;
    console.log("Select Zone:", selectZone)
    switch (selectZone) {
      case "1":
        if (this.firstIsDropped && this.firstData) {
          show = true
        } else {
          show = false;
        }
        break;
      case "2":
        if (this.secondIsDropped && this.secondData) {
          show = true
        } else {
          show = false;
        }
        break;
    }
    console.log("Show:", show)
    return show;
  }

}
