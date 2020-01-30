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


import { HttpClientModule } from '@angular/common/http';

import { MediaListComponent } from './media/media-list/media-list.component';
import { MediaAddComponent } from './media/media-add/media-add.component';
import { MediaUpdateComponent } from './media/media-update/media-update.component';


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
   
    MediaListComponent,
    MediaAddComponent,
    MediaUpdateComponent,
   
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
