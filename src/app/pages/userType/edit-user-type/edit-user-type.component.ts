import { UserType } from 'src/app/model/userType';
import { UserTypeService } from 'src/app/service/user-type.service';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


const UserTypeColumns = [
  {
    key: "type",
    type: "text",
    label: "Tipo de Usuario"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  },
]

@Component({
  selector: 'app-edit-user-type',
  templateUrl: './edit-user-type.component.html',
  styleUrls: ['./edit-user-type.component.css']
})
export class EditUserTypeComponent {
  displayedColumns: string[] = UserTypeColumns.map((col) => col.key);
  dataSource = new MatTableDataSource<UserType>();
  columnsSchema: any = UserTypeColumns;

  userType!: UserType[];

  constructor(public userTypeService: UserTypeService) {
    this.userType = {} as UserType[];
  }

  ngOnInit(): void {
    debugger
    this.userTypeService.GetAll().subscribe((response: any) => {
      this.dataSource.data = response
      console.log(this.dataSource.data);
    });
  }

  editRow(row: UserType) {
    debugger
    this.userTypeService.update(row).subscribe(() => (row.isEdit = false));
  }
}
