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
  selector: 'app-delete-customer-type',
  templateUrl: './delete-customer-type.component.html',
  styleUrls: ['./delete-customer-type.component.css']
})
export class DeleteCustomerTypeComponent {
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

  delete(id: number) {
    this.customerTypeService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (u: CustomerType) => u.id !== id
      );
    });
  }
}
