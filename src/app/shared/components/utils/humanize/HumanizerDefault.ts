import { Humanizer } from "./Humanizer";

export class HumanizeDefault implements Humanizer {
    process(value: string): string {
        return JSON.stringify(value);
    }   
}