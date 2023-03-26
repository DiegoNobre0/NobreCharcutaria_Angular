import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Login } from 'src/app/model/login';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  login!: Login;

  constructor(
    public loginService: LoginService,
    public router: Router
    ){}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

  loginUSer() {
    debugger
    this.loginService.signIn(this.formLogin.value);
  }
}
