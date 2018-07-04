import { BaseEntity } from './interface/BaseEntity';

export class UserType extends BaseEntity {
    constructor (
        public userTypeId:      String,
        public usertypeName:    String
    ) {
      super();
    }
}
