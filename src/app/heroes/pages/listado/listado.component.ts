import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `
    mat-card{
      margin-top: 20px;
    }
    `
  ]
})
export class ListadoComponent implements OnInit {

Heroes: Heroes[] = [];


  constructor(private HeroesService: HeroesService) { }

  ngOnInit(): void {

    this.HeroesService.getHeroes()
        .subscribe(heroes => {
          this.Heroes = heroes;
        });
  }



}
