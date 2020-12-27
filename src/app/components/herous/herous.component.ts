import {Component, OnInit} from '@angular/core';
import {Heroe, HeroesServices} from "../../services/heroes.services";

@Component({
  selector: 'app-herous',
  templateUrl: './herous.component.html'
})
export class HerousComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesServices: HeroesServices) {
  }

  ngOnInit(): void {
    this.heroes = this.heroesServices.getHeroes();
    console.log(this.heroes);
  }

}
