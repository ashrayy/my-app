import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  message : String;
  
  constructor(private helperServ: HelperService){
    this.helperServ.currentMessage.subscribe(message => this.message = message)
  }

  ngOnInit(): void {
  }

}
