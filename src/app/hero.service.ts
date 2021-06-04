import { Injectable } from '@angular/core';
import { Hero } from "./hero"
import { HEROES } from "./mock-heros";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeros(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this.ms.add("HeroService: Heros retrieved successfully")
    return heroes
  }

  constructor(private ms: MessageService) { }
}
