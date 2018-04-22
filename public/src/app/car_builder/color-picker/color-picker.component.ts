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
    {id: 'black', hexcode: '#010101'},
    {id: 'red', hexcode: '#E50101'}, 
    {id: 'white', hexcode: '#FEFEFE'}, 
    {id: 'blue', hexcode: '#1301B5'}, 
    {id: 'yellow', hexcode: '#F7FE32'}
  ];

  onClick() {
    console.log(this.selectedColor);
    this.colorChanged.emit(this.selectedColor);
  }

  constructor() { }

  ngOnInit() {

  }

}
