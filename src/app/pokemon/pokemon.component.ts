import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { RegionService } from '../services/region.service';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  lstpkmn!: any;
  lstRegion!: any;
  lstStats:any[] = [];
  lstStats2!: any;
  type!: any;


  constructor(private pokemons: PokemonService,
     private regions: RegionService,
     private stat: StatsService,
     ) { }

  ngOnInit(): void {
    this.getPokemon();
    this.getRegion();

  }

  getPokemon(){
    this.pokemons.getPokemonGen1().subscribe((data:any) => {
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
