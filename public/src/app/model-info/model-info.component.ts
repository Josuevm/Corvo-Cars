import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-model-info',
  templateUrl: './model-info.component.html',
  styleUrls: ['./model-info.component.css']
})
export class ModelInfoComponent implements OnInit {
  @Input('model')
  model: String ="Corvo imperiale"

  constructor() { }

  ngOnInit() {
  }

}
