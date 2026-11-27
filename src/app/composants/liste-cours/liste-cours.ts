import { Component, Output, EventEmitter,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FiltreCoursPipe } from '../../pipes/filtre-cours-pipe';
import { TriCoursPipe } from '../../pipes/tri-cours-pipe';
import { UpperCasePipe } from '@angular/common';
import { PlacesRestantesPipe } from '../../pipes/places-restantes-pipe';
import { TronquerPipe } from '../../pipes/tronquer-pipe';
import { Cours } from '../../donnees/cours';
import { RouterLink } from '@angular/router';
import { Catalogue } from '../../services/catalogue';
@Component({
  imports: [FormsModule, RouterLink,FiltreCoursPipe, TriCoursPipe,UpperCasePipe,PlacesRestantesPipe,TronquerPipe],
  selector: 'app-liste-cours',
  styleUrl: './liste-cours.css',
  templateUrl: './liste-cours.html',
})
export class ListeCoursComponent {
  recherche = '';
  tri: 'asc' | 'desc' = 'asc';
  @Output() coursSelectionne = new EventEmitter<Cours>();
  coursActif: Cours | null=null;
  //cours : Cours[]= COURS;
  selectionner(c: Cours){
    this.coursActif=c;
    this.coursSelectionne.emit(c);

  }
  private catalogue = inject(Catalogue);
  cours: Cours[] = this.catalogue.lister();
}





