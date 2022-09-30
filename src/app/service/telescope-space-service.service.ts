import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { TelescopeSpace } from '../model/TelescopeSpace.model';

@Injectable({
  providedIn: 'root'
})
export class TelescopeSpaceServiceService {

  private baseUrl = "http://localhost:8080"
  private url = "/v1/api/base/telescope/";

  constructor(private httpClien: HttpClient) { }

  listAllTelescope() {
    return this.httpClien.get<TelescopeSpace[]>(this.baseUrl + this.url)
      .pipe(
        first(),
         tap(telescope => console.log(telescope))
      );
  }
}
