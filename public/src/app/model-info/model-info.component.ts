import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-model-info',
  templateUrl: './model-info.component.html',
  styleUrls: ['./model-info.component.css']
})
export class ModelInfoComponent implements OnInit {

  features: any;

  @Input('model')
  model: String =""

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.getFeatures();
  }

  getFeatures() {
    if (this.model.length !== 0) {
      this.http.get('/car_models/features/'+this.model)
      .subscribe(data => {
          this.features = data;
      })
    }
  }
 
}
