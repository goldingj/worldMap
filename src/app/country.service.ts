import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  callForInfo(countryCode: string): Observable<any>{
   return this.http.get(`http://api.worldbank.org/v2/country/${countryCode}?format=json`);
    
  }
  
}
