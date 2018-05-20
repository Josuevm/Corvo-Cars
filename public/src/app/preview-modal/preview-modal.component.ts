import { Component, OnInit, Output, ViewChild} from '@angular/core';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { SelectedCarService } from '../selected-car.service'

@Component({
  selector: 'app-preview-modal',
  templateUrl: './preview-modal.component.html',
  styleUrls: ['./preview-modal.component.css']
})
export class PreviewModalComponent implements OnInit {

  bsModalRef: BsModalRef;

  specs = {
    color: "",
    extras: [],
    inside: "",
    name: "",
    rims: "",
    motor: ""
  };

  details =[]

  constructor(private modalService: BsModalService, private selectedCarSrv: SelectedCarService) { }


  ngOnInit() {
    this.selectedCarSrv.specs.subscribe(res => {
      this.specs = res;
      this.getDetails();
    });
  }

  getDetails(){
    this.details =[
      {
        name: 'Inside',
        desc: this.specs.inside,
        icon: 'drive_eta'
      },
      {
        name: 'Rims',
        desc: this.specs.rims,
        icon: 'brightness_high'
      },
      {
        name: 'Motor',
        desc: this.specs.motor,
        icon: 'build'
      },
      {
        name: 'Extras',
        desc: this.specs.extras,
        icon: 'playlist_add'
      },
    ]
  }

  hideModal(){ //not working
    
  }


}