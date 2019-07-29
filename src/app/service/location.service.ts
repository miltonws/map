import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationService {

  constructor(
      private http: HttpClient
  ) { }

  public getLocalization() {
      return this.http.get<Object[]>(
          "http://ec2-18-222-248-86.us-east-2.compute.amazonaws.com:3003/api/locationDevices"
      )
  }

}