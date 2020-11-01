import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(
    private router: Router,
    private authGuard: AuthGuard,
    private userService: UserService,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  login(value) {
    let token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiYmW1JPTEVfQURNSU5dIiwiZXhwIjoxNTcxOTM4NTMzfQ.i6t7RAYtaLRwadUvihJUC_GvuMkbmZeaGH-jgNWG8FVLFcaoa_1wczct_3iRnK_xIRN6sjyYQY_fI8A9QYClbg';
    localStorage.setItem('token', token);
    let temp = this.userService.checkLogin(value.username, value.password).subscribe(res => {
      if (res.role === 'ADMIN') {
        localStorage.setItem('admin', JSON.stringify(res));
        this.router.navigate(['/admin']);
      } else {
        alert('Tài khoản không có quyền admin!');
      }
      temp.unsubscribe();
    }, err => {
      console.log(err);
      alert('Sai thông tin đăng nhập!');
      temp.unsubscribe();
    })
  }
} 