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
      type: new FormControl(null)
    });
  }

  Add(){
    this.userType = this.formUserType.value;
    this.userTypeService.Add(this.userType).subscribe((response: UserType) => {
      console.log(response);
    });
  }
}
