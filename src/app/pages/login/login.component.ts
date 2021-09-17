import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UserService} from "../../shared/services/user/user.service";
import {IUser} from "../../shared/interfaces/user";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  admin: Array<IUser> = [];

  formLogin = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  constructor(
    private userServices: UserService
  ) {
  }

  ngOnInit(): void {
      this.getUser()
  }

  getUser(): void {
    this.userServices.getUser().subscribe(res => {
      this.admin = res;
    })
  }

  login(): void {
    const [admin] = this.admin
    const {username, password} = this.formLogin.value
    if (username === admin.name && +password === admin.password) {
      localStorage.setItem('toggle', JSON.stringify(true))
    } else {
      alert(`неправильне ім’я ${username}  користувача або пароль ${password}`)
    }
  }
}
