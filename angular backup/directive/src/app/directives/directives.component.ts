import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { EMPTY_PARSE_LOCATION } from '@angular/compiler';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  name:string;
  age :Number;
  email:string;  

  constructor() {
    this.name="yogita";
    this.age=21;
   this.email="yogitalandge7@gmail.com"    
   }
 

    
   
   isEligible():boolean{
     if(this.age>18)
    return true;
    return false;
   }

  ngOnInit() {
  }

}
