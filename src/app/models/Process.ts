import { Task } from './Task';
import { User } from './User';

export class Process {
    constructor (
        public numeroTramite:   String,
        public description:     String,
        public tasks:           Task[],
        public requester:       User
    ) {

    }
}
