import { Component, OnInit } from '@angular/core';
import { dungeonEnglish } from './data-classes';
import { DataManagerService } from './data-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dungeon-add',
  templateUrl: './dungeon-add.component.html',
  styleUrls: ['./dungeon-add.component.css']
})
export class DungeonAddComponent implements OnInit {

  newDungeon: dungeonEnglish;

  constructor(private m: DataManagerService, private router: Router) { }

  ngOnInit(): void {
    this.newDungeon = new dungeonEnglish();
  }

  DungeonSave(): void {
    this.m.resreqEnglishAddDungeon(this.newDungeon).subscribe(t => this.newDungeon = t);
    alert("Dungeon saved!");
    this.router.navigate(['/dungeon']);
  }

}
