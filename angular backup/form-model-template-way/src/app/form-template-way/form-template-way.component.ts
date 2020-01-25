import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-template-way',
  templateUrl: './form-template-way.component.html',
  styleUrls: ['./form-template-way.component.css']
})
export class FormTemplateWayComponent implements OnInit {

  title : string;
 description : string;
  tag : number;
  // virtual Form 
  myFormGroup : FormGroup;
 
 
  myMediaTitle: FormControl;

  // FormModule/ReactiveFormsModule : they inject a FormBuilder to constructors of all component
  constructor(formBuilder : FormBuilder) { 

    // this.myProductName =  new FormControl(<default value>, <validation rules>);
    // this.myProductName =  new FormControl("", Validators.pattern(""));
    // this.myProductName =  new FormControl("", Validators.maxLength(10));
    this.myMediaTitle =  new FormControl("", Validators.required);
    // formGroup is initialized using formbuilder
    this.myFormGroup = formBuilder.group({
        // members of a anonymous class
        // form controls
        "media_title" : this.myMediaTitle,
        // inbuilt angular validation rules
        "media_description" : new FormControl("Books", Validators.required),
        // "product_cost" : new FormControl("500", this.rangeCheck) // method name of constraint
        // add multipe constriant
        "media_tag" : new FormControl("500", Validators.compose([Validators.required, this.rangeCheck])) // array of validation rules 
    }); 

      /*var first ={
        name : "First",
        age : 20  
      };*/
  }

  saveMedia(){
    // this.name = this.myFormGroup.controls['product_name'].value;
    this.title = this.myMediaTitle.value;
    this.description = this.myFormGroup.controls['media_description'].value;
    this.tag =this.myFormGroup.controls['media_tag'].value;


  }


  // custom validation function
  // 1. it will passed with a param : FormControl : Control on which constraint to be applied
  // 2. in case of invalidity : return an object with a single data member
  rangeCheck(txtControl : FormControl){
    if(txtControl.value< 100 ||txtControl.value> 1000)
        return {
                  // <constraint name> : <boolean>
                  "range" : true  // if constriant fails
              }



  }



  ngOnInit() {
  }

}