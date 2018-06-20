import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-comparative-view',
  templateUrl: './comparative-view.component.html',
  styleUrls: ['./comparative-view.component.css']
})
export class ComparativeViewComponent implements OnInit {

  isTouch = false;

  constructor() { }

  ngOnInit() {
    this.changeNavStyle();
    this.isDraggable();
  }

  @HostListener('window:resize')
  onResize() {
    this.isDraggable();
  }

  changeNavStyle() {
    document.getElementById("navbar").style.background = "#222";
    document.getElementById("navLink").style.color = "#fff";
    document.getElementById("navLink2").style.color = "#fff";
    document.getElementById("navLink3").style.color = "#fff";
  }

  isDraggable() {
    var screenWidth = window.innerWidth;
    if (screenWidth <= 1024) {
      this.isTouch = true;
    } else {
      this.isTouch = false;
    }
  }

}
