import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { SearchReasultComponent } from './search-reasult/search-reasult.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';


import { LogOutComponent } from './logout/logout.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductUpdateComponent } from './product/product-update/product-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    SearchReasultComponent,
    LoginComponent,
    LogOutComponent,
    ErrorComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductUpdateComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
