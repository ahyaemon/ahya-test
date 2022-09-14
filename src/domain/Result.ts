import {Animal} from "./questions/Animal";
import {Color, toAdjective} from "./questions/Color";
import {Movement} from "./questions/Movement";
import {Anxiety} from "./questions/Anxiety";
import {Season} from "./Season";
import {Quote} from "../messages/quote";
import {Feeling} from "./questions/Feeling";
import {Importance} from "./questions/Importance";

export class Result {

    constructor(
        readonly animal: Animal,
        readonly color: Color,
        readonly movement: Movement,
        readonly anxiety: Anxiety,
        readonly season: Season,
        readonly feeling: Feeling,
        readonly importance: Importance,
        readonly quote: Quote,
    ) {}

    get ahyaType(): string {
        return toAdjective(this.color) + this.animal
    }

    get movementExplanation(): string {
        switch (this.movement) {
            case Movement.quit: return `
                ${this.ahyaType}タイプの人は出不精で、一日中家にいることもあります。
            `.trim()
            case Movement.walk: return `
                ${this.ahyaType}タイプの人はマイペースで、何事も自分のペースで進めます。
                ただ、命をおびやかすような非常事態や緊急事態の時には、テキパキと素早く行動します。
            `.trim()
            case Movement.run: return `
                ${this.ahyaType}タイプの人は常に何かしら行動していて、何事にも積極的です。
                ただ、周りからは焦っているように見られることもあります。
            `.trim()
        }
    }

    get anxietyExplanation(): string {
        switch (this.anxiety) {
            case Anxiety.yes: return `
                また、人一倍心配になりやすく、些細なことでもなかなか決断ができなかったり、他人の行動を気にしてしまいます。
            `.trim()
            case Anxiety.no: return `
                また、些細なことは気にならない性格で、それによって多少のミスが発生しても前向きであり続けることができます。
            `.trim()
        }
    }
}
