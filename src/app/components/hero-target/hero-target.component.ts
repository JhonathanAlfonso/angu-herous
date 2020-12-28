import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-hero-target',
  templateUrl: './hero-target.component.html',
  styleUrls: ['./hero-target.component.scss']
})
export class HeroTargetComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSelected: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  showHero() {
    this.router.navigate(['/hero', this.index])
    //this.heroeSelected.emit(this.index);
  }
}
