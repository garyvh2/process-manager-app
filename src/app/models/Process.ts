import { Task } from './Task';
import { User } from './user';
import { BaseEntity } from './interface/BaseEntity';

export class Process extends BaseEntity {
    constructor (
        public numeroTramite:   String,
        public description:     String,
        public tasks:           Task[],
        public requester:       User
    ) {
      super();
    }
}
