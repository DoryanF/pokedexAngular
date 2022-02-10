import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { KantoComponent } from './kanto/kanto.component';
import { JohtoComponent } from './johto/johto.component';
import { HoennComponent } from './hoenn/hoenn.component';
import { SinnohComponent } from './sinnoh/sinnoh.component';
import { UnysComponent } from './unys/unys.component';
import { AlolaComponent } from './alola/alola.component';
import { KalosComponent } from './kalos/kalos.component';
import { GalarComponent } from './galar/galar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    NavComponent,
    KantoComponent,
    JohtoComponent,
    HoennComponent,
    SinnohComponent,
    UnysComponent,
    AlolaComponent,
    KalosComponent,
    GalarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
