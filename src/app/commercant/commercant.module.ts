import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommercantRoutingModule } from './commercant-routing.module';
import { CommercantComponent } from './commercant.component';
import { ArticlesComponent } from './articles/articles.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { AsidebarComponent } from './asidebar/asidebar.component';


@NgModule({
  declarations: [
    CommercantComponent,
    ArticlesComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    AsidebarComponent
  ],
  imports: [
    CommonModule,
    CommercantRoutingModule
  ]
})
export class CommercantModule { }
