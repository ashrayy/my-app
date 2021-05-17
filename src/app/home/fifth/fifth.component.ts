import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {
  @Output() emitValue = new EventEmitter<String>();


  ngOnInit(): void {
  }


   checkForm : any;

   constructor(private fb:FormBuilder,private helperService : HelperService) {
    
     this.checkForm = this.fb.group({
      label:''
     });
 
     this.checkForm.valueChanges.subscribe((val)=>{
      this.emitValue.emit(this.checkForm.value.label);
      console.log(this.checkForm.value.label);
      this.helperService.changeMessage(this.checkForm.value.label);
     })
   }

}
