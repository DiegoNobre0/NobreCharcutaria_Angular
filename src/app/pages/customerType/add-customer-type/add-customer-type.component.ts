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

  cstomerType!: CustomerType;

  constructor(public customerTypeService: CustomerTypeService){
  }

  ngOnInit(): void {
    this.formCustomerType = new FormGroup({
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
