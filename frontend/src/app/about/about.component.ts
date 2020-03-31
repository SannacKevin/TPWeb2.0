import { Component, OnInit } from '@angular/core';
import { ProduitsService } from './produits.service';
import { Produits } from './produits.model';
import { Observable } from 'rxjs';

@Component({
 selector: 'app-root',
 templateUrl: './about.component.html',
 styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {
 
  produits: Observable<Produits[]>;

 
  constructor(private produitService: ProduitsService) {
 }
 ngOnInit(): void {
 this.produits = this.produitService.findAll();

 }
}
