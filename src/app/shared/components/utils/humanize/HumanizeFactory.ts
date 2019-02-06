import { Humanizer } from "./Humanizer";
import { HumanizeList } from "./HumanizerList";
import { HumanizeString } from "./HumanizerString";
import { HumanizeDefault } from "./HumanizerDefault";

export class HumanizeFactory {
    create(type: string): Humanizer {
        switch(type) {
            case "Array":
                return new HumanizeList();
            case "String":
                return new HumanizeString();
            default:
                return new HumanizeDefault();
        }
    }
}