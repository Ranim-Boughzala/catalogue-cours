import { Component,inject } from '@angular/core';
import { Session } from '../../services/session';
import { Catalogue } from '../../services/catalogue';
import { Inscriptions } from '../../services/inscriptions';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  imports: [DatePipe,RouterLink],
  selector: 'app-mes-inscriptions',
  styleUrl: './mes-inscriptions.css',
  templateUrl: './mes-inscriptions.html',
})
export class MesInscriptions {
  session = inject(Session);
  catalogue = inject(Catalogue);
  inscriptions = inject(Inscriptions);
}
