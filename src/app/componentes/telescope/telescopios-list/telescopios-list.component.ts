import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TelescopeSpace } from 'src/app/model/TelescopeSpace.model';
import { TelescopeSpaceServiceService } from 'src/app/service/telescope-space-service.service';

@Component({
  selector: 'app-telescopios-list',
  templateUrl: './telescopios-list.component.html',
  styleUrls: ['./telescopios-list.component.css']
})
export class TelescopiosListComponent implements OnInit {
  
  data:TelescopeSpace[] = []
  dataBase:Observable<TelescopeSpace[]>

  constructor(
    private service: TelescopeSpaceServiceService
  ) { 
    this.service.listAllTelescope()
    .subscribe(data => {
      this.data = data
      console.log(data)
    }),
    this.dataBase = this.service.listAllTelescope()
  }

  title = 'Card View Demo';

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  ngOnInit(): void {
  }

}
