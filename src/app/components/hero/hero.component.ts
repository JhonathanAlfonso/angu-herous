import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesServices} from "../../services/heroes.services";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {

  heroe: any = {};

  constructor(private activateRoute: ActivatedRoute, private heroesServices: HeroesServices) {
    this.activateRoute.params.subscribe(params => {
      //console.log(params.id);
      this.heroe = this.heroesServices.getHero(params.id);
      console.log(this.heroe);
    });
  }

  ngOnInit(): void {
  }

}
