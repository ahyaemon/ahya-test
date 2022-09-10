import {Animal} from "./Animal";
import {Color} from "./Color";
import {initialAnimalQuestion, initialColorQuestion, Question} from "./Question";
import {Result} from "./Result";

export class Exam {

    private constructor(
        private readonly animalQuestion: Question<Animal>,
        private readonly colorQuestion: Question<Color>,
    ) {}

    static init(): Exam {
        return new Exam(initialAnimalQuestion, initialColorQuestion)
    }

    questions(): Question<any>[] {
        return [this.animalQuestion, this.colorQuestion]
    }

    checked(checkNumber: number, option: any): boolean {
        if (checkNumber === 1) {
            return this.animalQuestion.optionChecked(option)
        } else if (checkNumber === 2) {
            return this.colorQuestion.optionChecked(option)
        }
        return false
    }

    check(checkNumber: number, answer: any): Exam {
        if (checkNumber === 1) {
            return new Exam(
                this.animalQuestion.check(answer),
                this.colorQuestion
            )
        } else if (checkNumber === 2) {
            return new Exam(
                this.animalQuestion,
                this.colorQuestion.check(answer)
            )
        }
        return this
    }

    allQuestionAnswered(): boolean {
        return this.questions().every(q => q.answered())
    }

    firstUncheckedQuestionIndex(): number | undefined {
        const uncheckedQuestions = this.questions().filter(q => !q.answered())
        if (uncheckedQuestions.length === 0) {
            return undefined
        }
        return this.questions().indexOf(uncheckedQuestions[0])
    }

    createQueryParams(): string {
        return this.questions().map(q => q.selected).join('')
    }

    createResultFromAnswerString(params: string): Result {
        const answerIndexes = params.split('').map(s => parseInt(s))
        if (answerIndexes.length !== this.questions().length) {
            throw Error(`invalid query params length. expected: ${this.questions().length}, actual: ${answerIndexes.length}`)
        }

        const animal = this.animalQuestion.options[answerIndexes[0]]
        const color = this.colorQuestion.options[answerIndexes[1]]
        return new Result(animal, color)
    }
}
