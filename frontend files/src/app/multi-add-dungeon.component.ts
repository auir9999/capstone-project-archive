import { Component, OnInit } from '@angular/core';
import { dungeonEnglish } from './data-classes';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { DataManagerService } from './data-manager.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-multi-add-dungeon',
  templateUrl: './multi-add-dungeon.component.html',
  styleUrls: ['./multi-add-dungeon.component.css']
})
export class MultiAddDungeonComponent implements OnInit {

  multiDungeon: FormGroup;
  dungeonTemp: dungeonEnglish;

  constructor(private fb: FormBuilder,private m: DataManagerService, private router: Router) { 
    this.multiDungeon = this.fb.group({
      dungeons:this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.dungeonTemp = new dungeonEnglish();
    this.dungeonTemp.dungeonDetail = "temp";
    this.dungeonTemp.dungeonImgType = "png";
    this.dungeonTemp.dungeonType = "temp";
    this.addDungeon();
  }

  dungeons(): FormArray {
    return this.multiDungeon.get("dungeons") as FormArray
  }
  newDungeon(): FormGroup{
    return this.fb.group({
      name:'',
      img:'',
    })
  }
  addDungeon(){
    this.dungeons().push(this.newDungeon());
  }
  removeDungeon(i:number){
    this.dungeons().removeAt(i);
  }

  onSubmit(){
    var array = this.multiDungeon.get("dungeons").value;
    for(var i = 0; i != array.length; i++){
      this.dungeonTemp.dungeonName = array[i].name;
      this.dungeonTemp.dungeonImg = array[i].img;
      this.m.resreqEnglishAddDungeon(this.dungeonTemp).subscribe(t => this.dungeonTemp = t);
    }
    alert("Dungeon saved!");
    this.router.navigate(['/dungeon']);
  }
}
