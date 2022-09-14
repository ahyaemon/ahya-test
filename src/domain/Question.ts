export class Question<T> {

    private constructor(
        readonly title: string,
        readonly options: T[],
        readonly selected: number | undefined = undefined,
        readonly getComment: (options: T) => string,
    ) {}

    static createUnchecked<T>(title: string, options: T[], getComment: (options: T) => string): Question<T> {
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
}
