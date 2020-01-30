import { Component, OnInit } from '@angular/core';
import { MediaDataService } from 'src/app/services/data/media-data.service';
import { Router } from '@angular/router';
import { Media } from 'src/app/model/media.model';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {

  products : Array<Media>; // will be initilized from data coming from server

  media: any;
  // dependent on product-data-service
  constructor(private mediaService : MediaDataService, public router : Router) { 

  }

  add(){
    // navigate to product-add component
    this.router.navigate(['/media-add']);
  }

  update(id:number){
    // navigate to update Component (associate id also)
    this.router.navigate(['/media-update/' + id]);
  }

  delete(id:number){
    // call product data service to delete
    this.mediaService.deleteMedia(id).subscribe((response) => {
        console.log(response);
        // call getAllProducts (selective loading)
        this.mediaService.getAllMedia().subscribe((response:any) => this.media = response);
        
        // navigate to same component (caching issues)
        // this.router.navigate(['/product']);
    });
  }



  ngOnInit() {
    // load data from server on initialization
    // need to call getAllProducts() method of ProductDataService
    // this.products = this.productService.getAllProducts();
    // response : response data from server : Array of products
    this.mediaService.getAllMedia().subscribe((response:any) => this.media = response);
  }

}