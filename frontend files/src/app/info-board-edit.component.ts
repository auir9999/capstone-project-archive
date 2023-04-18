import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataManagerService } from './data-manager.service';
import { infoBoardEnglish } from './data-classes';

@Component({
  selector: 'app-info-board-edit',
  templateUrl: './info-board-edit.component.html',
  styleUrls: ['./info-board-edit.component.css']
})
export class InfoBoardEditComponent implements OnInit {

  infoB:infoBoardEnglish;
  id: string;

  constructor(private m: DataManagerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.m.resreqEnglishInfoBoardDetail(this.id).subscribe(t=>this.infoB=t);
  }

  infoBoardSave():void{
    this.m.resreqEnglishEditInfoBoard(this.id,this.infoB).subscribe(t=>this.infoB=t);
    alert("infoBoard saved!");
    this.router.navigate(['/']);
  }

}
