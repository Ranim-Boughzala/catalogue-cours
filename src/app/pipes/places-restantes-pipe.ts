import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placesRestantes'
})
export class PlacesRestantesPipe implements PipeTransform {

  transform(places: number, seuil: number = 5): string {

    if (places === 0) {
      return 'Complet';
    }
    else if (places === 1) {
      return 'Dernière place !';
    }
    else if (places <= seuil) {
      return `Plus que ${places} places`;
    }
    else {
      return `${places} places disponibles`;
    }

  }
}