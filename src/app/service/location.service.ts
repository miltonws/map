import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationService {

  constructor(
      private http: HttpClient
  ) { }

  //servico de ajuda
  public getLocalization() {
      return this.http.get<Object[]>(
          "http://18.228.6.134:3003/api/helpdevices"
      )
  }

  //servico historico de ajuda
  public getHistoryLocalization() {
      return this.http.get<Object[]>(
          "http://18.228.6.134:3003/api/locationdevices"
      )
  }


  public getUsers() {
    return this.http.get<Object[]>(
        "http://18.228.6.134:3003/api/userdevices"
    )
  }

}