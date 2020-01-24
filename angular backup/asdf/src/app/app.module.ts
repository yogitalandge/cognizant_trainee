import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductAsdfComponent } from './product-asdf/product-asdf.component';
import { ProdListComponent } from './prod-list/prod-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAsdfComponent,
    ProdListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
