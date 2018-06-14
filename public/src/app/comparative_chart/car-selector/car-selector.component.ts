import { Component, OnInit, EventEmitter, Output, AfterViewChecked, ElementRef, HostListener } from '@angular/core';
import { CarDataService } from '../../car-data.service';

@Component({
  selector: 'app-car-selector',
  templateUrl: './car-selector.component.html',
  styleUrls: ['./car-selector.component.css']
})
export class CarSelectorComponent implements OnInit {

  models: any;
  firstIsDropped: Boolean = false;
  secondIsDropped: Boolean = false;
  firstData: any;
  secondData: any;
  firstCarName = null;
  secondCarName = null;
  cars = {};

  constructor(private carData: CarDataService, private el: ElementRef) { }

  ngOnInit() {
    this.carData.getModels().subscribe(res => {
      this.models = res
    });
  }

  ngAfterViewChecked() {
    this.matchHeight();
  }

  @HostListener('window:resize')
  onResize() {
    console.log("Resize-...........")
    this.matchHeight();
  }

  areComparable() { //Checks if there are 2 options selected. If is the case emits an object with both car names
    this.cars = {
      option1: this.firstCarName,
      option2: this.secondCarName
    }
  }

  dropedFirst($event: any) {
    this.firstData = $event;
    if (this.firstData.dragData) {
      this.firstIsDropped = true;
      this.firstCarName = this.firstData.dragData.name;
      this.areComparable();
    }
  }

  dropedSecond($event) {
    this.secondData = $event;
    if (this.secondData.dragData) {
      this.secondIsDropped = true;
      this.secondCarName = this.secondData.dragData.name;
      this.areComparable();
    }
  }

  deleteFirstData() {
    this.firstIsDropped = false;
    this.firstData = null;
    this.firstCarName = null;
    this.areComparable();
  }

  deleteSecondData() {
    this.secondIsDropped = false;
    this.secondData = null;
    this.secondCarName = null;
    this.areComparable();
  }

  isDraggable(name) {
    if (name == this.firstCarName || name == this.secondCarName) {
      return false;
    } else {
      return true;
    }
  }

  validateDrop(dropZone) {
    let show = false;
    switch (dropZone) {
      case "1":
        if (this.firstIsDropped && this.firstData) {
          show = true
        } else {
          show = false;
        }
        break;
      case "2":
        if (this.secondIsDropped && this.secondData) {
          show = true
        } else {
          show = false;
        }
        break;
    }
    return show;
  }

  matchHeight() {
    const children = document.getElementsByClassName("cont");

    if (!children) return;

    Array.from(children).forEach((x: HTMLElement) => {
      x.style.height = 'initial';
    });

    const itemHeights = Array.from(children)
      .map(x => x.getBoundingClientRect().height);

    const maxHeight = itemHeights.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    }, 0);

    Array.from(children)
      .forEach((x: HTMLElement) => x.style.height = `${maxHeight}px`);
  }

}
