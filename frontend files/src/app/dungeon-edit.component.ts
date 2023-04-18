import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataManagerService } from './data-manager.service';
import { dungeonEnglish } from './data-classes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dungeon-edit',
  templateUrl: './dungeon-edit.component.html',
  styleUrls: ['./dungeon-edit.component.css']
})
export class DungeonEditComponent implements OnInit {

  dungeon: dungeonEnglish;
  id: string;

  constructor(private m: DataManagerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['name'];
    this.m.resreqEnglishDungeonDetail(this.id).subscribe(t => this.dungeon = t);
  }

  DungeonSave(): void {
    this.m.resreqEnglishEditDungeon(this.id, this.dungeon).subscribe(t => this.dungeon = t);
    alert("Dungeon saved!");
    this.router.navigate(['/dungeon']);
  }
}
