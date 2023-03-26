import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { CustomerType } from 'src/app/model/customerType';
import { CustomerTypeService } from 'src/app/service/customer-type.service';

@Component({
  selector: 'app-add-customer-type',
  templateUrl: './add-customer-type.component.html',
  styleUrls: ['./add-customer-type.component.css']
})
export class AddCustomerTypeComponent {
  formCustomerType!: FormGroup;

  customerType!: CustomerType;

  constructor(public customerTypeService: CustomerTypeService){
  }

  ngOnInit(): void {
    this.formCustomerType = new FormGroup({
      id: new FormControl(0),
      identificationType: new FormControl(null),
    });
  }

  Add(){
    this.customerType = this.formCustomerType.value;
    this.customerTypeService.Add(this.customerType).subscribe((response: CustomerType) => {
      console.log(response);
    });
  }
}
