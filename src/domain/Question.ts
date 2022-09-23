import {t} from "../i18n/i18nStore";
import {I18nKey} from "../i18n/i18n";

export class Question<T extends string> {

    private constructor(
        readonly title: I18nKey,
        readonly options: T[],
        readonly selected: number | undefined = undefined,
        readonly getComment: (options: T) => string,
    ) {}

    static createUnchecked<T extends string>(title: I18nKey, options: T[], getComment: (options: T) => string): Question<T> {
        return new Question(title, options, undefined, getComment)
    }

    optionChecked(option: T): boolean {
        if (this.selected === undefined) {
            return false
        }
        return this.options[this.selected] === option
    }

    check(option: T): Question<T> {
        const selected = this.options.indexOf(option)
        return new Question(this.title, this.options, selected, this.getComment)
    }

    answered(): boolean {
        return this.selected !== undefined
    }

    get selectedValue(): T {
        if (this.selected === undefined) {
            throw Error()
        }
        return this.options[this.selected]
    }

    comment(answer: T): string {
        return this.getComment(answer)
    }

    get translatedTitle(): string {
        return t(this.title as any)
    }
}
