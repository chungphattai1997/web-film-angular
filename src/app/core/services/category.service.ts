import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  token = localStorage.getItem('token');

  header = {
    headers: new HttpHeaders()
      .set('Authorization', this.token)
  }

  getAllCategory() {
    let obs: Observable<any>;
    let url = 'http://localhost:8080/category/getall';
    obs = this.http.get(url, this.header);
    return obs;
  }

  addCategory(data) {
    let obs: Observable<any>;
    let url = 'http://localhost:8080/category/add';
    obs = this.http.post(url, data, this.header);
    return obs;
  }

  updateCategory(data) {
    let obs: Observable<any>;
    let url = 'http://localhost:8080/category/update';
    obs = this.http.put(url, data, this.header);
    return obs;
  }

  deleteCategory(id) {
    let obs: Observable<any>;
    const headers = new HttpHeaders().set('Authorization', this.token);
    let url = `http://localhost:8080/category/delete/${id}`;
    obs = this.http.delete(url, { headers, responseType: 'text' });
    return obs;
  }
}
