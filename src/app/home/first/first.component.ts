import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as EventEmitter from 'events';
import { FifthComponent } from '../fifth/fifth.component';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  message : String;
  
  constructor(private helperServ: HelperService){
    this.helperServ.currentMessage.subscribe(message => this.message = message)
  }

  ngOnInit(): void {
  }

}
