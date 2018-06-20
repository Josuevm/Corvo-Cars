import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SelectedCarService } from '../selected-car.service';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-pdf-preview',
  templateUrl: './pdf-preview.component.html',
  styleUrls: ['./pdf-preview.component.css']
})
export class PdfPreviewComponent implements OnInit {

  subT = 0;
  specs : any;
  details =[]

  constructor(private selectedCarSrv: SelectedCarService) { }


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
  let subT = 0
  for(let extra of this.specs.extras){
    subT+=parseInt(extra.price);
  }
  return subT
}


  calculateTotal(){ 
    this.getExtraP()
    this.subT+=parseInt(this.specs.motor.price) +parseInt(this.specs.inside.price)+parseInt(this.specs.rims.price);
    
  }

  downloadPDF() {
    let element = document.getElementById("PDFcontent");
    html2canvas(element).then(function(canvas) {
        // Export the canvas to its data URI representation
        let base64image = canvas.toDataURL();
        // Open the image in a new window
        window.open(base64image , "_blank");
        let pdf = new jsPDF();
        pdf.addImage(base64image, 10, 10, 160, 200);
        pdf.save('CorvoCar.pdf');
    });
  }

}