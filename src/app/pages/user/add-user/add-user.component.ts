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
