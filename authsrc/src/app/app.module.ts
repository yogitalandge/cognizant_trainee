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
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import { LogOutComponent } from './logout/logout.component';
import { ProductBaseComponent } from './product-base/product-base.component';


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
    ProductBaseComponent,
    ProductListComponent,
    ProductEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
