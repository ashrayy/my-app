import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-question-three',
  templateUrl: './question-three.component.html',
  styleUrls: ['./question-three.component.css']
})
export class QuestionThreeComponent{
  phoneNumber = 'Angular';
  
  productForm: FormGroup;
   
  constructor(private fb:FormBuilder) {
   
    this.productForm = this.fb.group({
      phoneNumber1: '',
      phoneNumber: this.fb.array([]) ,
    });
  }
  
  quantities() : FormArray {
    return this.productForm.get("phoneNumber") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      phoneNumber: '',
    })
  }
   
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
   
  onSubmit() {
    console.log(this.productForm.value);
  }
}
