import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'test01', loadChildren: () => import('./modules/test01/test01.module').then(mod => mod.Test01Module) },
  { path: 'test02', loadChildren: () => import('./modules/test02/test02.module').then(mod => mod.Test02Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
