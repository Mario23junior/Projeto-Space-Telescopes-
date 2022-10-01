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
  private urlPost = "/v1/api/telescopespace/"

  constructor(private httpClien: HttpClient) { }

  listAllTelescope() {
    return this.httpClien.get<TelescopeSpace[]>(this.baseUrl + this.urlList)
      .pipe(
        first(),
        tap(telescope => console.log(telescope))
      );
  }

  saveAll(formDate: TelescopeSpace) {
    return this.httpClien.post<TelescopeSpace>(this.baseUrl + this.urlPost, formDate)
    .pipe(
      first(),
      tap(formData => console.log(formData))
    )
  }
}
