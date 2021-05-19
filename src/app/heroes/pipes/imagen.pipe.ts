import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  // pure: false, para que se  dispare nuevamente el papi cuando se haga cambios en el mismo (true) es defelcto.
})
export class ImagenPipe implements PipeTransform {


  transform (Heroe: Heroe ): string {

    if(!Heroe.id && !Heroe.alt_img){
      return 'assets/no-image.png';
    }else if (Heroe.alt_img){
      return Heroe.alt_img;
    }else {
      return `assets/heroes/${Heroe.id}.jpg `
    }
  }

}
