import { Component, OnInit } from '@angular/core';
import { HoraireService } from './horaire.service';
import { Observable } from 'rxjs';
import { Horaire } from './horaire.model';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  horaire: Observable<Horaire[]>;

  constructor(private horaireService: HoraireService) {
  }

 ngOnInit(): void {
this.horaire = this.horaireService.findAll();
}

}
