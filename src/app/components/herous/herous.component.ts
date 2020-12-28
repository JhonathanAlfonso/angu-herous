import {Component, OnInit} from '@angular/core';
import {Heroe, HeroesServices} from "../../services/heroes.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-herous',
  templateUrl: './herous.component.html'
})
export class HerousComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesServices: HeroesServices, private router: Router) {
  }

  ngOnInit(): void {
    this.heroes = this.heroesServices.getHeroes();
    //console.log(this.heroes);
  }

  showHero(idx:number) {
    //this.router.navigate(['/hero', idx])
  }

}
