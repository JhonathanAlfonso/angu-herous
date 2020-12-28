import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesServices} from "../../services/heroes.services";

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
})
export class SearcherComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesServices) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params.hero;
      this.heroes = this.heroesService.searchHero(params.hero);
    });
  }

}
