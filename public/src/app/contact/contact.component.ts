import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number = 10.04261876;
  lng: number = -84.30005225;
  message = {
    name: "",
    email: "",
    body: ""
  }

  showMessage : boolean = false;
  alert :String = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.changeNavStyle();
  }

  sendMessage(){
    if(this.message.name.length !== 0 ||
      this.message.email.length !== 0 ||
      this.message.body.length !== 0){

        
        this.alert = "Thank you for contacting us!"
        this.http.post('/contact_email/',this.message).subscribe(res=>{});
        this.showMessage = true;

    }else{
      this.alert = "You need to fill all the information";
      this.showMessage = true;
    }
    
  }

  hideAlert(){
    this.showMessage = false;
  }

  changeNavStyle(){
    document.getElementById("navbar").style.background = "#222";
    document.getElementById("navLink").style.color = "#fff";
    document.getElementById("navLink1").style.color = "#fff";
    document.getElementById("navLink2").style.color = "#fff";
    document.getElementById("navLink3").style.color = "#fff";
  }
}
