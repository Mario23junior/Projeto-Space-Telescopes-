import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TelescopeSpaceServiceService } from 'src/app/service/telescope-space-service.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-telescope-update',
  templateUrl: './telescope-update.component.html',
  styleUrls: ['./telescope-update.component.css']
})
export class TelescopeUpdateComponent implements OnInit {


  public form: FormGroup
  public router: Router
  public service: TelescopeSpaceServiceService
  public route: ActivatedRoute
  public formBuilder: FormBuilder
  public telesId: any =  [] = []

  constructor(
    formBuilder: FormBuilder,
    router: Router,
    route: ActivatedRoute,
    service: TelescopeSpaceServiceService
  ) {
    this.formBuilder = formBuilder
    this.service = service
    this.router = router
    this.route = route
    this.form = this.formBuilder.group({
      // id: {value:null, disabled:true},
      id:[''],
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
    let id = this.route.snapshot.paramMap.get('id')
    this.service.findById(id).subscribe(telescopeId => {
      this.telesId = telescopeId
    })
  }

  public onUpdate() {
    this.service.findDateBaseUpdate(this.telesId).subscribe
    this.router.navigate(['listOperatividade'])
  }

}
