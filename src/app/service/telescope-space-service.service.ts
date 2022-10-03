import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';
import { TelescopeSpace } from '../model/TelescopeSpace.model';

@Injectable({
  providedIn: 'root'
})
export class TelescopeSpaceServiceService {

  public baseUrl = "http://localhost:8080"
  public urlList = "/v1/api/base/telescope/";
  public urltelescope = "/v1/api/telescopespace/"

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

  findById(id: any): Observable<TelescopeSpace> {
    let urlRequest = this.baseUrl + this.urltelescope + id
    return this.httpClien.get<TelescopeSpace>(urlRequest)
      .pipe(
        first(),
        tap(telescope => console.log(telescope))
      );
  }

  findDateBaseUpdate(telescope: TelescopeSpace): Observable<TelescopeSpace> {
    let urlresponse = `${this.baseUrl}${this.urltelescope}${telescope.id}`
    return this.httpClien.put<TelescopeSpace>(urlresponse, telescope)
  }


}
