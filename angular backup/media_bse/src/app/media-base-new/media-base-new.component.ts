import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Media } from '../model/media.model';

@Component({
  selector: 'app-media-base-new',
  templateUrl: './media-base-new.component.html',
  styleUrls: ['./media-base-new.component.css']
})
export class MediaBaseNewComponent implements OnInit {
  @Output()
  submit_info : EventEmitter<Media>;

  constructor() { 
    // initialize event object
    this.submit_info = new EventEmitter();
  }

  ngOnInit() {
  }

  saveMedia(txtTitle:HTMLInputElement, txtDescription:HTMLInputElement,  txtTag:HTMLInputElement):void{
    // create a new Product Object from coming values 
    let media = new Media(txtTitle.value, txtDescription.value, txtTag.value);
    // send product object to Product-base component
    // by invocking an event
    this.submit_info.emit(media);// ~ $event

    // reset the form
    txtTitle.value = "";
    txtDescription.value = "";
    txtTag.value = "";
}

}
