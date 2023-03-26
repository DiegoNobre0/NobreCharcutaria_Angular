import { Component } from '@angular/core';
import { Customer} from 'src/app/model/customer';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'src/app/service/customer.service';

const CustomerColumns = [
  {
    key: "client",
    type: "text",
    label: "Nome"
},
{
    key: "address",
    type: "text",
    label: "Endereço"
},
{
  key: "neighborhood",
  type: "text",
  label: "Bairro"
},
{
  key: "city",
  type: "text",
  label: "Cidade"
},
{
  key: "cep",
  type: "text",
  label: "CEP"
},
{
  key: "identificationNumber",
  type: "text",
  label: "CNPJ/CPF"
},
{
  key: "telephone",
  type: "text",
  label: "Telefone"
},
{
  key: "email",
  type: "text",
  label: "Email"
},
{
  key: "customerTypeId",
  type: "text",
  label: "Tipo de cliente"
},
{
  key: "isEdit",
  type: "isEdit",
  label: ""
},

]


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent {
  displayedColumns: string[] = CustomerColumns.map((col) => col.key);
  dataSource = new MatTableDataSource<Customer>();
  columnsSchema: any = CustomerColumns;

  customer!: Customer[];

  constructor(public customerService: CustomerService) {
    this.customer = {} as Customer[];
  }

  ngOnInit(): void {
    debugger
    this.customerService.GetAll().subscribe((response: any) => {
      this.dataSource.data = response
      console.log(this.dataSource.data);
    });
  }
}
