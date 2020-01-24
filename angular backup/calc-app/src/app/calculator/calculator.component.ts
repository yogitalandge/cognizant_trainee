import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  

  value1:number;
  value2:number;
  result:number;
  
  constructor(){
    
    
  }
 calculate(val1:HTMLInputElement,val2:HTMLInputElement,result1:HTMLInputElement){
  let value1=parseInt(val1.value);
 let value2=parseInt(val2.value);
   let result=parseInt(result1.value);
  
   

 }
 addition(val1:HTMLInputElement,val2:HTMLInputElement,result1:HTMLInputElement){
  let value1=parseInt(val1.value);
  let value2=parseInt(val2.value);
    let result=value1+value2;
   
 result1.value= result + "";
 
 }
  subtraction(val1:HTMLInputElement,val2:HTMLInputElement,result1:HTMLInputElement){
    let value1=parseInt(val1.value);
  let value2=parseInt(val2.value);
    let result=value1-value2;
   
 result1.value= result + "";
 
 }
  multi(val1:HTMLInputElement,val2:HTMLInputElement,result1:HTMLInputElement){
    let value1=parseInt(val1.value);
    let value2=parseInt(val2.value);
      let result=value1*value2;
     
   result1.value= result + "";
   
  }
div(val1:HTMLInputElement,val2:HTMLInputElement,result1:HTMLInputElement){
  let value1=parseInt(val1.value);
  let value2=parseInt(val2.value);
    let result=value1/value2;
   
 result1.value= result + "";
 
 }
 clear(val1:HTMLInputElement,val2:HTMLInputElement,result1:HTMLInputElement){
val1.value="";
val2.value="";
result1.value="";
 }
}

