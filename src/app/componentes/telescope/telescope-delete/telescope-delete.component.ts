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
      nome: {value:null, disabled:true},
      img: {value:null, disabled:true},
      tipo: {value:null, disabled:true},
      missao: {value:null, disabled:true},
      durationMissao: {value:null, disabled:true},
      dataDelancamento: {value:null, disabled:true},
      status: {value:null, disabled:true}
    })
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.findById(id).subscribe(telescopeBase => {
      this.dataBase = telescopeBase
    })
  }

  public onDelete() {
    this.service.delete(this.dataBase.id).subscribe(telescopeBase => {
      this.dataBase.id = telescopeBase.id
    })
    this.router.navigate(['listOperatividade'])
  }

}
