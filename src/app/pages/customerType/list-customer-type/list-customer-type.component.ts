import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerType } from 'src/app/model/customerType';
import { CustomerTypeService } from 'src/app/service/customer-type.service';

const CustomerTypeColumns = [
  {
    key: "IdentificationType",
    type: "text",
    label: "Tipo de Cliente"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  },
]

@Component({
  selector: 'app-list-customer-type',
  templateUrl: './list-customer-type.component.html',
  styleUrls: ['./list-customer-type.component.css']
})
export class ListCustomerTypeComponent {
  displayedColumns: string[] = CustomerTypeColumns.map((col) => col.key);
  dataSource = new MatTableDataSource<CustomerType>();
  columnsSchema: any = CustomerTypeColumns;

  customerType!: CustomerType[];

  constructor(public customerTypeService: CustomerTypeService) {
    this.customerType = {} as CustomerType[];
  }

  ngOnInit(): void {
    debugger
    this.customerTypeService.GetAll().subscribe((response: any) => {
      this.dataSource.data = response
      console.log(this.dataSource.data);
    });
  }
}
