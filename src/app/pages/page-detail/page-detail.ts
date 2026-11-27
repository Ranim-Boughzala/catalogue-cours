import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {  Cours } from '../../donnees/cours';
import { DetailCours } from '../../composants/detail-cours/detail-cours';
import { Catalogue } from '../../services/catalogue';
@Component({
  selector: 'app-page-detail',
  imports: [DetailCours, RouterLink],
  templateUrl: './page-detail.html',
  styleUrl: './page-detail.css',
})
export class PageDetail {
  @Input() id = '';

  /*get cours(): Cours | undefined {
    return COURS.find(c => c.id === Number(this.id));
  }*/
  get cours(): Cours | undefined {
    return this.catalogue.trouver(Number(this.id));
  }
  private catalogue = inject(Catalogue);
}
