import humanizeString = require("humanize-string");
import { Humanizer } from "./Humanizer";

export class HumanizeString implements Humanizer {
    process(value: string): string {
        return humanizeString(value);
    }   
}