import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { RegionService } from '../services/region.service';

@Component({
  selector: 'app-sinnoh',
  templateUrl: './sinnoh.component.html',
  styleUrls: ['./sinnoh.component.scss']
})
export class SinnohComponent implements OnInit {
  lstpkmn!: any;
  lstRegion!: any;
  lstStats: any[] = [];

  constructor(private pokemons: PokemonService, private regions: RegionService) { }

  ngOnInit(): void {
    this.getPokemon4();
    this.getRegion();
  }

  getPokemon4(){
    this.pokemons.getPokemonGen4().subscribe((data:any) => {
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
