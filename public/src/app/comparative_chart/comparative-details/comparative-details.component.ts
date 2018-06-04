import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CarDataService } from '../../car-data.service';

@Component({
  selector: 'app-comparative-details',
  templateUrl: './comparative-details.component.html',
  styleUrls: ['./comparative-details.component.css']
})
export class ComparativeDetailsComponent implements OnInit {

  @Input() cars;
  car1 = {};
  car2 = {};

  constructor(private carData : CarDataService) { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.getComparedCarsDetails();
  }

  getComparedCarsDetails(){
    console.log("Cars:",this.cars);
    if(this.cars.option1){
      this.carData.getModel(this.cars.option1).subscribe(res=> this.car1 = res );
    }else{
      this.car1 = null;
    }

    if(this.cars.option2){
      this.carData.getModel(this.cars.option2).subscribe(res=> this.car2 = res);
    }else{
      this.car2 = null;
    }
  }

}
