import { Component, OnInit } from '@angular/core';
import { unitEnglish } from './data-classes';
import { DataManagerService } from './data-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-add',
  templateUrl: './unit-add.component.html',
  styleUrls: ['./unit-add.component.css']
})
export class UnitAddComponent implements OnInit {

  newUnit: unitEnglish;

  constructor(private m: DataManagerService, private router: Router) { }

  ngOnInit(): void {
    this.newUnit = new unitEnglish();
  }

  UnitSave(): void {
    this.m.resreqEnglishAddUnit(this.newUnit).subscribe(t => this.newUnit = t);
    alert("Unit saved!");
    this.router.navigate(['/unit']);
  }

}
