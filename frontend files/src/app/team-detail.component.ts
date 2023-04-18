import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { DataManagerService } from './data-manager.service';
import { teamEnglish, unitEnglish, dungeonEnglish, comment } from './data-classes';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team: teamEnglish;
  unitList: unitEnglish[];
  unit: unitEnglish;
  dungeons: dungeonEnglish[];
  comments: comment[];
  teamComments: comment[];
  newComment: comment;
  id: string;
  editedComment: comment;

  constructor(private m: DataManagerService, private route: ActivatedRoute, private router: Router, public _auth: AuthService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['name'];
    this.team = this.team || new teamEnglish();
    this.team.comments = this.team.comments || [];
    this.teamComments = [];
    this.m.resreqEnglishTeamDetail(this.id).subscribe(t => {
      this.team = t;
      this.m.resreqCommentGetAll().subscribe(t => {
        this.comments = t;
        this.initTeamComments();
      });
    });
    this.m.resreqEnglishUnitsGetAll().subscribe(t => this.unitList = t);
    this.m.resreqEnglishDungeonGetAll().subscribe(t => this.dungeons = t);
    this.newComment = new comment();
  }

  public getTeamUnit(uname: any) {
    this.unitList.forEach(unit => {
      if (unit.unitName == uname) {
        this.unit = unit;
      }
    });
  }

  initTeamComments() {
    this.team.comments.forEach(teamComment => {
      this.comments.forEach(comment => {
        if (teamComment._id == comment._id)
          this.teamComments.push(comment);
      });
    });
  }

  postComment() {
    this.newComment.commenterName = this._auth.getUser();
    var uniqueID = Date.now().toString(36) + Math.random().toString(36).substr(2);
    this.newComment._id = uniqueID;
    var c = { _id: uniqueID };
    this.team.comments.push(c);
    this.m.resreqEnglishEditTeam(this.id, this.team).subscribe(t => this.team = t);
    this.m.resreqEnglishAddComment(this.newComment).subscribe(t => {
      this.newComment = t;
      location.reload();
      return false;
    });
  }

  editComment(i, c_id, c_content) {
    var ta = document.createElement("textarea");
    ta.setAttribute("class", "form-control");
    ta.setAttribute("rows", "3");
    ta.setAttribute("style", "width: 95%; margin: 0.5rem auto;");
    ta.setAttribute("id", "editedComment");
    var node = document.createTextNode(c_content);
    ta.appendChild(node);
    var comment_parent = document.getElementById("p" + i);
    var comment_child = document.getElementById("c" + i);
    comment_parent.replaceChild(ta, comment_child);
    document.getElementById("b" + i).hidden = false;
    this.m.resreqEnglishCommentDetail(c_id).subscribe(t => this.editedComment = t);
  }

  saveComment(c_id) {
    this.editedComment.dateRevised = new Date().toISOString();
    this.editedComment.commentContent = (<HTMLInputElement>document.getElementById("editedComment")).value;
    this.m.resreqEnglishEditComment(c_id, this.editedComment).subscribe(t => {
      this.editedComment = t;
      location.reload();
      return false;
    });
  }

  deleteComment(i) {
    if (confirm('Delete this comment?')) {
      this.comments.forEach(comment => {
        if (this.teamComments[i]._id == comment._id) {
          this.teamComments.splice(i, 1);
          const index = this.team.comments.indexOf(comment._id);
          this.team.comments.splice(index, 1);
          this.m.resreqEnglishEditTeam(this.id, this.team).subscribe(t => this.team = t);
          this.m.resreqEnglishDeleteComment(comment._id).subscribe(t => console.log("Deleted comment with id: " + comment._id));
        }
      });
    }
  }

  deleteTeam() {
    if (confirm('Delete team?')) {
      this.team.comments.forEach(tComment => {
        this.comments.forEach(comment => {
          if (tComment._id == comment._id) {
            this.m.resreqEnglishDeleteComment(comment._id).subscribe(t => { });
          }
        });
      });
      this.m.resreqEnglishDeleteTeam(this.team.teamName).subscribe(t => {
        console.log("Deleted team: " + this.team.teamName);
        this.router.navigate(['/team']);
      });
    }
  }
}
