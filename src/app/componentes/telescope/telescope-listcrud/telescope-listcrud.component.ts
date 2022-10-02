import { Component, OnInit } from '@angular/core';
import { TelescopeSpace } from 'src/app/model/TelescopeSpace.model';

@Component({
  selector: 'app-telescope-listcrud',
  templateUrl: './telescope-listcrud.component.html',
  styleUrls: ['./telescope-listcrud.component.css']
})
export class TelescopeListcrudComponent implements OnInit {

  telescope:TelescopeSpace[] = []
  displayColumns = ['nome','tipo','Missão','Duração da Missão','Data de lançamento','status']

  constructor() { }

  ngOnInit(): void {
  }

}
