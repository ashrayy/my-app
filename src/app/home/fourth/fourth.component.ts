import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  message : String;
  
  constructor(private helperServ: HelperService){
    this.helperServ.currentMessage.subscribe(message => this.message = message)
  }

  ngOnInit(): void {
  }

}
