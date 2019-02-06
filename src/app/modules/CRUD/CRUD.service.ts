import { SmartTableConfig } from './../../models/SmartTableConfig';
import { ColumnGenerator } from './../../shared/components/utils/ColumnGenerator';
import { Injectable } from '@angular/core';
import { ConnService } from '../../shared/providers/database.service';
import { BaseEntity } from '../../models/interface/BaseEntity';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDService<T extends BaseEntity> {
  subject = new Subject<SmartTableConfig>();

  constructor(private ConnServ: ConnService) {}

  fillTable (endpoint: String, omit: string[]): Observable<SmartTableConfig> {
    this.ConnServ.getAll<T[]>({
      endpoint: endpoint
    }).subscribe(
      data => {
        const settings = {
          actions: false,
          columns: ColumnGenerator.generate(data[0], omit)
        };

        this.subject.next({ data, settings });
      },
      error => {
        console.log(error);
      }
    );
    return this.subject.asObservable();
  }
}
