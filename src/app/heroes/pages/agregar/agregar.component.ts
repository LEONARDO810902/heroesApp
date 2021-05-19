import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';

import { switchMap } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img{
      width: 100%;
      border-radius: 5px;

    }
    `
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
  constructor(private HeroesService: HeroesService,
              private ActivatedRoute: ActivatedRoute,
              private Router: Router) { }

  ngOnInit(): void {

    if( !this.Router.url.includes('editar')){
      return;
    }

    this.ActivatedRoute.params
    .pipe(
      switchMap( ({id}) => this.HeroesService.getHeroeporid (id) )
    )
        .subscribe( heroe => this.heroe = heroe);
  }

  Guardar(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    if (this.heroe.id){
      //actualizar
      this.HeroesService.actualizarHeroe(this.heroe)
      .subscribe(heroe => console.log( 'Actualizado', heroe))
    }else
    //crear
    this.HeroesService.agregarHeroe(this.heroe)
        .subscribe(heroe => {
          this.Router.navigate(['/heroes/editar',heroe.id]);
        })
  }

}
