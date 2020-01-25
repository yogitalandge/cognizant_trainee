import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormModelWayComponent } from './form-model-way/form-model-way.component';
import { from } from 'rxjs';
import { FormTemplateWayComponent } from './form-template-way/form-template-way.component';

@NgModule({
  declarations: [
    AppComponent,
    FormModelWayComponent,
    FormTemplateWayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
