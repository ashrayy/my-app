import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.css']
})
export class QuestionOneComponent implements OnInit {

  arr =[];
  indexVal: any;
  result :any;

  constructor() { }

  ngOnInit(): void {
  }

  OnInput($event) {
    this.indexVal = $event.data;
   }

  buttonClicked($event): void{
    for(let i=1 ;i<=10;i++){
     (i%2 === 0) ? this.arr.push((i*i)-1) : this.arr.push((i*i)+1);
    }
    this.result = this.arr[this.indexVal];
  }



}
