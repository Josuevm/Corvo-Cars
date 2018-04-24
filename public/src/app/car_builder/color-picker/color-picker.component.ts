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
    { id: 'black', hexcode: '#010101' },
    { id: 'red', hexcode: '#E50101' },
    { id: 'white', hexcode: '#FEFEFE' },
    { id: 'blue', hexcode: '#1301B5' },
    { id: 'yellow', hexcode: '#F7FE32' }
  ];

  onColorChange(colorId) {
    this.selectedColor = colorId;
    this.colorChanged.emit(this.selectedColor);

    switch (colorId) {
      case 'black':
        document.getElementById("bodyImage").style.filter = "opacity(.5) drop-shadow(0 0 0 black)";
        console.log("negro");
        break;
      case 'red':
        document.getElementById("bodyImage").style.filter = "opacity(.5) drop-shadow(0 0 0 red)";
        console.log("red");
        break;
      case 'white':
        document.getElementById("bodyImage").style.filter = "opacity(.5) drop-shadow(0 0 0 white)";
        console.log("white");
        break;
      case 'blue':
        document.getElementById("bodyImage").style.filter = "opacity(.5) drop-shadow(0 0 0 blue)";
        console.log("blue");
        break;
      case 'yellow':
        document.getElementById("bodyImage").style.filter = "opacity(.5) drop-shadow(0 0 0 yellow)";
        console.log("yellow");
        break;
    }

  }

  constructor() { }

  ngOnInit() {

  }

}
