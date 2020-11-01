import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmItemComponent } from './film-item/film-item.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';

@NgModule({
  declarations: [
    FilmItemComponent,
    FilmListComponent,
    FilmDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilmItemComponent,
    FilmListComponent,
    FilmDetailComponent
  ]
})
export class FilmModule { }
