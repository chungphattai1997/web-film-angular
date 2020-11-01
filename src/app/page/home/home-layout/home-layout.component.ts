import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let obs: Observable<any>;
    let url = `http://localhost:8080/login`;
    const formData : FormData = new FormData;
    formData.append('username','tom')
    formData.append('password','123')
    obs = this.http.post(url, formData);
    obs.subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

}
