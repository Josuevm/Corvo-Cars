import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ComparativeViewComponent } from './comparative_chart/comparative-view/comparative-view.component'
import { PdfPreviewComponent } from './pdf-preview/pdf-preview.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'comparative_chart',
    component: ComparativeViewComponent
  },
  {
    path: 'pdf_preview',
    component: PdfPreviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
