import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'car-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  constructor() { }

  selectedOption: String;
  is4x4: false;

  options = [
    {
      name: 'color',
      icon: 'color_lens'
    },
    {
      name: 'rims',
      icon: 'brightness_high'
    },
    {
      name: 'inside',
      icon: 'drive_eta'
    },
    {
      name: 'motor',
      icon: 'build'
    },
    {
      name: 'extras',
      icon: 'playlist_add'
    }
  ];

  ngOnInit() {

  }
  
}
