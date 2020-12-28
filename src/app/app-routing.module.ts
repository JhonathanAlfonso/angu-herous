import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {HerousComponent} from "./components/herous/herous.component";
import {AboutComponent} from "./components/about/about.component";
import {HeroComponent} from "./components/hero/hero.component";
import {SearcherComponent} from "./components/searcher/searcher.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'herous', component: HerousComponent},
  {path: 'hero/:id', component: HeroComponent},
  {path: 'search/:hero', component: SearcherComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
