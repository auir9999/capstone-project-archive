import { Component, OnInit } from '@angular/core';
import { infoBoardEnglish } from './data-classes';
import { DataManagerService } from './data-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-board-add',
  templateUrl: './info-board-add.component.html',
  styleUrls: ['./info-board-add.component.css']
})
export class InfoBoardAddComponent implements OnInit {

  newInfoBoard: infoBoardEnglish;

  constructor(private m: DataManagerService, private router: Router) { }

  ngOnInit(): void {
    this.newInfoBoard = new infoBoardEnglish();
  }

  infoBoardSave(): void {
    this.m.resreqEnglishAddInfoBoard(this.newInfoBoard).subscribe(t=>this.newInfoBoard=t);
    alert("infoBoard Saved!");
    this.router.navigate(['/home']);
  }

}
