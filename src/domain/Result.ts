import {Animal, animalName} from "./questions/Animal";
import {Color, toAdjective} from "./questions/Color";
import {Movement} from "./questions/Movement";
import {Anxiety} from "./questions/Anxiety";
import {Season} from "./questions/Season";
import {Quote} from "../messages/quote";
import {Feeling} from "./questions/Feeling";
import {Importance} from "./questions/Importance";
import {Friend} from "./questions/Friend";
import {Working} from "./questions/Working";
import {i18nStore} from "../i18n/i18nStore";

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
        if (i18nStore.isEN()) {
            return toAdjective(this.color) + ' ' + animalName(this.animal).toUpperCase()
        }
        return toAdjective(this.color) + animalName(this.animal)
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
            case Importance.nothing: return `
                ${this.ahyaType}タイプの人は、人生において何一つ重要なものは無いと考えています。
            `.trim()

        }
    }

    get prosOfFriend(): string {
        switch (this.friend) {
            case Friend.yes: return `
                誰とでもすぐに仲良くなれるため、広い人脈を持っています。
                さまざまなことにチャレンジする好奇心も持ち合わせています。
            `.trim()
            case Friend.no: return `
                警戒心が強く、危険な人や物から遠ざかろうとします。
                友達は少ないですが、深い関係を築いていくことができます。
            `.trim()
        }
    }

    get consOfFriend(): string {
        switch (this.friend) {
            case Friend.yes: return `
                広く浅い友好関係を築きがちです。
                八方美人なところもあるため、いざと言う時に頼れる人が少ないかもしれません。
            `.trim()
            case Friend.no: return `
                緊張しやすい性格のため、一歩を踏み出せないことがあります。
            `.trim()
        }
    }

    get propsOfWorking(): string {
        switch (this.working) {
            case Working.yes: return `
                また、他人に頼らず一人で物事を成し遂げること${this.friend === Friend.yes ? 'も' : 'が'}得意で、
                いつの間にか凄まじい成果を発揮していることもあります。
            `.trim()
            case Working.no: return `
                また、協調性があり、${this.friend === Friend.no ? '実は' : ''}大人数での作業が得意なのも特徴です。
                ${this.ahyaType}タイプの人は組織のリーダーにも多く見られます。
            `.trim()
        }
    }

    get consOfWorking(): string {
        switch (this.working) {
            case Working.yes: return `
                大人数での作業が苦手なため、チームで仕事をする時にストレスを感じる人も多いようです。
            `.trim()
            case Working.no: return `
                人に頼りがちなところもあり、いざ一人で何かを成し遂げようとした時に、何から初めて良いのか分からないこともあります。
            `.trim()
        }
    }
}
