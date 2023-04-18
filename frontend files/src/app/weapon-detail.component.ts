import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataManagerService } from './data-manager.service';
import { equipmentEnglish } from './data-classes';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.css']
})
export class WeaponDetailComponent implements OnInit {

  weapon: equipmentEnglish;
  id: string;

  constructor(private m: DataManagerService, private route: ActivatedRoute, public _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['name'];
    this.m.resreqEnglishEquipsDetail(this.id).subscribe(t => this.weapon = t);
  }

  deleteWeapon() {
    if (confirm('Delete weapon?')) {
      this.m.resreqEnglishDeleteEquip(this.id).subscribe(t => {
        console.log("Deleted weapon: " + this.id);
        this.router.navigate(['/weapon']);
      });
    }
  }

}
