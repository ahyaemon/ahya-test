import {getRandom} from "../utils/random";

export class Question<T> {

    private constructor(
        readonly title: string,
        readonly options: T[],
        readonly selected: number | undefined = undefined,
        readonly comments: string[],
    ) {}

    static createUnchecked<T>(title: string, options: T[], comments: string[]): Question<T> {
        return new Question(title, options, undefined, comments)
    }

    optionChecked(option: T): boolean {
        if (this.selected === undefined) {
            return false
        }
        return this.options[this.selected] === option
    }

    check(option: T): Question<T> {
        const selected = this.options.indexOf(option)
        return new Question(this.title, this.options, selected, this.comments)
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
        const comment = getRandom(this.comments)
        return comment.replace('$answer', answer as string)
    }
}
