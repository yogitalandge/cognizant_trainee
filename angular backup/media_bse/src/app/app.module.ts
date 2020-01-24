import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { MediaListComponent } from './media-list/media-list.component';

import { MediaBaseNewComponent } from './media-base-new/media-base-new.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    MediaListComponent,
    
    MediaBaseNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
