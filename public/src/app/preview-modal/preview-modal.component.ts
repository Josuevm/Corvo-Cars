import { Component, OnInit, Output, ViewChild,ViewEncapsulation} from '@angular/core';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { SelectedCarService } from '../selected-car.service'

@Component({
  selector: 'app-preview-modal',
  templateUrl: './preview-modal.component.html',
  styleUrls: ['./preview-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PreviewModalComponent implements OnInit {

  bsModalRef: BsModalRef;

  specs : any;

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
        desc: this.specs.inside.name,
        icon: 'drive_eta'
      },
      {
        name: 'Rims',
        desc: this.specs.rims.name,
        icon: 'brightness_high'
      },
      {
        name: 'Motor',
        desc: this.specs.motor.name,
        icon: 'build'
      },
      {
        name: 'Extras',
        desc: this.getExtras(),
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

  hideModal(){ //not working
    
  }


}
