import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparative-view',
  templateUrl: './comparative-view.component.html',
  styleUrls: ['./comparative-view.component.css']
})
export class ComparativeViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.changeNavStyle();
  }

  changeNavStyle(){
    document.getElementById("navbar").style.background = "#222";
    document.getElementById("navLink").style.color = "#fff";
    document.getElementById("navLink1").style.color = "#fff";
    document.getElementById("navLink2").style.color = "#fff";
    document.getElementById("navLink3").style.color = "#fff";
  }

}
