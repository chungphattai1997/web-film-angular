import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @ViewChild('formSignUp') formSignUp: NgForm;
  constructor() { }

  ngOnInit() {
  }
  checkConfirmPassword(pass, passConfirm) : boolean {
    if(pass != passConfirm) {
      //tạo ra 1 lỗi cho form
      this.formSignUp.control.setErrors({'confirmPassword': true });
      this.formSignUp.controls['email'].setErrors({'incorrect': true});
      return true;
    }
  }

  signUp(value) {
    console.log(value);
  }
}
