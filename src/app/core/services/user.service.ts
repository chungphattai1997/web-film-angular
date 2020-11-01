import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  token = localStorage.getItem('token');

  header = {
    headers: new HttpHeaders()
      .set('Authorization', this.token)
  }

  getAllUser() {
    let obs: Observable<any>;
    let url = 'http://localhost:8080/user/getall';
    obs = this.http.get(url, this.header);
    return obs;
  }

  checkLogin(username: string, password: string) {
    let obs: Observable<any>;
    let url = `http://localhost:8080/user/login?username=${username}&password=${password}`;
    obs = this.http.get(url, this.header);
    return obs;
  }

  addUser(user: User) {
    let obs: Observable<any>;
    let url = `http://localhost:8080/user/add`;
    obs = this.http.post(url, user, this.header);
    return obs;
  }

  updateUser(user: User) {
    let obs: Observable<any>;
    let url = `http://localhost:8080/user/update`;
    obs = this.http.put(url, user, this.header);
    return obs;
  }

  deleteUser(username: string) {
    let obs: Observable<any>;
    let url = `http://localhost:8080/user/delete/${username}`;
    obs = this.http.delete(url, this.header);
    return obs;
  }
}
