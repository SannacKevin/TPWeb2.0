import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {


  constructor() {
    if(localStorage.getItem('logged').length == 0) {
      localStorage.setItem('logged', 'non');
    }
  }

  connexion() {
    localStorage.setItem('logged', 'oui');
  }

  estConnecte() : boolean {
    return 'oui' === localStorage.getItem('logged');
  }

}