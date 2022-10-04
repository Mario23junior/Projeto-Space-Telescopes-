import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { TelescopeSpace } from 'src/app/model/TelescopeSpace.model';
import { TelescopeSpaceServiceService } from 'src/app/service/telescope-space-service.service';
import { ErrorDialogComponent } from '../../error-dialog/error-dialog.component';

@Component({
  selector: 'app-telescope-listcrud',
  templateUrl: './telescope-listcrud.component.html',
  styleUrls: ['./telescope-listcrud.component.css']
})
export class TelescopeListcrudComponent implements OnInit {

  telescope: TelescopeSpace[] = []
  dataBase:Observable<TelescopeSpace[]>
  
  displayColumns = ['nome', 'tipo', 'missao', 'durationMissao', 'dataDelancamento', 'status', 'actions']

  service: TelescopeSpaceServiceService
  router: Router

  constructor(
    service: TelescopeSpaceServiceService,
    router: Router,
    public dialog: MatDialog

  ) {
    this.service = service,
    this.router = router,
    this.dataBase = this.service.listAllTelescope()
    .pipe(
      catchError(error => {
        this.orError('Erro ao se-conectar a base de dados, principal')
        return of([])
      })
    )
  }

  orError(errorMsg:String) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }


  ngOnInit(): void {
    this.service.listAllTelescope().subscribe(listTable => {
      this.telescope = listTable
    })
  }

  

}
