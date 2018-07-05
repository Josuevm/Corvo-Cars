import { Component, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
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
  specs: any;
  generatingPDF: boolean = false;

  details = []

  constructor(private modalService: BsModalService,
    private selectedCarSrv: SelectedCarService,
    private router: Router) { }


  ngOnInit() {
    this.subT = 0;
    this.selectedCarSrv.specs.subscribe(res => {
      this.specs = res;
      this.calculateTotal();
      this.getDetails();


    });


  }


  getDetails() {


    this.details = [
      {
        name: 'Inside',
        desc: this.specs.inside.name,
        price: this.specs.inside.price,
        icon: 'drive_eta'

      },
      {
        name: 'Rims',
        desc: this.specs.rims.name,
        price: this.specs.rims.price,
        icon: 'brightness_high'
      },
      {
        name: 'Color',
        desc: this.specs.color.name,
        price: "0",
        icon: 'color_lens'
      },
      {
        name: 'Motor',
        desc: this.specs.motor.name,
        price: this.specs.motor.price,
        icon: 'build'
      },
      {
        name: 'Extras',
        desc: this.getExtras(),
        price: this.getExtraP1(),
        icon: 'playlist_add'
      },
      {
        name: 'Total',
        price: this.subT,
        icon: 'playlist_add'
      },
    ]
  }

  getExtras() {
    let extras = [];
    for (let extra of this.specs.extras) {
      extras.push(extra.name)

    }
    return extras;
  }
  getExtraP() {
    for (let extra of this.specs.extras) {
      this.subT += parseInt(extra.price);
    }
  }

  getExtraP1() {
    //Imparatus
    let subT = 0

    for (let extra of this.specs.extras) {
      subT += parseInt(extra.price);
    }

    return subT
  }


  calculateTotal() {
    this.getExtraP()
    if (this.selectedCarSrv.getModelID() == 1) {
      this.subT += 22000
      //imperiale
    } else if (this.selectedCarSrv.getModelID() == 2) {
      this.subT += 250000
    } else {
      this.subT += 34000
    }
    this.subT += parseInt(this.specs.motor.price) + parseInt(this.specs.inside.price) + parseInt(this.specs.rims.price);

  }

  downloadPDF() {

    let clone = $("#PDFcontent").clone();
    let cloneCar = $("#car").clone();
    clone.css({
      height: 2000,
      "font-size": "2vw",
      "color": "white",
      "text-transform": "uppercase",
      "font-family": 'Rajdhani, sans-serif'

    }).appendTo("#containerPDF");

    cloneCar.css({
      width: 350,
      "position": "absolute",
      "margin-top": "-80%",
      "left": "15%"
    }).appendTo("#containerPDF");

    let pdfC = $("#containerPDF");

    var pdf = new jsPDF();

    pdf.addHTML(pdfC, function () {
      pdf.save('web.pdf');
      clone.remove();
      cloneCar.remove();
    });

  }


}
