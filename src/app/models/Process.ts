import { Task } from './Task';
import { User } from './user';

export class Process {
    constructor (
        public numeroTramite:   String,
        public description:     String,
        public tasks:           Task[],
        public requester:       User
    ) {

    }
}
