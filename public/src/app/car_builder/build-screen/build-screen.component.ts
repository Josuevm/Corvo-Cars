import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgStyle } from '@angular/common';
import {
  DomSanitizer, SafeHtml,
  SafeUrl,
  SafeStyle
} from '@angular/platform-browser';
import { SelectedCarService } from '../../selected-car.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PreviewModalComponent } from '../../preview-modal/preview-modal.component';
import { CarDataService } from '../../car-data.service';
import { ColorPickerComponent } from '../color-picker/color-picker.component';

@Component({
  selector: 'build-screen',
  templateUrl: './build-screen.component.html',
  styleUrls: ['./build-screen.component.css']
})
export class BuildScreenComponent implements OnInit {

  @Input('buildOption') buildOption;

  specs: any;

  bsModalRef: BsModalRef;

  rimPath: any;

  constructor(private sanitizer: DomSanitizer,
    private selectedCarSrv: SelectedCarService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.selectedCarSrv.specs.subscribe(res => this.specs = res);
    this.specs = { //cambiar estp
      ...this.specs,
      rimsID: 1
    }
    this.selectedCarSrv.changeSpecs(this.specs);
  }

  ngOnChanges() {
    //cambia el id, de una vez en cadena se cambia lo grafico
    // this.specs = { //cambiar esto
    //   ...this.specs,
    //   modelID: this.model
    // }
    // this.selectedCarSrv.changeSpecs(this.specs);
  }

  showPreview() {
    this.bsModalRef = this.modalService.show(PreviewModalComponent,{class: 'modal-preview'});
  }

  setColor(color) {
    let data ={ID: color.ID, name: color.name};
    this.specs = {
      ...this.specs,
      color: data
    }
    this.selectedCarSrv.changeSpecs(this.specs);
  }

  setRims(rims) {
    this.specs = {
      ...this.specs,
      rims: rims,
    }
    this.selectedCarSrv.changeSpecs(this.specs);
  }

}
