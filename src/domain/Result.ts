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
import {i18nStore, t} from "../i18n/i18nStore";

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
            case Movement.quit: return t("movementQuitResult", this.ahyaType)
            case Movement.walk: return t("movementWalkResult", this.ahyaType)
            case Movement.run: return t("movementRunResult", this.ahyaType)
        }
    }

    get anxietyExplanation(): string {
        switch (this.anxiety) {
            case Anxiety.yes: return t("anxietyYesResult")
            case Anxiety.no: return t("anxietyNoResult")
        }
    }

    get seasonExplanation(): string {
        const pre = t("seasonResultPre", this.ahyaType, t(this.season))
        switch (this.season) {
            case Season.spring: return pre + t("seasonSpringResult")
            case Season.summer: return pre + t("seasonSummerResult")
            case Season.autumn: return pre + t("seasonAutumnResult")
            case Season.winter: return pre + t("seasonWinterResult")
        }
    }

    get feelingExplanation(): string {
        switch (this.feeling) {
            case Feeling.yes: return t("feelingYesResult")
            case Feeling.no: return ``
        }
    }

    get importanceExplanation(): string {
        const pre = t("importanceResultPre", this.ahyaType, t(this.importance), t(this.importance))
        switch (this.importance) {
            case Importance.money: return pre
            case Importance.family: return pre
            case Importance.love: return pre
            case Importance.talent: return pre
            case Importance.nothing: return t("importanceNothingResult", this.ahyaType)
        }
    }

    get prosOfFriend(): string {
        switch (this.friend) {
            case Friend.yes: return t("propsOfFriendYesResult")
            case Friend.no: return t("propsOfFriendNoResult")
        }
    }

    get consOfFriend(): string {
        switch (this.friend) {
            case Friend.yes: return t("consOfFriendYesResult")
            case Friend.no: return t("consOfFriendNoResult")
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
