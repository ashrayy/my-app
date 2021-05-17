import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  message : String;
  
  constructor(private helperServ: HelperService){
    this.helperServ.currentMessage.subscribe(message => this.message = message)
  }

  ngOnInit(): void {
  }

}
