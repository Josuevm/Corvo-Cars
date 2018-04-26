import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

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
    ModelInfoComponent
   
  ],
  imports: [
    Ng4TwitterTimelineModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBt-_YitTA4qlfeIkQbaqZOXNiERL6USuA'
    })
  ],
  providers: [CarDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
