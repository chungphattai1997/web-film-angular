import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FilmModule } from './film/film.module';

const homeRoutes: Routes = [
  { path: '', component: HomeLayoutComponent },
  { path: 'login', loadChildren: () => LoginModule }
];

@NgModule({
  declarations: [
    HomeLayoutComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    FilmModule,
    RouterModule.forChild(homeRoutes),
  ],
})
export class HomeModule { }
