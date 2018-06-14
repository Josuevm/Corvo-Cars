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

  nameIsIncorrect = false;
  emailIsIncorrect = false;
  messageIsIncorrect = false;

  showMessage : boolean = false;
  alert :String = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.changeNavStyle();
  }

  sendMessage(){
    this.nameValidator();
    this.emailValidator();
    this.messageValidator();
    if(!this.nameIsIncorrect &&
      !this.emailIsIncorrect &&
      !this.messageIsIncorrect){
          this.alert = "Thank you for contacting us!"
          this.http.post('/contact_email/',this.message).subscribe(res=>{});
          this.showMessage = true;
    }
    
  }

  hideAlert(){
    this.showMessage = false;
  }

  

  emailValidator(){
    let emailPattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
    let valid = true;
    this.emailIsIncorrect = false;
    if(this.message.email.length === 0){
      this.alert = "You need to fill all the information";
      this.showMessage = true;
      this.emailIsIncorrect = true;
      valid = false;
    }else if(!emailPattern.test(this.message.email)){
      this.alert = "E-mail format is incorrect";
      this.showMessage = true;
      this.emailIsIncorrect = true;
      valid = false;
    }
  }

  nameValidator(){
    let valid = true;
    let namePattern = new RegExp("^[a-zA-Z ]+$");
    this.nameIsIncorrect = false;
    if(this.message.name.length === 0){
      this.alert = "You need to fill all the information";
      this.showMessage = true;
      this.nameIsIncorrect = true;
      valid = false;
    }else if(!namePattern.test(this.message.name)){
      this.alert = "Name must contain only letters";
      this.showMessage = true;
      this.nameIsIncorrect = true;
      valid = false;
    }
  }

  messageValidator(){
    let valid = true;
    this.messageIsIncorrect = false;
    if(this.message.body.length === 0){
      this.alert = "You need to fill all the information";
      this.showMessage = true;
      this.messageIsIncorrect = true;
      valid = false;
    }
  }

  changeNavStyle(){
    document.getElementById("navbar").style.background = "#222";
    document.getElementById("navLink").style.color = "#fff";
    document.getElementById("navLink2").style.color = "#fff";
    document.getElementById("navLink3").style.color = "#fff";
  }
}
