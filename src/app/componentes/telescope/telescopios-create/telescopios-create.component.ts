import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TelescopeSpaceServiceService } from 'src/app/service/telescope-space-service.service';

@Component({
  selector: 'app-telescopios-create',
  templateUrl: './telescopios-create.component.html',
  styleUrls: ['./telescopios-create.component.css']
})
export class TelescopiosCreateComponent implements OnInit {

  public formBuilder: FormBuilder
  public form: FormGroup
  public service: TelescopeSpaceServiceService


  constructor(
    formBuilder: FormBuilder,
    service: TelescopeSpaceServiceService,
    form:FormGroup
  ) {
    this.formBuilder = formBuilder
    this.service = service
    this.form = this.formBuilder.group({
        nome:[null],
        img:[null],
        tipo:[null],
        missao:[null],
        durationMissao:[null],
        dataDelancamento:[null],
        status:[null]

    })
  }

  ngOnInit(): void {
  }

  public onSubmit(){

  }

}
