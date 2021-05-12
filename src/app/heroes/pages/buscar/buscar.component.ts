import { Component, NgModule, OnInit  } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
  heroes: Heroe[] = [];
  heroeSelecionado: Heroe | undefined;

    constructor( private HeroesService: HeroesService) { }

  ngOnInit(): void {
  }


  buscando(){

    this.HeroesService.getSugerencias(this.termino)
        .subscribe(heroes => this.heroes = heroes);
  }


  opcionselecionada(event: MatAutocompleteSelectedEvent ){

    if(!event.option.value){
      this.heroeSelecionado = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.HeroesService.getHeroeporid(heroe.id!)
        .subscribe(
          heroe => this.heroeSelecionado = heroe);
  }



}
