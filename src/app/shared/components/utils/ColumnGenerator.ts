import { BaseEntity } from "../../../models/interface/BaseEntity";
import { chain, keys } from "underscore";
import { CustomRenderComponent } from "./CustomRender";
import { Humanizer } from "./humanize/Humanizer";
import { HumanizeFactory } from "./humanize/HumanizeFactory";

export class ColumnGenerator {
    constructor () {}

    public static generate(object: BaseEntity): Object {
        const PROPERTIES = keys(object);       
        const TitleHumanizer = (new HumanizeFactory()).create("String");

        let settings = chain(PROPERTIES)
            .map(EL => {
                return {
                    id: EL,
                    title: TitleHumanizer.process(EL),
                    type: "custom",
                    renderComponent: CustomRenderComponent
                }
            })
            .indexBy(EL => EL.id)
            .value();

        return settings;
    }
}