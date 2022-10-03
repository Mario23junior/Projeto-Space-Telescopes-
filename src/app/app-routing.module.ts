import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { NavComponent } from './componentes/nav/nav.component';
import { TelescopeDeleteComponent } from './componentes/telescope/telescope-delete/telescope-delete.component';
import { TelescopeListcrudComponent } from './componentes/telescope/telescope-listcrud/telescope-listcrud.component';
import { TelescopeUpdateComponent } from './componentes/telescope/telescope-update/telescope-update.component';
import { TelescopiosCreateComponent } from './componentes/telescope/telescopios-create/telescopios-create.component';
import { TelescopiosListComponent } from './componentes/telescope/telescopios-list/telescopios-list.component';
import { TelescopeSpaceServiceService } from './service/telescope-space-service.service';

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
      },
      {
        path: 'updatetelescope/:id',
        component: TelescopeUpdateComponent
      },
      {
        path: 'deletetelescope/:id',
        component: TelescopeDeleteComponent

      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
