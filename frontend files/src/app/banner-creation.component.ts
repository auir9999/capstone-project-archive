import { Component, OnInit } from '@angular/core';
import { banner, unitEnglish } from './data-classes';
import { DataManagerService } from './data-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-creation',
  templateUrl: './banner-creation.component.html',
  styleUrls: ['./banner-creation.component.css']
})
export class BannerCreationComponent implements OnInit {

  newBanner: banner;
  units: unitEnglish[];
  selectedUnits = [];

  constructor(private m: DataManagerService, private router: Router) { }

  ngOnInit(): void {
    this.m.resreqEnglishUnitsGetAll().subscribe(t => this.units = t);
    this.newBanner = new banner();
  }

  onModelChange(unitsSelected) {
    var length = (document.getElementById("multiselect") as HTMLSelectElement).selectedOptions.length;
    this.selectedUnits = unitsSelected;
    if (length == 10) {
      (document.getElementById("multiselect") as HTMLSelectElement).disabled = true;
    }
  }

  BannerSave(): void {
    this.newBanner.bannerUnits = this.selectedUnits;
    this.m.resreqBannerCreation(this.newBanner).subscribe(t => this.newBanner = t);
    alert("Banner saved!");
    this.router.navigate(['/roll']);
  }

}
