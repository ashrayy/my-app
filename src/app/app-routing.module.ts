import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FifthComponent } from './home/fifth/fifth.component';
import { QuestionOneComponent } from './question-one/question-one.component';
import { QuestionThreeComponent } from './question-three/question-three.component';


const routes: Routes = [
  {path : 'solution1', component :QuestionOneComponent},
  {path : 'solution2', component :QuestionThreeComponent},
  {path : 'check', component :FifthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
