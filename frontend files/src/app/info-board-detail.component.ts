import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { infoBoardEnglish } from './data-classes';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-board-detail',
  templateUrl: './info-board-detail.component.html',
  styleUrls: ['./info-board-detail.component.css']
})
export class InfoBoardDetailComponent implements OnInit {

  id: string;
  infoB: infoBoardEnglish;

  constructor(private m: DataManagerService, private route: ActivatedRoute, public _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.m.resreqEnglishInfoBoardDetail(this.id).subscribe(t => this.infoB = t);
  }

  deleteGuide() {
    if (confirm('Delete guide?')) {
      this.m.resreqEnglishDeleteBoard(this.infoB.infoBoardName).subscribe(t => {
        console.log("Deleted guide: " + this.id);
        this.router.navigate(['/home']);
      });
    }
  }
}
