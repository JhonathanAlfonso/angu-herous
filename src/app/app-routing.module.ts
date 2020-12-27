import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {HerousComponent} from "./components/herous/herous.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'herous', component: HerousComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
