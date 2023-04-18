import { Component, OnInit } from '@angular/core';
import { unitEnglish } from './data-classes';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { DataManagerService } from './data-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multi-add-unit',
  templateUrl: './multi-add-unit.component.html',
  styleUrls: ['./multi-add-unit.component.css']
})
export class MultiAddUnitComponent implements OnInit {

  multiUnit: FormGroup;
  unitTemp: unitEnglish;

  constructor(private fb: FormBuilder,private m: DataManagerService, private router: Router) {
    this.multiUnit = this.fb.group({
      units: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.unitTemp = new unitEnglish();
    this.unitTemp.unitRole = "temp";
    this.unitTemp.unitTier = "temp";
    this.unitTemp.unitImg = "png";
    this.unitTemp.unitType = "tbd";
    this.unitTemp.unitRace = "temp";
    this.unitTemp.unitStatHP = "temp";
    this.unitTemp.unitStatATK = "temp";
    this.unitTemp.unitStatDEF = "temp";
    this.unitTemp.unitStatHPB = "temp";
    this.unitTemp.unitStatATKB = "temp";
    this.unitTemp.unitStatDEFB = "temp";
    this.unitTemp.unitSlotA = "temp";
    this.unitTemp.unitSlotB = "temp";
    this.unitTemp.unitSlotC = "temp";
    this.unitTemp.unitSkill = "temp";
    this.unitTemp.unitArts = "temp";
    this.unitTemp.unitTrueArts = "temp";
    this.unitTemp.unitAbilities = "temp";
    this.unitTemp.unitMaterials = "temp";
    this.unitTemp.unitTW = "none";
    this.addUnit();
  }

  units(): FormArray {
    return this.multiUnit.get("units") as FormArray
  }

  newUnit(): FormGroup {
    return this.fb.group({
      name: '',
      nname: '',
      img: '',
    })
  }
  addUnit() {
    this.units().push(this.newUnit());
  }
  removeUnit(i: number) {
    this.units().removeAt(i);
  }

  onSubmit() {
    var array = this.multiUnit.get("units").value;
    for (var i = 0; i != array.length; i++){
      this.unitTemp.unitName = array[i].name;
      this.unitTemp.unitNName = array[i].nname;
      this.unitTemp.unitImg = array[i].img;
      this.m.resreqEnglishAddUnit(this.unitTemp).subscribe(t => this.unitTemp = t);
    }
    //this.m.resreqEnglishAddUnit(this.unitTemp).subscribe(t => this.unitTemp = t);
    alert("Unit saved!");
    this.router.navigate(['/unit']);
    // this.unitTemp.unitName
    // this.unitTemp.unitNName
    // this.unitTemp.unitImg
  }
}
