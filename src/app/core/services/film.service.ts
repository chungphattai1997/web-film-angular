import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(
    private http: HttpClient
  ) { }

  token = localStorage.getItem('token');

  header = {
    headers: new HttpHeaders()
      .set('Authorization', this.token)
  }

  getAllFilm() {
    let obs: Observable<any>;
    let url = 'http://localhost:8080/film/getall';
    obs = this.http.get(url, this.header);
    return obs;
  }

  getFilmById(id) {
    let obs: Observable<any>;
    let url = `http://localhost:8080/film/${id}`;

    obs = this.http.get(url, this.header);
    return obs;
  }

  addFilm(formData: FormData) {
    let obs: Observable<any>;
    let url = `http://localhost:8080/film/add`;
    obs = this.http.post(url, formData, this.header);
    return obs;
  }

  updateFilm(formData: FormData) {
    let obs: Observable<any>;
    let url = `http://localhost:8080/film/update`;
    obs = this.http.put(url, formData, this.header);
    return obs;
  }

  deleteFilm(id) {
    let obs: Observable<any>;
    const headers = new HttpHeaders().set('Authorization', this.token);
    let url = `http://localhost:8080/film/delete/${id}`;
    obs = this.http.delete(url, {headers, responseType: 'text' });
    return obs;
  }
}
