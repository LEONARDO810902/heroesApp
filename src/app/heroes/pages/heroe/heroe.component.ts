import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(
              private activateRoute: ActivatedRoute,
              private HeroesService: HeroesService) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.HeroesService.getHeroeporid(id))
    )
    .subscribe (heroe => this.heroe = heroe);

  }



}
