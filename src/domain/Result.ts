import {Animal} from "./questions/Animal";
import {Color, toAdjective} from "./questions/Color";
import {Movement} from "./questions/Movement";
import {Anxiety} from "./questions/Anxiety";
import {Season} from "./Season";
import {Quote} from "../messages/quote";
import {Feeling} from "./questions/Feeling";
import {Importance} from "./questions/Importance";
import {Friend} from "./questions/Friend";
import {Working} from "./questions/Working";

export class Result {

    constructor(
        readonly animal: Animal,
        readonly color: Color,
        readonly movement: Movement,
        readonly anxiety: Anxiety,
        readonly season: Season,
        readonly feeling: Feeling,
        readonly importance: Importance,
        readonly friend: Friend,
        readonly working: Working,
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

    get seasonExplanation(): string {
        const pre = `${this.ahyaType}タイプの人には${this.season}が好きな人が多く、`
        switch (this.season) {
            case Season.spring: return pre + `
                桜や緑などの自然、新しく始まる生活などに魅力を感じます。
            `.trim()
            case Season.summer: return pre + `
                海や夏祭りに魅力を感じたり、セミの声に郷愁を覚えたりします。
            `.trim()
            case Season.autumn: return pre + `
                ススキやコスモス、紅葉などの自然、他にも栗やさつまいもなどの食べ物、またハロウィンなどのイベントに魅力を感じます。
            `.trim()
            case Season.winter: return pre + `
                基本的に全員雪が好きです。
            `.trim()
        }
    }

    get feelingExplanation(): string {
        switch (this.feeling) {
            case Feeling.yes: return `気分屋でもあるので、季節によらずその日のイベントや出来事にも気持ちが左右されます。`
            case Feeling.no: return ``
        }
    }

    get importanceExplanation(): string {
        const pre = `
            ${this.ahyaType}タイプの人が人生で最も重視するものは${this.importance}です。
            ${this.importance}さえあれば他に何も要らないと思っている人もいます。
        `.trim()
        switch (this.importance) {
            case Importance.money: return pre + `
            `.trim()
            case Importance.family: return pre + `
            `.trim()
            case Importance.love: return pre + `
            `.trim()
            case Importance.talent: return pre + `
            `.trim()
            case Importance.noting: return `
                ${this.ahyaType}タイプの人は、人生において何一つ重要なものは無いと考えています。
            `.trim()

        }
    }

    get pros(): string {
        return `長所は特にありません`
    }

    get cons(): string {
        return `短所は特にありません`
    }
}
