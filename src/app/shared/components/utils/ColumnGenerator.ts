import { BaseEntity } from "../../../models/interface/BaseEntity";
import { chain, without, keys } from "underscore";
import { CustomRenderComponent } from "./CustomRender";
import { Humanizer } from "./humanize/Humanizer";
import { HumanizeFactory } from "./humanize/HumanizeFactory";

export class ColumnGenerator {
    constructor() { }

    public static generate(object: BaseEntity, omit: string[] = []): Object {
        const PROPERTIES = without.apply(null, [keys(object), ...omit]);
        const TitleHumanizer = (new HumanizeFactory()).create("String");

        let columns = chain(PROPERTIES)
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

        return columns;
    }
}