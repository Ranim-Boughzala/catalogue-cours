import { Component, signal } from '@angular/core';
import {ListeCoursComponent} from './composants/liste-cours/liste-cours';
import {EnTete} from './composants/en-tete/en-tete';
import {PiedPage} from './composants/pied-page/pied-page';
import {Cours} from './composants/liste-cours/liste-cours';  
import { DetailCours } from './composants/detail-cours/detail-cours';

@Component({imports: [ListeCoursComponent, EnTete, PiedPage,DetailCours],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})  

export class App {
  //protected readonly title = signal('catalogue-cours');
  coursSelectionne: Cours | null=null;
  onSelectionCours(c: Cours){
    this.coursSelectionne=c;
  }
}
