import { User } from "./User";
import { Task } from "./Task";

export class ProcessHistory {
    constructor (
        public dateTimeHistory: Date,
        public asignee:         User,
        public taskDone:        Task
    ) {

    }
}