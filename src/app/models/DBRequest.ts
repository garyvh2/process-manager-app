import { BaseEntity } from './interface/BaseEntity';

export class DBRequest<T extends BaseEntity> {
  constructor (
    public type: T
  ) {

  }
}
