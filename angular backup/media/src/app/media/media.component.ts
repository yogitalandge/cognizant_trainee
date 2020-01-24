import { Component, OnInit } from '@angular/core';
import { Media } from '../model/media.model';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {


// collection of Media type : Array of product type
  // products : Product[];
  media : Array<Media>;

  constructor() { 
    // initialize with dummy data...
    this.media = [
      new Media("mytitle1","nice_click","@ysl"),
      new Media("mytitle2","nice_click","@sst"),
      new Media("mytitle3","nice_click","pdc")
    ];
    
  }

  saveMedia(txtTitle:HTMLInputElement, txtDescription:HTMLInputElement,  txtTag:HTMLInputElement):void{
     
      let media = new Media(txtTitle.value, txtDescription.value, txtTag.value);
    
      this.media.push(media);

    
      txtTitle.value = "";
      txtDescription.value = "";
      txtTag.value = "";
  }



 

  ngOnInit() {
  }

}
