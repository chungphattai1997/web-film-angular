import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn(value) {
    let temp = this.userService.checkLogin(value.username, value.password).subscribe(res => {
      if (!res.is_admin) {
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(['/']);
      } else {
        alert('Đăng nhập với quyền admin!');
        localStorage.setItem('admin', JSON.stringify(res));
        this.router.navigate(['/admin']);
      }
      temp.unsubscribe();
    }, err => {
      console.log(err);
      alert('Sai thông tin đăng nhập!');
      temp.unsubscribe();
    })
  }
  
}
