import { HostListener, Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { unitEnglish } from './data-classes';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  units: unitEnglish[];
  og_units: unitEnglish[]; //original array of unit to reset filter
  term: string;

  constructor(private m: DataManagerService, public _auth: AuthService) { }

  ngOnInit(): void {
    this.m.resreqEnglishUnitsGetAll().subscribe(t => {
      this.units = t;
      this.og_units = t;
    });
  }

  resetFilter() {
    this.units = this.og_units;
  }

  onSelectFilter(uType: string) {
    this.units = [];
    switch (uType) {
      case 'Fire':
        this.og_units.forEach(unit => {
          if (unit.unitType == uType) {
            this.units.push(unit);
          }
        });
        break;
      case 'Water':
        this.og_units.forEach(unit => {
          if (unit.unitType == uType)
            this.units.push(unit);
        });
        break;
      case 'Earth':
        this.og_units.forEach(unit => {
          if (unit.unitType == uType)
            this.units.push(unit);
        });
        break;
      case 'Light':
        this.og_units.forEach(unit => {
          if (unit.unitType == uType)
            this.units.push(unit);
        });
        break;
      case 'Dark':
        this.og_units.forEach(unit => {
          if (unit.unitType == uType)
            this.units.push(unit);
        });
        break;
      default:
        break;
    }
  }

  onSelectSort(param: string) {
    switch (param) {
      case 'HPa':
        this.units.sort((a, b) => (Number(a.unitStatHP) > Number(b.unitStatHP) ? 1 : -1));
        break;
      case 'HPd':
        this.units.sort((a, b) => (Number(a.unitStatHP) > Number(b.unitStatHP) ? -1 : 1));
        break;
      case 'ATKa':
        this.units.sort((a, b) => (Number(a.unitStatATK) > Number(b.unitStatATK) ? 1 : -1));
        break;
      case 'ATKd':
        this.units.sort((a, b) => (Number(a.unitStatATK) > Number(b.unitStatATK) ? -1 : 1));
        break;
      case 'DEFa':
        this.units.sort((a, b) => (Number(a.unitStatDEF) > Number(b.unitStatDEF) ? 1 : -1));
        break;
      case 'DEFd':
        this.units.sort((a, b) => (Number(a.unitStatDEF) > Number(b.unitStatDEF) ? -1 : 1));
        break;
      case 'Raritya':
        this.units.sort((a, b) => (a.unitMaxStar > b.unitMaxStar ? 1 : -1));
        break;
      case 'Rarityd':
        this.units.sort((a, b) => (a.unitMaxStar > b.unitMaxStar ? -1 : 1));
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
