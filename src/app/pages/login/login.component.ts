import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Login } from 'src/app/model/login';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  login!: Login;

  constructor(public loginService: LoginService){
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      id: new FormControl(0),
      name: new FormControl(null),
      typeId: new FormControl(null),
      force: new FormControl(null),
      defense: new FormControl(null),
      average: new FormControl(0),
    });
  }

  Add(){
    // this.customer = this.formCustomer.value;
    // this.customerService.add(this.customer).subscribe((response: Customer) => {
    //   console.log(response);
    // });
  }
}
