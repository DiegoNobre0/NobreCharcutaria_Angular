import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  formUser!: FormGroup;

  user!: User;

  constructor(public userService: UserService){
  }

  ngOnInit(): void {
    this.formUser = new FormGroup({
      id: new FormControl(0),
      name: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
    });
  }

  Add(){
    this.user = this.formUser.value;
    this.userService.Add(this.user).subscribe((response: User) => {
      console.log(response);
    });
  }
}
