import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp02aComponent } from './components/comp02a/comp02a.component';
import { Comp02bComponent } from './components/comp02b/comp02b.component';
import { Home02Component } from './components/home02/home02.component';
import { RouterModule, Routes } from '@angular/router';


const test02Routes:Routes = [
  { path: '', component: Home02Component}
]

@NgModule({
  declarations: [
    Comp02aComponent,
    Comp02bComponent,
    Home02Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(test02Routes)
  ]
})
export class Test02Module { }
