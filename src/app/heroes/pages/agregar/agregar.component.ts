import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  Publisher = [
    {
      id: 'Dc Comics',
      desc: 'Dc - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe ={

    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img:''
  }
  constructor(private HeroesService: HeroesService) { }

  ngOnInit(): void {
  }

  Guardar(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    this.HeroesService.agregarHeroe(this.heroe)
        .subscribe(resp => {
          console.log('Respuesta', resp);
        })
  }

}
