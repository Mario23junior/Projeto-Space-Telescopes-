import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TelescopeSpaceServiceService } from 'src/app/service/telescope-space-service.service';

@Component({
  selector: 'app-telescope-delete',
  templateUrl: './telescope-delete.component.html',
  styleUrls: ['./telescope-delete.component.css']
})
export class TelescopeDeleteComponent implements OnInit {

 
  public form: FormGroup
  public router: Router
  public service: TelescopeSpaceServiceService
  public route: ActivatedRoute
  public formBuilder: FormBuilder

  dataBase: any = [] = []

  constructor(
    formBuilder: FormBuilder,
    route: Router,
    router: ActivatedRoute,
    service: TelescopeSpaceServiceService
  ) {
    this.formBuilder = formBuilder
    this.service = service
    this.route = router
    this.router = route
    this.form = this.formBuilder.group({
      id: {value:null, disabled:true},
      nome: [''],
      img: [''],
      tipo: [''],
      missao: [''],
      durationMissao: [''],
      dataDelancamento: [''],
      status: ['']
    })
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.findById(id).subscribe(telescopeBase => {
      this.dataBase = telescopeBase
    })
  }

  public onDelete() {
    this.service.delete(this.dataBase)
    .subscribe()
    this.router.navigate(['listOperatividade'])
  }

}
