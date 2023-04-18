import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataManagerService } from './data-manager.service';
import { equipmentEnglish } from './data-classes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weapon-edit',
  templateUrl: './weapon-edit.component.html',
  styleUrls: ['./weapon-edit.component.css']
})
export class WeaponEditComponent implements OnInit {

  weapon: equipmentEnglish;
  id: string;

  constructor(private m: DataManagerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['name'];
    this.m.resreqEnglishEquipsDetail(this.id).subscribe(t => this.weapon = t);
  }

  WeaponSave(): void {
    this.m.resreqEnglishEditWeapon(this.id, this.weapon).subscribe(t => this.weapon = t);
    alert("Weapon saved!");
    this.router.navigate(['/weapon']);
  }
}
