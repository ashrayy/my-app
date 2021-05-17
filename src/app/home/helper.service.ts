import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  invokeFirstComponentFunction = new EventEmitter();    
  subsVar: Subscription; 
  label: String;

  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
