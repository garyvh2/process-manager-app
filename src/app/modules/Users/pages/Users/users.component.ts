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

  constructor(private ConnService: ConnService) { }

  ngOnInit() {

    this.ConnService.getAll({
      endpoint: "User",
    }).subscribe((data: User[]) => {
      this.users = data;
      this.settings = ColumnGenerator.generate(this.users[0]);
    });
  }

}
