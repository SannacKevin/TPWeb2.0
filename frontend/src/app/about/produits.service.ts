import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produits } from './produits.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Produits[]> {
    return this.httpClient.get<Produits[]>('http://localhost:8090/produits');
    }
   
}

