import { Injectable } from '@angular/core';
import { equipmentEnglish, unitEnglish, teamEnglish, dungeonEnglish, comment, banner, infoBoardEnglish } from './data-classes';
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BannerCreationComponent } from './banner-creation.component';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(private http: HttpClient) { }
  private url: string = "https://backend-gs.herokuapp.com/";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  resreqEnglishUnitsGetAll(): Observable<unitEnglish[]> {
    return this.http.get<unitEnglish[]>(`${this.url}api/english/units/`);
  }
  resreqEnglishUnitsDetail(name: string): Observable<unitEnglish> {
    return this.http.get<unitEnglish>(`${this.url}api/english/units/${name}`);
  }
  resreqEnglishEquipsGetAll(): Observable<equipmentEnglish[]> {
    return this.http.get<equipmentEnglish[]>(`${this.url}api/english/equips/`);
  }
  resreqEnglishEquipsDetail(name: string): Observable<equipmentEnglish> {
    return this.http.get<equipmentEnglish>(`${this.url}api/english/equips/${name}`);
  }
  resreqEnglishDungeonGetAll(): Observable<dungeonEnglish[]> {
    return this.http.get<dungeonEnglish[]>(`${this.url}api/english/dungeons/`);
  }
  resreqEnglishDungeonDetail(name: string): Observable<dungeonEnglish> {
    return this.http.get<dungeonEnglish>(`${this.url}api/english/dungeons/${name}`);
  }
  resreqEnglishTeamGetAll(): Observable<teamEnglish[]> {
    return this.http.get<teamEnglish[]>(`${this.url}api/english/teams/`);
  }
  resreqEnglishTeamDetail(id: string): Observable<teamEnglish> {
    return this.http.get<teamEnglish>(`${this.url}api/english/teams/id/${id}`);
  }
  resreqEnglishInfoBoardGetAll(): Observable<infoBoardEnglish[]> {
    return this.http.get<infoBoardEnglish[]>(`${this.url}api/english/board/`);
  }
  resreqEnglishInfoBoardDetail(id: string): Observable<infoBoardEnglish> {
    return this.http.get<infoBoardEnglish>(`${this.url}api/english/board/id/${id}`);
  }
  resreqBannerCreation(newBanner: banner): Observable<banner> {
    return this.http.post<banner>(`${this.url}api/english/banner/add`, newBanner)
      .pipe(
        tap((newItem: banner) => console.log(`Added new banner for ${newItem.bannerName}`)),
        catchError(this.handleError<banner>(`Add Banner`))
      );
  }
  resreqBannerGetAll(): Observable<banner[]> {
    return this.http.get<banner[]>(`${this.url}api/english/banner/`);
  }
  resreqCommentGetAll(): Observable<comment[]> {
    return this.http.get<comment[]>(`${this.url}api/english/comments/`);
  }
  resreqEnglishCommentDetail(id: string): Observable<comment> {
    return this.http.get<comment>(`${this.url}api/english/comments/${id}`);
  }
  resreqEnglishAddComment(newComment: comment): Observable<comment> {
    return this.http.post<comment>(`${this.url}api/english/comments/add`, newComment)
      .pipe(
        tap((newItem: comment) => console.log(`Added new comment for ${newItem.commenterName}`)),
        catchError(this.handleError<comment>(`Add Comment`))
      );
  }
  resreqEnglishEditComment(id: string, newComment: comment): Observable<comment> {
    return this.http.put<comment>(`${this.url}api/english/comments/edit/${id}`, newComment)
      .pipe(
        tap((newItem: comment) => console.log(`Added new comment for ${newItem.commenterName}`)),
        catchError(this.handleError<comment>(`Add comment`))
      );
  }
  resreqEnglishAddTeam(newTeam: teamEnglish): Observable<teamEnglish> {
    return this.http.post<teamEnglish>(`${this.url}api/english/teams/add`, newTeam)
      .pipe(
        tap((newItem: teamEnglish) => console.log(`Added new team for ${newItem.teamName}`)),
        catchError(this.handleError<teamEnglish>(`Add team`))
      );
  }
  resreqEnglishEditTeam(id: string, newTeam: teamEnglish): Observable<teamEnglish> {
    return this.http.put<teamEnglish>(`${this.url}api/english/teams/edit/${id}`, newTeam)
      .pipe(
        tap((newItem: teamEnglish) => console.log(`Added new team for ${newItem.teamName}`)),
        catchError(this.handleError<teamEnglish>(`Add team`))
      );
  }
  resreqEnglishAddUnit(newUnit: unitEnglish): Observable<unitEnglish> {
    return this.http.post<unitEnglish>(`${this.url}api/english/units/add`, newUnit)
      .pipe(
        tap((newItem: unitEnglish) => console.log(`Added new unit for ${newItem.unitNName}`)),
        catchError(this.handleError<unitEnglish>(`Add unit`))
      );
  }
  resreqEnglishEditUnit(id: string, newUnit: unitEnglish): Observable<unitEnglish> {
    return this.http.put<unitEnglish>(`${this.url}api/english/units/edit/${id}`, newUnit)
      .pipe(
        tap((newItem: unitEnglish) => console.log(`Added new unit for ${newItem.unitNName}`)),
        catchError(this.handleError<unitEnglish>(`Add unit`))
      );
  }
  resreqEnglishAddDungeon(newDungeon: dungeonEnglish): Observable<dungeonEnglish> {
    return this.http.post<dungeonEnglish>(`${this.url}api/english/dungeons/add`, newDungeon)
      .pipe(
        tap((newItem: dungeonEnglish) => console.log(`Added new dungeon for ${newItem.dungeonName}`)),
        catchError(this.handleError<dungeonEnglish>(`Add dungeon`))
      );
  }
  resreqEnglishEditDungeon(id: string, newDungeon: dungeonEnglish): Observable<dungeonEnglish> {
    return this.http.put<dungeonEnglish>(`${this.url}api/english/dungeons/edit/${id}`, newDungeon)
      .pipe(
        tap((newItem: dungeonEnglish) => console.log(`Added new dungeon for ${newItem.dungeonName}`)),
        catchError(this.handleError<dungeonEnglish>(`Add dungeon`))
      );
  }
  resreqEnglishAddWeapon(newWeapon: equipmentEnglish): Observable<equipmentEnglish> {
    return this.http.post<equipmentEnglish>(`${this.url}api/english/equips/add`, newWeapon)
      .pipe(
        tap((newItem: equipmentEnglish) => console.log(`Added new equipment for ${newItem.equipName}`)),
        catchError(this.handleError<equipmentEnglish>(`Add equipment`))
      );
  }
  resreqEnglishEditWeapon(id: string, newWeapon: equipmentEnglish): Observable<equipmentEnglish> {
    return this.http.put<equipmentEnglish>(`${this.url}api/english/equips/edit/${id}`, newWeapon)
      .pipe(
        tap((newItem: equipmentEnglish) => console.log(`Added new equipment for ${newItem.equipName}`)),
        catchError(this.handleError<equipmentEnglish>(`Add equipment`))
      );
  }
  resreqEnglishAddInfoBoard(newBoard: infoBoardEnglish): Observable<infoBoardEnglish> {
    return this.http.post<infoBoardEnglish>(`${this.url}api/english/board/add`, newBoard)
      .pipe(
        tap((newItem: infoBoardEnglish) => console.log(`Added new infoBoard for ${newItem.infoBoardName}`)),
        catchError(this.handleError<infoBoardEnglish>(`Add infoBoard`))
      );
  }
  resreqEnglishEditInfoBoard(id: string, newBoard: infoBoardEnglish): Observable<infoBoardEnglish> {
    return this.http.put<infoBoardEnglish>(`${this.url}api/english/board/edit/${id}`, newBoard)
      .pipe(
        tap((newItem: infoBoardEnglish) => console.log(`Added new infoBoard for ${newItem.infoBoardName}`)),
        catchError(this.handleError<infoBoardEnglish>(`Add infoBoard`))
      );
  }
  resreqEnglishDeleteComment(id: string): Observable<comment> {
    return this.http.delete<comment>(`${this.url}api/english/comments/delete/${id}`);
  }
  resreqEnglishDeleteUnit(id: string): Observable<unitEnglish> {
    return this.http.delete<unitEnglish>(`${this.url}api/english/units/delete/${id}`);
  }
  resreqEnglishDeleteEquip(id: string): Observable<equipmentEnglish> {
    return this.http.delete<equipmentEnglish>(`${this.url}api/english/equips/delete/${id}`);
  }
  resreqEnglishDeleteTeam(id: string): Observable<teamEnglish> {
    return this.http.delete<teamEnglish>(`${this.url}api/english/teams/delete/${id}`);
  }
  resreqEnglishDeleteDungeon(id: string): Observable<dungeonEnglish> {
    return this.http.delete<dungeonEnglish>(`${this.url}api/english/dungeons/delete/${id}`);
  }
  resreqEnglishDeleteBanner(id: string): Observable<banner> {
    return this.http.delete<banner>(`${this.url}api/english/banner/delete/${id}`);
  }
  resreqEnglishDeleteBoard(id: string): Observable<infoBoardEnglish> {
    return this.http.delete<infoBoardEnglish>(`${this.url}api/english/board/delete/${id}`);
  }
}
