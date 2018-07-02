import { User } from "./user";
import { Question } from "./Question";
import { UserType } from "./UserType";
import { Estado } from "./enums/Estado";

export class Task {
    constructor (
        public asignee:     User,
        public description: String,
        public questions:   Question[],
        public userGroup:   UserType,
        public taskStatus:  Estado
    ) {

    }
}