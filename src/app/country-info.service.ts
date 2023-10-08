import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryInfoService {
  constructor(private http: HttpClient) {}
  
  getCountryInfo(countryId: string): Observable<any> {
    const apiurl = `https://api.worldbank.org/V2/country/${countryId}?format=json`;
    return this.http.get<any>(apiurl);
  }



}
