import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CarDataService } from '../../car-data.service';

@Component({
  selector: 'app-car-selector',
  templateUrl: './car-selector.component.html',
  styleUrls: ['./car-selector.component.css']
})
export class CarSelectorComponent implements OnInit {

  @Output() carsSelected = new EventEmitter();
  @Output() returnedCar = new EventEmitter();
  models:any;
  firstIsDropped: Boolean = false;
  secondIsDropped: Boolean = false;
  firstData : any;
  secondData :any;
  firstCarName = "";
  secondCarName= " "

  constructor(private carData: CarDataService) { }

  ngOnInit() {
    this.carData.getModels().subscribe(res =>{
      this.models = res
    });
  }

  areComparable(){ //Checks if there are 2 options selected. If is the case emits an object with both car names
    if(this.firstData && this.secondData){
      let cars = {
        option1: this.firstData.dragData.name,
        option2: this.secondData.dragData.name
      }
      this.carsSelected.emit(cars);
    }
  }

  dropedFirst($event:any){ 
    this.firstIsDropped=true;
    this.firstData = $event;
    this.firstCarName = this.firstData.dragData.name;
    this.areComparable();
  }

  dropedSecond($event){
    this.secondIsDropped=true;
    this.secondData = $event;
    this.secondCarName = this.secondData.dragData.name;
    this.areComparable();
  }

  deleteFirstData(){
    this.firstIsDropped = false;
    this.firstData = null;
    this.firstCarName = "";
    this.returnedCar.emit({});
  }

  deleteSecondData(){
    this.secondIsDropped = false;
    this.secondData = null;
    this.secondCarName = "";
    this.returnedCar.emit({});
  }

}
