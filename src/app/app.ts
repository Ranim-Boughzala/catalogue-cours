import { Component,inject } from '@angular/core';
//import {ListeCoursComponent} from './composants/liste-cours/liste-cours';
import {EnTete} from './composants/en-tete/en-tete';
import {PiedPage} from './composants/pied-page/pied-page';
//import { Cours } from './donnees/cours';  
//import { DetailCours } from './composants/detail-cours/detail-cours';
import {RouterOutlet,RouterLink,RouterLinkActive,Router} from '@angular/router';
import { Session } from './services/session';
import { Inscriptions } from './services/inscriptions';
@Component({imports:
  [
  EnTete,
  PiedPage,
  RouterOutlet,
  RouterLink,
  RouterLinkActive
],

  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})  

export class App {
  session = inject(Session);
  private router = inject(Router);
  inscriptions = inject(Inscriptions);

  deconnecter() {
    this.session.deconnecter();
    this.router.navigateByUrl('/');
  }
}
