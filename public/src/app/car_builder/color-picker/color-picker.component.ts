import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  selectedColor: string;

  @Output() colorChanged = new EventEmitter();

  colors = [
    { id: 'black', hexcode: 'linear-gradient(black, dimgray, black)' },
    { id: 'gray', hexcode: 'linear-gradient(darkslategray, darkgray, darkslategray)' },
    { id: 'white', hexcode: 'linear-gradient(gray, white, gray)' },
    { id: 'yellow', hexcode: 'linear-gradient(orange, yellow, orange)' },
    { id: 'red', hexcode: 'linear-gradient(black, firebrick, black)' },
    { id: 'purple', hexcode: 'linear-gradient(black, mediumpurple, black)' },
    { id: 'blue', hexcode: 'linear-gradient(black, darkblue, black)' },
    { id: 'green', hexcode: 'linear-gradient(gray, lime, gray)' }
  ];

  onColorChange(colorId) {
    this.selectedColor = colorId;
    this.colorChanged.emit(this.selectedColor);
  }

  constructor() { }

  ngOnInit() {

  }

}
