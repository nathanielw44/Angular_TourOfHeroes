import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from "../hero.service"
import { MessageService } from "../message.service"

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = []
  selectedHero?: Hero

  onSelect(hero: Hero) {
    this.selectedHero = hero
    this.ms.add(`Selected ${hero.name}`)
  }

  getHeros() {
    this.hs.getHeros().subscribe(heroes => this.heroes = heroes)
  }

  constructor(private hs: HeroService, private ms: MessageService) { }

  ngOnInit(): void {
    this.getHeros()
  }

}
