import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TelescopeSpace } from 'src/app/model/TelescopeSpace.model';
import { TelescopeSpaceServiceService } from 'src/app/service/telescope-space-service.service';

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
  public telesId: any = [] = []

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
      nome: [null],
      img: [null],
      tipo: [null],
      missao: [null],
      durationMissao: [null],
      dataDelancamento: [null],
      status: [null]
    })
  }


  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.service.findById(id).subscribe(telescopeId => {
      this.telesId = telescopeId
    })
  }

}
