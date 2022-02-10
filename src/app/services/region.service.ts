import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  url = 'https://pokeapi.co/api/v2/region/';
  constructor(private http: HttpClient) { }

  getRegion(){
    return this.http.get(this.url);
  }
}
