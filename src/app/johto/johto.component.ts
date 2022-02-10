import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { RegionService } from '../services/region.service';

@Component({
  selector: 'app-johto',
  templateUrl: './johto.component.html',
  styleUrls: ['./johto.component.scss']
})
export class JohtoComponent implements OnInit {

  lstpkmn!: any;
  lstRegion!: any;
  lstStats: any[] = [];

  constructor(private pokemons: PokemonService, private regions: RegionService) { }

  ngOnInit(): void {
    this.getPokemon2();
    this.getRegion();
  }

  getPokemon2(){
    this.pokemons.getPokemonGen2().subscribe((data:any) => {
      this.lstpkmn = data.results;
      data.results.forEach((result: { name: string; }) => {
        this.pokemons.getStats(result.name).subscribe((uniqueData : any)=>{
          console.log(uniqueData);
          this.lstStats.push(uniqueData);
        })
      });
    });
  }

  getRegion(){
    this.regions.getRegion().subscribe((data:any) => {this.lstRegion = data.results});
  }

}
