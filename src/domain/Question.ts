import {Color} from "./Color";
import {Animal} from "./Animal";

export class Question<T> {

    private constructor(
        readonly title: string,
        readonly options: T[],
        readonly selected: number | undefined = undefined,
    ) {}

    static createUnchecked<T>(title: string, options: T[]): Question<T> {
        return new Question(title, options, undefined)
    }

    optionChecked(option: T): boolean {
        if (this.selected === undefined) {
            return false
        }
        return this.options[this.selected] === option
    }

    check(option: T): Question<T> {
        const selected = this.options.indexOf(option)
        return new Question(this.title, this.options, selected)
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
}



