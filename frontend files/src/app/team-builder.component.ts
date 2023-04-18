import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { unitEnglish, teamEnglish, equipmentEnglish } from './data-classes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-builder',
  templateUrl: './team-builder.component.html',
  styleUrls: ['./team-builder.component.css']
})
export class TeamBuilderComponent implements OnInit {

  units: unitEnglish[];
  equips: equipmentEnglish[];
  team: teamEnglish;
  selectedUnits = [];
  selectedWepA = [];
  selectedWepB = [];
  selectedWepC = [];

  constructor(private m: DataManagerService, private router: Router) { }

  ngOnInit(): void {
    this.team = new teamEnglish();
    this.team.teamUnit = this.team.teamUnit || [];
    this.team.comments = this.team.comments || [];
    this.m.resreqEnglishUnitsGetAll().subscribe(t => this.units = t);
    this.m.resreqEnglishEquipsGetAll().subscribe(t => this.equips = t);
    for (var i = 0; i < 4; i++) {
      var tu = {
        unit: "",
        unitSlotAEquipped: "",
        unitSlotBEquipped: "",
        unitSlotCEquipped: ""
      }
      this.team.teamUnit.push(tu);
    }
  }

  onUnitSelected(unitsSelected) {
    var length = (document.getElementById("multiselect") as HTMLSelectElement).selectedOptions.length;
    this.selectedUnits = unitsSelected;
    if (length == 4) {
      (document.getElementById("multiselect") as HTMLSelectElement).disabled = true;
    }
  }

  onSlotASelected(wepSelected) {
    this.selectedWepA = wepSelected;
  }

  onSlotBSelected(wepSelected) {
    this.selectedWepB = wepSelected;
  }

  onSlotCSelected(wepSelected) {
    this.selectedWepC = wepSelected;
  }

  TeamSave(): void {
    for (let i = 0; i < this.selectedUnits.length; i++) {
      var a = (document.getElementById("selectA" + i) as HTMLInputElement).value,
        b = (document.getElementById("selectB" + i) as HTMLInputElement).value,
        c = (document.getElementById("selectC" + i) as HTMLInputElement).value;
      this.team.teamUnit[i].unit = this.selectedUnits[i];
      this.team.teamUnit[i].unitSlotAEquipped = a;
      this.team.teamUnit[i].unitSlotBEquipped = b;
      this.team.teamUnit[i].unitSlotCEquipped = c;
    }
    this.m.resreqEnglishAddTeam(this.team).subscribe(t => this.team = t);
    alert("Team saved!");
    this.router.navigate(['/team']);
  }
}
