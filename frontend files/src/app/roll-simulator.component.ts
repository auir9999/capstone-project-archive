import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { unitEnglish, rollable, banner } from './data-classes';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-roll-simulator',
  templateUrl: './roll-simulator.component.html',
  styleUrls: ['./roll-simulator.component.css']
})

export class RollSimulatorComponent implements OnInit {
  units: unitEnglish[];
  rollCount: number;
  gems: number;
  costUSD: number;
  costCAD: number;
  listOfBanners: banner[];
  selectedBanner: banner;
  pulledUnits: unitEnglish[] = [];
  id: string;

  constructor(private m: DataManagerService, public _auth: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['name'];
    this.m.resreqEnglishUnitsGetAll().subscribe(t => this.units = t);
    this.m.resreqBannerGetAll().subscribe(t => this.listOfBanners = t)
    this.rollCount = 0;
    this.gems = 0;
    this.costUSD = 0;
    this.costCAD = 0;
  }

  onSelect(bannerS: banner): void {
    this.selectedBanner = bannerS;
  }

  onSinglePull() {
    this.pulledUnits = [];
    this.gems += 50;
    this.costCAD += 1.39;
    this.costUSD += 0.99;
    this.costCAD = Math.round(this.costCAD * 100 + Number.EPSILON) / 100;
    this.costUSD = Math.round(this.costUSD * 100 + Number.EPSILON) / 100;
    this.rollCount += 1;
    var unitPulled = this.units[Math.floor(Math.random() * this.selectedBanner.bannerUnits.length)];
    this.selectedBanner.bannerUnits.forEach(bannerUnit => {
      if (bannerUnit == unitPulled.unitName) {
        this.pulledUnits.push(unitPulled);
      }
    });
  }

  onMultiPull() {
    this.pulledUnits = [];
    this.gems += 500;
    this.costCAD += 13.90;
    this.costUSD += 9.90;
    this.costCAD = Math.round(this.costCAD * 100 + Number.EPSILON) / 100;
    this.costUSD = Math.round(this.costUSD * 100 + Number.EPSILON) / 100;
    this.rollCount += 10;
    for (let i = 0; i < 10; i++) {
      var unitPulled = this.units[Math.floor(Math.random() * this.selectedBanner.bannerUnits.length)];
      this.selectedBanner.bannerUnits.forEach(bannerUnit => {
        if (bannerUnit == unitPulled.unitName) {
          this.pulledUnits.push(unitPulled);
        }
      });
    }
  }

  onReset() {
    this.pulledUnits = [];
    this.rollCount = 0;
    this.gems = 0;
    this.costUSD = 0;
    this.costCAD = 0;
  }

  deleteBanner() {
    if (confirm('Delete banner?')) {
      this.m.resreqEnglishDeleteBanner(this.selectedBanner.bannerName).subscribe(t => {
        console.log("Deleted banner: " + this.selectedBanner.bannerName);
        location.reload();
        return false;
      });
    }
  }
}
