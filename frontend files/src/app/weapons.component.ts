import { HostListener, Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { equipmentEnglish } from './data-classes';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  weapons:equipmentEnglish[];
  og_weapons: equipmentEnglish[];
  term: string;

  constructor(private m:DataManagerService, public _auth: AuthService) { }

  ngOnInit(): void {
    this.m.resreqEnglishEquipsGetAll().subscribe(t=>{
      this.weapons=t;
      this.og_weapons = t;
    });
  }

  resetFilter() {
    this.weapons = this.og_weapons;
  }

  onSelectFilter(wType: string) {
    this.weapons = [];
    switch (wType) {
      case 'Physical':
        this.og_weapons.forEach(equip => {
          if (equip.equipSlot.toUpperCase().includes('PHYSICAL')) {
            this.weapons.push(equip);
          }
        });
        break;
      case 'Defense':
        this.og_weapons.forEach(equip => {
          if (equip.equipSlot.toUpperCase().includes('DEFENSE'))
            this.weapons.push(equip);
        });
        break;
      case 'Support':
        this.og_weapons.forEach(equip => {
          if (equip.equipSlot.toUpperCase().includes('SUPPORT'))
            this.weapons.push(equip);
        });
        break;
      case 'Magic':
        this.og_weapons.forEach(equip => {
          if (equip.equipSlot.toUpperCase().includes('MAGIC'))
            this.weapons.push(equip);
        });
        break;
      default:
        break;
    }
  }
  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
