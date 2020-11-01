import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';
import { Category } from 'src/app/core/models/category';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { FilmService } from 'src/app/core/services/film.service';
import { Film } from 'src/app/core/models/film';

@Component({
  selector: 'app-film-add',
  templateUrl: './film-add.component.html',
  styleUrls: ['./film-add.component.css']
})
export class FilmAddComponent implements OnInit {

  listCategory: Array<Category> = [];
  selectedImage: File = null;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private filmService: FilmService,
    private categoryService: CategoryService
  ) { }

  @ViewChild('addFilmForm') addFilmForm: NgForm;

  ngOnInit() {
    this.categoryService.getAllCategory().subscribe(res => {
      this.listCategory = res;
    }, err => {
      console.log(err);
    })
  }

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      this.selectedImage = event.target.files[0]
    }
  }

  onCancel() {
    this.router.navigate(['/admin/film-management']);
  }

  addFilm(value) {
    console.log(value);
    let film: Film = new Film(value.title, value.trailer, value.detail, value.dateOpening, value.rate, value.idCategory);
    const formData = new FormData();

    formData.append('image', this.selectedImage, this.selectedImage.name);
    formData.append('film', JSON.stringify(film));

    console.log(film);
    console.log(formData.get('film'));
    
    this.filmService.addFilm(formData).subscribe(res => {
      this.toastr.success(`Thêm phim ${film.title} thành công!`);
      console.log("done");
      this.router.navigate(['/admin/film-management']);
    }, err => {
      console.log(err);
    });
  }

}
