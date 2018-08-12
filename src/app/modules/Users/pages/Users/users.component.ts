import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/User';
import { ColumnGenerator } from '../../../../shared/components/utils/ColumnGenerator';
import { ConnService } from '../../../../shared/providers/database.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  settings: Object;
  users: User[];

  constructor(private ConnServ: ConnService) {}

  ngOnInit() {
    this.ConnServ.getAll<User[]>({
      endpoint: 'users'
    }).subscribe(
      data => {
        this.settings = {
          actions: false,
          columns: ColumnGenerator.generate(data[0], ['userPassword'])
        };
        this.users = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
