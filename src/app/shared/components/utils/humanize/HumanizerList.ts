import * as humanizeList from "humanize-list";
import { Humanizer } from "./Humanizer";

export class HumanizeList implements Humanizer {
    process(value: string): string {
        return humanizeList(value);
    }   
}