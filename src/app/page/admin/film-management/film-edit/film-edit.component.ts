import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/core/models/film';
import { FilmService } from 'src/app/core/services/film.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.css']
})
export class FilmEditComponent implements OnInit {

  currentFilm: any = {};
  listCategory = [];
  selectedValue = null;
  selectedImage: File = null;
  checkFileChange: boolean = false;

  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute,
    private filmService: FilmService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(res => {
      this.filmService.getFilmById(res.id).subscribe(res => {
        this.currentFilm = res;

        const url = 'data:image/jpg;base64,' + res.image + '';
        fetch(url)
          .then(res => res.blob())
          .then(blob => {
            this.selectedImage = new File([blob], "image")
          })

        this.selectedValue = this.currentFilm.id_category;
      })
    }, err => {
      console.log(err);
    })
    this.categoryService.getAllCategory().subscribe(res => {
      this.listCategory = res;
    }, err => {
      console.log(err);
    })
  }

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];
      this.checkFileChange = true;
    }
  }

  onChangeSelect(value) {
    this.currentFilm.id_category = value;
  }

  updateFilm() {
    const formData = new FormData();
    formData.append('image', this.selectedImage);
    formData.append('film', JSON.stringify(this.currentFilm));

    this.filmService.updateFilm(formData).subscribe(res => {
      this.router.navigate(['/admin/film-management']);
    }, err => {
      console.log(err);
    })
  }
  onCancel() {
    this.router.navigate(['/admin/film-management']);
  }
}
