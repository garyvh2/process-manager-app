import { User } from './User';
import { Question } from './Question';
import { UserType } from './UserType';
import { Estado } from './enums/Estado';
import { BaseEntity } from './interface/BaseEntity';

export class Task extends BaseEntity {
    constructor (
        public asignee:     User,
        public description: String,
        public questions:   Question[],
        public userGroup:   UserType,
        public taskStatus:  Estado
    ) {
      super();
    }
}
