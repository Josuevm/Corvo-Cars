import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  section: string;
  selectedModelName: string;

  constructor() { }

  onModelChanged(modelName) {
    this.selectedModelName = modelName;
    this.section = 'details';
  }

  onCustomize() {
    this.section = 'builder';
  }

  ngOnInit() {
  }

}
