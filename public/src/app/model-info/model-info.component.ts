import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CarDataService } from '../car-data.service';

@Component({
  selector: 'app-model-info',
  templateUrl: './model-info.component.html',
  styleUrls: ['./model-info.component.css']
})
export class ModelInfoComponent implements OnInit {

  features: any;

  @Input('model')
  model: String =""

  constructor(private carData: CarDataService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.model.length !== 0){
      this.carData.getFeatures(this.model).subscribe(res =>{ this.features = res});
    }
  }

  getID(feature){
    switch(feature){
      case "Airbags": return "air";
      case "Eight Airbags" : return "air";
      case "Automatic": return "auto";
      case "Manual": return "manual";
      case "Double Cab": return "double";
      case "Voice activated controls": return "voice";
      case "Electric Rearview Mirror": return "rear";
      case "Warranty: 4 years" : return "warranty"; 
      case "Warranty: 5 years" : return "warranty"; 
      case "Warranty: 8 years" : return "warranty"; 
    }
  }

  // getFeatures() {
  //   if (this.model.length !== 0) {
  //     this.http.get('/car_models/features/'+this.model)
  //     .subscribe(data => {
  //         this.features = data;
  //         console.log(this.features);
  //     })
  //   }
  // }
}
