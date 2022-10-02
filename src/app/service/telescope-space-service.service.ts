import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { TelescopeSpace } from '../model/TelescopeSpace.model';

@Injectable({
  providedIn: 'root'
})
export class TelescopeSpaceServiceService {

  private baseUrl = "http://localhost:8080"
  private urlList = "/v1/api/base/telescope/";
  private urltelescope = "/v1/api/telescopespace/"

  constructor(private httpClien: HttpClient) { }

  listAllTelescope() {
    return this.httpClien.get<TelescopeSpace[]>(this.baseUrl + this.urlList)
      .pipe(
        first(),
        tap(telescope => console.log(telescope))
      );
  }

  saveAll(formDate: TelescopeSpace) {
    return this.httpClien.post<TelescopeSpace>(this.baseUrl + this.urltelescope, formDate)
      .pipe(
        first(),
        tap(formData => console.log(formData))
      )
  }

  findById(id: number) {
    let urlresponse = `${this.baseUrl}+${this.urltelescope}`
    return this.httpClien.put<TelescopeSpace>(urlresponse, id)
  }
}
