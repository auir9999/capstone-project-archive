import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { DungeonComponent } from './dungeon.component';
import { DungeonsComponent } from './dungeons.component';
import { DungeonAddComponent } from './dungeon-add.component';
import { RollSimulatorComponent } from './roll-simulator.component';
import { BannerCreationComponent } from './banner-creation.component';
import { TeamBuilderComponent } from './team-builder.component';
import { TeamDetailComponent } from './team-detail.component';
import { TeamListComponent } from './team-list.component';
import { UnitComponent } from './unit.component';
import { UnitsComponent } from './units.component';
import { UnitAddComponent } from './unit-add.component';
import { NotFoundComponent } from './not-found.component';
import { WeaponsComponent } from './weapons.component';
import { WeaponDetailComponent } from './weapon-detail.component';
import { WeaponAddComponent } from './weapon-add.component';
import { HomeComponent } from './home.component';
import { DungeonEditComponent } from './dungeon-edit.component';
import { WeaponEditComponent } from './weapon-edit.component';
import { UnitEditComponent } from './unit-edit.component';
import { InfoBoardComponent } from './info-board.component';
import { InfoBoardAddComponent } from './info-board-add.component';
import { InfoBoardEditComponent } from './info-board-edit.component';
import { InfoBoardDetailComponent } from './info-board-detail.component';
import { MultiAddUnitComponent } from './multi-add-unit.component';
import { MultiAddDungeonComponent } from './multi-add-dungeon.component';
import { MultiAddWeaponComponent } from './multi-add-weapon.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'dungeon', component: DungeonsComponent },
  { path: 'dungeon/add', component: DungeonAddComponent, canActivate: [AuthGuard] },
  { path: 'dungeon/addMulti', component: MultiAddDungeonComponent, canActivate: [AuthGuard] },
  { path: 'dungeon/edit/:name', component: DungeonEditComponent, canActivate: [AuthGuard] },
  { path: 'dungeon/:name', component: DungeonComponent },
  { path: 'unit', component: UnitsComponent },
  { path: 'unit/add', component: UnitAddComponent, canActivate: [AuthGuard] },
  { path: 'unit/addMulti', component: MultiAddUnitComponent, canActivate: [AuthGuard] },
  { path: 'unit/edit/:name', component: UnitEditComponent, canActivate: [AuthGuard] },
  { path: 'unit/:name', component: UnitComponent },
  { path: 'team', component: TeamListComponent },
  { path: 'team/add', component: TeamBuilderComponent },
  { path: 'team/:name', component: TeamDetailComponent },
  { path: 'roll', component: RollSimulatorComponent },
  { path: 'roll/add', component: BannerCreationComponent, canActivate: [AuthGuard] },
  { path: 'weapon', component: WeaponsComponent },
  { path: 'weapon/add', component: WeaponAddComponent, canActivate: [AuthGuard] },
  { path: 'weapon/addMulti', component: MultiAddWeaponComponent, canActivate: [AuthGuard] },
  { path: 'weapon/edit/:name', component: WeaponEditComponent, canActivate: [AuthGuard] },
  { path: 'weapon/:name', component: WeaponDetailComponent },
  { path: 'guide', component: InfoBoardComponent },  
  { path: 'guide/add', component: InfoBoardAddComponent, canActivate: [AuthGuard]  },
  { path: 'guide/edit/:id', component: InfoBoardEditComponent, canActivate: [AuthGuard]  },
  { path: 'guide/:id', component: InfoBoardDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
