import { BaseEntity } from './interface/BaseEntity';
import { UserType } from './UserType';

export class User extends BaseEntity {
    constructor (
        public userId:      String,
        public userName:    String,
        public userEmail:   String,
        public userGroup:   UserType
    ) {
      super();
    }
}
