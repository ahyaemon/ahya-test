import {Animal} from "./Animal";
import {Color, toAdjective} from "./Color";
import {Movement} from "./Movement";

export class Result {

    constructor(
        readonly animal: Animal,
        readonly color: Color,
        readonly movement: Movement,
    ) {}

    get ahyaType(): string {
        return toAdjective(this.color) + this.animal
    }

    get explanation(): string {
        switch (this.movement) {
            case Movement.quit: return `
                ${this.ahyaType}はあまり動くことを好まず、一日中同じ場所にいることもあります。
                決して信念があって動いていない訳ではなく、ただ面倒だからという理由だけで同じ場所に居続けます。
            `.trim()
            case Movement.walk: return `
                ${this.ahyaType}は動きが遅く、1日で数メートルしか動かないこともあります。
                ただ、命をおびやかすような非常事態や緊急事態の時には、テキパキと素早く行動します。
            `.trim()
            case Movement.run: return `
                ${this.ahyaType}は足が速く、時速200kmで走ることもあると言われています。
                常に動いていて、何事にも積極的です。
                ただ、${this.ahyaType}タイプの人は周りから焦っていられるように見られることもあります。
            `.trim()
        }
    }
}
