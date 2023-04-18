import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { UsersComponent } from './users/users.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { DungeonComponent } from './dungeon.component';
import { DungeonsComponent } from './dungeons.component';
import { RollSimulatorComponent } from './roll-simulator.component';
import { RollStatsComponent } from './roll-stats.component';
import { TeamBuilderComponent } from './team-builder.component';
import { TeamDetailComponent } from './team-detail.component';
import { TeamListComponent } from './team-list.component';
import { UnitComponent } from './unit.component';
import { UnitsComponent } from './units.component';
import { NotFoundComponent } from './not-found.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { UserComponent } from './user.component';
import { UnitAddComponent } from './unit-add.component';
import { WeaponAddComponent } from './weapon-add.component';
import { DungeonAddComponent } from './dungeon-add.component';
import { WeaponsComponent } from './weapons.component';
import { WeaponDetailComponent } from './weapon-detail.component';
import { BannerCreationComponent } from './banner-creation.component';
import { UnitEditComponent } from './unit-edit.component';
import { DungeonEditComponent } from './dungeon-edit.component';
import { WeaponEditComponent } from './weapon-edit.component';
import { InfoBoardComponent } from './info-board.component';
import { InfoBoardAddComponent } from './info-board-add.component';
import { InfoBoardEditComponent } from './info-board-edit.component';
import { InfoBoardDetailComponent } from './info-board-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MultiAddWeaponComponent } from './multi-add-weapon.component';
import { MultiAddUnitComponent } from './multi-add-unit.component';
import { MultiAddDungeonComponent } from './multi-add-dungeon.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    DungeonComponent,
    DungeonsComponent,
    RollSimulatorComponent,
    RollStatsComponent,
    TeamBuilderComponent,
    TeamDetailComponent,
    TeamListComponent,
    UnitComponent,
    UnitsComponent,
    NotFoundComponent,
    HomeComponent,
    NavComponent,
    UserComponent,
    UnitAddComponent,
    WeaponAddComponent,
    DungeonAddComponent,
    WeaponsComponent,
    WeaponDetailComponent,
    BannerCreationComponent,
    UnitEditComponent,
    DungeonEditComponent,
    WeaponEditComponent,
    InfoBoardComponent,
    InfoBoardAddComponent,
    InfoBoardEditComponent,
    InfoBoardDetailComponent,
    MultiAddWeaponComponent,
    MultiAddUnitComponent,
    MultiAddDungeonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule 
  ],
  providers: [AuthService, AuthGuard, UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }