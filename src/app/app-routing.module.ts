import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './page/shared/not-found/not-found.component';
import { LoginAdminComponent } from './page/admin/login-admin/login-admin.component';

const routes: Routes = [
  { path: '', loadChildren: './page/home/home.module#HomeModule' },
  { path: 'home', loadChildren: './page/home/home.module#HomeModule' },
  { path: 'admin', loadChildren: './page/admin/admin.module#AdminModule' },
  { path: 'login-admin', component: LoginAdminComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
