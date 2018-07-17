import { BaseEntity } from './interface/BaseEntity';

export class Question extends BaseEntity {
    constructor (
        public questionText:    String,
        public type:            String,
        public AnswersToSelect: String[],
        public UserAnswer:      String
    ) {
      super();
    }
}
