import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { TelescopeSpace } from 'src/app/model/TelescopeSpace.model';
import { TelescopeSpaceServiceService } from 'src/app/service/telescope-space-service.service';
import { ErrorDialogComponent } from '../../error-dialog/error-dialog.component';

@Component({
  selector: 'app-telescopios-list',
  templateUrl: './telescopios-list.component.html',
  styleUrls: ['./telescopios-list.component.css']
})
export class TelescopiosListComponent implements OnInit {
  
  data:TelescopeSpace[] = []
  dataBase:Observable<TelescopeSpace[]>

  constructor(
    private service: TelescopeSpaceServiceService,
    public dialog: MatDialog
  ) { 
    this.service.listAllTelescope()
    .subscribe(data => {
      this.data = data
      console.log(data)
    }),

    this.dataBase = this.service.listAllTelescope()
    .pipe(
      catchError(error => {
        this.orError('Erro ao se conectar com a base central de dados, por favor tente mais tarde.')
        return of([])
      })
    )
  }

  orError(errorMsg:String) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  title = 'Card View Demo';

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  } 

  ngOnInit(): void {
  }

}
