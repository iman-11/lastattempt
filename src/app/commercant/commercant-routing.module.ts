import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarticlesComponent } from '../default/darticles/darticles.component';
import { CommercantComponent } from './commercant.component';

const routes: Routes = [
  { path:'', component:CommercantComponent,
    children:[
      {path:'articles', component:DarticlesComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercantRoutingModule { }
