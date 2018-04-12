import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  message = {
    name: "",
    email: "",
    body: ""
  }

  constructor() { }

  ngOnInit() {
    this.changeNavStyle();
  }

  sendMessage(){
    alert("Name:"+this.message.name+", Email: "+this.message.email+" ,MEssage:"+this.message.body)
  }

  changeNavStyle(){
    document.getElementById("navbar").style.background = "#222";
    document.getElementById("navLink").style.color = "#fff";
    document.getElementById("navLink1").style.color = "#fff";
    document.getElementById("navLink2").style.color = "#fff";
    document.getElementById("navLink3").style.color = "#fff";
  }
}
