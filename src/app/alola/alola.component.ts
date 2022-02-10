import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { RegionService } from '../services/region.service';

@Component({
  selector: 'app-alola',
  templateUrl: './alola.component.html',
  styleUrls: ['./alola.component.scss']
})
export class AlolaComponent implements OnInit {
  lstpkmn!: any;
  lstRegion!: any;
  lstStats: any[] = [];

  constructor(private pokemons: PokemonService, private regions: RegionService) { }

  ngOnInit(): void {
    this.getPokemon7();
    this.getRegion();
  }

  getPokemon7(){
    this.pokemons.getPokemonGen7().subscribe((data:any) => {
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
