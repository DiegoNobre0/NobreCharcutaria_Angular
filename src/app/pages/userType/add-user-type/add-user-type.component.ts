import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { UserType } from 'src/app/model/userType';
import { UserTypeService } from 'src/app/service/user-type.service';

@Component({
  selector: 'app-add-user-type',
  templateUrl: './add-user-type.component.html',
  styleUrls: ['./add-user-type.component.css']
})
export class AddUserTypeComponent {
  formUserType!: FormGroup;

  userType!: UserType;

  constructor(public userTypeService: UserTypeService){
  }

  ngOnInit(): void {
    this.formUserType = new FormGroup({
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
