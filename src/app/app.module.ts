import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HerousComponent} from './components/herous/herous.component';
import {HeroesServices} from "./services/heroes.services";
import { HeroComponent } from './components/hero/hero.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { HeroTargetComponent } from './components/hero-target/hero-target.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HerousComponent,
    HeroComponent,
    SearcherComponent,
    HeroTargetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HeroesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
