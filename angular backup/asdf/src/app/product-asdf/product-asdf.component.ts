import { Component, OnInit } from '@angular/core';
import { Product } from './model/product.model';

@Component({
  selector: 'app-product-asdf',
  templateUrl: './product-asdf.component.html',
  styleUrls: ['./product-asdf.component.css']
})
export class ProductAsdfComponent implements OnInit {

  products: Product[];
  //products:Array<Product>;
  constructor() { 
this.products=[
  new Product("first","qw",11),
  new Product("first","qw",11),
  new Product("first","qw",11)
];

  }

  ngOnInit() {
  }                                                                                       

}
