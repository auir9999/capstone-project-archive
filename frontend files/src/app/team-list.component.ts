import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { dungeonEnglish, teamEnglish, unitEnglish } from './data-classes';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: teamEnglish[];
  units: unitEnglish[];
  dungeons: dungeonEnglish[];

  constructor(private m: DataManagerService) { }

  ngOnInit(): void {
    this.m.resreqEnglishTeamGetAll().subscribe(t => this.teams = t);
    this.m.resreqEnglishUnitsGetAll().subscribe(t => this.units = t);
    this.m.resreqEnglishDungeonGetAll().subscribe(t => this.dungeons = t);
  }

}
