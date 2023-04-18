import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { infoBoardEnglish } from './data-classes';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-info-board',
  templateUrl: './info-board.component.html',
  styleUrls: ['./info-board.component.css']
})
export class InfoBoardComponent implements OnInit {

  infoBoards:infoBoardEnglish[];

  constructor(private m:DataManagerService, public _auth: AuthService) { }

  ngOnInit(): void {
    this.m.resreqEnglishInfoBoardGetAll().subscribe(t=>this.infoBoards=t);
  }

}
