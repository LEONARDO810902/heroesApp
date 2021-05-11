import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';

  horoes: Heroe[] = [];

  constructor( private HeroesService: HeroesService) { }

  ngOnInit(): void {
  }


  buscando(){

    this.HeroesService.getHeroes()
        .subscribe(heroes => this.horoes = heroes);
  }

}
