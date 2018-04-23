import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedModelID: Number = 1;

  onModelIDChanged(modelID) {
    this.selectedModelID = modelID;
  }

  constructor() { }

  ngOnInit() {
  }

}
