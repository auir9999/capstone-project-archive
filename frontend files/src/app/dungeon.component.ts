import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataManagerService } from './data-manager.service';
import { dungeonEnglish } from './data-classes';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.css']
})
export class DungeonComponent implements OnInit {

  dungeon: dungeonEnglish;
  id: string;

  constructor(private m: DataManagerService, private route: ActivatedRoute, public _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['name'];
    this.m.resreqEnglishDungeonDetail(this.id).subscribe(t => this.dungeon = t);
  }

  deleteDungeon() {
    if (confirm('Delete dungeon?')) {
      this.m.resreqEnglishDeleteDungeon(this.id).subscribe(t => {
        console.log("Deleted dungeon: " + this.id);
        this.router.navigate(['/dungeon']);
      });
    }
  }
}
