import { Component, OnInit } from '@angular/core';
import { SharedService } from "../common/shared.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  estConnecte() : boolean {
    return this.sharedService.estConnecte();
  }

  ngOnInit(): void {
  }

}
