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
  subT = 0;
  specs : any;

  details =[]

  constructor(private modalService: BsModalService, private selectedCarSrv: SelectedCarService) { }


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
  hideModal(){ //not working
   
  }
  calculateTotal(){ 
    this.getExtraP()
    this.subT+=parseInt(this.specs.motor.price) +parseInt(this.specs.inside.price)+parseInt(this.specs.rims.price);
    
  }


}
