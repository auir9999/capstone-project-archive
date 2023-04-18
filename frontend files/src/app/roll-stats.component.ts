import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { unitEnglish } from './data-classes';

@Component({
  selector: 'app-roll-stats',
  templateUrl: './roll-stats.component.html',
  styleUrls: ['./roll-stats.component.css']
})
export class RollStatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
