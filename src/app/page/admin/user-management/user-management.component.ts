import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  listUser: Array<any> = [];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    let temp = this.userService.getAllUser().subscribe(res => {
      this.listUser = res;
      console.log(this.listUser);
      temp.unsubscribe();
    }, err => {
      console.log(err);
      temp.unsubscribe();
    })
  }

}
