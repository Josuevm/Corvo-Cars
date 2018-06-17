import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {DndModule} from 'ng2-dnd';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';
import { BuilderComponent } from './car_builder/builder/builder.component';
import { ColorPickerComponent } from './car_builder/color-picker/color-picker.component';
import { BuildScreenComponent } from './car_builder/build-screen/build-screen.component';
import { ModelInfoComponent } from './model-info/model-info.component';
import { AgmCoreModule } from '@agm/core';
import { CarDataService } from './car-data.service';
import { SelectedCarService } from './selected-car.service';
import { GeneralFeaturePickerComponent } from './car_builder/general-feature-picker/general-feature-picker.component';
import { RimsPickerComponent } from './car_builder/rims-picker/rims-picker.component';
import { PreviewModalComponent } from './preview-modal/preview-modal.component';
import { ExtrasPickerComponent } from './car_builder/extras-picker/extras-picker.component';
import { CarComponent } from './car_builder/car/car.component'
import { CarSelectorComponent } from './comparative_chart/car-selector/car-selector.component';
import { ComparativeViewComponent } from './comparative_chart/comparative-view/comparative-view.component';
import { ComparativeDetailsComponent } from './comparative_chart/comparative-details/comparative-details.component';
import { CarSelectorTouchComponent } from './comparative_chart/car-selector-touch/car-selector-touch.component'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ModelsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    BuilderComponent,
    ColorPickerComponent,
    BuildScreenComponent,
    ModelInfoComponent,
    GeneralFeaturePickerComponent,
    RimsPickerComponent,
    PreviewModalComponent,
    ExtrasPickerComponent,
    CarComponent,
    CarSelectorComponent,
    ComparativeViewComponent,
    ComparativeDetailsComponent,
    CarSelectorTouchComponent

  ],
  imports: [
    Ng4TwitterTimelineModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBt-_YitTA4qlfeIkQbaqZOXNiERL6USuA'
    }),
    ModalModule.forRoot(),
    DndModule.forRoot()
  ],
  providers: [
    CarDataService,
    SelectedCarService
  ],
  bootstrap: [AppComponent],
  entryComponents: [PreviewModalComponent]
})
export class AppModule { }
