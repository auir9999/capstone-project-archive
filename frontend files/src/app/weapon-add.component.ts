import { Component, OnInit } from '@angular/core';
import { equipmentEnglish } from './data-classes';
import { DataManagerService } from './data-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weapon-add',
  templateUrl: './weapon-add.component.html',
  styleUrls: ['./weapon-add.component.css']
})
export class WeaponAddComponent implements OnInit {

  newWeapon: equipmentEnglish;

  constructor(private m: DataManagerService, private router: Router) { }

  ngOnInit(): void {
    this.newWeapon = new equipmentEnglish();
  }

  WeaponSave(): void {
    this.m.resreqEnglishAddWeapon(this.newWeapon).subscribe(t => this.newWeapon = t);
    alert("Weapon saved!");
    this.router.navigate(['/weapon']);
  }

}
