import { Component, OnInit } from '@angular/core';
import { SharedService } from "../common/shared.service";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  constructor(private sharedService: SharedService) {}
  connexion() {
    this.sharedService.connexion();
  }
  ngOnInit(): void {
  } 
// On a successful login request the authentication listener will retrieve the user token and profile info

}
