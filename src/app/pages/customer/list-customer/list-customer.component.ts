import { Component } from '@angular/core';
import { Customer} from 'src/app/model/customer';
import { MatTableDataSource } from '@angular/material/table';


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
  key: "address",
  type: "text",
  label: "Endereço"
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
}
