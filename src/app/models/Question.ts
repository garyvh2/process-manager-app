export class Question {
    constructor (
        public questionText:    String,
        public type:            String,
        public AnswersToSelect: String[],
        public UserAnswer:      String
    ) {

    }
}