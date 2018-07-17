import { BaseEntity } from './interface/BaseEntity';

export class User extends BaseEntity {
    constructor (
        public userId:      String,
        public userName:    String,
        public userEmail:   String
    ) {
      super();
    }
}
