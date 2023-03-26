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
  selector: 'app-list-user-type',
  templateUrl: './list-user-type.component.html',
  styleUrls: ['./list-user-type.component.css']
})
export class ListUserTypeComponent {
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
}
