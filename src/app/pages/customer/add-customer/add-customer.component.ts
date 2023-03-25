import { Customer } from './../../../model/customer';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  formCustomer!: FormGroup;

  customer!: Customer;

  constructor(public customerService: CustomerService){
  }

  ngOnInit(): void {
    this.formCustomer = new FormGroup({
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
