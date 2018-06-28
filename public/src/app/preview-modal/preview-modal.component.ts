import { Component, OnInit, Output, ViewChild,ViewEncapsulation} from '@angular/core';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { SelectedCarService } from '../selected-car.service';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview-modal',
  templateUrl: './preview-modal.component.html',
  styleUrls: ['./preview-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PreviewModalComponent implements OnInit {

  bsModalRef: BsModalRef;
  subT = 0;
  specs : any;
  generatingPDF: boolean = false;

  details =[]

  constructor(private modalService: BsModalService, 
    private selectedCarSrv: SelectedCarService,
    private router: Router) { }


  ngOnInit() {
    this.subT=0;
    this.selectedCarSrv.specs.subscribe(res => {
      this.specs = res;
      this.getDetails();
      
    });
    this.calculateTotal();

  }


  getDetails(){
    
 
    this.details =[
      {
        name: 'Inside',
        desc: this.specs.inside.name,
        price:this.specs.inside.price,
        icon: 'drive_eta'

      },
      {
        name: 'Rims',
        desc: this.specs.rims.name,
        price:this.specs.rims.price,
        icon: 'brightness_high'
      },
      {
        name: 'Motor',
        desc: this.specs.motor.name,
        price:this.specs.motor.price,
        icon: 'build'
      },
      {
        name: 'Extras',
        desc: this.getExtras(),
        price:this.getExtraP1(),
        icon: 'playlist_add'
      },
    ]
  }

  getExtras(){
    let extras = [];
    for(let extra of this.specs.extras){
      extras.push(extra.name)

    }
    return extras;
  }
getExtraP(){
  for(let extra of this.specs.extras){
    this.subT+=parseInt(extra.price);
  }
}

getExtraP1(){
  //Imparatus
  let subT = 0

  for(let extra of this.specs.extras){
    subT+=parseInt(extra.price);
  }
  
  return subT
}


  calculateTotal(){ 
    this.getExtraP()
    if (this.selectedCarSrv.getModelID() == 1) {
      this.subT+= 15000  
      //imperiale
      } else if(this.selectedCarSrv.getModelID() == 2){
      this.subT += 20000
      }else{
      this.subT+=13000  
      }
    this.subT+=parseInt(this.specs.motor.price) +parseInt(this.specs.inside.price)+parseInt(this.specs.rims.price);
    
  }

  downloadPDF() {
    let element = document.getElementById("PDFcontent");
    element.style.backgroundColor = 'white';
    element.style.color = 'black';
    let pdf = new jsPDF();
    html2canvas(element).then(function(canvas) {
        element.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        element.style.color = 'white';
        // Export the canvas to its data URI representation
        let base64image = canvas.toDataURL();
        pdf.addImage(base64image, 45, 10, 110, 90);
        pdf.save('CorvoCar.pdf');
    });
  }


}
