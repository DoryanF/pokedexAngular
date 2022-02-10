import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { KantoComponent } from './kanto/kanto.component';
import { JohtoComponent } from './johto/johto.component';
import { HoennComponent } from './hoenn/hoenn.component';
import { SinnohComponent } from './sinnoh/sinnoh.component';
import { UnysComponent } from './unys/unys.component';
import { KalosComponent } from './kalos/kalos.component';
import { AlolaComponent } from './alola/alola.component';
import { GalarComponent } from './galar/galar.component';

const routes: Routes = [
  {path: '', redirectTo: '/pokemon', pathMatch:'full'},
  {path: 'pokemon',component: PokemonComponent},
  {path: 'kanto', component: KantoComponent},
  {path: 'johto', component:JohtoComponent},
  {path: 'hoenn', component: HoennComponent},
  {path: 'sinnoh', component: SinnohComponent},
  {path: 'unys', component: UnysComponent},
  {path: 'kalos', component: KalosComponent},
  {path: 'alola', component: AlolaComponent},
  {path: 'galar', component: GalarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
