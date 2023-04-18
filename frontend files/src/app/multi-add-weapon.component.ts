import { Component, OnInit } from '@angular/core';
import {equipmentEnglish} from './data-classes'; 
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { DataManagerService } from './data-manager.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-multi-add-weapon',
  templateUrl: './multi-add-weapon.component.html',
  styleUrls: ['./multi-add-weapon.component.css']
})
export class MultiAddWeaponComponent implements OnInit {

  multiEquip: FormGroup;
  equipTemp: equipmentEnglish;

  constructor(private fb: FormBuilder,private m: DataManagerService, private router: Router) { 
    this.multiEquip = this.fb.group({
      equips: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.equipTemp = new equipmentEnglish();
    this.equipTemp.equipType = "temp";
    this.equipTemp.equipSlot = "temp";
    this.equipTemp.equipSkill = "temp";
    this.equipTemp.equipAbilities = "temp";
    this.equipTemp.equipImgType = "png";
    this.addEquip();
  }
  equips(): FormArray {
    return this.multiEquip.get("equips") as FormArray
  }
  newEquip(): FormGroup {
    return this.fb.group({
      name: '',
      img: '',
    })
  }
  addEquip(){
    this.equips().push(this.newEquip());
  }
  removeEquip(i: number){
    this.equips().removeAt(i);
  }
  onSubmit(){
    var array = this.multiEquip.get("equips").value;
    for (var i = 0; i != array.length; i++){
      this.equipTemp.equipName = array[i].name;
      this.equipTemp.equipImg = array[i].img;
      this.m.resreqEnglishAddWeapon(this.equipTemp).subscribe(t => this.equipTemp = t);
    }
    alert("Weapon saved!");
    this.router.navigate(['/weapon']);
  }
}
