import {Animal} from "./Animal";
import {Color, toAdjective} from "./Color";

export class Result {

    constructor(
        readonly animal: Animal,
        readonly color: Color,
    ) {}

    get ahyaType(): string {
        return toAdjective(this.color) + this.animal
    }
}
