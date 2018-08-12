import { Process } from './../../../../models/Process';
import { Component, OnInit } from '@angular/core';
import { ColumnGenerator } from '../../../../shared/components/utils/ColumnGenerator';
import { ConnService } from '../../../../shared/providers/database.service';


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})

export class ProcessComponent implements OnInit {
  settings: Object;
  processes: Process[];


  constructor(private ConnServ: ConnService) { }

  ngOnInit() {
    this.ConnServ.getAll<Process[]>({
      endpoint: 'processes/getAll',
    }).subscribe(
      data => {
        this.settings = {
          actions: true,
          columns: ColumnGenerator.generate(data[0])
        };
        this.processes = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getUser() {
    return localStorage.getItem('UserLogged');
  }

}
