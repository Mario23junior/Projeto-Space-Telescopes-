import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TelescopeSpace } from 'src/app/model/TelescopeSpace.model';
import { TelescopeSpaceServiceService } from 'src/app/service/telescope-space-service.service';

@Component({
  selector: 'app-telescope-listcrud',
  templateUrl: './telescope-listcrud.component.html',
  styleUrls: ['./telescope-listcrud.component.css']
})
export class TelescopeListcrudComponent implements OnInit {

  telescope: TelescopeSpace[] = []
  displayColumns = ['nome', 'tipo', 'missao', 'durationMissao', 'dataDelancamento', 'status', 'actions']

  service: TelescopeSpaceServiceService
  router: Router

  constructor(
    service: TelescopeSpaceServiceService,
    router: Router
  ) {
    this.service = service
    this.router = router
  }

  ngOnInit(): void {
    this.service.listAllTelescope().subscribe(listTable => {
      this.telescope = listTable
    })
  }

  public edit() {
    this.router.navigate(['updatetelescope'])
  }

}
