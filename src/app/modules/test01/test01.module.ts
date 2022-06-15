import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home01Component } from './components/home01/home01.component';
import { Comp01aComponent } from './components/comp01a/comp01a.component';
import { RouterModule, Routes } from '@angular/router';
import { Comp01bComponent } from './components/comp01b/comp01b.component';
import { Comp01cComponent } from './components/comp01c/comp01c.component';
import { Service01B } from './services/ser01b.service';

const test01Routes:Routes = [
  { path: '', component: Home01Component}
]


@NgModule({
  declarations: [
    Home01Component,
    Comp01aComponent,
    Comp01bComponent,
    Comp01cComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(test01Routes)
  ],
  providers: [
    // Service01B       // because Service01B needs to be accessed by app.module ----> we injected it at root level
                            // had we injected it at module level ---> then, we cant use AppInjector.get(Service01B) ---- in test01a.class.ts
  ]
})
export class Test01Module { }
