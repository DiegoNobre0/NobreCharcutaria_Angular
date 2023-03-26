import { Customer } from './../../../model/customer';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';
import { CustomerTypeService } from 'src/app/service/customer-type.service';
import { CustomerType } from 'src/app/model/customerType';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  public customerTypeList: CustomerType[] = [];

  formCustomer!: FormGroup;

  customer!: Customer;

  constructor(
    public customerService: CustomerService,
    public customerTypeService: CustomerTypeService){
  }

  ngOnInit(){
    this.formCustomer = new FormGroup({
      id: new FormControl(0),
      client: new FormControl(null),
      address: new FormControl(null),
      neighborhood: new FormControl(null),
      city: new FormControl(null),
      cep: new FormControl(null),
      identificationNumber: new FormControl(null),
      telephone: new FormControl(null),
      email: new FormControl(null),
      customerTypeId: new FormControl(null),
    });
    this.customerTypeService.GetAll().subscribe((response: any) => {
      this.customerTypeList = response
      console.log(this.customerTypeList)
    });
  }

  Add(){
    this.customer = this.formCustomer.value;
    this.customerService.Add(this.customer).subscribe((response: Customer) => {
      console.log(response)
    });
  }
}
