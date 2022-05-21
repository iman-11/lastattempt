import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarticlesComponent } from './darticles/darticles.component';
import { DefaultComponent } from './default.component';

const routes: Routes = [
  { path:'', component:DefaultComponent,
  children:[
    {path:'articles',component:DarticlesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
