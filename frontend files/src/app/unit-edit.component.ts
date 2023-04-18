import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataManagerService } from './data-manager.service';
import { unitEnglish } from './data-classes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.css']
})
export class UnitEditComponent implements OnInit {

  unit: unitEnglish;
  id: string;

  constructor(private m: DataManagerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['name'];
    this.m.resreqEnglishUnitsDetail(this.id).subscribe(t => this.unit = t);
  }

  UnitSave(): void {
    this.m.resreqEnglishEditUnit(this.id, this.unit).subscribe(t => this.unit = t);
    alert("Unit saved!");
    this.router.navigate(['/unit']);
  }
}
