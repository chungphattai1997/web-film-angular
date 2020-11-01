import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/core/services/film.service';
import { Film } from 'src/app/core/models/film';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-film-management',
  templateUrl: './film-management.component.html',
  styleUrls: ['./film-management.component.css']
})
export class FilmManagementComponent implements OnInit {

  listFilm: Array<Film> = [];
  idFilm: number;

  constructor(
    private filmService: FilmService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.render();
  }

  render() {
    this.filmService.getAllFilm().subscribe(res => {
      this.listFilm = res;
      console.log(this.listFilm);
    }, err => {
      console.log(err);
      console.log("User authentication failed!");
    })
  }

  deleteFilm(id, title) {
    this.filmService.deleteFilm(id).subscribe(res => {
      console.log(res);
      this.toastr.success(`Xóa phim ${title} thành công!`);
      this.render();
    }, err => {
      console.log(err);
    })
  }

  confirmDel(id, title) {
    Swal.fire({
      title: `Bạn có chắc chắn muốn xóa phim ${title}?`,
      text: 'Xóa sẽ không thể khôi phục lại!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'XÓA',
      cancelButtonText: 'HỦY'
    }).then((result) => {
      if (result.value) {
        this.deleteFilm(id, title);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.toastr.error('Hủy xóa!');
        this.render();
      }
    })
  }
}
