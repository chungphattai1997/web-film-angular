import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FilmManagementComponent } from './film-management/film-management.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { UserManagementComponent } from './user-management/user-management.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MainPanelComponent } from './admin-layout/main-panel/main-panel.component';
import { SideBarComponent } from './admin-layout/side-bar/side-bar.component';
import { FilmAddComponent } from './film-management/film-add/film-add.component';
import { FilmEditComponent } from './film-management/film-edit/film-edit.component';
import { CategoryAddComponent } from './category-management/category-add/category-add.component';
import { CategoryEditComponent } from './category-management/category-edit/category-edit.component';
import { FormsModule } from '@angular/forms';

const adminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: '', component: FilmManagementComponent },
      { path: 'user-management', component: UserManagementComponent },
      {
        path: 'film-management', children: [
          { path: '', component: FilmManagementComponent },
          { path: 'add', component: FilmAddComponent },
          { path: 'edit/:id', component: FilmEditComponent }
        ]
      },
      {
        path: 'category-management', children: [
          { path: '', component: CategoryManagementComponent },
          { path: 'add', component: CategoryAddComponent },
          { path: 'edit', component: CategoryEditComponent }
        ]
      },
    ], canActivate: [AuthGuard]
  },

  { path: '**', pathMatch: 'full', redirectTo: '' }
];


@NgModule({
  declarations: [
    FilmManagementComponent,
    UserManagementComponent,
    CategoryManagementComponent,
    AdminLayoutComponent,
    MainPanelComponent,
    SideBarComponent,
    FilmAddComponent,
    FilmEditComponent,
    CategoryAddComponent,
    CategoryEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { }
