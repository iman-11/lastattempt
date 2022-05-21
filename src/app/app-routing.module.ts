import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', loadChildren:()=>import('./default/default.module').then(m=>m.DefaultModule)},
  { path:'commercant', loadChildren:()=>import('./commercant/commercant.module').then(m=>m.CommercantModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
