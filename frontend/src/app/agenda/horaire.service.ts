import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horaire } from './horaire.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoraireService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Horaire[]> {
    return this.httpClient.get<Horaire[]>('http://localhost:8090/horaires');
    }
}
