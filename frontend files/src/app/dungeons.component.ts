import { HostListener, Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { dungeonEnglish } from './data-classes';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-dungeons',
  templateUrl: './dungeons.component.html',
  styleUrls: ['./dungeons.component.css']
})
export class DungeonsComponent implements OnInit {

  dungeons: dungeonEnglish[];
  og_dungeons: dungeonEnglish[];
  term: string;

  constructor(private m: DataManagerService, public _auth: AuthService) { }

  ngOnInit(): void {
    this.m.resreqEnglishDungeonGetAll().subscribe(t => {
      this.dungeons = t;
      this.og_dungeons = t;
    });
  }

  resetFilter() {
    this.dungeons = this.og_dungeons;
  }

  onSelectFilter(dType: string) {
    this.dungeons = [];
    switch (dType) {
      case 'DOT':
        this.og_dungeons.forEach(dungeon => {
          if (dungeon.dungeonType.toUpperCase() == 'DOT') {
            this.dungeons.push(dungeon);
          }
        });
        break;
      case 'ER':
        this.og_dungeons.forEach(dungeon => {
          if (dungeon.dungeonType.toUpperCase() == 'ER')
            this.dungeons.push(dungeon);
        });
        break;
      case 'UL':
        this.og_dungeons.forEach(dungeon => {
          if (dungeon.dungeonType.toUpperCase() == 'UL')
            this.dungeons.push(dungeon);
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
