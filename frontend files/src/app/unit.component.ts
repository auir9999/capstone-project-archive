import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataManagerService } from './data-manager.service';
import { unitEnglish } from './data-classes';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  unit: unitEnglish;
  id: string;

  constructor(private m: DataManagerService, private route: ActivatedRoute, public _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['name'];
    this.m.resreqEnglishUnitsDetail(this.id).subscribe(t => this.unit = t);
  }

  deleteUnit() {
    if (confirm('Delete unit?')) {
      this.m.resreqEnglishDeleteUnit(this.id).subscribe(t => {
        console.log("Deleted unit: " + this.id);
        this.router.navigate(['/unit']);
      });
    }
  }

}
