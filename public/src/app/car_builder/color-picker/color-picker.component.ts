import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  selectedColor: any;

  @Output() colorChanged = new EventEmitter();

  colors = [
    { ID: '0', name: 'black', hexcode: 'linear-gradient(black, dimgray, black)' },
    { ID: '1', name: 'gray', hexcode: 'linear-gradient(darkslategray, darkgray, darkslategray)' },
    { ID: '2', name: 'white', hexcode: 'linear-gradient(gray, white, gray)' },
    { ID: '3', name: 'yellow', hexcode: 'linear-gradient(orange, yellow, orange)' },
    { ID: '4', name: 'red', hexcode: 'linear-gradient(black, firebrick, black)' },
    { ID: '5', name: 'purple', hexcode: 'linear-gradient(black, mediumpurple, black)' },
    { ID: '6', name: 'blue', hexcode: 'linear-gradient(black, darkblue, black)' },
    { ID: '7', name: 'green', hexcode: 'linear-gradient(gray, lime, gray)' }
  ];

  onColorChange(color) {
    this.selectedColor = color;
    this.colorChanged.emit(this.selectedColor);
  }

  constructor() { }

  ngOnInit() {
    this.selectedColor ={ ID: '2', name: 'white'}
  }

}
