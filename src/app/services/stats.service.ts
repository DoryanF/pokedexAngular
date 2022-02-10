import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PokemonService } from './pokemon.service';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
 url = "https://pokeapi.co/api/v2/pokemon/arceus";
 url2 ="https://pokeapi.co/api/v2/pokemon/";
  constructor(private http: HttpClient, private pokemon: PokemonService) { }


  getStats(){
    return this.http.get(this.url);
  }


  getTest(id : any){
    let nom = id.results.name;
    const params = new HttpParams().set("pokemon",nom);
    return this.http.get(this.url2,{params});
  }
}
