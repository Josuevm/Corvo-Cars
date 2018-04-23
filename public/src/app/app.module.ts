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
import { ModelInfoComponent } from './model-info/model-info.component';
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
    ModelInfoComponent
   
  ],
  imports: [
    Ng4TwitterTimelineModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CarDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
