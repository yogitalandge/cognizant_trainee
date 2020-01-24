import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-model-way',
  templateUrl: './form-model-way.component.html',
  styleUrls: ['./form-model-way.component.css']
})
export class FormModelWayComponent implements OnInit {
title:string;
description:string;
tag:string;

  constructor() { }

  ngOnInit() {
  }
  saveMedia(frm:any){
this.title=frm.mytitle;
this.description=frm.mydescription;
this.tag=frm.mytag;
  }

}
