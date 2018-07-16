import { User } from "./User";
import { Task } from "./Task";
import { BaseEntity } from './interface/BaseEntity';

export class ProcessHistory extends BaseEntity {
    constructor (
        public dateTimeHistory: Date,
        public asignee:         User,
        public taskDone:        Task
    ) {
      super();
    }
}
