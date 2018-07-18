import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/User';
import { ColumnGenerator } from '../../../../shared/components/utils/ColumnGenerator';
import { ConnService } from '../../../../shared/providers/database.service';
import { UserType } from '../../../../models/UserType';

@Component({
  selector: 'app-users-types',
  templateUrl: './userstype.component.html',
  styleUrls: ['./userstype.component.css']
})
export class UsersTypesComponent implements OnInit {
  settings: Object;
  usertypes: UserType[];

  constructor(private ConnService: ConnService) { }

  ngOnInit() {
    this.ConnService.getAll<UserType[]>({
      endpoint: "usertypes",
    }).subscribe(
      data => {
        this.settings = {
          actions: false,
          columns: ColumnGenerator.generate(data[0])
        };
        this.usertypes = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
