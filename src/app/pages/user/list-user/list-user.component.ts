import { UserService } from 'src/app/service/user.service';
import { User } from './../../../model/user';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


const UserColumns = [
  {
    key: "name",
    type: "text",
    label: "Nome"
  },
  {
    key: "email",
    type: "text",
    label: "Email"
  },
  {
    key: "password",
    type: "text",
    label: "Password"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  },
]

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  displayedColumns: string[] = UserColumns.map((col) => col.key);
  dataSource = new MatTableDataSource<User>();
  columnsSchema: any = UserColumns;

  user!: User[];

  constructor(public userService: UserService) {
    this.user = {} as User[];
  }

  ngOnInit(): void {
    debugger
    this.userService.GetAll().subscribe((response: any) => {
      this.dataSource.data = response
      console.log(this.dataSource.data);
    });
  }
}
