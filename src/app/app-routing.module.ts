import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { NavComponent } from './componentes/nav/nav.component';
import { TelescopiosListComponent } from './componentes/telescope/telescopios-list/telescopios-list.component';
 
const routes: Routes = [
  {
    path: '',
    component: NavComponent,children: [
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'telescope',
        component:TelescopiosListComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
