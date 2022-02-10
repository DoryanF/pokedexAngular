import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon';
  url2 = 'https://pokeapi.co/api/v2/'
  constructor( private http: HttpClient) { }


  getPokemonGen1(){
    const params = new HttpParams().set("offset","0").set("limit","151");
    return this.http.get(this.url,{params});
  }

  getPokemonGen2(){
    const params = new HttpParams().set("offset","151").set("limit","100");
    return this.http.get(this.url,{params});
  }

  getPokemonGen3(){
    const params = new HttpParams().set("offset","251").set("limit","135");
    return this.http.get(this.url,{params});
  }

  getPokemonGen4(){
    const params = new HttpParams().set("offset","386").set("limit","107");
    return this.http.get(this.url,{params});
  }

  getPokemonGen5(){
    const params = new HttpParams().set("offset","493").set("limit","156");
    return this.http.get(this.url,{params});
  }

  getPokemonGen6(){
    const params = new HttpParams().set("offset","649").set("limit","72");
    return this.http.get(this.url,{params});
  }

  getPokemonGen7(){
    const params = new HttpParams().set("offset","721").set("limit","88");
    return this.http.get(this.url,{params});
  }

  getPokemonGen8(){
    const params = new HttpParams().set("offset","809").set("limit","89");
    return this.http.get(this.url,{params});
  }

  getStats(name : string){

    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
