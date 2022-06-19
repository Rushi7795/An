import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Service } from '../multiple-services/service';
import { MSService } from '../ms.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  ss: Service[] = [];

  constructor(private heroService: HeroService, private msService: MSService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getMservice();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  getMservice(): void {
    this.msService.getMservice(1)
      .subscribe(ss => this.ss = ss.slice(1, 5));
    this.msService.getMservice(2)
      .subscribe(ss => this.ss = ss.slice(1, 5));
  }
}