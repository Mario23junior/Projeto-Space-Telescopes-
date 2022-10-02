import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { NavComponent } from './componentes/nav/nav.component';
import { TelescopeListcrudComponent } from './componentes/telescope/telescope-listcrud/telescope-listcrud.component';
import { TelescopiosCreateComponent } from './componentes/telescope/telescopios-create/telescopios-create.component';
import { TelescopiosListComponent } from './componentes/telescope/telescopios-list/telescopios-list.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent, children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'telescope',
        component: TelescopiosListComponent
      },
      {
        path: 'createTelescope',
        component: TelescopiosCreateComponent
      },
      {
        path: 'listOperatividade',
        component: TelescopeListcrudComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
