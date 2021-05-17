import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FirstComponent, SecondComponent, ThirdComponent, FourthComponent, FifthComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ]
})
export class HomeModule { }
